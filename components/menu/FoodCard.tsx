'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { MenuItem } from '@/types';
import { ShoppingCart, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FoodCardProps {
  item: MenuItem;
}

export function FoodCard({ item }: FoodCardProps) {
  const { addToCart } = useCart();
  const { toast } = useToast();
  const [isAdding, setIsAdding] = useState(false);
  const [animation, setAnimation] = useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);
    setAnimation(true);
    
    // Trigger the cart animation
    setTimeout(() => {
      addToCart(item);
      
      toast({
        title: "Added to cart",
        description: `${item.name} has been added to your cart.`,
      });
      
      setIsAdding(false);
      
      // Reset animation after completion
      setTimeout(() => {
        setAnimation(false);
      }, 300);
    }, 600);
  };

  return (
    <div className={cn(
      "group relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:shadow-xl",
      animation ? "animate-wiggle" : "hover:-translate-y-1"
    )}>
      <div className="relative h-60 overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className={cn(
            "object-cover transition-all duration-500",
            animation ? "scale-105" : "group-hover:scale-110"
          )}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
      
      <div className="relative p-6 bg-card">
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background opacity-50" />
        <div className="relative">
          <h3 className="font-bold text-xl mb-2 text-foreground group-hover:text-primary transition-colors drop-shadow-sm">
            {item.name}
          </h3>
          <p className="text-sm text-foreground/80 mb-4">
            {item.description}
          </p>
          
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-primary drop-shadow-sm">₹{item.price}</span>
            
            <Button 
              onClick={handleAddToCart}
              disabled={isAdding}
              className={cn(
                "transition-all duration-300 shadow-lg",
                isAdding ? "w-full bg-primary" : "w-auto",
                animation ? "scale-105" : ""
              )}
              size="lg"
            >
              {isAdding ? (
                <>
                  <Check className={cn(
                    "mr-2 h-5 w-5 transition-transform duration-300",
                    animation ? "scale-110 rotate-12" : ""
                  )} />
                  Added to Cart
                </>
              ) : (
                <>
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Add to Cart
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}