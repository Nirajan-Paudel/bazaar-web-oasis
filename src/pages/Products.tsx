
import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { mockProducts, trendingProducts } from "@/services/mockData";
import ProductCard from "@/components/ProductCard";

export default function ProductsPage() {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search');
  
  const [products, setProducts] = useState<any[]>([]);
  const [title, setTitle] = useState("Products");

  useEffect(() => {
    // Check for search query
    if (searchQuery) {
      const filteredProducts = mockProducts.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
      
      setProducts(filteredProducts);
      setTitle(`Search Results for "${searchQuery}"`);
      return;
    }
    
    // Check the current route to determine which products to show
    if (location.pathname === "/trending") {
      setProducts(trendingProducts);
      setTitle("Trending Products");
    } else {
      // Default to showing all products
      setProducts(mockProducts);
      setTitle("All Products");
    }
  }, [location.pathname, searchQuery]);

  return (
    <div className="container py-8 md:py-12">
      <h1 className="mb-8 text-3xl font-bold">{title}</h1>
      
      {products.length === 0 ? (
        <div className="py-12 text-center">
          <p className="text-muted-foreground">No products found.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
