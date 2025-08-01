import Image from 'next/image';
import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaVimeoV } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { CgMail } from "react-icons/cg";
import { IoIosArrowForward } from "react-icons/io";
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa";
import { FaCcDiscover } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='w-full bg-[#313131]'>
      <div className='h-[100px] flex justify-center items-center text-gray-400 text-[13px] font-semibold border-b-[1px] border-gray-600'>
        <div className='flex items-center justify-between lg:w-[62%] md:[80%] w-full px-4'>
          <div className='flex gap-3 mt-4 text-[14px]'>
            <FaFacebookF />
            <FaTwitter />
            <FaYoutube />
            <FaVimeoV />
          </div>
          <div className='flex items-center gap-10'>
            <div className='w-[146px] text-[14px]'>
              <p className='font-semibold text-wrap'>ĐĂNG KÝ NHẬN EMAIL TỪ CHÚNG TÔI</p>
            </div>
            <div className='flex items-center h-[50px]'>
              <input type="text" className='w-[420px] h-full bg-white p-4 outline-none'/>
              <button className='w-[50px] h-[50px] bg-green-400 flex items-center justify-center text-white'>
                <FaPaperPlane />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center text-[13px] border-b-[1px] border-gray-600 py-12'>
        <div className='lg:flex items-center justify-between lg:w-[62%] md:[80%] w-full px-4'>
          <div className='w-[370px] mb-6'>
            <Image 
              src='/green-shop.png'
              alt='Green Shop Logo'
              width={300}
              height={100}
              className='-ml-5'
            />
            <p className='text-wrap text-white'>Green shop được thành lập từ 8/2010 được sự tin tưởng của khách hàng trong suốt thời gian hoạt động đến nay cửa hàng ngày một phát triển</p>
            <div className='flex items-center gap-2 mt-4'>
              <MdPhoneIphone className='text-green-400'/>
              <p className='text-white'>Điện thoại: (84-4) 66.558.868</p>
            </div>
            <div className='flex items-center mt-2 gap-2'>
              <CgMail className='text-green-400'/>
              <p className='text-white'>Email: info@dkt.com.vn</p>
            </div>
          </div>
          <div className='flex gap-13'>
            <div>
              <h3 className='text-green-400 text-[14px] font-semibold'>THÔNG TIN KHÁCH HÀNG</h3>
              <ul className='text-white mt-6'>
                <li className='flex items-center mb-4'>
                  <IoIosArrowForward className='text-[10px]'/>
                  <p>Tài khoản của tôi</p>
                </li>
                <li className='flex items-center mb-4'>
                  <IoIosArrowForward className='text-[10px]' />
                  <p>Sản phẩm yêu thích</p>
                </li>
                <li className='flex items-center mb-4'>
                  <IoIosArrowForward className='text-[10px]' />
                  <p>Lịch sử mua hàng</p>
                </li>
                <li className='flex items-center mb-4'>
                  <IoIosArrowForward className='text-[10px]' />
                  <p>Chính sách đổi trả</p>
                </li>
                <li className='flex items-center'>
                  <IoIosArrowForward className='text-[10px]' />
                  <p>Góp ý, khiếu nại</p>
                </li>
              </ul>
            </div>
            <div>
              <h3 className='text-green-400 text-[14px] font-semibold'>HỖ TRỢ DỊCH VỤ</h3>
              <ul className='text-white mt-6'>
                <li className='flex items-center mb-4'>
                  <IoIosArrowForward className='text-[10px]' />
                  <p>Hệ thống cửa hàng</p>
                </li>
                <li className='flex items-center mb-4'>
                  <IoIosArrowForward className='text-[10px]' />
                  <p>Hướng dẫn mua hàng</p>
                </li>
                <li className='flex items-center mb-4'>
                  <IoIosArrowForward className='text-[10px]' />
                  <p>Hướng dẫn thanh toán</p>
                </li>
                <li className='flex items-center mb-4'>
                  <IoIosArrowForward className='text-[10px]' />
                  <p>Tích điểm đổi quà</p>
                </li>
                <li className='flex items-center'>
                  <IoIosArrowForward className='text-[10px]' />
                  <p>Câu hỏi thường gặp</p>
                </li>
              </ul>
            </div>
            <div>
              <h3 className='text-green-400 text-[14px] font-semibold'>CHÍNH SÁCH ƯU ĐÃI</h3>
              <ul className='text-white mt-6'>
                <li className='flex items-center mb-4'>
                  <IoIosArrowForward className='text-[10px]' />
                  <p>Chính sách giao hàng</p>
                </li>
                <li className='flex items-center mb-4'>
                  <IoIosArrowForward className='text-[10px]' />
                  <p>Chính sách đổi trả sản phẩm</p>
                </li>
                <li className='flex items-center mb-4'>
                  <IoIosArrowForward className='text-[10px]' />
                  <p>Chính sách bảo hành</p>
                </li>
                <li className='flex items-center mb-4'>
                  <IoIosArrowForward className='text-[10px]' />
                  <p>Giới thiệu sản phẩm mới</p>
                </li>
                <li className='flex items-center'>
                  <IoIosArrowForward className='text-[10px]' />
                  <p>Chính sách trả góp</p>
                </li>
              </ul>
            </div>
            <div>
              <h3 className='text-green-400 text-[14px] font-semibold'>TIN TỨC</h3>
              <ul className='text-white mt-6'>
                <li className='flex items-center mb-4'>
                  <IoIosArrowForward className='text-[10px]' />
                  <p>Tin mới</p>
                </li>
                <li className='flex items-center mb-4'>
                  <IoIosArrowForward className='text-[10px]' />
                  <p>Khuyến mãi</p>
                </li>
                <li className='flex items-center mb-4'>
                  <IoIosArrowForward className='text-[10px]' />
                  <p>Tuyển dụng</p>
                </li>
                <li className='flex items-center mb-4'>
                  <IoIosArrowForward className='text-[10px]' />
                  <p>Download</p>
                </li>
                <li className='flex items-center'>
                  <IoIosArrowForward className='text-[10px]' />
                  <p>Tags</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center text-[13px] border-b-[1px] border-gray-600 py-6 text-white'>
        <div className='flex items-center justify-between lg:w-[62%] md:[80%] w-full px-4'>
          <div className='flex items-center gap-6 '>
            <p>Sitemap</p>
            <p>Danh mục sản phẩm</p>
            <p>Hợp tác</p>
            <p>Thông tin liên hệ</p>
            <p>Câu hỏi thường gặp</p>
          </div>
          <div className='flex items-center text-2xl gap-3'>
            <FaCcVisa />
            <FaCcMastercard />
            <FaCcPaypal />
            <FaCcDiscover />
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center text-[15px] py-4 bg-[#434343] text-white gap-2'>
        <p>Thiết kế bởi Bizweb</p>
        <FaRegCopyright />
      </div>
    </footer>
  )
}

export default Footer
