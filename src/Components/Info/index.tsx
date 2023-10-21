import React from "react";
import "./style.scss";
import { useGameStore } from "../../context/store";

const Info: React.FC = React.memo(() => {
  const { history, jumpTo, status } = useGameStore();
  return (
    <div className="game-info">
      <h2>{status}</h2>
      <ol>
        {history.map((_, move) => {
          const desc = move ? `Go to move #${move}` : "Go to game start";
          return (
            <li key={move}>
              <button onClick={() => jumpTo(move)}>{desc}</button>
            </li>
          );
        })}
      </ol>
    </div>
  );
});

export default Info;
