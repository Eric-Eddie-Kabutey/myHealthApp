'use client';

import PageWrapper from '@/components/PageWrapper';
import React, { useEffect, useState } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { ChevronDown, Filter, Search } from 'lucide-react';
import useMain from '@/app/hooks/useMain';
import DispatcherProfile from './Includes/DispatcherProfile';
import TrainingStatus from './Includes/TrainingStatus';
import NewDispatcher from './Includes/NewDispatcher';
import DispatcherSignUps from './Includes/DispatcherSignUps';


type TabType = "Dispatcher Profile" | "Training Status" | "Dispatcher Sign Ups";
const tabs: TabType[] = [
    "Dispatcher Profile",
    "Training Status",
    "Dispatcher Sign Ups"
];



function DispensaryDispatcherManagementDashboard() {
    const { searchParams, router } = useMain();
    const tab = searchParams.get('tab') as TabType || 'Dispatcher Profile';
    const [activeTab, setActiveTab] = useState<TabType>(tab);
    const [newDispatcher, setNewDispatcher] = useState(false)
    useEffect(() => setActiveTab(tab), [tab]);


    return <PageWrapper content={<>
        <section className="border-b flex xl:flex-row flex-col-reverse items-start  xl:items-end justify-between gap-2">
            <div className="flex gap-1 text-nowrap">
                {
                    tabs.map((tab, idx) => {
                        return <button onClick={() => router.replace(`?tab=${tab}`)} key={`tab-${idx}`} className={`p-3 ${tab === activeTab ? 'border-b-2 border-primary' : 'hover:border-b'}`}>{tab}</button>
                    })
                }
            </div>
            <div className="flex xl:justify-normal justify-end w-full xl:w-fit gap-3 pb-1">
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
                <Button onClick={()=>setNewDispatcher(true)} className='rounded'>Add Dispatcher</Button>
            </div>
        </section>

        {
            activeTab === 'Dispatcher Profile'? <DispatcherProfile/> :
            activeTab === 'Training Status'? <TrainingStatus/> :
            activeTab === 'Dispatcher Sign Ups'? <DispatcherSignUps/> : null
        }

        <NewDispatcher open={newDispatcher} close={()=>setNewDispatcher(false)}/>
    </>} />
}

export default DispensaryDispatcherManagementDashboard