import React from 'react'
import { Rating, Stack } from '@mui/material';

const StarRating = ({ value }: { value: number}) => {
  return (
    <Stack spacing={1} className='star-rating'>
      <Rating value={value} precision={0.1} readOnly/>
    </Stack>
  )
}

export default StarRating
