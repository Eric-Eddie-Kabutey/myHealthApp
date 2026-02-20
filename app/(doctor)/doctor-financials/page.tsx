'use client';

import PageWrapper from '@/components/PageWrapper';
import { Star } from 'lucide-react';
import React, { SVGProps } from 'react'
import { Button } from '@/components/ui/button';
import { ChevronDown, Search } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';


const stats = [
    {
        name: 'Total Earnings',
        value: '$248,750.50',
        sub: 'All time',
        icon: (props: SVGProps<SVGSVGElement>) => (
            <svg {...props} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.00523 17.3346C4.40284 17.3346 0.671875 13.6037 0.671875 9.00126C0.671875 4.39893 4.40284 0.667969 9.00523 0.667969C13.6076 0.667969 17.3386 4.39893 17.3386 9.00126C17.3386 13.6037 13.6076 17.3346 9.00523 17.3346ZM9.00523 15.6679C12.6871 15.6679 15.6719 12.6832 15.6719 9.00126C15.6719 5.3194 12.6871 2.33464 9.00523 2.33464C5.32331 2.33464 2.33854 5.3194 2.33854 9.00126C2.33854 12.6832 5.32331 15.6679 9.00523 15.6679ZM6.08854 10.6679H10.6719C10.902 10.6679 11.0886 10.4814 11.0886 10.2513C11.0886 10.0212 10.902 9.83459 10.6719 9.83459H7.33856C6.18795 9.83459 5.25521 8.90193 5.25521 7.75126C5.25521 6.6007 6.18795 5.66797 7.33856 5.66797H8.17189V4.0013H9.83856V5.66797H11.9219V7.33459H7.33856C7.10843 7.33459 6.92188 7.52118 6.92188 7.75126C6.92188 7.98143 7.10843 8.16793 7.33856 8.16793H10.6719C11.8225 8.16793 12.7552 9.10068 12.7552 10.2513C12.7552 11.4019 11.8225 12.3346 10.6719 12.3346H9.83856V14.0013H8.17189V12.3346H6.08854V10.6679Z" fill="#3762E4" />
            </svg>
        ),
        bg: 'bg-[#3762e428]',
        color: 'text-[#3762e4]'
    },
    {
        name: 'This Month',
        value: '$18,420.75',
        sub: '+12.5% from last month',
        icon: (props: SVGProps<SVGSVGElement>) => (
            <svg {...props} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.5013 0.835938V2.5026H11.5013V0.835938H13.168V2.5026H16.5013C16.9616 2.5026 17.3346 2.8757 17.3346 3.33594V16.6693C17.3346 17.1295 16.9616 17.5026 16.5013 17.5026H1.5013C1.04107 17.5026 0.667969 17.1295 0.667969 16.6693V3.33594C0.667969 2.8757 1.04107 2.5026 1.5013 2.5026H4.83464V0.835938H6.5013ZM15.668 9.16927H2.33464V15.8359H15.668V9.16927ZM4.83464 4.16927H2.33464V7.5026H15.668V4.16927H13.168V5.83594H11.5013V4.16927H6.5013V5.83594H4.83464V4.16927Z" fill="#3C8F45" />
            </svg>
        ),
        bg: 'bg-[#3c8f4626]',
        color: 'text-[#3c8f46]'
    },
    {
        name: 'Year to Date',
        value: '$186,340.25',
        sub: '2025 earnings',
        icon: (props: SVGProps<SVGSVGElement>) => (
            <svg {...props} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.5013 0.835938V2.5026H11.5013V0.835938H13.168V2.5026H16.5013C16.9616 2.5026 17.3346 2.8757 17.3346 3.33594V16.6693C17.3346 17.1295 16.9616 17.5026 16.5013 17.5026H1.5013C1.04107 17.5026 0.667969 17.1295 0.667969 16.6693V3.33594C0.667969 2.8757 1.04107 2.5026 1.5013 2.5026H4.83464V0.835938H6.5013ZM15.668 9.16927H2.33464V15.8359H15.668V9.16927ZM4.83464 4.16927H2.33464V7.5026H15.668V4.16927H13.168V5.83594H11.5013V4.16927H6.5013V5.83594H4.83464V4.16927Z" fill="#B337E4" />
            </svg>
        ),
        bg: 'bg-[#b337e425]',
        color: 'text-[#b337e4]'
    },
    {
        name: 'Performance Score',
        value: 4.8,
        rating: 4,
        icon: (props: SVGProps<SVGSVGElement>) => (
            <svg {...props} viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.99887 15.218L4.121 18.5081L5.43377 11.9012L0.488281 7.3278L7.17748 6.53469L9.99887 0.417969L12.8202 6.53469L19.5094 7.3278L14.564 11.9012L15.8767 18.5081L9.99887 15.218Z" fill="#FFB412" />
            </svg>
        ),
        bg: 'bg-[#f59e4220]',
        color: 'text-[#f59e42]'
    },
]

function DoctorFinancials() {
    return <PageWrapper content={<>
        <section className="w-full flex gap-5 overflow-x-auto">
            {
                stats.map((stat, idx) => {
                    return <div key={`stat-${idx}`} className="rounded-xl min-w-[250px] h-[105px] border p-4 flex gap-2">
                        <aside className={`size-10 min-w-10 rounded-full flex items-center justify-center ${stat.bg}`}>
                            <stat.icon className='size-4' />
                        </aside>
                        <aside className="flex flex-col">
                            <p>{stat.name}</p>
                            <h1 className="text-xl font-semibold">{stat.value}</h1>

                            <span className={`text-sm flex items-center mt-2 gap-2 ${stat.color}`}>
                                {
                                    stat?.sub ? stat?.sub : <>
                                        <Star className={`size-4 ${stat.color}`} />
                                        <Star className={`size-4 ${stat.color}`} />
                                        <Star className={`size-4 ${stat.color}`} />
                                        <Star className={`size-4 ${stat.color}`} />
                                    </>
                                }
                            </span>
                        </aside>
                    </div>
                })
            }
        </section>

        <section className="border-b flex md:flex-row flex-col items-start  md:items-end justify-between gap-2">
            <div className="flex flex-col">
                <p className="text-base">Payout History</p>
                <p className="text-gray-600">Track your earnings, performance, and payout history</p>
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

        <section className="w-full flex overflow-x-auto">
            <table className="w-full text-left text-sm">
                <thead>
                    <tr className="h-10 bg-gray-100">
                        <td><div className="px-3">Date</div></td>
                        <td><div className="px-3">Amount</div></td>
                        <td><div className="px-3">Transaction ID</div></td>
                        <td><div className="px-3">Method</div></td>
                        <td><div className="px-3">Status</div></td>
                        <td><div className="px-3">Action</div></td>
                    </tr>
                </thead>
                <tbody>
                    {
                        [1, 2, 3, 4].map((appointment, idx, arr) => {
                            return <tr key={`appointment-${idx}`} className={`${idx !== arr.length - 1 && 'border-b'} text-sm`}>
                                <td><div className="p-3">May 15, 2025</div></td>
                                <td><div className="p-3">$12,450.00</div></td>
                                <td><div className="p-3">TXN-2025-05-15-001</div></td>
                                <td><div className="p-3">Paystack</div></td>
                                <td><div className="p-3"><div className="h-7 w-fit px-4 rounded bg-emerald-50 text-emerald-700 flex items-center">Completed</div></div></td>
                                <td><div className="p-3"><Button onClick={() => { }} variant={'outline'} className='h-8 border-primary text-primary'>Download Receipt</Button></div></td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </section>
    </>} />
}

export default DoctorFinancials