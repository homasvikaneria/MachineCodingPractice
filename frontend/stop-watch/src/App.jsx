// frontend/stop-watch/src/App.jsx
import React, { useRef, useState } from 'react'

const App = () => {

  const [time,setTimer]=useState(0);
  const ref = useRef(); // to clear interval 

  const start=()=>{
    clearInterval(ref.current);  //callback hell ko avoid karne ke liye
    setTimer(0);
    ref.current = setInterval(() => {
      setTimer(time=>time+1);
    }, 1000);
  }

  const stop=()=>{
    clearInterval(ref.current);
  }

  const reset=()=>{
    setTimer(0);
    clearInterval(ref.current);
  }

  const resume=()=>{
    clearInterval(ref.current);  //callback hell ko avoid karne ke liye
    ref.current = setInterval(() => {
      setTimer(time=>time+1);
    }, 1000);
  }


  return (
    <div>
      time:{time}
      <button onClick={start}>start</button>
      <button onClick={stop} disabled={time==0}>stop</button>
      <button onClick={reset}>reset</button>
      <button onClick={resume}>resume</button>
    </div>
  )
}

export default App