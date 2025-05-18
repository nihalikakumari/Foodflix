'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { ModeToggle } from './ModeToggle';
import { Button } from './ui/button';
import { ShoppingCart, Menu, X, Search } from 'lucide-react';
import { Badge } from './ui/badge';
import { SearchInput } from './ui/search-input';
import { cn } from '@/lib/utils';
import { getAllMenuItems } from '@/lib/data';
import { MenuItem } from '@/types';
import { usePathname, useRouter } from 'next/navigation';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<MenuItem[]>([]);
  const { totalItems } = useCart();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsSearchOpen(false);
  }, [pathname]);

  useEffect(() => {
    const searchMenuItems = async () => {
      if (searchQuery.trim() === '') {
        setSearchResults([]);
        return;
      }

      const items = await getAllMenuItems();
      const filtered = items.filter(item => 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5);
      setSearchResults(filtered);
    };

    const debounce = setTimeout(searchMenuItems, 300);
    return () => clearTimeout(debounce);
  }, [searchQuery]);

  const handleNavigation = (href: string) => {
    router.push(href);
    setIsMenuOpen(false);
    setIsSearchOpen(false);
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/menu', label: 'Menu' },
    { href: '/cart', label: 'Cart', mobileOnly: true },
  ];

  const SearchResults = () => (
    <div className="absolute left-0 right-0 top-full z-50 mt-2 max-h-[60vh] overflow-auto border border-border rounded-lg bg-background shadow-lg">
      {searchResults.length === 0 ? (
        <div className="p-4 text-center text-muted-foreground">
          No results found
        </div>
      ) : (
        searchResults.map((item) => (
          <button 
            key={item.id} 
            className="flex w-full items-center p-3 hover:bg-muted transition-colors"
            onClick={() => {
              handleNavigation(`/menu?search=${encodeURIComponent(item.name)}`);
              setSearchQuery('');
            }}
          >
            <div className="relative h-14 w-14 rounded-md overflow-hidden flex-shrink-0">
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="56px"
                className="object-cover"
              />
            </div>
            <div className="ml-3 flex-grow min-w-0">
              <p className="font-medium truncate">{item.name}</p>
              <p className="text-sm text-muted-foreground">₹{item.price}</p>
            </div>
          </button>
        ))
      )}
    </div>
  );

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-all duration-200 w-full',
        isScrolled ? 'bg-background/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Button
            variant="ghost"
            className="text-xl font-bold z-10 px-0"
            onClick={() => handleNavigation('/')}
          >
            Food<span className="text-primary">Flix</span>
          </Button>

          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.filter(link => !link.mobileOnly).map((link) => (
              <Button
                key={link.href}
                variant="ghost"
                className="text-foreground/80 hover:text-primary"
                onClick={() => handleNavigation(link.href)}
              >
                {link.label}
              </Button>
            ))}
          </nav>

          <div className="flex items-center space-x-2">
            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                aria-label="Toggle search"
              >
                <Search className="h-5 w-5" />
              </Button>
              
              <div className={cn(
                "hidden md:block w-[300px]",
                "transition-all duration-200 ease-in-out"
              )}>
                <SearchInput
                  value={searchQuery}
                  onChange={setSearchQuery}
                  placeholder="Search menu..."
                />
                {searchQuery && <SearchResults />}
              </div>
            </div>
            
            <ModeToggle />
            
            {mounted && (
              <Button
                variant="outline"
                size="icon"
                className="relative inline-flex items-center justify-center rounded-md border border-input bg-background p-2 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 w-10 touch-manipulation"
                onClick={() => handleNavigation('/cart')}
                aria-label="Shopping cart"
              >
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <Badge 
                    variant="destructive" 
                    className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs"
                  >
                    {totalItems}
                  </Badge>
                )}
              </Button>
            )}
            
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="md:hidden z-10"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      <div className={cn(
        "md:hidden border-t border-border transition-all duration-300 overflow-hidden",
        isSearchOpen ? "max-h-[400px] border-b" : "max-h-0"
      )}>
        <div className="container mx-auto px-4 py-4">
          <SearchInput
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search menu..."
            className="w-full"
          />
          {searchQuery && <SearchResults />}
        </div>
      </div>

      <div className={cn(
        "fixed inset-x-0 bg-background/95 backdrop-blur-sm border-b border-border md:hidden transition-all duration-300 ease-in-out",
        isMenuOpen ? "top-16 opacity-100" : "-top-full opacity-0"
      )}>
        <div className="container mx-auto px-4 py-4">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Button
                key={link.href}
                variant="ghost"
                className="w-full justify-start text-lg font-medium text-foreground/80 hover:text-primary"
                onClick={() => {
                  handleNavigation(link.href);
                  setIsMenuOpen(false);
                }}
              >
                {link.label}
              </Button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}