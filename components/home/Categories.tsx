'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Skeleton } from '@/components/ui/skeleton';
import { getCategories } from '@/lib/data';
import { cn } from '@/lib/utils';
import { 
  Pizza, Beef, Coffee, IceCream, 
  Sandwich, Beer, ArrowRight
} from 'lucide-react';

const categoryIcons: Record<string, React.ReactNode> = {
  'pizza': <Pizza className="h-6 w-6" />,
  'burger': <Beef className="h-6 w-6" />,
  'dessert': <IceCream className="h-6 w-6" />,
  'drinks': <Coffee className="h-6 w-6" />,
  'sandwich': <Sandwich className="h-6 w-6" />,
  'beer': <Beer className="h-6 w-6" />,
};

export function Categories() {
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategories();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    };

    fetchCategories();
  }, []);

  return (
    <section className="mb-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold mb-2">Food Categories</h2>
          <p className="text-muted-foreground">Explore our wide variety of delicious options</p>
        </div>
        <Link 
          href="/menu" 
          className="text-primary flex items-center hover:underline font-medium"
        >
          View All <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
      
      {loading ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Skeleton key={i} className="h-32 rounded-xl" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <Link 
              key={category} 
              href={`/menu?category=${category}`}
              className="group"
            >
              <div className={cn(
                "flex flex-col items-center justify-center h-32 rounded-xl",
                "bg-gradient-to-br from-primary/5 via-primary/10 to-transparent",
                "border border-border backdrop-blur-sm",
                "hover:border-primary hover:shadow-lg transition-all duration-300",
                "group-hover:-translate-y-1"
              )}>
                <div className="text-primary/80 group-hover:text-primary transition-colors duration-300 transform group-hover:scale-110">
                  {categoryIcons[category.toLowerCase()] || <Pizza className="h-6 w-6" />}
                </div>
                <span className="mt-3 text-base font-medium capitalize group-hover:text-primary transition-colors">
                  {category}
                </span>
                <span className="mt-1 text-xs text-muted-foreground">
                  Explore Menu
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}