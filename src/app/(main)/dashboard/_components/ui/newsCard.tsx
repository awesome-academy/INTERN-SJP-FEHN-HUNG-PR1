import { Blog } from '@/types'
import React from 'react'
import formatDate from '@/utils/formatDate';
import Image from 'next/image';
import Link from 'next/link';

const NewsCard = ({ data }: { data: Blog }) => {
  return (
    <div className='w-full'>
      <div className='w-full'>
        <Image 
          src={`/${data.previewImage}`}
          alt='News Image'
          width={500}
          height={400}
          className='w-full object-cover'
        />
      </div>
      <div className='mt-4 text-[12px] flex flex-col gap-3'>
        <span className='italic font-semibold text-gray-400'>{formatDate(data.createdAt)}</span>
        <div className='h-[80px]'>
          <h3 className='font-bold text-sm text-green-600'>{data.title}</h3>
          <p className='text-wrap text-gray-500'>{data.previewContent}</p>
        </div>
        <Link className='italic text-green-600 font-light hover:underline' href={`/news/${data.id}`}>Đọc tiếp</Link>
      </div>
    </div>
  )
}

export default NewsCard
