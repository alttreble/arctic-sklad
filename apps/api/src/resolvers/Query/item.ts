import { GraphQLResolveInfo } from 'graphql';
import type { IncludeOptions } from '@app/services/item/item';
import { Context } from '@app/context';
import type { QueryItemArgs } from '@app/types';
import wasFieldRequested from '@app/utils/wasFieldRequested';
import item from '@app/services/item/item';

export default async function(_: {}, args: QueryItemArgs, context: Context, info: GraphQLResolveInfo) {
	const { id } = args;

	const includeOptions: IncludeOptions = {
		uom: wasFieldRequested('uom', info),
		entries: wasFieldRequested('entries', info)
			|| wasFieldRequested('totalQuantity', info)
			|| wasFieldRequested('hasExpiredEntry', info),
		notifications: wasFieldRequested("edges.node.notifications", info),
		notificationListeners: wasFieldRequested("edges.node.notificationListeners", info)
	};

	return item(context, id, includeOptions);
}
