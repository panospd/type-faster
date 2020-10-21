const txtgen = require("txtgen");

const generate = () => {
  return txtgen.article(10);
};

export default {
  generate,
};
