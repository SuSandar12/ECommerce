import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Confirmation() {
  const location = useLocation();
  const navigate = useNavigate();

  const { cartItems, deliveryInfo, total } = location.state || {
    cartItems: [],
    deliveryInfo: {},
    total: 0,
  };

  return (
    <div className="max-w-4xl mx-auto min-h-[70vh] p-6">
      <h1 className="text-2xl font-bold mb-6 border-b pb-2">
        Order Confirmation 
      </h1>

      <div className="bg-white shadow rounded-xl p-6 space-y-6">
        <div>
          <h2 className="text-lg font-semibold">Thank you for your order!</h2>
          <p className="text-gray-600">
            We’ve received your order and will send you a confirmation email.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-md border-b pb-1 mb-2">
            Delivery Information
          </h3>
          <p>
            <span className="font-medium">Name:</span>{" "}
            {deliveryInfo?.name || "-"}
          </p>
          <p>
            <span className="font-medium">Phone:</span>{" "}
            {deliveryInfo?.phone || "-"}
          </p>
          <p>
            <span className="font-medium">Address:</span>{" "}
            {deliveryInfo?.address || "-"}
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-md border-b pb-1 mb-2">
            Order Items
          </h3>
          <div className="space-y-2">
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between border-b pb-2"
                >
                  <span>
                    {item.name} (x{item.qty})
                  </span>
                  <span>${item.price * item.qty}</span>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No items in order.</p>
            )}
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-md border-b pb-1 mb-2">
            Order Summary
          </h3>
          <div className="flex justify-between text-gray-700">
            <span>Subtotal</span>
            <span>${total - 5}</span>
          </div>
          <div className="flex justify-between text-gray-700">
            <span>Delivery</span>
            <span>$5.00</span>
          </div>
          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>${total}</span>
          </div>
        </div>

        <button
          onClick={() => navigate("/")}
          className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
        >
          Back to Shop
        </button>
      </div>
    </div>
  );
}
