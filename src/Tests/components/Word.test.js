import React from "react";
import { render, cleanup } from "@testing-library/react";
import Word from "../../components/Word";

afterEach(cleanup);

describe("Word component", () => {
  it("renders", () => {
    const { getByTestId } = render(
      <Word status="focus" index={0} word="hello" />
    );

    const expectedHtml =
      '<span data-testid="word" index="0" style="background-color: lightgrey; padding: 3px 5px; display: inline-block; border-radius: 3px;">hello</span>';

    expect(getByTestId("word").outerHTML).toBe(expectedHtml);
  });

  it("renders without status", () => {
    const { getByTestId } = render(<Word index={0} word="hello" />);

    const expectedHtml =
      '<span data-testid="word" index="0" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">hello</span>';

    expect(getByTestId("word").outerHTML).toBe(expectedHtml);
  });

  it("throws error when index is undefined", () => {
    expect(() => {
      render(<Word word="hello" />).toThrow(
        new Error("Invalid props for component Word")
      );
    });
  });

  it("throws error when word prop is falsy", () => {
    expect(() => {
      render(<Word index={2} word="" />).toThrow(
        new Error("Invalid props for component Word")
      );
    });
  });
});
