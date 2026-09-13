import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "@fontsource/amiri/400.css";
import "@fontsource/amiri/700.css";
import "./styles/variables.css";
import "./styles/global.css";
import "./styles/components.css";
import { LanguageProvider } from "./context/LanguageContext";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </BrowserRouter>
  </StrictMode>
);
