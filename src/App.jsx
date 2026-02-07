import { Routes, Route, useLocation } from "react-router-dom";

import "./App.css";

import Header from "./assets/components/HeaderBar.jsx";
import Footer from "./assets/components/Footer.jsx";

import GalleryPage from "./assets/components/GalleryPage.jsx";
import CartPage from "./assets/components/Cart/CartPage.jsx";
import DescPage from "./assets/components/DescPage.jsx";

function App() {
  const location = useLocation();
  const hideHeaderFooterRoutes = ["/cart", "/login","/signup"];

  const hideHeaderFooter = hideHeaderFooterRoutes.includes(
    location.pathname
  );
  
  return (
    <>
      {!hideHeaderFooter && <Header />}
      <Routes>
        <Route path="/" element={<GalleryPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/product/:id" element={<DescPage />} />
      </Routes>
      {!hideHeaderFooter && <Footer />}
    </>
  );
}

export default App;
