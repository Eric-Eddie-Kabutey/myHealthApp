'use client';

import AppointmentNotes from '@/app/(doctor)/doctor-appointments/[id]/AppointmentNotes';
import AppointmentVideoCall from '@/app/(doctor)/doctor-appointments/[id]/AppointmentVideoCall';
import AppointmentVoiceCall from '@/app/(doctor)/doctor-appointments/[id]/AppointmentVoiceCall';
import { useSearchParams } from 'next/navigation';
import React from 'react'

function StartCall() {
    const searchParams = useSearchParams();
    const callType = searchParams.get('start-call') as 'video'|'audio';

    return <div className="main-content w-full flex flex-col gap-5">
        <section className="w-full border p-4 flex flex-col gap-4">
            <p>Patient File</p>
            <div className="flex gap-10">
                <aside className="w-[300px] flex flex-col gap-4">
                    <span className="flex gap-10">
                        <div className="flex flex-col">
                            <small className="text-gray-500">Name:</small>
                            <small>Joshua Odame</small>
                        </div>
                        <div className="flex flex-col">
                            <small className="text-gray-500">Age:</small>
                            <small>34 years</small>
                        </div>
                    </span>
                    <div className="flex flex-col">
                        <small>Chief Complaint:</small>
                        <small className="text-gray-500">Experiencing sharp chest pain for 2 hours</small>
                    </div>
                    <div className="flex flex-col gap-2">
                        <small>Reported Symptoms:</small>
                        <span className="flex gap-3 text-sm">
                            <div className="h-7 text-sm bg-red-50 text-red-500 rounded flex items-center px-4">Chest pain</div>
                            <div className="h-7 text-sm bg-red-50 text-red-500 rounded flex items-center px-4">Cardiac symptoms</div>
                        </span>
                    </div>
                </aside>
                <aside className="flex flex-col gap-4">
                    <div className="flex flex-col">
                        <small className="text-gray-500">Arrival Time:</small>
                        <small>14:30</small>
                    </div>
                    <div className="flex flex-col gap-2">
                        <small>Current Vitals:</small>
                        <small className="text-gray-500">Temperature: Not recorded</small>
                        <small className="text-gray-500">BP: Not recorded</small>
                        <small className="text-gray-500">BP: Not recorded</small>
                        <small className="text-gray-500">BP: Not recorded</small>
                        <small className="text-gray-500">BP: Not recorded</small>
                    </div>
                </aside>
            </div>
        </section>
        {
            callType === 'audio' ? <AppointmentVoiceCall/>:
            <AppointmentVideoCall/>
        }
        <AppointmentNotes/>
    </div>
}

export default StartCall