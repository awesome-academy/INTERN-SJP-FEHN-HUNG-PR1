import React from 'react'
import ImageSlider from './_components/ui/imageSlider'
import { getAllFlowerPots, getBlogs, getFlowerPotsByType } from '@/lib/api'
import PotCard from '@/components/common/potCard'
import SmallPotCard from './_components/ui/smallPotCard'
import NewsCard from './_components/ui/newsCard'
import { AppPagination } from './_components/common/appPagination'
import Image from 'next/image'
import sevenDaysAgoISO from '@/utils/newParamFormat'
import FeaturedProductsGrid from './_components/ui/featuredProductsGrid'
import MidBanner from "@/public/mid-banner.png";

const DISCOUNT_ITEMS_PER_PAGE = 6;
const NEW_ITEMS_PER_PAGE = 8;

const Dashboard = async ({ searchParams }:
  { searchParams: { discount_page?: string; new_page?: string; filter?: string } }) => {

  const preservedSearchParams: { [key: string]: string } = {};
  if (searchParams.filter) {
    preservedSearchParams.filter = searchParams.filter;
  }

  // Discount Flower Pots
  const discountCurrentPage = Number(searchParams.discount_page) || 1;
  const discountParams = new URLSearchParams();
  discountParams.set('discount_gte', '1');
  discountParams.set('_page', String(discountCurrentPage));
  discountParams.set('_limit', String(DISCOUNT_ITEMS_PER_PAGE));

  const { data: discountedPots, total: discountTotalCount } = await getFlowerPotsByType(discountParams);
  const discountTotalPages = Math.ceil(discountTotalCount / DISCOUNT_ITEMS_PER_PAGE);

  // New Flower Pots
  const newCurrentPage = Number(searchParams.new_page) || 1;
  const newParams = new URLSearchParams();
  newParams.set('createdAt_gte', sevenDaysAgoISO);
  newParams.set('_page', String(newCurrentPage));
  newParams.set('_limit', String(NEW_ITEMS_PER_PAGE));
  newParams.set('_sort', 'createdAt');
  newParams.set('_order', 'desc');

  const { data: newPots, total: newTotalCount } = await getFlowerPotsByType(newParams);
  const newTotalPages = Math.ceil(newTotalCount / NEW_ITEMS_PER_PAGE);

  // Others
  const { data: flowerPots } = await getAllFlowerPots();
  const blogs = await getBlogs();

  return (
    <div className='w-full'>
      <div className='w-full h-[500px] custom-slider'>
        <ImageSlider />
      </div>

      <div className='w-full flex justify-center items-center py-12'>
        <div className='w-[62%] px-4'>
          <div className='flex w-full'>
            <div className='w-fit py-3 border-b-2 border-green-500'>
              <h2 className='text-green-500 font-bold'>Sản phẩm nổi bật</h2>
            </div>
            <div className='border-b-2 border-gray-200 flex-1' />
          </div>
          
          <FeaturedProductsGrid products={flowerPots}/>

          <div className='flex w-full gap-6 mt-16'>
            <div className='w-[calc(25%-18px)]'>
              <div className='flex w-full'>
                <div className='w-fit py-3 border-b-2 border-green-500'>
                  <h2 className='text-green-500 font-bold'>Sản phẩm mua nhiều</h2>
                </div>
                <div className='border-b-2 border-gray-200 flex-1' />
              </div>
              <div className='mt-10 w-full border-t-[1px] border-gray-300'>
                {flowerPots.slice(0, 6).map((pot) => {
                  return <SmallPotCard key={pot.name} data={pot}/>
                })}
              </div>
            </div> 
            <div className='flex-1 h-4'>
              <div className='relative flex w-full'>
                <div className='w-fit py-3 border-b-2 border-green-500'>
                  <h2 className='text-green-500 font-bold'>Sản phẩm khuyến mại</h2>
                </div>
                <div className='border-b-2 border-gray-200 flex-1' />
                <div className='absolute right-0 -bottom-2'>
                  <AppPagination 
                    totalPages={discountTotalPages}
                    paramName='discount_page'
                  />
                </div>
              </div>
              <div className='mt-10 w-full grid grid-flow-row grid-cols-3 gap-6'>
                {discountedPots.map((pot) => {
                  return <PotCard key={pot.name} data={pot}/>
                })}
              </div>
            </div>
          </div>

          <div className='w-full mt-12'>
            <Image 
              src={MidBanner}
              alt='Mid Banner'
              width={1140}
              height={217}
              className='w-full object-cover'
            />
          </div>

          <div className='relative flex w-full mt-12'>
            <div className='w-fit py-3 border-b-2 border-green-500'>
              <h2 className='text-green-500 font-bold'>Sản phẩm mới</h2>
            </div>
            <div className='border-b-2 border-gray-200 flex-1' />
            <div className='absolute right-0 -bottom-2'>
              <AppPagination 
                totalPages={newTotalPages}
                paramName='new_page'
              />
            </div>
          </div>

          <div className='mt-10 w-full grid grid-flow-row grid-cols-4 gap-6'>
            {newPots.map((pot) => {
              return <PotCard key={pot.name} data={pot}/>
            })}
          </div>

          <div className='relative flex w-full mt-12'>
            <div className='w-fit py-3 border-b-2 border-green-500'>
              <h2 className='text-green-500 font-bold'>Tin tức</h2>
            </div>
            <div className='border-b-2 border-gray-200 flex-1' />
          </div>

          <div className='mt-10 w-full grid grid-flow-row grid-cols-3 gap-6'>
            {blogs.map((blog) => {
              return <NewsCard key={blog.title} data={blog}/>
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
