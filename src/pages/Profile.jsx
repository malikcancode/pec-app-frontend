import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import {
  FaUser,
  FaEnvelope,
  FaLevelUpAlt,
  FaWallet,
  FaShareAlt,
  FaCheckCircle,
} from "react-icons/fa";

export default function Profile() {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <p className="text-center mt-10">Loading profile...</p>;
  }

  const profileItems = [
    { label: "Name", value: user.name, icon: <FaUser /> },
    { label: "Email", value: user.email || user.name, icon: <FaEnvelope /> },
    {
      label: "Account Level",
      value: user.accountLevel,
      icon: <FaLevelUpAlt />,
    },
    {
      label: "Wallet Balance",
      value: `$${user.walletBalance}`,
      icon: <FaWallet />,
    },
    { label: "Referral Code", value: user.referralCode, icon: <FaShareAlt /> },
    {
      label: "Verified",
      value: user.isVerified ? "Yes" : "No",
      icon: <FaCheckCircle />,
    },
  ];

  return (
    <div className="p-6 min-h-screen bg-gray-50 w-full">
      {/* Header */}
      <h1 className="text-3xl font-bold text-green-600 mb-6">My Profile</h1>

      {/* Profile Card */}
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full border border-gray-100">
        <div className="flex items-center gap-4 pb-6 border-b border-gray-200">
          <div className="w-16 h-16 bg-green-100 text-green-600 flex items-center justify-center rounded-full text-2xl font-bold">
            {user.name.charAt(0).toUpperCase()}
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-800 capitalize">
              {user.name}
            </h2>
            <p className="text-gray-500 text-sm">
              {user.isVerified ? "Verified User" : "Unverified"}
            </p>
          </div>
        </div>

        {/* Details Grid */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {profileItems.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 bg-gray-50 hover:bg-green-50 transition rounded-lg p-4"
            >
              <span className="text-green-600 text-lg">{item.icon}</span>
              <div>
                <p className="text-gray-500 text-sm">{item.label}</p>
                <p className="font-medium text-gray-800">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
