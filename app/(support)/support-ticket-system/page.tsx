'use client';

import PageWrapper from '@/components/PageWrapper';
import { ChevronDown, Filter, Search } from 'lucide-react';
import React, { SVGProps, useState } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import NewTicket from './Includes/NewTicket';
import EditTicket from './Includes/EditTicket';
import CloseTicket from './Includes/CloseTicket';


const stats = [
    {
        name: `Open Tickets`,
        value: 3,
        icon: (props: SVGProps<SVGSVGElement>) => (
            <svg {...props} viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.5052 0.5C16.9655 0.5 17.3386 0.873092 17.3386 1.33333V5.91667C16.188 5.91667 15.2552 6.84942 15.2552 8.00001C15.2552 9.15059 16.188 10.0833 17.3386 10.0833V14.6667C17.3386 15.1269 16.9655 15.5 16.5052 15.5H1.50521C1.04498 15.5 0.671875 15.1269 0.671875 14.6667V10.0833C1.82247 10.0833 2.75521 9.15059 2.75521 8.00001C2.75521 6.84942 1.82247 5.91667 0.671875 5.91667V1.33333C0.671875 0.873092 1.04498 0.5 1.50521 0.5H16.5052ZM15.6719 2.16667H2.33854V4.64L2.46845 4.70756C3.58393 5.31754 4.35544 6.47792 4.41779 7.82351L4.42188 8.00001C4.42188 9.42017 3.63243 10.6559 2.46845 11.2924L2.33854 11.3592V13.8333H15.6719V11.3592L15.542 11.2924C14.4265 10.6824 13.655 9.52209 13.5926 8.17651L13.5886 8.00001C13.5886 6.57984 14.378 5.34406 15.542 4.70756L15.6719 4.64V2.16667Z" fill="#3762E4" />
            </svg>

        ),
        bg: 'bg-[#3762e421]'
    },
    {
        name: 'In Progress',
        value: 12,
        icon: (props: SVGProps<SVGSVGElement>) => (
            <svg {...props} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.0013 17.3346C4.39893 17.3346 0.667969 13.6036 0.667969 9.0013C0.667969 4.39893 4.39893 0.667969 9.0013 0.667969C13.6036 0.667969 17.3346 4.39893 17.3346 9.0013C17.3346 13.6036 13.6036 17.3346 9.0013 17.3346ZM9.0013 15.668C12.6832 15.668 15.668 12.6832 15.668 9.0013C15.668 5.3194 12.6832 2.33464 9.0013 2.33464C5.3194 2.33464 2.33464 5.3194 2.33464 9.0013C2.33464 12.6832 5.3194 15.668 9.0013 15.668ZM9.83463 9.0013H13.168V10.668H8.16797V4.83464H9.83463V9.0013Z" fill="#765e34" />
            </svg>
        ),
        bg: 'bg-[#76603424]'
    },
    {
        name: 'Resolved',
        value: '8',
        icon: (props: SVGProps<SVGSVGElement>) => (
            <svg {...props} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.33464 9.0013C2.33464 5.3194 5.3194 2.33464 9.0013 2.33464C12.6832 2.33464 15.668 5.3194 15.668 9.0013C15.668 12.6832 12.6832 15.668 9.0013 15.668C5.3194 15.668 2.33464 12.6832 2.33464 9.0013ZM9.0013 0.667969C4.39893 0.667969 0.667969 4.39893 0.667969 9.0013C0.667969 13.6036 4.39893 17.3346 9.0013 17.3346C13.6036 17.3346 17.3346 13.6036 17.3346 9.0013C17.3346 4.39893 13.6036 0.667969 9.0013 0.667969ZM13.5489 6.88223L12.3704 5.70371L8.16797 9.90614L5.84056 7.57872L4.66204 8.75722L8.16797 12.2631L13.5489 6.88223Z" fill="#4BA254" />
            </svg>

        ),
        bg: 'bg-[#4ba25421]'
    },
    {
        name: 'Closed',
        value: 4,
        icon: (props: SVGProps<SVGSVGElement>) => (
            <svg {...props} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.99861 4.82404L10.1234 0.699219L11.3019 1.87773L7.17711 6.00254L11.3019 10.1273L10.1234 11.3058L5.99861 7.18104L1.87383 11.3058L0.695312 10.1273L4.82011 6.00254L0.695312 1.87773L1.87383 0.699219L5.99861 4.82404Z" fill="#E53E3E" />
            </svg>

        ),
        bg: 'bg-[#f542421f]'
    },
]

