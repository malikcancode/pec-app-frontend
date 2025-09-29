"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaChevronLeft,
  FaChevronRight,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
} from "react-icons/fa";
import { useOrders } from "../context/OrderContext";

export default function OrderCenter() {
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const { orders } = useOrders(); // ✅ get orders from context

  const totalPages = 5;

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // OrderCenter.jsx

  const handleDetailsClick = (order) => {
    navigate(`/products/${order.product._id || order.product.id}`, {
      state: { product: order.product }, // ✅ pass product if you want
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      {/* Header with Estimate Profit */}
      <div className="mb-6">
        <h1 className="text-lg font-semibold text-gray-900">
          Estimate Profit: {orders.length > 0 ? "24.68" : "0.00"}
        </h1>
      </div>

      {/* Order Cards */}
      <div className="space-y-4 mb-8">
        {orders.length === 0 ? (
          <p className="text-gray-500 text-center">No orders yet.</p>
        ) : (
          orders.map((order) => (
            <div
              key={order.id}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-4"
            >
              {/* Order Header */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-gray-600">{order.id}</span>
                <span className="text-sm text-green-600 font-medium">
                  {order.status}
                </span>
              </div>

              {/* Product Info */}
              <div className="flex items-center space-x-4 mb-4">
                {/* Product Image */}
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex-shrink-0 overflow-hidden">
                  <img
                    src={order.product.image || "/placeholder.svg"}
                    alt={order.product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Product Details */}
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900 mb-1">
                    {order.product.name}
                  </h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-semibold text-gray-900">
                      ${order.product.price?.toFixed(2)} × 1
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => handleDetailsClick(order)}
                  className="flex-1 py-2 px-4 border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Details
                </button>

                <button className="flex-1 py-2 px-4 border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                  Transfer
                </button>
                <button className="flex-1 py-2 px-4 bg-green-500 text-white text-sm font-medium hover:bg-green-600 transition-colors">
                  Payment
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Pagination */}
      {orders.length > 0 && (
        <div className="flex items-center justify-center space-x-2">
          {/* First Page */}
          <button
            onClick={() => handlePageChange(1)}
            disabled={currentPage === 1}
            className="p-2 text-gray-400 hover:text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <FaAngleDoubleLeft size={14} />
          </button>

          {/* Previous Page */}
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2 text-gray-400 hover:text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <FaChevronLeft size={14} />
          </button>

          {/* Page Numbers */}
          {[1, 2, 3, 4, 5].map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`w-8 h-8 rounded text-sm font-medium transition-colors ${
                currentPage === page
                  ? "bg-green-500 text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {page}
            </button>
          ))}

          {/* Next Page */}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-2 text-gray-400 hover:text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <FaChevronRight size={14} />
          </button>

          {/* Last Page */}
          <button
            onClick={() => handlePageChange(totalPages)}
            disabled={currentPage === totalPages}
            className="p-2 text-gray-400 hover:text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <FaAngleDoubleRight size={14} />
          </button>
        </div>
      )}
    </div>
  );
}
