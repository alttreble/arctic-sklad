export default async function addItem(context, input) {
    const {prisma} = context;
    console.log("adding item");
    
    const res = await prisma.item.create({
        data: {
            name: "Aspirin"
        }
    })

    console.log(res);
    

    return res
}