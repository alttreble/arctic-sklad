import {Context} from "@app/context";

export default async function addItem(context: Context, _: any) {
    const {prisma} = context;

    const res = await prisma.item.create({
        data: {
            name: "Aspirin"
        }
    })

    console.log(res);


    return res
}
