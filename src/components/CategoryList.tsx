
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

interface Category {
  id: string;
  name: string;
  image: string;
  count: number;
}

interface CategoryListProps {
  categories: Category[];
}

export default function CategoryList({ categories }: CategoryListProps) {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
      {categories.map((category) => (
        <Link to={`/category/${category.id}`} key={category.id}>
          <Card className="overflow-hidden transition-all hover:shadow-md hover:-translate-y-1">
            <div className="aspect-square overflow-hidden bg-slate-50">
              <img
                src={category.image}
                alt={category.name}
                className="h-full w-full object-cover transition-transform hover:scale-105"
              />
            </div>
            <CardContent className="p-4">
              <h3 className="font-medium">{category.name}</h3>
              <p className="text-sm text-muted-foreground">{category.count} items</p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
