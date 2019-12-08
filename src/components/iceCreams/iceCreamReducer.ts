import { Action, IceCreamState } from '../..';
import { BUY_ICE_CREAM } from '../../types';

const initialState: IceCreamState = { nIceCream: 20 };

export const iceCreamReducer = (
   state = initialState,
   action: Action
): IceCreamState => {
   switch (action.type) {
      case BUY_ICE_CREAM:
         return {
            ...state,
            nIceCream: state.nIceCream - 1
         };
      default:
         return state;
   }
};
