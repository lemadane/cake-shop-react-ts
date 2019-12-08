import { BUY_ICE_CREAM } from '../..';
import { Action } from '../../types';

export const buyIceCream = (): Action => {
   return {
      type: BUY_ICE_CREAM
   } as Action;
};

