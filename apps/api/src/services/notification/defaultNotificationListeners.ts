import { Context } from '@app/context';
import { ItemEntry, NotificationSeverity } from '@app/types';
import runNotificationCheck from '@app/services/notification/runNotificationCheck';
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
				value: '{"value":"6", "type": "months"}'
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

export default async function defaultNotificationListeners(context: Context, itemId: number) {
	const { prisma } = context;

	const notificationListenersInput = [
		buildHasExpiredEntriesNotificationListener(context, itemId),
		buildLowQuantityNotificationListener(context, itemId)
	];

	await prisma.notificationListener.createMany({
		data: notificationListenersInput
	});

	await Promise.all(notificationListenersInput.map((listener) =>
		runNotificationCheck(context, listener as unknown as NotificationListener)));
}
