'use client';

import React from 'react'
import PageWrapper from '@/components/PageWrapper';
import { Button } from '@/components/ui/button';
import { ChevronDown, Eye, Search } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import Link from 'next/link';
import routes from '@/lib/routes';

function NursePatientManagement() {
    return <PageWrapper content={<>
        <section className="border-b flex md:flex-row flex-col items-start  md:items-end justify-between gap-2">
            <div className="flex flex-col">
                <p className="text-base">Patient Management</p>
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
            [1, 2, 3].map((man, idx) => {
                return <div key={`man-${idx}`} className="w-full border rounded-xl p-4 flex justify-between items-center">
                    <aside className="flex flex-col gap-2">
                        <span className="flex gap-4 items-center">
                            <p>Sarah Johnson</p>
                            <div className="px-4 h-8 flex items-center text-sm bg-red-50 text-red-500 rounded">Critical</div>
                        </span>
                        <span className="text-gray-600 text-sm">Age: 45 • Room: 101A</span>
                        <div className="flex gap-[3rem]">
                            <aside className="flex flex-col">
                                <small className="text-gray-500">Doctor:</small>
                                <p className="">Dr. Smith</p>
                            </aside>
                            <aside className="flex flex-col">
                                <small className="text-gray-500">Last Visit:</small>
                                <p className="">2025-05-29</p>
                            </aside>
                            <aside className="flex flex-col">
                                <small className="text-gray-500">BP: | HR:</small>
                                <p className="">BP: 120/80 | HR: 72</p>
                            </aside>
                        </div>
                    </aside>
                    <Link href={routes.nurse.patientManagement + `/${idx}`}>
                        <Button variant={'outline'} className='border-primary text-primary rounded'><Eye /> View Record</Button>
                    </Link>
                </div>
            })
        }
    </>} />
}

export default NursePatientManagement