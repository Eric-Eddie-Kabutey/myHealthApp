'use client';

import useMain from '@/app/hooks/useMain';
import PageWrapper from '@/components/PageWrapper';
import routes from '@/lib/routes';
import React, { useEffect, useState } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { ChevronDown, Download, Filter, Search } from 'lucide-react';
import DoctorManagement from './Includes/DoctorManagement';
import NurseManagement from './Includes/NurseManagement';
import PendingApplications from './Includes/PendingApplications';


type TabType = 'Doctor Management' | 'Nurse Management' | 'Pending Applications'
const tabs = ['Doctor Management', 'Nurse Management', 'Pending Applications']

function OfficerDoctorNurseOversight() {
    const { searchParams, router } = useMain();
    const tab = searchParams.get('tab') as TabType || 'Doctor Management';
    const [activeTab, setActiveTab] = useState<TabType>(tab);
    useEffect(() => setActiveTab(tab), [tab]);


    return <PageWrapper content={<>
        <section className="border-b flex md:flex-row flex-col items-start  md:items-end justify-between gap-2">
            <div className="flex">
                {
                    tabs.map((tab, idx) => {
                        return <button onClick={() => router.push(routes.officer.docNurseOversight + `?tab=${tab}`)} key={`tab-${idx}`} className={`px-4 pb-3 ${tab === activeTab && 'border-b-2 border-primary '}`}>{tab}</button>
                    })
                }
            </div>
            <div className="flex gap-3 py-2">
                <aside className="rounded-lg w-[300px] px-2 h-9 border flex items-center gap-2">
                    <Search className='size-5' />
                    <input type="text" placeholder='Search...' className="border-none outline-none text-sm w-full h-full" />
                </aside>
                <Popover>
                    <PopoverTrigger asChild>
                        <Button variant="outline" className='flex items-center gap-3 h-9 rounded'>
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
            activeTab === 'Doctor Management' ? <DoctorManagement /> :
                activeTab === 'Nurse Management' ? <NurseManagement /> :
                    activeTab === 'Pending Applications' ? <PendingApplications /> : null
        }
    </>} />
}

export default OfficerDoctorNurseOversight