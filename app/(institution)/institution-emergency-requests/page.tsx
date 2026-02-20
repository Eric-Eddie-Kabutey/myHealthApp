'use client';

import { useRoleGuard } from '@/app/hooks/useRoleGuard';
import PageWrapper from '@/components/PageWrapper';
import { Button } from '@/components/ui/button';
import { Clock, MapPin, Send } from 'lucide-react';
import React from 'react'

function InstitutionRequests() {
    useRoleGuard('institution')
    return <PageWrapper content={<>
        <section className="w-full pb-3 border-b flex items-center justify-between">
            <p className="text-base">Emergency Requests</p>
            <span className="flex items-center gap-2">
                <div className="relative flex items-center justify-center">
                    <div className='size-2 bg-red-500 rounded-full absolute'/>
                    <div className='size-2 bg-red-500 rounded-full'/>
                </div>
                Live Updates
            </span>
        </section>

        <section className="w-full flex flex-col gap-5">
            {
                [1,2,3].map((req, idx)=>{
                    return <div key={`req${idx}`} className="w-full border rounded-xl p-4 flex items-center justify-between">
                        <aside className="flex flex-col gap-2">
                            <p>Joshua Odame</p>
                            <small>Heart Attack</small>
                            <span className="text-xs flex items-center gap-2">
                                <MapPin className='size-4'/>
                                123 Main St 
                                <Clock className='size-4'/>
                                110 min ago
                                <Send className='size-4'/>
                                2.3 km
                            </span>
                        </aside>
                        <aside className="flex flex-col gap-4 items-end">
                            <div className="flex gap-3">
                                <span className="px-4 h-7 text-sm flex items-center rounded bg-orange-100 text-orange-600">High</span>
                                <span className="px-4 h-7 text-sm flex items-center rounded bg-indigo-100 text-indigo-600">Pending</span>
                            </div>
                            <div className="flex gap-3 items-end">
                                {
                                    idx === 0 ? <>
                                        <Button className='rounded bg-red-500'>Reject</Button>
                                        <Button className='rounded bg-[#4BA254]'>Accept & Dispatch</Button>
                                    </> : 
                                    idx === 1 ? <>
                                        <div className="p-2 min-w-[230px] bg-primary/10 flex flex-col text-sm">
                                            <p>Ambulance Dispatched</p>
                                            <small>ID: AMB-001</small>
                                        </div>
                                        <Button className='rounded bg-[#4BA254]'>Share Live Location</Button>
                                    </> : <>
                                        <div className="p-2 min-w-[230px] bg-red-50 text-red-500 flex flex-col text-sm">
                                            <p>Request Rejected</p>
                                            <small>Routing to next available hospital...</small>
                                        </div>
                                    </>
                                }
                            </div>
                        </aside>
                    </div>
                })
            }
        </section>
    </>}/>
}

export default InstitutionRequests