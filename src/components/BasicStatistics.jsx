import StatCard from "./StatCard";
import { FaDiamond, FaChartPie, FaMoneyBill, FaTag } from "react-icons/fa6";

export default function BasicStatistics() {
  const stats = [
    {
      title: "Total sales",
      value: "609.71",
      subtitle: "Current month sales 609.71\nLast month's sales 0.00",
      icon: <FaDiamond />,
      iconColor: "text-green-500",
    },
    {
      title: "Available balance",
      value: "6.73",
      subtitle: "In transaction 0.00\nNumber of complaints 0",
      icon: <FaChartPie />,
      iconColor: "text-blue-500",
    },
    {
      title: "Total profit",
      value: "61.10",
      subtitle: "Profit for the month 61.10\nLast month's profit 0.00",
      icon: <FaMoneyBill />,
      iconColor: "text-green-500",
    },
    {
      title: "Total number of orders",
      value: "34",
      subtitle: "Orders for the current month\nLast month's order 0",
      icon: <FaTag />,
      iconColor: "text-green-500",
    },
  ];

  return (
    <div className="mb-6">
      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-lg font-semibold text-gray-900">
          Basic Statistics
        </h2>
        <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
          <span className="text-white text-xs font-bold">?</span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            title={stat.title}
            value={stat.value}
            subtitle={stat.subtitle}
            icon={stat.icon}
            iconColor={stat.iconColor}
          />
        ))}
      </div>
    </div>
  );
}
