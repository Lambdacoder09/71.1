import { Routes, Route, useLocation } from "react-router-dom";

import "./App.css";

import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";

import GalleryPage from "./pages/GalleryPage.jsx";
import CartPage from "./pages/CartPage.jsx";
import DescriptionPage from "./pages/DescriptionPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";

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
        <Route path="/product/:id" element={<DescriptionPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
      {!hideHeaderFooter && <Footer />}
    </>
  );
}

export default App;
