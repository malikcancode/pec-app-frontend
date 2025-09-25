import React from "react";
import { FaBox, FaCalendarAlt, FaDollarSign, FaTruck } from "react-icons/fa";

export default function MyOrders() {
  // Sample data - replace with real API later
  const orders = [
    {
      id: "ORD-123456",
      product: "Wireless Headphones",
      date: "2025-09-20",
      total: 120,
      status: "Shipped",
    },
    {
      id: "ORD-654321",
      product: "Smart Watch",
      date: "2025-09-18",
      total: 75,
      status: "Delivered",
    },
    {
      id: "ORD-987654",
      product: "Gaming Mouse",
      date: "2025-09-10",
      total: 45,
      status: "Pending",
    },
  ];

  const statusColor = {
    Shipped: "text-blue-600 bg-blue-50",
    Delivered: "text-green-600 bg-green-50",
    Pending: "text-yellow-600 bg-yellow-50",
    Cancelled: "text-red-600 bg-red-50",
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-green-700 mb-6">My Orders</h1>

      <div className="space-y-4">
        {orders.map((order) => (
          <div
            key={order.id}
            className="bg-white shadow rounded-lg p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 hover:shadow-md transition"
          >
            {/* Left: Product + ID */}
            <div>
              <h2 className="font-semibold text-gray-800 flex items-center gap-2">
                <FaBox className="text-green-600" /> {order.product}
              </h2>
              <p className="text-sm text-gray-500">Order ID: {order.id}</p>
            </div>

            {/* Middle: Date + Total */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-sm">
              <div className="flex items-center gap-1 text-gray-600">
                <FaCalendarAlt className="text-green-600" />
                {order.date}
              </div>
              <div className="flex items-center gap-1 text-gray-600">
                <FaDollarSign className="text-green-600" />${order.total}
              </div>
            </div>

            {/* Right: Status */}
            <div className="flex items-center gap-2">
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  statusColor[order.status]
                }`}
              >
                {order.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
