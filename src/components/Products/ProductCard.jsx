import { Link } from "react-router-dom";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { useWishlist } from "../../context/WishlistContext";

export default function ProductCard({ product }) {
  const { wishlist, toggleWishlist } = useWishlist();

  const isLiked = wishlist.some((item) => item._id === product._id);

  return (
    <Link to={`/products/${product._id}`}>
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200 cursor-pointer hover:shadow-lg transition">
        {/* Product Image */}
        <div className="relative mb-3">
          <img
            src={
              product.image ||
              "https://via.placeholder.com/150x150.png?text=No+Image"
            }
            alt={product.name}
            className="w-full h-32 object-contain rounded-lg bg-gray-50"
          />
          {/* Wishlist Button */}
          <button
            onClick={(e) => {
              e.preventDefault(); // stop navigation when liking
              toggleWishlist(product);
            }}
            className="absolute top-2 right-2 p-1 rounded-full bg-white shadow"
          >
            {isLiked ? (
              <FaHeart className="w-5 h-5 text-red-500" />
            ) : (
              <FiHeart className="w-5 h-5 text-gray-400" />
            )}
          </button>
          {/* Price Tag */}
          <div className="absolute bottom-2 left-2 bg-green-600 text-white px-3 py-1 rounded-lg text-sm font-semibold">
            ${product.price?.toFixed(2)}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-1">
          <h3 className="font-semibold text-gray-900 text-sm line-clamp-1">
            {product.name}
          </h3>
          <p className="text-xs text-gray-500">{product.category}</p>
          <p className="text-xs text-gray-400">
            Added on {new Date(product.createdAt).toLocaleDateString()}
          </p>
        </div>
      </div>
    </Link>
  );
}
