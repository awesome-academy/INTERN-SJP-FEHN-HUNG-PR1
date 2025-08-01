'use client';

import React from 'react';
import { useForm } from 'react-hook-form'; // 1. Import useForm
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from '@/components/ui/form';

const ContactForm = () => {
  const form = useForm();

  return (
    <div>
      <h1 className='text-xl text-green-500 font-bold'>THÔNG TIN LIÊN HỆ</h1> 
      <Form {...form}>
        <form className='mt-6 space-y-6'>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Họ và tên <span className='text-red-500'> *</span></FormLabel>
                <FormControl>
                  <Input {...field} className='rounded-none focus-visible:ring-green-400 h-[50px] px-4'/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Địa chỉ email <span className='text-red-500'> *</span></FormLabel>
                <FormControl>
                  <Input type="email" {...field} className='rounded-none focus-visible:ring-green-400 h-[50px] px-4'/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Số ĐT <span className='text-red-500'> *</span></FormLabel>
                <FormControl>
                  <Input type="tel" {...field} className='rounded-none focus-visible:ring-green-400 h-[50px] px-4'/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="comment"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bình luận <span className='text-red-500'> *</span></FormLabel>
                <FormControl>
                  <Textarea 
                    className="resize-none h-[200px] rounded-none focus-visible:ring-green-400"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  )
}

export default ContactForm
