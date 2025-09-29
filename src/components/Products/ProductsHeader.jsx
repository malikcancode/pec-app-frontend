import { useProducts } from "../../context/ProductsContext";
import { FiFilter, FiStar, FiSquare, FiTag } from "react-icons/fi";

const categories = [
  { name: "Gadgets", icon: "📦" },
  { name: "Electronics", icon: "🔌" },
  { name: "Shoes", icon: "👟" },
  { name: "Shirts", icon: "👕" },
  { name: "Books", icon: "📕" },
  { name: "Home Decores", icon: "🏠" },
  { name: "Health & Wellness", icon: "🩺" },
];

const filters = [
  { name: "Filter", icon: <FiFilter /> },
  { name: "Rating", icon: <FiStar /> },
  { name: "Size", icon: <FiSquare /> },
  // {
  //   name: "Color",
  //   icon: <span className="w-3 h-3 rounded-full bg-red-500 inline-block" />,
  // },
  { name: "Brand", icon: <FiTag /> },
];

export default function ProductsHeader() {
  const { selectedCategory, setSelectedCategory, searchQuery, setSearchQuery } =
    useProducts();

  return (
    <div className="bg-white rounded-2xl p-4 mb-6 shadow-sm">
      {/* Search + Dropdown */}
      <div className="flex flex-col sm:flex-row gap-3 mb-4">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search products..."
          className="px-4 py-2 border rounded-lg flex-1 w-full sm:w-auto"
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-4 py-2 border rounded-lg w-full sm:w-40"
        >
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat.name} value={cat.name}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>

      {/* Filter Options */}
      <div className="flex gap-2 overflow-x-auto mb-4 no-scrollbar">
        {filters.map((f, i) => (
          <button
            key={i}
            className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 bg-gray-50 hover:bg-blue-50 border rounded-3xl border-gray-100 hover:text-blue-600 transition whitespace-nowrap"
          >
            {f.icon} {f.name}
          </button>
        ))}
      </div>

      {/* Category Icons */}
      <div className="grid grid-cols-5 sm:flex sm:flex-wrap sm:justify-start gap-3">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.name;
          return (
            <button
              key={cat.name}
              onClick={() => setSelectedCategory(isActive ? "" : cat.name)}
              className={`flex flex-col items-center justify-center w-20 h-auto text-center transition 
          ${
            isActive
              ? "bg-green-500 text-white rounded-2xl"
              : "bg-gray-50 hover:bg-gray-100 text-gray-600 border rounded-2xl border-gray-300"
          }
        `}
            >
              <span className="text-2xl mb-1">{cat.icon}</span>
              <span className="text-[12px] sm:text-xs">{cat.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
