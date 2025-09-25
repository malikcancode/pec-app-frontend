import { Link } from "react-router-dom";
import { useState } from "react";
import { FiHeart, FiStar } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";

export default function ProductCard({ product }) {
  const [isLiked, setIsLiked] = useState(product.isLiked);

  return (
    <Link to={`/products/${product.id}`}>
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 cursor-pointer hover:shadow-md transition">
        <div className="relative mb-3">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-24 object-contain rounded-lg"
          />
          <button
            onClick={(e) => {
              e.preventDefault(); // stop navigation when liking
              setIsLiked(!isLiked);
            }}
            className="absolute top-2 right-2 p-1"
          >
            {isLiked ? (
              <FaHeart className="w-4 h-4 text-red-500" />
            ) : (
              <FiHeart className="w-4 h-4 text-gray-400" />
            )}
          </button>
          <div className="absolute bottom-2 left-2 bg-green-500 text-white px-2 py-1 rounded-lg text-sm font-semibold">
            ${product.price.toFixed(2)}
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-sm text-green-600 font-medium">
            {product.stock} Stocks Left
          </p>
          <div className="flex items-center gap-1">
            <FiStar className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm font-medium">{product.rating}</span>
            <span className="text-sm text-gray-500">({product.reviews})</span>
          </div>
          <h3 className="font-semibold text-gray-900 text-sm leading-tight">
            {product.name}
          </h3>
        </div>
      </div>
    </Link>
  );
}
