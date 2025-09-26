import React from "react";
import { FaShoppingCart, FaUsers, FaDollarSign, FaBox } from "react-icons/fa";

function AdminDashboard() {
  return (
    <div className="flex-1 h-screen p-6 overflow-y-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Total Products Card */}
        <div className="bg-green-700 p-6 rounded-lg shadow-md hover:shadow-xl transition-all ease-in-out duration-300">
          <div className="flex items-center space-x-4">
            <FaBox className="text-white text-2xl" />
            {/* Adjusted icon color to white */}
            <div>
              <h3 className="text-lg font-semibold text-white">
                Total Products
              </h3>
              <p className="text-2xl text-white">50</p>
            </div>
          </div>
        </div>

        {/* Total Users Card */}
        <div className="bg-green-700 p-6 rounded-lg shadow-md hover:shadow-xl transition-all ease-in-out duration-300">
          <div className="flex items-center space-x-4">
            <FaUsers className="text-white text-2xl sm:text-3xl lg:text-4xl" />
            {/* Adjusted icon color to white */}
            <div>
              <h3 className="text-lg font-semibold text-white">Total Users</h3>
              <p className="text-2xl text-white">150</p>
            </div>
          </div>
        </div>

        {/* Revenue Card */}
        <div className="bg-green-700 p-6 rounded-lg shadow-md hover:shadow-xl transition-all ease-in-out duration-300">
          <div className="flex items-center space-x-4">
            <FaDollarSign className="text-white text-2xl" />
            {/* Adjusted icon color to white */}
            <div>
              <h3 className="text-lg font-semibold text-white">Revenue</h3>
              <p className="text-2xl text-white">$10,000</p>
            </div>
          </div>
        </div>

        {/* Total Orders Card */}
        <div className="bg-green-700 p-6 rounded-lg shadow-md hover:shadow-xl transition-all ease-in-out duration-300">
          <div className="flex items-center space-x-4">
            <FaShoppingCart className="text-white text-2xl" />
            {/* Adjusted icon color to white */}
            <div>
              <h3 className="text-lg font-semibold text-white">Total Orders</h3>
              <p className="text-2xl text-white">120</p>
            </div>
          </div>
        </div>
      </div>

      {/* Add more dashboard content here */}
    </div>
  );
}

export default AdminDashboard;
