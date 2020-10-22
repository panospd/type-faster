const txtgen = require("txtgen");

const generate = (numberOfParagraphs = 10) => {
  return txtgen.article(numberOfParagraphs);
};

export default {
  generate,
};
