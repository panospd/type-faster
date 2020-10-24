import React from "react";
import { render, cleanup } from "@testing-library/react";
import TextContainer from "../../components/TextContainer";

afterEach(cleanup);

describe("TextContainer", () => {
  it("renders TextContainer component", () => {
    const { getByTestId } = render(
      <TextContainer text="This is a dummy text" wordInputs={[]} top={0} />
    );

    const expectedHtml =
      '<span data-testid="word" index="0" style="background-color: lightgrey; padding: 3px 5px; display: inline-block; border-radius: 3px;">This</span><span data-testid="word" index="1" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">is</span><span data-testid="word" index="2" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">a</span><span data-testid="word" index="3" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">dummy</span><span data-testid="word" index="4" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">text</span>';

    expect(getByTestId("textContainer").innerHTML).toBe(expectedHtml);
  });

  it("Should highlight words typed correcty", () => {
    const { getByTestId } = render(
      <TextContainer
        text="This is a dummy text"
        wordInputs={["This", "is"]}
        top={0}
      />
    );

    const expectedHtml =
      '<span data-testid="word" index="0" style="color: limegreen; padding: 3px 5px; display: inline-block; border-radius: 3px;">This</span><span data-testid="word" index="1" style="color: limegreen; padding: 3px 5px; display: inline-block; border-radius: 3px;">is</span><span data-testid="word" index="2" style="background-color: lightgrey; padding: 3px 5px; display: inline-block; border-radius: 3px;">a</span><span data-testid="word" index="3" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">dummy</span><span data-testid="word" index="4" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">text</span>';

    expect(getByTestId("textContainer").innerHTML).toBe(expectedHtml);
  });

  it("Should highlight red, words typed wrongly", () => {
    const { getByTestId } = render(
      <TextContainer
        text="This is a dummy text"
        wordInputs={["Thos", "os"]}
        top={0}
      />
    );

    const expectedHtml =
      '<span data-testid="word" index="0" style="color: red; padding: 3px 5px; display: inline-block; border-radius: 3px;">This</span><span data-testid="word" index="1" style="color: red; padding: 3px 5px; display: inline-block; border-radius: 3px;">is</span><span data-testid="word" index="2" style="background-color: lightgrey; padding: 3px 5px; display: inline-block; border-radius: 3px;">a</span><span data-testid="word" index="3" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">dummy</span><span data-testid="word" index="4" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">text</span>';

    expect(getByTestId("textContainer").innerHTML).toBe(expectedHtml);
  });

  it("Should be case sensitive", () => {
    const { getByTestId } = render(
      <TextContainer
        text="This is a dummy text"
        wordInputs={["this", "is"]}
        top={0}
      />
    );

    const expectedHtml =
      '<span data-testid="word" index="0" style="color: red; padding: 3px 5px; display: inline-block; border-radius: 3px;">This</span><span data-testid="word" index="1" style="color: limegreen; padding: 3px 5px; display: inline-block; border-radius: 3px;">is</span><span data-testid="word" index="2" style="background-color: lightgrey; padding: 3px 5px; display: inline-block; border-radius: 3px;">a</span><span data-testid="word" index="3" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">dummy</span><span data-testid="word" index="4" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">text</span>';

    expect(getByTestId("textContainer").innerHTML).toBe(expectedHtml);
  });
});
