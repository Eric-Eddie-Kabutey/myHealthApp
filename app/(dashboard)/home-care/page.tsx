'use client';

import EmptyIcon from '@/app/assets/images/emptyIcon';
import PageWrapper from '@/components/PageWrapper';
import { Button } from '@/components/ui/button';
import { ChevronDown, Search } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

import React, { useState } from 'react'
import BookAppointment from './Includes/BookAppointment';

function HomeCare() {
    const [newAppointment, setNewAppointment] = useState('')
    return <PageWrapper content={<>
        <section className="border-b flex md:flex-row flex-col items-start  md:items-end justify-between gap-2">
            <div className="flex flex-col">
                <p className="text-base">My Appointments</p>
                <p className="text-gray-600">Professional healthcare at your doorstep</p>
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
                <Button onClick={() => setNewAppointment('Book Appointment')} className='rounded'>Book Appointment</Button>
            </aside>
        </section>
        {
            false ?
                <section className="h-full pt-[10dvh] flex flex-col items-center justify-center gap-2">
                    <EmptyIcon className='size-[8rem]' />
                    <p>You haven’t booked any appointment </p>
                    <p className="text-sm w-[250px] text-center text-gray-600">Click the button below to book an appointment</p>
                    <Button onClick={() => setNewAppointment('Book Appointment')} className='rounded px-[3rem]'>Book Appointment</Button>
                </section> : <>


                    <section className="w-full overflow-x-auto text-sm">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-gray-100 h-10">
                                    <td><div className="px-3">Provider Type</div></td>
                                    <td><div className="px-3">Urgency</div></td>
                                    <td><div className="px-3">Date & Time</div></td>
                                    <td><div className="px-3">Address</div></td>
                                    <td><div className="px-3">Medical Condition/Reason</div></td>
                                    <td><div className="px-3">Action</div></td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    [1, 2, 3, 4].map((appointment, idx, arr) => {
                                        return <tr key={`appointment-${idx}`} className={`${idx !== arr.length - 1 && 'border-b'} text-sm`}>
                                            <td><div className="p-3">Doctor Home Visit</div></td>
                                            <td><div className="p-3">Emergency</div></td>
                                            <td><div className="p-3">05-20-2025   12:30 PM</div></td>
                                            <td><div className="p-3">14 Allen, New York</div></td>
                                            <td><div className="p-3">Wound dressing and healing assessment</div></td>
                                            <td><div className="p-3"><Button onClick={() => setNewAppointment('Reschedule Appointment')} variant={'outline'} className='h-8'>Reschedule</Button></div></td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </section>
                </>
        }

        <BookAppointment open={newAppointment} close={() => setNewAppointment('')} />
    </>} />
}

export default HomeCare