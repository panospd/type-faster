import React from "react";
import { render, cleanup } from "@testing-library/react";

import TextBox from "../../../components/reusable/TextBox";

afterEach(cleanup);

describe("TextBox component", () => {
  it("renders", () => {
    const { getByTestId } = render(
      <TextBox size={{ height: "100px", width: "100px" }} text="Hello" />
    );

    const textBox = getByTestId("textBox");

    const expectedHtml =
      '<div data-testid="textBox" style="background-color: rgb(60, 77, 92); color: white; height: 100px; width: 100px; text-align: center; align-items: center; display: table;"><span style="display: table-cell; vertical-align: middle; font-size: 1em;">Hello</span></div>';

    expect(textBox.outerHTML).toBe(expectedHtml);
  });

  it("It renders color, bgColor, txtSize and style specified", () => {
    const { getByTestId } = render(
      <TextBox
        bgColor="black"
        color="green"
        style={{ padding: "20px" }}
        size={{ height: "100px", width: "100px" }}
        txtSize="25px"
        text="Hello"
      />
    );

    const textBox = getByTestId("textBox");

    const expectedHtml =
      '<div data-testid="textBox" style="padding: 20px; background-color: black; color: green; height: 100px; width: 100px; text-align: center; align-items: center; display: table;"><span style="display: table-cell; vertical-align: middle; font-size: 25px;">Hello</span></div>';

    expect(textBox.outerHTML).toBe(expectedHtml);
  });

  it("Children override text", () => {
    const { getByTestId } = render(
      <TextBox size={{ height: "100px", width: "100px" }} text="Hello">
        This will override whatever passed on text
      </TextBox>
    );

    const textBox = getByTestId("textBox");

    const expectedHtml =
      '<div data-testid="textBox" style="background-color: rgb(60, 77, 92); color: white; height: 100px; width: 100px; text-align: center; align-items: center; display: table;"><span style="display: table-cell; vertical-align: middle; font-size: 1em;">This will override whatever passed on text</span></div>';

    expect(textBox.outerHTML).toBe(expectedHtml);
  });
});
