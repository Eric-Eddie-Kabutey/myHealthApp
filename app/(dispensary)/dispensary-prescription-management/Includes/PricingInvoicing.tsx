'use client';

import { Button } from '@/components/ui/button';
import React, { useState } from 'react'
import PreviewInvoice from './PreviewInvoice';

function PricingInvoicing() {
    const [preview, setPreview] = useState(false);
  return <div className="main-content w-full flex flex-col">
    <section className="border rounded p-4 flex flex-col gap-3 w-[500px]">
        <div className="w-full flex justify-between">
            <span className="flex flex-col">
                <p>Emma Davis</p>
                <small className="text-gray-600">Metformin - 500mg, twice daily</small>
            </span>
            <div className="px-3 py-1 h-fit w-fit rounded bg-emerald-100 text-emerald-700">Approved</div>
        </div>

        <div className="flex flex-col w-full">
            <p className="text-sm">Unit Price ($)</p>
            <input type="number" placeholder='0.75' className="w-full border outline-none h-10 rounded text-sm px-3" />
        </div>
        <div className="flex flex-col w-full">
            <p className="text-sm">Quantity</p>
            <input type="number" placeholder='60' className="w-full border outline-none h-10 rounded text-sm px-3" />
        </div>
        <div className="flex flex-col w-full">
            <p className="text-sm">Subtotal</p>
            <input type="number" disabled defaultValue={45.00} placeholder='0.75' className="w-full border outline-none h-10 rounded text-sm px-3" />
        </div>

        <section className="w-full rounded p-3 flex flex-col gap-3 bg-gray-100">
            <p>Invoice Summary</p>
            <div className="flex flex-col gap-2 w-full">
                <span className="flex items-center justify-between text-gray-600">Medication Subtotal <span className="text-black">$45.00</span></span>
                <span className="flex items-center justify-between text-gray-600">Service Fee: <span className="text-black">$5.00</span></span>
                <span className="flex items-center justify-between text-gray-600">Processing Fee: <span className="text-black">$2.50</span></span>
                <hr className='border-y border-black'/>
                <span className="flex items-center justify-between text-gray-600">Total: <span className="text-black">$52.50</span></span>
            </div>
        </section>

        <div className="flex justify-end gap-3">
            <Button onClick={()=>setPreview(true)} variant={'outline'} className='rounded'>Preview Invoice</Button>
            <Button className='rounded'>Submit Invoice</Button>
        </div>
    </section>

    <PreviewInvoice open={preview} close={()=>setPreview(false)}/>
  </div>
}

export default PricingInvoicing