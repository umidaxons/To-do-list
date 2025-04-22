// import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
createRoot(document.getElementById("root")).render(

    <App meva={<h1>Salom</h1>} sabzavot={78} />

);
