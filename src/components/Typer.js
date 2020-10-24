import React, { useState } from "react";

import Input from "../components/reusable/Input";
import TextContainer from "../components/TextContainer";
import settings from "../config/settings";
import textGenerator from "../services/textGenerator";
import FlexItem from "./reusable/FlexItem";
import FlexSection from "./reusable/FlexSection";
import Reload from "./reusable/Reload";
import ResultsContainer from "./ResultsContainer";
import Timer from "./reusable/Timer";

export default function Typer() {
  const [start, setStart] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [text, setText] = useState(textGenerator.generate(3));
  const [results, setResults] = useState({
    correct: 0,
    wrong: 0,
    empty: true,
  });
  const [wordInputs, setWordInputs] = useState([]);
  const [currentInput, setCurrentInput] = useState("");
  const [offset, setOffset] = useState(0);
  const [resetTimer, setResetTimer] = useState(false);

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

  const startGame = () => {
    setStart(true);
    setResetTimer(false);
  };

  const handleInputChange = value => {
    if (!start) startGame();

    if (gameOver) return;
    setCurrentInput(value);
  };

  const handleSpaceBarPress = value => {
    if (gameOver) return;

    setWordInputs(current => {
      return [...current, value];
    });

    const offset = offsetTopDiff(wordInputs);
    setOffset(current => current + offset);
    enrichText(wordInputs);
  };

  const calculateResults = () => {
    const totalWords = wordInputs.length;

    const words = text.split(settings.word.delimiter).slice(0, totalWords);

    const answers = wordInputs.map((word, index) =>
      words[index] === word ? 1 : 0
    );

    const correct = answers.filter(i => i === 1).length;

    setResults({ correct, wrong: answers.length - correct, empty: false });
  };

  const handleGameOver = () => {
    calculateResults();
    setGameOver(true);
    setStart(false);
    setCurrentInput("");
  };

  const handleNewRound = () => {
    setResults({ correct: 0, wrong: 0, empty: true });
    setGameOver(false);
    setStart(false);

    setText(textGenerator.generate(3));
    setOffset(0);
    setWordInputs([]);
    setCurrentInput("");
    setResetTimer(true);
  };

  return (
    <FlexSection
      direction="column"
      data-testid="typer"
      style={{
        maxWidth: "1000px",
        width: "65%",
        alignItems: "center",
      }}
    >
      <FlexItem grow={0.3}>
        <FlexSection direction="column" style={{ alignItems: "center" }}>
          <FlexItem grow={0.5}>
            <TextContainer
              text={text}
              wordInputs={wordInputs}
              top={offset}
              currentInput={currentInput}
            />
          </FlexItem>
          <FlexItem style={{ width: "80%", paddingTop: "10px" }}>
            <FlexSection direction="row">
              <FlexItem grow={2}>
                <Input
                  disabled={gameOver}
                  onSpaceBarPress={handleSpaceBarPress}
                  onInputChange={handleInputChange}
                  reset={resetTimer}
                />
              </FlexItem>
              <FlexItem
                grow={0.3}
                style={{ marginLeft: "5px", minWidth: "60px" }}
              >
                <Timer
                  start={start}
                  onGameOver={handleGameOver}
                  reset={resetTimer}
                />
              </FlexItem>
              <FlexItem
                grow={0.3}
                style={{ marginLeft: "5px", minWidth: "60px" }}
              >
                <Reload onClick={handleNewRound} />
              </FlexItem>
            </FlexSection>
          </FlexItem>
        </FlexSection>
      </FlexItem>

      <FlexItem grow={1} style={{ width: "40%" }}>
        {!results.empty && <ResultsContainer results={results} />}
      </FlexItem>
    </FlexSection>
  );
}
