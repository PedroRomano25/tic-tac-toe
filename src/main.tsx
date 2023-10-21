import React from "react";
import ReactDOM from "react-dom/client";
import "./style/generic.scss";
import "./style/global.scss";
import "./style/tokens.scss";
import Game from "./Components/Game";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Game />
  </React.StrictMode>
);
