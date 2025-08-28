import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { FormContextProvider } from "./contexts/FormContext.tsx";
import { StepsContextProvider } from "./contexts/StepsContext.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StepsContextProvider>
      <FormContextProvider>
        <App />
      </FormContextProvider>
    </StepsContextProvider>
  </StrictMode>
);
