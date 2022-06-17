import {GraphQLResolveInfo} from "graphql";
import parsePaginationArgs, {ConnectionArgs} from "@app/utils/paginateResponse";
import items from "@app/services/items/items";
import {Context} from "@app/context";
import { Item } from "@prisma/client";
import {QueryItemsArgs} from "@app/types";

export default async function(_: {}, args: Partial<QueryItemsArgs>, context: Context, __: GraphQLResolveInfo) {
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
    ...toConnection<Item>(resultItems),
    totalCount: await context.prisma.item.count()
  }
}
