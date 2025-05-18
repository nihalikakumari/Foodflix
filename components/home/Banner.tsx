'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const banners = [
  {
    id: 1,
    title: 'Summer Special Offer',
    description: 'Get 20% off on all summer special items. Limited time offer!',
    image: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    cta: 'Order Now',
    link: '/menu',
    color: 'from-amber-500/80 to-rose-500/80',
  },
  {
    id: 2,
    title: 'New Italian Menu',
    description: 'Try our authentic Italian dishes prepared by expert chefs',
    image: 'https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    cta: 'Explore Menu',
    link: '/menu',
    color: 'from-emerald-500/80 to-cyan-500/80',
  },
  {
    id: 3,
    title: 'Family Meal Deal',
    description: 'Feed the whole family with our special family meal packages',
    image: 'https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    cta: 'View Deals',
    link: '/menu',
    color: 'from-indigo-500/80 to-purple-500/80',
  }
];

export function Banner() {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentBanner((prev) => (prev + 1) % banners.length);
        setIsAnimating(false);
      }, 500);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  const banner = banners[currentBanner];

  return (
    <section className="mb-12 relative">
      <div className="relative rounded-2xl overflow-hidden h-[400px] md:h-[500px] shadow-2xl">
        <Image
          src={banner.image}
          alt={banner.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
          priority
          className="object-cover"
        />
        <div className={cn(
          "absolute inset-0 bg-gradient-to-r transition-opacity duration-500",
          banner.color,
          isAnimating ? "opacity-0" : "opacity-100"
        )} />
        
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        
        <div className={cn(
          "absolute inset-0 flex flex-col justify-center px-8 md:px-16",
          "transition-all duration-500",
          isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
        )}>
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg">
              {banner.title}
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 drop-shadow-md">
              {banner.description}
            </p>
            <Link href={banner.link}>
              <Button 
                size="lg" 
                className="group bg-white text-black dark:text-black hover:bg-white/90 hover:text-black dark:hover:text-black"
              >
                {banner.cta}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-3 z-20">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsAnimating(true);
              setTimeout(() => {
                setCurrentBanner(index);
                setIsAnimating(false);
              }, 500);
            }}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-300",
              currentBanner === index 
                ? "bg-white w-8" 
                : "bg-white/50 hover:bg-white/80"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}