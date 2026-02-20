'use client';

import { LogoSmall } from '@/app/assets/images';
import PageWrapper from '@/components/PageWrapper';
import { Mail, Phone } from 'lucide-react';
import Image from 'next/image';
import React from 'react'
import SupportChat from './Includes/SupportChat';

function Support() {
  return <PageWrapper className='h-full flex-col gap-0' content={<section className='w-full h-full flex flex-col'>
      <div className=" flex items-center gap-2 border-b min-h-12">
        <Image src={LogoSmall} alt='logo-small' className=''/>
        <p>Ricia Care</p>
      </div>
      <div className="w-full flex h-full flex-1">
        <SupportChat/>
        <section className="min-w-[300px] w-[300px] h-full border-l flex flex-col gap-3 pt-10 items-center px-4">
          <Image src={LogoSmall} alt='logo-small' className=''/>
          <p>Ricia Care</p>
          <p className="text-sm px-4 text-center">Get all the help you need with our 24/7 available customer care service</p>

          <hr className="w-full my-2" />
          <div className="w-full flex flex-col gap-3 text-gray-700">
            <p>Contact Details</p>
            <span className="w-full flex items-center justify-between">
              <span className='flex items-center gap-2'><Phone className='size-4'/> Phone</span>
              <span>+233 123 456 789</span>
            </span>
            <span className="w-full flex items-center justify-between">
              <span className='flex items-center gap-2'><Mail className='size-4'/> Email</span>
              <span>hi@riciacare.com</span>
            </span>
          </div>
        </section>
      </div>
  </section>}/>
}

export default Support