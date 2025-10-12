import React, { useEffect } from "react";
import { FaComments } from "react-icons/fa";
import { Crisp } from "crisp-sdk-web";

export default function Chat() {
  useEffect(() => {
    const crispId = import.meta.env.VITE_CRISP_WEBSITE_ID;

    if (!crispId) {
      console.error("Crisp website ID is not set!");
      return;
    }

    Crisp.configure(crispId);
  }, []);

  const openChat = () => {
    Crisp.chat.open();
  };

  const rechargeSteps = [
    "Chat with customer support to initiate recharge request.",
    "Get payment link/details for the requested recharge amount.",
    "Copy the link and make payment.",
    "Add Transaction ID/UTR to complete recharge.",
    "Pay the exact amount as requested.",
    "Wait for confirmation and recharge credit.",
    "Provide payment screenshot for fast verification.",
  ];

  const importantCautions = [
    "Pay exact amount.",
    "Provide Transaction ID/UTR.",
    "Failure to do so may result in non-crediting of recharge amount.",
  ];

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      <h1 className="text-2xl font-bold text-green-600 mb-6 flex items-center gap-2">
        <FaComments className="text-green-500" /> Offline Recharge Steps
      </h1>

      <div className="bg-white shadow-md rounded-lg p-6 border border-green-200 mb-6">
        <h2 className="text-2xl font-bold text-green-600 mb-6 text-start">
          Follow These Steps for Offline Recharge
        </h2>

        <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-lg mb-4 shadow-sm">
          <ul className="list-decimal list-inside text-gray-800 space-y-2">
            {rechargeSteps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ul>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-lg mb-6 shadow-sm">
          <h3 className="text-lg font-semibold text-yellow-700 mb-2">
            Important Caution
          </h3>
          <ul className="list-disc list-inside text-gray-800 space-y-1">
            {importantCautions.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <button
          onClick={openChat}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-all shadow-md"
        >
          Chat with Support
        </button>
      </div>
    </div>
  );
}
