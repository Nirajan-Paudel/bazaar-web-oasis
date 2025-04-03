
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Star } from "lucide-react";

export interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
  rating: number;
  vendorName: string;
  category: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { id, title, price, image, rating, vendorName } = product;

  return (
    <Card className="product-card overflow-hidden transition-all hover:shadow-lg">
      <Link to={`/product/${id}`}>
        <div className="aspect-square overflow-hidden bg-slate-50">
          <img
            src={image}
            alt={title}
            className="product-image h-full w-full object-cover"
          />
        </div>
      </Link>
      <CardContent className="p-4">
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">{vendorName}</p>
            <div className="flex items-center gap-0.5">
              <Star className="h-3 w-3 fill-primary text-primary" />
              <span className="text-xs font-medium">{rating}</span>
            </div>
          </div>
          <Link to={`/product/${id}`}>
            <h3 className="font-medium leading-tight line-clamp-2 hover:text-primary transition-colors">
              {title}
            </h3>
          </Link>
          <p className="font-semibold">${price.toFixed(2)}</p>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex items-center justify-between gap-2">
        <Button className="w-full">Add to Cart</Button>
        <Button variant="outline" size="icon" className="flex-shrink-0">
          <Heart className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}
