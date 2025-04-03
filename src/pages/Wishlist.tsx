
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useWishlist } from "@/contexts/WishlistContext";
import { useCart } from "@/contexts/CartContext";
import ProductCard from "@/components/ProductCard";

export default function WishlistPage() {
  const { likedItems } = useWishlist();
  const { addToCart } = useCart();

  const handleAddAllToCart = () => {
    likedItems.forEach(product => {
      addToCart(product);
    });
  };

  if (likedItems.length === 0) {
    return (
      <div className="container py-16 text-center">
        <h1 className="text-2xl font-bold">Your Wishlist is Empty</h1>
        <p className="mt-4 text-muted-foreground">
          Items you like will appear here. Start exploring our products to add items to your wishlist.
        </p>
        <Button asChild className="mt-6">
          <Link to="/">Start Shopping</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container py-8 md:py-12">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Your Wishlist</h1>
        <Button onClick={handleAddAllToCart}>Add All to Cart</Button>
      </div>
      
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {likedItems.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
