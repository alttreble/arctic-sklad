import {GraphQLResolveInfo} from "graphql";
import parsePaginationArgs, {ConnectionArgs} from "@app/utils/paginateResponse";
import items from "@app/services/items/items";
import {Context} from "@app/context";
import {Item, QueryItemsArgs} from "@app/types";
import wasFieldRequested from "@app/utils/wasFieldRequested";

export default async function(_: {}, args: Partial<QueryItemsArgs>, context: Context, info: GraphQLResolveInfo) {
  const {
    filter,
    ...connectionArgs
  } = args;
  const {
    paginationArgs,
    toConnection
  } = parsePaginationArgs(connectionArgs as ConnectionArgs);

  const resultItems = await items(context, filter, paginationArgs)

  return {
    ...toConnection<Item>(resultItems as unknown as Item[]),
    ...(wasFieldRequested("totalCount", info) && {totalCount: await context.prisma.item.count()})
  }
}
