import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import textGenerator from "./services/textGenerator";

function App() {
  const [text, setText] = useState("");

  const getText = () => {
    setText(textGenerator.generate());
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
