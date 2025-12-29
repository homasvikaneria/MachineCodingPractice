// // frontend/practice/src/components/StopWatch.jsx

// //without useref
// import React, { useState, useRef } from 'react'

// function StopWatch() {
//     const [timer, setTimer] = useState(0);
//     const [intervalId,setIntervalID]=useState(null)

//     const start = () => {
//         clearInterval(intervalId)
//         setTimer(0)
//        const id = setInterval(() => {
//             setTimer((t) => t + 1)
//         }, 1000);
//         setIntervalID(id)
//     }

//     const pause = () => {
//         clearInterval(intervalId)
//     }
//     const resume = () => {
//         clearInterval(intervalId)
//         const id = setInterval(() => {
//             setTimer((t) => t + 1)
//         }, 1000);
//     }
//     const reset = () => {
//         clearInterval(intervalId)
//         setTimer(0)
//     }

//     return (
//         <div>
//             time:{timer}
//             <button onClick={start}>Start</button>
//             <button onClick={pause}>pause</button>
//             <button onClick={resume}>resume</button>
//             <button onClick={reset}>reset</button>
//         </div>
//     )
// }

// export default StopWatch

// //with useRef hook


// // import React, { useState, useRef } from "react";

// // function StopWatch() {
// //   const [time, setTime] = useState(0);
// //   const intervalRef = useRef(null);

// //   const start = () => {
// //     clearInterval(intervalRef.current);
// //     setTime(0);
// //     intervalRef.current = setInterval(() => {
// //       setTime((t) => t + 1);
// //     }, 1000);
// //   };

// //   const stop = () => {
// //     clearInterval(intervalRef.current);
// //   };

// //   const resume = () => {
// //     intervalRef.current = setInterval(() => {
// //       setTime((t) => t + 1);
// //     }, 1000);
// //   };

// //   const reset = () => {
// //     clearInterval(intervalRef.current);
// //     setTime(0);
// //   };

// //   return (
// //     <div>
// //       <p>Time: {time}</p>
// //       <button onClick={start}>Start</button>
// //       <button onClick={stop}>Stop</button>
// //       <button onClick={resume}>Resume</button>
// //       <button onClick={reset}>Reset</button>
// //     </div>
// //   );
// // }

// // export default StopWatch;



import React, { useState } from 'react';

function StopWatch() {
  // Stores elapsed time in seconds
  const [timer, setTimer] = useState(0);

  // Stores interval id so we can pause / clear it
  const [intervalId, setIntervalId] = useState(null);

  /**
   * Start the stopwatch from zero
   */
  const start = () => {
    // Clear any existing interval to avoid multiple timers
    clearInterval(intervalId);

    // Reset timer
    setTimer(0);

    // Start interval that increments time every second
    const id = setInterval(() => {
      setTimer(prev => prev + 1);
    }, 1000);

    setIntervalId(id);
  };

  /**
   * Pause the stopwatch
   */
  const pause = () => {
    clearInterval(intervalId);
  };

  /**
   * Resume stopwatch from current time
   */
  const resume = () => {
    clearInterval(intervalId);

    const id = setInterval(() => {
      setTimer(prev => prev + 1);
    }, 1000);

    setIntervalId(id);
  };

  /**
   * Reset stopwatch
   */
  const reset = () => {
    clearInterval(intervalId);
    setTimer(0);
  };

  return (
    <div>
      <h3>Time: {timer}s</h3>

      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={resume}>Resume</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default StopWatch;
