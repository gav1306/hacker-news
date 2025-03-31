import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import QueryProvider from "./provider/query-provider";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <QueryProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </QueryProvider>
);
