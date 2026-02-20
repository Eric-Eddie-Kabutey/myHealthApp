'use client';

import React, { SVGProps } from 'react'
import { Button } from '@/components/ui/button';
import { ChevronDown, Search } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';


const stats = [
    {
        name: `Completed`,
        value: 3,
        icon: (props: SVGProps<SVGSVGElement>) => (
            <svg {...props} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.33268 8.99935C2.33268 5.31745 5.31745 2.33268 8.99935 2.33268C12.6813 2.33268 15.666 5.31745 15.666 8.99935C15.666 12.6813 12.6813 15.666 8.99935 15.666C5.31745 15.666 2.33268 12.6813 2.33268 8.99935ZM8.99935 0.666016C4.39697 0.666016 0.666016 4.39697 0.666016 8.99935C0.666016 13.6017 4.39697 17.3327 8.99935 17.3327C13.6017 17.3327 17.3327 13.6017 17.3327 8.99935C17.3327 4.39697 13.6017 0.666016 8.99935 0.666016ZM13.5469 6.88027L12.3684 5.70176L8.16602 9.90418L5.83861 7.57677L4.66009 8.75527L8.16602 12.2612L13.5469 6.88027Z" fill="#4BA254" />
            </svg>

        ),
        bg: 'bg-[#4ba25422]'
    },
    {
        name: 'In Transit',
        value: 12,
        icon: (props: SVGProps<SVGSVGElement>) => (
            <svg {...props} viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.29 5.42592C17.4687 6.09275 17.073 6.77817 16.4062 6.95684L3.35069 10.455C2.98132 10.554 2.592 10.3889 2.4064 10.0546L0.220703 6.11734L1.42811 5.79384L3.4846 7.831L7.73069 6.69325L3.97192 0.798554L5.5818 0.367188L11.3746 5.71684L15.7591 4.54203C16.4259 4.36335 17.1114 4.75908 17.29 5.42592ZM2.33263 12.8328H15.6659V14.4994H2.33263V12.8328Z" fill="#3762E4" />
            </svg>
        ),
        bg: 'bg-[#3762e425]'
    },
    {
        name: 'Total Clearances',
        value: '8',
        icon: (props: SVGProps<SVGSVGElement>) => (
            <svg {...props} viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.6667 17.3327H1.33333C0.8731 17.3327 0.5 16.9596 0.5 16.4993V1.49935C0.5 1.03912 0.8731 0.666016 1.33333 0.666016H14.6667C15.1269 0.666016 15.5 1.03912 15.5 1.49935V16.4993C15.5 16.9596 15.1269 17.3327 14.6667 17.3327ZM13.8333 15.666V2.33268H2.16667V15.666H13.8333ZM4.66667 4.83268H11.3333V6.49935H4.66667V4.83268ZM4.66667 8.16602H11.3333V9.83268H4.66667V8.16602ZM4.66667 11.4993H11.3333V13.166H4.66667V11.4993Z" fill="black" />
            </svg>
        ),
        bg: 'bg-[#00000022]'
    },
]

function ApprovedEmergencyClearances() {
    return <div className='main-content flex flex-col gap-4'>
        <section className="flex gap-5 overflow-x-auto">
            {
                stats.map((stat, idx) => {
                    return <div key={`stat ${idx}`} className="rounded-xl min-w-[250px] h-[95px] border p-4 flex gap-2">
                        <aside className={`size-10 min-w-10 rounded-full flex items-center justify-center ${stat.bg}`}>
                            <stat.icon className='size-4' />
                        </aside>
                        <aside className="flex flex-col">
                            <p>{stat.name}</p>
                            <h1 className="text-xl font-semibold">{stat.value}</h1>
                        </aside>
                    </div>
                })
            }
        </section>
        <section className="border-b flex md:flex-row flex-col items-start  md:items-end justify-between gap-2">
            <div className="flex flex-col">
                <p className="text-base">Approved Emergency Clearances</p>
                {/* <p className="text-gray-600">Professional healthcare at your doorstep</p> */}
            </div>
            <aside className="flex gap-3">
                <div className="flex gap-2 items-center h-9 rounded-lg border px-3 w-[200px]">
                    <Search />
                    <input type="text" placeholder='Search...' className="w-full border-none outline-none text-sm h-full" />
                </div>
                <Popover>
                    <PopoverTrigger asChild>
                        <Button variant="outline" className='flex items-center gap-3 h-9 rounded-lg'>
                            <svg className='size-4' viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.33333 10H9.66667V8.33333H6.33333V10ZM0.5 0V1.66667H15.5V0H0.5ZM3 5.83333H13V4.16667H3V5.83333Z" fill="#525866" />
                            </svg>
                            Filter
                            <ChevronDown className='size-5' />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent side={'bottom'} className="w-[350px] text-[14px] flex flex-col gap-3 mr-5 rounded-xl px-6">
                        <p>Filter by</p>
                        <div className="w-full flex flex-col gap-1">
                            <p className="text-sm">Type</p>
                            <select className="w-full h-10 rounded-lg border px-3">
                                <option value="">Select Type</option>
                            </select>
                        </div>
                        <div className="w-full flex flex-col gap-1">
                            <p className="text-sm">Date Range</p>
                            <div className="w-full h-10 flex items-center gap-2 justify-between border rounded-lg p-3">
                                <input type="date" name="" id="" />
                                <b>--</b>
                                <input type="date" name="" id="" />
                            </div>
                        </div>
                        <div className="w-full flex flex-col gap-1">
                            <p className="text-sm">Doctor / Provider</p>
                            <select className="w-full h-10 rounded-lg border px-3">
                                <option value="">Select Doctor</option>
                            </select>
                        </div>
                        <div className="w-full grid grid-cols-2 gap-3 pt-4 border-t">
                            <Button variant={'outline'}>Reset</Button>
                            <Button>Apply</Button>
                        </div>
                    </PopoverContent>
                </Popover>
            </aside>
        </section>

        <section className="w-full overflow-x-auto text-sm">
            <table className="w-full text-left">
                <thead>
                    <tr className='h-10 bg-gray-100'>
                        <td><div className="px-3">Patient</div></td>
                        <td><div className="px-3">Condition</div></td>
                        <td><div className="px-3">Route</div></td>
                        <td><div className="px-3">Flight</div></td>
                        <td><div className="px-3">Status</div></td>
                        <td><div className="px-3">Approved By</div></td>
                    </tr>
                </thead>
                <tbody>
                    {
                        [1, 2, 3].map((item, idx, arr) => {
                            return <tr key={'symptons' + idx} className={`${idx !== arr.length - 1 && 'border-b'}`}>
                                <td>
                                    <div className="p-2 flex flex-col">
                                        <p>David Okeke</p>
                                        <small className="text-gray-700">RX001</small>
                                    </div>
                                </td>
                                <td>
                                    <div className="px-3">
                                        Stroke
                                    </div>
                                </td>
                                <td>
                                    <div className="px-3">
                                        Hospital Port Harcourt → Neurological Center Abuja
                                    </div>
                                </td>
                                <td><div className="px-3">MED-4512</div></td>
                                <td>
                                    <div className="px-3">
                                        <div className="p-2 h-8 flex items-center w-fit text-sm rounded bg-indigo-100 text-indigo-500">In Transit</div>
                                    </div>
                                </td>
                                <td>
                                    <div className="px-3 flex flex-col">
                                        <small className="text-gray-600">2025-05-31 10:15</small>
                                        <p className="text-sm">Dr. CMO Johnson</p>
                                    </div>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </section>
    </div>
}

export default ApprovedEmergencyClearances