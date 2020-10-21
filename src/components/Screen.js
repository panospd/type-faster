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
        backgroundColor: "purple",
      }}
    >
      {props.children}
    </div>
  );
}
