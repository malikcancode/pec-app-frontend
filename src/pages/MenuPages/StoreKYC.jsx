import React, { useState, useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { createKYC, getAllKYC } from "../../api/api";
import { toast } from "react-toastify";

export default function StoreKYC() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [pending, setPending] = useState(false);

  const [form, setForm] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
    idType: "",
    idNumber: "",
    idFront: null,
    idBack: null,
  });

  // ✅ Check if user already has a pending KYC
  useEffect(() => {
    const checkKYC = async () => {
      const token = localStorage.getItem("token");
      const userEmail = localStorage.getItem("userEmail"); // store at login
      if (!token || !userEmail) return;

      try {
        const res = await getAllKYC(token);
        const myKYC = res.data.find((k) => k.email === userEmail);

        if (myKYC && myKYC.status === "pending") {
          setPending(true);
        }
      } catch (err) {
        console.error("Error checking KYC:", err);
      }
    };
    checkKYC();
  }, []);

  // ✅ Handle input
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  // ✅ Submit KYC
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (pending) {
      toast.warning("⚠️ Your KYC is already pending review.");
      return;
    }

    // Validation
    if (
      !form.name ||
      !form.address ||
      !form.phone ||
      !form.email ||
      !form.idType ||
      !form.idNumber ||
      !form.idFront ||
      !form.idBack
    ) {
      toast.warning("⚠️ Please fill in all fields before submitting.");
      return;
    }

    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      const response = await createKYC(token, form);
      toast.success("✅ KYC submitted successfully!");
      navigate("/kyc-details", { state: { kyc: response.data } });
    } catch (error) {
      console.error("Error submitting KYC:", error);
      toast.error("❌ Failed to submit KYC. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 h-full bg-gray-50">
      <h1 className="text-2xl font-bold text-green-600 mb-6 flex items-center gap-2">
        <FaCheckCircle className="text-green-500" /> Store KYC Verification
      </h1>

      <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 max-w-lg mx-auto">
        {pending ? (
          <p className="text-red-600 font-semibold text-center">
            ⚠️ Your KYC is currently <span className="font-bold">pending</span>{" "}
            review. You cannot submit again until it’s approved or rejected.
          </p>
        ) : (
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
                placeholder="Enter your address"
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

            {/* ID Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Identification Type
              </label>
              <select
                name="idType"
                value={form.idType}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              >
                <option value="">Select ID Type</option>
                <option value="idCard">ID Card</option>
                <option value="passport">Passport</option>
                <option value="driverLicense">Driver License</option>
              </select>
            </div>

            {/* ID Number */}
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
                placeholder="Enter ID Number"
              />
            </div>

            {/* Upload Front */}
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

            {/* Upload Back */}
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
              disabled={loading}
              className="w-full bg-green-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-green-600 transition disabled:opacity-50"
            >
              {loading ? "Submitting..." : "Submit KYC"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
