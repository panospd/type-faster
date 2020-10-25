import React from "react";
import { render, cleanup, act, wait } from "@testing-library/react";
import Timer from "../../../components/reusable/Timer";

afterEach(cleanup);

function sleep(seconds) {
  var e = new Date().getTime() + seconds * 1000;
  while (new Date().getTime() <= e) {}
}

const retry = (boolFunc, efforts) => {
  for (let i = 1; i < efforts + 1; i++) {
    sleep(1);

    if (boolFunc() === true) return true;
  }

  return false;
};

describe("Timer component", () => {
  it("renders", () => {
    const { getByTestId } = render(
      <Timer start={false} time={5} reset={false} />
    );

    const timer = getByTestId("timer");

    const expectedHtml =
      '<div data-testid="timer" style="height: 100%; width: 100%;"><div data-testid="textBox" style="background-color: rgb(60, 77, 92); color: white; height: 100%; width: 100%; text-align: center; align-items: center; display: table;"><span style="display: table-cell; vertical-align: middle; font-size: 25px;">2s</span></div></div>';

    expect(timer.outerHTML).toBe(expectedHtml);
  });

  it("throws error if both start and reset are true", () => {
    expect(() => {
      (() =>
        render(<Timer start={true} time={5} reset={true} />)).toThrowError();
    });
  });

  it("Should fire game over event when time is up", async () => {
    let gameOverEventFired = false;

    act(() => {
      const { rerender } = render(
        <Timer
          start={false}
          reset={false}
          onGameOver={() => (gameOverEventFired = true)}
        />
      );

      rerender(
        <Timer
          start={true}
          reset={false}
          onGameOver={() => (gameOverEventFired = true)}
        />
      );
    });

    await wait(
      () => {
        expect(gameOverEventFired).toBe(true);
      },
      { interval: 1000 }
    );
  });
});
