import React, { useState, useEffect } from "react";
import Loading from '../loding/Loding';

function Timer() {
  const [loading, setLoading] = useState(true);


  const initialSeconds = parseInt(localStorage.getItem("seconds")) || 0;
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;

    if (isRunning) {
      timer = setInterval(() => {
        setSeconds((prevSeconds) => {
          const newSeconds = prevSeconds + 1;
          localStorage.setItem("seconds", newSeconds.toString()); // 작업 시간을 로컬 스토리지에 저장
          return newSeconds;
        });
      }, 1000);
    } else {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isRunning]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setSeconds(0);
    localStorage.removeItem("seconds"); // 로컬 스토리지에서 작업 시간 데이터 제거
  };

  return (
    <div>
               {/* {loading ? <Loading /> : null} */}
      <p>경과 시간: {seconds} 초</p>
      <button onClick={startTimer}>시작</button>
      <button onClick={stopTimer}>기록</button>
      <button onClick={resetTimer}>리셋</button>
    </div>
  );
}

export default Timer;