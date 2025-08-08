'use client'

import StarRating from '@/components/common/starRating'
import { FlowerPot } from '@/types'
import Image from 'next/image'
import React from 'react'
import getDiscountPrice from '@/utils/getDiscountPrice'
import isNew from '@/utils/isNew'
import { IoSearch } from "react-icons/io5";
import { Button } from '../ui/button'

const PotCard = ({ data, isBig = false }: { data: FlowerPot, isBig?: boolean }) => {
  return (
    <div className='relative w-full border border-gray-300'>
      <div className='w-full group/item relative'>
        <Image
          src={`/${data.image}`}
          alt='Flower Pot Image'
          width={500}
          height={480}
          className='w-full object-cover'
        />
        <div className='absolute top-0 left-0 invisible group-hover/item:visible w-full h-full bg-[#D3D4D280] flex items-center justify-center'>
          <Button variant="link">
            MUA NGAY
          </Button>
          {isBig &&
            <div className='w-[40px] h-[40px] flex items-center justify-center rounded-full bg-white text-black text-sm ml-3 cursor-pointer hover:scale-[1.1] duration-200'>
              <IoSearch />
            </div>
          }
        </div>
      </div>
      {isNew(data.createdAt) ? (
        <div className='absolute top-6 left-6 w-[60px] h-[60px] bg-green-500 rounded-full flex items-center justify-center'>
          <span className='text-white text-sm font-semibold'>NEW</span>
        </div>
      ) : (
        data.discount > 0 && (
          <div className='absolute top-6 left-6 w-[60px] h-[60px] bg-red-500 rounded-full flex items-center justify-center'>
            <span className='text-white text-sm font-bold'>-{data.discount}%</span>
          </div>
        )
      )}
      <div className='flex flex-col items-center justify-center p-6'>
        <h3 className='font-light text-sm'>{data.name}</h3>
        <StarRating value={data.rate} />
        <div className='flex items-end gap-3'>
          {data.discount > 0 && (
            <span className='text-red-500 text-lg font-semibold'>
              {getDiscountPrice(data.price, data.discount)} đ
            </span>
          )}
          <span className={`text-sm leading-[1.8] font-light ${data.discount > 0 ? 'line-through text-gray-500' : ''}`}>
            {data.price.toLocaleString('vi-VN')} đ
          </span>
        </div>
      </div>
    </div>
  )
}

export default PotCard
