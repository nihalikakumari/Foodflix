import { Separator } from "@/components/ui/separator";

interface CartSummaryProps {
  subtotal: number;
  deliveryFee?: number;
  taxRate?: number;
  discount?: number;
}

export function CartSummary({ 
  subtotal, 
  deliveryFee = 49, 
  taxRate = 0.05,
  discount = 0
}: CartSummaryProps) {
  // Calculate derived values
  const tax = subtotal * taxRate;
  const total = subtotal + tax + deliveryFee - discount;

  return (
    <div className="border border-border rounded-lg p-6 bg-card sticky top-24">
      <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
      
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
        
        {discount > 0 && (
          <div className="flex justify-between text-primary">
            <span>Discount</span>
            <span>-₹{discount.toFixed(2)}</span>
          </div>
        )}
      </div>
      
      <Separator className="my-4" />
      
      <div className="flex justify-between font-semibold">
        <span>Total</span>
        <span>₹{total.toFixed(2)}</span>
      </div>
    </div>
  );
}