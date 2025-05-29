import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import { TokenProvider } from "./contexts/TokenContext"; // ✅ ensure this path is correct

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find root element");

createRoot(rootElement).render(
  <BrowserRouter>
    <TokenProvider>
      <App />
    </TokenProvider>
  </BrowserRouter>
);
