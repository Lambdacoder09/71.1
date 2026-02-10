import { Routes, Route, useLocation } from "react-router-dom";

import "./App.css";

import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";

import GalleryPage from "./pages/GalleryPage.jsx";
import CartPage from "./pages/CartPage.jsx";
import DescPage from "./pages/DescriptionPage.jsx";

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
