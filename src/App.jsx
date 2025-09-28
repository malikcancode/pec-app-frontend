import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

// Import your Spinner component for loading indication
import Spinner from "./components/Spinner";
import ProtectedRoute from "./components/ProtectedRoute";
import Notifications from "./pages/Admin/Notifications";
import Products from "./pages/Products";
import DashboardLayout from "./components/DashboardLayout";
import MyOrders from "./pages/MenuPages/MyOrders";
import Cart from "./pages/MenuPages/Cart";
import WishList from "./pages/MenuPages/WishList";
import Referral from "./pages/MenuPages/Referral";
import StoreKYC from "./pages/MenuPages/StoreKYC";
import Chat from "./pages/MenuPages/Chat";
import Messages from "./pages/MenuPages/Messages";
import Returns from "./pages/MenuPages/Returns";
import Cancellations from "./pages/MenuPages/Cancellations";
import Settings from "./pages/MenuPages/Settings";
import Feedback from "./pages/MenuPages/Feedback";
import Help from "./pages/MenuPages/Help";
import ProductDetails from "./components/Products/ProductDetails";

// Lazy load components
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Auth/Login"));
const Register = lazy(() => import("./pages/Auth/Register"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Wallet = lazy(() => import("./pages/Wallet"));
const OrderCenter = lazy(() => import("./pages/OrderCenter"));
const Withdraw = lazy(() => import("./pages/Withdraw"));
const PaymentConfirmation = lazy(() => import("./pages/PaymentConfirmation"));
const OrderDetails = lazy(() => import("./pages/OrderDetails"));
const About = lazy(() => import("./pages/About"));
const FAQs = lazy(() => import("./pages/FAQs"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const Profile = lazy(() => import("./pages/Profile"));
const AdminLayout = lazy(() => import("./pages/Admin/AdminLayout"));
const AdminDashboard = lazy(() => import("./pages/Admin/AdminDashboard"));
const AdminProducts = lazy(() => import("./pages/Admin/AdminProducts"));
const CreateProduct = lazy(() => import("./pages/Admin/CreateProduct"));
const Users = lazy(() => import("./pages/Admin/Users"));
const Orders = lazy(() => import("./pages/Admin/Orders"));

function App() {
  return (
    <AuthProvider>
      <Router>
        <Suspense fallback={<Spinner />}>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Admin Routes */}
            <Route
              path="/admin"
              element={
                <ProtectedRoute allowedRoles={["admin"]}>
                  <AdminLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<AdminDashboard />} />
              <Route path="admin-products" element={<AdminProducts />} />
              <Route path="create-product" element={<CreateProduct />} />
              <Route path="users" element={<Users />} />
              <Route path="orders" element={<Orders />} />
              <Route path="notifications" element={<Notifications />} />
            </Route>

            {/* Dashboard Routes */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute allowedRoles={["user"]}>
                  <DashboardLayout>
                    <Dashboard />
                  </DashboardLayout>
                </ProtectedRoute>
              }
            />

            <Route
              path="/products"
              element={
                <ProtectedRoute allowedRoles={["user"]}>
                  <DashboardLayout>
                    <Products />
                  </DashboardLayout>
                </ProtectedRoute>
              }
            />

            <Route
              path="/products/:id"
              element={
                <ProtectedRoute allowedRoles={["user"]}>
                  <DashboardLayout>
                    <ProductDetails />
                  </DashboardLayout>
                </ProtectedRoute>
              }
            />

            <Route
              path="/wallet"
              element={
                <ProtectedRoute allowedRoles={["user"]}>
                  <DashboardLayout>
                    <Wallet />
                  </DashboardLayout>
                </ProtectedRoute>
              }
            />

            <Route
              path="/orders"
              element={
                <ProtectedRoute allowedRoles={["user"]}>
                  <DashboardLayout>
                    <OrderCenter />
                  </DashboardLayout>
                </ProtectedRoute>
              }
            />

            <Route
              path="/my-orders"
              element={
                <ProtectedRoute allowedRoles={["user"]}>
                  <DashboardLayout>
                    <MyOrders />
                  </DashboardLayout>
                </ProtectedRoute>
              }
            />

            <Route
              path="/cart"
              element={
                <ProtectedRoute allowedRoles={["user"]}>
                  <DashboardLayout>
                    <Cart />
                  </DashboardLayout>
                </ProtectedRoute>
              }
            />

            <Route
              path="/wishlist"
              element={
                <ProtectedRoute allowedRoles={["user"]}>
                  <DashboardLayout>
                    <WishList />
                  </DashboardLayout>
                </ProtectedRoute>
              }
            />

            <Route
              path="/kyc"
              element={
                <ProtectedRoute allowedRoles={["user"]}>
                  <DashboardLayout>
                    <StoreKYC />
                  </DashboardLayout>
                </ProtectedRoute>
              }
            />

            <Route
              path="/chat"
              element={
                <ProtectedRoute allowedRoles={["user"]}>
                  <DashboardLayout>
                    <Chat />
                  </DashboardLayout>
                </ProtectedRoute>
              }
            />

            <Route
              path="/messages"
              element={
                <ProtectedRoute allowedRoles={["user"]}>
                  <DashboardLayout>
                    <Messages />
                  </DashboardLayout>
                </ProtectedRoute>
              }
            />

            <Route
              path="/returns"
              element={
                <ProtectedRoute allowedRoles={["user"]}>
                  <DashboardLayout>
                    <Returns />
                  </DashboardLayout>
                </ProtectedRoute>
              }
            />

            <Route
              path="/cancellations"
              element={
                <ProtectedRoute allowedRoles={["user"]}>
                  <DashboardLayout>
                    <Cancellations />
                  </DashboardLayout>
                </ProtectedRoute>
              }
            />

            <Route
              path="/settings"
              element={
                <ProtectedRoute allowedRoles={["user"]}>
                  <DashboardLayout>
                    <Settings />
                  </DashboardLayout>
                </ProtectedRoute>
              }
            />

            <Route
              path="/referral"
              element={
                <ProtectedRoute allowedRoles={["user"]}>
                  <DashboardLayout>
                    <Referral />
                  </DashboardLayout>
                </ProtectedRoute>
              }
            />

            <Route
              path="/withdraw"
              element={
                <ProtectedRoute allowedRoles={["user"]}>
                  <DashboardLayout>
                    <Withdraw />
                  </DashboardLayout>
                </ProtectedRoute>
              }
            />

            <Route
              path="/payment-confirmation"
              element={
                <ProtectedRoute allowedRoles={["user"]}>
                  <DashboardLayout>
                    <PaymentConfirmation />
                  </DashboardLayout>
                </ProtectedRoute>
              }
            />

            <Route
              path="/orders/:orderId"
              element={
                <ProtectedRoute allowedRoles={["user"]}>
                  <DashboardLayout>
                    <OrderDetails />
                  </DashboardLayout>
                </ProtectedRoute>
              }
            />

            <Route
              path="/about"
              element={
                <ProtectedRoute allowedRoles={["user"]}>
                  <DashboardLayout>
                    <About />
                  </DashboardLayout>
                </ProtectedRoute>
              }
            />

            <Route
              path="/profile"
              element={
                <ProtectedRoute allowedRoles={["user"]}>
                  <DashboardLayout>
                    <Profile />
                  </DashboardLayout>
                </ProtectedRoute>
              }
            />

            <Route
              path="/faqs"
              element={
                <ProtectedRoute allowedRoles={["user"]}>
                  <DashboardLayout>
                    <FAQs />
                  </DashboardLayout>
                </ProtectedRoute>
              }
            />

            <Route
              path="/feedback"
              element={
                <ProtectedRoute allowedRoles={["user"]}>
                  <DashboardLayout>
                    <Feedback />
                  </DashboardLayout>
                </ProtectedRoute>
              }
            />

            <Route
              path="/help"
              element={
                <ProtectedRoute allowedRoles={["user"]}>
                  <DashboardLayout>
                    <Help />
                  </DashboardLayout>
                </ProtectedRoute>
              }
            />

            <Route
              path="/privacypolicy"
              element={
                <ProtectedRoute allowedRoles={["user"]}>
                  <DashboardLayout>
                    <PrivacyPolicy />
                  </DashboardLayout>
                </ProtectedRoute>
              }
            />

            {/* Fallback Route */}
            <Route path="*" element={<p>Page Not Found</p>} />
          </Routes>
        </Suspense>
      </Router>
    </AuthProvider>
  );
}

export default App;
