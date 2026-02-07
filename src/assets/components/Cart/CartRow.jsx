import React from "react";

function CartRow({
  width = "800px",
  imageUrl,
  title,
  price,
  quantity,
  onQuantityChange,
  onRemove,
}) {
  const total = price * quantity;

  return (
    <div className="flex justify-center">
      <div
        style={{ width }}
        className="flex items-center gap-4 bg-gray-200 rounded-lg p-4 shadow-sm"
      >
        {/* Product Image */}
        <img
          className="w-20 h-20 object-cover rounded-md"
          src={imageUrl}
          alt={title}
        />

        {/* Title */}
        <p className="text-red-400 text-lg font-bold flex-1">{title}</p>

        {/* Price */}
        <p className="font-bold text-lg w-24 text-center">${price}</p>

        {/* Quantity Input */}
        <input
          type="number"
          min={1}
          value={quantity}
          onChange={(e) => onQuantityChange(Number(e.target.value))}
          className="border text-center py-1 w-20 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
        />

        {/* Total */}
        <p className="font-bold text-lg w-24 text-center">${total.toFixed(2)}</p>

        {/* Remove Button */}
        <button
          onClick={onRemove}
          className="text-red-500 hover:text-red-700 font-bold"
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartRow;
