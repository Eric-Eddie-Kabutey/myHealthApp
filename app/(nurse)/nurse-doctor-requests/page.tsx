'use client';

import PageWrapper from '@/components/PageWrapper';
import React from 'react'
import { Button } from '@/components/ui/button';
import { ChevronDown, Search } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

function NurseDoctorRequests() {
    return <PageWrapper content={<>
        <section className="border-b flex md:flex-row flex-col items-start  md:items-end justify-between gap-2">
            <div className="flex flex-col">
                <p className="text-base">Doctor Requests</p>
            </div>
            <aside className="flex gap-3">
                <div className="flex gap-2 items-center h-9 rounded-lg border px-3 w-[200px]">
                    <Search />
                    <input type="text" placeholder='Search...' className="w-full border-none outline-none text-sm h-full" />
                </div>
                <Popover>
                    <PopoverTrigger asChild>
                        <Button variant="outline" className='flex items-center gap-3 h-9 rounded-lg'>
                            <svg className='size-4' viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.33333 10H9.66667V8.33333H6.33333V10ZM0.5 0V1.66667H15.5V0H0.5ZM3 5.83333H13V4.16667H3V5.83333Z" fill="#525866" />
                            </svg>
                            Filter
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
            </aside>
        </section>

        {
            [1, 2].map((req, idx) => {
                return <section key={`req-${idx}`} className="w-full border rounded-xl p-4 flex flex-col gap-3">
                    <div className="w-full flex items-center justify-between">
                        <aside className="flex flex-col gap-2">
                            <div className="flex items-center gap-3">
                                <p>Sarah Johnson</p>
                                {
                                    idx === 0 ? <>
                                        <div className="h-8 rounded flex items-center text-sm bg-red-50 text-red-500 px-3">High Priority</div>
                                        <div className="h-8 rounded flex items-center text-sm bg-indigo-50 text-indigo-500 px-3">Pending</div>
                                    </> : <>
                                        <div className="h-8 rounded flex items-center text-sm bg-orange-50 text-orange-500 px-3">Medium Priority</div>
                                        <div className="h-8 rounded flex items-center text-sm bg-emerald-50 text-emerald-500 px-3">Accepted</div>
                                    </>
                                }
                            </div>
                            <div className="flex items-center gap-[3rem]">
                                <aside className="flex flex-col">
                                    <small className="text-gray-500">Condition Summary</small>
                                    <p>Post-operative monitoring after appendectomy</p>
                                </aside>
                                <aside className="flex flex-col">
                                    <small className="text-gray-500">Follow-up Type</small>
                                    <p>In-Person Visit</p>
                                </aside>
                                <aside className="flex flex-col">
                                    <small className="text-gray-500">Requesting Physician</small>
                                    <p>Dr. Michael Chen</p>
                                </aside>
                            </div>
                        </aside>
                        {
                            idx === 0 ?
                                <aside className="flex gap-4">
                                    <Button variant={'outline'} className='rounded border-primary text-primary'>Accept Request</Button>
                                    <Button variant={'outline'} className='rounded border-red-500 text-red-500'>Accept Request</Button>
                                </aside> : null
                        }
                    </div>

                    <div className="p-4 rounded-xl bg-gray-100 text-sm flex flex-col gap-1 my-2">
                        <p>Doctor's Instructions</p>
                        <p className="text-gray-700">Monitor surgical site for signs of infection. Check vital signs every 4 hours. Patient reports mild pain at incision site. Ensure proper wound care education is provided.</p>
                    </div>

                    <div className="flex flex-col gap-3 pl-[2rem]">
                        <p>Notification History</p>
                        <span className="flex gap-2">
                            <div className='size-2 bg-primary rounded-full' />
                            <div className="flex flex-col gap-1.5">
                                <small className='leading-2'>Initial request submitted by Dr. Chen</small>
                                <small className="text-gray-500">2025-05-29 14:30</small>
                            </div>
                        </span>
                        <span className="flex gap-2">
                            <div className='size-2 bg-primary rounded-full' />
                            <div className="flex flex-col gap-1.5">
                                <small className='leading-2'>Initial request submitted by Dr. Chen</small>
                                <small className="text-gray-500">2025-05-29 14:30</small>
                            </div>
                        </span>
                        <span className="flex gap-2">
                            <div className='size-2 bg-primary rounded-full' />
                            <div className="flex flex-col gap-1.5">
                                <small className='leading-2'>Initial request submitted by Dr. Chen</small>
                                <small className="text-gray-500">2025-05-29 14:30</small>
                            </div>
                        </span>
                    </div>
                </section>
            })
        }

    </>} />
}

export default NurseDoctorRequests