'use client';

import PageWrapper from '@/components/PageWrapper';
import React, { useEffect } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { ChevronDown, Filter, Search } from 'lucide-react';
import useMain from '@/app/hooks/useMain';
import { setNewParams } from '@/lib/utils';
import PrescriptionLog from './Includes/PrescriptionLog';
import FlagInappropriatePrescriptions from './Includes/FlagInappropriatePrescriptions';


type TabType = 'Prescription Log' | 'Flag Inappropriate Prescriptions'

const tabs: { label: TabType }[] = [
    { label: 'Prescription Log' },
    { label: 'Flag Inappropriate Prescriptions' }
];

function OfficerPrescriptionManagement() {
    const { searchParams, router } = useMain();
    const tab = searchParams.get('tab') as TabType || 'Prescription Log';
    const [activeTab, setActiveTab] = React.useState<TabType>(tab);
    useEffect(() => setActiveTab(tab), [tab]);

    return <PageWrapper content={<>
        <section className="border-b flex md:flex-row flex-col items-start  md:items-end justify-between gap-2">
            <div className="flex">
                {tabs.map(({ label }) => (
                    <button key={label}
                        className={`px-4 py-3 whitespace-nowrap border-b-2 transition-colors 
                            ${activeTab === label ? 'border-primary font-[500]' : 'border-transparent text-gray-600 font-light hover:text-primary'}
                        `}
                        onClick={() => {
                            router.replace(setNewParams(searchParams, 'tab', label));
                            setActiveTab(label)
                        }}
                    >
                        {label}
                    </button>
                ))}
            </div>
            <div className="flex gap-3">
                <aside className="rounded-lg w-[300px] px-2 h-9 border flex items-center gap-2">
                    <Search className='size-5' />
                    <input type="text" placeholder='Search...' className="border-none outline-none text-sm w-full h-full" />
                </aside>
                <Popover>
                    <PopoverTrigger asChild>
                        <Button variant="outline" className='flex items-center gap-3 h-9 rounded-lg'>
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
            activeTab === 'Prescription Log' ? <PrescriptionLog /> :
                activeTab === 'Flag Inappropriate Prescriptions' ? <FlagInappropriatePrescriptions /> : null
        }
    </>} />
}

export default OfficerPrescriptionManagement