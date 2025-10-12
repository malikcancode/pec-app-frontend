"use client";

import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const FILTERS = [
  { label: "Last 3 days", days: 3 },
  { label: "Last 7 days", days: 7 },
  { label: "Last 15 days", days: 15 },
  { label: "Nearly 30", days: 30 },
];

// Simulate backend API call
async function fetchTrendsData(days) {
  try {
    // Replace with your backend API call, e.g.:
    // const res = await fetch(`/api/trends?days=${days}`);
    // return await res.json();

    // Simulated data (fallback)
    const today = new Date();
    const labels = Array.from({ length: days }, (_, i) => {
      const d = new Date(today);
      d.setDate(today.getDate() - (days - 1 - i));
      return `${d.getMonth() + 1}/${d.getDate()}`;
    });
    const sales = Array.from({ length: days }, () =>
      (Math.random() * 100 + 50).toFixed(2)
    );
    const profit = sales.map((s) => (s * 0.1).toFixed(2));
    return { labels, sales, profit };
  } catch (err) {
    // On error, fallback to generated data
    const today = new Date();
    const labels = Array.from({ length: days }, (_, i) => {
      const d = new Date(today);
      d.setDate(today.getDate() - (days - 1 - i));
      return `${d.getMonth() + 1}/${d.getDate()}`;
    });
    const sales = Array.from({ length: days }, () =>
      (Math.random() * 100 + 50).toFixed(2)
    );
    const profit = sales.map((s) => (s * 0.1).toFixed(2));
    return { labels, sales, profit };
  }
}

export default function TrendsSection() {
  const [activeFilter, setActiveFilter] = useState(FILTERS[0].label);
  const [chartData, setChartData] = useState({
    labels: [],
    sales: [],
    profit: [],
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const filter = FILTERS.find((f) => f.label === activeFilter);
    setLoading(true);
    fetchTrendsData(filter.days).then((data) => {
      setChartData(data);
      setLoading(false);
    });
  }, [activeFilter]);

  const data = {
    labels: chartData.labels,
    datasets: [
      {
        label: "Sales",
        data: chartData.sales,
        borderColor: "#22c55e",
        backgroundColor: "rgba(34,197,94,0.1)",
        tension: 0.4,
      },
      {
        label: "Profit",
        data: chartData.profit,
        borderColor: "#f59e42",
        backgroundColor: "rgba(245,158,66,0.1)",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: true },
      tooltip: { mode: "index", intersect: false },
    },
    scales: {
      y: { beginAtZero: true },
    },
  };

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
        {FILTERS.map((filter) => (
          <button
            key={filter.label}
            onClick={() => setActiveFilter(filter.label)}
            className={`px-3 py-1 rounded-full text-sm whitespace-nowrap ${
              activeFilter === filter.label
                ? "bg-green-500 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 h-64 w-1/2 flex items-center justify-center">
        {loading ? (
          <p className="text-gray-500">Loading chart...</p>
        ) : (
          <Line data={data} options={options} />
        )}
      </div>
    </div>
  );
}
