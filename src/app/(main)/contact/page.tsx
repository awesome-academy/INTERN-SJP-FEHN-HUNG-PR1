import Image from 'next/image'
import React from 'react'
import { MdPhoneIphone } from "react-icons/md";
import { CgMail } from "react-icons/cg";
import ContactForm from './_components/ContactForm';
import GoogleMap from './_components/GoogleMap';

const Contact = () => {
  return (
    <div className='w-full mt-12'>
      <GoogleMap />
      <div className='mt-16 w-[62%] mb-30 mr-auto ml-auto flex justify-between gap-20'>
        <div className='flex-1'>
          <ContactForm />
        </div>
        <div className='flex-1 text-gray-500 text-[12px]'>
          <Image 
            src='/images/green-shop.png' 
            alt='Green Shop Logo' 
            width={300} 
            height={100} 
            className='-ml-5' 
          />
          <p className='text-wrap mt-6'>DKT được thành lập với niềm đam mê và khát vọng thành công trong lĩnh vực Thương mại điện tử. Chúng tôi đã và đang khẳng định được vị trí hàng đầu bằng những sản phẩm.</p>
          <div className='flex items-center gap-2 mt-4'>
            <MdPhoneIphone className='text-green-400' />
            <p>Điện thoại: (84-4) 66.558.868</p>
          </div>
          <div className='flex items-center mt-2 gap-2'>
            <CgMail className='text-green-400' />
            <p>Email: info@dkt.com.vn</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
