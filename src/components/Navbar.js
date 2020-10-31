import React, { useState } from "react";

import FlexSection from "./reusable/FlexSection";
import NavbarItem from "./NavbarItem";

export default function Navbar({ style, mode, setMode }) {
  return (
    <FlexSection
      data-testid="navbar"
      direction="column"
      style={{
        ...style,
        alignItems: "center",
        backgroundColor: "#ccc",
        width: "40%",
        margin: "auto",
      }}
    >
      <NavbarItem
        data-testid="regularItem"
        text="Regular"
        selected={mode === "regular"}
        onClick={() => setMode("regular")}
      />
      <NavbarItem
        data-testid="advancedItem"
        text="Advanced"
        selected={mode === "advanced"}
        onClick={() => {
          setMode("advanced");
        }}
      />
    </FlexSection>
  );
}
