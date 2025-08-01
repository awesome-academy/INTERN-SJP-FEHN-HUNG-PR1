'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { FlowerPot } from '@/types'
import { FaUserCircle } from "react-icons/fa";
import { FaEarthAmericas } from "react-icons/fa6";
import React from 'react'
import StarRating from '@/components/common/starRating';

const tabsTriggers = [
  {
    value: "info",
    text: "THÔNG TIN SẢN PHẨM"
  },
  {
    value: "feedback",
    text: "KHÁCH HÀNG ĐÁNH GIÁ"
  },
  {
    value: "tags",
    text: "THẺ TAG"
  },
]

const InfoComponent = ({ pot }: { pot:FlowerPot }) => {
  return (
    <div className='w-full flex flex-col gap-4 text-sm text-gray-600'>
      <div className='flex gap-2'>
        <span>Tên phổ thông:</span>
        <p>{pot.commonName}</p>
      </div>
      <div className='flex gap-2'>
        <span>Tên khoa học:</span>
        <p>{pot.scientificName}</p>
      </div>
      <div className='flex gap-2'>
        <span>Họ thực vật:</span>
        <p>{pot.family}</p>
      </div>
      <div className='flex gap-2'>
        <span>Chiều cao:</span>
        <p>{pot.height}</p>
      </div>
      <p>{pot.shortDescribe}</p>
      <p>{pot.information}</p>
    </div>
  )
}

const FeedbackComponent = () => {
  return (
    <div className='flex flex-col gap-10'>
      <div>
        <div className='flex items-center gap-4'>
          <FaUserCircle className='text-[60px]'/>
          <div>
            <h3 className='text-sm'>USER#1</h3>
            <div className='flex items-center gap-1 text-[10px] text-gray-400'>
              <FaEarthAmericas />
              <p>01/12/2025 14:00</p>
            </div>
            <StarRating value={5}/>
          </div>
        </div>
        <p className='text-sm mt-4 ml-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ratione similique, obcaecati quae id iusto quo beatae dolor cumque corrupti ullam odio. Voluptatibus porro laborum perspiciatis rem cupiditate esse tenetur.</p>
      </div>
      <div>
        <div className='flex items-center gap-4'>
          <FaUserCircle className='text-[60px]'/>
          <div>
            <h3 className='text-sm'>USER#2</h3>
            <div className='flex items-center gap-1 text-[10px] text-gray-400'>
              <FaEarthAmericas />
              <p>01/12/2025 14:00</p>
            </div>
            <StarRating value={3.4}/>
          </div>
        </div>
        <p className='text-sm mt-4 ml-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ratione similique, obcaecati quae id iusto quo beatae dolor cumque corrupti ullam odio. Voluptatibus porro laborum perspiciatis rem cupiditate esse tenetur.</p>
      </div>
    </div>
  )
}

const TagComponent = ({ tags }: { tags: String[] }) => {
  return ( 
    <div className='flex gap-4'>
      {tags.map((tag, idx) => {
        return (
          <div key={idx} className='py-3 px-6 bg-green-500 text-sm text-white flex items-center justify-center rounded-md shadow-lg hover:scale-[1.05] duration-200'>
            <p>{tag}</p>
          </div>
        )
      })}
    </div>
  )
}

const PotInforTabs = ({ pot }: { pot:FlowerPot }) => {
  return (
    <Tabs defaultValue='info' className='w-full'>
      <TabsList>
        {tabsTriggers.map((tab) => {
          return (
            <TabsTrigger key={tab.text} value={tab.value}>
              {tab.text}
            </TabsTrigger>
          )
        })}
      </TabsList>
      <TabsContent value='info' className='border border-gray-300 p-10 bg-white'><InfoComponent pot={pot}/></TabsContent>
      <TabsContent value='feedback' className='border border-gray-300 p-10 bg-white'><FeedbackComponent /></TabsContent>
      <TabsContent value='tags' className='border border-gray-300 p-10 bg-white'><TagComponent tags={pot.tag}/></TabsContent>
    </Tabs>
  )
}

export default PotInforTabs
