import React, { useEffect, useState } from "react";
import settings from "../../config/settings";
import TextBox from "./TextBox";

export default function Timer({ start, onGameOver, reset }) {
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
  const timeToSet = settings.timer;

  const [timer, setTimer] = useState(timeToSet);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    if (start && reset) throw new Error("Invalid prop state for Timer");
  }, [start, reset]);

  useEffect(() => {
    startTimer(start, intervalId, timeToSet, timer, setTimer, setIntervalId);
  }, [start]);

  useEffect(() => {
    if (reset) {
      setTimer(timeToSet);
      disposeInterval(intervalId, setIntervalId);
    }
  }, [reset]);

  useEffect(() => {
    if (timer === 0 && intervalId) {
      onGameOver();
      disposeInterval(intervalId, setIntervalId);
    }
  }, [timer]);

  return (
    <div data-testid="timer" style={{ height: "100%", width: "100%" }}>
      <TextBox
        bgColor="#3c4d5c"
        color="white"
        size={{ height: "100%", width: "100%" }}
        txtSize={25}
      >
        {timer}
        {timer > 0 ? "s" : ""}
      </TextBox>
    </div>
  );
}
