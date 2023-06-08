import { burritoFactory } from './burrito.factory';
import { orderFactory } from './order.factory';
import { defineOrderItemFactory } from './__generated__/fabbrica';

export const orderItemFactory = defineOrderItemFactory({
  defaultData: { burrito: burritoFactory, order: orderFactory },
});
