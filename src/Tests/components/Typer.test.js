import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import Typer from "../../components/Typer";
import textGenerator from "../../services/textGenerator";

afterEach(cleanup);

beforeEach(() => {
  textGenerator.generate = () => {
    return "This is a test sentence. Second sentence in a new paragraph";
  };
});

const registerWord = (input, value) => {
  fireEvent.change(input, { target: { value } });
  fireEvent.keyPress(input, {
    key: " ",
    code: "Space",
    charCode: 32,
  });
};

describe("Typer component", () => {
  it("renders", () => {
    const { getByTestId } = render(<Typer />);

    const typer = getByTestId("typer");

    const expectedHtml =
      '<div style="flex-grow: 0.05;"><div style="height: 98px; line-height: 1.4em; font-size: 2.2em; color: black; overflow: hidden; width: 100%; background-color: white; padding: 5px 10px; text-align: left;"><div id="words" data-testid="textContainer" style="position: relative; top: 0px;"><span data-testid="word" index="0" style="background-color: lightgrey; padding: 3px 5px; display: inline-block; border-radius: 3px;">This</span><span data-testid="word" index="1" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">is</span><span data-testid="word" index="2" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">a</span><span data-testid="word" index="3" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">test</span><span data-testid="word" index="4" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">sentence.</span><span data-testid="word" index="5" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">Second</span><span data-testid="word" index="6" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">sentence</span><span data-testid="word" index="7" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">in</span><span data-testid="word" index="8" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">a</span><span data-testid="word" index="9" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">new</span><span data-testid="word" index="10" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">paragraph</span></div></div></div><div style="flex-grow: 1; text-align: center;"><input data-testid="input" style="width: 60%; height: 60px; font-size: 25px; padding: 5px 20px; border-radius: 20px; outline: none;" value=""></div>';

    expect(typer.innerHTML).toBe(expectedHtml);
  });

  it("registers correct word typing", () => {
    const { getByTestId } = render(<Typer />);

    const typer = getByTestId("typer");
    const input = getByTestId("input");

    registerWord(input, "This");

    const expectedHtml =
      '<div style="flex-grow: 0.05;"><div style="height: 98px; line-height: 1.4em; font-size: 2.2em; color: black; overflow: hidden; width: 100%; background-color: white; padding: 5px 10px; text-align: left;"><div id="words" data-testid="textContainer" style="position: relative; top: 0px;"><span data-testid="word" index="0" style="padding: 3px 5px; display: inline-block; border-radius: 3px; color: limegreen;">This</span><span data-testid="word" index="1" style="padding: 3px 5px; display: inline-block; border-radius: 3px; background-color: lightgrey;">is</span><span data-testid="word" index="2" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">a</span><span data-testid="word" index="3" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">test</span><span data-testid="word" index="4" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">sentence.</span><span data-testid="word" index="5" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">Second</span><span data-testid="word" index="6" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">sentence</span><span data-testid="word" index="7" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">in</span><span data-testid="word" index="8" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">a</span><span data-testid="word" index="9" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">new</span><span data-testid="word" index="10" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">paragraph</span></div></div></div><div style="flex-grow: 1; text-align: center;"><input data-testid="input" style="width: 60%; height: 60px; font-size: 25px; padding: 5px 20px; border-radius: 20px; outline: none;" value=""></div>';

    expect(typer.innerHTML).toBe(expectedHtml);
  });

  it("registers correct and wrong word typing", () => {
    const { getByTestId } = render(<Typer />);

    const typer = getByTestId("typer");
    const input = getByTestId("input");

    registerWord(input, "This");
    registerWord(input, "is");
    registerWord(input, "o");
    registerWord(input, "tst");

    const expectedHtml =
      '<div style="flex-grow: 0.05;"><div style="height: 98px; line-height: 1.4em; font-size: 2.2em; color: black; overflow: hidden; width: 100%; background-color: white; padding: 5px 10px; text-align: left;"><div id="words" data-testid="textContainer" style="position: relative; top: 0px;"><span data-testid="word" index="0" style="padding: 3px 5px; display: inline-block; border-radius: 3px; color: limegreen;">This</span><span data-testid="word" index="1" style="padding: 3px 5px; display: inline-block; border-radius: 3px; color: limegreen;">is</span><span data-testid="word" index="2" style="padding: 3px 5px; display: inline-block; border-radius: 3px; color: red;">a</span><span data-testid="word" index="3" style="padding: 3px 5px; display: inline-block; border-radius: 3px; color: red;">test</span><span data-testid="word" index="4" style="padding: 3px 5px; display: inline-block; border-radius: 3px; background-color: lightgrey;">sentence.</span><span data-testid="word" index="5" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">Second</span><span data-testid="word" index="6" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">sentence</span><span data-testid="word" index="7" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">in</span><span data-testid="word" index="8" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">a</span><span data-testid="word" index="9" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">new</span><span data-testid="word" index="10" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">paragraph</span></div></div></div><div style="flex-grow: 1; text-align: center;"><input data-testid="input" style="width: 60%; height: 60px; font-size: 25px; padding: 5px 20px; border-radius: 20px; outline: none;" value=""></div>';

    expect(typer.innerHTML).toBe(expectedHtml);
  });
});
