import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

document.body.style.margin = "0";
document.body.style.overflow = "hidden";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
