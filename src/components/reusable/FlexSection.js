import React from "react";

export default function FlexSection({
  direction = "row",
  children,
  style,
  ...rest
}) {
  return (
    <div
      data-testid="flexSection"
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
