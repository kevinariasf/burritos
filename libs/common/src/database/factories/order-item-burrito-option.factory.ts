import { burritoOptionFactory } from './burrito-option.factory';
import { orderItemFactory } from './order-item.factory';
import { defineOrderItemBurritoOptionFactory } from './__generated__/fabbrica';

export const orderItemBurritoOptionFactory =
  defineOrderItemBurritoOptionFactory({
    defaultData: {
      burritoOption: burritoOptionFactory,
      orderItem: orderItemFactory,
    },
  });
