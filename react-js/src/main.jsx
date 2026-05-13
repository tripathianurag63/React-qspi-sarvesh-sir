//! JS WAY
// const divTag = document.getElementById("root");
// const h1tag = document.createElement("h1");
// h1tag.textContent = "Hello World";
// divTag.append(h1tag);

//! REACT WAY
import { createRoot } from "react-dom/client";
import App from "./App";


createRoot(document.getElementById("root")).render(<App />);