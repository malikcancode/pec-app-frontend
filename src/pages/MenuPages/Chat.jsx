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

  const steps = [
    {
      title: "Contact Customer Care",
      details: [
        "Reach out via our website chat, email, or phone for any assistance.",
        "Provide your account details so we can assist you efficiently.",
      ],
    },
    {
      title: "Describe Your Query",
      details: [
        "Clearly explain the issue or question you have.",
        "Include transaction details if your query is related to payments.",
      ],
    },
    {
      title: "Receive Guidance",
      details: [
        "Our support team will guide you step by step to resolve the issue.",
        "We may request additional documents or information if required.",
      ],
    },
    {
      title: "Confirmation & Resolution",
      details: [
        "Once your query is verified, we provide a solution or confirmation.",
        "Keep any reference number or confirmation for future reference.",
      ],
    },
  ];

  const importantDetails = [
    "Customer support is available 24/7 for urgent queries.",
    "Please provide accurate information to avoid delays.",
    "Keep transaction IDs or receipts handy for payment-related inquiries.",
    "We aim to respond within 24 hours for most queries.",
  ];

  const additionalRequirements = [
    "Use the chat button below to instantly connect with our support team.",
    "Ensure your contact details are up to date for prompt assistance.",
  ];

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      <h1 className="text-2xl font-bold text-green-600 mb-6 flex items-center gap-2">
        <FaComments className="text-green-500" /> Customer Care
      </h1>

      {/* Instructions Card */}
      <div className="bg-white shadow-md rounded-lg p-6 border border-green-200 mb-6">
        <h2 className="text-2xl font-bold text-green-600 mb-6 text-start">
          How to Reach Our Customer Support
        </h2>

        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-green-50 border-l-4 border-green-600 p-4 rounded-lg mb-4 shadow-sm"
          >
            <h3 className="text-lg font-semibold text-green-700 mb-2">
              {index + 1}. {step.title}
            </h3>
            <ul className="list-disc list-inside text-gray-800 space-y-1">
              {step.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}

        <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-lg mb-4 shadow-sm">
          <h3 className="text-lg font-semibold text-green-700 mb-2">
            Important Details
          </h3>
          <ul className="list-disc list-inside text-gray-800 space-y-1">
            {importantDetails.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-lg mb-6 shadow-sm">
          <h3 className="text-lg font-semibold text-green-700 mb-2">
            Additional Tips
          </h3>
          <ul className="list-disc list-inside text-gray-800 space-y-1">
            {additionalRequirements.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Chat Button */}
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
