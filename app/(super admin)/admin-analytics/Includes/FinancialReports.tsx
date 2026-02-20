'use client';

import GoogleCharts from '@/components/GoogleCharts';
import React from 'react'
import RegionalDistribution from './UsageReportsCharts/RegionalDistribution';
import ActivityStatistics from './UsageReportsCharts/ActivityStatistics';
import SubscriptionConversions from './UsageReportsCharts/SubscriptionConversions';
import RevenueByCategory from './FinanacialReportsCharts/RevenueByCategory';

const data = [
    { date: '2025-06-01', amount: 2450, count: 12, reason: 'Service Quality' },
    { date: '2025-06-02', amount: 1800, count: 8, reason: 'Technical Issues' },
    { date: '2025-06-03', amount: 3200, count: 15, reason: 'Billing Error' },
    { date: '2025-06-04', amount: 1950, count: 9, reason: 'Service Quality' },
    { date: '2025-06-05', amount: 2800, count: 13, reason: 'User Request' },
];

function FinancialReports() {
    return <div className="w-full flex flex-col items-center main-content gap-5">
        <section className="w-full min-[1420px]:w-[1200px] flex flex-col gap-5 min-h-[400px] py-[2rem]">
            <p className='z-10 text-base'>Revenue by Category</p>
            <div className="w-full p-4 border rounded-lg">
                <RevenueByCategory className='' />
            </div>
        </section>

        <section className="w-full min-[1420px]:w-[1200px] flex flex-col gap-5">
            <p className='z-10 text-base'>Recent Refunds</p>
            <div className="w-full flex overflow-x-auto">
                <table className='w-full text-sm text-left'>
                    <thead>
                        <tr className='h-10 bg-gray-100'>
                            <th><div className="px-3">Date</div></th>
                            <th><div className="px-3">Amount</div></th>
                            <th><div className="px-3">Count</div></th>
                            <th><div className="px-3">Reason</div></th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, idx) => (
                            <tr key={idx} className={`border-b`}>
                                <td><div className="p-3">{row.date}</div></td>
                                <td><div className="p-3">${row.amount.toLocaleString()}</div></td>
                                <td><div className="p-3">{row.count}</div></td>
                                <td><div className="p-3">{row.reason}</div></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    </div>
}

export default FinancialReports