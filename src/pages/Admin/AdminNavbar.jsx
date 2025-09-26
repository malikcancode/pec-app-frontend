import React from "react";
import { FaBars } from "react-icons/fa";

function AdminNavbar({ toggleSidebar }) {
  return (
    <div className="bg-[#1f1b2e] p-4 text-white fixed top-0 left-0 right-0 z-40 flex items-center justify-between">
      <button className="lg:hidden p-2" onClick={toggleSidebar}>
        <FaBars className="text-2xl" />
      </button>
    </div>
  );
}

export default AdminNavbar;
