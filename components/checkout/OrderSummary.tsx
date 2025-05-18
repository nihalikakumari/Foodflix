import Image from 'next/image';
import { Separator } from '@/components/ui/separator';
import { CartItemType } from '@/types';
import { ScrollArea } from '@/components/ui/scroll-area';

interface OrderSummaryProps {
  items: CartItemType[];
  subtotal: number;
  deliveryFee?: number;
  taxRate?: number;
}

export function OrderSummary({ 
  items, 
  subtotal, 
  deliveryFee = 49, 
  taxRate = 0.05 
}: OrderSummaryProps) {
  const tax = subtotal * taxRate;
  const total = subtotal + tax + deliveryFee;

  return (
    <div className="border border-border rounded-lg p-4 sm:p-6 bg-card sticky top-24">
      <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
      
      <ScrollArea className="h-[250px] sm:h-[300px] pr-4 -mr-4">
        <div className="space-y-4">
          {items.map((item) => (
            <div key={item.id} className="flex items-start space-x-3">
              <div className="relative h-14 sm:h-16 w-14 sm:w-16 flex-shrink-0 rounded-md overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 640px) 56px, 64px"
                  className="object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium truncate">{item.name}</p>
                <div className="flex justify-between items-center mt-1">
                  <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                  <p className="font-medium">₹{(item.price * item.quantity).toFixed(2)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
      
      <Separator className="my-4" />
      
      <div className="space-y-3 text-sm">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Subtotal</span>
          <span>₹{subtotal.toFixed(2)}</span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-muted-foreground">Delivery Fee</span>
          <span>₹{deliveryFee.toFixed(2)}</span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-muted-foreground">GST (5%)</span>
          <span>₹{tax.toFixed(2)}</span>
        </div>
      </div>
      
      <Separator className="my-4" />
      
      <div className="flex justify-between text-lg font-semibold">
        <span>Total</span>
        <span>₹{total.toFixed(2)}</span>
      </div>
    </div>
  );
}