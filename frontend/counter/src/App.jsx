// counter/src/App.jsx
import React, {useState} from 'react'

const App = () => {
  const [count,setCount]=useState(0);
  const increment=()=>{
    setCount(count+1);
  }
  const decrement=()=>{
    setCount(count-1);
  }
  const reset=()=>{
    setCount(0);
  }
  return (
    <div>
      <p className='ml-4'>Count:{count}</p>
      <button onClick={increment} className="bg-black text-white m-4 p-2 hover:bg-white hover:text-black border 1px solid black" >Increment</button>
      <button onClick={decrement} className="bg-black text-white m-4 p-2 hover:bg-white hover:text-black border 1px solid black">Decrement</button>
      <button onClick={reset} className="bg-black text-white m-4 p-2 hover:bg-white hover:text-black border 1px solid black">Reset</button>
    </div>
  )
}

export default App
