import {QueryResolvers} from "@app/types";
import {Context} from "@app/context";
import items from "./items";
import uoms from "./uoms";
import item from './item';
import notificationListeners from '@app/resolvers/Query/notificationListeners';

export default {
  item,
  items,
  uoms,
  notificationListeners
} as QueryResolvers<Context>
