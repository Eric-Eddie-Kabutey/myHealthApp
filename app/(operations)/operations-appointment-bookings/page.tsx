'use client';

import PageWrapper from '@/components/PageWrapper';
import React, { useState } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { ChevronDown, Filter, Plus, Search } from 'lucide-react';
import {
    Dialog,
    DialogContent,
    DialogTitle,
} from "@/components/ui/dialog"

function OperationsAppointments() {
    const [view, setView] = useState(false);
    return <PageWrapper content={<>
        <section className="border-b flex md:flex-row flex-col items-start  md:items-end justify-between gap-2">
            Appointment Bookings
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
            <table className="w-full text-left">
                <thead>
                    <tr className='h-10 bg-gray-100'>
                        <td><div className="px-3">Booking ID</div></td>
                        <td><div className="px-3">Patient</div></td>
                        <td><div className="px-3">Doctor</div></td>
                        <td><div className="px-3">Date & Time</div></td>
                        <td><div className="px-3">Type</div></td>
                        <td><div className="px-3">Status</div></td>
                        <td><div className="px-3">Actions</div></td>
                    </tr>
                </thead>
                <tbody>
                    {
                        [1, 2, 3, 4, 5, 6, 7].map((item, idx, arr) => {
                            return <tr key={'symptons' + idx} className={`${idx !== arr.length - 1 && 'border-b'}`}>
                                <td><div className="p-3">MC-20230615-001</div></td>
                                <td><div className="p-3">Joshua Odame</div></td>
                                <td><div className="p-3">Dr. Smith Wilson</div></td>
                                <td><div className="p-3">2025-06-0510:00 AM</div></td>
                                <td><div className="p-3">Virtual Consultation</div></td>
                                <td><div className="p-3"><div className="px-5 h-8 rounded bg-emerald-100 text-emerald-500 flex items-center w-fit">Confirmed</div></div></td>
                                <td><div className="p-3"><Button onClick={() => setView(true)} variant={'outline'} className='h-9 rounded border-primary text-primary'>View Details</Button></div></td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </section>

        {
            view ? <section className="fixed bg-black/40 flex justify-end top-0 left-0 size-full">
                <div onClick={() => setView(false)} className='absolute size-full' />
                <div className="slide-right p-4 flex flex-col gap-4 w-[500px] bg-white h-full z-10 relative">
                    <button className="size-8 absolute top-3 right-4 rounded-full border flex items-center justify-center"><Plus className='size-4 rotate-45' /></button>

                    <section className="w-full pb-4 border-b flex items-center">
                        Booking Details - MC-20230615-001
                    </section>
                    <div className="w-full flex flex-col border-b py-3">
                        <small className="text-gray-600">Patient Name</small>
                        <p>Joshua Odame</p>
                    </div>
                    <div className="w-full flex flex-col border-b py-3">
                        <small className="text-gray-600">Doctor</small>
                        <p>Dr. Joshua Odame</p>
                    </div>
                    <div className="w-full flex flex-col border-b py-3">
                        <small className="text-gray-600">Date & Time</small>
                        <p>2025-06-05 at 10:00 AM</p>
                    </div>
                    <div className="w-full flex flex-col border-b py-3">
                        <small className="text-gray-600">Type</small>
                        <p>Virtual Consultation</p>
                    </div>
                    <div className="w-full flex flex-col border-b py-3">
                        <small className="text-gray-600">Notes§</small>
                        <p>Follow-up appointment for hypertension</p>
                    </div>
                    <div className="w-full flex flex-col border-b py-3">
                        <small className="text-gray-600">Available Medical Records</small>
                        <ul>
                            <li className='list-disc ml-4'>Blood pressure readings</li>
                            <li className='list-disc ml-4'>Previous prescriptions</li>
                            <li className='list-disc ml-4'>Lab results</li>
                        </ul>
                    </div>
                </div>
            </section> : null
        }

    </>} />
}

export default OperationsAppointments