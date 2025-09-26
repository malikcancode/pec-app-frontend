import React from "react";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link for navigation

function AdminSidbar({ closeSidebar, setActiveLink, activeLink }) {
  const handleLinkClick = (linkName) => {
    setActiveLink(linkName); // Update the active link
    closeSidebar(); // Close the sidebar after clicking
  };

  return (
    <div className="sm:h-screen h-full bg-green-800 p-4 border-r text-white relative">
      <button
        onClick={closeSidebar}
        className="absolute top-4 right-4 sm:hidden text-white text-2xl"
      >
        <FaTimes />
      </button>
      <h2 className="text-xl font-semibold mb-8 text-white">Sidebar</h2>
      <ul className="flex items-start gap-2 justify-center flex-col">
        <li
          className={`mb-2 p-2 rounded-lg w-full cursor-pointer ${
            activeLink === "Dashboard" ? "bg-green-600" : "bg-green-800"
          }`}
        >
          <Link
            to="/admin"
            onClick={() => handleLinkClick("Dashboard")}
            className="block w-full p-2 text-white"
          >
            Dashboard
          </Link>
        </li>
        <li
          className={`mb-2 p-2 rounded-lg w-full cursor-pointer ${
            activeLink === "Products" ? "bg-green-600" : "bg-green-800"
          }`}
        >
          <Link
            to="/admin/admin-products"
            onClick={() => handleLinkClick("Products")}
            className="block w-full p-2 text-white"
          >
            Products
          </Link>
        </li>
        <li
          className={`mb-2 p-2 rounded-lg w-full cursor-pointer ${
            activeLink === "Orders" ? "bg-green-600" : "bg-green-800"
          }`}
        >
          <Link
            to="/admin/orders"
            onClick={() => handleLinkClick("Orders")}
            className="block w-full p-2 text-white"
          >
            Orders
          </Link>
        </li>

        <li
          className={`mb-2 p-2 rounded-lg w-full cursor-pointer ${
            activeLink === "Users" ? "bg-green-600" : "bg-green-800"
          }`}
        >
          <Link
            to="/admin/users"
            onClick={() => handleLinkClick("Users")}
            className="block w-full p-2 text-white"
          >
            Users
          </Link>
        </li>
        <li
          className={`mb-2 p-2 rounded-lg w-full cursor-pointer ${
            activeLink === "Notifications" ? "bg-green-600" : "bg-green-800"
          }`}
        >
          <Link
            to="/admin/notifications"
            onClick={() => handleLinkClick("Notifications")}
            className="block w-full p-2 text-white"
          >
            Notifications
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default AdminSidbar;
