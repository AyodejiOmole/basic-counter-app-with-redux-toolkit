import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, changeByAmount } from './app/counterSlice';

function App() {
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();
  const currentCount = useSelector((state) => state.counter.value);

  return (
    <div className="App">
      <div>
        <p>{currentCount}</p>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>

        <input value={value} onChange={(event) => setValue(event.target.value)} type="number"/>
        <button onClick={() => dispatch(changeByAmount({amount: value, type: "+"}))}>Increase by amount</button>
        <button onClick={() => dispatch(changeByAmount({amount: value, type: "-"}))}>Decrease by amount</button>
      </div>
    </div>
  )
}

export default App
