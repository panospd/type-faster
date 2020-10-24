import React from "react";
import FlexItem from "./FlexItem";
import FlexSection from "./FlexSection";
import ResultItem from "./ResultItem";

export default function ResultsContainer({ results }) {
  const total = results.correct + results.wrong;

  const scorePercentage = (results.correct / total) * 100;
  const roundedScore = scorePercentage.toFixed(1);

  return (
    <div>
      <FlexSection
        direction="column"
        style={{ width: "100%", borderSizing: "border-box" }}
      >
        <FlexItem style={{ marginBottom: "0px" }}>
          <ResultItem
            label="Score"
            value={`${roundedScore}%`}
            color={roundedScore > 90 ? "green" : "orange"}
          />
        </FlexItem>

        <FlexItem style={{ marginBottom: "0px" }}>
          <ResultItem label="Correct" value={results.correct} color="green" />
        </FlexItem>
        <FlexItem>
          <ResultItem label="Wrong" value={results.wrong} color="red" />
        </FlexItem>
        <FlexItem style={{ marginBottom: "0px" }}>
          <ResultItem label="Total Words" value={total} />
        </FlexItem>
      </FlexSection>
    </div>
  );
}
