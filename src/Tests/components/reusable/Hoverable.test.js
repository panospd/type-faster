import { cleanup, fireEvent, render } from "@testing-library/react";
import React from "react";

import Hoverable from "../../../components/reusable/Hoverable";

afterEach(cleanup);

describe("Hoverable", () => {
  it("Renders", () => {
    const { getByTestId } = render(
      <Hoverable
        colors={{
          unSelected: {
            bg: "black",
            txt: "white",
          },
          selected: {
            bg: "white",
            txt: "black",
          },
        }}
        render={() => <div>This is the content of hoverable</div>}
      />
    );

    const hoverable = getByTestId("hoverable");

    const expected =
      '<div data-testid="hoverable" style="opacity: 1; cursor: pointer; user-select: none; color: white; background-color: black;"><div>This is the content of hoverable</div></div>';

    expect(hoverable.outerHTML).toBe(expected);
  });

  it("On mouse over set opacity to 0.9", () => {
    const { getByTestId } = render(
      <Hoverable
        colors={{
          unSelected: {
            bg: "black",
            txt: "white",
          },
          selected: {
            bg: "white",
            txt: "black",
          },
        }}
        render={() => <div>This is the content of hoverable</div>}
      />
    );

    const hoverable = getByTestId("hoverable");

    fireEvent.mouseOver(hoverable, {});

    const expected =
      '<div data-testid="hoverable" style="opacity: 0.9; cursor: pointer; user-select: none; color: white; background-color: black;"><div>This is the content of hoverable</div></div>';

    expect(hoverable.outerHTML).toBe(expected);
  });

  it("On mouse leave set opacity to 1", () => {
    const { getByTestId } = render(
      <Hoverable
        colors={{
          unSelected: {
            bg: "black",
            txt: "white",
          },
          selected: {
            bg: "white",
            txt: "black",
          },
        }}
        render={() => <div>This is the content of hoverable</div>}
      />
    );

    const hoverable = getByTestId("hoverable");

    fireEvent.mouseOver(hoverable, {});

    const expectedOnMouseOver =
      '<div data-testid="hoverable" style="opacity: 0.9; cursor: pointer; user-select: none; color: white; background-color: black;"><div>This is the content of hoverable</div></div>';

    expect(hoverable.outerHTML).toBe(expectedOnMouseOver);

    fireEvent.mouseLeave(hoverable, {});

    const expectedOnMouseLeave =
      '<div data-testid="hoverable" style="opacity: 1; cursor: pointer; user-select: none; color: white; background-color: black;"><div>This is the content of hoverable</div></div>';

    expect(hoverable.outerHTML).toBe(expectedOnMouseLeave);
  });

  it("fires event on click", () => {
    let eventFired = false;

    const { getByTestId } = render(
      <Hoverable
        onClick={() => (eventFired = true)}
        colors={{
          unSelected: {
            bg: "black",
            txt: "white",
          },
          selected: {
            bg: "white",
            txt: "black",
          },
        }}
        render={() => <div>This is the content of hoverable</div>}
      />
    );

    const hoverable = getByTestId("hoverable");

    fireEvent.click(hoverable, {});

    expect(eventFired).toBe(true);
  });

  it("On select update colors to selected", () => {
    let selected = false;

    const { getByTestId } = render(
      <Hoverable
        onClick={() => (selected = true)}
        selected={selected}
        colors={{
          unSelected: {
            bg: "black",
            txt: "white",
          },
          selected: {
            bg: "white",
            txt: "black",
          },
        }}
        render={() => <div>This is the content of hoverable</div>}
      />
    );

    const hoverable = getByTestId("hoverable");

    fireEvent.click(hoverable, {});

    const expected =
      '<div data-testid="hoverable" style="opacity: 1; cursor: pointer; user-select: none; color: black; background-color: white;"><div>This is the content of hoverable</div></div>';

    expect(hoverable.outerHTML).toBe(expected);
  });

  it("On unSelect update colors to unselected", () => {
    const { getByTestId, rerender } = render(
      <Hoverable
        selected={true}
        colors={{
          unSelected: {
            bg: "black",
            txt: "white",
          },
          selected: {
            bg: "white",
            txt: "black",
          },
        }}
        render={() => <div>This is the content of hoverable</div>}
      />
    );

    rerender(
      <Hoverable
        selected={false}
        colors={{
          unSelected: {
            bg: "black",
            txt: "white",
          },
          selected: {
            bg: "white",
            txt: "black",
          },
        }}
        render={() => <div>This is the content of hoverable</div>}
      />
    );

    const hoverable = getByTestId("hoverable");

    const expected =
      '<div data-testid="hoverable" style="opacity: 1; cursor: pointer; user-select: none; color: white; background-color: black;"><div>This is the content of hoverable</div></div>';

    expect(hoverable.outerHTML).toBe(expected);
  });
});
