import React from "react";
import FlexItem from "./reusable/FlexItem";
import FlexSection from "./reusable/FlexSection";

export default function ResultItem({
  label,
  size,
  value,
  color = "black",
  hint,
}) {
  return (
    <FlexSection data-testid="resultItem" style={{ padding: "8px" }}>
      {label && (
        <FlexItem grow={1} style={{ textAlign: "left" }}>
          <span style={{ fontSize: size?.label ?? "1.6em" }}>{label}:</span>:{" "}
        </FlexItem>
      )}
      <FlexItem grow={1} style={{ textAlign: label ? "right" : "center" }}>
        <span
          style={{ fontSize: size?.value ?? "1.6em", color }}
        >{`${value}`}</span>
        {hint && (
          <span style={{ fontSize: size?.hint ?? "1em", display: "block" }}>
            {hint}
          </span>
        )}
      </FlexItem>
    </FlexSection>
  );
}
