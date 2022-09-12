import {Context} from "@app/context";

export type IncludeOptions = {
	[key in "uom" | "entries"]: boolean;
};

export default async function item(
	context: Context,
	id: number,
	includeOptions: IncludeOptions
) {
	const {prisma} = context

	return prisma.item.findFirst({
		where: {
			id
		},
		include: {
			uom: includeOptions.uom,
			entries: includeOptions.entries && {
				orderBy: {
					createdAt: "asc"
				}
			}
		}
	})
}
