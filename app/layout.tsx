import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from './providers';
import { Navbar } from '@/components/Navbar';
import { Toaster } from '@/components/ui/toaster';
import { Footer } from '@/components/Footer';
import { PageTransition } from '@/components/PageTransition';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'FoodFlix | Delicious Food Delivered',
  description: 'Order delicious food from your favorite restaurant',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <PageTransition>
              <main className="flex-grow">{children}</main>
            </PageTransition>
            <Footer />
          </div>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}