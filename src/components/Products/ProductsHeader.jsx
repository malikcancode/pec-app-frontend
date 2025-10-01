import { useProducts } from "../../context/ProductsContext";
import { FiFilter, FiStar, FiSquare, FiTag } from "react-icons/fi";

const categories = [
  { name: "Gadgets", icon: "📦" },
  { name: "Shoes", icon: "👟" },
  { name: "Shirts", icon: "👕" },
  { name: "Books", icon: "📕" },
  { name: "Toys", icon: "🧸" },
  { name: "Watches", icon: "⌚" },
  { name: "Electronics", icon: "🔌" },
  { name: "Home Decores", icon: "🏠" },
  { name: "Women's fashion", icon: "👗" },
  { name: "Hoodies & shirts", icon: "🧥" },
];

// put longer ones last
const sortedCategories = [...categories].sort(
  (a, b) => a.name.length - b.name.length
);

const filters = [
  { name: "Filter", icon: <FiFilter /> },
  { name: "Rating", icon: <FiStar /> },
  { name: "Size", icon: <FiSquare /> },
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
          {sortedCategories.map((cat) => (
            <option key={cat.name} value={cat.name}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>

      {/* Filter Options */}
      <div className="flex flex-wrap gap-2 mb-4">
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
      <div className="grid grid-cols-3 xs:grid-cols-4 sm:flex sm:flex-wrap sm:justify-start gap-3">
        {sortedCategories.map((cat) => {
          const isActive = selectedCategory === cat.name;
          return (
            <button
              key={cat.name}
              onClick={() => setSelectedCategory(isActive ? "" : cat.name)}
              className={`flex flex-col items-center justify-center w-full sm:w-20 p-2 text-center transition 
          ${
            isActive
              ? "bg-green-500 text-white rounded-2xl"
              : "bg-gray-50 hover:bg-gray-100 text-gray-600 border rounded-2xl border-gray-300"
          }`}
            >
              <span className="text-xl sm:text-2xl mb-1">{cat.icon}</span>
              <span className="text-[10px] text-wrap sm:text-xs truncate px-1">
                {cat.name}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
