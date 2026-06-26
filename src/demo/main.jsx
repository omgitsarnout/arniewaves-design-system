import { createRoot } from "react-dom/client";
import { ToastProvider } from "../index.js";
import { App } from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <ToastProvider>
    <App />
  </ToastProvider>,
);
