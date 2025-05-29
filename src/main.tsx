import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// 👇 import required providers
import { BrowserRouter } from "react-router-dom";
import { TokenProvider } from "./contexts/TokenContext"; // make sure the path is correct

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <TokenProvider>
      <App />
    </TokenProvider>
  </BrowserRouter>
);
