'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FoodCard } from '@/components/menu/FoodCard';
import { getFeaturedItems } from '@/lib/data';
import { MenuItem } from '@/types';
import { Skeleton } from '@/components/ui/skeleton';

export function FeaturedItems() {
  const [items, setItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const data = await getFeaturedItems();
        setItems(data);
      } catch (error) {
        console.error('Error fetching featured items:', error);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 1200);
      }
    };

    fetchItems();
  }, []);

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Featured Items</h2>
      
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
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
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {items.map((item) => (
              <FoodCard key={item.id} item={item} />
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <Link href="/menu">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                View Full Menu
              </Button>
            </Link>
          </div>
        </>
      )}
    </section>
  );
}