'use client';

import PageWrapper from '@/components/PageWrapper';
import { ChevronDown, Search } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import React from 'react'
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import routes from '@/lib/routes';

const prescriptions = [
    {
        id: 1,
        title: 'Amoxicillin 500mg',
        type: 'Antibiotic',
        date: '2024-05-10',
        provider: 'Dr. Jane Smith'
    },
    {
        id: 2,
        title: 'Ibuprofen 200mg',
        type: 'Pain Relief',
        date: '2024-04-22',
        provider: 'Dr. John Doe'
    },
    {
        id: 3,
        title: 'Metformin 850mg',
        type: 'Diabetes',
        date: '2024-03-15',
        provider: 'Dr. Alice Johnson'
    }
]

function Prescriptions() {
    const router = useRouter();

    return <PageWrapper content={<>
        <section className="border-b flex md:flex-row flex-col items-start  md:items-end justify-between gap-2">
            <div className="flex flex-col">
                <p className="text-base">Prescription History</p>
                <p className="text-sm">A Complete Record of Your Prescriptions</p>
            </div>
            <div className="flex gap-3 items-center">
                <div className="flex gap-2 items-center h-9 rounded-lg border px-3 w-[300px]">
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
            </div>
        </section>

        <section className="w-full flex overflow-x-auto">
            <table className="w-full text-left">
                <thead>
                    <tr className="bg-gray-100 h-10">
                        <td><div className="px-3">Title</div></td>
                        <td><div className="px-3">Type</div></td>
                        <td><div className="px-3">Date</div></td>
                        <td><div className="px-3">Doctor/Provider</div></td>
                        <td><div className="px-3">Action</div></td>
                    </tr>
                </thead>
                <tbody>
                    {/* Example: Replace with real data fetching logic */}
                    {prescriptions.map((prescription, idx) => (
                        <tr key={prescription.id} className={`${idx !== prescriptions.length - 1 && 'border-b'} text-sm`}>
                            <td><div className="p-3">{prescription.title}</div></td>
                            <td><div className="p-3">{prescription.type}</div></td>
                            <td><div className="p-3">{prescription.date}</div></td>
                            <td><div className="p-3">{prescription.provider}</div></td>
                            <td>
                                <div className="p-3">
                                    <Button onClick={() => router.push(`${routes.prescriptions}/${prescription.id}`)} variant="outline" className="h-8 border-primary text-primary">View</Button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    </>} />
}

export default Prescriptions