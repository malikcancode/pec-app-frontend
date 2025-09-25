import React from "react";
import { FaTimesCircle } from "react-icons/fa";

export default function Cancellations() {
  // Dummy cancelled products (replace with API data later)
  const cancelledOrders = [
    {
      id: 1,
      name: "Wireless Earbuds",
      image: "https://via.placeholder.com/80",
      price: 59.99,
      date: "2023-10-10",
      reason: "Changed my mind",
    },
    {
      id: 2,
      name: "Smart Watch",
      image: "https://via.placeholder.com/80",
      price: 129.99,
      date: "2023-09-28",
      reason: "Ordered by mistake",
    },
  ];

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      {/* Header */}
      <h1 className="text-2xl font-bold text-green-600 mb-6 flex items-center gap-2">
        <FaTimesCircle className="text-green-500" /> My Cancellations
      </h1>

      {/* Cancelled Orders */}
      <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100">
        {cancelledOrders.length === 0 ? (
          <p className="text-gray-600 text-sm">No cancelled orders found.</p>
        ) : (
          <ul className="divide-y divide-gray-200">
            {cancelledOrders.map((order) => (
              <li
                key={order.id}
                className="flex items-center justify-between py-4"
              >
                {/* Product Info */}
                <div className="flex items-center gap-4">
                  <img
                    src={order.image}
                    alt={order.name}
                    className="w-16 h-16 object-contain rounded-lg border"
                  />
                  <div>
                    <h3 className="text-gray-800 font-medium">{order.name}</h3>
                    <p className="text-gray-500 text-sm">
                      Cancelled on {order.date}
                    </p>
                    <p className="text-red-500 text-xs">
                      Reason: {order.reason}
                    </p>
                  </div>
                </div>

                {/* Price */}
                <div className="text-right">
                  <p className="text-gray-700 font-semibold">
                    ${order.price.toFixed(2)}
                  </p>
                  <p className="text-xs text-gray-400">Cancelled</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
