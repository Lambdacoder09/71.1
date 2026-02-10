import React from "react";
import { useCart } from "../context/CartContext";
import CartItem from "../components/cart/CartItem";
import { Link } from "react-router-dom";

function CartPage() {
  const { cart, getCartTotal } = useCart();

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-4">
        {cart.length > 0 ? (
          <div className="flex flex-col gap-8">
            {/* Cart Items */}
            <div className="w-full">
              <div className="bg-white rounded-lg shadow-md">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left font-semibold p-4">Product</th>
                      <th className="text-left font-semibold p-4">Price</th>
                      <th className="text-left font-semibold p-4">Quantity</th>
                      <th className="text-left font-semibold p-4">Subtotal</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((item) => (
                      <CartItem key={item.id} item={item} />
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Coupon and Update Cart */}
              <div className="flex justify-between items-center mt-6">
                <div className="flex gap-4">
                  <input type="text" placeholder="Coupon code" className="border rounded-lg px-4 py-2"/>
                  <button className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600">APPLY COUPON</button>
                </div>
                <button className="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-400">UPDATE CART</button>
              </div>
            </div>

            {/* Cart Totals */}
            <div className="w-96 ml-auto">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-bold mb-4">Cart totals</h2>
                <div className="flex justify-between mb-2">
                  <span>Subtotal</span>
                  <span>${getCartTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-bold text-lg border-t pt-2">
                  <span>Total</span>
                  <span>${getCartTotal().toFixed(2)}</span>
                </div>
                <button className="bg-red-500 text-white w-full py-3 mt-6 rounded-lg hover:bg-red-600">PROCEED TO CHECKOUT</button>
              </div>
            </div>

          </div>
        ) : (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold mb-4">Your cart is empty.</h2>
            <Link to="/"
                  className="bg-red-500 text-white px-8 py-3 rounded-lg hover:bg-red-600 inline-block font-semibold"
            >Return Home</Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartPage;
