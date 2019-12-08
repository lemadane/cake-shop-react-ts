import React, { FC } from 'react';
import { CakeProps } from '../..';
import { Dispatch } from 'redux';
import { buyCake } from '.';
import { connect } from 'react-redux';
import { State } from '../../types';

const CakeContainer: FC<CakeProps> = (props: CakeProps) => (
   <div>
      <h2>Number of Cakes- {props.nCakes}</h2>
      <button onClick={props.buyCake}>Buy Cake</button>
   </div>
);

const mapStateToProps = (state:State) => ({
   nCakes: state.cake.nCakes
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
   buyCake: () => dispatch(buyCake())
});

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
