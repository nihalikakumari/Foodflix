'use client';

import { useEffect, useState } from 'react';
import { FoodCard } from '@/components/menu/FoodCard';
import { getPopularItems } from '@/lib/data';
import { MenuItem } from '@/types';
import { Skeleton } from '@/components/ui/skeleton';
import { Siren as Fire } from 'lucide-react';

export function PopularItems() {
  const [items, setItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const data = await getPopularItems();
        setItems(data);
      } catch (error) {
        console.error('Error fetching popular items:', error);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    };

    fetchItems();
  }, []);

  return (
    <section className="mb-12">
      <div className="flex items-center gap-2 mb-6">
        <Fire className="h-6 w-6 text-primary" />
        <h2 className="text-2xl font-bold">Most Popular</h2>
      </div>
      
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="rounded-lg overflow-hidden border border-border">
              <Skeleton className="h-48 w-full" />
              <div className="p-4 space-y-2">
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-4 w-1/4" />
                <Skeleton className="h-10 w-full mt-4" />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <FoodCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </section>
  );
}