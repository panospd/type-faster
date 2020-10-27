import React from "react";
import { render, cleanup, fireEvent, act, wait } from "@testing-library/react";
import Typer from "../../components/Typer";
import textGenerator from "../../services/textGenerator";
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

beforeEach(() => {
  textGenerator.generate = () => {
    return "This is a test sentence. Second sentence in a new paragraph";
  };
});

const type = (input, value) => fireEvent.change(input, { target: { value } });

const registerWord = (input, value) => {
  type(input, value);
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
      '<div data-testid="typer" style="max-width: 1000px; width: 65%; align-items: center; display: flex; flex-direction: column;"><div data-testid="flexItem" style="flex-grow: 0.3;"><div data-testid="flexSection" style="align-items: center; display: flex; flex-direction: column;"><div data-testid="flexItem" style="flex-grow: 0.5;"><div style="height: 98px; line-height: 1.4em; font-size: 2.2em; color: black; overflow: hidden; width: 100%; background-color: white; padding: 5px 10px; text-align: left;"><div id="words" data-testid="textContainer" style="position: relative; top: 0px;"><span data-testid="word" index="0" style="background-color: lightgrey; padding: 3px 5px; display: inline-block; border-radius: 3px;">This</span><span data-testid="word" index="1" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">is</span><span data-testid="word" index="2" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">a</span><span data-testid="word" index="3" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">test</span><span data-testid="word" index="4" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">sentence.</span><span data-testid="word" index="5" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">Second</span><span data-testid="word" index="6" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">sentence</span><span data-testid="word" index="7" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">in</span><span data-testid="word" index="8" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">a</span><span data-testid="word" index="9" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">new</span><span data-testid="word" index="10" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">paragraph</span></div></div></div><div data-testid="flexItem" style="flex-grow: 1; width: 80%; padding-top: 10px;"><div data-testid="flexSection" style="display: flex; flex-direction: row;"><div data-testid="flexItem" style="flex-grow: 2;"><input data-testid="input" style="width: 100%; height: 60px; font-size: 25px; padding: 5px 20px; box-sizing: border-box; outline: none;" value=""></div><div data-testid="flexItem" style="flex-grow: 0.3; margin-left: 5px; min-width: 60px;"><div data-testid="timer" style="height: 100%; width: 100%;"><div data-testid="textBox" style="background-color: rgb(60, 77, 92); color: white; height: 100%; width: 100%; text-align: center; align-items: center; display: table;"><span style="display: table-cell; vertical-align: middle; font-size: 25px;">2s</span></div></div></div><div data-testid="flexItem" style="flex-grow: 0.3; margin-left: 5px; min-width: 60px;"><div data-testid="reload" style="height: 100%; opacity: 1; cursor: pointer;"><div data-testid="textBox" style="background-color: grey; color: white; height: 100%; width: 100%; text-align: center; align-items: center; display: table;"><span style="display: table-cell; vertical-align: middle; font-size: 25px;"><span><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" size="30" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M256.455 8c66.269.119 126.437 26.233 170.859 68.685l35.715-35.715C478.149 25.851 504 36.559 504 57.941V192c0 13.255-10.745 24-24 24H345.941c-21.382 0-32.09-25.851-16.971-40.971l41.75-41.75c-30.864-28.899-70.801-44.907-113.23-45.273-92.398-.798-170.283 73.977-169.484 169.442C88.764 348.009 162.184 424 256 424c41.127 0 79.997-14.678 110.629-41.556 4.743-4.161 11.906-3.908 16.368.553l39.662 39.662c4.872 4.872 4.631 12.815-.482 17.433C378.202 479.813 319.926 504 256 504 119.034 504 8.001 392.967 8 256.002 7.999 119.193 119.646 7.755 256.455 8z"></path></svg></span></span></div></div></div></div></div></div></div><div data-testid="flexItem" style="flex-grow: 1; width: 40%;"></div></div>';

    expect(typer.outerHTML).toBe(expectedHtml);
  });

  it("registers correct word typing", () => {
    const { getByTestId } = render(<Typer />);

    const input = getByTestId("input");

    registerWord(input, "This");

    const textContainer = getByTestId("textContainer");

    const expectedHtml =
      '<span data-testid="word" index="0" style="padding: 3px 5px; display: inline-block; border-radius: 3px; color: limegreen;">This</span><span data-testid="word" index="1" style="padding: 3px 5px; display: inline-block; border-radius: 3px; background-color: lightgrey;">is</span><span data-testid="word" index="2" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">a</span><span data-testid="word" index="3" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">test</span><span data-testid="word" index="4" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">sentence.</span><span data-testid="word" index="5" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">Second</span><span data-testid="word" index="6" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">sentence</span><span data-testid="word" index="7" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">in</span><span data-testid="word" index="8" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">a</span><span data-testid="word" index="9" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">new</span><span data-testid="word" index="10" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">paragraph</span><span data-testid="word" index="11" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">This</span><span data-testid="word" index="12" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">is</span><span data-testid="word" index="13" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">a</span><span data-testid="word" index="14" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">test</span><span data-testid="word" index="15" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">sentence.</span><span data-testid="word" index="16" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">Second</span><span data-testid="word" index="17" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">sentence</span><span data-testid="word" index="18" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">in</span><span data-testid="word" index="19" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">a</span><span data-testid="word" index="20" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">new</span><span data-testid="word" index="21" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">paragraph</span>';

    expect(textContainer.innerHTML).toBe(expectedHtml);
  });

  it("registers correct and wrong word typing", () => {
    const { getByTestId } = render(<Typer />);

    const input = getByTestId("input");

    registerWord(input, "This");
    registerWord(input, "is");
    registerWord(input, "o");
    registerWord(input, "tst");

    const textContainer = getByTestId("textContainer");

    const expectedHtml =
      '<span data-testid="word" index="0" style="padding: 3px 5px; display: inline-block; border-radius: 3px; color: limegreen;">This</span><span data-testid="word" index="1" style="padding: 3px 5px; display: inline-block; border-radius: 3px; color: limegreen;">is</span><span data-testid="word" index="2" style="padding: 3px 5px; display: inline-block; border-radius: 3px; color: red;">a</span><span data-testid="word" index="3" style="padding: 3px 5px; display: inline-block; border-radius: 3px; color: red;">test</span><span data-testid="word" index="4" style="padding: 3px 5px; display: inline-block; border-radius: 3px; background-color: lightgrey;">sentence.</span><span data-testid="word" index="5" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">Second</span><span data-testid="word" index="6" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">sentence</span><span data-testid="word" index="7" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">in</span><span data-testid="word" index="8" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">a</span><span data-testid="word" index="9" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">new</span><span data-testid="word" index="10" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">paragraph</span><span data-testid="word" index="11" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">This</span><span data-testid="word" index="12" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">is</span><span data-testid="word" index="13" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">a</span><span data-testid="word" index="14" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">test</span><span data-testid="word" index="15" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">sentence.</span><span data-testid="word" index="16" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">Second</span><span data-testid="word" index="17" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">sentence</span><span data-testid="word" index="18" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">in</span><span data-testid="word" index="19" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">a</span><span data-testid="word" index="20" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">new</span><span data-testid="word" index="21" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">paragraph</span><span data-testid="word" index="22" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">This</span><span data-testid="word" index="23" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">is</span><span data-testid="word" index="24" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">a</span><span data-testid="word" index="25" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">test</span><span data-testid="word" index="26" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">sentence.</span><span data-testid="word" index="27" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">Second</span><span data-testid="word" index="28" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">sentence</span><span data-testid="word" index="29" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">in</span><span data-testid="word" index="30" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">a</span><span data-testid="word" index="31" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">new</span><span data-testid="word" index="32" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">paragraph</span>';

    expect(textContainer.innerHTML).toBe(expectedHtml);
  });

  it("Previews wrongly typed word", () => {
    const { getByTestId } = render(<Typer />);

    const input = getByTestId("input");

    registerWord(input, "This");
    type(input, "o");

    const textContainer = getByTestId("textContainer");

    const expectedHtml =
      '<span data-testid="word" index="0" style="padding: 3px 5px; display: inline-block; border-radius: 3px; color: limegreen;">This</span><span data-testid="word" index="1" style="padding: 3px 5px; display: inline-block; border-radius: 3px; background-color: red;">is</span><span data-testid="word" index="2" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">a</span><span data-testid="word" index="3" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">test</span><span data-testid="word" index="4" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">sentence.</span><span data-testid="word" index="5" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">Second</span><span data-testid="word" index="6" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">sentence</span><span data-testid="word" index="7" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">in</span><span data-testid="word" index="8" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">a</span><span data-testid="word" index="9" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">new</span><span data-testid="word" index="10" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">paragraph</span><span data-testid="word" index="11" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">This</span><span data-testid="word" index="12" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">is</span><span data-testid="word" index="13" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">a</span><span data-testid="word" index="14" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">test</span><span data-testid="word" index="15" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">sentence.</span><span data-testid="word" index="16" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">Second</span><span data-testid="word" index="17" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">sentence</span><span data-testid="word" index="18" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">in</span><span data-testid="word" index="19" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">a</span><span data-testid="word" index="20" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">new</span><span data-testid="word" index="21" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">paragraph</span>';

    expect(textContainer.innerHTML).toBe(expectedHtml);
  });

  it("Focuses correctly typed word", () => {
    const { getByTestId } = render(<Typer />);

    const input = getByTestId("input");

    registerWord(input, "This");
    type(input, "i");

    const textContainer = getByTestId("textContainer");

    const expectedHtml =
      '<span data-testid="word" index="0" style="padding: 3px 5px; display: inline-block; border-radius: 3px; color: limegreen;">This</span><span data-testid="word" index="1" style="padding: 3px 5px; display: inline-block; border-radius: 3px; background-color: lightgrey;">is</span><span data-testid="word" index="2" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">a</span><span data-testid="word" index="3" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">test</span><span data-testid="word" index="4" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">sentence.</span><span data-testid="word" index="5" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">Second</span><span data-testid="word" index="6" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">sentence</span><span data-testid="word" index="7" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">in</span><span data-testid="word" index="8" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">a</span><span data-testid="word" index="9" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">new</span><span data-testid="word" index="10" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">paragraph</span><span data-testid="word" index="11" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">This</span><span data-testid="word" index="12" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">is</span><span data-testid="word" index="13" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">a</span><span data-testid="word" index="14" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">test</span><span data-testid="word" index="15" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">sentence.</span><span data-testid="word" index="16" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">Second</span><span data-testid="word" index="17" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">sentence</span><span data-testid="word" index="18" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">in</span><span data-testid="word" index="19" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">a</span><span data-testid="word" index="20" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">new</span><span data-testid="word" index="21" style="padding: 3px 5px; display: inline-block; border-radius: 3px;">paragraph</span>';

    expect(textContainer.innerHTML).toBe(expectedHtml);
  });

  it("Should make input disabled when time is up", async () => {
    jest.setTimeout(30000);
    jest.spyOn(console, "error").mockImplementation(jest.fn());

    let getByTestId;
    let input;

    act(() => {
      const doc = render(<Typer />);
      getByTestId = doc.getByTestId;
      input = getByTestId("input");
      fireEvent.change(input, { target: { value: "Hello" } });
    });

    await wait(
      () => {
        expect(input).toBeDisabled();
      },
      { interval: 1000 }
    );
  });

  it("Should reset timer and input on clicking reload", async () => {
    jest.setTimeout(30000);

    let getByTestId;
    let input;

    act(() => {
      const doc = render(<Typer />);
      getByTestId = doc.getByTestId;
      input = getByTestId("input");
      fireEvent.change(input, { target: { value: "Hello" } });

      const reload = getByTestId("reload");
      fireEvent.click(reload, {});
    });

    await wait(
      () => {
        const timer = getByTestId("timer");

        const expectedHtml =
          '<input data-testid="input" style="width: 100%; height: 60px; font-size: 25px; padding: 5px 20px; box-sizing: border-box; outline: none;" value="">';

        const expectedTimerHtml =
          '<div data-testid="timer" style="height: 100%; width: 100%;"><div data-testid="textBox" style="background-color: rgb(60, 77, 92); color: white; height: 100%; width: 100%; text-align: center; align-items: center; display: table;"><span style="display: table-cell; vertical-align: middle; font-size: 25px;">2s</span></div></div>';

        expect(input.outerHTML).toBe(expectedHtml);
        expect(timer.outerHTML).toBe(expectedTimerHtml);
      },
      { interval: 1000 }
    );
  });
});
