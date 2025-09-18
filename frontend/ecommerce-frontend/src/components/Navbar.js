import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext, AuthProvider } from "../context/AuthContext";
import { useCart, CartContext } from "../context/CartContext";
import { ShoppingCart, User } from "lucide-react";

export default function Navbar({ onCartClick }) {
  const { user, logout } = useContext(AuthContext);
  const { cartCount } = useContext(CartContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <nav className="bg-green-600 text-white flex items-center justify-between p-4 z-05">
      <div className="space-x-4">
        <a href="/" className="hover:text-green-200">
          Home
        </a>
        <a href="/products" className="hover:text-green-200">
          Products
        </a>
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative">
          <button onClick={() => setDropdownOpen(!dropdownOpen)}>
            <User className="w-6 h-6" />
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded-lg shadow-lg z-50">
              {!user ? (
                <>
                  <a
                    href="/login"
                    onClick={() => setDropdownOpen(false)}
                    className="block px-4 py-2 hover:bg-gray-100 rounded-md"
                  >
                    Login
                  </a>
                  <a
                    href="/register"
                    onClick={() => setDropdownOpen(false)}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100 rounded-md"
                  >
                    Register
                  </a>
                </>
              ) : (
                <>
                  <a
                    href="/profile"
                    className="block px-4 py-2 hover:bg-gray-100 rounded-md"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Profile
                  </a>
                  <a
                    href="/orders"
                    className="block px-4 py-2 hover:bg-gray-100 rounded-md"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Order History
                  </a>
                  <button
                    onClick={() => {
                      logout();
                      setDropdownOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100 rounded-md"
                  >
                    Logout
                  </button>
                </>
              )}
            </div>
          )}
        </div>

        <div className="relative">
          <button onClick={onCartClick}>
            <ShoppingCart className="w-6 h-6" />
          </button>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {cartCount}
            </span>
          )}
        </div>
      </div>
    </nav>
  );
}
