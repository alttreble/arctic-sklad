import addItem from "@app/services/items/addItem"
import {MutationResolvers} from "@app/types";
import {Context} from "@app/context";

export default {
  addItem: (_, args, context, __) => {
    const { input } = args
    return addItem(context, input!)
  }
} as MutationResolvers<Context>
