"use client";

import { useState } from "react";

export default function TrendsSection() {
  const [activeFilter, setActiveFilter] = useState("Last 3 days");

  const filters = ["Last 3 days", "Last 7 days", "Last 15 days", "Nearly 30"];

  return (
    <div className="mb-6">
      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-lg font-semibold text-gray-900">
          Trends in total sales and profit
        </h2>
        <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
          <span className="text-white text-xs font-bold">?</span>
        </div>
      </div>

      <div className="flex gap-2 mb-4 overflow-x-auto">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-3 py-1 rounded-full text-sm whitespace-nowrap ${
              activeFilter === filter
                ? "bg-green-500 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Placeholder for chart */}
      <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 h-32 flex items-center justify-center">
        <p className="text-gray-500">Chart visualization would go here</p>
      </div>
    </div>
  );
}
