import { useParams } from "react-router-dom";
import products from "../../api/products";
import { FaBox, FaCreditCard, FaPlane, FaCheckCircle } from "react-icons/fa";

export default function ProductDetails() {
  const { productId } = useParams();
  const product = products.find((p) => p.id === Number(productId));

  if (!product) {
    return <p className="text-center mt-10">Product not found.</p>;
  }

  return (
    <div className="p-6 min-h-screen w-full">
      <div className="max-w-7xl mx-auto rounded-2xl p-6 space-y-6">
        {/* --- Order Timeline --- */}
        <div className="space-y-6">
          {/* Place Order */}
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full bg-green-500 flex items-center justify-center text-white">
              <FaBox size={14} />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700">Place Order</p>
              <p className="text-xs text-gray-500">2023-10-21 12:55:10</p>
            </div>
          </div>

          {/* Payment */}
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full bg-green-500 flex items-center justify-center text-white">
              <FaCreditCard size={14} />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700">Payment</p>
              <p className="text-xs text-gray-500">2023-10-21 13:18:37</p>
            </div>
          </div>

          {/* Consignment */}
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full bg-green-500 flex items-center justify-center text-white">
              <FaPlane size={14} />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700">Consignment</p>
              <p className="text-xs text-gray-500">2023-10-21 14:59:34</p>
              <p className="text-xs text-gray-400">
                Estimated to arrive on 2023-10-24
              </p>
            </div>
          </div>

          {/* Confirm Receipt */}
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full bg-gray-300 flex items-center justify-center text-gray-600">
              <FaCheckCircle size={14} />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-400">
                Confirm Receipt
              </p>
            </div>
          </div>
        </div>

        <hr className="border-gray-200" />

        {/* --- Product Section --- */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-3">Products</h2>
          <div className="flex items-center gap-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-24 h-24 object-contain rounded-lg border"
            />
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-gray-900">
                {product.name}
              </h3>
              <p className="text-xs text-gray-500 line-through">
                ${(product.price + 3).toFixed(2)}
              </p>
              <p className="text-green-600 font-semibold">
                ${product.price.toFixed(2)} × 1
              </p>
            </div>
          </div>

          <div className="mt-4 space-y-1 text-sm text-gray-700">
            <p className="flex justify-between">
              <span>Total order price</span>
              <span>${product.price.toFixed(2)}</span>
            </p>
            <p className="flex justify-between">
              <span>Payment amount</span>
              <span className="text-green-600">
                ${(product.price - 3).toFixed(2)}
              </span>
            </p>
          </div>
        </div>

        <hr className="border-gray-200" />

        {/* --- Order Details --- */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-3">
            Order detail
          </h2>
          <div className="space-y-2 text-sm text-gray-700">
            <p className="flex justify-between">
              <span>Order mode</span>
              <span>Cash on delivery</span>
            </p>
            <p className="flex justify-between">
              <span>Order number</span>
              <span>20231021130759</span>
            </p>
            <p className="flex justify-between">
              <span>Order status</span>
              <span>Goods to be received</span>
            </p>
            <p className="flex justify-between">
              <span>Payment status</span>
              <span className="text-green-600">Paid</span>
            </p>
            <p className="flex justify-between">
              <span>Selling price</span>
              <span>${product.price.toFixed(2)}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
