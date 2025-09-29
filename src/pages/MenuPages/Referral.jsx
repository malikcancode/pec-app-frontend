import React, { useState } from "react";
import { FaUsers, FaUserCircle, FaGift } from "react-icons/fa";
import { FiCopy, FiCheck } from "react-icons/fi";

export default function Referral() {
  // Example referral data (this would usually come from API)
  const [referrals] = useState([
    { id: 1, name: "Ali Khan", joined: "2023-09-12", reward: "$5" },
    { id: 2, name: "Sara Ahmed", joined: "2023-09-18", reward: "$10" },
    { id: 3, name: "John Doe", joined: "2023-09-25", reward: "$5" },
    { id: 4, name: "Amna Iqbal", joined: "2023-09-27", reward: "$15" },
    { id: 5, name: "Hassan Ali", joined: "2023-09-28", reward: "$20" },
  ]);

  const referralLink = "partnersellercenter.shop/ref/USER123";
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2s
  };

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      {/* Title */}
      <h1 className="text-2xl font-bold text-green-600 mb-6 flex items-center gap-2">
        <FaUsers className="text-green-500" /> Friends (Referral)
      </h1>

      {/* Info Section */}
      <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 mb-6">
        <p className="text-gray-700">
          Invite your friends and earn rewards when they join and shop with us.
        </p>
        <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg text-sm text-green-700 flex items-center justify-between">
          <span className="font-semibold sm:text-sm text-xs text-green-600 truncate">
            {referralLink}
          </span>
          <button
            onClick={handleCopy}
            className="ml-3 flex items-center gap-1 px-2 py-1 border border-green-300 rounded-md text-green-600 hover:bg-green-100 transition text-xs sm:text-sm"
          >
            {copied ? (
              <>
                <FiCheck className="text-green-500" /> Copied
              </>
            ) : (
              <>
                <FiCopy /> Copy
              </>
            )}
          </button>
        </div>
      </div>

      {/* Referrals Grid */}
      <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Your Referrals
        </h2>

        {referrals.length === 0 ? (
          <p className="text-gray-500 text-sm">No referrals yet.</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {referrals.map((referral) => (
              <div
                key={referral.id}
                className="p-4 border rounded-lg shadow-sm bg-gray-50 hover:shadow-md transition flex flex-col items-center text-center"
              >
                <FaUserCircle className="text-green-500 text-4xl mb-2" />
                <p className="font-medium text-gray-800">{referral.name}</p>
                <p className="text-xs text-gray-500 mb-2">
                  Joined on {referral.joined}
                </p>
                <div className="flex items-center gap-1 text-green-600 font-medium text-sm">
                  <FaGift /> {referral.reward}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
