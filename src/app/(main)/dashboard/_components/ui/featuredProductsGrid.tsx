import PotCard from '@/components/common/potCard';
import type { FlowerPot } from '@/types';

interface FeaturedProductsGridProps {
  products: FlowerPot[];
}

const FeaturedProductsGrid = ({ products }: FeaturedProductsGridProps) => {
  if (products.length < 6) {
    return null; 
  }

  const [p1, p2, p3, p4, p5, p6] = products;

  return (
    <div className='flex gap-6 w-full mt-12'>
      <div className='flex-1'>
        <PotCard isBig data={p1}/>
        <div className='flex gap-6 mt-6'>
          <PotCard data={p2}/>
          <PotCard data={p3}/>
        </div>
      </div>
      <div className='flex-1'>
        <div className='flex gap-6 mb-6'>
          <PotCard data={p4}/>
          <PotCard data={p5}/>
        </div>
        <PotCard isBig data={p6}/>
      </div>
    </div>
  );
};

export default FeaturedProductsGrid;
