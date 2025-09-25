// src/api/index.js
import axios from "axios";

const API = axios.create({
  baseURL: "https://pec-app-backend.vercel.app/api", // ✅ use deployed backend
  // baseURL: "http://localhost:5000/api",
});

// Send OTP
export const sendOtp = (data) => API.post("/auth/send-otp", data); // { email }

// Register with OTP + password
export const registerWithOtp = (data) => API.post("/auth/register", data);
// { email, otp, password }

// Login with OTP
export const loginWithOtp = (data) => API.post("/auth/login", data);
// { email, otp }

// Register with username/password
export const registerWithUsername = (data) =>
  API.post("/auth/register-username", data);

// Login with username/password
export const loginWithUsername = (data) =>
  API.post("/auth/login-username", data);

// Get user profile
export const getProfile = (token) =>
  API.get("/auth/me", { headers: { Authorization: `Bearer ${token}` } });
