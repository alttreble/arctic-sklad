import {Context} from "@app/context";

export default async function items(context: Context) {
    const {prisma} = context

    const items = await prisma.item.findMany()
    return items || []
}
