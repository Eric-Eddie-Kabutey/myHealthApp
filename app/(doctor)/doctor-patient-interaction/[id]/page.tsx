'use client';

import PageWrapper from '@/components/PageWrapper';
import { Button } from '@/components/ui/button';
import routes from '@/lib/routes';
import { ArrowLeft } from 'lucide-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import StartConsultation from './Includes/StartConsultation';
import Overview from './Includes/Overview';

const tabs = [
    "Overview", "Medical History",
    'Current Health Data', 'Medications',
    'Visits / Encounter History', 
    'Imaging and Scans',
    'Uploaded Documents',
    'Communication Records'
]

function DoctorPatientInteractionDetails() {
    const router = useRouter();
    const path = usePathname();
    const searchParams = useSearchParams();
    const tab = searchParams.get('tab') || 'Overview';
    const [activeTab, setActiveTab] = useState(tabs[0]);
    useEffect(()=>setActiveTab(tab),[tab]);
    const [startConsultation, setStartConsultation] = useState(false)


    return <PageWrapper content={<>
        <StartConsultation open={startConsultation} close={()=>setStartConsultation(false)}/>
        <section className="w-full pb-3 border-b flex items-center gap-4 justify-between">
            <div className="flex items-center gap-4">
                <button onClick={()=>window.history.back()} className="size-12 rounded-full border flex items-center justify-center"><ArrowLeft className='size-5'/></button>
                <p>Sarah Johnson Health Record</p>
            </div>
            <div className="w-fit flex flex-col items-end">
                <Button onClick={()=>setStartConsultation(true)} className='rounded px-8 h-10'>Start Consultation</Button>
            </div>
        </section>

        <section className="w-full overflow-x-auto flex flex-nowrap text-nowrap border-b">
            {
                tabs.map((tab, idx)=>{
                    return <button key={`tab-${idx}`} onClick={()=>router.replace(path+`?tab=${tab}`)} className={`px-4 pb-2 text-sm hover:border-b-2 ${tab === activeTab ? `border-b-2 border-primary`:``}`}>
                        {tab}
                    </button>
                })
            }
        </section>

        {
            activeTab === 'Overview' ? <Overview/> : <Overview/>
        }
    </>}/>
}

export default DoctorPatientInteractionDetails