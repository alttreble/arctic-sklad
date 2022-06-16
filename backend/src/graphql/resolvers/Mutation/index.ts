import addItem from "../../../services/items/addItem"

export default {
    addItem: (parent, args, context, info) => {
        console.log("Adding item");
        
        return addItem(context, {})
    }
}