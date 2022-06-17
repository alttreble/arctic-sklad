import {Context} from "@app/context";
import {AddItemInput} from "@app/types";

export default async function addItem(context: Context, args: AddItemInput) {
  const {prisma} = context;

  return await prisma.item.create({
    data: {
      ...args
    }
  })
}
