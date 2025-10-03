"use client";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaChevronLeft,
  FaChevronRight,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
} from "react-icons/fa";
import { getMyPurchases } from "../api/purchaseApi";
import { claimProfit } from "../api/purchaseApi";
import { toast } from "react-toastify";

export default function OrderCenter() {
  const [currentPage, setCurrentPage] = useState(1);
  const [purchases, setPurchases] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const totalPages = 5;

  useEffect(() => {
    const fetchPurchases = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem("token");
        const res = await getMyPurchases(token);
        setPurchases(res.data.purchases || []);
      } catch (err) {
        setPurchases([]);
      } finally {
        setLoading(false);
      }
    };
    fetchPurchases();
  }, []);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleClaimProfit = async (purchaseId) => {
    try {
      const token = localStorage.getItem("token");
      const res = await claimProfit(token, purchaseId);
      toast.success(res.data.message || "Profit claimed!");
      // Refresh purchases list to update status
      const updatedPurchases = purchases.map((p) =>
        p._id === purchaseId
          ? { ...p, status: "paid", paymentClaimedAt: new Date() }
          : p
      );
      setPurchases(updatedPurchases);
    } catch (err) {
      toast.error(
        err.response?.data?.message || "Failed to claim profit. Try again."
      );
    }
  };

  const handleDetailsClick = (purchase) => {
    navigate(`/products/${purchase.product?._id || purchase._id}`, {
      state: { order: purchase.product || purchase },
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      {/* Header with Estimate Profit */}
      <div className="mb-6">
        <h1 className="text-lg font-semibold text-gray-900">
          {/* Estimate Profit: {purchases.length > 0 ? "24.68" : "0.00"} */}
        </h1>
      </div>

      {/* Order Cards */}
      <div className="space-y-4 mb-8">
        {loading ? (
          <p className="text-gray-500 text-center">Loading...</p>
        ) : purchases.length === 0 ? (
          <p className="text-gray-500 text-center">No orders yet.</p>
        ) : (
          purchases.map((purchase) => (
            <div
              key={purchase._id}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-4"
            >
              {/* Order Header */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-gray-600">{purchase._id}</span>
                <span className="text-sm text-green-600 font-medium">
                  {purchase.status || "Completed"}
                </span>
              </div>

              {/* Product Info */}
              <div className="flex items-center space-x-4 mb-4">
                {/* Product Image */}
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex-shrink-0 overflow-hidden">
                  <img
                    src={purchase.product?.image || "/placeholder.svg"}
                    alt={purchase.product?.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Product Details */}
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900 mb-1">
                    {purchase.product?.name}
                  </h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-semibold text-gray-900">
                      ${purchase.product?.price?.toFixed(2)} × 1
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => handleDetailsClick(purchase)}
                  className="flex-1 py-2 px-4 border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Details
                </button>

                <button className="flex-1 py-2 px-4 border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                  Transfer
                </button>
                {purchase.status === "to_be_paid" ? (
                  <button
                    className="flex-1 py-2 px-4 bg-green-500 text-white text-sm font-medium hover:bg-green-600 transition-colors"
                    onClick={() => handleClaimProfit(purchase._id)}
                  >
                    Payment
                  </button>
                ) : (
                  <button
                    className="flex-1 py-2 px-4 bg-gray-300 text-white text-sm font-medium cursor-not-allowed"
                    disabled
                  >
                    Paid
                  </button>
                )}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Pagination */}
      {purchases.length > 0 && (
        <div className="flex items-center justify-center space-x-2">
          {/* First Page */}
          <button
            onClick={() => handlePageChange(1)}
            disabled={currentPage === 1}
            className="p-2 text-gray-400 hover:text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <FaAngleDoubleLeft size={14} />
          </button>

          {/* Previous Page */}
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2 text-gray-400 hover:text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <FaChevronLeft size={14} />
          </button>

          {/* Page Numbers */}
          {[1, 2, 3, 4, 5].map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`w-8 h-8 rounded text-sm font-medium transition-colors ${
                currentPage === page
                  ? "bg-green-500 text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {page}
            </button>
          ))}

          {/* Next Page */}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-2 text-gray-400 hover:text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <FaChevronRight size={14} />
          </button>

          {/* Last Page */}
          <button
            onClick={() => handlePageChange(totalPages)}
            disabled={currentPage === totalPages}
            className="p-2 text-gray-400 hover:text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <FaAngleDoubleRight size={14} />
          </button>
        </div>
      )}
    </div>
  );
}
