
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

// Mock seller data
const sellers = [
  {
    id: 1,
    name: "TechGadgets Pro",
    image: "https://source.unsplash.com/random/300x300/?shop",
    rating: 4.9,
    products: 246,
    specialty: "Electronics",
  },
  {
    id: 2,
    name: "Fashion Forward",
    image: "https://source.unsplash.com/random/300x300/?boutique",
    rating: 4.7,
    products: 189,
    specialty: "Clothing",
  },
  {
    id: 3,
    name: "Home Essentials",
    image: "https://source.unsplash.com/random/300x300/?home",
    rating: 4.8,
    products: 315,
    specialty: "Home & Garden",
  },
  {
    id: 4,
    name: "Beauty Bazaar",
    image: "https://source.unsplash.com/random/300x300/?beauty",
    rating: 4.6,
    products: 127,
    specialty: "Beauty",
  },
  {
    id: 5,
    name: "Book Haven",
    image: "https://source.unsplash.com/random/300x300/?books",
    rating: 4.9,
    products: 203,
    specialty: "Books",
  },
  {
    id: 6,
    name: "Sports Universe",
    image: "https://source.unsplash.com/random/300x300/?sports",
    rating: 4.7,
    products: 154,
    specialty: "Sports",
  },
];

export default function SellersPage() {
  return (
    <div className="container py-8 md:py-12">
      <div className="mb-8">
        <h1 className="mb-4 text-3xl font-bold">Our Verified Sellers</h1>
        <p className="text-muted-foreground">
          Explore our network of trusted sellers offering quality products
        </p>
      </div>
      
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sellers.map((seller) => (
          <Card key={seller.id} className="overflow-hidden">
            <div className="aspect-video w-full overflow-hidden">
              <img 
                src={seller.image} 
                alt={seller.name} 
                className="h-full w-full object-cover transition-all hover:scale-105"
              />
            </div>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl">{seller.name}</CardTitle>
                <Badge>{seller.specialty}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mb-2 flex items-center">
                <div className="flex items-center">
                  <Star className="mr-1 h-4 w-4 fill-primary text-primary" />
                  <span className="font-medium">{seller.rating}</span>
                </div>
                <span className="mx-2">•</span>
                <span>{seller.products} Products</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link to={`/sellers/${seller.id}`}>View Products</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
