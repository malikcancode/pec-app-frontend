import {
  FiArrowLeft,
  FiSearch,
  FiChevronDown,
  FiSliders,
} from "react-icons/fi";

export default function ProductsHeader() {
  return (
    <div className="bg-white rounded-2xl">
      <div className="flex items-center justify-between p-4">
        <button className="p-2">
          <FiArrowLeft className="w-6 h-6 text-gray-700" />
        </button>

        <div className="flex-1 mx-4 relative">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Men's Fashion"
            className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-lg border-0 focus:ring-2 focus:ring-green-500 focus:bg-white transition-all"
          />
        </div>

        <div className="flex items-center gap-2">
          <span className="text-purple-500">👕</span>
          <span className="font-medium">Men</span>
          <FiChevronDown className="w-4 h-4 text-gray-500" />
        </div>
      </div>

      <div className="flex items-center gap-4 px-4 pb-4 overflow-x-auto">
        <button className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg whitespace-nowrap">
          <FiSliders className="w-4 h-4" />
          Filter
        </button>
        <button className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg whitespace-nowrap">
          Rating
          <FiChevronDown className="w-4 h-4" />
        </button>
        <button className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg whitespace-nowrap">
          Size
          <FiChevronDown className="w-4 h-4" />
        </button>
        <button className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg whitespace-nowrap">
          Color
          <FiChevronDown className="w-4 h-4" />
        </button>
        <button className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg whitespace-nowrap">
          Brand
          <FiChevronDown className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
