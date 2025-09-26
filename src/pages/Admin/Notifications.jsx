import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

function Notifications() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      message: "Product 1 has been successfully added.",
      date: "2025-09-25",
    },
    { id: 2, message: "Order #12345 has been shipped.", date: "2025-09-24" },
    {
      id: 3,
      message: "User John Doe has updated their profile.",
      date: "2025-09-23",
    },
    // Add more sample notifications as needed
  ]);

  // Delete a notification by ID
  const handleDeleteNotification = (id) => {
    setNotifications(
      notifications.filter((notification) => notification.id !== id)
    );
  };

  return (
    <div className="min-h-screen flex flex-col justify-start items-center px-1">
      <div className="max-w-7xl w-full">
        {/* <h1 className="text-3xl font-semibold text-start mb-6 text-gray-100">
          Notifications
        </h1> */}

        {/* Notifications Table */}
        <div className="overflow-x-auto bg-gray-800 rounded-lg shadow-md">
          <table className="min-w-full text-sm text-left text-gray-300">
            <thead className="bg-gray-700 text-gray-100">
              <tr>
                <th className="px-6 py-3">Message</th>
                <th className="px-6 py-3">Date</th>
                <th className="px-6 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {notifications.map((notification) => (
                <tr key={notification.id} className="border-b border-gray-600">
                  <td className="px-6 py-3">{notification.message}</td>
                  <td className="px-6 py-3">{notification.date}</td>
                  <td className="px-6 py-3 flex space-x-4">
                    <button
                      onClick={() => handleDeleteNotification(notification.id)}
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

export default Notifications;
