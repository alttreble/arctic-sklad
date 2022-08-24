import addItem from "@app/services/items/addItem"
import { Item, ItemEntry, MutationResolvers } from "@app/types";
import {Context} from "@app/context";
import defineUom from "@app/services/uom/defineUom";
import createEntryOnItem from "@app/services/items/createEntryOnItem";

export default {
  addItem: (_, args, context, __) => {
    const { input } = args
    return addItem(context, input) as unknown as Item
  },
  defineUOM: (_, args, context, __) => {
    const { input } = args
    return defineUom(context, input)
  },
  createEntryOnItem: (_, args, context, __) => {
    const { input } = args
    return createEntryOnItem(context, input) as unknown as ItemEntry
  }
} as MutationResolvers<Context>
