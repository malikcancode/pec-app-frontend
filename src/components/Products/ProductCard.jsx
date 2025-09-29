import { useState } from "react";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { useWishlist } from "../../context/WishlistContext";
import { useCart } from "../../context/CartContext";
import OrderModal from "../../components/OrderModal";

export default function ProductCard({ product }) {
  const { wishlist, toggleWishlist } = useWishlist();
  const { cart, addToCart, removeFromCart } = useCart();

  const [showModal, setShowModal] = useState(false);

  const isLiked = wishlist.some((item) => item._id === product._id);
  const inCart = cart.some((item) => item._id === product._id);

  return (
    <>
      <div
        onClick={() => setShowModal(true)} // ✅ open modal on click
        className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200 hover:shadow-lg transition relative cursor-pointer"
      >
        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.stopPropagation(); // ✅ don’t trigger modal
            toggleWishlist(product);
          }}
          className="absolute top-3 right-3 p-1.5 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-gray-50 transition"
        >
          {isLiked ? (
            <FaHeart className="w-5 h-5 text-red-500" />
          ) : (
            <FiHeart className="w-5 h-5 text-gray-600" />
          )}
        </button>

        {/* Product Image */}
        <div className="mb-3">
          <img
            src={product.image || "/no-image.png"}
            alt={product.name}
            className="w-full h-32 object-contain rounded-lg bg-gray-50"
          />
        </div>

        {/* Product Info */}
        <div className="space-y-1">
          <h3 className="font-semibold text-gray-900 text-sm line-clamp-1">
            {product.name}
          </h3>
          <p className="text-xs text-gray-500">{product.category}</p>
        </div>

        {/* Price + Cart Action */}
        <div className="mt-3 flex items-center justify-between">
          {inCart ? (
            <button
              onClick={(e) => {
                e.stopPropagation();
                removeFromCart(product._id);
              }}
              className="bg-red-600 hover:bg-red-700 text-white text-xs font-medium px-3 py-1 rounded-lg transition"
            >
              Remove
            </button>
          ) : (
            <button
              onClick={(e) => {
                e.stopPropagation();
                addToCart(product);
              }}
              className="bg-green-600 hover:bg-green-700 text-white text-xs font-medium px-3 py-1 rounded-lg transition"
            >
              Add to cart
            </button>
          )}
          <span className="text-green-600 font-semibold text-sm">
            ${product.price?.toFixed(2)}
          </span>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <OrderModal product={product} onClose={() => setShowModal(false)} />
      )}
    </>
  );
}
