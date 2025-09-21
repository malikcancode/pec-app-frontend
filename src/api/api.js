// src/api/index.js
import axios from "axios";

const API = axios.create({
  baseURL: "https://pec-app-backend.vercel.app/api", // ✅ use deployed backend
});

// Send OTP
export const sendOtp = (data) => API.post("/auth/send-otp", data); // { email }

// Register with OTP + password
export const registerWithOtp = (data) => API.post("/auth/register", data);
// { email, otp, password }

// Login with OTP
export const loginWithOtp = (data) => API.post("/auth/login", data);
// { email, otp }

// Get user profile
export const getProfile = (token) =>
  API.get("/auth/me", { headers: { Authorization: `Bearer ${token}` } });
