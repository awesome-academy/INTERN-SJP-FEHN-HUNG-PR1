'use client'

import React, { useState } from 'react'
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaList } from "react-icons/fa";

interface ProductsDisplayProps {
  gridView: React.ReactNode;
  listView: React.ReactNode;
}

const sortOptions = [
  { value: 'name,asc', label: 'Tên: A-Z' },
  { value: 'name,desc', label: 'Tên: Z-A' },
  { value: 'price,asc', label: 'Giá: Tăng dần' },
  { value: 'price,desc', label: 'Giá: Giảm dần' },
  { value: 'createdAt,desc', label: 'Mới nhất' },
  { value: 'createdAt,asc', label: 'Cũ nhất' },
];

const showOptions = [5, 10, 15, 20];

const ProductsDisplay = ({ gridView, listView }: ProductsDisplayProps) => {
  const [displayType, setDisplayType] = useState<"grid" | "list">("grid");

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleFilterChange = (type: 'sort' | 'limit', value: string) => {
    const currentParams = new URLSearchParams(searchParams.toString());

    if (type === 'sort') {
      const [sort, order] = value.split(',');
      currentParams.set('_sort', sort);
      currentParams.set('_order', order);
    }

    if (type === 'limit') {
      currentParams.set('_limit', value);
      currentParams.set('_page', '1'); 
    }

    router.push(`${pathname}?${currentParams.toString()}`);
  };

  const currentSort = `${searchParams.get('_sort') || 'name'},${searchParams.get('_order') || 'asc'}`;
  const currentLimit = searchParams.get('_limit') || '15';

  return (
    <div className='w-full'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-3'>
          <BsFillGrid3X3GapFill 
            onClick={() => setDisplayType("grid")} 
            className={`text-lg cursor-pointer hover:scale-[1.1] duration-200 ${displayType === "grid" ? "text-green-500" : "text-gray-400"}`}
          />
          <FaList 
            onClick={() => setDisplayType("list")} 
            className={`text-lg cursor-pointer hover:scale-[1.1] duration-200 ${displayType === "list" ? "text-green-500" : "text-gray-400"}`}
          />
        </div>
        <div className='flex items-center gap-10'>
          <div className='flex items-center gap-6'>
            <label htmlFor='sort' className='text-sm'>Sắp xếp theo</label>
            <select 
              id="sort"
              className='w-[140px] px-4 py-2 block border border-gray-300 bg-white focus:ring-green-500 text-[13px] text-gray-400'
              onChange={(e) => handleFilterChange('sort', e.target.value)}
              value={currentSort}
            >
              {sortOptions.map(option => (
                <option key={option.value} className='text-black' value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className='flex items-center gap-6'>
            <label htmlFor='limit' className='text-sm'>Show</label>
            <select 
              id="limit"
              className='w-[60px] px-2.5 py-2 block border border-gray-300 bg-white focus:ring-green-500 text-[13px] text-gray-400'
              onChange={(e) => handleFilterChange('limit', e.target.value)}
              value={currentLimit}
            >
              {showOptions.map(option => (
                <option key={option} className='text-black' value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="mt-8">
        {displayType === 'grid' ? gridView : listView}
      </div>
    </div>
  )
}

export default ProductsDisplay
