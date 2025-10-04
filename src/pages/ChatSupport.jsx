import React, { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

function ChatSupport() {
  useEffect(() => {
    const crispId = import.meta.env.VITE_CRISP_WEBSITE_ID;

    if (!crispId) {
      console.error("Crisp website ID is not set!");
      return;
    }

    // Configure Crisp only once after confirming ID exists
    Crisp.configure(crispId);
  }, []);

  const openChat = () => {
    Crisp.chat.open();
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-2 text-gray-800">
        Need Assistance with Transactions?
      </h2>
      <p className="text-gray-600 mb-4">
        Click below to open the chat widget and connect directly with our
        support team. You can confirm transactions, ask questions, or get
        assistance in real-time.
      </p>
      <button
        onClick={openChat}
        className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition"
      >
        Chat with us
      </button>
    </div>
  );
}

export default ChatSupport;
