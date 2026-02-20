'use client';

import PageWrapper from '@/components/PageWrapper';
import { Button } from '@/components/ui/button';
import React, { SVGProps } from 'react'

const stats = [
    {
        name: 'Total Bookings',
        value: 3,
        icon: (props: SVGProps<SVGSVGElement>) => (
            <svg {...props} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.50033 0.833008V2.49967H11.5003V0.833008H13.167V2.49967H16.5003C16.9606 2.49967 17.3337 2.87277 17.3337 3.33301V16.6663C17.3337 17.1266 16.9606 17.4997 16.5003 17.4997H1.50033C1.04009 17.4997 0.666992 17.1266 0.666992 16.6663V3.33301C0.666992 2.87277 1.04009 2.49967 1.50033 2.49967H4.83366V0.833008H6.50033ZM15.667 9.16634H2.33366V15.833H15.667V9.16634ZM4.83366 4.16634H2.33366V7.49967H15.667V4.16634H13.167V5.83301H11.5003V4.16634H6.50033V5.83301H4.83366V4.16634Z" fill="#3762E4"/>
            </svg>
        ),
        bg: 'bg-[#3762e421]'
    },
    {
        name: 'Support Requests',
        value: 1,
        icon: (props: SVGProps<SVGSVGElement>) => (
            <svg {...props} viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.3337 13.1688C17.3328 15.5612 15.6517 17.5608 13.4063 18.0517L12.8747 16.4567C13.878 16.2929 14.7307 15.6812 15.2211 14.8337H13.167C12.2465 14.8337 11.5003 14.0875 11.5003 13.167V9.83366C11.5003 8.91316 12.2465 8.16699 13.167 8.16699H15.6154C15.2053 4.8784 12.4 2.33366 9.00033 2.33366C5.60064 2.33366 2.79532 4.8784 2.38523 8.16699H4.83366C5.75413 8.16699 6.50033 8.91316 6.50033 9.83366V13.167C6.50033 14.0875 5.75413 14.8337 4.83366 14.8337H2.33366C1.41318 14.8337 0.666992 14.0875 0.666992 13.167V9.00033C0.666992 4.39795 4.39795 0.666992 9.00033 0.666992C13.6027 0.666992 17.3337 4.39795 17.3337 9.00033V9.83258V9.83366V13.167V13.1688ZM15.667 13.167V9.83366H13.167V13.167H15.667ZM2.33366 9.83366V13.167H4.83366V9.83366H2.33366Z" fill="#34765A"/>
            </svg>
            
        ),
        bg: 'bg-[#34765b24]'
    },
    {
        name: 'Pending Actions',
        value: '1',
        icon: (props: SVGProps<SVGSVGElement>) => (
            <svg {...props} viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.99967 2.33366H0.333008V0.666992H13.6663V2.33366H11.9997V4.00033C11.9997 5.34652 11.3195 6.42923 10.4631 7.31422C9.87734 7.91949 9.16467 8.47699 8.44209 9.00033C9.16467 9.52366 9.87734 10.0812 10.4631 10.6864C11.3195 11.5714 11.9997 12.6542 11.9997 14.0003V15.667H13.6663V17.3337H0.333008V15.667H1.99967V14.0003C1.99967 12.6542 2.67981 11.5714 3.53626 10.6864C4.12202 10.0812 4.83469 9.52366 5.55726 9.00033C4.83469 8.47699 4.12202 7.91949 3.53626 7.31422C2.67981 6.42923 1.99967 5.34652 1.99967 4.00033V2.33366ZM3.66634 2.33366V4.00033C3.66634 4.73747 4.02787 5.42559 4.73392 6.15518C5.33967 6.78115 6.12867 7.36683 6.99967 7.98208C7.87067 7.36683 8.65967 6.78115 9.26542 6.15518C9.97151 5.42559 10.333 4.73747 10.333 4.00033V2.33366H3.66634ZM6.99967 10.0186C6.12867 10.6338 5.33967 11.2195 4.73392 11.8455C4.02787 12.5751 3.66634 13.2632 3.66634 14.0003V15.667H10.333V14.0003C10.333 13.2632 9.97151 12.5751 9.26542 11.8455C8.65967 11.2195 7.87067 10.6338 6.99967 10.0186Z" fill="#B337E4"/>
            </svg>
            
        ),
        bg: 'bg-[#b337e426]'
    },
    {
        name: 'Resolved Today',
        value: '4',
        icon: (props: SVGProps<SVGSVGElement>) => (
            <svg {...props} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.33366 9.00033C2.33366 5.31843 5.31843 2.33366 9.00033 2.33366C12.6822 2.33366 15.667 5.31843 15.667 9.00033C15.667 12.6822 12.6822 15.667 9.00033 15.667C5.31843 15.667 2.33366 12.6822 2.33366 9.00033ZM9.00033 0.666992C4.39795 0.666992 0.666992 4.39795 0.666992 9.00033C0.666992 13.6027 4.39795 17.3337 9.00033 17.3337C13.6027 17.3337 17.3337 13.6027 17.3337 9.00033C17.3337 4.39795 13.6027 0.666992 9.00033 0.666992ZM13.5479 6.88125L12.3694 5.70273L8.16699 9.90516L5.83958 7.57774L4.66107 8.75624L8.16699 12.2622L13.5479 6.88125Z" fill="#4BA254"/>
            </svg>            
        ),
        bg: 'bg-[#4ba25421]'
    },
]

function OperationsDashboard() {
    return <PageWrapper content={<>
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

        <section className="w-full h-full flex-1 border rounded-2xl p-4">
            <div className="w-full border-b pb-4 flex items-center justify-between">
                <p>Recent Bookings</p>
                <Button variant={'outline'} className='h-9'>View All</Button>
            </div>
            <table className="w-full text-left text-sm">
                <thead>
                    <tr>
                        <td/><td/><td/><td/><td/>
                    </tr>
                </thead>
                <tbody>
                    {
                        [1,2,3,4,5,6].map((req, idx, arr)=>{
                            return <tr key={`req-${idx}`} className={`${idx !== arr.length-1 && 'border-b'}`}>
                                <td>
                                    <div className="p-3 flex items-center gap-3">
                                        <span className="size-10 rounded-full border flex items-center justify-center bg-gray-100">JD</span>
                                        Joshua Danso
                                    </div>
                                </td>
                                <td>
                                    <div className="p-3">2025-06-05 at 10:00 AM</div>
                                </td>
                                <td>
                                    <div className="p-3"><div className="h-7 bg-emerald-100 text-emerald-600 flex items-center w-fit rounded px-6">Confirmed</div></div>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </section>

        <section className="w-full h-full flex-1 border rounded-2xl p-4 max-h-[400px] overflow-y-auto">
            <div className="w-full border-b pb-4 flex items-center justify-between bg-white sticky top-0">
                <p>Recent Bookings</p>
                <Button variant={'outline'} className='h-9'>View All</Button>
            </div>
            {
                [1,2,3,4].map((support, idx, arr)=>{
                    return <div key={`t-${idx}`} className={`w-full flex items-center justify-between py-3 ${idx !== arr.length-1 && 'border-b'}`}>
                        <aside className="flex flex-col">
                            <p>Cannot access medical records</p>
                            <small className="text-gray-600">Alice Thompson</small>
                        </aside>
                        <div className="h-8 bg-orange-100 text-orange-600 flex items-center w-fit rounded px-6">Medium</div>
                    </div>
                })
            }
        </section>
    </>}/>
}

export default OperationsDashboard