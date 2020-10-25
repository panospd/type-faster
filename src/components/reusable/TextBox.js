import React from "react";

export default function TextBox({
  bgColor,
  color,
  size,
  txtSize = "1em",
  style,
  text,
  children,
}) {
  return (
    <div
      data-testid="textBox"
      style={{
        ...style,
        backgroundColor: bgColor ?? "#3c4d5c",
        color: color ?? "white",
        height: size.height,
        width: size.width,
        textAlign: "center",
        alignItems: "center",
        display: "table",
      }}
    >
      <span
        style={{
          display: "table-cell",
          verticalAlign: "middle",
          fontSize: txtSize,
        }}
      >
        {children ? children : text}
      </span>
    </div>
  );
}
