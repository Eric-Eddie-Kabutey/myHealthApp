'use client';

import { Button } from '@/components/ui/button';
import React from 'react'

function ManageSubscription() {
  return <div className="w-full flex flex-col items-center pt-10 main-content">
    <section className="border rounded-xl p-4 flex flex-col items-center gap-4 w-[500px] px-[2rem]">
      <h1 className="text-lg">Current Subscription</h1>
      <div className="w-full border rounded-lg flex flex-col p-4 bg-gray-50">
        <small className="text-gray-700">Plan</small>
        <p>Family Package</p>
      </div>
      <div className="w-full border rounded-lg flex flex-col p-4 bg-gray-50">
        <small className="text-gray-700">Status</small>
        <p className='text-emerald-500'>Active</p>
      </div>
      <div className="w-full border rounded-lg flex flex-col p-4 bg-gray-50">
        <small className="text-gray-700">Monthly Price</small>
        <p>$29.99</p>
      </div>
      <div className="w-full border rounded-lg flex flex-col p-4 bg-gray-50">
        <small className="text-gray-700">Next Billing</small>
        <p>2025-06-23</p>
      </div>

      <div className="w-full flex gap-4">
        <Button variant={'outline'} className='h-10 flex-1 border-primary text-primary'>Upgrade/Downgrade</Button>
        <Button variant={'outline'} className='h-10 min-w-[100px]'>Pause</Button>
        <Button variant={'outline'} className='h-10 min-w-[100px]'>Cancel</Button>
      </div>
    </section>
  </div>
  
}

export default ManageSubscription