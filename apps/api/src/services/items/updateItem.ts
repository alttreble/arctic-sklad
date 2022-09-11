import { Context } from '@app/context';
import { UpdateItemInput } from '@app/types';

export default async function updateItem(context: Context, input: UpdateItemInput) {
	const { prisma } = context;
	const { id, uomId, name, genericName, description } = input;

	if (uomId) {
		const uom = await prisma.uOM.findFirst({
			where: { id: uomId }
		})

		if (!uom) throw new Error(`UOM id ${uomId} not found`);
	}

	return await prisma.item.update({
		where: { id },
		data: {
			...(uomId && {uomId}),
			...(name && {name}),
			...(genericName && {genericName}),
			...(description && {description})
		}
	})
}
