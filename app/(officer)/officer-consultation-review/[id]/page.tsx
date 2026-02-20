'use client';

import PageWrapper from '@/components/PageWrapper';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Download } from 'lucide-react';
import React, { useState } from 'react'
import EditConsultationDetails from './Includes/EditConsultationDetails';

function ConsultationDetails() {
    const [editConsultation, setEditConsultation] = useState(false)
    return <PageWrapper content={<>
        <section className="w-full pb-2 border-b flex items-center justify-between gap-2">
            <button onClick={()=>window.history.back()} className="size-12 rounded-full border flex items-center justify-center">
                <ArrowLeft className='size-5'/>
            </button>
            <Button onClick={()=>setEditConsultation(true)} variant={'outline'} className='rounded px-8 border-primary text-primary'>Edit</Button>
        </section>

        <section className="py-2 flex items-center gap-[5rem]">
            <div className="flex flex-col">
                <small className="text-gray-600">Patient</small>
                <p className="">Sarah Johnson</p>
            </div>
            <div className="flex flex-col">
                <small className="text-gray-600">Healthcare Provider</small>
                <p className="">Dr. Michael Chen</p>
            </div>
            <div className="flex flex-col">
                <small className="text-gray-600">Date & Time</small>
                <p className="">2025-05-30 at 09:30 AM</p>
            </div>
            <div className="flex flex-col">
                <small className="text-gray-600">Duration</small>
                <p className="">45 min</p>
            </div>
        </section>

        <section className="w-full gray-100 p-4 rounded-lg flex flex-col gap-1 bg-gray-100">
            <p className="text-sm">Consultation Summary</p>
            <small className="text-gray-600">Patient presented with chest pain and shortness of breath. Vital signs stable. Recommended ECG and chest X-ray.</small>
        </section>
        <section className="w-full gray-100 p-4 rounded-lg flex flex-col gap-1 bg-gray-100">
            <p className="text-sm">Prescription Notes</p>
            <small className="text-gray-600">Aspirin 81mg daily, Nitroglycerin as needed</small>
        </section>
        <section className="w-full gray-100 p-4 rounded-lg flex flex-col gap-1 bg-gray-100">
            <p className="text-sm">Clinical Notes</p>
            <small className="text-gray-600">Patient has history of hypertension. Monitor closely for cardiac events.</small>
        </section>
        <section className="w-full gray-100 p-4 rounded-lg flex flex-col gap-1.5 bg-gray-100">
            <p className="text-sm">Attached Files</p>
            <span className="flex gap-4">
                <Button variant={'outline'} className='text-xs h-8 rounded bg-gray-200 border-gray-500'>ECG_report.pdf <Download className='size-5'/></Button>
                <Button variant={'outline'} className='text-xs h-8 rounded bg-gray-200 border-gray-500'>chest_xray.jpg <Download className='size-5'/></Button>
            </span>
        </section>
        <section className="w-full gray-100 rounded-lg flex flex-col gap-1.5">
            <p className="text-sm">Final Review Comments</p>
            <textarea rows={4} placeholder='Add comments...' className="w-full border p-3 rounded-lg text-sm"/>
        </section>
        <div className="py-3 flex justify-end gap-4">
            <Button variant={'outline'} className={`rounded px-6 text-sm`}>Escalate to Super Admin</Button>
            <Button className={`rounded px-6 text-sm`}>Save Review</Button>
        </div>

        <EditConsultationDetails open={editConsultation} close={()=>setEditConsultation(false)}/>
    </>}/>
}

export default ConsultationDetails