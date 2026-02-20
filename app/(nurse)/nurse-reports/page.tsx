'use client';

import useMain from '@/app/hooks/useMain';
import PageWrapper from '@/components/PageWrapper';
import React, { useEffect, useState } from 'react'
import ShiftEndReport from './Includes/ShiftEndReport';
import ActivityLog from './Includes/ActivityLog';

type TabType = "Shift-End Report"|"Activity Log";
const tabs = [
    "Shift-End Report",
    "Activity Log"
];

function NurseReports() {
    const {} = useMain();
    const {searchParams, router} = useMain();
    const tab = searchParams.get('tab') as TabType || 'Shift-End Report';
    const [activeTab, setActiveTab] = useState<TabType>(tab);
    useEffect(()=>setActiveTab(tab),[tab]);

    return <PageWrapper content={<>
        <section className="border-b w-full flex gap-2">
            {
                tabs.map((tab, idx)=>{
                    return <button onClick={()=>router.replace(`?tab=${tab}`)} key={`tab-${idx}`} className={`p-2 ${tab === activeTab ? 'border-b-2 border-primary':'hover:border-b'}`}>{tab}</button>
                })
            }
        </section>

        {
            activeTab === 'Shift-End Report' ? <ShiftEndReport/> : 
            activeTab === 'Activity Log' ? <ActivityLog/> : null
        }
    </>}/>
}

export default NurseReports