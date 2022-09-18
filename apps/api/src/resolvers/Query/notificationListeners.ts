import { GraphQLResolveInfo } from 'graphql';
import { Context } from '@app/context';
import { NotificationListener, QueryNotificationListenersArgs } from '@app/types';
import notificationListeners from '@app/services/notification/notificationListeners';

export default async function(_: {}, args: QueryNotificationListenersArgs, context: Context, info: GraphQLResolveInfo) {
	const { input } = args;
	return (await notificationListeners(context, input)) as unknown as NotificationListener[];
}
