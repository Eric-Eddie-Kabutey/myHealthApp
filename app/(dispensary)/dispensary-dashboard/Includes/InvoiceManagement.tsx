'use client';

import useMain from '@/app/hooks/useMain';
import { Button } from '@/components/ui/button';
import routes from '@/lib/routes';
import { setNewParams } from '@/lib/utils';
import React, { useEffect } from 'react'

type TabType = 'All' | 'Pending' | 'Sent' | 'Awaiting Payment' | 'Paid';
const tabs: TabType[] = [
    'All',
    'Pending',
    'Sent',
    'Awaiting Payment',
    'Paid'
];

function InvoiceManagement() {
    const { searchParams, router } = useMain();
    const tab = searchParams.get('invoice') as TabType || 'All';
    const [activeTab, setActiveTab] = React.useState<TabType>(tab);
    useEffect(() => setActiveTab(tab), [tab]);


    return <div className="main-content flex flex-col gap-4">
        <span className="flex items-center justify-between">
            <p>Invoice Management</p>
            <Button variant={'outline'} className='rounded h-9 px-5'>View All</Button>
        </span>

        <span className="w-full border-b flex items-end">
            {tabs.map((t) => (
                <button
                    key={t}
                    className={`px-4 py-2 -mb-px border-b-2 transition-colors duration-200 ${
                        activeTab === t
                            ? 'border-primary border-b font-semibold'
                            : 'border-transparent text-muted-foreground'
                    }`}
                    onClick={() => {
                        setActiveTab(t);
                        router.replace(routes.dispensary.dashboard+setNewParams(searchParams, 'invoice', t));
                    }}
                    type="button"
                >
                    {t}
                </button>
            ))}
        </span>

        <section className="w-full flex text-left text-sm overflow-x-auto">
            <table className="w-full text-left">
                <thead>
                    <tr className='h-10 bg-gray-100'>
                        <td><div className="px-3">Invoice</div></td>
                        <td><div className="px-3">Patient</div></td>
                        <td><div className="px-3">Date</div></td>
                        <td><div className="px-3">Amount</div></td>
                        <td><div className="px-3">Status</div></td>
                    </tr>
                </thead>
                <tbody>
                    {
                        [1, 2, 3].map((item, idx, arr) => {
                            return <tr key={'symptons' + idx} className={`${idx !== arr.length - 1 && 'border-b'}`}>
                                <td>
                                    <div className="p-3 flex flex-col">#INV-2023-1042</div>
                                </td>
                                <td>
                                    <div className="p-3">Sarah Johnson</div>
                                </td>
                                <td><div className="p-3">Today, 10:30 AM</div></td>
                                <td><div className="p-3">$45.75</div></td>
                                <td>
                                    <div className="px-3">
                                        <div className="p-2 h-8 flex items-center w-fit text-sm rounded bg-indigo-100 text-indigo-500">Sent</div>
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

export default InvoiceManagement