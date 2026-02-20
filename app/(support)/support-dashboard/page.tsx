'use client';

import PageWrapper from '@/components/PageWrapper';
import { Button } from '@/components/ui/button';
import { FileChartLine, Minus, Plus, Search, SendIcon, Star } from 'lucide-react';
import React, { SVGProps, useState } from 'react';
import LiveSupportPanel from './Includes/LiveSupportPanel';

const stats = [
    {
        name: `Total Revenue`,
        value: '$124,568.00',
        icon: (props: SVGProps<SVGSVGElement>) => (
            <svg {...props} viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.0033 3.83333H16.5033C16.9635 3.83333 17.3366 4.20642 17.3366 4.66667V14.6667C17.3366 15.1269 16.9635 15.5 16.5033 15.5H1.50326C1.04302 15.5 0.669922 15.1269 0.669922 14.6667V1.33333C0.669922 0.873092 1.04302 0.5 1.50326 0.5H14.0033V3.83333ZM2.33659 5.5V13.8333H15.6699V5.5H2.33659ZM2.33659 2.16667V3.83333H12.3366V2.16667H2.33659ZM11.5033 8.83334H14.0033V10.5H11.5033V8.83334Z" fill="#3762E4" />
            </svg>
        ),
        bg: 'bg-[#3762e421]',
        state: 'increase',
        stateChange: '  12.5% from last month'
    },
    {
        name: 'Pending Payments',
        value: '$14,235.00',
        icon: (props: SVGProps<SVGSVGElement>) => (
            <svg {...props} viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.00065 2.33366H0.333984V0.666992H13.6673V2.33366H12.0007V4.00033C12.0007 5.34652 11.3205 6.42923 10.4641 7.31422C9.87832 7.91949 9.16565 8.47699 8.44307 9.00033C9.16565 9.52366 9.87832 10.0812 10.4641 10.6864C11.3205 11.5714 12.0007 12.6542 12.0007 14.0003V15.667H13.6673V17.3337H0.333984V15.667H2.00065V14.0003C2.00065 12.6542 2.68078 11.5714 3.53723 10.6864C4.123 10.0812 4.83567 9.52366 5.55823 9.00033C4.83567 8.47699 4.123 7.91949 3.53723 7.31422C2.68078 6.42923 2.00065 5.34652 2.00065 4.00033V2.33366ZM3.66732 2.33366V4.00033C3.66732 4.73747 4.02885 5.42559 4.7349 6.15518C5.34065 6.78115 6.12965 7.36683 7.00065 7.98208C7.87165 7.36683 8.66065 6.78115 9.2664 6.15518C9.97248 5.42559 10.334 4.73747 10.334 4.00033V2.33366H3.66732ZM7.00065 10.0186C6.12965 10.6338 5.34065 11.2195 4.7349 11.8455C4.02885 12.5751 3.66732 13.2632 3.66732 14.0003V15.667H10.334V14.0003C10.334 13.2632 9.97248 12.5751 9.2664 11.8455C8.66065 11.2195 7.87165 10.6338 7.00065 10.0186Z" fill="#34765A" />
            </svg>
        ),
        bg: 'bg-[#34765b24]',
        state: 'increase',
        stateChange: ' 12 transactions from last month'
    },
    {
        name: 'Failed Payments',
        value: '$3,542.00',
        icon: (props: SVGProps<SVGSVGElement>) => (
            <svg {...props} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.82223 7.99977L0.328125 1.50566L1.50663 0.327148L8.00073 6.82119L14.4948 0.327148L15.6733 1.50566L9.17923 7.99977L15.6733 14.4938L14.4948 15.6724L8.00073 9.17827L1.50663 15.6724L0.328125 14.4938L6.82223 7.99977Z" fill="#E53E3E" />
            </svg>
        ),
        bg: 'bg-[#e53e3e22]',
        state: 'decrease',
        stateChange: '8 transactions from last month'
    },
    {
        name: 'Doctor Requests',
        value: '$89,421.00',
        icon: (props: SVGProps<SVGSVGElement>) => (
            <svg {...props} viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.50326 0.501953H16.5033C16.9635 0.501953 17.3366 0.875045 17.3366 1.33529V14.6686C17.3366 15.1288 16.9635 15.5019 16.5033 15.5019H1.50326C1.04302 15.5019 0.669922 15.1288 0.669922 14.6686V1.33529C0.669922 0.875045 1.04302 0.501953 1.50326 0.501953ZM2.33659 2.16862V13.8352H15.6699V2.16862H2.33659ZM6.08659 9.66858H10.6699C10.9 9.66858 11.0866 9.48208 11.0866 9.25191C11.0866 9.02183 10.9 8.83525 10.6699 8.83525H7.33661C6.186 8.83525 5.25326 7.90258 5.25326 6.75191C5.25326 5.60135 6.186 4.66862 7.33661 4.66862H8.16994V3.00195H9.83661V4.66862H11.9199V6.33525H7.33661C7.10647 6.33525 6.91992 6.52183 6.91992 6.75191C6.91992 6.98208 7.10647 7.16858 7.33661 7.16858H10.6699C11.8205 7.16858 12.7533 8.10133 12.7533 9.25191C12.7533 10.4026 11.8205 11.3352 10.6699 11.3352H9.83661V13.0019H8.16994V11.3352H6.08659V9.66858Z" fill="#854D0F" />
            </svg>
        ),
        bg: 'bg-[#ffb4121a]',
        state: 'increase',
        stateChange: '9.2% growth from last month'
    },
];



