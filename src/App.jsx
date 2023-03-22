import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, changeByAmount } from './app/counterSlice';

function App() {
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();
  const currentCount = useSelector((state) => state.counter.value);

  return (
    <div className="App" style={{display: "flex", justifyContent: "center", alignItems: "center", width: "400px", margin: "auto"}}>
      <div>
        <p style={{ textAlign: "center", fontWeight: "bold", fontSize:"50px" }}>{currentCount}</p>
        <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
          <button onClick={() => dispatch(increment())} style={{width:"50px", height:"50px", marginLeft: "10px", marginRight: "10px"}}>+</button>
          <button onClick={() => dispatch(decrement())} style={{width:"50px", height:"50px", marginLeft: "10px", marginRight: "10px"}}>-</button>
        </div>
        

        <input value={value} onChange={(event) => setValue(event.target.value)} style={{fontSize: "20px", fontWeight: "bold", textAlign: "center", width: "100%", alignItems: "center", justifyContent: "center", height: "40px", padding: "5px", marginTop: "20px"}} type="number"/>
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: "20px"}}>
          <button style={{marginLeft: "10px", marginRight: "10px"}} onClick={() => dispatch(changeByAmount({amount: value, type: "+"}))}>Increase by amount</button>
          <button style={{marginLeft: "10px", marginRight: "10px"}} onClick={() => dispatch(changeByAmount({amount: value, type: "-"}))}>Decrease by amount</button>
        </div>
      </div>
    </div>
  )
}

export default App
