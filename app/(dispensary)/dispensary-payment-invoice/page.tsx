'use client';

import PageWrapper from '@/components/PageWrapper';
import React from 'react'
import { ChevronDown, Search } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import routes from '@/lib/routes';

function DispensaryPaymentInvoiceDashboard() {
    return <PageWrapper content={<>
        <section className="border-b flex md:flex-row flex-col items-start  md:items-end justify-between gap-2">
            <div className="flex flex-col">
                
            </div>
            <div className="flex gap-3 items-center pb-3">
                <div className="flex gap-2 items-center h-9 rounded-lg border px-3 w-[300px]">
                    <Search />
                    <input type="text" placeholder='Search...' className="w-full border-none outline-none text-sm h-full" />
                </div>
                <Popover>
                    <PopoverTrigger asChild>
                        <Button variant="outline" className='flex items-center gap-3 h-9 rounded-lg'>
                            <svg className='size-4' viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.33333 10H9.66667V8.33333H6.33333V10ZM0.5 0V1.66667H15.5V0H0.5ZM3 5.83333H13V4.16667H3V5.83333Z" fill="#525866" />
                            </svg>
                            Status
                            <ChevronDown className='size-5' />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent side={'bottom'} className="w-[350px] text-[14px] flex flex-col gap-3 mr-5 rounded-xl px-6">
                        <p>Filter by</p>
                        <div className="w-full flex flex-col gap-1">
                            <p className="text-sm">Type</p>
                            <select className="w-full h-10 rounded-lg border px-3">
                                <option value="">Select Type</option>
                            </select>
                        </div>
                        <div className="w-full flex flex-col gap-1">
                            <p className="text-sm">Date Range</p>
                            <div className="w-full h-10 flex items-center gap-2 justify-between border rounded-lg p-3">
                                <input type="date" name="" id="" />
                                <b>--</b>
                                <input type="date" name="" id="" />
                            </div>
                        </div>
                        <div className="w-full flex flex-col gap-1">
                            <p className="text-sm">Doctor / Provider</p>
                            <select className="w-full h-10 rounded-lg border px-3">
                                <option value="">Select Doctor</option>
                            </select>
                        </div>
                        <div className="w-full grid grid-cols-2 gap-3 pt-4 border-t">
                            <Button variant={'outline'}>Reset</Button>
                            <Button>Apply</Button>
                        </div>
                    </PopoverContent>
                </Popover>
            </div>
        </section>

        <section className="w-full flex text-left text-sm overflow-x-auto">
            <table className="w-full text-left">
                <thead>
                    <tr className='h-10 bg-gray-100'>
                        <td><div className="px-3">Symptons</div></td>
                        <td><div className="px-3">Severity</div></td>
                        <td><div className="px-3">Onset Date</div></td>
                        <td><div className="px-3">Status</div></td>
                        <td><div className="px-3">Action</div></td>
                    </tr>
                </thead>
                <tbody>
                    {
                        [1, 2, 3].map((item, idx, arr) => {
                            return <tr key={'symptons' + idx} className={`${idx !== arr.length - 1 && 'border-b'}`}>
                                <td>
                                    <div className="p-3 flex flex-col">Robert Williams</div>
                                </td>
                                <td>
                                    <div className="p-3">$45.00</div>
                                </td>
                                <td><div className="p-3">
                                    <div className="p-2 h-8 flex items-center w-fit text-sm rounded bg-emerald-50 text-emerald-600">Paid</div>
                                </div></td>
                                <td>
                                    <div className="p-3">
                                        <div className="p-2 h-8 flex items-center w-fit text-sm rounded bg-primary/10 text-primary">Delivered</div>
                                    </div>
                                </td>
                                <td>
                                    <div className="p-3 flex gap-3 items-center">
                                        <Link href={routes.dispensary.payment+`/${idx}`}>
                                            <Button variant={'outline'} className='rounded text-primary border-primary'> Edit Details</Button>
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </section>
    </>} />
}

export default DispensaryPaymentInvoiceDashboard