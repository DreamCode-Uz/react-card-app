import { StrictMode } from "react";
import "./styles.css";
import ReactDOM from "react-dom";

import App from "./App";

ReactDOM.render(
    <StrictMode className="index">
        <App />
    </StrictMode>,
    document.getElementById("root")
);
