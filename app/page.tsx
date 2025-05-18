import { Banner } from '@/components/home/Banner';
import { Categories } from '@/components/home/Categories';
import { FeaturedItems } from '@/components/home/FeaturedItems';
import { PopularItems } from '@/components/home/PopularItems';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Banner />
      <Categories />
      <PopularItems />
      <FeaturedItems />
    </div>
  );
}