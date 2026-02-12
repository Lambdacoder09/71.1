import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import AppProviders from "./context/AppProviders.jsx";
import { CartProvider } from "./context/CartContext";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppProviders>
      <BrowserRouter>
      <CartProvider>
        <App />
        </CartProvider>
      </BrowserRouter>
    </AppProviders>
  </StrictMode>
);
