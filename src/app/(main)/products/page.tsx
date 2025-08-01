import { getCategoriesWithPotCount } from '@/lib/api/categories';
import { getPotColors } from '@/lib/api/potColors';
import { getFlowerPotsByType } from '@/lib/api/flowerPots';
import Image from 'next/image';
import React from 'react';
import ProductsDisplay from './_components/common/ProductsDisplay';
import ProductSidebar from './_components/common/ProductSideBar';
import { ProductPagination } from './_components/common/ProductPagination';
import ListPotCard from './_components/ui/ListPotCard';
import PotCard from '@/components/common/PotCard';

const Products = async ({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) => {
  const categories = await getCategoriesWithPotCount();
  const colors = await getPotColors();
  const priceRanges = [
    {
      min: 200000,
      max: 400000,
      text: "200.000 Đ - 400.000 Đ"
    },
    {
      min: 400000,
      max: 600000,
      text: "400.000 Đ - 600.000 Đ"
    },
    {
      min: 600000,
      max: 800000,
      text: "600.000 Đ - 800.000 Đ"
    },
    {
      min: 800000,
      max: 1000000,
      text: "800.000 Đ - 1.000.000 Đ"
    },
    {
      min: 1000000,
      max: 2000000,
      text: "1.000.000 Đ - 2.000.000 Đ"
    },
  ]

  const cleanSearchParams = new URLSearchParams();

  for (const [key, value] of Object.entries(searchParams)) {
    if (value) {
      if (Array.isArray(value)) {
        value.forEach(v => cleanSearchParams.append(key, v));
      } else {
        cleanSearchParams.set(key, value);
      }
    }
  }

  const searchParamsObj = new URLSearchParams(cleanSearchParams);
  const itemsPerPage = Number(searchParamsObj.get('_limit')) || 15;
  const { data: flowerPots, total } = await getFlowerPotsByType(searchParamsObj);
  const totalPages = Math.ceil(total / itemsPerPage);

  const gridView = (
    <div className='grid grid-cols-3 gap-8'>
      {flowerPots.map(pot => <PotCard key={pot.name} data={pot} />)}
    </div>
  );

  const listView = (
    <div className='flex flex-col gap-4'>
      {flowerPots.map(pot => <ListPotCard key={pot.name} data={pot} />)}
    </div>
  );

  return (
    <div className='flex w-full justify-center'>
      <div className='w-[62%] px-4 py-6 flex gap-8'>
        <ProductSidebar categories={categories} colors={colors} priceRanges={priceRanges} />

        <div className='flex-1'>
          <div className='w-full h-[160px]'>
            <Image src='/images/prod-list-header.jpg' alt='Product List Header Image' width={1200} height={600} className='w-full h-full object-cover' />
          </div>
          <div className='mt-10'>
            <ProductsDisplay gridView={gridView} listView={listView} />

            <div className="mt-12 flex justify-end">
              <ProductPagination totalPages={totalPages} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products
