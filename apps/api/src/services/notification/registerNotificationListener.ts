import { Context } from '@app/context';
import { RegisterNotificationListenerInput } from '@app/types';
import runNotificationCheck from '@app/services/notification/runNotificationCheck';

export default async function registerNotificationListener(context: Context, input: RegisterNotificationListenerInput) {
	const { prisma } = context;

	const {schedule = "0 0 * * *", severity = "INFO", ...restInput} = input;

	const notificationListener = await prisma.notificationListener.create({
		data: {
			...restInput,
			schedule,
			severity
		}
	})

	await runNotificationCheck(context, notificationListener)

	return notificationListener;
}
