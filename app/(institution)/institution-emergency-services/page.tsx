'use client';

import PageWrapper from '@/components/PageWrapper';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react'
import EmergencyServices from './Includes/EmergencyServices';
import AmbulanceStatus from './Includes/AmbulanceStatus';
import { useRoleGuard } from '@/app/hooks/useRoleGuard';

type TabType = 'Emergency Services Availability' | 'Ambulance Fleet Status';
const tabs = ['Emergency Services Availability','Ambulance Fleet Status']

function IntitutionServices() {
    useRoleGuard('institution')
    const searchParams = useSearchParams();
    const router = useRouter();
    const tab = searchParams.get('tab') as TabType || 'Emergency Services Availability';
    const [activeTab, setActiveTab] = React.useState<TabType>(tab);
    useEffect(()=>setActiveTab(tab), [tab]);

    return <PageWrapper content={<>
        <section className="w-full border-b flex">
            {
                tabs.map((tab, idx)=>{
                    return <button key={`tab-${idx}`} onClick={()=>router.replace(`?tab=${tab}`)} className={`px-4 pb-3 ${activeTab === tab ? 'border-b-2 border-primary':'text-gray-600'}`}>{idx === 0 ? 'Emergency Services & Availability':tab}</button>
                })
            }
        </section>

        {
            activeTab === 'Emergency Services Availability' ? <EmergencyServices/>:
            <AmbulanceStatus/>
        }
    </>}/>
}

export default IntitutionServices