'use client'

import useMain from '@/app/hooks/useMain'
import PageWrapper from '@/components/PageWrapper'
import { Button } from '@/components/ui/button'
import routes from '@/lib/routes'
import { setNewParams } from '@/lib/utils'
import { ArrowLeft, CheckCircleIcon, MapPin, Plus } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import BasicInfo from './Includes/BasicInfo'
import DocumentCredentials from './Includes/DocumentCredentials'
import Approve from './Includes/Approve'
import Reject from './Includes/Reject'

type TabType = 'Basic Information' | 'Document & Credentials'

const tabs: { label: TabType }[] = [
    { label: 'Basic Information' },
    { label: 'Document & Credentials' }
];

function DispatcherDetails() {
    const { searchParams, router, params } = useMain();
    const tab = searchParams.get('tab') as TabType || 'Basic Information';
    const [activeTab, setActiveTab] = React.useState<TabType>(tab);
    const [approve, setApprove] = useState(false)
    const [reject, setReject] = useState(false)
    useEffect(() => setActiveTab(tab), [tab]);

    return <PageWrapper content={<>
        <section className="w-full py-[0.5rem] flex items-center justify-between gap-4 border-b">
            <div className="flex items-center gap-2">
                <button onClick={() => window.history.back()} className="size-8 rounded-full border flex items-center justify-center">
                    <ArrowLeft className='size-4' />
                </button>
                <div className="flex flex-col">
                    <p>Appointment History</p>
                    <small className="text-gray-700">Review and approve dispatch applications</small>
                </div>
            </div>
            <div className="px-4 py-1 bg-orange-100 text-orange-800 rounded">Pending</div>
        </section>

        <section className="rounded-lg bg-gray-100 p-4 flex items-center justify-between">
            <div className="flex gap-2">
                <img src="https://randomuser.me/portraits/women/95.jpg" alt="" className="size-10 min-w-10 rounded-full object-cover" />
                <div className="flex flex-col gap-1">
                    <p className='text-base'>Joshua Odame</p>
                    <p className="text-sm text-gray-600">odamejoshua37@gmail.com</p>
                    <span className="flex items-center gap-2">
                        <MapPin className='size-4'/> Accra, Ghana
                    </span>
                </div>
            </div>
            <div className="flex gap-3">
                <Button onClick={() => setReject(true)} variant={'outline'} className='border-red-700 text-red-700 bg-red-50'>
                    <Plus className='size-4 rotate-45'/> Reject
                </Button>
                <Button onClick={()=>setApprove(true)}>
                    <CheckCircleIcon className='size-4'/> Approve
                </Button>
            </div>
        </section>

        <section className="flex flex-col gap-3">
            <div className="w-full border-b flex">
                {tabs.map(({ label }) => (
                    <button
                        key={label}
                        className={`px-4 py-2 -mb-px border-b-2 transition-colors ${
                            activeTab === label
                                ? 'border-primary'
                                : 'border-transparent text-gray-600'
                        }`}
                        onClick={() => router.replace(routes.dispensary.dispatcher+`/${params.id}`+setNewParams(searchParams, 'tab', label))}
                    >
                        {label}
                    </button>
                ))}
            </div>

            {
                activeTab === 'Basic Information' ? <BasicInfo/> :
                activeTab === 'Document & Credentials' ? <DocumentCredentials/> : null
            }

            <Approve open={approve} close={()=>setApprove(false)}/>
            <Reject open={reject} close={()=>setReject(false)}/>
        </section>
    </>}/>
}

export default DispatcherDetails