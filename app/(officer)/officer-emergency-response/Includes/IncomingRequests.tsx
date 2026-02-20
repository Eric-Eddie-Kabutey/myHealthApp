'use client';

import useMain from '@/app/hooks/useMain';
import { Button } from '@/components/ui/button';
import routes from '@/lib/routes';
import { Clock, LineChart, MapPin } from 'lucide-react';
import React from 'react'

function IncomingRequests() {
    const {router} = useMain();
    return (
        <div className='main-content flex flex-col gap-4'>
            <section className="w-full flex flex-col gap-5">
                {
                    [1, 2, 3, 4, 5].map((consult, idx) => {
                        return <div key={`consultation-${idx}`} className="p-4 flex flex-col gap-2 border rounded-lg">
                            <aside className="flex items-center justify-between">
                                <div className="flex flex-col gap-1">
                                    <span>Sarah Johnson <span className="mx-2 px-2 py-1.5 bg-orange-100 text-orange-700 rounded-lg text-sm">Pending</span></span>
                                    <small className="text-gray-600">Dr. Michael Chen</small>
                                    <span className="text-sm flex items-center gap-1 text-gray-500"><LineChart className='size-4' /> Acute Myocardial Infarction</span>
                                    <span className="text-sm flex items-center gap-1 text-gray-500"><Clock className='size-4' /> 2025-05-31 14:30</span>
                                    <span className="text-sm flex items-center gap-1 text-gray-500"><MapPin className='size-4' /> General Hospital Lagos → Cardiac Center Abuja</span>
                                </div>
                                <Button onClick={() => router.push(routes.officer.emergency + `/${idx}`)} variant={'outline'} className='rounded border-primary text-primary'>View details</Button>
                            </aside>
                        </div>
                    })
                }
            </section>
        </div>
    )
}

export default IncomingRequests