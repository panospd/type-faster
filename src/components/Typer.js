import React, { useState } from "react";
import Input from "../components/Input";
import TextContainer from "../components/TextContainer";
import textGenerator from "../services/textGenerator";
import ColumnSection from "./ColumnSection";
import FlexItem from "./FlexItem";

export default function Typer() {
  const [text, setText] = useState(textGenerator.generate(3));
  const [results, setResults] = useState([]);
  const [currentInput, setCurrentInput] = useState("");
  const [offset, setOffset] = useState(0);

  const getWordDomElementByIndex = index => {
    return document
      .getElementById("words")
      .querySelector(`span[index="${index}"]`);
  };

  const enrichText = results => {
    const checkWord = getWordDomElementByIndex(results.length + 20);

    if (!checkWord)
      setText(current => current + " " + textGenerator.generate());
  };

  const offsetTopDiff = results => {
    if (results.length === 0) return 0;

    const currentWord = getWordDomElementByIndex(results.length);
    const nextWord = getWordDomElementByIndex(results.length + 1);

    return currentWord.offsetTop - nextWord.offsetTop;
  };

  const handleSpaceBarPress = value => {
    setResults(current => {
      return [...current, value];
    });

    const offset = offsetTopDiff(results);
    setOffset(current => current + offset);
    enrichText(results);
  };

  return (
    <ColumnSection data-testid="typer" width="65%">
      <FlexItem grow={0.05}>
        <TextContainer
          text={text}
          results={results}
          top={offset}
          currentInput={currentInput}
        />
      </FlexItem>
      <FlexItem style={{ textAlign: "center" }}>
        <Input
          onSpaceBarPress={handleSpaceBarPress}
          onInputChange={value => setCurrentInput(value)}
        />
      </FlexItem>
    </ColumnSection>
  );
}
