import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

export default function StoreKYC() {
  const [form, setForm] = useState({
    storeName: "",
    ownerName: "",
    email: "",
    document: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.storeName || !form.ownerName || !form.email || !form.document) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    alert("✅ KYC verification submitted successfully!");
    setForm({ storeName: "", ownerName: "", email: "", document: null });
  };

  return (
    <div className="p-6 h-full bg-gray-50">
      <h1 className="text-2xl font-bold text-green-600 mb-6 flex items-center gap-2">
        <FaCheckCircle className="text-green-500" /> Store KYC Verification
      </h1>

      <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 max-w-lg mx-auto">
        <p className="text-gray-700 mb-4">
          Submit your KYC documents here to verify your store and unlock more
          selling features.
        </p>

        {/* KYC Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Store Name
            </label>
            <input
              type="text"
              name="storeName"
              value={form.storeName}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              placeholder="Enter your store name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Owner Name
            </label>
            <input
              type="text"
              name="ownerName"
              value={form.ownerName}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              placeholder="Enter owner's full name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              placeholder="Enter your email"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-green-600 transition"
          >
            Submit KYC
          </button>
        </form>
      </div>
    </div>
  );
}
