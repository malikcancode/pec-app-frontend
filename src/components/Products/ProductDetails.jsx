import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMyPurchases } from "../../api/purchaseApi";
import { FaBox, FaCreditCard, FaPlane, FaCheckCircle } from "react-icons/fa";

export default function ProductDetails() {
  const { id } = useParams();
  const [purchase, setPurchase] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPurchase = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem("token");
        const res = await getMyPurchases(token);
        // Find the purchase for this product
        const found = res.data.purchases.find((p) => p.product?._id === id);
        setPurchase(found || null);
      } catch (err) {
        setError("Failed to load order details");
      } finally {
        setLoading(false);
      }
    };
    fetchPurchase();
  }, [id]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;
  if (!purchase || !purchase.product)
    return <p className="text-center mt-10">Order not found.</p>;

  const { product, createdAt, paymentClaimedAt, amount } = purchase;

  return (
    <div className="p-6 min-h-screen w-full">
      <div className="max-w-7xl mx-auto rounded-2xl p-6 space-y-6">
        {/* --- Order Timeline --- */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full bg-green-500 flex items-center justify-center text-white">
              <FaBox size={14} />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700">Order Placed</p>
              <p className="text-xs text-gray-500">
                {createdAt ? new Date(createdAt).toLocaleString() : "N/A"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full bg-green-500 flex items-center justify-center text-white">
              <FaCreditCard size={14} />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700">Payment</p>
              <p className="text-xs text-gray-500">
                {paymentClaimedAt
                  ? new Date(paymentClaimedAt).toLocaleString()
                  : "Pending"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full bg-green-500 flex items-center justify-center text-white">
              <FaPlane size={14} />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700">Consignment</p>
              <p className="text-xs text-gray-400">
                Estimated to arrive in 2-3 days
              </p>
            </div>
          </div>

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
          <h2 className="text-lg font-semibold text-gray-800 mb-3">Product</h2>
          <div className="flex items-center gap-4">
            <img
              src={
                product.image ||
                "https://via.placeholder.com/150x150.png?text=No+Image"
              }
              alt={product.name}
              className="w-24 h-24 object-contain rounded-lg border"
            />
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-gray-900">
                {product.name}
              </h3>
              <p className="text-xs text-gray-500">{product.category}</p>
              <p className="text-green-600 font-semibold">
                ${product.price?.toFixed(2)} × 1
              </p>
            </div>
          </div>

          <div className="mt-4 space-y-1 text-sm text-gray-700">
            <p className="flex justify-between">
              <span>Total order price</span>
              <span>${product.price?.toFixed(2)}</span>
            </p>
            <p className="flex justify-between">
              <span>Payment amount</span>
              <span className="text-green-600">
                ${amount?.toFixed(2) || product.price?.toFixed(2)}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
