'use client';

import useMain from '@/app/hooks/useMain';
import { useRoleGuard } from '@/app/hooks/useRoleGuard';
import PageWrapper from '@/components/PageWrapper'
import { setNewParams } from '@/lib/utils';
import { ArrowLeft, Calendar } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const tabs = [
    'Upcoming',
    'Past',
    'Cancelled',
]

type TabType = 'Upcoming' | 'Past' | 'Cancelled';

const history = [
    {
        doctor: 'Dr. Michael Chen',
        doctorImage: 'https://randomuser.me/api/portraits/men/32.jpg',
        mode: 'Virtual',
        specialty: 'General Practitioner',
        date: 'May 19, 2025',
        time: '10:30 AM',
        actions: [], // Past appointment, no actions
        cancelled: false,
    },
    {
        doctor: 'Dr. Michael Chen',
        doctorImage: 'https://randomuser.me/api/portraits/men/32.jpg',
        mode: 'In Person',
        specialty: 'General Practitioner',
        date: 'May 19, 2025',
        time: '10:30 AM',
        actions: [], // Past appointment, no actions
        cancelled: false,
    },
    {
        doctor: 'Dr. Sarah Lee',
        doctorImage: 'https://randomuser.me/api/portraits/women/44.jpg',
        mode: 'Virtual',
        specialty: 'Dermatologist',
        date: 'June 2, 2025',
        time: '2:00 PM',
        actions: ['Reschedule', 'Cancel'],
        cancelled: false,
    },
    {
        doctor: 'Dr. John Smith',
        doctorImage: 'https://randomuser.me/api/portraits/men/45.jpg',
        mode: 'In Person',
        specialty: 'Cardiologist',
        date: 'June 10, 2025',
        time: '9:00 AM',
        actions: [], // Past appointment, no actions
        cancelled: true,
    },
    {
        doctor: 'Dr. Emily Davis',
        doctorImage: 'https://randomuser.me/api/portraits/women/65.jpg',
        mode: 'Virtual',
        specialty: 'Pediatrician',
        date: 'June 15, 2025',
        time: '11:15 AM',
        actions: ['Reschedule', 'Cancel'],
        cancelled: false,
    },
    {
        doctor: 'Dr. Robert Brown',
        doctorImage: 'https://randomuser.me/api/portraits/men/67.jpg',
        mode: 'In Person',
        specialty: 'Orthopedic Surgeon',
        date: 'June 20, 2025',
        time: '3:45 PM',
        actions: ['Reschedule', 'Cancel'],
        cancelled: false,
    },
    {
        doctor: 'Dr. Linda White',
        doctorImage: 'https://randomuser.me/api/portraits/women/68.jpg',
        mode: 'Virtual',
        specialty: 'Psychiatrist',
        date: 'June 25, 2025',
        time: '1:30 PM',
        actions: ['Reschedule', 'Cancel'],
        cancelled: false,
    },
    {
        doctor: 'Dr. Kevin Green',
        doctorImage: 'https://randomuser.me/api/portraits/men/69.jpg',
        mode: 'In Person',
        specialty: 'ENT Specialist',
        date: 'July 1, 2025',
        time: '8:00 AM',
        actions: ['Reschedule', 'Cancel'],
        cancelled: true,
    }
]

function AppointmentHistory() {
    useRoleGuard('patient')
    const { searchParams, router } = useMain();
    const tab = searchParams.get('tab') as TabType || 'Upcoming';
    const [activeTab, setActiveTab] = React.useState<TabType>(tab);
    useEffect(()=>setActiveTab(tab), [tab]);

    const list = history.filter((h) => {
        const appointmentDate = new Date(`${h.date} ${h.time}`);
        if (activeTab === 'Upcoming') {
            return appointmentDate >= new Date() && !h.cancelled;
        } else if (activeTab === 'Past') {
            return appointmentDate < new Date();
        } else if (activeTab === 'Cancelled') {
            return h.cancelled;
        }
        return true;
    });

    return <PageWrapper content={<>
        <section className="w-full py-[0.5rem] flex items-center gap-4 border-b">
            <button onClick={()=>window.history.back()} className="size-8 rounded-full border flex items-center justify-center">
                <ArrowLeft className='size-4'/>
            </button>
            <p>Appointment History</p>
        </section>

        <section className="w-full border-b flex">
            {tabs.map((t) => (
                <button key={t} className={`pb-2 px-4 text-center ${activeTab === t ? 'border-b-2 border-primary font-semibold' : 'text-muted-foreground'}`}
                    onClick={() => {
                        router.replace(setNewParams(searchParams, 'tab', t))
                    }}>
                    {t}
                </button>
            ))}
        </section>

        <section className="main-content flex flex-col gap-4">
            {list.length === 0 ? (
                <div className="text-center text-muted-foreground py-8">No appointments found.</div>
            ) : (
                list.map((item, idx) => (
                    <div key={idx} className="border rounded-lg p-4 flex justify-between gap-2">
                        <aside className="flex gap-3">
                            <img src={item.doctorImage} alt={item.doctor} className="w-12 h-12 rounded-full object-cover" />
                            <div className="flex flex-col gap-1">
                                <p className="font-semibold">{item.doctor}</p>
                                <p className="text-sm ">{item.specialty}</p>
                                <span className="text-xs text-muted-foreground flex items-center gap-1">
                                    <Calendar className='size-3'/>
                                    <span>{item.date}</span>
                                    <span>{item.time}</span>
                                </span>
                            </div>
                        </aside>
                        <aside className="h-full flex flex-col items-end justify-between gap-2">
                            <p className="text-sm text-primary bg-primary/10 rounded px-2 py-1" >
                                {item.mode === 'Virtual' ? 'Virtual' : 'In Person'}
                            </p>
                            <div className={`gap-2 ${(activeTab === 'Cancelled' || activeTab === 'Past') ? 'hidden':'flex'}`}>
                                {item.actions.map((action, actionIdx) => (
                                    <button
                                        key={actionIdx}
                                        className={
                                            action === 'Cancel'
                                                ? "text-xs text-red-600 border border-red-600 rounded px-2 py-1 hover:bg-red-50"
                                                : action === 'Reschedule'
                                                    ? "text-xs text-black border border-gray-300 rounded px-2 py-1 hover:bg-gray-50"
                                                    : "text-xs text-primary hover:underline"
                                        }
                                    >
                                        {action}
                                    </button>
                                ))}
                            </div>
                        </aside>
                    </div>
                ))
            )}
        </section>
    </>}/>
}

export default AppointmentHistory