'use client';

import { useRoleGuard } from '@/app/hooks/useRoleGuard';
import PageWrapper from '@/components/PageWrapper';
import { Button } from '@/components/ui/button';
import WelcomePrompt from '@/components/WelcomePrompt';
import { ChevronRight } from 'lucide-react';
import React, { SVGProps } from 'react'


const stats = [
    {
        name: `Today's Appointments`,
        value: 3,
        icon: (props: SVGProps<SVGSVGElement>) => (
            <svg {...props} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.50033 0.833008V2.49967H11.5003V0.833008H13.167V2.49967H16.5003C16.9606 2.49967 17.3337 2.87277 17.3337 3.33301V16.6663C17.3337 17.1266 16.9606 17.4997 16.5003 17.4997H1.50033C1.04009 17.4997 0.666992 17.1266 0.666992 16.6663V3.33301C0.666992 2.87277 1.04009 2.49967 1.50033 2.49967H4.83366V0.833008H6.50033ZM15.667 9.16634H2.33366V15.833H15.667V9.16634ZM4.83366 4.16634H2.33366V7.49967H15.667V4.16634H13.167V5.83301H11.5003V4.16634H6.50033V5.83301H4.83366V4.16634Z" fill="#3762E4"/>
            </svg>
        ),
        bg: 'bg-[#3762e421]'
    },
    {
        name: 'Pending Follow-ups',
        value: 1,
        icon: (props: SVGProps<SVGSVGElement>) => (
            <svg {...props} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.00033 17.3346C4.39795 17.3346 0.666992 13.6036 0.666992 9.0013C0.666992 4.39893 4.39795 0.667969 9.00033 0.667969C13.6027 0.667969 17.3337 4.39893 17.3337 9.0013C17.3337 13.6036 13.6027 17.3346 9.00033 17.3346ZM8.16699 11.5013V13.168H9.83366V11.5013H8.16699ZM8.16699 4.83464V9.83463H9.83366V4.83464H8.16699Z" fill="#34765A"/>
            </svg>
        ),
        bg: 'bg-[#34765b24]'
    },
    {
        name: 'Triage Cases',
        value: '1',
        icon: (props: SVGProps<SVGSVGElement>) => (
            <svg {...props} viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.16634 11.7169V16.6654H7.83301V11.7169C11.1216 12.127 13.6663 14.9324 13.6663 18.332H0.333008C0.333008 14.9324 2.87775 12.127 6.16634 11.7169ZM6.99967 10.832C4.23717 10.832 1.99967 8.59453 1.99967 5.83203C1.99967 3.06953 4.23717 0.832031 6.99967 0.832031C9.76217 0.832031 11.9997 3.06953 11.9997 5.83203C11.9997 8.59453 9.76217 10.832 6.99967 10.832Z" fill="#B337E4"/>
            </svg>
        ),
        bg: 'bg-[#b337e426]'
    },
    {
        name: 'Doctor Requests',
        value: '4',
        icon: (props: SVGProps<SVGSVGElement>) => (
            <svg {...props} viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.6667 17.3346H1.33333C0.8731 17.3346 0.5 16.9616 0.5 16.5013V1.5013C0.5 1.04107 0.8731 0.667969 1.33333 0.667969H14.6667C15.1269 0.667969 15.5 1.04107 15.5 1.5013V16.5013C15.5 16.9616 15.1269 17.3346 14.6667 17.3346ZM3.83333 4.0013V7.33464H7.16667V4.0013H3.83333ZM3.83333 9.0013V10.668H12.1667V9.0013H3.83333ZM3.83333 12.3346V14.0013H12.1667V12.3346H3.83333ZM8.83333 4.83464V6.5013H12.1667V4.83464H8.83333Z" fill="#FFB412"/>
            </svg>
        ),
        bg: 'bg-[#ffb4121a]'
    },
];

const schedules = [
    {
        name: 'John Smith - Follow-up',
        time: '09:00 AM - Virtual',
        color: 'bg-blue-500'
    },
    {
        name: 'Maria Garcia - Triage',
        time: '09:00 AM - Virtual',
        color: 'bg-emerald-500'
    },
    {
        name: 'Robert Johnson - Follow-up (Urgent)',
        time: '09:00 AM - Virtual',
        color: 'bg-red-500'
    },
    {
        name: 'Lisa Wong - Initial Consultation',
        time: '09:00 AM - Virtual',
        color: 'bg-orange-500'
    },
]

