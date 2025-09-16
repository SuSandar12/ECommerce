import React from "react";
import { X } from "lucide-react";

export default function CartDrawer({ isOpen, onClose }) {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 z-50 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-lg font-semibold">Your Cart</h2>
        <button onClick={onClose}>
          <X className="w-6 h-6" />
        </button>
      </div>
      <div className="p-4 flex flex-col gap-4">
        <div className="flex justify-between border-b-2 pb-5 bt-5">
          <span>Product A</span>
          <span>Qty:1</span>
          <span>$20</span>
        </div>
        <div className="flex justify-between border-b-2 pb-5 bt-5">
          <span>Product B</span>
          <span>Qty:2</span>
          <span>$15</span>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full p-4 border-t bg-white">
        <a href="/cart">
        <button className="w-full bg-black text-white py-2 rounded-xl hover:bg-gray-800 transition">
          Checkout
        </button>
        </a>
      </div>
    </div>
  );
}
