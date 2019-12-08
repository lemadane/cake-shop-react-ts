import { Action, CakeState } from "../..";
import { BUY_CAKE } from "../..";

const initialState: CakeState = { nCakes: 10 };

export const cakeReducer = (state = initialState, action: Action ): CakeState  => {
   switch(action.type) {
      case BUY_CAKE: return {
         ...state,
         nCakes: state.nCakes - 1,
      };
      default: return state;
   }
};
