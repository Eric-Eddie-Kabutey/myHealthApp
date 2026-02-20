'use client';

import PageWrapper from '@/components/PageWrapper';
import React, { SVGProps, useState } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { ChevronDown, Search } from 'lucide-react';
import ReassignPatient from './Includes/ReassignPatient';

const stats = [
    {
        name: `Total Patients`,
        value: '3',
        icon: (props: SVGProps<SVGSVGElement>) => (
            <svg {...props} viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.666016 18.332C0.666016 14.6501 3.65078 11.6654 7.33268 11.6654C11.0146 11.6654 13.9993 14.6501 13.9993 18.332H12.3327C12.3327 15.5706 10.0941 13.332 7.33268 13.332C4.57126 13.332 2.33268 15.5706 2.33268 18.332H0.666016ZM7.33268 10.832C4.57018 10.832 2.33268 8.59453 2.33268 5.83203C2.33268 3.06953 4.57018 0.832031 7.33268 0.832031C10.0952 0.832031 12.3327 3.06953 12.3327 5.83203C12.3327 8.59453 10.0952 10.832 7.33268 10.832ZM7.33268 9.16536C9.17435 9.16536 10.666 7.6737 10.666 5.83203C10.666 3.99036 9.17435 2.4987 7.33268 2.4987C5.49102 2.4987 3.99935 3.99036 3.99935 5.83203C3.99935 7.6737 5.49102 9.16536 7.33268 9.16536ZM14.2358 12.251C16.553 13.2954 18.166 15.6254 18.166 18.332H16.4993C16.4993 16.302 15.2896 14.5546 13.5517 13.7713L14.2358 12.251ZM13.6628 2.84304C15.328 3.52956 16.4993 5.16837 16.4993 7.08203C16.4993 9.47386 14.6695 11.4364 12.3327 11.6467V9.9692C13.7466 9.7672 14.8327 8.55203 14.8327 7.08203C14.8327 5.93149 14.1673 4.93706 13.2002 4.46232L13.6628 2.84304Z" fill="#3762E4" />
            </svg>

        ),
        bg: 'bg-[#3762e421]',
        state: 'increase',
        stateChange: '  12.5% from last month'
    },
    {
        name: 'Critical Cases',
        value: '1',
        icon: (props: SVGProps<SVGSVGElement>) => (
            <svg {...props} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.99935 17.3346C4.39697 17.3346 0.666016 13.6036 0.666016 9.0013C0.666016 4.39893 4.39697 0.667969 8.99935 0.667969C13.6017 0.667969 17.3327 4.39893 17.3327 9.0013C17.3327 13.6036 13.6017 17.3346 8.99935 17.3346ZM8.99935 15.668C12.6813 15.668 15.666 12.6832 15.666 9.0013C15.666 5.3194 12.6813 2.33464 8.99935 2.33464C5.31745 2.33464 2.33268 5.3194 2.33268 9.0013C2.33268 12.6832 5.31745 15.668 8.99935 15.668ZM8.16602 11.5013H9.83268V13.168H8.16602V11.5013ZM8.16602 4.83464H9.83268V9.83463H8.16602V4.83464Z" fill="#E53E3E" />
            </svg>
        ),
        bg: 'bg-[#e53e3e28]',
        state: 'decrease',
        stateChange: '8 transactions from last month'
    },
    {
        name: 'Active Doctors',
        value: '5',
        icon: (props: SVGProps<SVGSVGElement>) => (
            <svg {...props} viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.16667 0.5V13.8333H15.5V15.5H0.5V0.5H2.16667ZM14.9107 3.24408L16.0892 4.42259L11.3333 9.1785L8.83333 6.67917L5.25593 10.2559L4.07741 9.07742L8.83333 4.32149L11.3333 6.82083L14.9107 3.24408Z" fill="#34765A" />
            </svg>
        ),
        bg: 'bg-[#34765b24]',
        state: 'increase',
        stateChange: ' 12 transactions from last month'
    },
    {
        name: `Today's Visits`,
        value: '24',
        icon: (props: SVGProps<SVGSVGElement>) => (
            <svg {...props} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.49935 0.832031V2.4987H11.4993V0.832031H13.166V2.4987H16.4993C16.9596 2.4987 17.3327 2.8718 17.3327 3.33203V16.6654C17.3327 17.1256 16.9596 17.4987 16.4993 17.4987H1.49935C1.03912 17.4987 0.666016 17.1256 0.666016 16.6654V3.33203C0.666016 2.8718 1.03912 2.4987 1.49935 2.4987H4.83268V0.832031H6.49935ZM15.666 9.16536H2.33268V15.832H15.666V9.16536ZM4.83268 4.16536H2.33268V7.4987H15.666V4.16536H13.166V5.83203H11.4993V4.16536H6.49935V5.83203H4.83268V4.16536Z" fill="#B337E4" />
            </svg>
        ),
        bg: 'bg-[#b337e425]',
        state: 'increase',
        stateChange: '9.2% growth from last month'
    },
];

