import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { LinksContextProvider } from "./contexts/LinksContext.jsx";
import { StyleContextProvider } from "./contexts/StyleContext.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StyleContextProvider>
      <LinksContextProvider>
        <App />
      </LinksContextProvider>
    </StyleContextProvider>
  </StrictMode>
);
