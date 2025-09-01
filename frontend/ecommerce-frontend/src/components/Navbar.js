import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext, AuthProvider } from "../context/AuthContext";
import { useCart, CartContext } from "../context/CartContext";
import { ShoppingCart } from "lucide-react";

export default function Navbar({onCartClick}){
  const { user, logout } = useContext(AuthContext);
  const { cartCount } = useContext(CartContext);
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
};
