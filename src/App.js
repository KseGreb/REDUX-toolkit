import './App.css';
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount, decrementByAmount, multiplyByAmount } from './redux/counter'


function App() {
  const count = useSelector((state) => state.counter.value)

  const dispatch = useDispatch()
  return (
    <div className="App">
      <p>Score: {count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
      <button onClick={() => dispatch(decrementByAmount(5))}>-5</button>
      <button onClick={() => dispatch(multiplyByAmount(5))}>*5</button>
      </div>
  );
}

export default App;