function NurseDashboard() {
    useRoleGuard('dispensary');
    const [showWelcome, setShowWelcome] = React.useState(true);
    
    return <PageWrapper content={<>
        <WelcomePrompt open={showWelcome} close={() => setShowWelcome(false)} />
        <section className="w-full min-h-fit flex gap-5 overflow-x-auto">
            {
                stats.map((stat, idx)=>{
                    return <div key={`stat-${idx}`} className="rounded-xl min-w-[250px] h-[95px] border p-4 flex gap-2">
                        <aside className={`size-10 min-w-10 rounded-full flex items-center justify-center ${stat.bg}`}>
                            <stat.icon className='size-4'/>
                        </aside>
                        <aside className="flex flex-col">
                            <p>{stat.name}</p>
                            <h1 className="text-xl font-semibold">{stat.value}</h1>
                        </aside>
                    </div>
                })
            }
        </section>

        <section className="w-full flex gap-5 max-h-[330px]">
            <div className="w-full h-full flex-1 flex flex-col p-4 pt-0 overflow-y-auto border rounded-2xl">
                <aside className="w-full min-h-14 bg-white sticky top-0 flex items-center justify-between border-b">
                    <p>Appointment</p>
                    <Button variant={'outline'} className='h-8'>View All</Button>
                </aside>
                <aside className="w-full flex flex-col">
                    {
                        schedules.map((schedule, idx, arr)=>{
                            return <div key={`o-${idx}`} className={`w-full flex items-center justify-between h-16 pl-5 relative ${idx !== arr.length-1 && 'border-b'}`}>
                                <div className={`absolute left-0 h-full w-2 ${schedule.color}`}/>
                                <aside className="flex flex-col">
                                    <p>{schedule.name}</p>
                                    <small className="text-gray-500">{schedule.time}</small>
                                </aside>
                                <Button variant={'outline'} className='h-8 border-primary text-primary'>Start</Button>
                            </div>
                        })
                    }
                </aside>
            </div>
            <div className="min-w-[410px] flex flex-col p-4 pt-0 gap-2 border rounded-2xl overflow-y-auto">
                <aside className="w-full min-h-14 bg-white sticky top-0 flex items-center justify-between border-b">
                    <p>Appointment</p>
                </aside>
                <aside className="w-full flex flex-col gap-3">
                    {
                        ['Start New Triage','View Doctors Requests', 'Submit Shift Report', 'Update Availability'].map((action, idx)=>{
                            const colors = [
                                {main: 'text-indigo-500', bg: 'bg-indigo-50'},
                                {main: 'text-emerald-500', bg: 'bg-emerald-50'},
                                {main: 'text-orange-500', bg: 'bg-orange-50'},
                                {main: 'text-purple-500', bg: 'bg-purple-50'},
                            ]
                            return <div key={`u-${idx}`} className={`w-full flex items-center justify-between h-12 rounded p-4 text-sm ${colors[idx].bg} ${colors[idx].main}`}>
                                <p>{action}</p>
                                <ChevronRight className='size-5'/>
                            </div>
                        })
                    }
                </aside>
            </div>
        </section>

        <div className="w-full max-h-[350px] flex-1 p-4 pt-0 gap-2 flex flex-col border rounded-2xl overflow-y-auto">
            <aside className="w-full min-h-14 bg-white sticky top-0 flex items-center justify-between border-b">
                <p>Recent Patients</p>
                <Button variant={'outline'} className='h-8'>View All</Button>
            </aside>
            <table>
                <thead>
                    <tr className='h-10 bg-gray-100'>
                        <td><div className="px-3">Patient Name</div></td>
                        <td><div className="px-3">Last Visit</div></td>
                        <td><div className="px-3">Status</div></td>
                        <td><div className="px-3">Next Follow-up</div></td>
                        <td><div className="px-3">Action</div></td>
                    </tr>
                </thead>
                <tbody>
                    {
                        [1,2,3,4,5,6,7].map((appointment, idx, arr)=>{
                            return <tr key={`appointment-${idx}`} className={`${idx !== arr.length-1 && 'border-b'}`}>
                                <td><div className="p-3 flex items-center gap-2">
                                    Joshua Odame
                                </div></td>

                                <td><div className="p-3 flex flex-col w-[150px]">
                                    <p className="text-sm">May 15, 2023</p>
                                    <small className="text-gray-600">{idx%2===0 ? 'Follow-up consultation':'Triage'}</small>
                                </div></td>

                                <td>
                                    <div className="p-3">
                                        <div className={`px-5 h-8 w-fit rounded flex items-center ${idx%2===0?'bg-primary/10 text-primary':'bg-red-100 text-red-500'}`}>{idx%2===0 ? 'Stable':'Urgent'}</div>
                                    </div>
                                </td>
                                <td>
                                    <div className="p-3">
                                        Today, 09:00 AM
                                    </div>
                                </td>
                                <td>
                                    <div className="p-3 flex gap-3">
                                        <Button variant={'outline'} className='h-8 rounded'>View</Button>
                                        <Button variant={'outline'} className='h-8 rounded border-primary text-primary'>Start</Button>
                                    </div>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    </>}/>
}

export default NurseDashboard