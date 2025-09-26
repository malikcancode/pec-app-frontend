import React, { useState } from "react";
import Table from "./Table";
import { useNavigate } from "react-router-dom";

function AdminProducts() {
  const [products, setProducts] = useState([
    { id: 1, name: "Product 1", price: 100, category: "Category 1" },
    { id: 2, name: "Product 2", price: 150, category: "Category 2" },
    // Add more sample products
  ]);

  // Delete a product by ID
  const handleDeleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  // Edit a product
  const handleEditProduct = (product) => {
    const updatedProducts = products.map((item) =>
      item.id === product.id ? { ...product } : item
    );
    setProducts(updatedProducts);
  };

  const navigate = useNavigate();

  // Function to navigate to the "Create Product" page
  const handleCreateProduct = () => {
    navigate("/admin/create-product");
  };

  return (
    <div className="min-h-screen flex flex-col px-4 sm:px-8 py-4 sm:py-6">
      <div className="max-w-full mx-auto w-full">
        <div className="flex flex-col sm:flex-row justify-end items-end mb-8 space-y-4 sm:space-y-0">
          <button
            onClick={handleCreateProduct}
            className="bg-green-600 text-xs sm:text-sm py-2 sm:py-3 px-6 sm:px-8 rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
          >
            Create Product
          </button>
        </div>

        {/* Product Table */}
        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
          <Table
            products={products}
            onDelete={handleDeleteProduct}
            onEdit={handleEditProduct}
          />
        </div>
      </div>
    </div>
  );
}

export default AdminProducts;
