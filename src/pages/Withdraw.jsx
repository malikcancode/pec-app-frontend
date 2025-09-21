import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Withdraw() {
  const { token } = useContext(AuthContext);
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border-2 border-green-600">
        <h1 className="text-3xl font-bold text-green-700 mb-6 text-center">
          Request Withdrawal
        </h1>

        {message && (
          <p
            className={`text-sm mb-4 text-center font-medium ${
              message.toLowerCase().includes("failed")
                ? "text-red-600"
                : "text-green-600"
            }`}
          >
            {message}
          </p>
        )}

        <div className="flex flex-col gap-4">
          <input
            type="number"
            placeholder="Amount USDT"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="px-4 py-3 border-2 border-green-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 font-medium"
          />

          <button
            onClick={handleWithdraw}
            className="bg-green-600 text-white font-semibold py-3 rounded-lg hover:bg-green-700 transition-all"
          >
            Request Withdraw
          </button>
        </div>
      </div>
    </div>
  );
}
