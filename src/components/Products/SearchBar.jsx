import { FiSearch, FiSliders } from "react-icons/fi";

export default function SearchBar() {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="flex-1 relative">
        <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="What's on your list?"
          className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-xl border-0 focus:ring-2 focus:ring-green-500 focus:bg-white transition-all"
        />
      </div>
      <button className="p-3 bg-gray-100 rounded-xl">
        <FiSliders className="w-5 h-5 text-gray-600" />
      </button>
    </div>
  );
}
