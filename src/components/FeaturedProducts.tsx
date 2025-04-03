
import ProductCard, { Product } from "./ProductCard";
import { useState, useEffect } from "react";

interface FeaturedProductsProps {
  title: string;
  subtitle?: string;
  products: Product[];
}

export default function FeaturedProducts({
  title,
  subtitle,
  products,
}: FeaturedProductsProps) {
  return (
    <section className="py-8">
      <div className="container">
        <div className="mb-6">
          <h2 className="text-2xl font-bold">{title}</h2>
          {subtitle && <p className="text-muted-foreground">{subtitle}</p>}
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
