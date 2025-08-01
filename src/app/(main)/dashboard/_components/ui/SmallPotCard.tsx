import StarRating from '@/components/common/StarRating'
import { FlowerPot } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SmallPotCard = ({ data }: { data: FlowerPot }) => {
  return (
    <div className='w-full p-4 border border-gray-300 border-t-0 flex items-center gap-6'>
      <div className='w-[88.5px] h-[88.5px]'>
        <Image
          src={`/images/${data.image}`}
          alt='Flower Pot Image'
          width={80}
          height={80}
          className='w-full h-full object-cover'
        />
      </div>
      <div>
        <Link href={`/products/${data.id}`} className='text-sm font-light hover:underline cursor-pointer'>{data.name}</Link>
        <StarRating value={data.rate} />
        <span className='text-[16px] font-semibold text-red-500'>{data.price.toLocaleString('vi-VN')} đ</span>
      </div>
    </div>
  )
}

export default SmallPotCard
