import React from "react";

export default function ColumnSection({ width, children, ...rest }) {
  return (
    <div
      style={{
        width,
        maxWidth: "1000px",
        display: "flex",
        flexDirection: "column",
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
