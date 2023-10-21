import React from "react";
import Square from "../Square";
import "./style.scss";
import { useGameStore } from "../../context/store";

const Board: React.FC = React.memo(() => {
  const { handleClick, current } = useGameStore();
  return (
    <div className="game-table">
      {Array.from({ length: 9 }, (_, index) => (
        <Square
          key={index}
          value={current[index]}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
});

export default Board;
