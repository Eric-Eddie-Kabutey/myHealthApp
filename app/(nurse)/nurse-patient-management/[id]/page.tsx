'use client';

import useMain from '@/app/hooks/useMain';
import PageWrapper from '@/components/PageWrapper';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import React from 'react'
import UpdateVitals from './UpdateVitals';

function PatientManagementDetails() {
    const {router, searchParams} = useMain();

    if(Boolean(searchParams.get('update'))){
        return <UpdateVitals/>
    }
    return <PageWrapper content={<>
        <section className="w-full py-[0.5rem] flex items-center justify-between gap-4 border-b">
            <div className="flex items-center gap-5">
                <button onClick={()=>window.history.back()} className="size-8 rounded-full border flex items-center justify-center">
                    <ArrowLeft className='size-4'/>
                </button>
                <p>Medical Records - Sarah Johnson</p>
            </div>
            <Button onClick={()=>router.push('?update=true')} variant={'outline'} className='border-primary px-[2rem] text-primary'>Update Vitals</Button>
        </section>

        <section className="p-4 flex flex-col gap-2 border rounded-xl">
            <p>Patient Information</p>
            <div className="flex gap-[5rem]">
                <span className="flex flex-col">
                    <small className="text-gray-500">Name:</small>
                    <small>Sarah Johnson</small>
                </span>
                <span className="flex flex-col">
                    <small className="text-gray-500">Age:</small>
                    <small>34 years</small>
                </span>
                <span className="flex flex-col">
                    <small className="text-gray-500">Room:</small>
                    <small>101A</small>
                </span>
                <span className="flex flex-col">
                    <small className="text-gray-500">Assigned Doctor:</small>
                    <small>Dr. Joshua </small>
                </span>
                <span className="flex flex-col">
                    <small className="text-gray-500">Priority:</small>
                    <small className='px-3 py-1 rounded bg-orange-100 text-orange-500'>Priority</small>
                </span>
            </div>

            <p className="mt-2">Current Vitals -  Last updated: 2025-05-29 14:30</p>
            <div className="flex gap-[5rem]">
                <span className="flex flex-col">
                    <small className="text-gray-500">Blood Pressure:</small>
                    <small>120/80</small>
                </span>
                <span className="flex flex-col">
                    <small className="text-gray-500">Heart Rate:</small>
                    <small>72 bpm</small>
                </span>
                <span className="flex flex-col">
                    <small className="text-gray-500">Temperature:</small>
                    <small>98.6°F</small>
                </span>
                <span className="flex flex-col">
                    <small className="text-gray-500">O2 Saturation:</small>
                    <small>98% </small>
                </span>
            </div>
        </section>

        <p>Medical History</p>
        <section className="w-full flex flex-col gap-3 border rounded-xl p-4">
            <span className="w-full flex items-center justify-between">
                <p>Consultation</p>
                <p>2025-05-28</p>
            </span>
            <div className="flex flex-col">
                <small className="text-gray-500">Doctor:</small>
                <small>Dr. Smith</small>
            </div>
            <div className="w-full rounded-xl bg-gray-100 flex flex-col p-4 px-5">
                <p>Note</p>
                <p className="text-gray-700">Follow-up on hypertension medication</p>
            </div>
        </section>
        <section className="w-full flex flex-col gap-3 border rounded-xl p-4">
            <span className="w-full flex items-center justify-between">
                <p>Consultation</p>
                <p>2025-05-28</p>
            </span>
            <div className="flex flex-col">
                <small className="text-gray-500">Doctor:</small>
                <small>Dr. Smith</small>
            </div>
            <div className="w-full rounded-xl bg-gray-100 flex flex-col p-4 px-5">
                <p>Note</p>
                <p className="text-gray-700">Follow-up on hypertension medication</p>
            </div>
        </section>
    </>}/>
}

export default PatientManagementDetails