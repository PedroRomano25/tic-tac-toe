export interface Store {
  history: string[][];
  xIsNext: boolean;
  stepNumber: number;
  current: string[];
  winner: string | null;
  status: string;
  handleClick: (index: number) => void;
  jumpTo: (step: number) => void;
}
