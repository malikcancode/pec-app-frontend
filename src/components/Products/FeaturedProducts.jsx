import ProductCard from "./ProductCard";

export default function FeaturedProducts() {
  const products = [
    {
      id: 1,
      name: "FORM Smart Swim Goggles 2",
      price: 135.0,
      originalPrice: null,
      rating: 4.5,
      reviews: 201,
      stock: 15,
      image: "/smart-swimming-goggles-black.jpg",
      isLiked: true,
    },
    {
      id: 2,
      name: "FORM Smart Swim Goggles 2",
      price: 95.0,
      originalPrice: null,
      rating: 4.5,
      reviews: 201,
      stock: 15,
      image: "/blue-swimming-goggles.jpg",
      isLiked: true,
    },
    {
      id: 3,
      name: "Pro Racing Goggles",
      price: 89.0,
      originalPrice: null,
      rating: 4.8,
      reviews: 156,
      stock: 8,
      image: "/racing-swimming-goggles.jpg",
      isLiked: false,
    },
  ];

  return (
    <div>
      <h2 className="text-xl font-bold text-gray-900 mb-4">
        Featured Products
      </h2>
      <div className="grid grid-cols-2 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
