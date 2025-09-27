// src/api/index.js
import axios from "axios";

// Create an axios instance to manage requests to the backend
const API = axios.create({
  // baseURL: "https://pec-app-backend.vercel.app/api",
  baseURL: "http://localhost:5000/api", // use this for local dev
});

// Send OTP to email
export const sendOtp = (data) => API.post("/auth/send-otp", data); // { email }

// Register using OTP + password
export const registerWithOtp = (data) => API.post("/auth/register-otp", data); // { email, otp, password }

// Login using OTP
export const loginWithOtp = (data) => API.post("/auth/login-otp", data); // { email, otp }

// Register using username + password
export const registerWithUsername = (data) =>
  API.post("/auth/register-username", data); // { username, password, invitationCode }

// Login using username + password
export const loginWithUsername = (data) =>
  API.post("/auth/login-username", data); // { username, password }

// Get user profile (after authentication)
export const getProfile = (token) =>
  API.get("/auth/me", { headers: { Authorization: `Bearer ${token}` } });

export const getAdminProfile = (token) =>
  API.get("/admin/admin-profile", {
    headers: { Authorization: `Bearer ${token}` },
  });

export const registerAdmin = (data) => API.post("/admin/register", data); // { username, password }

// Admin Login using username + password
export const loginAdmin = (data) => API.post("/admin/login", data); // { username, password }

export const getUsers = (token) =>
  API.get("/admin/users", {
    headers: { Authorization: `Bearer ${token}` }, // Pass token for authentication
  });

export const deleteUser = (token, userId) =>
  API.delete(`/admin/users/${userId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
