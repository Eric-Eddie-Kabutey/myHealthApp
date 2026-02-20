'use client';


import { Button } from '@/components/ui/button';
import React from 'react'

function Availability() {
    return <div className='main-content w-full flex flex-col gap-4'>
        <section className="w-full pb-2 border-b flex items-center justify-between">
            <div className="flex flex-col">
                <p className="text-sm">Working Hours</p>
                <small>Set your availability for patient bookings</small>
            </div>
            <Button className='px-8'>Edit Hours</Button>
        </section>

        <section className="flex flex-col gap-2">
            {
                [1,2,3,4,5,6].map((time, idx)=>{
                    return <div key={`available-${idx}`} className="w-full py-3 border-b flex items-center justify-between gap-3 px-[2rem]">
                        <aside className="flex items-center gap-[2rem]">
                            <p>Monday</p>
                            <div className="px-4 h-8 flex items-center rounded bg-emerald-100 text-emerald-500">Available</div>
                        </aside>
                        <span>9:00AM - 5:00PM</span>
                    </div>
                })
            }
        </section>
    </div>
}

export default Availability