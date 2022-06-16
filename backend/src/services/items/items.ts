export default async function items(context) {
    const items = await context.prisma.item.findMany()
 
    return items || []
}