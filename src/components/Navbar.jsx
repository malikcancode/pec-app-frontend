"use client";

// src/components/Navbar.jsx
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-green-600 text-white p-4 flex justify-between items-center">
      <Link to="/dashboard" className="font-bold text-lg">
        MyStore
      </Link>
      <div className="flex gap-4 items-center">
        {user && <span>Hi, {user.name}</span>}
        <Link to="/deposit">Deposit</Link>
        <Link to="/withdraw">Withdraw</Link>
        <button
          onClick={handleLogout}
          className="bg-white text-green-600 px-3 py-1 rounded"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
