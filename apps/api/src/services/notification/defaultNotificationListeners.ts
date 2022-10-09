import { Context } from '@app/context';
import { NotificationSeverity } from '@app/types';
import runNotificationCheck, { TimeBeforeValue } from '@app/services/notification/runNotificationCheck';
import { NotificationListener } from '@prisma/client';

function buildHasExpiredEntriesNotificationListener(context: Context, itemId: number) {
	return {
		type: 'hasExpired',
		title: 'Изтекъл срок',
		severity: NotificationSeverity.Error,
		conditions: [
			{
				attribute: 'entries.expirationDate',
				operator: 'TIME_BEFORE',
				value: JSON.stringify({value:"6", type: "months"})
			}
		],
		schedule: '0 0 * * *',
		itemId
	};
}

function buildLowQuantityNotificationListener(context: Context, itemId: number) {
	return {
		type: 'lowQuantity',
		title: 'Ниско количество',
		severity: NotificationSeverity.Warning,
		conditions: [
			{
				attribute: 'totalQuantity',
				operator: 'LTE',
				value: '1'
			}
		],
		itemId
	};
}

function buildExpiredForNextExpedition(context: Context, itemId: number) {
	return {
		type: "expiredForNextExpedition",
		title: "Годно за следваща експедиция",
		severity: NotificationSeverity.Error,
		conditions: [
			{
				attribute: 'entries.expirationDate',
				operator: 'TIME_BEFORE',
				value: JSON.stringify({value: 0, type: "months", date: new Date(new Date().getFullYear() + 1, 0).toISOString()} as TimeBeforeValue)
			}
		],
		itemId
	}
}

export default async function defaultNotificationListeners(context: Context, itemId: number) {
	const { prisma } = context;

	const notificationListenersInput = [
		buildHasExpiredEntriesNotificationListener(context, itemId),
		buildLowQuantityNotificationListener(context, itemId),
		buildExpiredForNextExpedition(context, itemId)
	];

	await prisma.notificationListener.createMany({
		data: notificationListenersInput
	});

	await Promise.all(notificationListenersInput.map((listener) =>
		runNotificationCheck(context, listener as unknown as NotificationListener)));
}
