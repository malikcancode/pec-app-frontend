import React from "react";
import { FaHeart, FaShoppingCart, FaStore } from "react-icons/fa";

function WishList() {
  // Example data
  const wishlistItems = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 49.99,
      oldPrice: 79.99,
      image: "https://via.placeholder.com/150",
      store: "TechStore",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 89.99,
      oldPrice: 129.99,
      image: "https://via.placeholder.com/150",
      store: "GadgetHub",
    },
    {
      id: 3,
      name: "Running Shoes",
      price: 59.99,
      oldPrice: 99.99,
      image: "https://via.placeholder.com/150",
      store: "SportsWorld",
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-green-600 mb-6">
          My Wishlist ❤️
        </h1>

        {/* Wishlist Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlistItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col"
            >
              {/* Product Image */}
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-40 object-contain"
                />
                <button className="absolute top-2 right-2 bg-white rounded-full p-2 shadow text-red-500 hover:text-red-600">
                  <FaHeart />
                </button>
              </div>

              {/* Product Info */}
              <div className="flex-1 mt-4">
                <h2 className="text-sm font-semibold text-gray-800 line-clamp-2">
                  {item.name}
                </h2>
                <p className="text-xs text-gray-500 line-through">
                  ${item.oldPrice.toFixed(2)}
                </p>
                <p className="text-green-600 font-bold">
                  ${item.price.toFixed(2)}
                </p>

                {/* Store Info */}
                <div className="flex items-center gap-2 text-xs text-gray-600 mt-2">
                  <FaStore />
                  <span>Sold by {item.store}</span>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button className="mt-4 bg-green-500 text-white py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-green-600">
                <FaShoppingCart /> Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WishList;
