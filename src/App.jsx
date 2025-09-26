// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import ProtectedRoute from "./components/ProtectedRoute";
import DashboardLayout from "./components/DashboardLayout";

import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Dashboard from "./pages/Dashboard";
import Wallet from "./pages/Wallet";
import OrderCenter from "./pages/OrderCenter";
import Withdraw from "./pages/Withdraw";
import PaymentConfirmation from "./pages/PaymentConfirmation";
import OrderDetails from "./pages/OrderDetails";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./components/Products/ProductDetails";
import About from "./pages/About";
import FAQs from "./pages/FAQs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Profile from "./pages/Profile";
import Cancellations from "./pages/MenuPages/Cancellations";
import Chat from "./pages/MenuPages/Chat";
import Feedback from "./pages/MenuPages/Feedback";
import Returns from "./pages/MenuPages/Returns";
import Help from "./pages/MenuPages/Help";
import Messages from "./pages/MenuPages/Messages";
import Referral from "./pages/MenuPages/Referral";
import Settings from "./pages/MenuPages/Settings";
import StoreKYC from "./pages/MenuPages/StoreKYC";
import WishList from "./pages/MenuPages/WishList";
import MyOrders from "./pages/MenuPages/MyOrders";
import Cart from "./pages/MenuPages/Cart";
import AdminLayout from "./pages/Admin/AdminLayout";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import Users from "./pages/Admin/Users";
import Notifications from "./pages/Admin/Notifications";
import AdminProducts from "./pages/Admin/AdminProducts";
import CreateProduct from "./pages/Admin/CreateProduct";
import Orders from "./pages/Admin/Orders";

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
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<AdminDashboard />} />
            <Route path="admin-products" element={<AdminProducts />} />
            <Route path="create-product" element={<CreateProduct />} />
            <Route path="users" element={<Users />} />
            <Route path="notifications" element={<Notifications />} />{" "}
            <Route path="orders" element={<Orders />} />{" "}
          </Route>

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
            path="/privacypolicy"
            element={
              <ProtectedRoute>
                <DashboardLayout>
                  <PrivacyPolicy />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <DashboardLayout>
                  <Profile />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/about"
            element={
              <ProtectedRoute>
                <DashboardLayout>
                  <About />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/faqs"
            element={
              <ProtectedRoute>
                <DashboardLayout>
                  <FAQs />
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
            path="/products"
            element={
              <ProtectedRoute>
                <DashboardLayout>
                  <Products />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/products/:productId"
            element={
              <ProtectedRoute>
                <DashboardLayout>
                  <ProductDetails />{" "}
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
            path="/cancellations"
            element={
              <ProtectedRoute>
                <DashboardLayout>
                  <Cancellations />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/chat"
            element={
              <ProtectedRoute>
                <DashboardLayout>
                  <Chat />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/wishlist"
            element={
              <ProtectedRoute>
                <DashboardLayout>
                  <WishList />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/feedback"
            element={
              <ProtectedRoute>
                <DashboardLayout>
                  <Feedback />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/returns"
            element={
              <ProtectedRoute>
                <DashboardLayout>
                  <Returns />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/help"
            element={
              <ProtectedRoute>
                <DashboardLayout>
                  <Help />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/messages"
            element={
              <ProtectedRoute>
                <DashboardLayout>
                  <Messages />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/referral"
            element={
              <ProtectedRoute>
                <DashboardLayout>
                  <Referral />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <DashboardLayout>
                  <Cart />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/my-orders"
            element={
              <ProtectedRoute>
                <DashboardLayout>
                  <MyOrders />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/returns"
            element={
              <ProtectedRoute>
                <DashboardLayout>
                  <Returns />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/settings"
            element={
              <ProtectedRoute>
                <DashboardLayout>
                  <Settings />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/kyc"
            element={
              <ProtectedRoute>
                <DashboardLayout>
                  <StoreKYC />
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
