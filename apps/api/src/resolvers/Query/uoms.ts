import {GraphQLResolveInfo} from "graphql";
import parsePaginationArgs, {ConnectionArgs} from "@app/utils/paginateResponse";
import {Context} from "@app/context";
import { QueryUomsArgs, Uom } from "@app/types";
import uoms from "@app/services/uom/uoms";
import wasFieldRequested from "@app/utils/wasFieldRequested";

export default async function(_: any, args: Partial<QueryUomsArgs>, context: Context, info: GraphQLResolveInfo) {
  const {
    filter,
    ...connectionArgs
  } = args;
  const {
    paginationArgs,
    toConnection
  } = parsePaginationArgs(connectionArgs as ConnectionArgs);

  const resultUoms = await uoms(context, filter, paginationArgs)

  return {
    ...toConnection<Uom>(resultUoms),
    ...(wasFieldRequested("totalCount", info) && {totalCount: await context.prisma.uOM.count()})
  }
}
