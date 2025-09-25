import { FiShoppingCart } from "react-icons/fi";

export default function Header() {
  return (
    <div className="flex items-center justify-between p-4 bg-white">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
          <img
            src="/user-profile-avatar.png"
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
        </div>
        <div>
          <p className="text-sm text-gray-600">Welcome Back</p>
          <p className="font-semibold text-gray-900">uix.vikram ❤️</p>
        </div>
      </div>
      <div className="relative">
        <FiShoppingCart className="w-6 h-6 text-gray-700" />
        <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          3
        </span>
      </div>
    </div>
  );
}
