import items from "@app/services/items/items"
import {QueryResolvers} from "@app/types";
import {Context} from "@app/context";

export default {
    items: (_, args, context, __) => {
        return items(context)
    }
} as QueryResolvers<Context>
