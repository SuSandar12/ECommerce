import React,{useContext} from "react";
import {Link} from "react-router-dom";
import { AuthContext, AuthProvider } from "../context/AuthContext";

const Navbar =()=>{
    const {user, logout} =useContext(AuthContext);

    return(
       <nav className="bg-gradient-to-r from-green-600 to-green-500 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Left Side - Links */}
        <div className="flex space-x-6">
          <a href="/" className="text-white hover:text-green-100 font-medium">
            Home
          </a>
          <a href="/products" className="text-white hover:text-green-100 font-medium">
            Products
          </a>
        </div>

        {/* Right Side - Auth */}
        <div className="flex items-center space-x-4">
          {user ? (
            <>
              <span className="text-green-100">Welcome, {user}</span>
              <button
                onClick={logout}
                className="bg-white text-green-600 px-4 py-1 rounded hover:bg-green-50 font-medium transition-colors duration-200"
              >
                Logout
              </button>
            </>
          ) : (
            <a
              href="/login"
              className="bg-white text-green-600 px-4 py-1 rounded hover:bg-green-50 font-medium transition-colors duration-200"
            >
              Login
            </a>
          )}
        </div>
      </div>
    </nav>
    );
};
export default Navbar;