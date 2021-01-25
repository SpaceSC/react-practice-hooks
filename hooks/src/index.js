import { StrictMode } from "react";
import ReactDOM from "react-dom";

import { Appllle } from "./App.jsx";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <StrictMode>
    <Appllle />
  </StrictMode>,
  rootElement
);

// komponens meghívása: xml div szerűen
// import React
// egy file egy komponens (nagybetűs név)
// komponensben egy szűlő elem lehet
// végén export komponens

// state (hook) belső állapot

