// frontend/practice/src/components/Counter.jsx
// practicw/src/assets/components/counter.jsx
import React, { useState } from 'react'


const Counter = () => {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);

    const increment = () => {
        if (count + step <= 10) {
            setCount(count + step);
        }

    }

    const decrement = () => {
        if (count - step > 0) {
            setCount(count - step);
        }

    }
    const reset = () => {
        setCount(0);
    }


    return (
        <div>
            count:{count}
            <button onClick={increment} disabled={count === 10}>increment</button>
            <button onClick={decrement} disabled={count === 0}>decrement</button>
            <button onClick={reset}>reset</button>
            <input type="text" value={step} onChange={(e) => { const value = Number(e.target.value); if (value > 0) setStep(value) }} />
        </div>
    )
}

export default Counter
