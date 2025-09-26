import React from "react";
import { FaShoppingCart, FaUsers, FaDollarSign, FaBox } from "react-icons/fa";

function AdminDashboard() {
  return (
    <div className="flex-1 h-screen p-6 overflow-y-auto">
      <h2 className="text-3xl font-bold mb-8">Admin Dashboard</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Total Products Card */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all ease-in-out duration-300">
          <div className="flex items-center space-x-4">
            <FaBox className="text-green-600 text-4xl" />
            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                Total Products
              </h3>
              <p className="text-2xl text-gray-900">50</p>
            </div>
          </div>
        </div>

        {/* Total Users Card */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all ease-in-out duration-300">
          <div className="flex items-center space-x-4">
            <FaUsers className="text-green-600 text-4xl" />
            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                Total Users
              </h3>
              <p className="text-2xl text-gray-900">150</p>
            </div>
          </div>
        </div>

        {/* Revenue Card */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all ease-in-out duration-300">
          <div className="flex items-center space-x-4">
            <FaDollarSign className="text-green-600 text-4xl" />
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Revenue</h3>
              <p className="text-2xl text-gray-900">$10,000</p>
            </div>
          </div>
        </div>

        {/* Total Orders Card */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all ease-in-out duration-300">
          <div className="flex items-center space-x-4">
            <FaShoppingCart className="text-green-600 text-4xl" />
            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                Total Orders
              </h3>
              <p className="text-2xl text-gray-900">120</p>
            </div>
          </div>
        </div>
      </div>

      {/* Add more dashboard content here */}
    </div>
  );
}

export default AdminDashboard;
