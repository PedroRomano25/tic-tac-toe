import React from "react";
import "./style.scss";
import { ISquareProps } from "./interface";

const Square: React.FC<ISquareProps> = React.memo(({ value, onClick }) => {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
});

export default Square;
