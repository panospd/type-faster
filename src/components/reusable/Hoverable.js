import React, { useEffect, useState } from "react";

export default function Hoverable({
  onClick,
  style,
  render,
  selected = false,
  colors = {
    unSelected: {
      bg: "#ccc",
      txt: "black",
    },
    selected: {
      bg: "#3c4d5c",
      txt: "white",
    },
  },
  ...rest
}) {
  const [opacity, setOpacity] = useState(1);
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    setIsSelected(selected);
  }, [selected]);

  const handleClick = () => {
    setIsSelected(true);

    onClick();
  };

  return (
    <div
      data-testid="hoverable"
      onClick={handleClick}
      style={{
        ...style,
        opacity,
        cursor: "pointer",
        userSelect: "none",
        color: isSelected ? colors.selected.txt : colors.unSelected.txt,
        backgroundColor: isSelected ? colors.selected.bg : colors.unSelected.bg,
      }}
      onMouseOver={() => setOpacity(0.9)}
      onMouseLeave={() => setOpacity(1)}
      {...rest}
    >
      {render()}
    </div>
  );
}
