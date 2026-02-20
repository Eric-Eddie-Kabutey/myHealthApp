'use client';

import PageWrapper from '@/components/PageWrapper';
import React, { useEffect, useState } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { ChevronDown, Filter, Search } from 'lucide-react';
import useMain from '@/app/hooks/useMain';
import ReportEntry from './Includes/ReportEntry';
import NextFollowUp from './Includes/NextFollowUp';
import SubmitReportModal from './Includes/SubmitReportModal';

type TabType = "Today's Follow-Ups" | "Follow-Up Report Entry" | "Schedule Next Follow-Up";
const tabs = [
    "Today's Follow-Ups",
    "Follow-Up Report Entry",
    "Schedule Next Follow-Up"
];

function NurseFollowUp() {
    const { searchParams, router } = useMain();
    const tab = searchParams.get('tab') as TabType || 'Today\'s Follow-Ups';
    const [activeTab, setActiveTab] = useState<TabType>(tab);
    const [submitReport, setSubmitReport] = useState<any>(null)
    useEffect(() => setActiveTab(tab), [tab]);

    return <PageWrapper content={<>
        <section className="border-b flex md:flex-row flex-col items-start  md:items-end justify-between gap-2">
            <div className="flex gap-1">
                {
                    tabs.map((tab, idx) => {
                        return <button onClick={() => router.replace(`?tab=${tab}`)} key={`tab-${idx}`} className={`p-3 ${tab === activeTab ? 'border-b-2 border-primary' : 'hover:border-b'}`}>{tab}</button>
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
            activeTab === `Today's Follow-Ups` ?
                <section className="w-full flex flex-col gap-5 main-content">
                    {
                        [1, 2].map((follow, idx) => {
                            return <div key={`follow-up-${idx}`} className="w-full border rounded-xl p-4 flex flex-col gap-3">
                                <span className="w-full flex items-center justify-between">
                                    <p>Sarah Johnson</p>
                                    <div className="px-4 h-6 bg-gray-200 text-xs flex items-center rounded">ID: P-2024-001</div>
                                </span>
                                <span className="w-full flex gap-10">
                                    <div className="flex flex-col">
                                        <small className="text-gray-600">SCHEDULED TIME</small>
                                        <p className='text-sm'>10:30 AM</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <small className="text-gray-600">TYPE</small>
                                        <p className='text-sm'>Post-Surgery Check</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <small className="text-gray-600">STATUS</small>
                                        <span className='text-xs px-3 h-6 rounded bg-indigo-100 text-indigo-500 flex items-center'>10:30 AM</span>
                                    </div>
                                </span>

                                <aside className="w-full flex gap-5 pt-3 border-t">
                                    <Button variant={'outline'} className='rounded border-primary text-primary'>Start Video Session</Button>
                                    <Button variant={'outline'} className='rounded border-primary text-primary'>Start Audio Session</Button>
                                    <Button variant={'outline'} className='rounded border-primary text-primary'>View Notes</Button>
                                    <Button onClick={() => setSubmitReport(follow)} variant={'outline'} className='rounded border-primary text-primary'>Submit Report</Button>
                                </aside>
                            </div>
                        })
                    }
                </section> :

                activeTab === 'Follow-Up Report Entry' ? <ReportEntry /> :
                    activeTab === `Schedule Next Follow-Up` ? <NextFollowUp /> : null
        }

        {/* Modals ............. */}
        <SubmitReportModal open={Boolean(submitReport)} close={() => setSubmitReport(null)} />
    </>} />
}

export default NurseFollowUp