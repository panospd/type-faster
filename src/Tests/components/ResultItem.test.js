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
      '<div data-testid="resultItem" style="padding: 10px; background-color: white; display: flex; flex-direction: row;"><div data-testid="flexItem" style="flex-grow: 1; text-align: left;"><span style="font-size: 1.6em;">The label:</span>: </div><div data-testid="flexItem" style="flex-grow: 1; text-align: right;"><span style="font-size: 1.6em; color: green;">5</span></div></div>';

    expect(resultItem.outerHTML).toBe(expectedHtml);
  });

  it("Overrides size defaults when passing size props", () => {
    const { getByTestId } = render(
      <ResultItem
        size={{ label: "5px", value: "6px" }}
        label="The label"
        value={5}
        color="green"
      />
    );

    const resultItem = getByTestId("resultItem");

    const expectedHtml =
      '<div data-testid="resultItem" style="padding: 10px; background-color: white; display: flex; flex-direction: row;"><div data-testid="flexItem" style="flex-grow: 1; text-align: left;"><span style="font-size: 5px;">The label:</span>: </div><div data-testid="flexItem" style="flex-grow: 1; text-align: right;"><span style="font-size: 6px; color: green;">5</span></div></div>';

    expect(resultItem.outerHTML).toBe(expectedHtml);
  });

  it("has textAlign center for value if label is not present", () => {
    const { getByTestId } = render(<ResultItem value={5} color="green" />);

    const resultItem = getByTestId("resultItem");

    const expectedHtml =
      '<div data-testid="resultItem" style="padding: 10px; background-color: white; display: flex; flex-direction: row;"><div data-testid="flexItem" style="flex-grow: 1; text-align: center;"><span style="font-size: 1.6em; color: green;">5</span></div></div>';

    expect(resultItem.outerHTML).toBe(expectedHtml);
  });

  it("Renders hint when passed as prop", () => {
    const { getByTestId } = render(
      <ResultItem
        size={{ label: "5px", value: "6px" }}
        label="The label"
        value={5}
        hint="This is the hint"
        color="green"
      />
    );

    const resultItem = getByTestId("resultItem");

    const expectedHtml =
      '<div data-testid="resultItem" style="padding: 10px; background-color: white; display: flex; flex-direction: row;"><div data-testid="flexItem" style="flex-grow: 1; text-align: left;"><span style="font-size: 5px;">The label:</span>: </div><div data-testid="flexItem" style="flex-grow: 1; text-align: right;"><span style="font-size: 6px; color: green;">5</span><span style="font-size: 1em; display: block;">This is the hint</span></div></div>';

    expect(resultItem.outerHTML).toBe(expectedHtml);
  });

  it("Overrides hint size when passed as prop", () => {
    const { getByTestId } = render(
      <ResultItem
        size={{ label: "5px", value: "6px", hint: "11px" }}
        label="The label"
        value={5}
        hint="This is the hint"
        color="green"
      />
    );

    const resultItem = getByTestId("resultItem");

    const expectedHtml =
      '<div data-testid="resultItem" style="padding: 10px; background-color: white; display: flex; flex-direction: row;"><div data-testid="flexItem" style="flex-grow: 1; text-align: left;"><span style="font-size: 5px;">The label:</span>: </div><div data-testid="flexItem" style="flex-grow: 1; text-align: right;"><span style="font-size: 6px; color: green;">5</span><span style="font-size: 11px; display: block;">This is the hint</span></div></div>';

    expect(resultItem.outerHTML).toBe(expectedHtml);
  });
});
