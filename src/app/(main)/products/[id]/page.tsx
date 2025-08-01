import { SetBreadcrumbName } from '@/components/common/setBreadcrumbName';
import { getFlowerPotById } from '@/lib/api'
import React from 'react'

const Product = async ({ params } : { params: { id: string } }) => {
  const pot = await getFlowerPotById(Number(params.id));

  return (
    <div className='w-full'>
      <SetBreadcrumbName name={pot.name}/>
    </div>
  )
}

export default Product
