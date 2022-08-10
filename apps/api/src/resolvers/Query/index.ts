import {QueryResolvers} from "@app/types";
import {Context} from "@app/context";
import items from "./items";
import uoms from "@app/resolvers/Query/uoms";

export default {
  items,
  uoms

} as QueryResolvers<Context>
