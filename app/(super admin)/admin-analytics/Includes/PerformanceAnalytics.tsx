'use client';

import GoogleCharts from '@/components/GoogleCharts';
import React from 'react'
import RegionalDistribution from './UsageReportsCharts/RegionalDistribution';
import ActivityStatistics from './UsageReportsCharts/ActivityStatistics';
import SubscriptionConversions from './UsageReportsCharts/SubscriptionConversions';
import PerformanceAnalyticsChart from './PerformanceAnalyticsCharts/PerformanceAnalytics';
import QueryLoadByHour from './PerformanceAnalyticsCharts/QueryLoadByHour';
import ModuleUsage from './PerformanceAnalyticsCharts/ModuleUsage';

function PerformanceAnalytics() {
    return <div className="w-full flex flex-col items-center main-content gap-[2rem]">
        <section className="w-full min-[1420px]:w-[1200px] flex flex-col gap-5 min-h-[400px] p-4 border rounded-lg">
            <span className='border-b pb-4 z-10 text-base'>Performance Analytics</span>
            <div className="w-full grid grid-cols-3 gap-5">
                <aside className="w-full p-4 flex flex-col border rounded">
                    <p className="text-sm">Avg Latency</p>
                    <span className="text-[1.5rem] flex items-center gap-2 font-semibold text-primary">
                        99.98% <p className="text-sm bg-emerald-100 text-emerald-500 font-normal px-2 py-0.5 rounded">+0.02%</p>
                    </span>
                </aside>
                <aside className="w-full p-4 flex flex-col border rounded">
                    <p className="text-sm">API Uptime</p>
                    <span className="text-[1.5rem] flex items-center gap-2 font-semibold text-indigo-600">
                        142ms <p className="text-sm bg-red-100 text-red-500 font-normal px-2 py-0.5 rounded">+8ms</p>
                    </span>
                </aside>
                <aside className="w-full p-4 flex flex-col border rounded">
                    <p className="text-sm">Max Load</p>
                    <span className="text-[1.5rem] flex items-center gap-2 font-semibold text-purple-600">
                        68%
                    </span>
                </aside>
            </div>
            <PerformanceAnalyticsChart />
        </section>

        <section className="w-full min-[1420px]:w-[1200px] flex flex-col gap-5 h-auto">
            <p className='z-10 text-base'>Activity Statistics</p>
            <div className="w-full p-4 border rounded-lg">
                <QueryLoadByHour/>
            </div>
        </section>

        <section className="w-full min-[1420px]:w-[1200px] flex flex-col gap-5 h-auto">
            <p className='z-10 text-base'>Subscription Conversions</p>
            <div className="w-full border rounded-lg p-4">
                <ModuleUsage />
            </div>
        </section>
        <br />
    </div>
}

export default PerformanceAnalytics