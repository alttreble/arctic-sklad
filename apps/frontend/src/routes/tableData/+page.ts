import type { PageLoad } from "./$types";
import client from "../../graphql/client";
import type { ItemsQueryVariables } from "../../generated/graphql";

export const load: PageLoad = async ({ url }) => {
    const firstParam = url.searchParams.get("first");
    const afterParam = url.searchParams.get("after");
    const queryParam = url.searchParams.get("query");
    const notifications = url.searchParams.get("notifications")

    const params: ItemsQueryVariables = {
        ...(firstParam && { first: +firstParam }),
        ...(afterParam && { after: +afterParam }),
        filter: {
            ...(queryParam && { name: queryParam }),
            ...(notifications && { notifications: notifications.split(",") })
        }
    };
    let itemsData = await client.items(params)
    let items = itemsData.data.items.edges;


    if (items) {
        return {
            items
        }
    }
};