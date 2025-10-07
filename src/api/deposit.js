import axios from "axios";

const API = axios.create({
  baseURL: "https://pec-app-backend.vercel.app/api/deposit", // ✅ Deployed backend URL
  // baseURL: "http://localhost:5000/api/deposit",
});

// 🪙 1. Initialize a deposit (generate address)
export const initDeposit = (data) => API.post("/init", data);

// 📡 2. Check deposit status
export const getDepositStatus = (orderId) =>
  API.get(`/status?orderId=${orderId}`);
