import React from 'react';
import { useDispatch, useSelector } from 'react-redux'

import { actions } from '../actions/counter'
import { selector } from '../selectors/counter'

const Counter = () => {
  const counter = useSelector(selector.getCounter)
  const dispatch = useDispatch()

  const handleDecrement = () => dispatch(actions.decrement())
  const handleIncrement = () => dispatch(actions.incremenet())

  return (
   <>
    <h1>Counter: {counter}</h1>
    <ul>
      <li><button onClick={handleDecrement}>Decrement</button></li>
      <li><button onClick={handleIncrement}>Increment</button></li>
    </ul> 
   </>
  );
}

export default Counter;