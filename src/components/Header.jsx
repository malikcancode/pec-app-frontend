import { useState } from "react";
import {
  FaBell,
  FaUser,
  FaChevronRight,
  FaBars,
  FaTimes,
  FaHeart,
  FaShoppingBag,
  FaComments,
  FaUsers,
  FaCheckCircle,
  FaEnvelope,
  FaUndo,
  FaTimesCircle,
  FaCog,
  FaFileAlt,
  FaCommentDots,
  FaQuestionCircle,
  FaInfoCircle,
  FaQuestion,
  FaSignOutAlt,
  FaWallet,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout } = useContext(AuthContext); // ✅ destructure logout

  const navLinks = [
    { name: "PSC Wallet", href: "/wallet", icon: <FaWallet /> },
    { name: "My Orders", href: "/my-orders", icon: <FaShoppingBag /> },
    {
      name: "My Wishlist & Followed Store",
      href: "/wishlist",
      icon: <FaHeart />,
    },
    { name: "My Cart", href: "/cart", icon: <FaShoppingBag /> },

    { name: " Partner Stores", href: "/referral", icon: <FaUsers /> },
    {
      name: "Store KYC Verification",
      href: "/kyc",
      icon: <FaCheckCircle />,
    },
    { name: "Chat with Us", href: "/chat", icon: <FaComments /> },
    { name: "Messages", href: "/messages", icon: <FaEnvelope /> },
    { name: "My Returns", href: "/returns", icon: <FaUndo /> },
    {
      name: "My Cancellation",
      href: "/cancellations",
      icon: <FaTimesCircle />,
    },
    { name: "Account Setting", href: "/settings", icon: <FaCog /> },
    { name: "Policies", href: "/privacypolicy", icon: <FaFileAlt /> },
    { name: "Feedback", href: "/feedback", icon: <FaCommentDots /> },
    { name: "Help", href: "/help", icon: <FaQuestionCircle /> },
    { name: "About", href: "/about", icon: <FaInfoCircle /> },
    { name: "FAQs", href: "/faqs", icon: <FaQuestion /> },
  ];

  return (
    <div className="bg-white border-b border-gray-200 px-4 py-3 relative">
      <div className="flex items-center justify-between w-full">
        {/* Logo */}
        <div className="flex items-center gap-1">
          <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center">
            <span className="text-white text-xs font-bold">◊</span>
          </div>
          <Link
            to="/products"
            className="font-bold text-green-600 capitalize sm:text-sm text-xs"
          >
            {" "}
            PSC
          </Link>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          {/* <FaBell className="text-gray-600 text-lg cursor-pointer" /> */}
          <Link to="/profile">
            <FaUser className="text-gray-600 text-lg cursor-pointer" />
          </Link>
          <div className="flex items-center gap-1 cursor-pointer">
            <img
              src="/united-kingdom.png"
              alt="UK Flag"
              className="w-5 h-4 rounded"
            />
            <span className="text-sm font-medium">EN</span>
            <FaChevronRight className="text-gray-400 text-xs" />
          </div>

          {/* Hamburger Menu (Right Side) */}
          <button
            className="md:hidden w-8 h-8 bg-gray-800 rounded flex items-center justify-center"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <FaBars className="text-white text-lg" />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown with Framer Motion */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="fixed top-0 right-0 h-full w-4/5 bg-white shadow-lg z-50 md:hidden flex flex-col"
          >
            {/* Header with Profile */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-green-50">
              <div className="flex items-center gap-3">
                <FaUser className="w-10 h-10 text-gray-500 bg-gray-200 rounded-full p-2" />
                <div>
                  <Link to="/profile" onClick={() => setMenuOpen(false)}>
                    <h4 className="font-semibold text-gray-800">
                      {user?.name || "Guest"}
                    </h4>
                  </Link>
                  <p className="text-sm text-gray-500">View your profile</p>
                </div>
              </div>

              <button
                className="text-gray-600 text-2xl"
                onClick={() => setMenuOpen(false)}
              >
                <FaTimes />
              </button>
            </div>

            {/* Scrollable Nav Links */}
            <div className="flex-1 overflow-y-auto p-4">
              <div className="flex flex-col gap-3">
                {navLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-3 text-gray-700 hover:text-green-600 p-2 rounded-lg hover:bg-gray-100"
                  >
                    <span className="text-lg">{link.icon}</span>
                    <span className="text-base">{link.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="border-t border-gray-200 p-4">
              <button
                onClick={() => {
                  logout();
                  setMenuOpen(false);
                }}
                className="flex items-center gap-3 text-red-600 font-medium p-2 rounded-lg hover:bg-red-50"
              >
                <FaSignOutAlt className="text-lg" />
                <span className="text-base">Sign Out</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
