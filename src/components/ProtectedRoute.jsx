import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Spinner from "../components/Spinner"; // Import the Spinner component

export default function ProtectedRoute({ children }) {
  const { token, loading } = useContext(AuthContext);

  if (loading) {
    return <Spinner />; // Show the spinner while loading
  }

  // If no token, redirect to login
  if (!token) {
    return <Navigate to="/" replace />;
  }

  // Otherwise, render children
  return children;
}
