'use client';

import GoogleCharts from '@/components/GoogleCharts';
import React from 'react'
import RegionalDistribution from './UsageReportsCharts/RegionalDistribution';
import ActivityStatistics from './UsageReportsCharts/ActivityStatistics';
import SubscriptionConversions from './UsageReportsCharts/SubscriptionConversions';

function UsageReports() {
    return <div className="w-full flex flex-col items-center main-content gap-5">
        <section className="w-full min-[1420px]:w-[1200px] flex flex-col gap-5 min-h-[400px] py-[2rem]">
            <p className='lg:ml-10 z-10 text-base'>Activity Statistics</p>
            <ActivityStatistics className='' />
        </section>
        <hr className="w-full my-4" />
        <section className="w-full min-[1420px]:w-[1200px] flex flex-col gap-5 h-[400px] xl:h-[500px]">
            <p className='lg:ml-10 z-10 text-base'>Activity Statistics</p>
            <RegionalDistribution className='lg:scale-[1.25] xl:scale-[1.5]' />
        </section>
        <hr className="w-full my-4" />
        <section className="w-full min-[1420px]:w-[1200px] flex flex-col gap-5 h-[500px]">
            <p className='lg:ml-10 z-10 text-base'>Subscription Conversions</p>
            <SubscriptionConversions />
        </section>
    </div>
}

export default UsageReports