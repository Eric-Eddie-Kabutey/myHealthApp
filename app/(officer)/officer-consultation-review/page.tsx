'use client';

import PageWrapper from '@/components/PageWrapper';
import React from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Calendar, ChevronDown, Search } from 'lucide-react';
import useMain from '@/app/hooks/useMain';
import routes from '@/lib/routes';

function OfficerConsultationReview() {
    const { router } = useMain();

    return <PageWrapper content={<>
        <section className="border-b flex md:flex-row flex-col items-start  md:items-end justify-between gap-2">
            <div className="flex flex-col">
                <p className='text-base'>Consultation Tracker</p>
            </div>
            <div className="flex gap-2">
                <aside className="rounded-lg w-[300px] px-2 h-10 border flex items-center gap-2">
                    <Search className='size-5' />
                    <input type="text" placeholder='Search...' className="border-none outline-none text-sm w-full h-full" />
                </aside>
                {
                    ['All Status'].map((filter, idx) => {
                        return <Popover key={`filter-${idx}`}>
                            <PopoverTrigger asChild>
                                <Button variant="outline" className='flex items-center gap-3 h-10 rounded-lg'>
                                    {filter}
                                    <ChevronDown className='size-5' />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent side={'bottom'} className="w-[300px] text-[14px] flex flex-col gap-3 mr-12 rounded-lg px-6">

                            </PopoverContent>
                        </Popover>
                    })
                }
            </div>
        </section>

        <section className="w-full flex flex-col gap-5">
            {
                [1, 2, 3, 4, 5].map((consult, idx) => {
                    return <div key={`consultation-${idx}`} className="p-4 flex flex-col gap-2 border rounded-lg">
                        <aside className="flex items-center justify-between">
                            <div className="flex flex-col gap-1">
                                <span>Sarah Johnson <span className="mx-2 px-2 py-1.5 bg-orange-100 text-orange-700 rounded-lg text-sm">Pending</span> <span className="text-sm text-gray-600">45 mins ID: C001</span></span>
                                <small className="text-gray-600">Dr. Michael Chen</small>
                                <span className="text-sm flex items-center gap-1 text-gray-500"><Calendar className='size-4' /> 2025-05-30 at 09:30 AM</span>
                            </div>
                            <Button onClick={() => router.push(routes.officer.consultation + `/${idx}`)} variant={'outline'} className='rounded border-primary text-primary'>View details</Button>
                        </aside>
                        <aside className="bg-gray-100 p-3 flex flex-col w-full">
                            <small>General Consultations</small>
                            <small className="text-gray-600">Patient presented with chest pain and shortness of breath. Vital signs stable. Recommended ECG and chest X-ray.</small>
                        </aside>
                    </div>
                })
            }
        </section>
    </>} />
}

export default OfficerConsultationReview