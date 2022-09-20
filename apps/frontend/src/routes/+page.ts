import type { PageLoad } from "./$types";
import type { ItemsQueryVariables } from "../generated/graphql";
import client from "../graphql/client";

export const load: PageLoad = async ({ url }) => {
  const firstParam = url.searchParams.get("first");
  const afterParam = url.searchParams.get("after");
  const queryParam = url.searchParams.get("query");

  const params: ItemsQueryVariables = {
    ...(firstParam && { first: +firstParam }),
    ...(afterParam && { after: +afterParam }),
    filter: {
      ...(queryParam && { name: queryParam }),
    }
  };
  let uomData = await client.uoms()
  let itemsData = await client.items(params);
  let items = itemsData.data.items.edges;
  let uoms = uomData.data.uoms

  if (items && uoms) {
    return {
      items,
      uoms
    };
  }
};
