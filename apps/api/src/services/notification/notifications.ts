import { Context } from '@app/context';
import { Item } from '@app/types';

export default function notifications(context: Context, item: Item) {
	const { prisma } = context;
	const { id: itemId } = item;

	return prisma.notification.findMany({ where: { itemId } });
}
