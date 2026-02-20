'use client';

import { useRoleGuard } from '@/app/hooks/useRoleGuard';
import PageWrapper from '@/components/PageWrapper'
import { Button } from '@/components/ui/button'
import { User, Video } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { SVGProps, useEffect, useState } from 'react'
import Appointments from './Includes/Appointments';
import Availability from './Includes/Availability';
import History from './Includes/History';
import WelcomePrompt from '@/components/WelcomePrompt';



const tabs = ['Appointments','Availability','History']

function DoctorDashboard() {
    useRoleGuard('doctor')
    const [showWelcome, setShowWelcome] = React.useState(true)
    const router = useRouter();
    const searchParam = useSearchParams();
    const tab = searchParam.get('tab') || tabs[0];
    const [activeTab, setActiveTab] = useState(tab);
    useEffect(()=>setActiveTab(tab),[tab]);

    return <PageWrapper content={<>
        <WelcomePrompt open={showWelcome} close={() => setShowWelcome(false)} />
        <section className="w-full flex border-b">
            {
                tabs.map((tab, idx)=>{
                    return <button onClick={()=>router.replace(`?tab=${tab}`)} key={idx+'tab'} className={`px-4 pb-2 ${tab === activeTab && 'border-b-2 border-primary'}`}>{tab}</button>
                })
            }
        </section>


        {
            activeTab === 'Appointments' ? <Appointments/> :
            activeTab === 'Availability' ? <Availability/> :
            activeTab === 'History' ? <History/> :null
        }
    </>}/>
}

export default DoctorDashboard