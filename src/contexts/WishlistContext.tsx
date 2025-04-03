
import React, { createContext, useContext, useState, useEffect } from "react";
import { Product } from "@/components/ProductCard";
import { useToast } from "@/hooks/use-toast";

interface WishlistContextType {
  likedItems: Product[];
  toggleLike: (product: Product) => void;
  isLiked: (productId: string) => boolean;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
};

export const WishlistProvider: React.FC<{ children: React.ReactNode }> = ({ 
  children 
}) => {
  const { toast } = useToast();
  const [likedItems, setLikedItems] = useState<Product[]>([]);
  
  // Load wishlist from localStorage on mount
  useEffect(() => {
    try {
      const savedWishlist = localStorage.getItem("wishlist");
      if (savedWishlist) {
        setLikedItems(JSON.parse(savedWishlist));
      }
    } catch (error) {
      console.error("Failed to load wishlist from localStorage:", error);
    }
  }, []);

  // Save wishlist to localStorage when it changes
  useEffect(() => {
    try {
      localStorage.setItem("wishlist", JSON.stringify(likedItems));
    } catch (error) {
      console.error("Failed to save wishlist to localStorage:", error);
    }
  }, [likedItems]);

  const toggleLike = (product: Product) => {
    const isCurrentlyLiked = likedItems.some(item => item.id === product.id);
    
    if (isCurrentlyLiked) {
      setLikedItems(prevItems => prevItems.filter(item => item.id !== product.id));
      toast({
        title: "Removed from wishlist",
        description: `${product.title} removed from your wishlist`,
      });
    } else {
      setLikedItems(prevItems => [...prevItems, product]);
      toast({
        title: "Added to wishlist",
        description: `${product.title} added to your wishlist`,
      });
    }
  };

  const isLiked = (productId: string) => {
    return likedItems.some(item => item.id === productId);
  };

  return (
    <WishlistContext.Provider 
      value={{
        likedItems,
        toggleLike,
        isLiked,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
