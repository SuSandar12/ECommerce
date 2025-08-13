import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext, AuthProvider } from "../context/AuthContext";
import { useCart, CartContext } from "../context/CartContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const {cartCount} = useContext(CartContext);
  return (
    <nav className="bg-green-600 text-white flex items-center justify-between p-4">
      <div className="space-x-4">
        <a href="/" className="hover:text-green-200">
          Home
        </a>
        <a href="/products" className="hover:text-green-200">
          Products
        </a>
      </div>

      <div className="flex items-center space-x-4">
        {user ? (
          <>
            <span>Welcome, {user}</span>
            <button onClick={logout} className="hover:text-green-200">
              Logout
            </button>
          </>
        ) : (
          <a href="/login" className="hover:text-green-200">
            Login
          </a>
        )}

        {/* Cart Icon */}
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 cursor-pointer hover:text-green-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 8h14l-2-8M9 21h.01M15 21h.01"
            />
          </svg>
          {/* Optional badge */}
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {cartCount}
            </span>
          )}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
