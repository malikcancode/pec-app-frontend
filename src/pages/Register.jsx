"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiBell, FiUser, FiEye, FiEyeOff } from "react-icons/fi";
import { sendOtp, registerWithOtp } from "../api/api"; // updated API

function Register() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Email");
  const [showPassword, setShowPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [otpSent, setOtpSent] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    verificationCode: "",
    password: "",
    invitationCode: "",
  });

  // Step 1: Obtain OTP (register the user)
  const handleObtainCode = async () => {
    if (!formData.email) return alert("Enter your email first");

    try {
      await sendOtp({ email: formData.email });
      setOtpSent(true);
      alert("OTP sent to your email!");
    } catch (err) {
      alert(err.response?.data?.error || "Error sending OTP");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!otpSent) return alert("Obtain OTP first");
    if (!formData.verificationCode) return alert("Enter OTP");
    if (!formData.password) return alert("Set password");
    if (!agreed) return alert("Agree to terms");

    try {
      const res = await registerWithOtp({
        email: formData.email,
        otp: formData.verificationCode,
        password: formData.password,
        referredBy: formData.invitationCode || null,
      });

      alert("Registration successful!");
      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.error || "OTP verification failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-white px-4 py-3 flex items-center justify-between border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center">
            <span className="text-white font-bold text-sm">◊</span>
          </div>
          <span className="text-green-600 font-bold text-xl">PEC</span>
        </div>
        <div className="flex items-center space-x-4">
          <FiBell className="text-gray-600" size={20} />
          <FiUser className="text-gray-600" size={20} />
          <div className="flex items-center space-x-1">
            <img src="/uk-flag.png" alt="UK" className="w-5 h-3" />
            <span className="text-sm text-gray-600">EN</span>
          </div>
        </div>
      </header>

      {/* Main Form */}
      <main className="px-4 py-6 flex-1 w-full">
        <div className="max-w-7xl mx-auto w-full">
          <h1 className="text-2xl font-bold text-center mb-6">Sign up</h1>

          {/* Tabs */}
          <div className="flex mb-6">
            {["Account", "Mobile", "Email"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-2 text-center border-b-2 transition-colors ${
                  activeTab === tab
                    ? "border-green-500 text-green-600 font-medium"
                    : "border-gray-200 text-gray-500"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 w-full">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                E-mail
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="Please enter your email"
                className="w-full px-3 py-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white"
                required
              />
            </div>

            {/* Verification Code */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Verification Code
              </label>
              <div className="flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0">
                <input
                  type="text"
                  value={formData.verificationCode}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      verificationCode: e.target.value,
                    })
                  }
                  placeholder="Enter OTP"
                  className="flex-1 px-3 py-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white w-full"
                  required
                />
                <button
                  type="button"
                  onClick={handleObtainCode}
                  className="px-4 py-3 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors w-full sm:w-auto"
                >
                  {otpSent ? "Resend OTP" : "Obtain verification code"}
                </button>
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Set login password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  placeholder="Set login password"
                  className="w-full px-3 py-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3.5 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                </button>
              </div>
            </div>

            {/* Invitation Code */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Invitation code
              </label>
              <input
                type="text"
                value={formData.invitationCode}
                onChange={(e) =>
                  setFormData({ ...formData, invitationCode: e.target.value })
                }
                placeholder="Case sensitive"
                className="w-full px-3 py-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white"
              />
            </div>

            {/* Agreement */}
            <div className="flex items-start space-x-2 py-2">
              <input
                type="checkbox"
                id="agreement"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-1 w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
              />
              <label htmlFor="agreement" className="text-sm text-gray-600">
                Read and agree 'Service agreement' and 'Privacy policy'?
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors font-medium mt-6"
            >
              Verify OTP & Complete Registration
            </button>
          </form>

          <p className="text-center mt-6 text-gray-600">
            Already registered?{" "}
            <button
              onClick={() => navigate("/login")}
              className="text-green-600 hover:text-green-700 font-medium"
            >
              Login
            </button>
          </p>
        </div>
      </main>
    </div>
  );
}

export default Register;
