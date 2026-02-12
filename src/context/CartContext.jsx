import { createContext, useContext, useState } from "react";

// ✅ Named export
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const getCartTotal = () => {
    return cart.reduce(
      (total, item) => total + item.price * (item.quantity || 1),
      0
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, getCartTotal }}>
      {children}
    </CartContext.Provider>
  );
};

// ✅ Named export
export const useCart = () => {
  return useContext(CartContext);
};
