import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity = 1) => {
    if (!product || typeof product.id === "undefined") return;

    const qty = Number(quantity);
    const safeQuantity = Number.isFinite(qty) && qty > 0 ? Math.floor(qty) : 1;

    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);

      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + safeQuantity }
            : item
        );
      }

      return [...prev, { ...product, quantity: safeQuantity }];
    });
  };

  const decrementFromCart = (product) => {
    if (!product || typeof product.id === "undefined") return;

    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (!existing) return prev;

      if (existing.quantity <= 1) {
        return prev.filter((item) => item.id !== product.id);
      }

      return prev.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
      );
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const getCartTotal = () => {
    return cart.reduce(
      (total, item) => total + item.price * (item.quantity || 1),
      0
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        decrementFromCart,
        removeFromCart,
        clearCart,
        getCartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
