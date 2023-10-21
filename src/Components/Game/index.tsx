import React, { useMemo } from "react";
import Board from "../Board";
import "./style.scss";
import Info from "../Info";
import { useGameStore } from "../../context/store";

const Game: React.FC = () => {
  const { winner } = useGameStore();
  const className = useMemo(() => {
    return `${winner ? "winning-blink" : ""} game`.trim();
  }, [winner]);
  return (
    <div className={className}>
      <Board />
      <Info />
    </div>
  );
};

export default Game;
