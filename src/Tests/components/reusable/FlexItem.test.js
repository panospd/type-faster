import { cleanup, render } from "@testing-library/react";
import React from "react";
import FlexItem from "../../../components/reusable/FlexItem";

afterEach(cleanup);

describe("FlexItem", () => {
  it("Renders", () => {
    const { getByTestId } = render(
      <FlexItem>
        <div>Hello</div>
      </FlexItem>
    );

    const flexItem = getByTestId("flexItem");

    const expected =
      '<div data-testid="flexItem" style="flex-grow: 1;"><div>Hello</div></div>';

    expect(flexItem.outerHTML).toBe(expected);
  });

  it("Has flex grow specified", () => {
    const { getByTestId } = render(
      <FlexItem grow={1.5}>
        <div>Hello</div>
      </FlexItem>
    );

    const flexItem = getByTestId("flexItem");

    const expected =
      '<div data-testid="flexItem" style="flex-grow: 1.5;"><div>Hello</div></div>';

    expect(flexItem.outerHTML).toBe(expected);
  });

  it("Has additional style specified", () => {
    const { getByTestId } = render(
      <FlexItem grow={1.5} style={{ color: "red" }}>
        <div>Hello</div>
      </FlexItem>
    );

    const flexItem = getByTestId("flexItem");

    const expected =
      '<div data-testid="flexItem" style="flex-grow: 1.5; color: red;"><div>Hello</div></div>';

    expect(flexItem.outerHTML).toBe(expected);
  });
});
