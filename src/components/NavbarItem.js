import React from "react";
import FlexItem from "./reusable/FlexItem";
import Hoverable from "./reusable/Hoverable";
import TextBox from "./reusable/TextBox";

export default function NavbarItem({ text, selected, onClick, ...rest }) {
  return (
    <FlexItem data-testid="navbarItem" style={{ width: "100%" }}>
      <Hoverable
        selected={selected}
        onClick={onClick}
        render={() => {
          return (
            <TextBox
              size={{ height: "100%", width: "100%" }}
              style={{ padding: "10px 0" }}
              txtSize={25}
            >
              <span>{text}</span>
            </TextBox>
          );
        }}
        {...rest}
      />
    </FlexItem>
  );
}
