import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import Input from "../../components/reusable/Input";

afterEach(cleanup);

describe("Input component", () => {
  it("renders", () => {
    const { getByTestId } = render(<Input />);

    const input = getByTestId("input");

    const expectedHtml =
      '<input data-testid="input" style="width: 100%; height: 60px; font-size: 25px; padding: 5px 20px; box-sizing: border-box; outline: none;" value="">';

    expect(input.outerHTML).toBe(expectedHtml);
    expect(input.value).toBe("");
  });

  it("Updates value on change", () => {
    const { getByTestId } = render(<Input />);

    const input = getByTestId("input");

    fireEvent.change(input, { target: { value: "abc" } });

    expect(input.value).toBe("abc");
  });

  it("Does not register white space", () => {
    const { getByTestId } = render(<Input />);

    const input = getByTestId("input");

    fireEvent.change(input, { target: { value: " " } });

    expect(input.value).toBe("");
  });
});
