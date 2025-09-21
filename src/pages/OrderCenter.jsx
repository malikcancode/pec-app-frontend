"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaFilter,
  FaChevronDown,
  FaChevronLeft,
  FaChevronRight,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
} from "react-icons/fa";

export default function OrderCenter() {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("Selling price");
  const navigate = useNavigate();

  // Sample order data matching the image
  const orders = [
    {
      id: "202310211930270034579",
      name: "M170 WIRELESS MOUSE (OFF-WHITE)",
      originalPrice: 11.69,
      currentPrice: 12.99,
      quantity: 1,
      status: "To be paid",
      image: "/white-wireless-mouse.jpg",
    },
    {
      id: "202310211900289941513",
      name: "M325S WIRELESS MOUSE (VIOLET)",
      originalPrice: 13.49,
      currentPrice: 14.99,
      quantity: 1,
      status: "To be paid",
      image: "/violet-wireless-mouse.jpg",
    },
    {
      id: "202310211830287870004",
      name: "Gandalf the Grey™ and Balrog™",
      originalPrice: 17.99,
      currentPrice: 19.99,
      quantity: 1,
      status: "To be paid",
      image: "/gandalf-balrog-figurine.jpg",
    },
  ];

  const totalPages = 5;

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleDetailsClick = (orderId) => {
    navigate(`/orders/${orderId}`, {
      state: { order: orders.find((o) => o.id === orderId) },
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      {/* Header with Estimate Profit */}
      <div className="mb-6">
        <h1 className="text-lg font-semibold text-gray-900">
          Estimate Profit: 24.68
        </h1>
      </div>

      {/* <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <span className="text-gray-700 font-medium">whole</span>

          <div className="relative">
            <button className="flex items-center space-x-2 bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
              <span>{sortBy}</span>
              <FaChevronDown className="text-gray-400" size={12} />
            </button>
          </div>
        </div>

        <button className="flex items-center space-x-2 text-gray-700 hover:text-gray-900">
          <span className="font-medium">Screen</span>
          <FaFilter className="text-gray-400" size={14} />
        </button>
      </div> */}

      {/* Order Cards */}
      <div className="space-y-4 mb-8">
        {orders.map((order) => (
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
                  src={order.image || "/placeholder.svg"}
                  alt={order.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Product Details */}
              <div className="flex-1">
                <h3 className="font-medium text-gray-900 mb-1">{order.name}</h3>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-400 line-through">
                    ${order.originalPrice}
                  </span>
                  <span className="text-sm font-semibold text-gray-900">
                    ${order.currentPrice} * {order.quantity}
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-3">
              <button
                onClick={() => handleDetailsClick(order.id)}
                className="flex-1 py-2 px-4 border border-gray-300  text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Details
              </button>
              <button className="flex-1 py-2 px-4 border border-gray-300  text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                Transfer
              </button>
              <button className="flex-1 py-2 px-4 bg-green-500 text-white  text-sm font-medium hover:bg-green-600 transition-colors">
                Payment
              </button>
            </div>
          </div>
        ))}
      </div>

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
    </div>
  );
}
