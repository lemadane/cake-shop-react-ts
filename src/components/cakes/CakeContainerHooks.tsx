import React, { FC } from 'react';
import { State } from '../..';
import { buyCake } from '.';
import { useSelector, useDispatch } from 'react-redux';

const CakeContainerHooks: FC = () => {
   const nCakes = useSelector((state: State) => state.cake.nCakes);
   const dispatch = useDispatch();
   return (
      <div>
         <h2>Number of Cakes- {nCakes}</h2>
         <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
      </div>
   );
};

export default CakeContainerHooks;
