import { act, cleanup, fireEvent, render } from "@testing-library/react";
import React from "react";
import Navbar from "../../components/Navbar";

import NavBarItem from "../../components/NavbarItem";

afterEach(cleanup);

describe("Navbar", () => {
  it("Renders", () => {
    const mode = "regular";
    const { getByTestId } = render(<Navbar mode={mode} />);

    const navbar = getByTestId("navbar");

    const expected =
      '<div data-testid="navbar" style="align-items: center; background-color: rgb(204, 204, 204); width: 40%; margin: auto; display: flex; flex-direction: column;"><div data-testid="navbarItem" style="flex-grow: 1; width: 100%;"><div data-testid="regularItem" style="opacity: 1; cursor: pointer; user-select: none; color: white; background-color: rgb(60, 77, 92);"><div data-testid="textBox" style="padding: 10px 0px; height: 100%; width: 100%; text-align: center; align-items: center; display: table;"><span style="display: table-cell; vertical-align: middle; font-size: 25px;"><span>Regular</span></span></div></div></div><div data-testid="navbarItem" style="flex-grow: 1; width: 100%;"><div data-testid="advancedItem" style="opacity: 1; cursor: pointer; user-select: none; color: black; background-color: rgb(204, 204, 204);"><div data-testid="textBox" style="padding: 10px 0px; height: 100%; width: 100%; text-align: center; align-items: center; display: table;"><span style="display: table-cell; vertical-align: middle; font-size: 25px;"><span>Advanced</span></span></div></div></div></div>';

    expect(navbar.outerHTML).toBe(expected);
  });

  it("toggles mode on click", () => {
    let mode = "regular";
    const { getByTestId } = render(
      <Navbar mode={mode} setMode={() => (mode = "advanced")} />
    );

    const navbar = getByTestId("navbar");

    const advancedItem = getByTestId("advancedItem");

    fireEvent.click(advancedItem, {});

    const expected =
      '<div data-testid="navbar" style="align-items: center; background-color: rgb(204, 204, 204); width: 40%; margin: auto; display: flex; flex-direction: column;"><div data-testid="navbarItem" style="flex-grow: 1; width: 100%;"><div data-testid="regularItem" style="opacity: 1; cursor: pointer; user-select: none; color: white; background-color: rgb(60, 77, 92);"><div data-testid="textBox" style="padding: 10px 0px; height: 100%; width: 100%; text-align: center; align-items: center; display: table;"><span style="display: table-cell; vertical-align: middle; font-size: 25px;"><span>Regular</span></span></div></div></div><div data-testid="navbarItem" style="flex-grow: 1; width: 100%;"><div data-testid="advancedItem" style="opacity: 1; cursor: pointer; user-select: none; color: white; background-color: rgb(60, 77, 92);"><div data-testid="textBox" style="padding: 10px 0px; height: 100%; width: 100%; text-align: center; align-items: center; display: table;"><span style="display: table-cell; vertical-align: middle; font-size: 25px;"><span>Advanced</span></span></div></div></div></div>';

    expect(navbar.outerHTML).toBe(expected);
  });
});
