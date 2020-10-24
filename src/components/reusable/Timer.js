import React, { useEffect, useState } from "react";
import TextBox from "./TextBox";

const startTimer = (
  start,
  intervalId,
  timeToSet,
  timer,
  setTimer,
  setIntervalId
) => {
  if (start && !intervalId) {
    if (timer !== timeToSet) setTimer(timeToSet);

    setIntervalId(
      setInterval(() => {
        setTimer(current => current - 1);
      }, 1000)
    );
  }
};

const disposeInterval = (intervalId, setIntervalId) => {
  clearInterval(intervalId);
  setIntervalId(null);
};

export default function Timer({ start, onGameOver, time, reset }) {
  const timeToSet = time ?? 60;

  const [timer, setTimer] = useState(timeToSet);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    if (start)
      startTimer(start, intervalId, timeToSet, timer, setTimer, setIntervalId);
  }, [start, intervalId, timeToSet, timer, setIntervalId]);

  useEffect(() => {
    if (reset) {
      setTimer(timeToSet);
      disposeInterval(intervalId, setIntervalId);
    } else if (timer === 0) {
      onGameOver();
      disposeInterval(intervalId, setIntervalId);
    }
  }, [timer, reset, onGameOver, timeToSet, intervalId, setIntervalId]);

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
