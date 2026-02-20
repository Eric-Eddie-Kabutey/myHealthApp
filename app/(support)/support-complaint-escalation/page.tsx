'use client';

import PageWrapper from '@/components/PageWrapper';
import React from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Calendar, ChevronDown, ChevronRight, Clock, MessageCircle, Notebook, Search, User } from 'lucide-react';

function SupporComplaintEscalation() {
    return <PageWrapper content={<>
        <section className="border-b flex md:flex-row flex-col items-start  md:items-end justify-between gap-2">
            <div className="flex flex-col">
                <p className='text-base'>Complaint Escalation</p>
                <p className="text-sm text-gray-600">Track all complaints escalated</p>
            </div>
            <div className="flex gap-3">
                <aside className="rounded-lg w-[300px] px-2 h-9 border flex items-center gap-2">
                    <Search className='size-5' />
                    <input type="text" placeholder='Search...' className="border-none outline-none text-sm w-full h-full" />
                </aside>
                <Popover>
                    <PopoverTrigger asChild>
                        <Button variant="outline" className='flex items-center gap-3 h-9 rounded-lg'>
                            All Status
                            <ChevronDown className='size-5' />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent side={'bottom'} className="w-[650px] text-[14px] flex flex-col gap-3 mr-12 rounded-xl px-6">

                    </PopoverContent>
                </Popover>
                <Popover>
                    <PopoverTrigger asChild>
                        <Button variant="outline" className='flex items-center gap-3 h-9 rounded-lg'>
                            All Departments
                            <ChevronDown className='size-5' />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent side={'bottom'} className="w-[650px] text-[14px] flex flex-col gap-3 mr-12 rounded-xl px-6">

                    </PopoverContent>
                </Popover>
            </div>
        </section>

        <section className="w-full flex flex-col gap-[2rem]">
            {
                [1, 2, 3].map((esc, idx) => {
                    return <div key={`esc-${idx}`} className="w-full border rounded-lg flex flex-col gap-2 py-3">
                        <section className="w-full px-4 flex justify-between py-2">
                            <div className="flex flex-col gap-1">
                                <span className="flex items-center gap-2">
                                    <p>Billing Discrepancy - Overcharge Issue</p>
                                    <div className="px-4 py-1 rounded bg-orange-100 text-orange-800">High</div>
                                </span>
                                <span className="flex items-center gap-[4rem]">
                                    <div className="flex items-center gap-2">
                                        <User className='size-4' />
                                        <small className="text-gray-700">John Smith</small>
                                        <small className="text-gray-700">ID: ESC-001</small>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Calendar className='size-4' />
                                        <small className="text-gray-700">Escalated: 2025-05-28</small>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <small className="text-gray-700">Assigned: Sarah Johnson</small>
                                    </div>
                                </span>
                            </div>
                            <div className="flex gap-3">
                                <div className="text-sm h-fit px-3 py-1 rounded bg-[#FFB4123B] text-orange-800">In Progress</div>
                                <div className="text-sm h-fit px-3 py-1 rounded bg-gray-100">Admin</div>
                            </div>
                        </section>

                        <section className="w-full p-4 flex flex-col gap-2 bg-gray-200">
                            <span className="flex items-center gap-2 text-sm">
                                <Clock className='size-4' /> Resolution Timeline
                            </span>
                            <span className="flex items-center gap-4 text-sm">
                                Expected: 2025-06-03
                                <div className="text-sm h-fit px-3 py-1 rounded bg-[#FFB4123B] text-orange-800">In Progress</div>
                            </span>
                        </section>

                        <section className="w-full flex flex-col p-4 gap-4">
                            <span className="flex items-center gap-2">
                                <MessageCircle className='size-5' /> Comments from Escalated Parties
                            </span>
                            <span className="flex flex-col gap-1 text-sm">
                                <span>Support Agent  <span className="text-gray-600">2025-05-28</span></span>
                                <span className="text-gray-600">Escalated due to complex billing calculation issue requiring admin review.</span>
                            </span>
                            <span className="flex flex-col gap-1 text-sm">
                                <span>Sarah Johnson (Admin) <span className="text-gray-600">2025-05-28</span></span>
                                <span className="text-gray-600">Reviewing billing records. Found discrepancy in promotional discount application.</span>
                            </span>
                            <span className="flex flex-col gap-1 text-sm">
                                <span>Support Agent  <span className="text-gray-600">2025-05-28</span></span>
                                <span className="text-gray-600">Working with billing team to process refund. Expected completion by June 3rd.</span>
                            </span>
                        </section>
                    </div>
                })
            }
        </section>
    </>} />
}

export default SupporComplaintEscalation