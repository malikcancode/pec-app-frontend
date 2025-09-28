import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

export default function StoreKYC() {
  const [form, setForm] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
    idNumber: "",
    idFront: null,
    idBack: null,
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

    // Simple validation
    if (
      !form.name ||
      !form.address ||
      !form.phone ||
      !form.email ||
      !form.idNumber ||
      !form.idFront ||
      !form.idBack
    ) {
      alert("⚠️ Please fill in all fields before submitting.");
      return;
    }

    alert("✅ KYC verification submitted successfully!");
    setForm({
      name: "",
      address: "",
      phone: "",
      email: "",
      idNumber: "",
      idFront: null,
      idBack: null,
    });
  };

  return (
    <div className="p-6 h-full bg-gray-50">
      <h1 className="text-2xl font-bold text-green-600 mb-6 flex items-center gap-2">
        <FaCheckCircle className="text-green-500" /> Store KYC Verification
      </h1>

      <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 max-w-lg mx-auto">
        <p className="text-gray-700 mb-4">
          Submit your KYC documents here to verify your identity and unlock more
          features.
        </p>

        {/* KYC Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              placeholder="Enter your full name"
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Address (as per ID)
            </label>
            <input
              type="text"
              name="address"
              value={form.address}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              placeholder="Enter your address as per ID"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              placeholder="Enter your phone number"
            />
          </div>

          {/* Email */}
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

          {/* Identification Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Identification Number
            </label>
            <input
              type="text"
              name="idNumber"
              value={form.idNumber}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              placeholder="Enter ID / Driver’s License / Passport No."
            />
          </div>

          {/* Upload Front Side */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Upload ID (Front Side)
            </label>
            <input
              type="file"
              name="idFront"
              accept="image/*,.pdf"
              onChange={handleChange}
              className="w-full"
            />
          </div>

          {/* Upload Back Side */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Upload ID (Back Side)
            </label>
            <input
              type="file"
              name="idBack"
              accept="image/*,.pdf"
              onChange={handleChange}
              className="w-full"
            />
          </div>

          {/* Submit */}
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
