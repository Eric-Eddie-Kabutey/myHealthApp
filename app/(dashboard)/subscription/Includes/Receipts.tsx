'use client';

import { Button } from '@/components/ui/button';
import React from 'react'

function Receipts() {
  return <div className="main-content w-full flex flex-col items-center pt-10">
    {
      true ? 
      <section className="w-[500px] border rounded-xl p-4 flex flex-col items-center gap-4 pt-10">
        <h1 className="text-lg w-full text-center ">Payment Receipts</h1>
        <p className="text-gray-700 px-10 text-center">No receipts available. Make a purchase to see your receipts here.</p>
      </section> : 
      <section className="w-[400px] border rounded-xl flex flex-col gap-5 p-4 px-8 pt-10 shadow">
        <h1 className="text-lg w-full text-center mb-5">Payment Receipts</h1>

        <div className="w-full flex flex-col gap-1">
          <small className="text-gray-700">Receipt ID</small>
          <h1 className="text-lg">RCP-1748035938928</h1>
        </div>
        <div className="w-full flex flex-col gap-1">
          <small className="text-gray-700">Plan</small>
          <h1 className="text-lg">Family Package</h1>
        </div>
        <div className="w-full flex flex-col gap-1">
          <small className="text-gray-700">Date</small>
          <h1 className="text-lg">23/05/2025</h1>
        </div>
        <div className="w-full flex flex-col gap-1">
          <small className="text-gray-700">Amount</small>
          <h1 className="text-lg">$29.99</h1>
        </div>

        <hr className="w-full" />
        <Button variant={'outline'} className='w-full h-10'>Download Receipt</Button>
      </section>
    }
  </div>
}

export default Receipts