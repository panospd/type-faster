import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import Reload from "../../../components/reusable/Reload";

afterEach(cleanup);

describe("Reload component", () => {
  it("renders", () => {
    const { getByTestId } = render(<Reload />);

    const reload = getByTestId("reload");

    const expectedHtml =
      '<div data-testid="reload" style="height: 100%; opacity: 1; cursor: pointer;"><div data-testid="textBox" style="background-color: grey; color: white; height: 100%; width: 100%; text-align: center; align-items: center; display: table;"><span style="display: table-cell; vertical-align: middle; font-size: 25px;"><span><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" size="30" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M256.455 8c66.269.119 126.437 26.233 170.859 68.685l35.715-35.715C478.149 25.851 504 36.559 504 57.941V192c0 13.255-10.745 24-24 24H345.941c-21.382 0-32.09-25.851-16.971-40.971l41.75-41.75c-30.864-28.899-70.801-44.907-113.23-45.273-92.398-.798-170.283 73.977-169.484 169.442C88.764 348.009 162.184 424 256 424c41.127 0 79.997-14.678 110.629-41.556 4.743-4.161 11.906-3.908 16.368.553l39.662 39.662c4.872 4.872 4.631 12.815-.482 17.433C378.202 479.813 319.926 504 256 504 119.034 504 8.001 392.967 8 256.002 7.999 119.193 119.646 7.755 256.455 8z"></path></svg></span></span></div></div>';

    expect(reload.outerHTML).toBe(expectedHtml);
  });

  it("invokes on click event", () => {
    let eventInvoked = false;

    const handleClick = () => (eventInvoked = true);

    const { getByTestId } = render(<Reload onClick={handleClick} />);

    const reload = getByTestId("reload");

    fireEvent.click(reload, {});

    expect(eventInvoked).toBe(true);
  });

  it("if disabled it does not invoke on click event", () => {
    let eventInvoked = false;

    const handleClick = () => (eventInvoked = true);

    const { getByTestId } = render(
      <Reload onClick={handleClick} disabled={true} />
    );

    const reload = getByTestId("reload");

    fireEvent.click(reload, {});

    expect(eventInvoked).toBe(false);
  });
});
