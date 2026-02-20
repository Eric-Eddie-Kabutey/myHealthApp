'use client';

import useMain from '@/app/hooks/useMain';
import PageWrapper from '@/components/PageWrapper';
import { Button } from '@/components/ui/button';
import { setNewParams } from '@/lib/utils';
import { Download } from 'lucide-react';
import React, { useEffect } from 'react'
import UsageReports from './Includes/UsageReports';
import PerformanceAnalytics from './Includes/PerformanceAnalytics';
import FinancialReports from './Includes/FinancialReports';

type TabType = 'Usage Reports'|'Performance Analytics'|'Financial Reports'
const tabs = ['Usage Reports' , 'Performance Analytics' , 'Financial Reports']
function AdminAnalytics() {
    const {searchParams, router} = useMain();
    const tab = searchParams.get('tab') as TabType || 'Usage Reports';
    const [activeTab, setActiveTab] = React.useState<TabType>(tab);
    useEffect(()=>setActiveTab(tab), [tab]);

    return <PageWrapper className='pt-0' content={<>
        <section className="w-full flex items-end justify-between border-b sticky top-0 bg-white z-20 h-14">
            <div className="flex">
                {tabs.map((t: any) => (
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
                <Download className='rotate-180' />
                Export
            </Button>
        </section>

        {
            activeTab === 'Usage Reports' ? <UsageReports/> :
            activeTab === 'Performance Analytics' ? <PerformanceAnalytics/> :
            activeTab === 'Financial Reports' ? <FinancialReports/> : null
        }
    </>}/>
}

export default AdminAnalytics