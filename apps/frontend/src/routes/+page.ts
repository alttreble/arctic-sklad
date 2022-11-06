import type { PageLoad } from "./$types";
import type { ItemsQueryVariables, Notification } from "../generated/graphql";
import client from "../graphql/client";

export const load: PageLoad = async ({ url }) => {
  const firstParam = url.searchParams.get("first");
  const afterParam = url.searchParams.get("after");
  const queryParam = url.searchParams.get("query");
  const notificationsParam = url.searchParams.get("notifications")

  const notifications = notificationsParam && notificationsParam?.split(",");

  const params: ItemsQueryVariables = {
    ...(firstParam && { first: +firstParam }),
    ...(afterParam && { after: +afterParam }),
    filter: {
      ...(queryParam && { name: queryParam }),
      ...(notifications && notifications.length && {notifications})
    }
  };
  let uomData = await client.uoms()
  let itemsData = await client.items(params);
  let items = itemsData.data.items.edges;
  let uoms = uomData.data.uoms

  if (items && uoms) {
    return {
      items,
      uoms,
        filters: {
          willExpire: notifications && notifications?.find((e) => e === "hasEntriesThatWillExpire"),
          hasExpired: notifications &&  notifications?.find((e) => e === "hasExpired"),
          lowQuantity: notifications && notifications?.find((e) => e === "lowQuantity"),
          expiredForNextExpedition: notifications && notifications?.find((e) => e === "expiredForNextExpedition")
        }
    };
  }
};
