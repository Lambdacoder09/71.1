import React from "react";
import { useCart } from "./CartContext";

function CartItem({ product }) {
  const { addToCart, decrementFromCart, removeFromCart } = useCart();

  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md mb-4">
      <div className="flex items-center gap-4">
        <img src={product.thumbnail} alt={product.title} className="w-20 h-20 object-contain rounded-lg" />
        <div>
          <h3 className="text-lg font-semibold">{product.title}</h3>
          <p className="text-gray-600">${product.price}</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <button onClick={() => decrementFromCart(product)} className="px-3 py-1 bg-gray-200 rounded-md">-</button>
          <span>{product.quantity}</span>
          <button onClick={() => addToCart(product)} className="px-3 py-1 bg-gray-200 rounded-md">+</button>
        </div>
        <button onClick={() => removeFromCart(product.id)} className="text-red-500 hover:text-red-700">Remove</button>
      </div>
    </div>
  );
}

export default CartItem;
