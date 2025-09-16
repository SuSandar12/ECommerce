import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import API from "../services/api";

export default function CartPage() {
  const cartItems = [
    { id: 1, name: "Product A", price: 25, qty: 2 },
    { id: 2, name: "Product B", price: 40, qty: 1 },
  ];
  const { user } = useContext(AuthContext);
  //   const [cartItems, setCartItems] = useState([]);
  const [deliveryInfo, setDeliveryInfo] = useState({
    name: "",
    phone: "",
    address: "",
  });
  //   useEffect(() => {
  // API.get(`/cart/${user.id}`).then((res) => setCartItems(res.data));

  //     API.get(`/users/${user.id}`).then((res) => {
  //       setDeliveryInfo({
  //         name: res.data.username,
  //         phone: res.data.phoneNumber,
  //         address: res.data.deliveryAddress,
  //       });
  //     });
  //   }, [user]);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDeliveryInfo((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-6xl mx-auto min-h-[7vh] p-6">
      <h1 className="text-2xl font-bold mb-6 border-b pb-2">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl shadow p-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b py-4"
            >
              <div>
                <h2 className="font-semibold">{item.name}</h2>
                <p className="text-sm text-gray-600">Qty: {item.qty}</p>
              </div>
              <p className="font-medium">${item.price * item.qty}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow p-6 space-y-4">
          <h2 className="text-lg font-semibold border-b pb-2">Order Summary</h2>
          <div className="flex justify-between text-gray-700">
            <span>Subtotal</span>
            <span>${subtotal}</span>
          </div>
          <div className="flex justify-between text-gray-700">
            <span>Delivery</span>
            <span>$5.00</span>
          </div>
          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>${subtotal + 5}</span>
          </div>

          {/* Delivery Address */}
          <div>
            <h2 className="text-xl font-semibold border-b pb-2 mb-4">
              Delivery Information
            </h2>
            <div className="space-y-2">
              <div>
                <label className="block font-medium">Name:</label>
                <input
                  type="text"
                  name="name"
                  value={deliveryInfo.name}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-2"
                />
              </div>
              <div>
                <label className="block font-medium">Phone:</label>
                <input
                  type="text"
                  name="phone"
                  value={deliveryInfo.phone}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-2"
                />
              </div>
              <div>
                <label className="block font-medium">Address:</label>
                <textarea
                  name="address"
                  value={deliveryInfo.address}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-2"
                  rows={3}
                />
              </div>
            
            </div>
          </div>

          {/* Delivery Option */}
          <div>
            <h3 className="text-md font-semibold mb-1 border-b pb-1">
              Delivery Option
            </h3>
            <select className="w-full border rounded-lg p-2">
              <option>Standard (3–5 days)</option>
              <option>Express (1–2 days)</option>
            </select>
          </div>

          {/* Payment Method */}
          <div>
            <h3 className="text-md font-semibold mb-1 border-b pb-1">
              Payment Method
            </h3>
            <select className="w-full border rounded-lg p-2">
              <option>Credit Card</option>
              <option>PayPal</option>
              <option>Cash on Delivery</option>
            </select>
          </div>

          {/* Checkout Button */}
          <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
