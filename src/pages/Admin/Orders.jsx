import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

function Orders() {
  const [orders, setOrders] = useState([
    {
      id: 1,
      orderNumber: "ORD001",
      customerName: "John Doe",
      totalAmount: 120,
      orderDate: "2025-09-25",
    },
    {
      id: 2,
      orderNumber: "ORD002",
      customerName: "Jane Smith",
      totalAmount: 150,
      orderDate: "2025-09-24",
    },
    {
      id: 3,
      orderNumber: "ORD003",
      customerName: "Sam Wilson",
      totalAmount: 80,
      orderDate: "2025-09-23",
    },
    // Add more sample orders as needed
  ]);

  // Delete an order by ID
  const handleDeleteOrder = (id) => {
    setOrders(orders.filter((order) => order.id !== id));
  };

  return (
    <div className="min-h-screen flex flex-col justify-start items-center px-6">
      <div className="max-w-7xl w-full">
        <h1 className="text-3xl font-semibold text-start mb-6 text-gray-100">
          Orders
        </h1>

        {/* Orders Table */}
        <div className="overflow-x-auto bg-gray-800 rounded-lg shadow-md">
          <table className="min-w-full text-sm text-left text-gray-300">
            <thead className="bg-gray-700 text-gray-100">
              <tr>
                <th className="px-6 py-3">Order Number</th>
                <th className="px-6 py-3">Customer Name</th>
                <th className="px-6 py-3">Total Amount</th>
                <th className="px-6 py-3">Order Date</th>
                <th className="px-6 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-b border-gray-600">
                  <td className="px-6 py-3">{order.orderNumber}</td>
                  <td className="px-6 py-3">{order.customerName}</td>
                  <td className="px-6 py-3">${order.totalAmount}</td>
                  <td className="px-6 py-3">{order.orderDate}</td>
                  <td className="px-6 py-3 flex space-x-4">
                    <button
                      onClick={() => handleDeleteOrder(order.id)}
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
    </div>
  );
}

export default Orders;
