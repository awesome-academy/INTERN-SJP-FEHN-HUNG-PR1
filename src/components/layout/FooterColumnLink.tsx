import React from 'react';
import { IoIosArrowForward } from "react-icons/io";

interface FooterLinkColumnProps {
  title: string;
  links: string[];
}

const FooterLinkColumn = ({ title, links }: FooterLinkColumnProps) => {
  return (
    <div>
      <h3 className='text-green-400 text-[14px] font-semibold'>{title}</h3>
      <ul className='text-white mt-6'>
        {links.map((link, index) => (
          <li key={index} className='flex items-center mb-4'>
            <IoIosArrowForward className='text-[10px] mr-2' />
            <p>{link}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinkColumn;
