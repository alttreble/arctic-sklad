import { Context } from '@app/context';
import { CreateEntryOnItemInput } from '@app/types';

export default async function createEntryOnItem(context: Context, input: CreateEntryOnItemInput) {
	const { prisma, events } = context;

	const { itemId, expirationDate, quantity } = input;

	let createdEntryOnItem =  await prisma.itemEntry.create({
		data: {
			expirationDate,
			quantity,
			item: {
				connect: {
					id: itemId
				}
			}
		}
	}) 
	events.emit('itemUpdated', { id: createdEntryOnItem.itemId });
	console.log(createdEntryOnItem)
	return createdEntryOnItem;
}
