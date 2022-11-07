import { Context } from '@app/context';
import { UpdateNotificationListenerInput } from '@app/types';
import runNotificationCheck from '@app/services/notification/runNotificationCheck';

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
            // @ts-ignore
            data: {
             ...restInput
            }
		});

        await runNotificationCheck(context, updatedNotificationListener)

		return updatedNotificationListener;
	} catch (e) {
		return null;
	}
}
