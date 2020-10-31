import { sentence, setTemplates } from "txtgen";

let templates = [
  "{{a_noun}} is {{a_noun}} from the right perspective",
  "the {{noun}} of {{a_noun}} becomes {{an_adjective}} {{noun}}",
];

const generate = (numberOfSentences = 1, mode = "regular") => {
  let sentences = sentence();

  for (let i = 2; i <= numberOfSentences; i++) {
    sentences = sentences + " " + sentence();
  }

  return mode === "regular" ? transformToRegular(sentences) : sentences;
};

const transformToRegular = text => {
  return text.toLowerCase().replace(/[^a-zA-Z' ]/g, "");
};

export default {
  generate,
};
