import { Context } from '@app/context';
import cron from 'node-cron';
import { Item, NotificationCondition } from '@app/types';
import { NotificationListener } from '@prisma/client';
import notificationListeners from '@app/services/notification/notificationListeners';
import item from '@app/services/item/item';
import get from 'lodash/get';
import runNotificationCheck from './runNotificationCheck';
import defaultNotificationListeners from '@app/services/notification/defaultNotificationListeners';

async function scheduleNotificationListeners(context: Context) {
	const { prisma } = context;

	const notificationListeners =
		(await prisma.notificationListener.findMany({}));

	notificationListeners
		.filter(listener => listener.schedule)
		.forEach((listener) => {
			cron.schedule(listener.schedule!, () => {
				runNotificationCheck(context, listener);
			});
		});
	return notificationListeners;
}

export default async function notificationsStartup(context: Context) {
	const { events } = context;

	scheduleNotificationListeners(context).then();

	events.on('itemUpdated').subscribe(
		async (data) => {
			if (!data?.id) return;
			const itemListeners = await notificationListeners(context, { itemId: data.id });
			itemListeners.forEach(listener => runNotificationCheck(context, listener));
		}
	);

	events.on('itemCreated').subscribe(
		(data) => {
			if (!data?.id) return;
			defaultNotificationListeners(context, data.id);
		}
	)
}
