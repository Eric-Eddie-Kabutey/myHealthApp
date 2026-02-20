'use client';

import PageWrapper from '@/components/PageWrapper';
import React, { useState } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { ChevronDown, Filter, Search } from 'lucide-react';
import {
    Dialog,
    DialogContent,
    DialogTitle,
} from "@/components/ui/dialog"

function FinanaceTransactionManagement() {
    const [view, setView] = useState<any>(null)
    return <PageWrapper content={<>
        <section className="border-b flex md:flex-row flex-col items-start  md:items-end justify-between gap-2">
            Transaction Management
            <div className="flex gap-3">
                <aside className="rounded-lg w-[300px] px-2 h-9 border flex items-center gap-2">
                    <Search className='size-5' />
                    <input type="text" placeholder='Search...' className="border-none outline-none text-sm w-full h-full" />
                </aside>
                <Popover>
                    <PopoverTrigger asChild>
                        <Button variant="outline" className='flex items-center gap-3 h-9 rounded'>
                            <Filter className='size-4' />
                            Filter
                            <ChevronDown className='size-5' />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent side={'bottom'} className="w-[650px] text-[14px] flex flex-col gap-3 mr-12 rounded-xl px-6">

                    </PopoverContent>
                </Popover>
            </div>
        </section>

        <section className="w-full overflow-x-auto">
            <table className="w-full text-left text-sm">
                <thead>
                    <tr className='h-10 bg-gray-100'>
                        <td><div className="px-3">Transaction ID</div></td>
                        <td><div className="px-3">Patient</div></td>
                        <td><div className="px-3">Date & Time</div></td>
                        <td><div className="px-3">Event</div></td>
                        <td><div className="px-3">Amount</div></td>
                        <td><div className="px-3">Status</div></td>
                        <td><div className="px-3">Action</div></td>
                    </tr>
                </thead>
                <tbody>
                    {
                        [1, 2, 3, 4, 5, 6].map((tran, idx, arr) => {
                            return <tr key={`tran-${idx}`} className={`${idx !== arr.length - 1 && 'border-b'}`}>
                                <td><div className="p-3">TXN001</div></td>
                                <td><div className="p-3">John Doe</div></td>
                                <td><div className="p-3">2025-06-05  10:00 AM</div></td>
                                <td><div className="p-3">Subscription</div></td>
                                <td><div className="p-3 text-emerald-600">$1,250.00</div></td>
                                <td><div className="p-3"><div className="h-8 px-4 flex items-center rounded text-emerald-600 bg-emerald-100 w-fit">Completed</div></div></td>
                                <td><div className="p-3"><Button onClick={() => setView(tran)} variant={'outline'} className='rounded border-primary text-primary'>View details</Button></div></td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </section>

        <section className={`size-full fixed top-0 left-0 flex justify-end bg-[#00000038] transition-all duration-300 ${!view && 'translate-x-[100%]'}`}>
            <div onClick={() => setView(null)} className='size-full absolute top-0 left-0 backdrop-blur-[2px]' />
            <div className="bg-white p-4 flex flex-col gap-2 w-[400px] relative z-10">
                <p className='py-2 border-b pb-4'>Transaction Details</p>

                <div className="border-b py-2 flex flex-col">
                    <small className="text-gray-600">Transaction ID</small>
                    <small>TXN-001</small>
                </div>
                <div className="border-b py-2 flex flex-col">
                    <small className="text-gray-600">Amount</small>
                    <small className='text-emerald-600'>+$1,250.00</small>
                </div>
                <div className="border-b py-2 flex flex-col">
                    <small className="text-gray-600">Payment Method</small>
                    <small>Credit Card ****4532</small>
                </div>
                <div className="border-b py-2 flex flex-col">
                    <small className="text-gray-600">Processing Fee</small>
                    <small>$232.00</small>
                </div>
                <div className="border-b py-2 flex flex-col">
                    <small className="text-gray-600">Transaction ID</small>
                    <small>TXN-001</small>
                </div>
                <div className="border-b py-2 flex flex-col">
                    <small className="text-gray-600">Transaction ID</small>
                    <small className='px-3 py-1 flex items-center text-emerald-600 bg-emerald-100 rounded w-fit'>Completed</small>
                </div>
                <div className="border-b py-2 flex flex-col">
                    <small className="text-gray-600">Event Type</small>
                    <small>Subscription</small>
                </div>
                <div className="border-b py-2 flex flex-col">
                    <small className="text-gray-600">Description</small>
                    <small>Payment for Premium Software License</small>
                </div>
                <div className="border-b py-2 flex flex-col">
                    <small className="text-gray-600">Transaction Time</small>
                    <small>Jun 1, 2024 at 02:30 PM</small>
                </div>
                <div className="border-b py-2 flex flex-col">
                    <small className="text-gray-600">Usre Profile</small>
                    <small>John Smith ( Email: john.smith@email.com  ID: USR-101 )</small>
                </div>
                <Button className='rounded'>Download Receipt</Button>
            </div>
        </section>
    </>} />
}

export default FinanaceTransactionManagement