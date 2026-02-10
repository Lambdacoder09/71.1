import React from "react";
import { useCart } from "../../context/CartContext.jsx";
import { Link } from "react-router-dom";

function CartItem({ item }) {
  const { addToCart, decrementFromCart, removeFromCart } = useCart();
  const subtotal = item.price * item.quantity;

  return (
    <tr className="border-b">
      <td className="p-4">
        <div className="flex items-center gap-4">
          <Link to={`/product/${item.id}`}>
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-16 h-16 object-contain rounded"
            />
          </Link>
          <Link to={`/product/${item.id}`} className="font-semibold hover:text-red-600">
            {item.title}
          </Link>
        </div>
      </td>
      <td className="p-4">${item.price.toFixed(2)}</td>
      <td className="p-4">
        <div className="flex items-center gap-2">
          <button
            onClick={() => decrementFromCart(item)}
            className="border rounded-md px-2 py-1 hover:bg-gray-100"
          >
            -
          </button>
          <span>{item.quantity}</span>
          <button
            onClick={() => addToCart(item)}
            className="border rounded-md px-2 py-1 hover:bg-gray-100"
          >
            +
          </button>
        </div>
      </td>
      <td className="p-4">${subtotal.toFixed(2)}</td>
      <td className="p-4">
        <button
          onClick={() => removeFromCart(item.id)}
          className="text-red-500 hover:text-red-700"
        >
          x
        </button>
      </td>
    </tr>
  );
}

export default CartItem;
