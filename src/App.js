import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import textGenerator from "./services/textGenerator";

function App() {
  const [text, setText] = useState("");

  const getText = () => {
    const randomText = textGenerator.generate();

    console.log(randomText);
    setText(randomText);
  };

  useEffect(() => {
    getText();
  }, []);

  return (
    <div>
      <p>{text}</p>
    </div>
  );
}

export default App;
