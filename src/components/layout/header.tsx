'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { FaUser } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTumblr } from "react-icons/fa";
import { FaVimeoV } from "react-icons/fa";
import { ImPhone } from "react-icons/im";
import { FaSearch } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdArrowDropdown } from "react-icons/io";

const Header = () => {


  return (
    <header className='fixed top-0 left-0 w-full'>
      <div className='h-[35px] bg-black text-gray-400 text-[13px] font-semibold flex items-center justify-center'>
        <div className='flex items-center justify-between h-full lg:w-[62%] md:[80%] w-full px-4'>
          <div className='flex items-center gap-6 h-full'>
            <div className='flex items-center gap-2'>
              <FaRegClock />
              <p>Open time: 8:00 - 18:00</p>
              <p>Monday - Sunday</p>
            </div>

            <div className='flex items-center h-full'>
              <div className='w-[30px] h-full border-l-[1px] border-gray-800 flex items-center justify-center'>
                <FaFacebookF className='hover:text-white cursor-pointer'/>
              </div>
              <div className='w-[30px] h-full border-l-[1px]  border-gray-800 flex items-center justify-center'>
                <FaTwitter className='hover:text-white cursor-pointer'/>
              </div>
              <div className='w-[30px] h-full border-l-[1px]  border-gray-800 flex items-center justify-center'>
                <FaTumblr className='hover:text-white cursor-pointer'/>
              </div>
              <div className='w-[30px] h-full border-l-[1px] border-r-[1px] border-gray-800 flex items-center justify-center'>
                <FaVimeoV className='hover:text-white cursor-pointer'/>
              </div>
            </div>
          </div>

          <div className='flex items-center'>
            <div className='flex items-center justify-center gap-2 w-[120px] h-full border-r-[1px] border-l-[1px] border-gray-800 hover:text-white'>
              <FaUser/>
              <Link href="/login" className='leading-[30px]'>Đăng nhập</Link>
            </div>
            <div className='flex items-center justify-center gap-2 w-[120px] h-full border-r-[1px] border-gray-800 hover:text-white'>
              <FaUserPlus className='text-[16px]'/>
              <Link href="/register" className='leading-[30px]'>Đăng ký</Link>
            </div>
          </div>
        </div>
      </div>

      <div className='relative'>
        <Image
          src="/white-brick-bg.jpg"
          alt='White Brick Bg'
          width={400}
          height={100}
          className='w-full h-[140px] object-cover'
        />
        <div className='absolute top-0 left-0 bg-[#F5F5F5] w-full h-[140px] opacity-90' />
        <div className='absolute top-0 left-0 w-full h-[140px] flex items-center justify-center'>
          <div className='flex items-center justify-between h-full lg:w-[62%] md:[80%] w-full px-4 gap-4'>
            <div className='flex items-center'>
              <Image 
                src='/green-shop.png'
                alt='Green Shop Logo'
                width={200}
                height={100}
                className='lg:w-[300px] md:w-[250px] w-[200px] object-contain -ml-5'
              />
              <Image 
                src='/header-flower.png'
                alt='Header Flower'
                width={100}
                height={100}
                className='lg:w-[160px] md:w-0 w-0 object-contain'
              />
            </div>

            <div className='flex items-center gap-10'>
              <div>
                <div className='flex items-center gap-1 text-gray-500 text-sm ml-[20px]'>
                  <ImPhone className='text-[12px]'/>
                  <p>HỖ TRỢ: (04) 6674 2332 - (04) 3786 8904</p>
                </div>
                <div className='lg:w-[400px] md:w-[300px] w-[280px] h-[50px] bg-white rounded-full mt-2 flex items-center pl-6 py-2 justify-between'>
                  <input type="text" className='outline-none text-sm w-[80%]'placeholder='Tìm kiếm...'/>
                  <div className='flex items-center justify-center w-[60px] h-full border-l-[1px] border-gray-300'>
                    <FaSearch className='text-gray-400'/>
                  </div>
                </div>
              </div>
              <div className='flex items-center gap-2 mt-8'>
                <FaShoppingBasket className='text-lg'/>
                <p>0 Sản phẩm</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='w-full h-[50px] bg-[#3fb871] flex items-center justify-center'>
        <div className='flex items-center lg:w-[62%] md:[80%] w-full px-4 h-full'>
          <GiHamburgerMenu className='text-white text-2xl mr-4'/>
          <nav className='flex items-center h-full text-white text-sm font-semibold'>
            <Link href="/" className='hover:text-gray-200 p-4 h-full hover:bg-[#36a66d]'>TRANG CHỦ</Link>
            <Link href="/products" className='hover:text-gray-200 p-4 h-full hover:bg-[#36a66d]'>GIỚI THIỆU</Link>
            <Link href="/about" className='hover:text-gray-200 p-4 h-full hover:bg-[#36a66d]'>
              SẢN PHẨM
              <IoMdArrowDropdown className='inline-block ml-1 text-xl'/>
            </Link>
            <Link href="/blog" className='hover:text-gray-200 p-4 h-full hover:bg-[#36a66d]' onMouseOver={() => {}}>
              SẢN PHẨM MỚI
              <IoMdArrowDropdown className='inline-block ml-1 text-xl'/>
            </Link>
            <Link href="/news" className='hover:text-gray-200 p-4 h-full hover:bg-[#36a66d]'>TIN TỨC</Link>
            <Link href="/contact" className='hover:text-gray-200 p-4 h-full hover:bg-[#36a66d]'>LIÊN HỆ</Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header;
