import React from "react";
import FlexItem from "./FlexItem";
import FlexSection from "./FlexSection";

export default function ResultItem({ label, value, color = "black" }) {
  return (
    <FlexSection>
      <FlexItem grow={2} style={{ textAlign: "left" }}>
        <span style={{ fontSize: "3em" }}>{label}:</span>:{" "}
      </FlexItem>
      <FlexItem grow={0.5} style={{ textAlign: "right" }}>
        <span style={{ fontSize: "3em", color }}>{value}</span>
      </FlexItem>
    </FlexSection>
  );
}
