import {QueryResolvers} from "@app/types";
import {Context} from "@app/context";
import items from "./items";
import uoms from "./uoms";
import item from './item';

export default {
  item,
  items,
  uoms

} as QueryResolvers<Context>
