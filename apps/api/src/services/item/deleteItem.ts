import { Context } from '@app/context';
import { DeleteItemInput } from '@app/types';

export default async function deleteItem(context: Context, input: DeleteItemInput) {
	const { prisma } = context;
	const { id } = input;

	return prisma.item.delete({
		where: {
			id
		}
	});
}