function OfficerPatientCaseOversight() {
    const [reassign, setReassign] = useState(false);
    return <PageWrapper content={<>
        <section className="w-full min-h-fit flex gap-5 overflow-x-auto">
            {
                stats.map((stat, idx) => {
                    return <div key={`stat-${idx}`} className="rounded-xl min-w-[270px] h-[100px] border p-4 flex gap-2">
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
                <p className='text-base'>Patient & Case Oversight</p>
                <small className="text-gray-600">Global Patient Access</small>
            </div>
            <div className="flex gap-2">
                <aside className="rounded-lg w-[300px] px-2 h-10 border flex items-center gap-2">
                    <Search className='size-5' />
                    <input type="text" placeholder='Search...' className="border-none outline-none text-sm w-full h-full" />
                </aside>
                {
                    ['All Doctors', 'All Regions', 'Diagnosis'].map((filter, idx) => {
                        return <Popover key={`filter-${idx}`}>
                            <PopoverTrigger asChild>
                                <Button variant="outline" className='flex items-center gap-3 h-10 rounded-lg'>
                                    {filter}
                                    <ChevronDown className='size-5' />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent side={'bottom'} className="w-[300px] text-[14px] flex flex-col gap-3 mr-12 rounded-lg px-6">

                            </PopoverContent>
                        </Popover>
                    })
                }
            </div>
        </section>

        <section className="w-full overflow-x-auto">
            <table className="w-full text-left text-sm">
                <thead>
                    <tr className="h-10 bg-gray-100">
                        <td><div className="px-3">Patient</div></td>
                        <td><div className="px-3">Diagnosis</div></td>
                        <td><div className="px-3">Doctor</div></td>
                        <td><div className="px-3">Region</div></td>
                        <td><div className="px-3">Status</div></td>
                        <td><div className="px-3">Priority</div></td>
                        <td><div className="px-3">Action</div></td>
                    </tr>
                </thead>
                <tbody>
                    {
                        [1, 2, 3, 4, 5, 6].map((rec, idx, arr) => {
                            return <tr key={`rec-${idx}`} className={`${idx !== arr.length - 1 ? 'border-b' : ''}`}>
                                <td><div className="p-3 flex flex-col">
                                    <p>Sarah Johnson</p>
                                    <small className="text-gray-600">45y • Female</small>
                                </div></td>
                                <td><div className="p-3">Hypertension</div></td>
                                <td><div className="p-3">Dr.Smith</div></td>
                                <td><div className="p-3">North Wing</div></td>
                                <td><div className="p-3">
                                    <div className="px-4 h-8 flex items-center rounded-lg bg-emerald-50 text-emerald-800 w-fit">Active</div>
                                </div></td>
                                <td><div className="p-3">
                                    <div className="px-4 h-8 flex items-center rounded-lg bg-orange-50 text-orange-800 w-fit">Medium</div>
                                </div></td>
                                <td><div className="p-3 flex gap-2">
                                    <Button variant={'outline'} className='rounded h-8 border-primary text-primary'>View File</Button>
                                    <Button onClick={() => setReassign(true)} variant={'outline'} className='rounded h-8 border-primary text-primary'>Reassign</Button>
                                </div></td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </section>

        <ReassignPatient open={reassign} close={() => setReassign(false)} />
    </>} />
}

export default OfficerPatientCaseOversight