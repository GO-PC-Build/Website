import App from "./App";
import React from "react";
import { Reset } from "styled-reset";
import { render } from "react-snapshot";

render(
  <React.Fragment>
    <Reset />
    <App />
  </React.Fragment>,
  document.getElementById("root")
);
