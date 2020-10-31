import React from "react";
import { FaRedoAlt } from "react-icons/fa";
import Hoverable from "./reusable/Hoverable";

import TextBox from "./reusable/TextBox";

export default function Reload({ onClick }) {
  return (
    <Hoverable
      data-testid="reload"
      style={{ height: "100%" }}
      onClick={onClick}
      render={() => (
        <TextBox
          bgColor="grey"
          color="white"
          size={{ height: "100%", width: "100%" }}
          txtSize={25}
        >
          <span>
            <FaRedoAlt size={30} />
          </span>
        </TextBox>
      )}
    />
  );
}
