import type { PageLoad } from "./$types";
import client from "../../../graphql/client";

export const load: PageLoad = async ({ params }) => {
    let id = +params.id
    let itemData = await client.item({itemId: id}) 
    let item = itemData.data.item
    

    if(item) {
        return {
            item
        }
    }
};
