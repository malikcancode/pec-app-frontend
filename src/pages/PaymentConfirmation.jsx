"use client";

import { useState } from "react";
import { FaTimes, FaCheckCircle } from "react-icons/fa";
import { SiTether, SiVisa, SiMastercard } from "react-icons/si";

export default function PaymentConfirmationModal({
  isOpen,
  onClose,
  amount,
  orderNumber,
  onConfirm,
}) {
  const [activeTab, setActiveTab] = useState("online");
  const [selectedPayment, setSelectedPayment] = useState(null); // No default selection

  if (!isOpen) return null;

  const handlePayment = () => {
    if (!selectedPayment) {
      alert("Please select a payment method");
      return;
    }
    onConfirm(selectedPayment); // Pass selected method to parent
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold text-gray-900">
            Payment Confirmation
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <FaTimes size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Order Details */}
          <div className="mb-4">
            <p className="text-sm text-gray-600 mb-1">
              Recharge order number:{" "}
              <span className="text-gray-900">{orderNumber}</span>
            </p>
            <p className="text-sm text-gray-600">
              Deposit amount:{" "}
              <span className="text-red-500 font-semibold">${amount}</span>
            </p>
          </div>

          {/* Tabs */}
          <div className="flex mb-4 bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setActiveTab("online")}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                activeTab === "online"
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Online deposit
            </button>
            <button
              onClick={() => setActiveTab("offline")}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                activeTab === "offline"
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Offline deposit
            </button>
          </div>

          {/* Payment Options */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-900 mb-3">
              Payment options
            </h3>

            {/* Tether Option */}
            <div
              onClick={() => setSelectedPayment("tether")}
              className={`relative bg-green-500 p-4 mb-3 cursor-pointer transition-all ${
                selectedPayment === "tether" ? "ring-2 ring-green-600" : ""
              }`}
            >
              <div className="flex items-center justify-between text-white">
                <div>
                  <div className="font-semibold text-lg">Tether</div>
                  <div className="text-sm opacity-90">USDT (TRC20)</div>
                </div>
                <SiTether size={32} className="text-white" />
              </div>
              {selectedPayment === "tether" && (
                <div className="absolute top-2 right-2">
                  <FaCheckCircle className="text-white" size={20} />
                </div>
              )}
            </div>

            {/* Card Options */}
            <div
              onClick={() => setSelectedPayment("card")}
              className={`relative bg-gray-100 p-4 cursor-pointer transition-all ${
                selectedPayment === "card" ? "ring-2 ring-green-600" : ""
              }`}
            >
              <div className="flex items-center justify-center space-x-4">
                <SiVisa size={32} />
                <SiMastercard size={32} />
              </div>
              {selectedPayment === "card" && (
                <div className="absolute top-2 right-2">
                  <FaCheckCircle className="text-green-600" size={20} />
                </div>
              )}
            </div>
          </div>

          {/* Confirm Button */}
          <button
            onClick={() => handlePayment(selectedPayment)}
            className="w-full py-3 font-medium bg-green-500 text-white hover:bg-green-600 transition-colors"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
