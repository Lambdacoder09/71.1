import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import "./App.css";

import Header from "./assets/components/HeaderBar.jsx";
import Footer from "./assets/components/Footer.jsx";

import GalleryPage from "./assets/components/GalleryPage.jsx";
import InfoPage from "./assets/components/InfoPage.jsx";
import CartPage from "./assets/components/Cart/CartPage.jsx";
import DescPage from "./assets/components/DescPage.jsx";
import Login from "./assets/components/login.jsx";
import SignUpPageWithNavigate from "./assets/components/SignUpPage.jsx";

function App() {
  const location = useLocation();

  // hide header & footer on auth pages
  const hideHeaderFooter = ["/login", "/SignUp"].includes(location.pathname);

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  return (
    <>
      {!hideHeaderFooter && <Header />}

      <Routes>
        <Route
          path="/"
          element={<GalleryPage cart={cart} addToCart={addToCart} />}
        />
        <Route path="/InfoPage" element={<InfoPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/SignUp" element={<SignUpPageWithNavigate />} />
        <Route
          path="/CartPage"
          element={<CartPage cart={cart} setCart={setCart} />}
        />
        <Route path="/:id" element={<DescPage />} />
      </Routes>

      {!hideHeaderFooter && <Footer />}
    </>
  );
}

export default App;
