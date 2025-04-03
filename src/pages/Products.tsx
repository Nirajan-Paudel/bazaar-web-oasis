
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { mockProducts, trendingProducts } from "@/services/mockData";
import ProductCard from "@/components/ProductCard";

export default function ProductsPage() {
  const location = useLocation();
  const [products, setProducts] = useState<any[]>([]);
  const [title, setTitle] = useState("Products");

  useEffect(() => {
    // Check the current route to determine which products to show
    if (location.pathname === "/trending") {
      setProducts(trendingProducts);
      setTitle("Trending Products");
    } else {
      // Default to showing all products
      setProducts(mockProducts);
      setTitle("All Products");
    }
  }, [location.pathname]);

  return (
    <div className="container py-8 md:py-12">
      <h1 className="mb-8 text-3xl font-bold">{title}</h1>
      
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
