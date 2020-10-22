import React from "react";

export default function Screen(props) {
  return (
    <div
      style={{
        justifyContent: "center",
        display: "flex",
        width: "100%",
        height: "100vh",
        maxHeight: "100vh",
        paddingTop: "60px",
        boxSizing: "border-box",
        backgroundColor: "purple",
      }}
    >
      {props.children}
    </div>
  );
}