function SupportDashboard() {
    return <PageWrapper content={<>
        <section className="w-full min-h-fit flex gap-5 overflow-x-auto">
            {
                stats.map((stat, idx) => {
                    return <div key={`stat-${idx}`} className="rounded-xl min-w-[270px] h-[105px] border p-4 flex gap-2">
                        <aside className={`size-10 min-w-10 rounded-full flex items-center justify-center ${stat.bg}`}>
                            <stat.icon className='size-4' />
                        </aside>
                        <aside className="flex flex-col">
                            <p>{stat.name}</p>
                            <h1 className="text-xl font-semibold">{stat.value}</h1>
                            <span className={`flex items-center text-xs mt-2 ${stat.state === 'increase' ? 'text-emerald-600' : 'text-red-500'}`}>
                                {stat.state === 'increase' ? <Plus className='size-4' /> : <Minus className='size-4' />}
                                {stat.stateChange}
                            </span>
                        </aside>
                    </div>
                })
            }
        </section>

        <section className="w-full flex gap-5 h-[550px]">
            <div className="w-full h-full border rounded-xl p-4 pt-0 flex flex-col gap-2">
                <aside className="w-full py-4 flex items-center justify-between border-b">
                    <p>Live Support Panel</p>
                </aside>
                <LiveSupportPanel/>
            </div>
            <div className="min-w-[500px] h-full overflow-y-auto flex flex-col border rounded-xl p-3 pt-0 gap-2">
                <section className="w-full flex flex-col gap-2 bg-white sticky top-0 pb-2">
                    <aside className="w-full py-2 flex items-center justify-between border-b">
                        <p>Ticket System</p>
                        <Button variant={'outline'} className='h-9 rounded-lg'>New Ticket</Button>
                    </aside>
                    <aside className="w-full border rounded-lg min-h-9 flex items-center text-sm px-3 gap-2">
                        <Search className='size-4' />
                        <input type="text" placeholder='Search tickets...' className="w-full h-full outline-none border-none" />
                    </aside>
                </section>
                {
                    [1, 2, 3, 4, 5, 6].map((arr, idx) => {
                        return <div key={`ticket-${idx}`} className="w-full border rounded p-2 flex justify-between gap-2">
                            <aside className="flex flex-col gap-1">
                                <small>#TKT-2023-0567</small>
                                <small className="text-gray-500">Payment failure for consultation</small>
                                <span className="flex items-center gap-1">
                                    <div className="px-2 flex items-center h-7 rounded-lg bg-orange-50 text-orange-800 text-xs">Payment</div>
                                    <small>Created: 10:15 AM</small>
                                </span>
                            </aside>
                            <div className="px-2 flex items-center h-7 rounded-lg bg-indigo-50 text-indigo-800 text-xs">New</div>
                        </div>
                    })
                }
            </div>
        </section>

        <section className="grid grid-cols-3 gap-5 h-[560px]">
            <div className="min-w-[500px] h-full overflow-y-auto flex flex-col border rounded-xl p-3 pt-0 gap-2">
                <section className="w-full flex flex-col gap-2 bg-white sticky top-0 pb-2">
                    <aside className="w-full py-2 flex items-center justify-between border-b">
                        <p>Knowledge Base</p>
                        <Button variant={'outline'} className='h-9 rounded-lg'>View All</Button>
                    </aside>
                    <aside className="w-full border rounded-lg min-h-9 flex items-center text-sm px-3 gap-2">
                        <Search className='size-4' />
                        <input type="text" placeholder='Knowledge Base...' className="w-full h-full outline-none border-none" />
                    </aside>
                </section>
                {
                    [1, 2, 3, 4, 5].map((know, idx) => {
                        return <div key={`know-${idx}`} className="w-full border p-4 rounded-lg flex gap-2">
                            <div className="size-10 min-w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center"><FileChartLine className='size-5' /></div>
                            <div className="flex flex-col gap-1">
                                <p className="text-sm">How to book a consultation</p>
                                <small className="text-gray-600">Step-by-step guide for patients</small>
                                <span className="text-sm text-primary">FAQ</span>
                            </div>
                        </div>
                    })
                }
            </div>
            <div className="min-w-[500px] h-full overflow-y-auto flex flex-col border rounded-xl p-3 pt-0 gap-2">
                <section className="w-full flex flex-col gap-2 bg-white sticky top-0 pb-2">
                    <aside className="w-full py-2 flex items-center justify-between border-b">
                        <p>Feedback Monitoring</p>
                        <Button variant={'outline'} className='h-9 rounded-lg'>View All</Button>
                    </aside>
                    <aside className="w-full flex flex-col text-sm gap-2">
                        <h1 className="text-2xl">4.2 / 5</h1>
                        <p>Average rating (last 7 days)</p>
                        <span className="flex items-center gap-2">
                            {[1, 2, 3, 4].map((star, idx) => (<Star key={`star-rate-${idx}`} className='size-4' />))}
                        </span>
                    </aside>
                </section>
                {
                    [1, 2, 3, 4, 5].map((feedback, idx) => {
                        return <div key={`feedback-${idx}`} className="w-full border p-4 rounded-lg flex gap-2">
                            <div className="size-10 min-w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center"><img src="https://randomuser.me/api/portraits/women/44.jpg" alt={`feedback user`} className="size-full object-cover rounded-full" /></div>
                            <div className="flex flex-col gap-1">
                                <span className="flex items-center gap-2">
                                    {[1, 2, 3].map((star, idx) => (<Star key={`star-rate-${idx}`} className='size-4' />))}
                                    <small className='text-gray-600 leading-0'>Yesterday</small>
                                </span>
                                <p className="text-sm">Excellent service!</p>
                                <small className="text-gray-600">Dr. Smith was very helpful and the platform is easy to use.</small>
                            </div>
                        </div>
                    })
                }
            </div>
            <div className="min-w-[500px] h-full overflow-y-auto flex flex-col border rounded-xl p-3 pt-0 gap-2">
                <section className="w-full flex flex-col gap-2 bg-white sticky top-0 pb-2">
                    <aside className="w-full py-2 flex items-center justify-between border-b">
                        <p>Complaint Escalation</p>
                        <Button variant={'outline'} className='h-9 rounded-lg'>View All</Button>
                    </aside>
                    <aside className="w-full flex flex-col text-sm gap-2">
                        <h1 className="text-2xl">3</h1>
                        <p>Average Escalation</p>
                    </aside>
                </section>
                {
                    [1, 2, 3, 4, 5].map((escalation, idx) => {
                        return <div key={`escalation-${idx}`} className="w-full border rounded p-2 flex justify-between gap-2">
                            <aside className="flex flex-col gap-1">
                                <small>#TKT-2023-0567</small>
                                <small className="text-gray-500">Payment failure for consultation</small>
                                <span className="flex items-center gap-1">
                                    <div className="px-2 flex items-center h-7 rounded-lg bg-orange-50 text-orange-800 text-xs">Payment</div>
                                    <small>Created: 10:15 AM</small>
                                </span>
                            </aside>
                            <div className="px-2 flex items-center h-7 rounded-lg bg-indigo-50 text-indigo-800 text-xs">New</div>
                        </div>
                    })
                }
            </div>
        </section>
    </>} />
}

export default SupportDashboard