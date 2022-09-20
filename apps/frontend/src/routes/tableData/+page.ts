import type { PageLoad } from "./$types";
import client from "../../graphql/client";

export const load: PageLoad = async() => {
    let itemsData = await client.items()
    let items = itemsData.data.items.edges;
    console.log(items)

    if (items) {
        return {
            items
        }
    }
};