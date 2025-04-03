
import { mockProducts } from "@/services/mockData";
import ProductCard from "@/components/ProductCard";

export default function DealsPage() {
  // Filter products with a discount (just for demo)
  const discountedProducts = mockProducts.filter(product => 
    Math.random() > 0.5 // Random selection of products for demo
  );

  return (
    <div className="container py-8 md:py-12">
      <div className="mb-8">
        <h1 className="mb-4 text-3xl font-bold">Deals & Discounts</h1>
        <p className="text-muted-foreground">
          Discover our best deals and save big on your favorite products!
        </p>
      </div>
      
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {discountedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
