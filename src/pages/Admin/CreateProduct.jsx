import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateProduct() {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
    image: null, // New state for the image file
  });

  const navigate = useNavigate();

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0]; // Get the uploaded file
    if (file) {
      setFormData((prevData) => ({
        ...prevData,
        image: file,
      }));
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product Created:", formData);
    // You can later add logic to save the product (e.g., call an API to upload the image)
    // Redirect back to product list page
    navigate("/admin/admin-products");
  };

  // Back button functionality
  const handleBack = () => {
    navigate("/admin/admin-products");
  };

  return (
    <div className="min-h-screen flex flex-col justify-start py-8 items-center px-6">
      <div className="max-w-7xl w-full">
        <h1 className="text-3xl font-semibold text-start mb-6">
          Create New Product
        </h1>

        <button
          onClick={handleBack}
          className="bg-gray-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-gray-700 mb-6 w-full sm:w-auto"
        >
          Back to Products
        </button>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-lg border border-gray-200"
        >
          {/* Product Name */}
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-gray-700 text-lg font-semibold mb-2"
            >
              Product Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 bg-gray-100 text-gray-700 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Product Price */}
          <div className="mb-6">
            <label
              htmlFor="price"
              className="block text-gray-700 text-lg font-semibold mb-2"
            >
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full p-2 bg-gray-100 text-gray-700 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Product Category */}
          <div className="mb-6">
            <label
              htmlFor="category"
              className="block text-gray-700 text-lg font-semibold mb-2"
            >
              Category
            </label>
            <input
              type="text"
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full p-2 bg-gray-100 text-gray-700 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Product Image Upload */}
          <div className="mb-6">
            <label
              htmlFor="image"
              className="block text-gray-700 text-lg font-semibold mb-2"
            >
              Product Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full p-2 bg-gray-100 text-gray-700 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {formData.image && (
              <div className="mt-4">
                <h3 className="text-gray-700">Image Preview:</h3>
                <img
                  src={URL.createObjectURL(formData.image)}
                  alt="Product Preview"
                  className="mt-2 w-32 h-32 object-cover rounded-lg"
                />
              </div>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg shadow-md "
          >
            Create Product
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateProduct;
