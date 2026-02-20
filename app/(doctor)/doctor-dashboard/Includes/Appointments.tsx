'use client';

import { Button } from '@/components/ui/button';
import { User, Video } from 'lucide-react';
import React, { SVGProps } from 'react'

const stats = [
    {
        name: 'Appointments',
        value: 30,
        icon: (props: SVGProps<SVGSVGElement>) => (
            <svg {...props} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.667969 9.16536H17.3346V16.6654C17.3346 17.1256 16.9616 17.4987 16.5013 17.4987H1.5013C1.04107 17.4987 0.667969 17.1256 0.667969 16.6654V9.16536ZM13.168 2.4987H16.5013C16.9616 2.4987 17.3346 2.8718 17.3346 3.33203V7.4987H0.667969V3.33203C0.667969 2.8718 1.04107 2.4987 1.5013 2.4987H4.83464V0.832031H6.5013V2.4987H11.5013V0.832031H13.168V2.4987Z" fill="#3762E4"/>
            </svg>
        ),
        bg: 'bg-[#3762e421]'
    },
    {
        name: 'Total Patients',
        value: 142,
        icon: (props: SVGProps<SVGSVGElement>) => (
            <svg {...props} width="17" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.66536 11.8754V18.332H0.332031C0.332031 14.6501 3.3168 11.6654 6.9987 11.6654C7.5742 11.6654 8.1327 11.7383 8.66536 11.8754ZM6.9987 10.832C4.2362 10.832 1.9987 8.59453 1.9987 5.83203C1.9987 3.06953 4.2362 0.832031 6.9987 0.832031C9.7612 0.832031 11.9987 3.06953 11.9987 5.83203C11.9987 8.59453 9.7612 10.832 6.9987 10.832ZM11.9987 14.1654V11.6654H13.6654V14.1654H16.1654V15.832H13.6654V18.332H11.9987V15.832H9.4987V14.1654H11.9987Z" fill="#34765A"/>
            </svg>
        ),
        bg: 'bg-[#34765b25]'
    },
    {
        name: 'Monthly Earnings',
        value: '$8,750',
        icon: (props: SVGProps<SVGSVGElement>) => (
            <svg {...props} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.00523 17.3346C4.40284 17.3346 0.671875 13.6037 0.671875 9.00126C0.671875 4.39893 4.40284 0.667969 9.00523 0.667969C13.6076 0.667969 17.3386 4.39893 17.3386 9.00126C17.3386 13.6037 13.6076 17.3346 9.00523 17.3346ZM6.08854 10.6679V12.3346H8.17189V14.0013H9.83856V12.3346H10.6719C11.8225 12.3346 12.7552 11.4019 12.7552 10.2513C12.7552 9.10068 11.8225 8.16793 10.6719 8.16793H7.33856C7.10843 8.16793 6.92188 7.98143 6.92188 7.75126C6.92188 7.52118 7.10843 7.33459 7.33856 7.33459H11.9219V5.66797H9.83856V4.0013H8.17189V5.66797H7.33856C6.18795 5.66797 5.25521 6.6007 5.25521 7.75126C5.25521 8.90193 6.18795 9.83459 7.33856 9.83459H10.6719C10.902 9.83459 11.0886 10.0212 11.0886 10.2513C11.0886 10.4814 10.902 10.6679 10.6719 10.6679H6.08854Z" fill="#B337E4"/>
            </svg>
        ),
        bg: 'bg-[#b337e423]'
    },
    {
        name: 'Rating',
        value: 4.8,
        icon: (props: SVGProps<SVGSVGElement>) => (
            <svg {...props} viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.99887 15.218L4.121 18.5081L5.43377 11.9012L0.488281 7.3278L7.17748 6.53469L9.99887 0.417969L12.8202 6.53469L19.5094 7.3278L14.564 11.9012L15.8767 18.5081L9.99887 15.218Z" fill="#FFB412"/>
            </svg>
        ),
        bg: 'bg-[#f59e4220]'
    },
]

