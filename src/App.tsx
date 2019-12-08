import React, { FC } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { store } from '.';
import CakeContainer from './components/cakes/CakeContainer';
import CakeContainerHooks from './components/cakes/CakeContainerHooks';
import IceCreamContainer from './components/iceCreams/IceCreamContainer';

const App: FC = () => (
   <Provider store={store}>
      <div className="App">
         <CakeContainer />
         <CakeContainerHooks />
         <IceCreamContainer />
      </div>
   </Provider>
);

export default App;
