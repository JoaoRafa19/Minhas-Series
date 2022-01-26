import React from "react";
import { render } from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "bootstrap/dist/css/bootstrap.css";

const rootElement = document.getElementById("root");

render(<App />, rootElement);

reportWebVitals();
