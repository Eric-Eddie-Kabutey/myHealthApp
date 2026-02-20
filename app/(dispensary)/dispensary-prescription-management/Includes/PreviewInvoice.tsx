'use client';

import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogTitle,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button';

function PreviewInvoice({ open, close }: { open: boolean, close: () => void }) {
    const [success, setSuccess] = useState(false)
    return <Dialog open={!!open} onOpenChange={close}>
        <DialogContent className="main-content sm:w-[400px] flex flex-col items-center gap-3">
            <DialogTitle />
            {
                !success ? <>
                    <p>Invoice Preview</p>
        
                    <br />
                    <section className="w-full border rounded p-4 flex flex-col items-center gap-4">
                        <p className="text-primary">Medical Center</p>
                        <p className='text-sm leading-0'>Prescription Invoice</p>
        
                        <div className="w-full flex justify-between text-sm mt-3">
                            <aside className="flex flex-col gap-2">
                                <p>Bill To:</p>
                                <p>Emma Davis</p>
                                <p className="text-gray-600">Patient: 00003</p>
                            </aside>
                            <aside className="flex flex-col gap-2">
                                <p>Invoice Details:</p>
                                <p>Date: 02/06/2025</p>
                                <p className="text-gray-600">Invoice #: INV-0003</p>
                            </aside>
                        </div>
                    </section>
        
                    <div className="w-full flex justify-between text-sm mt-3 pb-4 border-b">
                        <aside className="flex flex-col justify-between gap-2">
                            <p>Description</p>
                            <p>Emma Davis</p>
                            <p className="text-gray-600">500mg, twice daily</p>
                        </aside>
                        <aside className="flex flex-col justify-between gap-2">
                            <p>Qty</p>
                            <p className="text-gray-600">60</p>
                        </aside>
                        <aside className="flex flex-col justify-between gap-2">
                            <p>Unit Price</p>
                            <p className="text-gray-600">$0.75</p>
                        </aside>
                        <aside className="flex flex-col justify-between gap-2">
                            <p>Total</p>
                            <p className="text-gray-600">$45.00</p>
                        </aside>
                    </div>
        
        
                    <div className="flex flex-col gap-2 w-full text-sm my-2">
                        <span className="flex items-center justify-between text-gray-600">Medication Subtotal <span className="text-black">$45.00</span></span>
                        <span className="flex items-center justify-between text-gray-600">Service Fee: <span className="text-black">$5.00</span></span>
                        <span className="flex items-center justify-between text-gray-600">Processing Fee: <span className="text-black">$2.50</span></span>
                        <hr className='border-y border-black' />
                        <span className="flex items-center justify-between text-gray-600">Total: <span className="text-black">$52.50</span></span>
                    </div>
                    <Button onClick={()=>setSuccess(true)} className='w-full rounded h-10'>Submit Invoice</Button>
                
                </> : <>
                    <div className="size-16 bg-gradient-to-b from-gray-100 rounded-full p-4">
                            <svg className='size-full' viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.5" y="1.01758" width="59" height="57.9655" rx="28.9828" fill="#34765A" />
                                <rect x="0.5" y="1.01758" width="59" height="57.9655" rx="28.9828" stroke="#E1E4EA" />
                                <path d="M27.329 34.2272L39.5856 21.9707L41.4712 23.8563L27.329 37.9984L18.8438 29.5132L20.7294 27.6276L27.329 34.2272Z" fill="white" />
                            </svg>
                    </div>
                    <p className="text-center px-10 py-5">You have successfully approved submitted this invoice</p>
                </>
            }
        </DialogContent>
    </Dialog>
}

export default PreviewInvoice