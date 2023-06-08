import { burritoTypeFactory } from './burrito-type.factory';
import { defineBurritoFactory } from './__generated__/fabbrica';

export const burritoFactory = defineBurritoFactory({
  defaultData: {
    type: burritoTypeFactory,
  },
});
