export default function CategoryIcons() {
  const categories = [
    { name: "Goggles", icon: "🥽", active: true },
    { name: "T-Shirts", icon: "👕", active: false },
    { name: "Trunks", icon: "🩱", active: false },
    { name: "Swim Bag", icon: "🎒", active: false },
    { name: "Kick", icon: "🏊", active: false },
  ];

  return (
    <div className="flex gap-4 mb-6 overflow-x-auto">
      {categories.map((category) => (
        <div
          key={category.name}
          className={`flex flex-col items-center min-w-16 ${
            category.active ? "opacity-100" : "opacity-60"
          }`}
        >
          <div
            className={`w-12 h-12 rounded-2xl flex items-center justify-center text-xl mb-2 ${
              category.active ? "bg-green-500 text-white" : "bg-gray-100"
            }`}
          >
            {category.icon}
          </div>
          <span className="text-xs text-gray-600 text-center">
            {category.name}
          </span>
        </div>
      ))}
    </div>
  );
}
