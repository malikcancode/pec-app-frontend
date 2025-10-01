// components/Orders/OrderModal.jsx
import { toast } from "react-toastify";
import { useOrders } from "../context/OrderContext";

export default function OrderModal({ product, onClose }) {
  const { placeOrder } = useOrders();

  if (!product) return null;

  const handleOrder = () => {
    placeOrder(product);
    toast.success("Order placed successfully!");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-2xl w-full max-w-lg p-6 shadow-xl relative max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 hover:bg-gray-100 p-2 rounded-full transition"
        >
          ✕
        </button>

        {/* Header */}
        <h2 className="text-xl font-semibold text-gray-800 mb-5">
          Order Summary{" "}
          <span className="text-gray-400">#{product._id.slice(-6)}</span>
        </h2>

        {/* Product Info */}
        <div className="flex flex-col sm:flex-row gap-5 mb-5">
          <img
            src={product.image || "/no-image.png"}
            alt={product.name}
            className="w-28 sm:w-28 h-28 object-contain rounded-lg border bg-gray-50"
          />
          <div className="flex-1 space-y-1">
            <h3 className="font-semibold text-gray-900">{product.name}</h3>
            <p className="text-sm text-gray-500">{product.category}</p>
            <p className="text-lg font-bold text-green-600">
              ${product.price?.toFixed(2)}
            </p>
          </div>
        </div>

        {/* Charges Breakdown */}
        <div className="space-y-3 text-sm text-gray-700">
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
          <div className="flex justify-between font-medium border-t pt-2">
            <span>Product Price</span>
            <span>${product.price?.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Discount</span>
            <span>0%</span>
          </div>
        </div>

        {/* Total */}
        <div className="flex justify-between mt-5 text-lg font-bold text-gray-900 border-t pt-4">
          <span>Total Payable</span>
          <span>${(product.price + 5).toFixed(2)}</span>
        </div>

        {/* Action Button */}
        <button
          onClick={handleOrder}
          className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium text-base transition shadow-md"
        >
          Process Order
        </button>
      </div>
    </div>
  );
}
