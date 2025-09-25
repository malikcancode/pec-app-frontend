import React from "react";
import { FaComments } from "react-icons/fa";

export default function Chat() {
  return (
    <div className="p-6 min-h-screen bg-gray-50">
      <h1 className="text-2xl font-bold text-green-600 mb-6 flex items-center gap-2">
        <FaComments className="text-green-500" /> Chat with Us
      </h1>

      <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100">
        <p className="text-gray-700">
          Start a conversation with our support team. We’re here to help you
          anytime.
        </p>
      </div>
    </div>
  );
}
