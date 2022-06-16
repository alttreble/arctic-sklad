import items from "../../../services/items/items"

export default {
    items: (parent, args, context, info) => {
        return items(context)
    }
}