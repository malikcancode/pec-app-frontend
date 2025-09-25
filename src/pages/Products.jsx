import ProductsHeader from "../components/Products/ProductsHeader.jsx";
import CategoryIcons from "../components/Products/CategoryIcons.jsx";
import ProductGrid from "../components/Products/ProductGrid.jsx";
import FloatingCart from "../components/Products/FloatingCart.jsx";
import Footer from "./Footer.jsx";

export default function Products() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto min-h-screen">
        <ProductsHeader />
        <div className="px-4 pb-24">
          <CategoryIcons />
          <ProductGrid />
        </div>
        <Footer />
      </div>
    </div>
  );
}
