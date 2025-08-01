'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { IoIosArrowForward } from "react-icons/io";
import type { CategoryWithCount, Color } from '@/types';

interface PriceRange {
  min: number,
  max: number;
  text: string;
}

interface ProductSidebarProps {
  categories: CategoryWithCount[];
  colors: Color[];
  priceRanges: PriceRange[];
}

export default function ProductSidebar({ categories, colors, priceRanges }: ProductSidebarProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createFilterUrl = (type: string, value: string) => {
    const currentParams = new URLSearchParams(searchParams.toString());
    
    if (type === 'price') {
      const [min, max] = value.split('-');
      currentParams.set('price_gte', min);
      currentParams.set('price_lte', max);
    } else {
      currentParams.set(type, value);
    }
    
    currentParams.set('_page', '1');

    return `${pathname}?${currentParams.toString()}`;
  };
  
  const activeCategory = searchParams.get('categoryId');
  const activeColor = searchParams.get('colorId');
  const activePrice = `${searchParams.get('price_gte')}-${searchParams.get('price_lte')}`;

  return (
    <div className='w-[260px]'>
      <div>
        <div className='flex w-full'><div className='w-fit py-3 border-b-2 border-green-500'><h2 className='text-green-500 font-bold'>Danh sách sản phẩm</h2></div><div className='border-b-2 border-gray-200 flex-1' /></div>
        <div className='mt-4'>
          {categories.map((category) => (
            <Link 
              key={category.id} 
              href={createFilterUrl('categoryId', String(category.id))}
              className={`flex items-center gap-1 border-b-[1px] border-gray-100 text-[13px] py-2 text-gray-500 ${activeCategory === String(category.id) ? 'font-bold text-green-500' : ''}`}
            >
              <IoIosArrowForward />
              <span className='cursor-pointer hover:underline underline-offset-2'>{category.name} ({category.potCount})</span>
            </Link>
          ))}
        </div>
      </div>

      <div className='mt-8'>
        <div className='flex w-full'><div className='w-fit py-3 border-b-2 border-green-500'><h2 className='text-green-500 font-bold'>Tìm theo giá</h2></div><div className='border-b-2 border-gray-200 flex-1' /></div>
        <div className='mt-4'>
          {priceRanges.map((price) => {
            const priceValue = `${price.min}-${price.max}`;
            return (
              <Link 
                key={price.text} 
                href={createFilterUrl('price', priceValue)}
                className={`flex items-center gap-1 border-b-[1px] border-gray-100 text-[13px] py-2 text-gray-500 ${activePrice === priceValue ? 'font-bold text-green-500' : ''}`}
              >
                <IoIosArrowForward />
                <span className='cursor-pointer hover:underline underline-offset-2'>{price.text}</span>
              </Link>
            )
          })}
        </div>
      </div>

      <div className='mt-8'>
        <div className='flex w-full'><div className='w-fit py-3 border-b-2 border-green-500'><h2 className='text-green-500 font-bold'>Tìm theo màu</h2></div><div className='border-b-2 border-gray-200 flex-1' /></div>
        <div className='mt-8 grid grid-flow-row grid-cols-2 gap-x-8 gap-y-7'>
          {colors.map((color) => (
            <Link 
              key={color.id} 
              href={createFilterUrl('colorId', String(color.id))}
              className={`flex items-center gap-3 text-[13px] text-gray-500 ${activeColor === String(color.id) ? 'font-bold text-green-500' : ''}`}
            >
              <div style={{ backgroundColor: color.hex }} className="w-[30px] h-[30px] rounded-full hover:scale-[1.1] duration-200 cursor-pointer border border-gray-100" />
              <span>{color.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
