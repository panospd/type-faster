import React, { useState } from "react";

export default function FlexItem({ grow, children, style, ...rest }) {
  return (
    <div style={{ flexGrow: grow ?? 1, ...style }} {...rest}>
      {children}
    </div>
  );
}
