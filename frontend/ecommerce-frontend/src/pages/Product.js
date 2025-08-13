import React, { useContext, useEffect, useState } from "react";
import API from "../services/api";
import { CartContext } from "../context/CartContext";

export default function Products() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    API.get("/Product").then((res) => setProducts(res.data));
  }, []);

 return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Products</h2>
      
      {products.length === 0 ? (
        <p className="text-gray-500">No products available.</p>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={p.image || "https://via.placeholder.com/300"}
                alt={p.name}
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{p.name}</h3>
                <p className="text-gray-500 text-sm mb-3">{p.description || "No description"}</p>
                <div className="flex justify-between items-center">
                  <span className="text-primary font-bold">${p.price}</span>
                  <button onClick={()=> addToCart(p)} className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
