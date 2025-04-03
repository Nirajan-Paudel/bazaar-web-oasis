
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Search,
  ShoppingBag,
  User,
  Menu,
  X,
} from "lucide-react";
import { Input } from "@/components/ui/input";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    // In a real app, we would navigate to search results page
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
          <Link to="/" className="flex items-center gap-2">
            <span className="font-bold text-xl text-primary">Bazaar</span>
          </Link>
        </div>

        <nav className={`${isMenuOpen ? 'absolute left-0 top-16 w-full border-b bg-background px-6 pb-6 pt-2 md:static md:flex md:w-auto md:border-0 md:p-0' : 'hidden md:flex'} items-center gap-6`}>
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">Home</Link>
            <Link to="/categories" className="text-sm font-medium hover:text-primary transition-colors">Categories</Link>
            <Link to="/deals" className="text-sm font-medium hover:text-primary transition-colors">Deals</Link>
            <Link to="/sellers" className="text-sm font-medium hover:text-primary transition-colors">Sellers</Link>
          </div>
        </nav>

        <div className="hidden md:flex md:w-1/3 lg:w-1/3">
          <form onSubmit={handleSearch} className="relative w-full">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              className="w-full pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Link to="/cart">
              <ShoppingBag className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon">
            <Link to="/account">
              <User className="h-5 w-5" />
            </Link>
          </Button>
          <Button className="hidden md:inline-flex">Sign In</Button>
        </div>
      </div>

      <div className="md:hidden border-t border-border/50 p-2">
        <form onSubmit={handleSearch} className="relative w-full">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search products..."
            className="w-full pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </form>
      </div>
    </header>
  );
}
