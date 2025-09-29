"use client";

import { useLocation, useParams, useNavigate } from "react-router-dom";
import { useOrders } from "../context/OrderContext";

export default function OrderDetails() {
  const { orderId } = useParams(); // from URL
  const location = useLocation();
  const navigate = useNavigate();
  const { orders } = useOrders();

  // Prefer order from navigation state (fast), fallback to context (page reload)
  const order = location.state?.order || orders.find((o) => o.id === orderId);

  if (!order) {
    return (
      <div className="p-6">
        <h1 className="text-xl font-semibold text-gray-900 mb-4">
          Order Not Found
        </h1>
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold text-gray-900 mb-4">
        Order Details
      </h1>

      {/* Order Info */}
      <div className="bg-white rounded-lg shadow border p-4 mb-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-gray-600">Order ID: {order.id}</span>
          <span className="text-sm text-green-600 font-medium">
            {order.status}
          </span>
        </div>

        <div className="flex items-center space-x-4">
          <div className="w-20 h-20 bg-gray-100 rounded overflow-hidden">
            <img
              src={order.product.image || "/placeholder.svg"}
              alt={order.product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="font-medium text-gray-900">{order.product.name}</h3>
            <p className="text-sm text-gray-600">
              ${order.product.price?.toFixed(2)} × 1
            </p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center space-x-3">
        <button
          onClick={() => navigate(-1)}
          className="flex-1 py-2 px-4 border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
        >
          Back
        </button>
        <button className="flex-1 py-2 px-4 border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
          Transfer
        </button>
        <button className="flex-1 py-2 px-4 bg-green-500 text-white text-sm font-medium hover:bg-green-600 transition-colors">
          Payment
        </button>
      </div>
    </div>
  );
}
