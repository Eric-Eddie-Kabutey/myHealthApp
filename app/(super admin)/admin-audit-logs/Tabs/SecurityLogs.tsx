'use client';

import useMain from '@/app/hooks/useMain';
import PageWrapper from '@/components/PageWrapper';
import { Button } from '@/components/ui/button';
import { setNewParams } from '@/lib/utils';
import { Calendar, ChevronDown, Download, Search } from 'lucide-react';
import React, { SVGProps, useEffect } from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const stats = [
    {
        name: 'Total Audit Entries',
        value: '5',
        sub: 'All time',
        icon: (props: SVGProps<SVGSVGElement>) => (
            <svg {...props} viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.6667 17.3337H1.33333C0.8731 17.3337 0.5 16.9606 0.5 16.5003V1.50033C0.5 1.04009 0.8731 0.666992 1.33333 0.666992H14.6667C15.1269 0.666992 15.5 1.04009 15.5 1.50033V16.5003C15.5 16.9606 15.1269 17.3337 14.6667 17.3337ZM13.8333 15.667V2.33366H2.16667V15.667H13.8333ZM4.66667 4.83366H11.3333V6.50033H4.66667V4.83366ZM4.66667 8.16699H11.3333V9.83366H4.66667V8.16699ZM4.66667 11.5003H11.3333V13.167H4.66667V11.5003Z" fill="#3762E4" />
            </svg>
        ),
        bg: 'bg-blue-100',
        color: 'text-blue-600'
    },
    {
        name: 'Security Incidents',
        value: '4',
        sub: '+12.5% from last month',
        icon: (props: SVGProps<SVGSVGElement>) => (
            <svg {...props} viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.5 2.33366H2.16667V15.667H13.8333V5.66699H10.5V2.33366ZM0.5 1.49349C0.5 1.03703 0.872908 0.666992 1.33208 0.666992H11.3333L15.4998 4.83366L15.5 16.4941C15.5 16.9577 15.1292 17.3337 14.6722 17.3337H1.32783C0.870633 17.3337 0.5 16.9542 0.5 16.5072V1.49349ZM7.16667 11.5003H8.83333V13.167H7.16667V11.5003ZM7.16667 4.83366H8.83333V9.83366H7.16667V4.83366Z" fill="#E53E3E" />
            </svg>
        ),
        bg: 'bg-red-100',
        color: 'text-red-600'
    },
    {
        name: 'Active Threats',
        value: '1',
        sub: '2025 earnings',
        icon: (props: SVGProps<SVGSVGElement>) => (
            <svg {...props} viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.15256 2.35466L8 0.833008L14.8474 2.35466C15.2287 2.43939 15.5 2.77757 15.5 3.16815V11.4904C15.5 13.1622 14.6645 14.7233 13.2735 15.6507L8 19.1663L2.7265 15.6507C1.33551 14.7233 0.5 13.1622 0.5 11.4904V3.16815C0.5 2.77757 0.771275 2.43939 1.15256 2.35466ZM2.16667 3.83662V11.4904C2.16667 12.6049 2.72367 13.6457 3.651 14.2639L8 17.1633L12.349 14.2639C13.2763 13.6457 13.8333 12.6049 13.8333 11.4904V3.83662L8 2.54033L2.16667 3.83662Z" fill="#34765A" />
            </svg>
        ),
        bg: 'bg-primary/10',
        color: 'text-primary'
    },
    {
        name: 'Unique Users',
        value: 9,
        rating: 4,
        icon: (props: SVGProps<SVGSVGElement>) => (
            <svg {...props} viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.328125 18.332C0.328125 14.6501 3.31289 11.6654 6.99479 11.6654C10.6767 11.6654 13.6615 14.6501 13.6615 18.332H11.9948C11.9948 15.5706 9.75621 13.332 6.99479 13.332C4.23337 13.332 1.99479 15.5706 1.99479 18.332H0.328125ZM6.99479 10.832C4.23229 10.832 1.99479 8.59453 1.99479 5.83203C1.99479 3.06953 4.23229 0.832031 6.99479 0.832031C9.75729 0.832031 11.9948 3.06953 11.9948 5.83203C11.9948 8.59453 9.75729 10.832 6.99479 10.832ZM6.99479 9.16536C8.83646 9.16536 10.3281 7.6737 10.3281 5.83203C10.3281 3.99036 8.83646 2.4987 6.99479 2.4987C5.15312 2.4987 3.66146 3.99036 3.66146 5.83203C3.66146 7.6737 5.15312 9.16536 6.99479 9.16536Z" fill="#B337E4" />
            </svg>
        ),
        bg: 'bg-[#b337e425]',
        color: 'text-[#b337e4]'
    },
]


