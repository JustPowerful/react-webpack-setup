import React from "react";
import App from "./components/App";

// The new way of rendering dom using createRoom instead of ReactDOM.render(<App/>, document.getElementById("root"))
import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root"));
root.render(<App />);
