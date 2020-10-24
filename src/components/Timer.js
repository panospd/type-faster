import React, { useEffect, useState } from "react";
import TextBox from "./TextBox";

export default function Timer({ start, onGameOver, time, reset }) {
  const timeToSet = time ?? 80;

  const [timer, setTimer] = useState(timeToSet);
  const [intervalId, setIntervalId] = useState(null);

  const startTimer = () => {
    if (start && !intervalId) {
      if (timer !== timeToSet) setTimer(timeToSet);

      setIntervalId(
        setInterval(() => {
          setTimer(current => current - 1);
        }, 1000)
      );
    }
  };

  const disposeInterval = () => {
    clearInterval(intervalId);
    setIntervalId(null);
  };

  useEffect(() => {
    if (start) startTimer();
  }, [start]);

  useEffect(() => {
    if (reset) {
      setTimer(timeToSet);
      disposeInterval();
    } else if (timer === 0) {
      onGameOver();
      disposeInterval();
    }
  }, [timer, reset]);

  return (
    <TextBox
      bgColor="#3c4d5c"
      size={{ height: "100%", width: "100%" }}
      txtSize={25}
    >
      {timer}
      {timer > 0 ? "s" : ""}
    </TextBox>
  );
}
