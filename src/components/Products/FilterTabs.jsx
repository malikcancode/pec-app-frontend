"use client";

import { useState } from "react";
import { FiEye } from "react-icons/fi";

export default function FilterTabs() {
  const [activeTab, setActiveTab] = useState("All Products");

  const tabs = [
    { name: "All Products", icon: null },
    { name: "Swimming", icon: null },
    { name: "Goggles", icon: FiEye },
    { name: "Swimwear", icon: null },
  ];

  return (
    <div className="flex gap-2 mb-6 overflow-x-auto">
      {tabs.map((tab) => (
        <button
          key={tab.name}
          onClick={() => setActiveTab(tab.name)}
          className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-all ${
            activeTab === tab.name
              ? "bg-green-500 text-white"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          {tab.icon && <tab.icon className="w-4 h-4" />}
          {tab.name}
        </button>
      ))}
    </div>
  );
}
