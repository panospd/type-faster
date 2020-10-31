import React, { useState } from "react";
import "./App.css";
import FlexSection from "./components//reusable/FlexSection";
import Navbar from "./components/Navbar";
import FlexItem from "./components/reusable/FlexItem";

import Typer from "./components/Typer";

function App() {
  const [mode, setMode] = useState("regular");

  return (
    <FlexSection
      style={{
        justifyContent: "center",
        width: "100%",
        height: "100vh",
        paddingTop: "60px",
        boxSizing: "border-box",
        backgroundColor: "#d88e8e",
      }}
    >
      <FlexItem style={{ textAlign: "center" }}>
        <Navbar mode={mode} setMode={setMode} />
      </FlexItem>
      <FlexItem>
        <Typer mode={mode} />
      </FlexItem>
    </FlexSection>
  );
}

export default App;
