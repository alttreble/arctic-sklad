import { Context } from '@app/context';
import { CreateEntryOnItemInput } from '@app/types';

export default async function createEntryOnItem(context: Context, input: CreateEntryOnItemInput) {
	const { prisma, events } = context;

	const { itemId, expirationDate, quantity } = input;

	return await prisma.itemEntry.create({
		data: {
			expirationDate,
			quantity,
			item: {
				connect: {
					id: itemId
				}
			}
		}
	}).then((updatedEntry) => events.emit('itemUpdated', { id: updatedEntry.itemId }));
}
