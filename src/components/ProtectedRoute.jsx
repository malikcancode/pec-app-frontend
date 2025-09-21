// src/components/ProtectedRoute.jsx
import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { token, loading } = useContext(AuthContext);

  if (loading) {
    return <p>Loading...</p>; // optional loading state
  }

  // If no token, redirect to login
  if (!token) {
    return <Navigate to="/" replace />;
  }

  // Otherwise, render children
  return children;
}
