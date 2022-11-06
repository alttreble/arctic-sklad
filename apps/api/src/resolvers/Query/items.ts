import {GraphQLResolveInfo} from "graphql";
import parsePaginationArgs, {ConnectionArgs} from "@app/utils/paginateResponse";
import items, { IncludeOptions } from "@app/services/item/items";
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

  const includeOptions: IncludeOptions = {
    uom: wasFieldRequested("edges.node.uom", info),
    entries: wasFieldRequested("edges.node.entries", info)
      || wasFieldRequested("edges.node.totalQuantity", info)
      || wasFieldRequested("edges.node.hasExpiredEntry", info),
    notifications: wasFieldRequested("edges.node.notifications", info),
    notificationListeners: wasFieldRequested("edges.node.notificationListeners", info)
  }
// @ts-ignore
  const resultItems = await items(context, filter, paginationArgs, includeOptions)

  return {
    ...toConnection<Item>(resultItems as unknown as Item[]),
    ...(wasFieldRequested("totalCount", info) && {totalCount: await context.prisma.item.count()})
  }
}
