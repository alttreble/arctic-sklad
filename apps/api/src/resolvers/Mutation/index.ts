import addItem from "@app/services/items/addItem"
import { Item, ItemEntry, MutationResolvers } from "@app/types";
import {Context} from "@app/context";
import defineUom from "@app/services/uom/defineUom";
import createEntryOnItem from "@app/services/items/createEntryOnItem";
import updateItemEntry from '@app/services/items/updateItemEntry';
import updateItem from '@app/services/items/updateItem';

export default {
  addItem: (_, args, context, __) => {
    const { input } = args
    return addItem(context, input) as unknown as Item
  },
  updateItem: (_, args, context, __) => {
    const { input } = args
    return updateItem(context, input) as unknown as Item
  },
  defineUOM: (_, args, context, __) => {
    const { input } = args
    return defineUom(context, input)
  },
  createEntryOnItem: (_, args, context, __) => {
    const { input } = args
    return createEntryOnItem(context, input) as unknown as ItemEntry
  },
  updateItemEntry: (_, args, context, __) => {
    const {input} = args
    return updateItemEntry(context, input) as unknown as ItemEntry
  }
} as MutationResolvers<Context>
