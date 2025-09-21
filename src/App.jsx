// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import ProtectedRoute from "./components/ProtectedRoute";
import DashboardLayout from "./components/DashboardLayout";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Wallet from "./pages/Wallet";
import OrderCenter from "./pages/OrderCenter";
import Withdraw from "./pages/Withdraw";
import PaymentConfirmation from "./pages/PaymentConfirmation";
import OrderDetails from "./pages/OrderDetails";
import Home from "./pages/Home";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Dashboard Layout Routes */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardLayout>
                  <Dashboard />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/wallet"
            element={
              <ProtectedRoute>
                <DashboardLayout>
                  <Wallet />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/orders"
            element={
              <ProtectedRoute>
                <DashboardLayout>
                  <OrderCenter />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/orders/:orderId"
            element={
              <ProtectedRoute>
                <DashboardLayout>
                  <OrderDetails />{" "}
                </DashboardLayout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/withdraw"
            element={
              <ProtectedRoute>
                <DashboardLayout>
                  <Withdraw />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/payment-confirmation"
            element={
              <ProtectedRoute>
                <DashboardLayout>
                  <PaymentConfirmation />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />

          {/* Fallback */}
          <Route path="*" element={<p>Page Not Found</p>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
