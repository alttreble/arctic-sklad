import addItem from "@app/services/items/addItem"
import { Item, MutationResolvers } from "@app/types";
import {Context} from "@app/context";
import defineUom from "@app/services/uom/defineUom";

export default {
  addItem: (_, args, context, __) => {
    const { input } = args
    return addItem(context, input) as unknown as Item
  },
  defineUOM: (_, args, context, __) => {
    const { input } = args
    return defineUom(context, input)
  }
} as MutationResolvers<Context>
