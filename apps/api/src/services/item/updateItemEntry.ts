import { UpdateItemEntryInput } from '@app/types';
import { Context } from '@app/context';

async function updateEntry(context: Context, input: UpdateItemEntryInput) {
	const { prisma } = context;
	const { id, expirationDate, quantity } = input;

	return prisma.itemEntry.update({
		where: { id },
		data: {
			expirationDate,
			quantity
		}
	});
}

function deleteEntry(context: Context, input: UpdateItemEntryInput) {
	const { prisma } = context;
	const { id } = input;

	return prisma.itemEntry.delete({
		where: { id }
	});
}

export default function updateItemEntry(context: Context, input: UpdateItemEntryInput) {
	const { events } = context;
	const { quantity } = input;
	if (quantity > 0) {
		return updateEntry(context, input)
			.then((updatedEntry) => events.emit('itemUpdated', {id: updatedEntry.itemId}));
	}

	return deleteEntry(context, input)
		.then((deletedEntry) => events.emit('itemUpdated', {id: deletedEntry.itemId}));
}
