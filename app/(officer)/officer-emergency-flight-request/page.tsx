'use client';

import PageWrapper from '@/components/PageWrapper';
import React, { SVGProps, useState } from 'react'
import { ChevronDown, Search } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import ReviewRequest from './Includes/ReviewRequest';
import ApproveRequest from './Includes/ApproveRequest';
import RejectRequest from './Includes/RejectRequest';
import Link from 'next/link';
import routes from '@/lib/routes';

const stats = [
    {
        name: `Pending Requests`,
        value: 3,
        icon: (props: SVGProps<SVGSVGElement>) => (
            <svg {...props} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20ZM10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM11 10H15V12H9V5H11V10Z" fill="#3762E4" />
            </svg>
        ),
        bg: 'bg-[#3762e421]'
    },
    {
        name: 'Approved Today',
        value: 12,
        icon: (props: SVGProps<SVGSVGElement>) => (
            <svg {...props} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10ZM10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0ZM15.4571 7.45711L14.0429 6.04289L9 11.0858L6.20711 8.2929L4.79289 9.7071L9 13.9142L15.4571 7.45711Z" fill="#4BA254" />
            </svg>
        ),
        bg: 'bg-[#34765b25]'
    },
    {
        name: 'Rejected Today',
        value: '8',
        icon: (props: SVGProps<SVGSVGElement>) => (
            <svg {...props} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20ZM10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM10 8.5858L12.8284 5.75736L14.2426 7.17157L11.4142 10L14.2426 12.8284L12.8284 14.2426L10 11.4142L7.17157 14.2426L5.75736 12.8284L8.5858 10L5.75736 7.17157L7.17157 5.75736L10 8.5858Z" fill="#E53E3E" />
            </svg>
        ),
        bg: 'bg-[#e4373722]'
    },
    {
        name: 'Under Review',
        value: 4,
        icon: (props: SVGProps<SVGSVGElement>) => (
            <svg {...props} viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 0V2H2V6C2 8.2091 3.79086 10 6 10C8.2091 10 10 8.2091 10 6V2H8V0H11C11.5523 0 12 0.44772 12 1V6C12 8.9727 9.8381 11.4405 7.0008 11.9169L7 13.5C7 15.433 8.567 17 10.5 17C11.9973 17 13.275 16.0598 13.7749 14.7375C12.7283 14.27 12 13.2201 12 12C12 10.3431 13.3431 9 15 9C16.6569 9 18 10.3431 18 12C18 13.3711 17.0802 14.5274 15.824 14.8854C15.2102 17.252 13.0592 19 10.5 19C7.4624 19 5 16.5376 5 13.5L5.00019 11.9171C2.16238 11.4411 0 8.9731 0 6V1C0 0.44772 0.44772 0 1 0H4ZM15 11C14.4477 11 14 11.4477 14 12C14 12.5523 14.4477 13 15 13C15.5523 13 16 12.5523 16 12C16 11.4477 15.5523 11 15 11Z" fill="#FFB412" />
            </svg>
        ),
        bg: 'bg-[#f5e3421f]'
    },
]

function OfficerEmergencyFlightRequest() {
    const [review, setReview] = useState(false);
    const [approveRequest, setApproveRequest] = useState(false);
    const [rejectRequest, setRejectRequest] = useState(false);

    return <PageWrapper content={<>
        <section className="w-full flex gap-5 overflow-x-auto">
            {
                stats.map((stat, idx) => {
                    return <div key={`stat ${idx}`} className="rounded-xl min-w-[250px] h-[95px] border p-4 flex gap-2">
                        <aside className={`size-10 min-w-10 rounded-full flex items-center justify-center ${stat.bg}`}>
                            <stat.icon className='size-4' />
                        </aside>
                        <aside className="flex flex-col">
                            <p className=''>{stat.name}</p>
                            <h1 className="text-xl font-semibold">{stat.value}</h1>
                        </aside>
                    </div>
                })
            }
        </section>
        <section className="border-b flex md:flex-row flex-col items-start  md:items-end justify-between gap-2">
            <div className="flex flex-col">
                <p className="text-base">Pending Your Review</p>
                <p className="text-sm">Track all emergency flight needing reviews</p>
            </div>
            <div className="flex gap-3 items-center">
                <div className="flex gap-2 items-center h-9 rounded-lg border px-3 w-[300px]">
                    <Search />
                    <input type="text" placeholder='Search...' className="w-full border-none outline-none text-sm h-full" />
                </div>
                <Link href={routes.officer.requestFlight}>
                    <Button className='rounded'>Request a flight</Button>
                </Link>
            </div>
        </section>

        <section className="w-full overflow-x-auto">
            <table className="w-full text-left">
                <thead>
                    <tr className='h-10 bg-gray-100'>
                        <td><div className="px-3">Patient</div></td>
                        <td><div className="px-3">Priority</div></td>
                        <td><div className="px-3">From → To</div></td>
                        <td><div className="px-3">Request Time</div></td>
                        <td><div className="px-3">Staus</div></td>
                        <td><div className="px-3">Action</div></td>
                    </tr>
                </thead>
                <tbody>
                    {
                        [1, 2, 3].map((item, idx, arr) => {
                            return <tr key={'review' + idx} className={`border-b`}>
                                <td>
                                    <div className="p-3 flex flex-col">
                                        Michael Johnson
                                    </div>
                                </td>
                                <td>
                                    <div className="p-3 flex flex-col">
                                        <div className="p-2 h-8 flex items-center w-fit text-sm rounded bg-red-100 text-red-500">High</div>
                                    </div>
                                </td>
                                <td>
                                    <div className="p-3 flex flex-col">
                                        <p>St. Mary's → Mayo Clinic</p>
                                        <small>Distance: 320mi</small>
                                    </div>
                                </td>
                                <td><div className="px-3 flex flex-col">
                                    <p>Today, 14:30</p>
                                    <small className="text-gray-600">Arrival: 16:46</small>
                                </div></td>
                                <td>
                                    <div className="px-3">
                                        <div className="p-2 h-8 flex items-center w-fit text-sm rounded bg-orange-100 text-orange-800">Pending</div>
                                    </div>
                                </td>
                                <td>
                                    <div className="px-3 flex gap-2">
                                        <Button onClick={() => setReview(true)} variant={'outline'} className='rounded h-8 '>Review</Button>
                                        <Button onClick={() => setApproveRequest(true)} variant={'outline'} className='rounded h-8 border-primary text-primary'>Approve</Button>
                                        <Button onClick={() => setRejectRequest(true)} variant={'outline'} className='rounded h-8 border-red-600 text-red-600'>Reject</Button>
                                    </div>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </section>

        <br />
        <section className="flex flex-col gap-2">
            <p className="text-base">Recent Activity</p>
            {
                [1, 2, 3, 4, 5].map((act, idx) => {
                    return <div key={`act-${idx}`} className="w-full py-3 flex items-center justify-between border-t">
                        <aside className="flex flex-col">
                            <p>Flight request approved</p>
                            <small className="text-gray-800">Robert Brown's transfer to Cleveland Clinic was approved by CMO</small>
                        </aside>
                        <small className="text-gray-500">10 minutes ago</small>
                    </div>
                })
            }
        </section>

        <ReviewRequest open={review} close={() => setReview(false)} />
        <ApproveRequest open={approveRequest} close={() => setApproveRequest(false)} />
        <RejectRequest open={rejectRequest} close={() => setRejectRequest(false)} />
    </>} />
}

export default OfficerEmergencyFlightRequest