function Appointments() {
    return <div className='main-content w-full flex flex-col gap-4'>
        <section className="w-full flex gap-5 overflow-x-auto">
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

        <section className="w-full flex gap-5">
            <div className="w-full h-[350px] flex-1 p-4 pt-0 flex flex-col border rounded-2xl overflow-y-auto">
                <aside className="w-full min-h-14 bg-white sticky top-0 flex items-center justify-between border-b">
                    <p>Appointment</p>
                    <Button variant={'outline'} className='h-8'>View All</Button>
                </aside>
                <table>
                    <thead>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            [1,2,3,4,5,6,7].map((appointment, idx, arr)=>{
                                return <tr key={`appointment-${idx}`} className={`${idx !== arr.length-1 && 'border-b'}`}>
                                    <td><div className="p-3 flex items-center gap-2">
                                        <div className="size-10 border bg-gray-100 flex items-center justify-center rounded-full text-sm">
                                            JO
                                        </div>
                                        <div className="flex flex-col">
                                            <p className="text-sm">Joshua Odame</p>
                                            <small className="text-gray-600">Regular Checkup</small>
                                        </div>
                                    </div></td>

                                    <td><div className="p-3 flex flex-col w-[150px]">
                                        <p className="text-sm">Today</p>
                                        <small className="text-gray-600">4:50pm - 5:00pm</small>
                                    </div></td>

                                    <td>
                                        <div className="p-3">
                                            {
                                                idx%2 === 0 ? <aside className="px-4 h-8 flex items-center rounded gap-2 bg-indigo-100 text-indigo-600 w-[110px]">
                                                    <Video className='size-4'/>
                                                    <small className='leading-0'>Video</small>
                                                </aside> : <aside className="px-4 h-8 flex items-center rounded gap-2 bg-primary/10 text-primary w-[110px]">
                                                    <User className='size-4'/>
                                                    <small className='leading-0'>In-person</small>
                                                </aside>
                                            }
                                        </div>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
            <div className="min-w-[400px] h-[350px] flex p-4 flex-col pt-0 border rounded-2xl overflow-y-auto">
                <aside className="w-full min-h-14 bg-white sticky top-0 flex items-center justify-between border-b">
                    <p>Recent Patients</p>
                    <Button variant={'outline'} className='h-8'>View All</Button>
                </aside>
                <aside className="flex flex-col gap-2 py-3">
                    {
                        [1,2,3,4,5,6,7,8].map((patient, idx, arr)=>{
                            return <div key={`patient-${idx}`} className={`w-full p-2 flex gap-2 items-center ${idx !== arr.length-1 && 'border-b'}`}>
                                <div className="size-10 border border-purple-600 bg-purple-100 text-purple-600 flex items-center justify-center rounded-full text-sm">
                                    JO
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-sm">Joshua Odame</p>
                                    <small className="text-gray-500">Last visit: 2 days ago</small>
                                </div>
                            </div>
                        })
                    }
                </aside>
            </div>
        </section>


        <section className="w-full flex gap-5">
            <div className="w-full h-[350px] flex-1 p-4 pt-0 flex flex-col border rounded-2xl overflow-y-auto">
                <aside className="w-full min-h-14 bg-white sticky top-0 flex items-center justify-between border-b">
                    <p>Recent Activity</p>
                    <Button variant={'outline'} className='h-8'>View All</Button>
                </aside>
                <aside className="flex flex-col gap-2 py-3">
                    {
                        [1,2,3,4,5,6,7,8].map((patient, idx, arr)=>{
                            return <div key={`patient-${idx}`} className={`w-full p-2 flex justify-between gap-2 items-center ${idx !== arr.length-1 && 'border-b'}`}>
                                
                                <div className="flex flex-col">
                                    <p className="text-sm">Joshua Odame</p>
                                    <small className="text-gray-500">Last visit: 2 days ago</small>
                                </div>
                                <p className="text-gray-700 text-sm">2 hours ago</p>
                            </div>
                        })
                    }
                </aside>
            </div>
            <div className="min-w-[400px] h-[350px] flex p-4 flex-col pt-0 border rounded-2xl overflow-y-auto">
                <aside className="w-full min-h-14 bg-white sticky top-0 flex items-center justify-between border-b">
                    <p>Earnings Summary</p>
                    {/* <Button variant={'outline'} className='h-8'>View All</Button> */}
                </aside>
                <aside className="flex flex-col gap-2 py-3">
                    <div className="flex flex-col">
                        <h1 className="text-xl">$8,750</h1>
                        <small className="text-gray-600">Earnings this month</small>
                    </div>

                    <div className="w-full flex flex-col gap-1 my-1">
                        <span className="w-full flex items-center justify-between text-gray-500 text-[13px]">
                            Consultations
                            <span className="text-black">$6,200</span>
                        </span>
                        <div className="overflow-hidden bg-gray-100 flex h-2 rounded-2xl"><div className={`h-full w-[70%] bg-primary transition-all`}/></div>
                    </div>
                    <div className="w-full flex flex-col gap-1 my-1">
                        <span className="w-full flex items-center justify-between text-gray-500 text-[13px]">
                            Procedures
                            <span className="text-black">$2,000</span>
                        </span>
                        <div className="overflow-hidden bg-gray-100 flex h-2 rounded-2xl"><div className={`h-full w-[90%] bg-primary transition-all`}/></div>
                    </div>
                    <div className="w-full flex flex-col gap-1 my-1">
                        <span className="w-full flex items-center justify-between text-gray-500 text-[13px]">
                            Others
                            <span className="text-black">$550</span>
                        </span>
                        <div className="overflow-hidden bg-gray-100 flex h-2 rounded-2xl"><div className={`h-full w-[30%] bg-primary transition-all`}/></div>
                    </div>
                </aside>
            </div>
        </section>
    </div>
}

export default Appointments