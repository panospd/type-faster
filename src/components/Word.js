import React from "react";
import highlights from "../styles/highlights";

export default function Word({ status, index, word }) {
  (function ensureIsValid() {
    if ((!index && index !== 0) || !word)
      throw new Error("Invalid props for component Word");
  })();

  return (
    <span
      data-testid="word"
      index={index}
      style={{
        ...highlights[status],
        padding: "3px 5px",
        display: "inline-block",
        borderRadius: "3px",
      }}
    >
      {word}
    </span>
  );
}
