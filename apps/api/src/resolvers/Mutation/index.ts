import addItem from '@app/services/item/addItem';
import { Item, ItemEntry, MutationResolvers, NotificationListener } from '@app/types';
import { Context } from '@app/context';
import defineUom from '@app/services/uom/defineUom';
import createEntryOnItem from '@app/services/item/createEntryOnItem';
import updateItemEntry from '@app/services/item/updateItemEntry';
import updateItem from '@app/services/item/updateItem';
import unregisterNotificationListener from '@app/services/notification/unregisterNotificationListener';
import registerNotificationListener from '@app/services/notification/registerNotificationListener';
import deleteItem from '@app/services/item/deleteItem';

export default {
	addItem: (_, args, context, __) => {
		const { input } = args;
		return addItem(context, input) as unknown as Item;
	},
	updateItem: (_, args, context, __) => {
		const { input } = args;
		return updateItem(context, input) as unknown as Item;
	},
	deleteItem: (_, args, context, __) => {
		const {input} = args;
		return deleteItem(context, input) as unknown as Item;
	},
	defineUOM: (_, args, context, __) => {
		const { input } = args;
		return defineUom(context, input);
	},
	createEntryOnItem: (_, args, context, __) => {
		const { input } = args;
		return createEntryOnItem(context, input) as unknown as ItemEntry;
	},
	updateItemEntry: (_, args, context, __) => {
		const { input } = args;
		return updateItemEntry(context, input) as unknown as ItemEntry;
	},
	unregisterNotificationListener: (_, args, context, __) => {
		const { input } = args;
		return unregisterNotificationListener(context, input) as unknown as NotificationListener;
	},
	registerNotificationListener: (_, args, context, __) => {
		const { input } = args;
		return registerNotificationListener(context, input) as unknown as NotificationListener;
	}
} as MutationResolvers<Context>;
