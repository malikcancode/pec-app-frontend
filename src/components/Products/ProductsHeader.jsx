import { useProducts } from "../../context/ProductsContext";
import {
  FaMobileAlt,
  FaLaptop,
  FaShoePrints,
  FaTshirt,
  FaBook,
  FaCouch,
  FaHeartbeat,
} from "react-icons/fa";

const categories = [
  { name: "Gadgets", icon: FaMobileAlt },
  { name: "Electronics", icon: FaLaptop },
  { name: "Shoes", icon: FaShoePrints },
  { name: "Shirts", icon: FaTshirt },
  { name: "Books", icon: FaBook },
  { name: "Home Decores", icon: FaCouch },
  { name: "Health & Wellness", icon: FaHeartbeat },
];

export default function ProductsHeader() {
  const { selectedCategory, setSelectedCategory, searchQuery, setSearchQuery } =
    useProducts();

  return (
    <div className="bg-white rounded-2xl p-4 mb-6">
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

      {/* Category Icons */}
      <div className="grid grid-cols-3 sm:flex sm:flex-wrap sm:justify-start gap-3">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isActive = selectedCategory === cat.name;
          return (
            <button
              key={cat.name}
              onClick={() => setSelectedCategory(isActive ? "" : cat.name)}
              className={`flex flex-col items-center p-2 rounded-xl border transition-colors text-center
                ${
                  isActive
                    ? "bg-green-100 border-green-500 text-green-700"
                    : "bg-gray-50 hover:bg-gray-100 text-gray-600"
                }
              `}
            >
              <Icon size={18} className="mb-1" />
              <span className="text-[10px] sm:text-xs">{cat.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
