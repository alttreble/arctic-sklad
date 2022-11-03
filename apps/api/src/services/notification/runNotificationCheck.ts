import { Context } from '@app/context';
import { NotificationListener } from '@prisma/client';
import item from '@app/services/item/item';
import { Item, NotificationCondition } from '@app/types';
import get from '@app/utils/get';
import logger from '@app/logger';


export type TimeBeforeValue = {
	value: number
	type: 'hours' | 'days' | 'months' | 'years'
	// Date to compare against. If date is not defined, compare against current date
	date?: string | undefined
}

function lteConditionMet(condition: NotificationCondition, item: Item) {
	const attributeValue = get(item, condition.attribute);
	if (Array.isArray(attributeValue)) {
		logger.info(attributeValue)
		return attributeValue.some(element => +element <= +condition.value);
	}
	return +attributeValue <= +condition.value;
}

function ltConditionMet(condition: NotificationCondition, item: Item) {
	const attributeValue = get(item, condition.attribute);
	if (Array.isArray(attributeValue)) {
		return attributeValue.some(element => +element < +condition.value);
	}
	return +attributeValue < +condition.value;
}

function timeBefore(time: Date, timeBeforeValue: TimeBeforeValue) {
	if (timeBeforeValue?.type === 'months') {
		time.setMonth(time.getMonth() - timeBeforeValue.value);
	} else if (timeBeforeValue?.type === 'days') {
		time.setDate(time.getDate() - timeBeforeValue.value);
	}
	return time;
}

function timeBeforeConditionMet(condition: NotificationCondition, item: Item) {
	const timeBeforeValue = JSON.parse(condition.value) as TimeBeforeValue;
	if (timeBeforeValue?.value === undefined || timeBeforeValue?.type === undefined) return;

	const targetDate = timeBeforeValue?.date && new Date(timeBeforeValue.date) || Date.now();
	const attributeValue = get(item, condition.attribute);

	if (Array.isArray(attributeValue)) {
		return attributeValue.some(element => {
				const attributeElementDate = new Date(element);
				return targetDate > timeBefore(attributeElementDate, timeBeforeValue);
			}
		);
	}

	const attributeElementDate = new Date(attributeValue as unknown as string);
	return targetDate > timeBefore(attributeElementDate, timeBeforeValue);
}

function conditionsMet(conditions: NotificationCondition[], item: Item) {
	return conditions.some(condition => {
		if (condition.operator === 'LTE') {
			return lteConditionMet(condition, item);
		}
		if (condition.operator === 'LT') {
			return ltConditionMet(condition, item);
		}
		if (condition.operator === 'TIME_BEFORE') {
			return timeBeforeConditionMet(condition, item);
		}
	});
}

async function createNotificationForItem(context: Context, targetItem: Item, listener: NotificationListener) {
	const { prisma } = context;

	return prisma.notification.upsert({
		where: {
			itemId_type: {
				itemId: targetItem.id,
				type: listener.type
			}
		},
		create: {
			itemId: targetItem.id,
			type: listener.type,
			severity: listener.severity,
			title: listener.title,
			description: listener.description
		},
		update: {}
	});
}

async function removeNotificationForItem(context: Context, targetItem: Item, listener: NotificationListener) {
	const { prisma } = context;

	try {
		await prisma.notification.delete({
			where: {
				itemId_type: {
					itemId: targetItem.id,
					type: listener.type
				}
			}
		});
	} catch (e) {
		return null;
	}
}

export default async function runNotificationCheck(context: Context, listener: NotificationListener) {
	const { conditions, itemId } = listener;

	const targetItem = await item(context, itemId, { entries: true, uom: true }) as unknown as Item;

	if (!targetItem) return;

	if (conditionsMet(conditions as unknown as NotificationCondition[], targetItem)) {
		logger.info(`Conditions met. Creating notification for item ${targetItem.id}`);
		return createNotificationForItem(context, targetItem, listener).then();
	}

	return removeNotificationForItem(context, targetItem, listener).then();
}
