import React, { useEffect, useState } from "react";
import { getAllTransactions } from "../../api/paymentApi";

export default function RechargeHistory() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");

  useEffect(() => {
    async function fetchTransactions() {
      try {
        const res = await getAllTransactions(token);
        setTransactions(res.data.transactions || []);
      } catch (err) {
        setTransactions([]);
        console.error("Failed to fetch transactions", err);
      } finally {
        setLoading(false);
      }
    }
    fetchTransactions();
  }, [token]);

  return (
    <div className="bg-gray-800 rounded-lg shadow-md p-4">
      <h2 className="text-xl font-semibold text-white mb-4">
        Recharge History
      </h2>

      <div className="max-h-[400px] overflow-y-auto">
        <table className="min-w-full text-sm text-left text-gray-300">
          <thead className="bg-gray-700 text-gray-100 sticky top-0 z-10">
            <tr>
              <th className="px-6 py-3">#</th>
              <th className="px-6 py-3">User</th>
              <th className="px-6 py-3">Type</th>
              <th className="px-6 py-3">Amount</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Date</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={6} className="px-6 py-6 text-center text-gray-400">
                  Loading...
                </td>
              </tr>
            ) : transactions.length === 0 ? (
              <tr>
                <td
                  colSpan={6}
                  className="px-6 py-6 text-center font-semibold text-black bg-white"
                >
                  No transactions found.
                </td>
              </tr>
            ) : (
              transactions.map((tx, idx) => (
                <tr
                  key={tx._id || idx}
                  className="border-b border-gray-600 hover:bg-gray-700 transition"
                >
                  <td className="px-6 py-3">{idx + 1}</td>
                  <td className="px-6 py-3">
                    {tx.user?.name || tx.user || "N/A"}
                  </td>
                  <td className="px-6 py-3">{tx.type}</td>
                  <td className="px-6 py-3">${tx.amount}</td>
                  <td
                    className={`px-6 py-3 font-medium ${
                      tx.status === "approved"
                        ? "text-green-400"
                        : tx.status === "pending"
                        ? "text-yellow-400"
                        : "text-red-400"
                    }`}
                  >
                    {tx.status}
                  </td>
                  <td className="px-6 py-3">
                    {tx.createdAt
                      ? new Date(tx.createdAt).toLocaleString()
                      : "N/A"}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
