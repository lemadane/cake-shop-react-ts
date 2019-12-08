import { createStore, combineReducers } from 'redux';
import { cakeReducer } from '.';
import { iceCreamReducer } from './components/iceCreams';


const rootReducer = combineReducers({
   cake: cakeReducer,
   iceCream: iceCreamReducer,
});
export const store = createStore(rootReducer);