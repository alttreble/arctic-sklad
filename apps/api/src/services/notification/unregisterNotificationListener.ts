import { Context } from '@app/context';
import { UnregisterNotificationListenerInput } from '@app/types';

export default async function unregisterNotificationListener(context: Context, input: UnregisterNotificationListenerInput) {
	const { prisma } = context;
	const { type, itemId } = input;
	let deletedNotificationListener;
	try {
		deletedNotificationListener = await prisma.notificationListener.delete({
			where: {
				itemId_type: {
					itemId,
					type
				}
			}
		});

		return deletedNotificationListener;
	} catch (e) {
		return null;
	}
}
