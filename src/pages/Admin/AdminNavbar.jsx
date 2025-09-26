import React from "react";
import { FaBars, FaBell, FaUser } from "react-icons/fa"; // Add more icons as needed

function AdminNavbar({ toggleSidebar }) {
  return (
    <div className="bg-[#1f1b2e] p-4 text-white fixed top-0 left-0 right-0 z-40 flex items-center justify-between shadow-md">
      {/* Left Side (Logo / Brand Name) */}
      <div className="flex items-center space-x-4">
        <button className="lg:hidden p-2" onClick={toggleSidebar}>
          <FaBars className="text-2xl" />
        </button>
        <span className="text-2xl font-semibold">PSC Dashboard</span>
      </div>

      {/* Right Side (Icons for notifications, user, etc.) */}
      <div className="flex items-center space-x-6">
        {/* Notifications */}
        <button className="relative">
          <FaBell className="text-2xl" />
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            3
          </span>
        </button>

        {/* User Profile */}
        <button className="flex items-center space-x-2">
          <FaUser className="text-2xl" />
          <span className="hidden sm:block">John Doe</span>{" "}
          {/* Display user name on larger screens */}
        </button>
      </div>
    </div>
  );
}

export default AdminNavbar;
