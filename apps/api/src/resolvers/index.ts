import Query from "./Query";
import Mutation from "./Mutation";
import { ItemEntry, Resolvers } from "@app/types";
import { Context } from "@app/context";

function hasItemEntryExpired(itemEntry: ItemEntry | null) {
  if (!itemEntry?.expirationDate) return false;
  return Date.parse(itemEntry.expirationDate) - Date.now() < 0;
}

export default {
  Query,
  Mutation,
  Item: {
    totalQuantity(parent, args, context, _) {
      return parent.entries.reduce((totalQuantity, entry) => {
        return totalQuantity + (entry?.quantity || 0)
      }, 0)
    },
    hasExpiredEntry(parent, args, context, info) {
      return Boolean(parent.entries.find(hasItemEntryExpired))
    },
  },
  ItemEntry: {
    hasExpired(parent, args, context, info) {
      return hasItemEntryExpired(parent)
    }
  }

} as Resolvers<Context>;
