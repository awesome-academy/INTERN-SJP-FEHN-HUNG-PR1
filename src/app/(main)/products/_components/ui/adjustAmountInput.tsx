'use client'

import React, { Dispatch, SetStateAction, useState, useEffect } from 'react';
import { BsPlus } from "react-icons/bs";
import { AiOutlineMinus } from "react-icons/ai";

interface AdjustAmountInputProps {
  amount: number;
  setAmount: Dispatch<SetStateAction<number>>;
}

const AdjustAmountInput = ({ amount, setAmount }: AdjustAmountInputProps) => {
  const [inputValue, setInputValue] = useState<string | number>(amount);

  useEffect(() => {
    setInputValue(amount);
  }, [amount]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value); 

    if (value !== "") {
      const numValue = parseInt(value, 10);
      if (!isNaN(numValue) && numValue > 0) {
        setAmount(numValue);
      }
    }
  };

  const handleBlur = () => {
    if (inputValue === "" || Number(inputValue) < 1) {
      setInputValue(1);
      setAmount(1);
    }
  };

  const handleDecrement = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  };

  const handleIncrement = () => {
    setAmount(amount + 1);
  };

  return (
    <div className='flex gap-2'>
      <button 
        onClick={handleDecrement} 
        className={`w-[40px] h-[40px] flex items-center justify-center bg-white border border-gray-300 ${amount > 1 && "hover:scale-[1.1] duration-200 cursor-pointer"}`}
      >
        <AiOutlineMinus className='text-[8px]'/>
      </button>
      <input 
        type='number' 
        className='w-[100px] outline-none border-gray-300 focus:ring-0 h-[40px] text-center'
        value={inputValue}
        onChange={handleInputChange}
        onBlur={handleBlur} 
        min="1"
      />
      <button 
        onClick={handleIncrement} 
        className='w-[40px] h-[40px] flex items-center justify-center bg-white border border-gray-300 hover:scale-[1.1] duration-200 cursor-pointer'
      >
        <BsPlus />
      </button>
    </div>
  );
};

export default AdjustAmountInput;
