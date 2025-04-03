
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Heart, Minus, Plus, ShoppingBag, Star } from "lucide-react";
import { getProductById, featuredProducts } from "@/services/mockData";
import FeaturedProducts from "@/components/FeaturedProducts";

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState(id ? getProductById(id) : undefined);
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  useEffect(() => {
    if (id) {
      const foundProduct = getProductById(id);
      setProduct(foundProduct);
    }
  }, [id]);

  if (!product) {
    return (
      <div className="container py-16 text-center">
        <h1 className="text-2xl font-bold">Product not found</h1>
        <p className="mt-4 text-muted-foreground">
          The product you're looking for doesn't exist or has been removed.
        </p>
      </div>
    );
  }

  return (
    <div className="container py-8 md:py-12">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="overflow-hidden rounded-lg bg-slate-50">
          <img
            src={product.image}
            alt={product.title}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="space-y-6">
          <div>
            <p className="text-sm text-muted-foreground">{product.vendorName}</p>
            <h1 className="mt-1 text-3xl font-bold">{product.title}</h1>
            <div className="mt-2 flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(product.rating)
                        ? "fill-primary text-primary"
                        : "fill-muted text-muted"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm font-medium">{product.rating}</span>
              <span className="text-sm text-muted-foreground">(48 reviews)</span>
            </div>
          </div>

          <div>
            <p className="text-2xl font-bold">${product.price.toFixed(2)}</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Free shipping on orders over $50
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-medium">Quantity</p>
            <div className="flex items-center">
              <Button
                variant="outline"
                size="icon"
                onClick={decreaseQuantity}
                disabled={quantity <= 1}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-12 text-center">{quantity}</span>
              <Button variant="outline" size="icon" onClick={increaseQuantity}>
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="flex gap-4">
            <Button className="flex-1" size="lg">
              <ShoppingBag className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>
            <Button variant="outline" size="lg">
              <Heart className="h-5 w-5" />
            </Button>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Product Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium">Description</h4>
                <p className="text-sm text-muted-foreground">
                  This beautiful handcrafted item is made with attention to
                  detail and high-quality materials. Perfect for gifting or
                  adding a special touch to your home.
                </p>
              </div>
              <div>
                <h4 className="font-medium">Materials</h4>
                <p className="text-sm text-muted-foreground">
                  Premium quality, sustainably sourced materials.
                </p>
              </div>
              <div>
                <h4 className="font-medium">Shipping</h4>
                <p className="text-sm text-muted-foreground">
                  Ships within 1-3 business days. Free returns within 30 days.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-16">
        <FeaturedProducts
          title="You May Also Like"
          products={featuredProducts.filter((p) => p.id !== product.id).slice(0, 4)}
        />
      </div>
    </div>
  );
}
