const { default: textGenerator } = require("../../services/textGenerator");

const sut = textGenerator;

describe("TextGenerator when  called", () => {
  it("Should return a 2000 words", () => {
    const article = sut.generate();

    expect(article.split("\n").filter(w => w !== "").length).toBe(1);
  });
});
