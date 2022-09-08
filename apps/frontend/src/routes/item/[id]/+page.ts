import type { PageLoad } from "./$types";
import client from "../../../graphql/client";

export const load: PageLoad = async ({ params }) => {    
    let id = +params.id
    let itemData = await client.item({itemId: id}) 
    console.log("Item has loaded")
    let item = itemData.data.item
    console.log(item?.entries)

    if(item) {
        return {
            item
        }
    }
};
