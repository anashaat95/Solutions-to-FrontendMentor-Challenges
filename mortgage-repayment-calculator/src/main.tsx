import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

import { createGlobalStyle, ThemeProvider } from "styled-components";

const theme = {
  primary: "#dfe8f5",
  accent: "hsl(61, 70%, 52%)",
  accentLighter: "hsl(60, 70%, 95%)",
  slate100: "hsl(202, 86%, 94%)",
  slate300: "hsl(203, 41%, 72%)",
  slate500: "hsl(200, 26%, 54%)",
  slate700: "hsl(200, 24%, 40%)",
  slate900: "#122f3f",
  slate950: "#0e2632",
  error: "hsl(4, 69%, 50%)",
  text: "#333",
  white: "#fff",
  fontFamily: "'Plus Jakarta Sans', sans-serif",
  spaceXs: "0.8rem",
  spaceSM: "1.2rem",
  spaceLg: "1.6rem",
  spaceXL: "2.6rem",
  spaceXXL: "4rem",
  borderRadiusXs: "0.8rem",
  borderRadiusSM: "1.2rem",
  borderRadiusLg: "1.6rem",
  borderRadiusXL: "2rem",
  borderRadiusXXL: "2.4rem",
  borderRadiusXXXXL: "10rem",
};

// ✅ Global Styles for body, html, etc.
const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: ${({ theme }) => theme.fontFamily};
    background: ${({ theme }) => theme.slate100};
    color: ${({ theme }) => theme.slate700};
    line-height: 1;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1.4rem;
  }
`;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </StrictMode>
);
