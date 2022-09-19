import { Context } from '@app/context';
import { Item } from '@app/types';

export type IncludeOptions = {
	[key in 'uom' | 'entries' | 'notifications' | 'notificationListeners']?: boolean;
};

export default async function item(
	context: Context,
	id: number,
	includeOptions: IncludeOptions
) {
	const { prisma } = context;

	const matchedItem = await prisma.item.findFirst({
		where: {
			id
		},
		include: {
			notificationListeners: true,
			notifications: true,
			uom: includeOptions?.uom,
			entries: includeOptions?.entries && {
				orderBy: {
					expirationDate: 'asc'
				}
			}
		}
	});

	if (!matchedItem) return matchedItem;

	(matchedItem as unknown as Item).totalQuantity = matchedItem?.entries
		?.reduce((totalQuantity, entry) => {
			return totalQuantity + (entry?.quantity || 0);
		}, 0);

	return matchedItem;
}
