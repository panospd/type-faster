import { cleanup, render } from "@testing-library/react";
import React from "react";

import FlexSection from "../../../components/reusable/FlexSection";

afterEach(cleanup);

describe("FlexSection", () => {
  it("Renders", () => {
    const { getByTestId } = render(
      <FlexSection>
        <div>Hello</div>
      </FlexSection>
    );

    const flexSection = getByTestId("flexSection");

    const expected =
      '<div data-testid="flexSection" style="display: flex; flex-direction: row;"><div>Hello</div></div>';

    expect(flexSection.outerHTML).toBe(expected);
  });

  it("Has flex direction specified", () => {
    const { getByTestId } = render(
      <FlexSection direction="column">
        <div>Hello</div>
      </FlexSection>
    );

    const flexSection = getByTestId("flexSection");

    const expected =
      '<div data-testid="flexSection" style="display: flex; flex-direction: column;"><div>Hello</div></div>';

    expect(flexSection.outerHTML).toBe(expected);
  });
});
