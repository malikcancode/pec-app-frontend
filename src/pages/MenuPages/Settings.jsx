import React, { useState, useContext, useEffect } from "react";
import { FaCog } from "react-icons/fa";
import { AuthContext } from "../../context/AuthContext";

export default function Settings() {
  const { user } = useContext(AuthContext);

  const [form, setForm] = useState({
    storeName: "",
    email: "",
    phone: "",
    bankName: "",
    accountNumber: "",
    ifscCode: "",
    accountHolder: "",
    trc20Wallet: "",
  });

  // Prefill with user data from context
  useEffect(() => {
    if (user) {
      setForm((prev) => ({
        ...prev,
        storeName: user.name || "",
        email: user.email || "",
        phone: user.phone || "",
        bankName: user.bankName || "",
        accountNumber: user.accountNumber || "",
        ifscCode: user.ifscCode || "",
        accountHolder: user.accountHolder || "",
        trc20Wallet: user.trc20Wallet || "",
      }));
    }
  }, [user]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.storeName ||
      !form.email ||
      !form.phone ||
      !form.bankName ||
      !form.accountNumber ||
      !form.ifscCode ||
      !form.accountHolder ||
      !form.trc20Wallet
    ) {
      alert("⚠️ Please fill all fields.");
      return;
    }

    alert("✅ Store settings updated successfully!");
    // 👉 Here you would call your API to update store + withdrawal settings
  };

  return (
    <div className="p-6 h-full bg-gray-50">
      {/* Header */}
      <h1 className="text-2xl font-bold text-green-600 mb-6 flex items-center gap-2">
        <FaCog className="text-green-500" /> Account Settings
      </h1>

      {/* Form Card */}
      <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100">
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Store Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Store Name
            </label>
            <input
              type="text"
              name="storeName"
              value={form.storeName}
              onChange={handleChange}
              placeholder="Enter your store name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Phone Number
            </label>
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
            />
          </div>

          {/* Withdrawal Bank Details */}
          <h2 className="text-lg font-semibold text-gray-800 mt-6">
            Withdrawal Bank Details
          </h2>

          {/* Bank Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Bank Name
            </label>
            <input
              type="text"
              name="bankName"
              value={form.bankName}
              onChange={handleChange}
              placeholder="Enter your bank name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Account Number
            </label>
            <input
              type="text"
              name="accountNumber"
              value={form.accountNumber}
              onChange={handleChange}
              placeholder="Enter your account number"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              IFSC Code
            </label>
            <input
              type="text"
              name="ifscCode"
              value={form.ifscCode}
              onChange={handleChange}
              placeholder="Enter IFSC code"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Account Holder Name
            </label>
            <input
              type="text"
              name="accountHolder"
              value={form.accountHolder}
              onChange={handleChange}
              placeholder="Enter account holder name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
            />
          </div>

          {/* Crypto Wallet Section */}
          <h2 className="text-lg font-semibold text-gray-800 mt-6">
            Crypto Wallet (TRC20)
          </h2>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              TRC20 Wallet Address
            </label>
            <input
              type="text"
              name="trc20Wallet"
              value={form.trc20Wallet}
              onChange={handleChange}
              placeholder="Enter your TRC20 wallet address"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white font-medium py-2 rounded-lg hover:bg-green-700 transition"
          >
            Update Settings
          </button>
        </form>
      </div>
    </div>
  );
}
