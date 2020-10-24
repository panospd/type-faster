import React from "react";
import "./App.css";
import FlexSection from "./components//reusable/FlexSection";

import Typer from "./components/Typer";

function App() {
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
      <Typer />
    </FlexSection>
  );
}

export default App;
