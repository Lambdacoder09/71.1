import React from "react";
import { useCart } from "../../context/CartContext.jsx";
import CartItem from "./CartItem.jsx";

function CartList() {
  const { cart, getCartTotal, clearCart } = useCart();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>
      
      {cart.length > 0 ? (
        <div>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4">Product</th>
                  <th className="text-left p-4">Price</th>
                  <th className="text-left p-4">Quantity</th>
                  <th className="text-left p-4">Subtotal</th>
                  <th className="text-left p-4"></th>
                </tr>
              </thead>
              <tbody>
                {cart.map((product) => (
                  <CartItem key={product.id} item={product} />
                ))}
              </tbody>
            </table>
          </div>

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
