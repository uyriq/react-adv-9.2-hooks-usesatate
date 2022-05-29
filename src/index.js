import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
/* import ReactDOM from "react-dom/client"; */

import SwitchFunc from "./app";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <SwitchFunc />
  </StrictMode>
);
