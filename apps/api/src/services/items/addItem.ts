import {Context} from "@app/context";
import { AddItemInput, Item } from "@app/types";

export default async function addItem(context: Context, input: AddItemInput) {
  const {prisma} = context;

  const {uomId} = input;

  const uom = await prisma.uOM.findFirst({
    where: {id: uomId}
  })

  if (!uom) throw new Error("UOM not found");

  return await prisma.item.create({
    data: {
      ...input
    }
  })
}
