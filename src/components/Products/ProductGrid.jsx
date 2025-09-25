import products from "../../api/products.js";
import ProductGridCard from "../Products/ProductCard.jsx";

export default function ProductGrid() {
  return (
    <div className="grid grid-cols-2 gap-4 mt-5">
      {products.map((product) => (
        <ProductGridCard key={product.id} product={product} />
      ))}
    </div>
  );
}
