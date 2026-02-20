'use client';

import useMain from '@/app/hooks/useMain';
import PageWrapper from '@/components/PageWrapper';
import React, { useEffect, useState } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { ChevronDown, Filter, Search } from 'lucide-react';
import PrescriptionReview from './Includes/PrescriptionReview';
import PricingInvoicing from './Includes/PricingInvoicing';


type TabType = "Prescription Review" | "Pricing Invoicing";
const tabs: TabType[] = [
    "Prescription Review",
    "Pricing Invoicing"
];

function DispensaryPrescriptionManagementDashboard() {
    const { searchParams, router } = useMain();
    const tab = searchParams.get('tab') as TabType || 'Prescription Review';
    const [activeTab, setActiveTab] = useState<TabType>(tab);
    const [submitReport, setSubmitReport] = useState<any>(null)
    useEffect(() => setActiveTab(tab), [tab]);


    return <PageWrapper content={<>
        <section className="border-b flex md:flex-row flex-col items-start  md:items-end justify-between gap-2">
            <div className="flex gap-1">
                {
                    tabs.map((tab, idx) => {
                        return <button onClick={() => router.replace(`?tab=${tab}`)} key={`tab-${idx}`} className={`p-3 ${tab === activeTab ? 'border-b-2 border-primary' : 'hover:border-b'}`}>{idx === 1 ? 'Pricing & Invoicing': tab}</button>
                    })
                }
            </div>
            <div className="flex gap-3 pb-1">
                <aside className="rounded-lg w-[300px] px-2 h-9 border flex items-center gap-2">
                    <Search className='size-5' />
                    <input type="text" placeholder='Search...' className="border-none outline-none text-sm w-full h-full" />
                </aside>
                <Popover>
                    <PopoverTrigger asChild>
                        <Button variant="outline" className='flex items-center gap-3 h-8 rounded-lg'>
                            <Filter className='size-4' />
                            Filter
                            <ChevronDown className='size-5' />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent side={'bottom'} className="w-[650px] text-[14px] flex flex-col gap-3 mr-12 rounded-xl px-6">

                    </PopoverContent>
                </Popover>
            </div>
        </section>

        {
            activeTab === 'Prescription Review' ? <PrescriptionReview/> :
            activeTab === 'Pricing Invoicing' ? <PricingInvoicing/> : null
        }
    </>} />
}

export default DispensaryPrescriptionManagementDashboard