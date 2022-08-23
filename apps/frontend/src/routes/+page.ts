import type { PageLoad } from "./$types";
import type { ItemsQueryVariables } from "../generated/graphql";
import client from "../graphql/client";

export const load: PageLoad = async ({ url }) => {
  const firstParam = url.searchParams.get("first");
  const afterParam = url.searchParams.get("after");

  const params: ItemsQueryVariables = {
    ...(firstParam && { first: +firstParam }),
    ...(afterParam && { after: +afterParam })
  };

  let itemsData = await client.Items(params);
  let items = itemsData.data.items.edges;

  if (items) {
    return {
      items
    };
  }
};
