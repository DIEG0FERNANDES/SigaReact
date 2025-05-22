import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// importação de estilizações globais
import "./styles/global.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
