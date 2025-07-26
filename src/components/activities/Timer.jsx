import { useEffect, useRef, useState } from "react";

export default function Timer() {
  const [count, setCount] = useState(0);
  const [isStart, setStart] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isStart) {
      intervalRef.current = setInterval(() => {setCount(count + 1); console.log("timer running")}, 10);
    }

    return ()=>{
      clearInterval(intervalRef.current)
    }
    
  }, [isStart, count]);

  function startTimer() {
    setStart(true);
  }

  function pauseTimer() {
    setStart(false);
    clearInterval(intervalRef.current);
  }

  function resetTimer() {
    setStart(false);
    clearInterval(intervalRef.current);
    setCount(0);
  }

  return (
    <div className="wrapper">
      <div>
        <h1>Timer</h1>
      </div>
      <div className="flex justify-center gap-3 items-end">
        <h1 className="min-w-2">{Math.floor(count / 100)}</h1>
        <span className="min-w-8">{count % 100}</span>
      </div>
      <div className="parent-col">
        {isStart ? (
          <button onClick={pauseTimer}>Pause</button>
        ) : (
          <button onClick={startTimer}>Start</button>
        )}
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}
