import { act, cleanup, fireEvent, render } from "@testing-library/react";
import React from "react";

import NavBarItem from "../../components/NavbarItem";

afterEach(cleanup);

describe("NavbarItem", () => {
  it("Renders", () => {
    const { getByTestId } = render(<NavBarItem text="Item title" />);

    const navbarItem = getByTestId("navbarItem");

    const expected =
      '<div data-testid="navbarItem" style="flex-grow: 1; width: 100%;"><div data-testid="hoverable" style="opacity: 1; cursor: pointer; user-select: none; color: black; background-color: rgb(204, 204, 204);"><div data-testid="textBox" style="padding: 10px 0px; height: 100%; width: 100%; text-align: center; align-items: center; display: table;"><span style="display: table-cell; vertical-align: middle; font-size: 25px;"><span>Item title</span></span></div></div></div>';

    expect(navbarItem.outerHTML).toBe(expected);
  });

  it("fires event on click", () => {
    let eventFired = false;

    const { getByTestId } = render(
      <NavBarItem text="Item title" onClick={() => (eventFired = true)} />
    );

    const hoverable = getByTestId("hoverable");

    fireEvent.click(hoverable, {});

    expect(eventFired).toBe(true);
  });
});
