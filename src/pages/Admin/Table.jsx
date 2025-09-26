import React from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

function Table({ products, onDelete, onEdit }) {
  return (
    <div className="overflow-x-auto bg-gray-800 rounded-lg shadow-md">
      <table className="min-w-full text-sm text-left text-gray-300">
        <thead className="bg-gray-700 text-gray-100">
          <tr>
            <th className="px-6 py-3">Product Name</th>
            <th className="px-6 py-3">Price</th>
            <th className="px-6 py-3">Category</th>
            <th className="px-6 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index} className="border-b border-gray-600">
              <td className="px-6 py-3">{product.name}</td>
              <td className="px-6 py-3">${product.price}</td>
              <td className="px-6 py-3">{product.category}</td>
              <td className="px-6 py-3 flex space-x-4">
                <button
                  onClick={() => onEdit(product)}
                  className="text-yellow-400 hover:text-yellow-500"
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => onDelete(product.id)}
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
  );
}

export default Table;
