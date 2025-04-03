import { Product } from "@/components/ProductCard";

// Mock product data
export const mockProducts: Product[] = [
  {
    id: "1",
    title: "Vintage-Inspired Ceramic Mug",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    rating: 4.8,
    vendorName: "CeramicArtistry",
    category: "home",
    description: "A beautiful handmade ceramic mug with a vintage-inspired design."
  },
  {
    id: "2",
    title: "Handcrafted Wooden Cutting Board",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1594224457860-23fdb4e235fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    rating: 4.9,
    vendorName: "WoodWorks",
    category: "kitchen",
    description: "A durable and elegant wooden cutting board, perfect for your kitchen."
  },
  {
    id: "3",
    title: "Natural Scented Soy Candle",
    price: 18.50,
    image: "https://images.unsplash.com/photo-1608263153703-caa6b0fd7c7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    rating: 4.7,
    vendorName: "AromaHouse",
    category: "home",
    description: "A natural soy candle with a delightful scent to create a cozy atmosphere."
  },
  {
    id: "4",
    title: "Handmade Leather Wallet",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    rating: 4.9,
    vendorName: "LeatherCraft",
    category: "accessories",
    description: "A premium handmade leather wallet with multiple card slots and pockets."
  },
  {
    id: "5",
    title: "Organic Cotton Tote Bag",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    rating: 4.6,
    vendorName: "EcoTextiles",
    category: "accessories",
    description: "An eco-friendly tote bag made from 100% organic cotton."
  },
  {
    id: "6",
    title: "Minimalist Wall Art Print",
    price: 35.00,
    image: "https://images.unsplash.com/photo-1582582621959-48d27397dc69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    rating: 4.8,
    vendorName: "ModernPrints",
    category: "decor",
    description: "A minimalist art print that adds a touch of elegance to any room."
  },
  {
    id: "7",
    title: "Handcrafted Silver Earrings",
    price: 42.00,
    image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    rating: 5.0,
    vendorName: "SilverSmith",
    category: "jewelry",
    description: "Elegant handcrafted silver earrings that complement any outfit."
  },
  {
    id: "8",
    title: "Premium Leather Notebook",
    price: 27.50,
    image: "https://images.unsplash.com/photo-1544247341-e841389a3502?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    rating: 4.7,
    vendorName: "PaperGoods",
    category: "stationery",
    description: "A premium leather-bound notebook with high-quality paper."
  }
];

// Mock categories
export const mockCategories = [
  {
    id: "home",
    name: "Home Goods",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    count: 156
  },
  {
    id: "kitchen",
    name: "Kitchen",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    count: 98
  },
  {
    id: "jewelry",
    name: "Jewelry",
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    count: 78
  },
  {
    id: "accessories",
    name: "Accessories",
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    count: 124
  },
  {
    id: "decor",
    name: "Home Decor",
    image: "https://images.unsplash.com/photo-1579656592043-a20e25a4aa4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    count: 67
  },
  {
    id: "stationery",
    name: "Stationery",
    image: "https://images.unsplash.com/photo-1569136487546-015f22ee7c1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1977&q=80",
    count: 45
  }
];

// Mock trending products (a subset of all products)
export const trendingProducts = [mockProducts[0], mockProducts[1], mockProducts[2], mockProducts[3]];

// Mock new arrivals (another subset)
export const newArrivals = [mockProducts[4], mockProducts[5], mockProducts[6], mockProducts[7]];

// Mock featured products (all products for now)
export const featuredProducts = mockProducts;

// Get a single product by ID
export function getProductById(id: string): Product | undefined {
  return mockProducts.find(product => product.id === id);
}

// Get products by category
export function getProductsByCategory(categoryId: string): Product[] {
  return mockProducts.filter(product => product.category === categoryId);
}
