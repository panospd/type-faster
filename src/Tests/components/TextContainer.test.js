import React from "react";
import { render, cleanup } from "@testing-library/react";
import TextContainer from "../../components/TextContainer";

afterEach(cleanup);

describe("TextContainer", () => {
  it("renders TextContainer component", () => {
    const { getByTestId } = render(
      <TextContainer text="This is a dummy text" results={[]} top={0} />
    );

    const expectedHtml =
      '<span index="0" style="background-color: lightgrey; padding: 3px 5px; display: inline-block; border-radius: 3px;">This</span><span index="1" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">is</span><span index="2" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">a</span><span index="3" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">dummy</span><span index="4" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">text</span>';

    expect(getByTestId("textContainer").innerHTML).toBe(expectedHtml);
  });

  it("Should highlight words typed correcty", () => {
    const { getByTestId } = render(
      <TextContainer
        text="This is a dummy text"
        results={["This", "is"]}
        top={0}
      />
    );

    const expectedHtml =
      '<span index="0" style="color: limegreen; padding: 3px 5px; display: inline-block; border-radius: 3px;">This</span><span index="1" style="color: limegreen; padding: 3px 5px; display: inline-block; border-radius: 3px;">is</span><span index="2" style="background-color: lightgrey; padding: 3px 5px; display: inline-block; border-radius: 3px;">a</span><span index="3" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">dummy</span><span index="4" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">text</span>';

    expect(getByTestId("textContainer").innerHTML).toBe(expectedHtml);
  });

  it("Should highlight red, words typed wrongly", () => {
    const { getByTestId } = render(
      <TextContainer
        text="This is a dummy text"
        results={["Thos", "os"]}
        top={0}
      />
    );

    const expectedHtml =
      '<span index="0" style="color: red; padding: 3px 5px; display: inline-block; border-radius: 3px;">This</span><span index="1" style="color: red; padding: 3px 5px; display: inline-block; border-radius: 3px;">is</span><span index="2" style="background-color: lightgrey; padding: 3px 5px; display: inline-block; border-radius: 3px;">a</span><span index="3" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">dummy</span><span index="4" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">text</span>';

    expect(getByTestId("textContainer").innerHTML).toBe(expectedHtml);
  });

  it("Should be case sensitive", () => {
    const { getByTestId } = render(
      <TextContainer
        text="This is a dummy text"
        results={["this", "is"]}
        top={0}
      />
    );

    const expectedHtml =
      '<span index="0" style="color: red; padding: 3px 5px; display: inline-block; border-radius: 3px;">This</span><span index="1" style="color: limegreen; padding: 3px 5px; display: inline-block; border-radius: 3px;">is</span><span index="2" style="background-color: lightgrey; padding: 3px 5px; display: inline-block; border-radius: 3px;">a</span><span index="3" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">dummy</span><span index="4" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">text</span>';

    expect(getByTestId("textContainer").innerHTML).toBe(expectedHtml);
  });
});
