import React from "react";
import { render, cleanup } from "@testing-library/react";
import ResultItem from "../../components/ResultItem";

afterEach(cleanup);

describe("ResultItem component", () => {
  it("renders", () => {
    const { getByTestId } = render(
      <ResultItem label="The label" value={5} color="green" />
    );

    const resultItem = getByTestId("resultItem");

    const expectedHtml =
      '<div data-testid="resultItem" style="display: flex; flex-direction: row;"><div data-testid="flexItem" style="flex-grow: 2; text-align: left;"><span style="font-size: 3em;">The label:</span>: </div><div data-testid="flexItem" style="flex-grow: 0.5; text-align: right;"><span style="font-size: 3em; color: green;">5</span></div></div>';

    expect(resultItem.outerHTML).toBe(expectedHtml);
  });
});
