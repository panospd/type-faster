import React, { useEffect, useRef, useState } from "react";

export default function Input({
  onSpaceBarPress,
  onInputChange,
  disabled = false,
}) {
  const [input, setInput] = useState("");
  const inputElement = useRef(null);

  const emitChange = value => onInputChange && onInputChange(value);

  useEffect(() => {
    if (!disabled) inputElement.current.focus();

    setInput("");
  }, [disabled]);

  return (
    <input
      ref={inputElement}
      disabled={disabled}
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
        width: "100%",
        height: "60px",
        fontSize: "25px",
        padding: "5px 20px",
        boxSizing: "border-box",
        outline: "none",
      }}
    />
  );
}
