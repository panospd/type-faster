import React from "react";
import Word from "./Word";

export default function TextContainer({ text, results, top, currentInput }) {
  const getWordPreview = word => {
    if (!currentInput) return "focus";

    if (currentInput.length > word.length) return "wrongPreview";

    for (let i = 0; i < currentInput.length; i++) {
      if (currentInput[i] !== word[i]) return "wrongPreview";
    }

    return "focus";
  };

  const getWordStatus = (index, word) => {
    return results[index]
      ? results[index] === word
        ? "correct"
        : "wrong"
      : results.length === index
      ? getWordPreview(word)
      : "";
  };

  const renderWord = (word, index) => {
    return (
      <React.Fragment key={index}>
        <Word index={index} word={word} status={getWordStatus(index, word)} />
      </React.Fragment>
    );
  };

  return (
    <div style={styles.container}>
      <div
        id="words"
        data-testid="textContainer"
        style={{ position: "relative", top: top }}
      >
        {text.split(/\s+/).map(renderWord)}
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "98px",
    lineHeight: "1.4em",
    fontSize: "2.2em",
    color: "black",
    overflow: "hidden",
    width: "100%",
    backgroundColor: "white",
    padding: "5px 10px",
    textAlign: "left",
  },
};
