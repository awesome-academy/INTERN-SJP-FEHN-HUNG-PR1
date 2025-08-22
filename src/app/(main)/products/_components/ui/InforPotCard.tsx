'use client'

import StarRating from '@/components/common/StarRating'
import { FlowerPot } from '@/types'
import getDiscountPrice from '@/utils/getDiscountPrice'
import Image from 'next/image'
import React, { useState } from 'react'
import AdjustAmountInput from './AdjustAmountInput'
import { Button } from '@/components/ui/button'
import { IoSearch } from 'react-icons/io5'
import { FaHeart } from "react-icons/fa";
import FBIcon from "@/public/icons/fb-icon.svg";
import TwitterIcon from "@/public/icons/tw-icon.svg";
import GoogleIcon from "@/public/icons/google-icon.svg";
import ShareIcon from "@/public/icons/share-icon.svg";

const socialShareIcons = [
  { id: 'fb', src: FBIcon, alt: 'Facebook Icon', width: 72, height: 22 },
  { id: 'tw', src: TwitterIcon, alt: 'Twitter Icon', width: 65, height: 22 },
  { id: 'gg', src: GoogleIcon, alt: 'Google Icon', width: 57, height: 22 },
  { id: 'sh', src: ShareIcon, alt: 'Share Icon', width: 60, height: 22, className: 'ml-10' }
];

const InforPotCard = ({ pot }: { pot: FlowerPot }) => {
  const [amount, setAmount] = useState<number>(1);
  const [isLiked, setLike] = useState<boolean>(false);

  return (
    <div className='w-full'>
      <div className='flex items-center w-full gap-10'>
        <div className='w-[40%] aspect-square'>
          <Image
            src={`/images/${pot.image}`}
            alt='Pot Image'
            width={1110}
            height={960}
            className='w-full h-full object-cover'
          />
        </div>
        <div className='flex-1'>
          <div className='flex flex-col gap-1 border-b border-gray-300 py-5'>
            <h3 className=''>{pot.name}</h3>
            <StarRating value={pot.rate} />
            <div className='flex items-end gap-3'>
              {pot.discount > 0 && (
                <span className='text-red-500 text-lg font-semibold'>
                  {getDiscountPrice(pot.price, pot.discount)} đ
                </span>
              )}
              <span className={`leading-[1.8]  ${pot.discount > 0 ? 'line-through text-gray-500 font-light text-sm' : 'text-red-500 font-semibold text-lg'}`}>
                {pot.price.toLocaleString('vi-VN')} đ
              </span>
            </div>
          </div>
          <div className='py-5 border-b border-gray-300'>
            <p className='text-[13px] text-gray-500'>{pot.information}</p>
          </div>
          <div className='py-5 border-b border-gray-300 flex items-center gap-6'>
            <span className='text-sm'>Số lượng</span>
            <AdjustAmountInput amount={amount} setAmount={setAmount} />
          </div>
          <div className='py-5 flex items-center gap-3'>
            <Button variant="link">
              MUA NGAY
            </Button>
            <div className='w-[40px] h-[40px] flex items-center justify-center border border-gray-200 rounded-full bg-white text-black text-sm cursor-pointer hover:scale-[1.1] duration-200'>
              <IoSearch />
            </div>
            <div className='w-[40px] h-[40px] flex items-center justify-center border border-gray-200 rounded-full bg-white text-black text-sm cursor-pointer hover:scale-[1.1] duration-200'>
              <FaHeart className={isLiked ? "text-red-600" : ""} onClick={() => setLike(!isLiked)} />
            </div>
          </div>
          <div className='py-4 flex items-center gap-2'>
            {socialShareIcons.map(icon => (
              <Image
                key={icon.id}
                src={icon.src}
                alt={icon.alt}
                width={icon.width}
                height={icon.height}
                className={icon.className || ''}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default InforPotCard
