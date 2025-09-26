import React, { useState, useEffect } from "react";
import AdminSidbar from "../Admin/AdminSidbar";
import AdminNavbar from "../Admin/AdminNavbar";
import { Outlet, useLocation } from "react-router-dom";

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Dashboard"); // Set default active link to Dashboard

  const location = useLocation();

  // Update active link when the route changes
  useEffect(() => {
    if (location.pathname === "/admin") {
      setActiveLink("Dashboard");
    } else if (location.pathname === "/admin/admin-products") {
      setActiveLink("Products");
    } else if (location.pathname === "/admin/users") {
      setActiveLink("Users");
    } else if (location.pathname === "/admin/notifications") {
      setActiveLink("Notifications");
    }
  }, [location.pathname]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="h-full bg-[#1f1b2e] text-white">
      <AdminNavbar toggleSidebar={toggleSidebar} />
      <div className="flex">
        {/* Sidebar */}
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-green-800 text-white border-r border-zinc-700 transform transition-transform ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0 lg:static z-50`} // Ensure sidebar is above content
        >
          <AdminSidbar
            closeSidebar={closeSidebar}
            setActiveLink={setActiveLink}
            activeLink={activeLink}
          />
        </div>

        {/* Dashboard Content */}
        <div className="w-full lg:w-4/5 p-8 pt-20 lg:pt-0">
          <h1 className="text-2xl font-semibold">{activeLink} Section</h1>
          {/* Render dynamic content based on active link */}
          <Outlet />{" "}
          {/* The Outlet will render the appropriate content based on the route */}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
