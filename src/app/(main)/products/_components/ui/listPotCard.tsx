'use client'

import StarRating from '@/components/ui/starRating'
import { FlowerPot } from '@/types'
import getDiscountPrice from '@/utils/getDiscountPrice'
import isNew from '@/utils/isNew'
import Image from 'next/image'
import React, { useState } from 'react'
import { IoSearch } from 'react-icons/io5'
import { FaHeart } from "react-icons/fa";

const ListPotCard = ({ data }: { data: FlowerPot }) => {
  const [isLiked, setLike] = useState<boolean>(false);

  return (
    <div className='relative w-full flex border border-gray-200'>
      <div className='w-[28%] aspect-square'>
        <Image 
          src={`/${data.image}`}
          alt='Flower Pot Image'
          width={600}
          height={600}
          className='w-full h-full object-cover'
        />
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

      <div className='flex-1 flex flex-col justify-center gap-4 py-4 px-6'>
        <div>
          <h3 className=''>{data.name}</h3>
          <StarRating value={data.rate}/>
          <p className='text-wrap text-[13px] text-gray-600'>{data.shortDescribe}</p>
        </div>

        <div className='flex items-end gap-3'>
          {data.discount > 0 && (
            <span className='text-red-500 text-lg font-semibold'>
              {getDiscountPrice(data.price, data.discount)} đ
            </span>
          )}
          <span className={`leading-[1.8]  ${data.discount > 0 ? 'line-through text-gray-500 font-light text-sm' : 'text-red-500 font-semibold text-lg'}`}>
            {data.price.toLocaleString('vi-VN')} đ
          </span>
        </div>

        <div className='flex gap-3'>
          <button className='bg-green-500 text-white px-8 h-[40px] rounded-full text-sm cursor-pointer hover:scale-[1.1] duration-200'>
            MUA NGAY
          </button>
          <div className='w-[40px] h-[40px] flex items-center justify-center border border-gray-200 rounded-full bg-white text-black text-sm cursor-pointer hover:scale-[1.1] duration-200'>
            <IoSearch />
          </div>
          <div className='w-[40px] h-[40px] flex items-center justify-center border border-gray-200 rounded-full bg-white text-black text-sm cursor-pointer hover:scale-[1.1] duration-200'>
            <FaHeart className={isLiked ? "text-red-600" : ""} onClick={()=>setLike(!isLiked)}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListPotCard
