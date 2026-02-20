'use client';

import PageWrapper from '@/components/PageWrapper';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import React, { SVGProps } from 'react'

const stats = [
    {
        sign: '',
        name: 'Total Spent',
        amount: 604.00,
        sub: 'All time'
    },
    {
        sign: '',
        name: 'Monthly Total',
        amount: 180.00,
        sub: 'Active subscriptions'
    },
    {
        sign: (props:SVGProps<SVGSVGElement>)=><svg {...props} viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.7526 0.75H18.2526C18.7589 0.75 19.1693 1.1604 19.1693 1.66667V16.3333C19.1693 16.8396 18.7589 17.25 18.2526 17.25H1.7526C1.24635 17.25 0.835938 16.8396 0.835938 16.3333V1.66667C0.835938 1.1604 1.24635 0.75 1.7526 0.75ZM17.336 9.00001H2.66927V15.4167H17.336V9.00001ZM17.336 5.33333V2.58333H2.66927V5.33333H17.336Z" fill="black"/>
        </svg>,
        name: 'Active Plans',
        amount: 1,
        sub: 'Subscriptions'
    },
    {
        sign: (props:SVGProps<SVGSVGElement>)=><svg {...props} viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.3333 19.1673H1.66667C1.16041 19.1673 0.75 18.7569 0.75 18.2507V1.75065C0.75 1.24439 1.16041 0.833984 1.66667 0.833984H16.3333C16.8396 0.833984 17.25 1.24439 17.25 1.75065V18.2507C17.25 18.7569 16.8396 19.1673 16.3333 19.1673ZM15.4167 17.334V2.66732H2.58333V17.334H15.4167ZM4.41667 4.50065H8.08333V8.16732H4.41667V4.50065ZM4.41667 10.0007H13.5833V11.834H4.41667V10.0007ZM4.41667 13.6673H13.5833V15.5007H4.41667V13.6673ZM9.91667 5.41732H13.5833V7.25065H9.91667V5.41732Z" fill="black"/>
        </svg>,
        name: 'Total Invoices',
        amount: 7,
        sub: 'Generated'
    },
    {
        sign: '',
        name: 'Next billing: 2025-06-22',
        amount: 604.00,
        sub: 'Upcoming Payments'
    },
]

function Payements() {
    return <PageWrapper content={<>
        <section className="w-full flex gap-5 overflow-x-auto">
            {
                stats.map((stat, idx)=>{
                    return <div key={`stat-${idx}`} className="border w-[200px] h-[150px] rounded-xl p-4 flex flex-col gap-3 shadow">
                        <span className="w-full flex items-center justify-between">
                            <span className="size-10 border rounded-full flex items-center justify-center text-xl">
                                {
                                    stat.sign ? <stat.sign className='size-4'/> : '$'
                                }
                            </span>
                            <span className='text-sm text-right'>{stat.name}</span>
                        </span>
                        <h1 className="text-2xl font-[500]">{stat.sign ? stat.amount:`$${stat.amount}`}</h1>
                        <p className="text-sm">{stat.sub}</p>
                    </div>
                })
            }
            
        </section>

        <section className="w-full flex items-center justify-between pb-2 border-b">
            <p className="text-base">Billing History</p>
            <div className="flex gap-2 items-center h-9 rounded-lg border px-3 w-[250px]">
                <Search/>
                <input type="text" placeholder='Search...' className="w-full border-none outline-none text-sm h-full" />
            </div>
        </section>

        <section className="w-full overflow-x-auto">
            <table className="w-full text-left">
                <thead>
                    <tr className="h-10 bg-gray-100">
                        <td><div className="px-3">Invoice</div></td>
                        <td><div className="px-3">Service</div></td>
                        <td><div className="px-3">Date</div></td>
                        <td><div className="px-3">Amount</div></td>
                        <td><div className="px-3">Status</div></td>
                        <td><div className="px-3">Action</div></td>
                    </tr>
                </thead>
                <tbody>
                    {
                        [1,2,3,4].map((item, idx, arr)=>{
                            return <tr key={`his-${idx}`} className={`${idx !== arr.length - 1 && 'border-b'}`}>
                                <td><div className="p-3 flex flex-col">
                                    <p className="text-sm">INV-2025-001234</p>
                                    <small>Visa **** 4242</small>
                                </div></td>
                                <td><div className="p-3 flex flex-col">
                                    <p>Mental Health Support</p>
                                    <small>Monthly subscription - Premium Plan</small>
                                </div></td>
                                <td><div className="p-3">2025-05-22</div></td>
                                <td>
                                    <div className="p-3">$95.00</div>
                                </td>
                                <td>
                                    <div className="p-3">
                                        <div className="px-4 h-8 flex items-center text-primary bg-primary/10 w-fit rounded">Paid</div>
                                    </div>
                                </td>
                                <td>
                                    <div className="p-3">
                                        <Button variant={'outline'}>Download</Button>
                                    </div>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </section>
    </>}/>
}

export default Payements