import React, { FC } from 'react';
import { buyIceCream } from '.';
import { useSelector, useDispatch } from 'react-redux';
import { State } from '../..';

const IceCreamContainer: FC = () => {
   const nIceCream = useSelector((state: State) => state.iceCream.nIceCream);
   const dispatch = useDispatch();
   return (
      <div>
         <h2>Number of Ice Cream- {nIceCream}</h2>
         <button onClick={() => dispatch(buyIceCream())}>Buy Ice Cream</button>
      </div>
   );
};

export default IceCreamContainer;
