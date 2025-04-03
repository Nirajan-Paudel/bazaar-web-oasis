
import { useState, useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import CategoryList from "@/components/CategoryList";
import FeaturedProducts from "@/components/FeaturedProducts";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  mockCategories, 
  featuredProducts, 
  trendingProducts, 
  newArrivals 
} from "@/services/mockData";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection 
        title="Discover Unique Products from Independent Sellers" 
        subtitle="Shop our curated marketplace for one-of-a-kind handmade goods and vintage treasures."
        backgroundImage="https://images.unsplash.com/photo-1607082352121-fa243f3dde32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      />
      
      <section className="py-12">
        <div className="container">
          <h2 className="text-2xl font-bold mb-6">Shop by Category</h2>
          <CategoryList categories={mockCategories} />
        </div>
      </section>
      
      <section className="bg-muted py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <h2 className="text-2xl font-bold">Trending Now</h2>
              <p className="text-muted-foreground">Our most popular products based on sales</p>
            </div>
            <Button asChild variant="outline" className="mt-4 md:mt-0">
              <Link to="/trending">View all</Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {trendingProducts.map((product) => (
              <Link to={`/product/${product.id}`} key={product.id} className="group">
                <div className="product-card overflow-hidden rounded-lg bg-background shadow-sm transition-all hover:shadow-md">
                  <div className="aspect-square overflow-hidden bg-slate-50">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="product-image h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-muted-foreground">{product.vendorName}</p>
                    <h3 className="mt-1 font-medium line-clamp-1">{product.title}</h3>
                    <p className="mt-1 font-semibold">${product.price.toFixed(2)}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      <FeaturedProducts
        title="New Arrivals"
        subtitle="The latest additions to our marketplace"
        products={newArrivals}
      />
      
      <section className="py-12 bg-accent/10">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Join Our Seller Community</h2>
              <p className="text-lg mb-6">
                Start selling your handcrafted products to customers worldwide. Low fees, powerful tools, and a supportive community.
              </p>
              <Button size="lg">Become a Seller</Button>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Seller working in studio" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      <FeaturedProducts
        title="Explore Our Marketplace"
        subtitle="Discover more products from our sellers"
        products={featuredProducts}
      />
    </div>
  );
};

export default Index;
