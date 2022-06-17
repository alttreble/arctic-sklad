import {QueryResolvers} from "@app/types";
import {Context} from "@app/context";
import items from "./items";

export default {
  items,
} as QueryResolvers<Context>
