'use client';

import useMain from '@/app/hooks/useMain';
import PageWrapper from '@/components/PageWrapper';
import { Button } from '@/components/ui/button';
import { setNewParams } from '@/lib/utils';
import { Calendar, ChevronDown, Download, Search } from 'lucide-react';
import React, { SVGProps, useEffect } from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import AuditTrails from './Tabs/AuditTrails';
import SecurityLogs from './Tabs/SecurityLogs';

type TabType = 'Audit Trails'|'Security Logs'
const tabs = [
    'Audit Trails',
    'Security Logs'
]


function AdminAuditLogs() {
    const {searchParams, router} = useMain();
    const tab = searchParams.get('tab') as TabType || 'Audit Trails';
    const [activeTab, setActiveTab] = React.useState<TabType>(tab);
    useEffect(()=>setActiveTab(tab), [tab]);

    return <PageWrapper content={<>
        <section className="w-full flex items-end justify-between border-b">
            <div className="flex">
                {tabs.map((t:any) => (
                    <button key={t} className={`pb-2 px-4 text-center ${activeTab === t ? 'border-b-2 border-primary' : 'text-muted-foreground'}`}
                        onClick={() => {
                            router.replace(setNewParams(searchParams, 'tab', t))
                            setActiveTab(t)
                        }}>
                        {t}
                    </button>
                ))}
            </div>
            <Button className='mb-2 h-8.5 gap-4 px-4'>
                <Download className='rotate-180'/>
                Export
            </Button>
        </section>

        {
            activeTab === 'Audit Trails' ? <AuditTrails/> :
            activeTab === 'Security Logs' ? <SecurityLogs/> : null
        }
    </>}/>
}

export default AdminAuditLogs