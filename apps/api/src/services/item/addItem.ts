import {Context} from "@app/context";
import { AddItemInput } from "@app/types";
import defaultNotificationListeners from '@app/services/notification/defaultNotificationListeners';

export default async function addItem(context: Context, input: AddItemInput) {
  const {prisma, events} = context;
  const {uomId} = input;

  const uom = await prisma.uOM.findFirst({
    where: {id: uomId}
  })

  if (!uom) throw new Error("UOM not found");

  const newItem = await prisma.item.create({
    data: {
      ...input
    }
  })

  events.emit("itemCreated", {id: newItem.id})
  return newItem;
}
