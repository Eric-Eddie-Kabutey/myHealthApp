'use client'

import PageWrapper from '@/components/PageWrapper'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Download, Plus} from 'lucide-react'
import React, { useState } from 'react'
import AppointmentVideoCall from './AppointmentVideoCall'
import {
    Dialog,
    DialogContent,
    DialogTitle,
  } from "@/components/ui/dialog"
import { useSearchParams } from 'next/navigation'
import AppointmentChat from './AppointmentChat'
import AppointmentVoiceCall from './AppointmentVoiceCall'
import AppointmentNotes from './AppointmentNotes'

function DoctorAppointmentDetail() {
    const searchParams = useSearchParams();
    const appointmentType = searchParams.get('type') || 'Virtual';
    const method = searchParams.get('method') || 'Video Call'
    const [complete, setComplete] = useState(false)

    return <PageWrapper content={<>
        <section className="w-full pb-3 border-b flex items-center gap-4 justify-between">
            <div className="flex items-center gap-4">
                <button onClick={()=>window.history.back()} className="size-12 rounded-full border flex items-center justify-center"><ArrowLeft className='size-5'/></button>
                <p>Active Consultation</p>
            </div>
            <div className="w-fit flex flex-col items-end">
                <p>Joshua Odame</p>
                <small className="text-gray-600">Video Consultation</small>
            </div>
        </section>

        <section className="w-full lg:w-[1024px] grid grid-cols-2 gap-5">
            <div className="w-full border rounded-2xl p-4 flex flex-col gap-4">
                <p>Patient Information</p>
                <aside className="w-full flex flex-col gap-2 text-sm">
                    <span className="w-full flex items-center justify-between text-gray-600">
                        Patient Name
                        <span className="text-black">Joshua Odame</span>
                    </span>
                    <span className="w-full flex items-center justify-between text-gray-600">
                        Age
                        <span className="text-black">45 years</span>
                    </span>
                    <span className="w-full flex items-center justify-between text-gray-600">
                        Allergies
                        <span className="text-red-500">Penicillin, Shellfish</span>
                    </span>
                    <span className="w-full flex items-center justify-between text-gray-600">
                        Chronic Conditions
                        <span className="text-red-500">Hypertension, Diabetes Type 2</span>
                    </span>
                    <span className="w-full flex items-center justify-between text-gray-600">
                        Last Visit
                        <span className="text-black">2024-04-15</span>
                    </span>
                </aside>
            </div>
            <div className="w-full border rounded-2xl p-4 flex flex-col gap-4">
                <p>Recent Lab Results</p>
                <aside className="w-full flex flex-col gap-2 text-sm">
                    <span className="w-full flex items-center justify-between text-gray-600">
                        Analyte
                        <span className="text-black">Blood Glucose</span>
                    </span>
                    <span className="w-full flex items-center justify-between text-gray-600">
                        Value
                        <span className="text-red-500">145 mg/dL (High)</span>
                    </span>
                    <span className="w-full flex items-center justify-between text-gray-600">
                        Date
                        <span className="text-black">2024-04-10</span>
                    </span>
                </aside>
            </div>
        </section>

        {
            appointmentType === 'Virtual' && method === 'Video Call' ? <AppointmentVideoCall/> :
            appointmentType === 'Virtual' && method === 'Chat' ? <AppointmentChat/> :
            appointmentType === 'Virtual' && method === 'Voice Call' ? <AppointmentVoiceCall/> : <AppointmentVideoCall/>
        }

        <AppointmentNotes/>
        
    </>}/>
}

export default DoctorAppointmentDetail