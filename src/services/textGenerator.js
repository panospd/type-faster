const txtgen = require("txtgen");

const generate = (numberOfSentences = 1) => {
  let sentences = txtgen.sentence();

  for (let i = 2; i <= numberOfSentences; i++) {
    sentences = sentences + " " + txtgen.sentence();
  }

  return sentences;
};

export default {
  generate,
};
