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
import FooterLinkColumn from './footerColumnLink';

const socialIcons = [
  { key: 'fb', Icon: FaFacebookF },
  { key: 'tw', Icon: FaTwitter },
  { key: 'yt', Icon: FaYoutube },
  { key: 'vm', Icon: FaVimeoV },
];

const footerLinkData = [
  {
    title: 'THÔNG TIN KHÁCH HÀNG',
    links: ['Tài khoản của tôi', 'Sản phẩm yêu thích', 'Lịch sử mua hàng', 'Chính sách đổi trả', 'Góp ý, khiếu nại'],
  },
  {
    title: 'HỖ TRỢ DỊCH VỤ',
    links: ['Hệ thống cửa hàng', 'Hướng dẫn mua hàng', 'Hướng dẫn thanh toán', 'Tích điểm đổi quà', 'Câu hỏi thường gặp'],
  },
  {
    title: 'CHÍNH SÁCH ƯU ĐÃI',
    links: ['Chính sách giao hàng', 'Chính sách đổi trả sản phẩm', 'Chính sách bảo hành', 'Giới thiệu sản phẩm mới', 'Chính sách trả góp'],
  },
  {
    title: 'TIN TỨC',
    links: ['Tin mới', 'Khuyến mãi', 'Tuyển dụng', 'Download', 'Tags'],
  },
];

const bottomLinks = ['Sitemap', 'Danh mục sản phẩm', 'Hợp tác', 'Thông tin liên hệ', 'Câu hỏi thường gặp'];
const paymentIcons = [
  { key: 'visa', Icon: FaCcVisa },
  { key: 'mastercard', Icon: FaCcMastercard },
  { key: 'paypal', Icon: FaCcPaypal },
  { key: 'discover', Icon: FaCcDiscover },
];

const Footer = () => {
  return (
    <footer className='w-full bg-[#313131]'>
      <div className='h-[100px] flex justify-center items-center text-gray-400 text-[13px] font-semibold border-b-[1px] border-gray-600'>
        <div className='flex items-center justify-between lg:w-[62%] md:w-[80%] w-full px-4'>
          <div className='flex gap-3 text-[14px]'>
            {socialIcons.map(({ key, Icon }) => <Icon key={key} />)}
          </div>
          <div className='flex items-center gap-10'>
            <p className='w-[146px] text-[14px] font-semibold text-wrap'>ĐĂNG KÝ NHẬN EMAIL TỪ CHÚNG TÔI</p>
            <div className='flex items-center h-[50px]'>
              <input type="text" className='w-[420px] h-full bg-white p-4 outline-none' />
              <button className='w-[50px] h-[50px] bg-green-400 flex items-center justify-center text-white'>
                <FaPaperPlane />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className='flex justify-center items-center text-[13px] border-b-[1px] border-gray-600 py-12'>
        <div className='lg:flex justify-between lg:w-[62%] md:w-[80%] w-full px-4'>
          <div className='w-[370px] mb-6 lg:mb-0'>
            <Image 
              src='/images/green-shop.png' 
              alt='Green Shop Logo' 
              width={300} 
              height={100} 
              className='-ml-5' 
            />
            <p className='text-wrap text-white'>Green shop được thành lập từ 8/2010 được sự tin tưởng của khách hàng trong suốt thời gian hoạt động đến nay cửa hàng ngày một phát triển</p>
            <div className='flex items-center gap-2 mt-4'>
              <MdPhoneIphone className='text-green-400' />
              <p className='text-white'>Điện thoại: (84-4) 66.558.868</p>
            </div>
            <div className='flex items-center mt-2 gap-2'>
              <CgMail className='text-green-400' />
              <p className='text-white'>Email: info@dkt.com.vn</p>
            </div>
          </div>
          <div className='flex flex-wrap gap-10 lg:gap-16'>
            {footerLinkData.map(column => (
              <FooterLinkColumn key={column.title} title={column.title} links={column.links} />
            ))}
          </div>
        </div>
      </div>

      <div className='flex justify-center items-center text-[13px] border-b-[1px] border-gray-600 py-6 text-white'>
        <div className='flex items-center justify-between lg:w-[62%] md:w-[80%] w-full px-4'>
          <div className='flex items-center gap-6'>
            {bottomLinks.map(link => <p key={link}>{link}</p>)}
          </div>
          <div className='flex items-center text-2xl gap-3'>
            {paymentIcons.map(({ key, Icon }) => <Icon key={key} />)}
          </div>
        </div>
      </div>

      <div className='flex justify-center items-center text-[15px] py-4 bg-[#434343] text-white gap-2'>
        <p>Thiết kế bởi Bizweb</p><FaRegCopyright />
      </div>
    </footer>
  );
};

export default Footer;
