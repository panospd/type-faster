import React from "react";

export default function FlexItem({ grow, children, style, ...rest }) {
  return (
    <div
      data-testid="flexItem"
      style={{ flexGrow: grow ?? 1, ...style }}
      {...rest}
    >
      {children}
    </div>
  );
}
