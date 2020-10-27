import React from "react";
import FlexItem from "./reusable/FlexItem";
import FlexSection from "./reusable/FlexSection";
import ResultItem from "./ResultItem";

export default function ResultsContainer({ results }) {
  const total = results.correct + results.wrong;

  const roundedScore = total
    ? ((results.correct / total) * 100).toFixed(1)
    : "-";

  return (
    <div data-testid="resultscontainer">
      <FlexSection
        direction="column"
        style={{
          width: "100%",
          borderSizing: "border-box",
          border: "2px solid black",
        }}
      >
        <FlexItem
          data-testid="resultContainerValue"
          style={{ marginBottom: "0px", borderBottom: "2px solid black" }}
        >
          <ResultItem
            size={{ value: "3em" }}
            value={results.correct}
            hint="(words per minute)"
          />
        </FlexItem>
        <FlexItem
          data-testid="resultContainerScore"
          style={{ marginBottom: "0px" }}
        >
          <ResultItem
            label="Accuracy"
            value={`${roundedScore}%`}
            color={roundedScore > 90 ? "green" : "orange"}
          />
        </FlexItem>

        <FlexItem data-testid="resultContainerWrong">
          <ResultItem label="Wrong" value={results.wrong} color="red" />
        </FlexItem>
        <FlexItem style={{ marginBottom: "0px" }}>
          <ResultItem label="Total Words" value={total} />
        </FlexItem>
      </FlexSection>
    </div>
  );
}