const events = [
    {
        timestamp: "2024-06-04 10:30:15",
        eventType: "Failed Login",
        user: "unknown_user@domain.com",
        details: "5 consecutive failed login attempts",
        ip: "192.168.1.45",
        severity: "High",
    },
    {
        timestamp: "2025-06-06 14:15:22",
        eventType: "IP Anomaly",
        user: "Dr. Michael Chen",
        details: "Login from unusual geographic location",
        ip: "192.168.1.12",
        severity: "Medium",
    },
];

function SecurityLogs() {
    return (
        <div className='w-full flex flex-col gap-5 main-content'>
            <section className="w-full flex gap-5 overflow-x-auto">
                {
                    stats.map((stat, idx) => {
                        return <div key={`stat-${idx}`} className="rounded-xl min-w-[250px] h-[90px] border p-4 flex gap-2">
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

            <section className="border-b flex md:flex-row flex-col items-start  md:items-end justify-between gap-2 pb-2">
                <div className="flex gap-2 items-center h-9 rounded-lg border px-3 w-[200px]">
                    <Search />
                    <input type="text" placeholder='Search...' className="w-full border-none outline-none text-sm h-full" />
                </div>
                <aside className="flex gap-3">
                    <div className="h-9 border rounded px-3 flex items-center gap-5">
                        <div className="flex items-center gap-3">
                            From
                            <div className="relative cursor-pointer">
                                <Calendar className='size-4' />
                                <input type="date" name="" id="" className="absolute size-full opacity-0 cursor-pointer" />
                            </div>
                        </div>
                        -
                        <div className="flex items-center gap-3">
                            To
                            <div className="relative cursor-pointer">
                                <Calendar className='size-4' />
                                <input type="date" name="" id="" className="absolute size-full opacity-0 cursor-pointer" />
                            </div>
                        </div>
                    </div>
                    <DropdownMenu>
                        <DropdownMenuTrigger><Button variant={'outline'} className='flex items-center gap-3'>All Roles <ChevronDown className='size-4.5' /></Button></DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem>Clothing</DropdownMenuItem>
                            <DropdownMenuItem>Electronics</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <DropdownMenu>
                        <DropdownMenuTrigger><Button variant={'outline'} className='flex items-center gap-3'>All Module <ChevronDown className='size-4.5' /></Button></DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem>Clothing</DropdownMenuItem>
                            <DropdownMenuItem>Electronics</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <DropdownMenu>
                        <DropdownMenuTrigger><Button variant={'outline'} className='flex items-center gap-3'>All Levels <ChevronDown className='size-4.5' /></Button></DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem>Clothing</DropdownMenuItem>
                            <DropdownMenuItem>Electronics</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </aside>
            </section>

            <section className="w-full flex overflow-x-auto">
                <table className="w-full text-sm">
                    <thead>
                        <tr className="h-10 bg-gray-100 text-left">
                            <td className="px-3">Timestamp</td>
                            <td className="px-3">Event Type</td>
                            <td className="px-3">User</td>
                            <td className="px-3">Details</td>
                            <td className="px-3">IP Address</td>
                            <td className="px-3">Severity</td>
                        </tr>
                    </thead>
                    <tbody>
                        {events.map((event, idx) => (
                            <tr key={idx} className="border-b">
                                <td className="p-3">{event.timestamp}</td>
                                <td className="p-3">{event.eventType}</td>
                                <td className="p-3">{event.user}</td>
                                <td className="p-3">{event.details}</td>
                                <td className="p-3">{event.ip}</td>
                                <td className="p-3">
                                    <span
                                        className={`px-3 py-1 rounded text-xs font-medium ${event.severity === "High"
                                                ? "bg-red-100 text-red-800"
                                                : event.severity === "Medium"
                                                    ? "bg-yellow-100 text-yellow-800"
                                                    : "bg-gray-100 text-gray-800"
                                            }`}
                                    >
                                        {event.severity}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </div>
    )
}

export default SecurityLogs