import React from "react";
import { useCart } from "./CartContext";
import CartItem from "./CartItem";

function CartList() {
  const { cart, getCartTotal, clearCart } = useCart();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>
      
      {cart.length > 0 ? (
        <div>
          {cart.map((product) => (
            <CartItem key={product.id} product={product} />
          ))}

          <div className="flex justify-between items-center mt-6 pt-4 border-t">
            <button onClick={clearCart} className="text-red-500 hover:text-red-700">Clear Cart</button>
            <div className="text-xl font-semibold">
              Total: ${getCartTotal().toFixed(2)}
            </div>
          </div>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
}

export default CartList;
