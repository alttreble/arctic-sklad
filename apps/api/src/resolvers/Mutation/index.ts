import addItem from "@app/services/items/addItem"
import {MutationResolvers} from "@app/types";
import {Context} from "@app/context";

export default {
    addItem: (_, args, context, __) => {
        console.log("Adding item");

        return addItem(context, {})
    }
} as MutationResolvers<Context>
