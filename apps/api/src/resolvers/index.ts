import Query from "./Query";
import Mutation from "./Mutation";
import { Resolvers } from "@app/types";
import {Item as PrismaItem} from "@prisma/client"
import { Context } from "@app/context";

export default {
  Query,
  Mutation,
  Item: {
    uom(parent, args, context, info) {
      const { prisma } = context;

      return prisma.uOM.findFirst({
        where: { id: (parent as unknown as PrismaItem).uomId }
      });
    }
  }
} as Resolvers<Context>;
