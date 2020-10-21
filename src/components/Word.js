import React from "react";
import highlights from "../styles/highlights";

export default function Word({ status, index, word }) {
  return (
    <span
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
