import React, { useState } from "react";
import { FaRedoAlt } from "react-icons/fa";

import TextBox from "./TextBox";

export default function Reload({ onClick, disabled }) {
  const [opacity, setOpacity] = useState(1);

  return (
    <div
      onClick={() => !disabled && onClick()}
      style={{ height: "100%", opacity, cursor: "pointer" }}
      onMouseOver={() => !disabled && setOpacity(0.9)}
      onMouseLeave={() => setOpacity(1)}
    >
      <TextBox
        bgColor="grey"
        size={{ height: "100%", width: "100%" }}
        txtSize={25}
      >
        <span>
          <FaRedoAlt size={30} />
        </span>
      </TextBox>
    </div>
  );
}
