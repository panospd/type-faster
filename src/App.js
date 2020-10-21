import React, { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import Screen from "./components/Screen";
import TextContainer from "./components/TextContainer";
import textGenerator from "./services/textGenerator";

function App() {
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

    console.log(results.length, currentWord.offsetTop, nextWord.offsetTop);
    console.log(currentWord, nextWord);

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
    <Screen>
      <div
        style={{
          width: "65%",
          maxWidth: "1000px",
          display: "flex",
          flexDirection: "column",
          padding: "60px",
        }}
      >
        <div style={{ flexGrow: 0.05 }}>
          <TextContainer text={text} results={results} top={offset} />
        </div>
        <div style={{ flexGrow: 1, textAlign: "center" }}>
          <Input onSpaceBarPress={handleSpaceBarPress} />
        </div>
      </div>
    </Screen>
  );
}

export default App;
