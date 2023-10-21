import { create } from "zustand";
import { calculateWinner } from "../service/calculateWinner";
import { Store } from "./interface";

export const useGameStore = create<Store>()((set) => ({
  history: [Array(9).fill("")],
  xIsNext: true,
  stepNumber: 0,
  current: Array(9).fill(""),
  winner: null,
  status: "Next player: X",
  handleClick: (i: number) => {
    set((state) => {
      const newHistory = state.history.slice(0, state.stepNumber + 1);
      const currentSquares = [...state.history[state.stepNumber]];
      if (state.winner || currentSquares[i]) {
        return state;
      }
      currentSquares[i] = state.xIsNext ? "X" : "O";
      const winner = calculateWinner(currentSquares);
      let status = `Next player: X`;
      if (winner) {
        status = `Winner: ${winner}`;
      } else {
        status = `Next player: ${!state.xIsNext ? "X" : "O"}`;
      }
      return {
        history: newHistory.concat([currentSquares]),
        xIsNext: !state.xIsNext,
        stepNumber: newHistory.length,
        current: currentSquares,
        winner: winner,
        status: status,
      };
    });
  },
  jumpTo: (step: number) => {
    const xIsNext = step % 2 === 0;
    return set((state) => ({
      ...state,
      stepNumber: step,
      xIsNext: xIsNext,
      current: state.history[step],
      winner: calculateWinner(state.history[step]),
      status: `Next player: ${xIsNext ? "X" : "O"}`,
    }));
  },
}));
