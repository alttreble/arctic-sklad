import { Item } from "@app/types";
import { Context } from "@app/context";
import { GraphQLResolveInfo } from "graphql";

export default async function uom(parent: Item, args: {}, context: Context, info: GraphQLResolveInfo) {
  const { prisma } = context;

  console.log(args);

  return {

  }
}
