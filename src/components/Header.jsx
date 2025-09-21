import { FaBell, FaUser, FaChevronRight } from "react-icons/fa";

export default function Header() {
  return (
    <div className="bg-white border-b border-gray-200 px-4 py-3">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-gray-800 rounded flex items-center justify-center">
            <span className="text-white text-xs font-bold">≡</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center">
              <span className="text-white text-xs font-bold">◊</span>
            </div>
            <span className="font-bold text-green-600 text-lg">PEC</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <FaBell className="text-gray-600 text-lg" />
          <FaUser className="text-gray-600 text-lg" />
          {/* <div className="flex items-center gap-1">
            <img src="/uk-flag.png" alt="UK Flag" className="w-5 h-4 rounded" />
            <span className="text-sm font-medium">EN</span>
            <FaChevronRight className="text-gray-400 text-xs" />
          </div> */}
        </div>
      </div>
    </div>
  );
}
