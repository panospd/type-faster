import React, { useState } from "react";

export default function Input({ onSpaceBarPress, onInputChange }) {
  const [input, setInput] = useState("");

  const emitChange = value => onInputChange && onInputChange(value);

  return (
    <input
      data-testid="input"
      autoFocus
      value={input}
      onChange={e => {
        if (e.target.value === " ") return;

        const val = e.target.value;

        setInput(val);
        emitChange(val);
      }}
      onKeyPress={e => {
        if (e.key !== " " || !e.target.value) return;
        onSpaceBarPress(input);

        setInput("");
        emitChange("");
      }}
      style={{
        width: "60%",
        height: "60px",
        fontSize: "25px",
        padding: "5px 20px",
        borderRadius: "20px",
        outline: "none",
      }}
    />
  );
}
