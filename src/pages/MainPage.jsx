import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import "../App.css";

import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

import GalleryPage from "./GalleryPage.jsx";
import InfoPage from "./InfoPage.jsx";
import CartPage from "./CartPage.jsx";
import DescPage from "./DescriptionPage.jsx";
import Login from "./LoginPage.jsx";
import SignUpPage from "./SignUpPage.jsx";

function MainPage() {
  const location = useLocation();

  // hide header & footer on auth pages
  const hideHeaderFooter = ["/login", "/signUp"].includes(location.pathname);

  return (
    <>
      {!hideHeaderFooter && <Header />}

      <Routes>
        <Route
          path="/"
          element={<GalleryPage />}
        />
        <Route path="/InfoPage" element={<InfoPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/SignUp" element={<SignUpPage />} />
        <Route
          path="/CartPage"
          element={<CartPage />}
        />
        <Route path="/:id" element={<DescPage />} />
      </Routes>

      {!hideHeaderFooter && <Footer />}
    </>
  );
}

export default MainPage;
