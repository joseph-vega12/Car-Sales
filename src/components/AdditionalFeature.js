import React, { useReducer } from 'react';
import reducer, { initialState } from '../reducers';

const AdditionalFeature = props => {

  const [ state, dispatch ] = useReducer(reducer, initialState);
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={()=> dispatch({type:"ADD_FEATURE"})} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
