import { Routes, Route, Link } from "react-router-dom";

import "./App.css";

import Header from "./assets/components/HeaderBar.jsx";
import Footer from "./assets/components/Footer.jsx";

import GalleryPage from "./assets/components/GalleryPage.jsx";
import CartPage from "./assets/components/Cart/CartPage.jsx";
import DescPage from "./assets/components/DescPage.jsx";

function App() {
  return (
    <>
      <Header />
      <nav>
        <Link to="/">Gallery</Link> | <Link to="/cart">Cart</Link>
      </nav>
      <Routes>
        <Route path="/" element={<GalleryPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/product/:id" element={<DescPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
