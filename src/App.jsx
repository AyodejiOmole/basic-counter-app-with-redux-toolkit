import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from './app/counterSlice';

function App() {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const currentCount = useSelector(state => state.counter.count);

  return (
    <div className="App">
      <div>
        <p>{currentCount}</p>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
    </div>
  )
}

export default App
