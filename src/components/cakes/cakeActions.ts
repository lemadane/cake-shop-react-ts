import { BUY_CAKE } from '../..';
import { Action } from '../../types';

export const buyCake = (): Action => {
   return {
      type: BUY_CAKE
   } as Action;
};

