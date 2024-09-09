import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "bootstrap/dist/css/bootstrap.min.css";
import { CartProvider } from "./components/ContextReducer";

// Create a root and render the App component
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
