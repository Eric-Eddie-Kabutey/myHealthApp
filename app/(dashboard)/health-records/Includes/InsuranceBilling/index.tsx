'use client';

import useMain from '@/app/hooks/useMain';
import PageWrapper from '@/components/PageWrapper';
import { setNewParams } from '@/lib/utils';
import React, { useEffect } from 'react'
import Overview from './Overview';
import CoverageDetails from './CoverageDetails';
import BillingHistory from './BillingHistory';
import UpcomingBills from './UpcomingBills';

const tabs = [
    { label: 'Overview' },
    { label: 'Coverage Details' },
    { label: 'Billing History' },
    { label: 'Upcoming Bills' }
]

export default function InsuranceBilling() {
    const {searchParams, router} = useMain()
        const tab = searchParams.get('insurance') || 'Overview';
        const [activeTab, setActiveTab] = React.useState(tab);
        useEffect(()=> setActiveTab(tab), [tab]);
    return <PageWrapper content={<>
        <span className="pb-3 border-b">Insurance Billing</span>
        <section className="w-full border rounded-2xl p-4 flex flex-col gap-4">
            <div className="w-full flex gap-2 border-b">
                {tabs.map(({ label }) => (
                    <button key={label}
                        className={`px-4 py-2 whitespace-nowrap border-b-2 transition-colors
                            ${ activeTab === label ? 'border-primary font-[500]' : 'border-transparent text-gray-600 font-light hover:text-primary' }
                        `}
                        onClick={() => {
                            router.replace(setNewParams(searchParams, 'insurance', label));
                            setActiveTab(label)
                        }}
                    >
                        {label}
                    </button>
                ))}
            </div>
            {
                activeTab === 'Overview' ? <Overview /> : 
                activeTab === 'Coverage Details' ? <CoverageDetails /> : 
                activeTab === 'Billing History' ? <BillingHistory /> : 
                activeTab === 'Upcoming Bills' ? <UpcomingBills /> : 
                null
            }
        </section>
    </>} />
}
