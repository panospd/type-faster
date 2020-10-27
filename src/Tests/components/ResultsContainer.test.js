import React from "react";
import { render, cleanup } from "@testing-library/react";
import ResultsContainer from "../../components/ResultsContainer";

afterEach(cleanup);

describe("ResultsContainei component", () => {
  it("renders", () => {
    const { getByTestId } = render(
      <ResultsContainer results={{ correct: 10, wrong: 5 }} />
    );

    const resultsContainer = getByTestId("resultscontainer");

    const expectedHtml =
      '<div data-testid="resultscontainer"><div data-testid="flexSection" style="width: 100%; border: 2px solid black; display: flex; flex-direction: column;"><div data-testid="resultContainerValue" style="flex-grow: 1; margin-bottom: 0px; border-bottom: 2px solid black;"><div data-testid="resultItem" style="padding: 10px; background-color: white; display: flex; flex-direction: row;"><div data-testid="flexItem" style="flex-grow: 1; text-align: center;"><span style="font-size: 3em; color: black;">10</span><span style="font-size: 1em; display: block;">(words per minute)</span></div></div></div><div data-testid="resultContainerScore" style="flex-grow: 1; margin-bottom: 0px;"><div data-testid="resultItem" style="padding: 10px; background-color: white; display: flex; flex-direction: row;"><div data-testid="flexItem" style="flex-grow: 1; text-align: left;"><span style="font-size: 1.6em;">Accuracy:</span>: </div><div data-testid="flexItem" style="flex-grow: 1; text-align: right;"><span style="font-size: 1.6em; color: orange;">66.7%</span></div></div></div><div data-testid="resultContainerWrong" style="flex-grow: 1;"><div data-testid="resultItem" style="padding: 10px; background-color: white; display: flex; flex-direction: row;"><div data-testid="flexItem" style="flex-grow: 1; text-align: left;"><span style="font-size: 1.6em;">Wrong:</span>: </div><div data-testid="flexItem" style="flex-grow: 1; text-align: right;"><span style="font-size: 1.6em; color: red;">5</span></div></div></div><div data-testid="flexItem" style="flex-grow: 1; margin-bottom: 0px;"><div data-testid="resultItem" style="padding: 10px; background-color: white; display: flex; flex-direction: row;"><div data-testid="flexItem" style="flex-grow: 1; text-align: left;"><span style="font-size: 1.6em;">Total Words:</span>: </div><div data-testid="flexItem" style="flex-grow: 1; text-align: right;"><span style="font-size: 1.6em; color: black;">15</span></div></div></div></div></div>';

    expect(resultsContainer.outerHTML).toBe(expectedHtml);
  });

  it("Correctly calculates results", () => {
    const { getByTestId } = render(
      <ResultsContainer results={{ correct: 13, wrong: 5 }} />
    );

    const wpm = getByTestId("resultContainerValue");
    const score = getByTestId("resultContainerScore").firstChild.lastChild;
    const wrong = getByTestId("resultContainerWrong").firstChild.lastChild;

    expect(wpm.textContent).toBe("13(words per minute)");
    expect(score.textContent).toBe("72.2%");
    expect(wrong.textContent).toBe("5");
  });
});
