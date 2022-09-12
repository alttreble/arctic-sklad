import type { PageLoad } from "./$types";
import client from "../../../graphql/client";

export const load: PageLoad = async ({ params }) => {
    let id = +params.id
    let itemData = await client.item({ itemId: id })
    let uomData = await client.uoms()


    let item = itemData.data.item
    let uoms = uomData.data.uoms

    if (item && uoms) {
        return {
            item,
            uoms
        }
    }
};
