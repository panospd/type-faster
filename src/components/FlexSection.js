import React from "react";

export default function FlexSection({
  direction = "row",
  children,
  style,
  ...rest
}) {
  return (
    <div
      style={{
        ...style,
        display: "flex",
        flexDirection: direction,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
