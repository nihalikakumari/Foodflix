'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { DeliveryForm, DeliveryFormValues } from '@/components/checkout/DeliveryForm';
import { PaymentForm } from '@/components/checkout/PaymentForm';
import { OrderSummary } from '@/components/checkout/OrderSummary';
import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';

export default function CheckoutPage() {
  const { cartItems, totalAmount, clearCart } = useCart();
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState('delivery');
  const [deliveryData, setDeliveryData] = useState<DeliveryFormValues | null>(null);
  const router = useRouter();
  const { toast } = useToast();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Alert variant="destructive" className="mb-4">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Empty Cart</AlertTitle>
          <AlertDescription>
            You cannot checkout with an empty cart.
          </AlertDescription>
        </Alert>
        <Link href="/menu">
          <Button>Browse Menu</Button>
        </Link>
      </div>
    );
  }

  const handleDeliverySubmit = (data: DeliveryFormValues) => {
    setDeliveryData(data);
    setActiveTab('payment');
  };

  const handlePaymentSubmit = async (paymentData: any) => {
    toast({
      title: "Processing payment...",
      description: "Please wait while we process your payment.",
    });

    await new Promise(resolve => setTimeout(resolve, 2000));

    clearCart();
    router.push('/checkout/success');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="delivery">Delivery</TabsTrigger>
              <TabsTrigger value="payment" disabled={!deliveryData}>Payment</TabsTrigger>
            </TabsList>
            
            <TabsContent value="delivery">
              <DeliveryForm onSubmit={handleDeliverySubmit} />
            </TabsContent>
            
            <TabsContent value="payment">
              <PaymentForm onSubmit={handlePaymentSubmit} />
            </TabsContent>
          </Tabs>
        </div>
        
        <div>
          <OrderSummary items={cartItems} subtotal={totalAmount} />
        </div>
      </div>
    </div>
  );
}