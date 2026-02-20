'use client';

import PageWrapper from '@/components/PageWrapper';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import routes from '@/lib/routes';
import { ArrowLeft, Mic, Video } from 'lucide-react';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import React from 'react'
import StartCall from './StartCall';

function TriageDetail() {
    const searchParams = useSearchParams();
    const startCall = searchParams.get('start-call');
    const router = useRouter();
    const params = useParams();

    if(startCall){
        return <PageWrapper content={<>
            <section className="w-full min-h-14 bg-white sticky top-0 py-[0.5rem] flex items-center gap-4 border-b">
                <button onClick={()=>window.history.back()} className="size-8 rounded-full border flex items-center justify-center">
                    <ArrowLeft className='size-4'/>
                </button>
                <p>Symptom Review</p>
            </section>
            <StartCall/>
        </>}/>
    }

    return <PageWrapper content={<>
        <section className="w-full min-h-14 bg-white sticky top-0 py-[0.5rem] flex items-center gap-4 border-b">
            <button onClick={()=>window.history.back()} className="size-8 rounded-full border flex items-center justify-center">
                <ArrowLeft className='size-4'/>
            </button>
            <p>Symptom Review</p>
        </section>
        <section className="grid grid-cols-2 flex-1 gap-5 h-full w-full xl:w-[1200px]">
            <div className="w-full h-full flex flex-col gap-5">
                <aside className="w-full border rounded-xl p-4 flex flex-col gap-4">
                    <span>Patient: Sarah Johnson</span>
                    <div className="w-full flex gap-10">
                        <span className="flex flex-col">
                            <small className='text-gray-500'>Age:</small>
                            <small>34 years</small>
                        </span>
                        <span className="flex flex-col">
                            <small className='text-gray-500'>Arrival Time:</small>
                            <small>14:30</small>
                        </span>
                    </div>
                    <div className="flex flex-col">
                        <small>Chief Complaint:</small>
                        <small className='text-gray-500'>Experiencing sharp chest pain for 2 hours</small>
                    </div>
                    <div className="flex flex-col gap-2">
                        <small>Reported Symptoms:</small>
                        <span className="flex gap-3 text-sm">
                            <div className="h-7 text-sm bg-red-50 text-red-500 rounded flex items-center px-4">Chest pain</div>
                            <div className="h-7 text-sm bg-red-50 text-red-500 rounded flex items-center px-4">Cardiac symptoms</div>
                        </span>
                    </div>
                </aside>

                <aside className="w-full border rounded-xl p-4 flex flex-col gap-3">
                    <p>Initiate Consultation - Sarah Johnson</p>
                    <Button onClick={()=>router.push(routes.nurse.triage+`/${params.id}?start-call=${'video'}`)} className='rounded gap-2 h-10 bg-blue-600 hover:bg-blue-500'><Video className='size-5'/>Start Video Session</Button>
                    <Button onClick={()=>router.push(routes.nurse.triage+`/${params.id}?start-call=${'audio'}`)} className='rounded gap-2 h-10'><Mic className='size-5'/>Start Audio Session</Button>
                </aside>
            </div>
            <div className="w-[450px] border rounded-xl p-4 flex flex-col gap-4">
                <p>Vital Signs</p>
                <form action="" className="w-full flex flex-col gap-4">
                    <div className="w-full flex flex-col gap-1">
                        <small>Temperature (°F)</small>
                        <Input type='number' placeholder='98.6' className='rounded'/>
                    </div>
                    <div className="w-full flex flex-col gap-1">
                        <small>Blood Pressure</small>
                        <Input type='number' placeholder='120/80' className='rounded'/>
                    </div>
                    <div className="w-full flex flex-col gap-1">
                        <small>Heart Rate (bpm)</small>
                        <Input type='number' placeholder='72' className='rounded'/>
                    </div>
                    <div className="w-full flex flex-col gap-1">
                        <small>Respiratory Rate</small>
                        <Input type='number' placeholder='12' className='rounded'/>
                    </div>
                    <div className="w-full flex flex-col gap-1">
                        <small>O2 Saturation (%)</small>
                        <Input type='number' placeholder='98' className='rounded'/>
                    </div>
                    <div className="w-full flex flex-col gap-1">
                        <small>Nurse Notes</small>
                        <textarea className='text-sm border rounded p-3 placeholder:text-xs' rows={4} placeholder='Enter assessment notes, patient interactions, and observations...'/>
                    </div>

                    <div className="w-full grid grid-cols-2 gap-4">
                        <Button className='rounded bg-red-500 hover:bg-red-400'>Escalate to Doctor</Button>
                        <Button className='rounded'>Save Notes</Button>
                    </div>
                </form>
            </div>
        </section>
    </>}/>
}

export default TriageDetail