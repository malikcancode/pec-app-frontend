import React from "react";
import {
  FaUndo,
  FaBoxOpen,
  FaCalendarAlt,
  FaCheckCircle,
} from "react-icons/fa";

export default function Returns() {
  // Dummy returned products (replace with real data later)
  const returnedProducts = [
    {
      id: 1,
      name: "Wireless Headphones",
      date: "2025-09-10",
      status: "Completed",
    },
    {
      id: 2,
      name: "Smart Watch",
      date: "2025-09-15",
      status: "Pending",
    },
    {
      id: 3,
      name: "Gaming Mouse",
      date: "2025-09-20",
      status: "Completed",
    },
  ];

  return (
    <div className="p-6 h-full bg-gray-50">
      {/* Header */}
      <h1 className="text-2xl font-bold text-green-600 mb-6 flex items-center gap-2">
        <FaUndo className="text-green-500" /> My Returns
      </h1>

      {/* Container */}
      <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100">
        {returnedProducts.length === 0 ? (
          <p className="text-gray-700">No return requests found.</p>
        ) : (
          <div className="space-y-4">
            {returnedProducts.map((product) => (
              <div
                key={product.id}
                className="p-4 border border-gray-200 rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between bg-gray-50"
              >
                {/* Left: Product Info */}
                <div className="flex items-center gap-3">
                  <FaBoxOpen className="text-green-500 text-xl" />
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800">
                      {product.name}
                    </h2>
                    <p className="text-sm text-gray-600 flex items-center gap-1">
                      <FaCalendarAlt className="text-green-400" /> Returned on:{" "}
                      {product.date}
                    </p>
                  </div>
                </div>

                {/* Right: Status */}
                <div className="mt-3 sm:mt-0 flex items-center gap-2">
                  <FaCheckCircle
                    className={`${
                      product.status === "Completed"
                        ? "text-green-500"
                        : "text-yellow-500"
                    }`}
                  />
                  <span
                    className={`text-sm font-medium ${
                      product.status === "Completed"
                        ? "text-green-600"
                        : "text-yellow-600"
                    }`}
                  >
                    {product.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
