import { Product } from '@/components/ProductCard'

// Mock product data
export const mockProducts: Product[] = [
  {
    id: '1',
    title: 'Vintage-Inspired Ceramic Mug',
    price: 24.99,
    image:
      'https://mahaguthi.com.np/wp-content/uploads/2020/08/Mahaguthi_Ceramic_Mugs-9.jpg',
    rating: 4.8,
    vendorName: 'CeramicArtistry',
    category: 'home',
    description:
      'A beautiful handmade ceramic mug with a vintage-inspired design.',
  },
  {
    id: '2',
    title: 'Handcrafted Wooden Cutting Board',
    price: 49.99,
    image:
      'https://static-01.daraz.com.np/p/cba8c30e59c2be55ac966b118e4c64ec.jpg',
    rating: 4.9,
    vendorName: 'WoodWorks',
    category: 'kitchen',
    description:
      'A durable and elegant wooden cutting board, perfect for your kitchen.',
  },
  {
    id: '3',
    title: 'Natural Scented Soy Candle',
    price: 18.5,
    image:
      'https://www.slownorth.com/cdn/shop/products/Lavender-Cedar-candle-8oz-Slow-North-1.jpg?v=1744655184&width=1600',
    rating: 4.7,
    vendorName: 'AromaHouse',
    category: 'home',
    description:
      'A natural soy candle with a delightful scent to create a cozy atmosphere.',
  },
  {
    id: '4',
    title: 'Handmade Leather Wallet',
    price: 59.99,
    image:
      'https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
    rating: 4.9,
    vendorName: 'LeatherCraft',
    category: 'accessories',
    description:
      'A premium handmade leather wallet with multiple card slots and pockets.',
  },
  {
    id: '5',
    title: 'Organic Cotton Tote Bag',
    price: 29.99,
    image:
      'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    rating: 4.6,
    vendorName: 'EcoTextiles',
    category: 'accessories',
    description: 'An eco-friendly tote bag made from 100% organic cotton.',
  },
  {
    id: '6',
    title: 'Minimalist Wall Art Print',
    price: 35.0,
    image:
      'https://images.unsplash.com/photo-1582582621959-48d27397dc69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    rating: 4.8,
    vendorName: 'ModernPrints',
    category: 'decor',
    description:
      'A minimalist art print that adds a touch of elegance to any room.',
  },
  {
    id: '7',
    title: 'Handcrafted Silver Earrings',
    price: 42.0,
    image:
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    rating: 5.0,
    vendorName: 'SilverSmith',
    category: 'jewelry',
    description:
      'Elegant handcrafted silver earrings that complement any outfit.',
  },
  {
    id: '8',
    title: 'Premium Leather Notebook',
    price: 27.5,
    image:
      'https://www.nkuku.com/cdn/shop/products/Rustic-Leather-Journal-nkuku.jpg?v=1738855888',
    rating: 4.7,
    vendorName: 'PaperGoods',
    category: 'stationery',
    description: 'A premium leather-bound notebook with high-quality paper.',
  },
]

// Mock categories
export const mockCategories = [
  {
    id: 'home',
    name: 'Home Goods',
    image:
      'https://images.saatchiart.com/saatchi/1746874/art/8290468/additional_a80bff24d3354477a0c377ec723606922072ee4e-AICC2-7.jpg',
    count: 156,
  },
  {
    id: 'kitchen',
    name: 'Kitchen',
    image:
      'https://bergnerhome.in/cdn/shop/articles/Header-Banner-1.png?v=1718542473&width=2048',
    count: 98,
  },
  {
    id: 'jewelry',
    name: 'Jewelry',
    image:
      'https://t4.ftcdn.net/jpg/04/47/91/41/360_F_447914195_XdcRh5miaqdCGBsHKM87zSCDDBfOwWkO.jpg',
    count: 78,
  },
  {
    id: 'accessories',
    name: 'Accessories',
    image:
      'https://img.freepik.com/free-photo/shop-clothing-clothes-shop-hanger-modern-shop-boutique_1150-8886.jpg?semt=ais_hybrid&w=740',
    count: 124,
  },
  {
    id: 'decor',
    name: 'Home Decor',
    image:
      'https://www.tradeindia.com/wp-content/uploads/2024/06/Unique-Decorative-Items-to-Elevate-Your-Home-Decor-jpg.webp',
    count: 67,
  },
  {
    id: 'stationery',
    name: 'Stationery',
    image:
      'https://www.dollarsense.au/cdn/shop/collections/pexels-yan-krukov-8613062_1.jpg?v=1653070463',
    count: 45,
  },
]

// Mock trending products (a subset of all products)
export const trendingProducts = [
  mockProducts[0],
  mockProducts[1],
  mockProducts[2],
  mockProducts[3],
]

// Mock new arrivals (another subset)
export const newArrivals = [
  mockProducts[4],
  mockProducts[5],
  mockProducts[6],
  mockProducts[7],
]

// Mock featured products (all products for now)
export const featuredProducts = mockProducts

// Get a single product by ID
export function getProductById(id: string): Product | undefined {
  return mockProducts.find((product) => product.id === id)
}

// Get products by category
export function getProductsByCategory(categoryId: string): Product[] {
  return mockProducts.filter((product) => product.category === categoryId)
}
