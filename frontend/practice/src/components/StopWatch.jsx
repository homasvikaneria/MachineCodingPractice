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
