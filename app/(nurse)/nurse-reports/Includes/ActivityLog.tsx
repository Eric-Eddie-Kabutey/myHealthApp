'use client';

import PageWrapper from '@/components/PageWrapper';
import React from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { ChevronDown, Filter, Search } from 'lucide-react';

function ActivityLog() {
    return <PageWrapper content={<>
        <section className="border-b flex md:flex-row flex-col items-start  md:items-end justify-between gap-2">
            <div className="flex flex-col">
                <p>Activity Log</p>
                <small className="text-gray-600">View all your personal actions with time tracking for transparency</small>
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

        <section className="w-full overflow-x-auto">
            <table className="w-full text-left text-sm">
                <thead>
                    <tr className="h-10 bg-gray-100">
                        <td><div className="px-3">Activity</div></td>
                        <td><div className="px-3">Patient Name & Room</div></td>
                        <td><div className="px-3">Date & Time</div></td>
                        <td><div className="px-3">Personal Action</div></td>
                    </tr>
                </thead>
                <tbody>
                    {
                        [1, 2, 3, 4, 5].map((log, idx) => {
                            return <tr key={`log-${idx}`} className="border-b">
                                <td><div className="p-3">
                                    Updated patient medication record
                                </div></td>
                                <td><div className="p-3">
                                    John Doe - Room 101
                                </div></td>
                                <td><div className="p-3">
                                    29/05/2025, 14:30:15
                                </div></td>
                                <td><div className="p-3">
                                    <div className={`px-4 h-7 text-xs rounded flex items-center w-fit ${idx % 2 !== 0 ? 'bg-emerald-50 text-emerald-500' : 'text-indigo-500 bg-indigo-50'}`}>{idx % 2 === 0 ? 'Edit' : 'Submission'}</div>
                                </div></td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </section>
    </>} />
}

export default ActivityLog