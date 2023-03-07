import { useSelector, useDispatch } from "react-redux";

function App() {
  const counter =useSelector((state)=> state.counter) // the counter will be done by use selector
  // by using call back function (state)

  const dispatch = useDispatch() // we use useDispatch to send actions to reducer 

  const incremant = ()=>{
    dispatch({type : 'INC'})
  }
  const decrement = ()=>{
    dispatch({type : 'DEC'})
  }
  const addBy = ()=>{
    dispatch({type : 'ADD', tt: 10})
  }

  return (
    <div>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={incremant}>Plus</button>
      <button onClick={decrement}>Minus</button>
      <button onClick={addBy}>Add Value</button>
      
    </div>
  );
}

export default App;
