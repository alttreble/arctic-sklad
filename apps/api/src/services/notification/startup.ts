import { Context } from '@app/context';
import cron from 'node-cron';
import notificationListeners from '@app/services/notification/notificationListeners';
import runNotificationCheck from './runNotificationCheck';
import defaultNotificationListeners from '@app/services/notification/defaultNotificationListeners';
import logger from '@app/logger';

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

function createDefaultNotificationListenersOnItemCreated(context: Context) {
	const {events} = context;
	events.on('itemCreated').subscribe(
		async (data) => {
			if (!data?.id) return;
			await defaultNotificationListeners(context, data.id);
			logger.debug(`Created all default notification listeners for item with id ${data?.id}`)
		}
	);
}

export default async function notificationsStartup(context: Context) {
	const { events } = context;

	scheduleNotificationListeners(context).then(() =>
		logger.info('Scheduled all notification listeners'));

	events.on('itemUpdated').subscribe(
		async (data) => {
			if (!data?.id) return;
			const itemListeners = await notificationListeners(context, { itemId: data.id });
			itemListeners.forEach(listener => runNotificationCheck(context, listener));
		}
	);

	createDefaultNotificationListenersOnItemCreated(context);
}
