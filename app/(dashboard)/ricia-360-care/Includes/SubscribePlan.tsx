'use client';

import { visaLogo } from '@/app/assets/images';
import { Button } from '@/components/ui/button';
import { CheckCircleIcon, Plus } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import {
    Dialog,
    DialogContent,
    DialogTitle,
  } from "@/components/ui/dialog"

function SubscribePlan({open, close}:{open:boolean, close: ()=>void}) {
    return <Dialog open={!!open} onOpenChange={()=>close()}>
    <DialogContent className="main-content sm:w-[400px] flex flex-col items-center gap-4">
    <DialogTitle/>
    <div className="size-14 rounded-full bg-gradient-to-b from-gray-100 p-2 flex items-center justify-center">
      <aside className="bg-white flex items-center justify-center rounded-full size-full">
        <svg className={`size-5`} viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 0H19C19.5523 0 20 0.44771 20 1V17C20 17.5523 19.5523 18 19 18H1C0.44772 18 0 17.5523 0 17V1C0 0.44771 0.44772 0 1 0ZM18 9.00001H2V16H18V9.00001ZM18 5V2H2V5H18Z" fill="#0E121B"/>
        </svg>
      </aside>
    </div>

    <div className="w-full flex justify-center text-center my-2">Complete Your Subscription</div>

    <div className="w-full rounded-xl bg-primary/5 p-3 flex flex-col gap-1">
      <p>Order Summary</p>
      <span className="flex items-center justify-between text-sm text-gray-800 my-1">Ricia Care Individual Plan <span>$25.00/monthly</span></span>
      <span className="flex items-center justify-between mt-2 py-2 border-t">Total <span>$25.00</span></span>
    </div>

    <span className="pb-2 border-b w-full my-2">Payment Method</span>

    <div className="w-full h-[70px] rounded-lg border p-4 flex items-center justify-between bg-primary/5">
      <aside className="flex items-center gap-2">
        <div className="size-14 h-8 rounded-[0.5rem] bg-white flex items-center justify-center">
          <Image src={visaLogo} alt="" className="size-10" />
        </div>
        <div className="flex flex-col">
          <p className="text-sm">Visa ending in 4242</p>
          <small>Expires 05/25</small>
        </div>
      </aside>
      <CheckCircleIcon/>
    </div>
    <div className="w-full h-[70px] rounded-lg border p-4 flex items-center gap-2 bg-gray-100">
        <div className="size-7 rounded-[0.5rem] bg-gray-50 flex items-center justify-center">
          <Plus className='size-5' />
        </div>
        <p>Add new payment method</p>
    </div>

    <div className="w-full grid grid-cols-2 gap-3 mt-2">
      <Button variant={'outline'} onClick={()=>close()} className='h-10 w-full'>Cancel</Button>
      <Button className='h-10 w-full'>Pay Now</Button>
    </div>
    </DialogContent>
</Dialog>
}

export default SubscribePlan