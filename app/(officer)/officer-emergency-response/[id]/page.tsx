'use client';

import PageWrapper from '@/components/PageWrapper';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import React from 'react'

function EmergencyResDetails() {
    return <PageWrapper content={<>
        <section className="w-full py-[0.5rem] flex items-center justify-between gap-4 border-b">
            <span className="flex items-center gap-3">
                <button onClick={() => window.history.back()} className="size-8 rounded-full border flex items-center justify-center">
                    <ArrowLeft className='size-4' />
                </button>
                Sarah Martinez Details
            </span>
            <Button variant={'outline'} className='border-primary text-primary px-8 rounded'>Edit</Button>
        </section>

        <section className="w-full flex gap-[4rem]">
            <div className="flex flex-col">
                <small className="text-gray-600">Patient</small>
                <p>Sarah Martinex</p>
            </div>
            <div className="flex flex-col">
                <small className="text-gray-600">Diagnosis</small>
                <p>Acute Myocardial Infarction</p>
            </div>
            <div className="flex flex-col">
                <small className="text-gray-600">Patient ID</small>
                <p>P-4567</p>
            </div>
            <div className="flex flex-col">
                <small className="text-gray-600">Age</small>
                <p>34 years</p>
            </div>
        </section>

        <section className="flex gap-5">
            <div className="p-4 bg-gray-100 flex flex-col gap-1 min-w-[270px] rounded">
                <p>Current Vitals</p>
                <span className="text-sm flex justify-between items-center text-gray-600">
                    BP: 180/110
                    <span>HR: 120 bpm</span>
                </span>
                <span className="text-sm flex justify-between items-center text-gray-600">
                    Temp: 37.2°C
                    <span>O2 Sat: 89%</span>
                </span>
            </div>
            <div className="p-4 bg-gray-100 flex flex-col gap-1 min-w-[300px] rounded text-nowrap">
                <p>Requesting Physician</p>
                <span className="text-sm flex justify-between items-center text-gray-600">
                    Name: Dr. James Adebayo
                    {/* <span>HR: 120 bpm</span> */}
                </span>
                <span className="text-sm flex justify-between items-center text-gray-600">
                    Phone Number: +234-801-234-5678
                    {/* <span>HR: 120 bpm</span> */}
                </span>
            </div>
            <div className="p-4 bg-gray-100 flex flex-col gap-1 w-full rounded">
                <p>Route</p>
                <span className="text-sm flex justify-between items-center text-gray-600">
                    General Hospital Lagos → Cardiac Center Abuja
                    {/* <span>HR: 120 bpm</span> */}
                </span>
            </div>
        </section>

        <section className="flex flex-col gap-1">
            <p>Consultation History</p>
            <div className="w-full bg-gray-100 p-4 flex flex-col gap-1">
                <span className="flex items-center gap-5">2025-05-31     <span className='text-gray-600'>by Dr. Adebayo</span></span>
                <span className="flex items-center gap-1">Diagnosis: <span className='text-gray-600'> STEMI</span></span>
                <span className="flex items-center gap-1">Treatment: <span className='text-gray-600'>Thrombolysis initiated</span></span>
            </div>
        </section>
        <section className="flex flex-col gap-1">
            <div className="w-full bg-gray-100 p-4 flex flex-col gap-1">
                <span className="flex items-center gap-5">2025-05-31     <span className='text-gray-600'>by Dr. Adebayo</span></span>
                <span className="flex items-center gap-1">Diagnosis: <span className='text-gray-600'> STEMI</span></span>
                <span className="flex items-center gap-1">Treatment: <span className='text-gray-600'>Thrombolysis initiated</span></span>
            </div>
        </section>

        <section className="w-full flex justify-end gap-5">
            <Button variant={'outline'} className='border-red-600 text-red-600 px-10 rounded h-10'>Deny</Button>
            <Button className='rounded px-10 h-10'>Approve</Button>
        </section>
    </>}/>
}

export default EmergencyResDetails