function SupportTicketSystem() {
    const [createTicket, setCreateTicket] = useState(false);
    const [editTicket, setEditTicket] = useState(false);
    const [closeTicket, setCloseTicket] = useState(false);

    return <PageWrapper content={<>
        <section className="w-full flex gap-5 overflow-x-auto">
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
                <p className="text-base">Ticket System</p>
                <small className="text-gray-600">Manage customer support tickets and assignments</small>
            </div>
            <div className="flex gap-3">
                <aside className="rounded w-[230px] px-2 h-9 border flex items-center gap-2">
                    <Search className='size-5' />
                    <input type="text" placeholder='Search...' className="border-none outline-none text-sm w-full h-full" />
                </aside>
                <Popover>
                    <PopoverTrigger asChild>
                        <Button variant="outline" className='flex items-center gap-3 h-9 rounded'>
                            All Tickets
                            <ChevronDown className='size-5' />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent side={'bottom'} className="w-[650px] text-[14px] flex flex-col gap-3 mr-12 rounded-xl px-6">

                    </PopoverContent>
                </Popover>
                <Button onClick={() => setCreateTicket(true)} className='rounded h-9'>+ Create Ticket</Button>
            </div>
        </section>

        <section className="w-full flex overflow-x-auto text-sm">
            <table className="w-full text-left">
                <thead>
                    <tr className='h-10 bg-gray-100'>
                        <td><div className="px-3">Ticket ID</div></td>
                        <td><div className="px-3">Time</div></td>
                        <td><div className="px-3">Status</div></td>
                        <td><div className="px-3">Priority</div></td>
                        <td><div className="px-3">Tag</div></td>
                        <td><div className="px-3">Assinee</div></td>
                        <td><div className="px-3">Action</div></td>
                    </tr>
                </thead>
                <tbody>
                    {
                        [1, 2, 3].map((item, idx, arr) => {
                            return <tr key={'symptons' + idx} className={`${idx !== arr.length - 1 && 'border-b'}`}>
                                <td>
                                    <div className="px-3">TKT-001</div>
                                </td>
                                <td>
                                    <div className="p-2 flex flex-col">
                                        <p>Login Issue</p>
                                        <small className="text-gray-700">Customer unable to access account</small>
                                    </div>
                                </td>
                                <td>
                                    <div className="px-3">
                                        <div className="p-2 h-8 flex items-center w-fit text-sm rounded-lg bg-gray-200">Closed</div>
                                    </div>
                                </td>
                                <td>
                                    <div className="px-3">
                                        <div className="p-2 h-8 flex items-center w-fit text-sm rounded bg-red-100 text-red-500">High</div>
                                    </div>
                                </td>
                                <td><div className="px-3">Technical</div></td>
                                <td>
                                    <div className="px-3">Super Admin</div>
                                </td>
                                <td>
                                    <div className="px-3 flex gap-3 items-center">
                                        <Button onClick={() => setEditTicket(true)} variant={'outline'} className='border-primary text-primary rounded h-9'>Edit</Button>
                                        <Button onClick={() => setCloseTicket(true)} variant={'outline'} className='border-red-600 text-red-600 rounded h-9'>Close Ticket</Button>
                                    </div>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </section>

        <NewTicket open={createTicket} close={() => setCreateTicket(false)} />
        <EditTicket open={editTicket} close={() => setEditTicket(false)} />
        <CloseTicket open={closeTicket} close={() => setCloseTicket(false)} />
    </>} />
}

export default SupportTicketSystem