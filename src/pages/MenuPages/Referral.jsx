import React, { useState } from "react";
import { FaUsers, FaUserCircle, FaGift } from "react-icons/fa";

export default function Referral() {
  // Example referral data (this would usually come from API)
  const [referrals] = useState([
    { id: 1, name: "Ali Khan", joined: "2023-09-12", reward: "$5" },
    { id: 2, name: "Sara Ahmed", joined: "2023-09-18", reward: "$10" },
    { id: 3, name: "John Doe", joined: "2023-09-25", reward: "$5" },
  ]);

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
        <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg text-sm text-green-700">
          Your referral link:{" "}
          <span className="font-semibold text-green-600">
            partnersellercenter.shop/ref/USER123
          </span>
        </div>
      </div>

      {/* Referrals List */}
      <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Your Referrals
        </h2>

        {referrals.length === 0 ? (
          <p className="text-gray-500 text-sm">No referrals yet.</p>
        ) : (
          <ul className="divide-y divide-gray-200">
            {referrals.map((referral) => (
              <li
                key={referral.id}
                className="flex items-center justify-between py-3"
              >
                <div className="flex items-center gap-3">
                  <FaUserCircle className="text-green-500 text-2xl" />
                  <div>
                    <p className="font-medium text-gray-800">{referral.name}</p>
                    <p className="text-xs text-gray-500">
                      Joined on {referral.joined}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-green-600 font-medium">
                  <FaGift /> {referral.reward}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
