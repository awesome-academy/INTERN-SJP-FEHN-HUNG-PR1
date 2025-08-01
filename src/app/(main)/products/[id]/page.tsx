import { SetBreadcrumbName } from '@/components/common/SetBreadcrumbName';
import StarRating from '@/components/common/StarRating';
import { getAllFlowerPots, getFlowerPotById, getFlowerPotsByType } from '@/lib/api'
import Image from 'next/image';
import React from 'react'
import InforPotCard from '../_components/ui/InforPotCard';
import ProductImageGrid from '../_components/ui/ProductImageGrid';
import PotInforTabs from '../_components/common/PotInforTabs';
import { AppPagination } from '../../dashboard/_components/common/AppPagination';
import PotCard from '@/components/common/PotCard';

const RELATED_ITEMS_PER_PAGE = 4;

const Product = async ({ params, searchParams }: { params: { id: string }, searchParams: { [key: string]: string | undefined } }) => {
  const pot = await getFlowerPotById(Number(params.id));
  const pots = await getAllFlowerPots();

  const relatedCurrentPage = Number(searchParams.related_page) || 1;

  const relatedPotsParams = new URLSearchParams();
  relatedPotsParams.set('_page', String(relatedCurrentPage));
  relatedPotsParams.set('_limit', String(RELATED_ITEMS_PER_PAGE));

  const { data: relatedPots, total: relatedTotalCount } = await getFlowerPotsByType(relatedPotsParams);
  const relatedTotalPages = Math.ceil(relatedTotalCount / RELATED_ITEMS_PER_PAGE);

  return (
    <div className='w-full'>
      <SetBreadcrumbName name={pot.name} />
      <div className='w-[62%] mt-8 ml-auto mr-auto px-4'>
        <InforPotCard pot={pot} />
        <div className='w-[40%] mt-6'>
          <ProductImageGrid pots={pots.data} />
        </div>

        <div className='w-full mt-24'>
          <PotInforTabs pot={pot} />
        </div>

        <div className='w-full mt-10 mb-12'>
          <div className='relative flex w-full'>
            <div className='w-fit py-3 border-b-2 border-green-500'>
              <h2 className='text-green-500 font-bold'>Sản phẩm cùng loại</h2>
            </div>
            <div className='border-b-2 border-gray-200 flex-1' />
            <div className='absolute right-0 -bottom-2'>
              <AppPagination
                totalPages={relatedTotalPages}
                paramName='related_page'
              />
            </div>
          </div>
          <div className='flex gap-6 w-full mt-10'>
            {relatedPots.map((pot) => {
              return (
                <PotCard key={pot.name} data={pot} />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
