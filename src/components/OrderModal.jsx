// components/Orders/OrderModal.jsx
import { useOrders } from "../context/OrderContext";

export default function OrderModal({ product, onClose }) {
  const { placeOrder } = useOrders();

  if (!product) return null;

  const handleOrder = () => {
    placeOrder(product);
    alert("✅ Order placed successfully!");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl w-full max-w-md p-5 shadow-lg relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          X
        </button>

        {/* Order Header */}
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Order #{product._id.slice(-6)}
        </h2>

        {/* Product Info */}
        <div className="flex gap-4 mb-4">
          <img
            src={product.image || "/no-image.png"}
            alt={product.name}
            className="w-20 h-20 object-contain rounded-lg border"
          />
          <div>
            <h3 className="font-semibold text-gray-900">{product.name}</h3>
            <p className="text-sm text-gray-500">{product.category}</p>
            <p className="text-sm font-medium text-green-600">
              ${product.price?.toFixed(2)}
            </p>
          </div>
        </div>

        {/* Charges Breakdown */}
        <div className="space-y-2 text-sm text-gray-700">
          <div className="flex justify-between">
            <span>VAT Charges</span>
            <span>0%</span>
          </div>
          <div className="flex justify-between">
            <span>Custom Duty</span>
            <span>0%</span>
          </div>
          <div className="flex justify-between">
            <span>Packing Charges</span>
            <span>No</span>
          </div>
          <div className="flex justify-between">
            <span>Delivery Charges</span>
            <span>No</span>
          </div>
          <div className="flex justify-between font-medium">
            <span>Product Price</span>
            <span>${product.price?.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Discount</span>
            <span>0%</span>
          </div>
        </div>

        {/* Total */}
        <div className="flex justify-between mt-4 text-base font-bold text-gray-900">
          <span>Total Payable</span>
          <span>${(product.price + 5).toFixed(2)}</span>
        </div>

        {/* Action Button */}
        <button
          onClick={handleOrder}
          className="w-full mt-5 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-medium transition"
        >
          Place Order
        </button>
      </div>
    </div>
  );
}
