import { Context } from "@app/context";
import { CreateEntryOnItemInput } from "@app/types";

export default async function createEntryOnItem(context: Context, input: CreateEntryOnItemInput) {
  const {prisma} = context;

  const {itemId, expirationDate, quantity} = input

  return await prisma.itemEntry.create({
    data: {
      expirationDate,
      quantity,
      item: {
        connect: {
          id: itemId
        }
      }
    }
  })
}
