'use client';

import PageWrapper from '@/components/PageWrapper';
import { ArrowLeft, Calendar, Calendar1, User, Video } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react'

function PresciptionDetails() {
    const router = useRouter();
    return <PageWrapper content={<>
        <section className="w-full flex items-center gap-2 pb-3 border-b">
            <button onClick={()=>router.back()} className="size-12 rounded-full border flex items-center justify-center"><ArrowLeft className='size-5'/></button>
            <p className="text-base">Prescription Details</p>
        </section>

        <section className="w-full flex flex-col gap-2">
            <p>Upper Respiratory Infection</p>
            <div className="flex items-center gap-4">
                <span className="flex items-center gap-2 text-sm">
                    <Calendar1 className='size-4'/> 2024-05-20
                </span>
                <span className="flex items-center gap-2 text-sm">
                    <User className='size-4'/> Dr. Sarah Johnson
                </span>
                <span className="flex items-center gap-2 text-sm">
                    <Video className='size-4'/> Video Consultation
                </span>
            </div>
        </section>

        <section className="w-full flex flex-col gap-3 mt-4">
            <p>Prescribed Medications</p>
            <div className="w-full rounded-xl p-4 px-8 flex items-center justify-between bg-gray-100">
                <aside className="flex flex-col gap-1">
                    <p className="text-sm">Amoxicillin 500mg</p>
                    <small className="text-gray-700">3 times daily</small>
                </aside>
                <p>7 days</p>
            </div>
            <div className="w-full rounded-xl p-4 px-8 flex items-center justify-between bg-gray-100">
                <aside className="flex flex-col gap-1">
                    <p className="text-sm">Amoxicillin 500mg</p>
                    <small className="text-gray-700">3 times daily</small>
                </aside>
                <p>7 days</p>
            </div>
        </section>

        <section className="w-full flex flex-col gap-3 mt-4">
            <p>Prescribed Medications</p>
            <div className="w-full rounded-xl p-4 px-8 flex items-center justify-between bg-primary/10 text-primary">
                <p>Complete the full course of antibiotics. Return if symptoms worsen.</p>
            </div>
        </section>

    </>}/>
}

export default PresciptionDetails