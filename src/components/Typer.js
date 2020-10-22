import React, { useState } from "react";
import Input from "../components/Input";
import TextContainer from "../components/TextContainer";
import textGenerator from "../services/textGenerator";
import ColumnSection from "./ColumnSection";

export default function Typer() {
  const [text] = useState(textGenerator.generate());
  const [results, setResults] = useState([]);
  const [offset, setOffset] = useState(0);

  const offsetTopDiff = results => {
    if (results.length === 0) return 0;

    const currentWord = document
      .getElementById("words")
      .querySelector(`span[index="${results.length}"]`);

    const nextWord = document
      .getElementById("words")
      .querySelector(`span[index="${results.length + 1}"]`);

    return currentWord.offsetTop - nextWord.offsetTop;
  };

  const handleSpaceBarPress = e => {
    setResults(current => {
      return [...current, e.target.value];
    });

    const offset = offsetTopDiff(results);
    setOffset(current => current + offset);
  };

  return (
    <ColumnSection data-testid="typer" width="65%">
      <div style={{ flexGrow: 0.05 }}>
        <TextContainer text={text} results={results} top={offset} />
      </div>
      <div style={{ flexGrow: 1, textAlign: "center" }}>
        <Input onSpaceBarPress={handleSpaceBarPress} />
      </div>
    </ColumnSection>
  );
}
