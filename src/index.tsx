import App from "./App";
import React from "react";
import ReactDOM from "react-dom"
import { Reset } from "styled-reset";
// import { render } from "react-snapshot";

ReactDOM.render(
  <React.Fragment>
    <Reset />
    <App />
  </React.Fragment>,
  document.getElementById("root")
);
