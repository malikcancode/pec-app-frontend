import React from "react";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link for navigation

function AdminSidbar({ closeSidebar, setActiveLink, activeLink }) {
  const handleLinkClick = (linkName) => {
    setActiveLink(linkName); // Update the active link
    closeSidebar(); // Close the sidebar after clicking
  };

  return (
    <div className="sm:h-screen h-full bg-gray-800 p-4 text-white relative">
      <button
        onClick={closeSidebar}
        className="absolute top-4 right-4 sm:hidden text-white text-2xl"
      >
        <FaTimes />
      </button>
      <h2 className="text-xl font-semibold mb-8">Sidebar</h2>
      <ul className="flex items-start gap-2 justify-center flex-col">
        <li
          className={`mb-2 p-2 rounded-lg w-full cursor-pointer ${
            activeLink === "Dashboard" ? "bg-blue-500" : ""
          }`}
        >
          <Link
            to="/admin"
            onClick={() => handleLinkClick("Dashboard")}
            className="block w-full p-2 text-white" // Ensures full width click area
          >
            Dashboard
          </Link>
        </li>
        <li
          className={`mb-2 p-2 rounded-lg w-full cursor-pointer ${
            activeLink === "Products" ? "bg-blue-500" : ""
          }`}
        >
          <Link
            to="/admin/admin-products"
            onClick={() => handleLinkClick("Products")}
            className="block w-full p-2 text-white" // Ensures full width click area
          >
            Products
          </Link>
        </li>
        <li
          className={`mb-2 p-2 rounded-lg w-full cursor-pointer ${
            activeLink === "Orders" ? "bg-blue-500" : "" // Use "Orders" as the active link check
          }`}
        >
          <Link
            to="/admin/orders"
            onClick={() => handleLinkClick("Orders")}
            className="block w-full p-2 text-white" // Ensures full width click area
          >
            Orders
          </Link>
        </li>

        <li
          className={`mb-2 p-2 rounded-lg w-full cursor-pointer ${
            activeLink === "Users" ? "bg-blue-500" : ""
          }`}
        >
          <Link
            to="/admin/users"
            onClick={() => handleLinkClick("Users")}
            className="block w-full p-2 text-white" // Ensures full width click area
          >
            Users
          </Link>
        </li>
        <li
          className={`mb-2 p-2 w-full rounded-lg cursor-pointer ${
            activeLink === "Notifications" ? "bg-blue-500" : ""
          }`}
        >
          <Link
            to="/admin/notifications"
            onClick={() => handleLinkClick("Notifications")}
            className="block w-full p-2 text-white" // Ensures full width click area
          >
            Notifications
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default AdminSidbar;
