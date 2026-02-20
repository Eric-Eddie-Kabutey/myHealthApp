'use client';

import PageWrapper from '@/components/PageWrapper';
import React, { useEffect } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import useMain from '@/app/hooks/useMain';
import { setNewParams } from '@/lib/utils';
import { ChevronDown, Download, FilterIcon, Search } from 'lucide-react';
import EscalateAdmin from './Includes/EscalateAdmin';
import StaffReports from './Includes/StaffReports';
import ActivityLogs from './Includes/ActivityLogs';


type TabType = 'Staff Reports' | 'Activity Logs'

const tabs: { label: TabType }[] = [
    { label: 'Staff Reports' },
    { label: 'Activity Logs' }
];

function OfficerReportingEscalation() {
    const { searchParams, router } = useMain();
    const tab = searchParams.get('tab') as TabType || 'Staff Reports';
    const [activeTab, setActiveTab] = React.useState<TabType>(tab);
    useEffect(() => setActiveTab(tab), [tab]);
    const [escalateAdmin, setEscalateAdmin] = React.useState(false);

    return <PageWrapper content={<>
        <section className="border-b flex md:flex-row flex-col items-start  md:items-end justify-between gap-2">
            <div className="flex items-center">
                {tabs.map(({ label }) => (
                    <button key={label}
                        className={`px-4 pb-3 whitespace-nowrap border-b-2 transition-colors 
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
            <div className="flex gap-2 pb-1.5">
                <aside className="rounded-lg w-[300px] px-2 h-9 border flex items-center gap-2">
                    <Search className='size-5' />
                    <input type="text" placeholder='Search...' className="border-none outline-none text-sm w-full h-full" />
                </aside>
                {
                    ['Filter'].map((filter, idx) => {
                        return <Popover key={`filter-${idx}`}>
                            <PopoverTrigger asChild>
                                <Button variant="outline" className='flex items-center gap-3 h-9 rounded-lg'>
                                    <FilterIcon />
                                    {filter}
                                    <ChevronDown className='size-5' />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent side={'bottom'} className="w-[300px] text-[14px] flex flex-col gap-3 mr-12 rounded-lg px-6">

                            </PopoverContent>
                        </Popover>
                    })
                }
                <Button onClick={() => setEscalateAdmin(true)} className='rounded'>Excalation to Super Admin</Button>
            </div>
        </section>

        {
            activeTab === 'Staff Reports' ? <StaffReports /> : <ActivityLogs />
        }

        <EscalateAdmin open={escalateAdmin} close={() => setEscalateAdmin(false)} />
    </>} />
}

export default OfficerReportingEscalation