import { Context } from '@app/context';
import { UpdateNotificationListenerInput } from '@app/types';

export default async function updateNotificationListener(context: Context, input: UpdateNotificationListenerInput) {
	const { prisma } = context;
	const { type, itemId, ...restInput } = input;
	let updatedNotificationListener;
	try {
		updatedNotificationListener = await prisma.notificationListener.update({
			where: {
				itemId_type: {
					itemId,
					type
				}
			},
            data: {
             ...restInput
            }
		});

		return updatedNotificationListener;
	} catch (e) {
		return null;
	}
}
