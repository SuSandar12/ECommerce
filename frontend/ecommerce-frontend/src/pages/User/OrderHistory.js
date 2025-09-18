import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import API from "../../services/api";
import { useNavigate } from "react-router-dom";

export default function Orders() {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.id) {
      API.get(`/orders/${user.id}`).then((res) => setOrders(res.data));
    }
  }, [user]);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 border-b pb-2">My Orders</h1>

      {orders.length > 0 ? (
        <div className="space-y-4">
          {orders.map((order) => (
            <div
              key={order.id}
              className="bg-white shadow rounded-xl p-4 flex justify-between items-center"
            >
              <div>
                <h2 className="font-semibold">Order #{order.id}</h2>
                <p className="text-gray-600">
                  {order.items.length} items • ${order.total}
                </p>
                <p className="text-sm text-gray-500">
                  Placed on: {new Date(order.date).toLocaleDateString()}
                </p>
              </div>
              <button
                onClick={() => navigate(`/orders/${order.id}`, { state: order })}
                className="text-green-600 font-semibold hover:underline"
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No orders found.</p>
      )}
    </div>
  );
}
