"use client";

import React, { useEffect, useState, useContext } from "react";
import { FaTrashAlt, FaCheck, FaTimes } from "react-icons/fa";
import { getAllPurchases, claimProfit } from "../../api/purchaseApi";
import { AuthContext } from "../../context/AuthContext";

// Reusable Table component
function Table({ orders, onDelete }) {
  return (
    <div className="bg-gray-800 rounded-lg shadow-md">
      <div className="max-h-[400px] overflow-y-auto">
        <table className="min-w-full text-sm text-left text-gray-300">
          <thead className="bg-gray-700 text-gray-100 sticky top-0 z-10">
            <tr>
              <th className="px-6 py-3">Order Number</th>
              <th className="px-6 py-3">Customer Name</th>
              <th className="px-6 py-3">Product</th>
              <th className="px-6 py-3">Amount</th>
              <th className="px-6 py-3">Date</th>
              <th className="px-6 py-3 text-center">Claimed</th>
              <th className="px-6 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr
                key={order._id}
                className="border-b border-gray-600 hover:bg-gray-700"
              >
                <td className="px-6 py-3">{order._id}</td>
                <td className="px-6 py-3">{order.user?.name || "N/A"}</td>
                <td className="px-6 py-3">{order.product?.name || "N/A"}</td>
                <td className="px-6 py-3">${order.amount?.toFixed(2)}</td>
                <td className="px-6 py-3">
                  {new Date(order.createdAt).toLocaleDateString()}
                </td>

                {/* Claimed column */}
                <td className="px-6 py-3 flex items-center justify-center">
                  {order.paymentClaimedAt ? (
                    <FaCheck className="text-green-500" />
                  ) : (
                    <FaTimes className="text-red-500" />
                  )}
                </td>

                {/* Actions column */}
                <td className="px-6 py-3 flex justify-center">
                  <button
                    onClick={() => onDelete(order._id)}
                    className="text-red-500 hover:text-red-600"
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function Orders() {
  const { token } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true);
      try {
        const res = await getAllPurchases(token);
        setOrders(res.data.purchases || []);
      } catch (err) {
        setError("Failed to load orders.");
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, [token]);

  // Delete order
  const handleDeleteOrder = async (id) => {
    try {
      await claimProfit(token, id); // or call your delete API here
      setOrders(orders.filter((order) => order._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  return (
    <div className="min-h-screen flex flex-col justify-start items-center px-4 sm:px-6 md:px-8 py-6">
      <div className="max-w-7xl w-full">
        <Table orders={orders} onDelete={handleDeleteOrder} />
      </div>
    </div>
  );
}
