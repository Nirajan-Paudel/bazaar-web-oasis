
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { mockProducts } from "@/services/mockData";
import ProductCard from "@/components/ProductCard";

const categoryList = [
  "All", "Electronics", "Clothing", "Home & Garden", "Beauty", "Books", 
  "Sports", "Toys", "Automotive", "Health"
];

export default function CategoriesPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = activeCategory === "All" 
    ? mockProducts 
    : mockProducts.filter(product => product.category === activeCategory);

  return (
    <div className="container py-8 md:py-12">
      <h1 className="mb-8 text-3xl font-bold">Categories</h1>
      
      <div className="mb-8 flex flex-wrap gap-2">
        {categoryList.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? "default" : "outline"}
            onClick={() => setActiveCategory(category)}
            className="mb-2"
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
