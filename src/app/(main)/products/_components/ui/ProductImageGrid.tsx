import { FlowerPot } from '@/types'
import Image from 'next/image';
import React from 'react'

const ProductImageGrid = ({ pots }: { pots: FlowerPot[] }) => {
  if (pots.length < 5) {
    return null;
  }

  const imageArr = pots.slice(0, 5);

  return (
    <div className='w-full grid grid-cols-5 gap-3'>
      {imageArr.map((pot) => {
        return (
          <Image 
            src={`/images/${pot.image}`}
            alt='Pot Image'
            key={pot.name}
            width={1110}
            height={960}
            className='w-full h-full object-cover'          
          />
        )
      })}
    </div>
  )
}

export default ProductImageGrid
