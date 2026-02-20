'use client';


import { Button } from '@/components/ui/button';
import React from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { ChevronDown, Filter, Search } from 'lucide-react';

function History() {
    return <div className='main-content w-full flex flex-col gap-4'>
        <section className="border-b flex md:flex-row flex-col items-start  md:items-end justify-between gap-2">
            <div className="flex flex-col">
                <p className="text-sm">Recent Past Appointments</p>
                <small>Completed consultations</small>
            </div>
            <div className="flex gap-3">
                <aside className="rounded-lg w-[300px] px-2 h-9 border flex items-center gap-2">
                    <Search className='size-5' />
                    <input type="text" placeholder='Search...' className="border-none outline-none text-sm w-full h-full" />
                </aside>
                <Popover>
                    <PopoverTrigger asChild>
                        <Button variant="outline" className='flex items-center gap-3 h-8 rounded-lg'>
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

        <section className="flex overflow-x-auto text-left text-sm">
            <table className="w-full">
                <thead>
                    <tr className="h-10 bg-gray-100">
                        <td>
                            <div className="px-3">Patient Name</div>
                        </td>
                        <td>
                            <div className="px-3">Type</div>
                        </td>
                        <td>
                            <div className="px-3">Date & Time</div>
                        </td>
                        <td>
                            <div className="px-3">Appointment Type</div>
                        </td>
                        <td>
                            <div className="px-3">Status</div>
                        </td>
                        <td>
                            <div className="px-3">Action</div>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    {
                        [1, 2, 3, 4].map((his, idx, arr) => {
                            return <tr key={`history-${idx}`} className={`${idx !== arr.length - 1 && 'border-b'}`}>
                                <td><div className="p-3">Robert Wilson</div></td>
                                <td><div className="p-3">Annual checkup</div></td>
                                <td><div className="p-3">Mon, May 26 10:00 AM</div></td>
                                <td><div className="p-3"><div className="px-4 h-8 w-fit rounded flex items-center bg-indigo-100 text-indigo-500">Video</div></div></td>
                                <td><div className="p-3"><div className="px-4 h-8 w-fit rounded flex items-center bg-primary/10 text-primary">Completed</div></div></td>
                                <td><div className="p-3"><Button variant={'outline'} className='px-4 rounded h-8 '>Download Transcript</Button></div></td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </section>
    </div>
}

export default History