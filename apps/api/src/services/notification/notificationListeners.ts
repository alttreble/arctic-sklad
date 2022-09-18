import { Context } from '@app/context';
import { NotificationListener, NotificationListenersInput } from '@app/types';

export default async function notificationListeners(context: Context, input: NotificationListenersInput) {
	const { prisma } = context;
	const {itemId} = input;
	return prisma.notificationListener.findMany({
		where: {
			itemId
		}
	})
}
