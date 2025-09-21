"use client";

import { useParams, useNavigate, useLocation } from "react-router-dom";
import { FaArrowLeft, FaCheck } from "react-icons/fa";

function OrderDetails() {
  const { orderId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const orderData = location.state?.order;

  // If orderData is not available, you can fetch it from API or show a message
  if (!orderData) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50">
        <button
          onClick={() => navigate(-1)}
          className="mb-4 p-2 hover:bg-gray-200 rounded-lg transition-colors"
        >
          <FaArrowLeft className="text-gray-600" size={16} />
        </button>
        <h1 className="text-lg font-semibold text-gray-900 mb-2">
          Order not found
        </h1>
        <p className="text-gray-600">Please go back and select an order.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      {/* Header */}
      <div className="flex items-center mb-6">
        <button
          onClick={() => navigate(-1)}
          className="mr-4 p-2 hover:bg-gray-200 rounded-lg transition-colors"
        >
          <FaArrowLeft className="text-gray-600" size={16} />
        </button>
        <h1 className="text-lg font-semibold text-gray-900">Order Details</h1>
      </div>

      <div className="max-w-7xl mx-auto space-y-6">
        {/* Products Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Products</h2>

          <div className="flex items-center space-x-4 mb-6">
            {/* Product Image */}
            <div className="w-16 h-16 bg-gray-100 rounded-lg flex-shrink-0 overflow-hidden">
              <img
                src={orderData.image || "/placeholder.svg"}
                alt={orderData.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product Details */}
            <div className="flex-1">
              <h3 className="font-medium text-gray-900 mb-2">
                {orderData.name}
              </h3>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-400 line-through">
                  ${orderData.originalPrice}
                </span>
                <span className="text-sm font-semibold text-gray-900">
                  ${orderData.currentPrice} * {orderData.quantity}
                </span>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="border-t border-gray-200 pt-4 space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Order status</span>
              <span className="font-semibold text-gray-900">
                {orderData.status}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderDetails;
