import React, { useState } from "react";

export default function Input({ onSpaceBarPress }) {
  const [input, setInput] = useState("");

  return (
    <input
      autoFocus
      value={input}
      onChange={e => {
        if (e.target.value !== " ") setInput(e.target.value);
      }}
      onKeyPress={e => {
        if (e.key !== " " || !e.target.value) return;
        onSpaceBarPress(e);

        setInput("");
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
