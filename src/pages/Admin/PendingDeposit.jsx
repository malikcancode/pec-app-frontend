import React, { useContext, useEffect, useState } from "react";
import { getPendingTransactions, approveDeposit } from "../../api/paymentApi";
import { AuthContext } from "../../context/AuthContext";
import { FaEllipsisV } from "react-icons/fa";

function PendingDeposit() {
  const [pendingDeposits, setPendingDeposits] = useState([]);
  const [loading, setLoading] = useState(false);
  const { token } = useContext(AuthContext);
  const [openMenuId, setOpenMenuId] = useState(null); // track dropdown

  useEffect(() => {
    const fetchPending = async () => {
      setLoading(true);
      try {
        const res = await getPendingTransactions(token);
        setPendingDeposits(res.data.transactions || []);
      } catch (err) {
        alert("Failed to fetch pending deposits");
      }
      setLoading(false);
    };
    fetchPending();
  }, [token]);

  const handleApprove = async (id) => {
    try {
      await approveDeposit(token, id);
      setPendingDeposits((prev) => prev.filter((t) => t._id !== id));
      alert("Deposit approved!");
    } catch (err) {
      alert("Failed to approve deposit");
    }
  };

  const handleReject = (id) => {
    // here you would call rejectDeposit API
    setPendingDeposits((prev) => prev.filter((t) => t._id !== id));
    alert("Deposit rejected!");
  };

  return (
    <div className="text-black w-full h-screen p-8">
      <h2 className="text-2xl font-bold mb-6">Pending Deposits</h2>
      {loading ? (
        <div>Loading...</div>
      ) : pendingDeposits.length === 0 ? (
        <div>No pending deposits.</div>
      ) : (
        <div className="bg-gray-800 rounded-lg shadow-md">
          <div className="max-h-[400px] overflow-visible">
            <table className="min-w-full text-sm text-left text-gray-300">
              <thead className="bg-gray-700 text-gray-100 sticky top-0 z-10">
                <tr>
                  <th className="px-6 py-3">User</th>
                  <th className="px-6 py-3">Amount</th>
                  <th className="px-6 py-3">Method</th>
                  <th className="px-6 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {pendingDeposits.length === 0 ? (
                  <tr>
                    <td colSpan="4" className="text-center text-black">
                      No pending deposits.
                    </td>
                  </tr>
                ) : (
                  pendingDeposits.map((dep) => (
                    <tr key={dep._id} className="border-b border-gray-600">
                      <td className="px-6 py-3">
                        {dep.user?.name || dep.user}
                      </td>
                      <td className="px-6 py-3">${dep.amount}</td>
                      <td className="px-6 py-3">{dep.method}</td>
                      <td className="px-6 py-3 relative z-10">
                        <button
                          onClick={() =>
                            setOpenMenuId(
                              openMenuId === dep._id ? null : dep._id
                            )
                          }
                          className="text-gray-300 hover:text-gray-100"
                        >
                          <FaEllipsisV />
                        </button>

                        {openMenuId === dep._id && (
                          <div className="absolute right-52 mt-2 w-32 bg-gray-700 rounded-lg shadow-lg z-20">
                            <button
                              onClick={() => {
                                handleApprove(dep._id);
                                setOpenMenuId(null);
                              }}
                              className="block w-full text-left px-4 py-2 text-green-400 hover:bg-gray-600"
                            >
                              Approve
                            </button>
                            <button
                              onClick={() => {
                                handleReject(dep._id);
                                setOpenMenuId(null);
                              }}
                              className="block w-full text-left px-4 py-2 text-red-400 hover:bg-gray-600"
                            >
                              Reject
                            </button>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default PendingDeposit;
