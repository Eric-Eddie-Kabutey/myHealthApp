'use client';

import React from 'react'

function ActivityLogs() {
    return <div className="main-content w-full flex flex-col gap-4">
        <section className="w-full lg:w-[1000px] grid grid-cols-2 gap-4">
            <div className="w-full border p-4 flex flex-col gap-2 rounded-lg">
                <p>Today's Summary</p>
                <span className="w-full flex items-center justify-between text-gray-600">Alerts Reviewed <p className="text-black">12</p></span>
                <span className="w-full flex items-center justify-between text-gray-600">Alerts Resolved <p className="text-black">10</p></span>
                <span className="w-full flex items-center justify-between text-gray-600">System Overrides <p className="text-black">3</p></span>
                <span className="w-full flex items-center justify-between text-gray-600">Staff Actions <p className="text-black">1</p></span>
            </div>
            <div className="w-full border p-4 flex flex-col gap-2 rounded-lg">
                <p>Weekly Overview</p>
                <span className="w-full flex items-center justify-between text-gray-600">Total Actions <p className="text-black">12</p></span>
                <span className="w-full flex items-center justify-between text-gray-600">Resolution Rate <p className="text-black">94%</p></span>
                <span className="w-full flex items-center justify-between text-gray-600">Avg Response Time <p className="text-black">2.3 hrs</p></span>
            </div>
        </section>

        <p className='text-base'>Recent Activity</p>
        <section className="w-full overflow-x-auto text-sm">
            <table className="w-full text-left">
                <thead>
                    <tr className='h-10 bg-gray-100'>
                        <td><div className="px-3">Date</div></td>
                        <td><div className="px-3">Action Type</div></td>
                        <td><div className="px-3">Total Count</div></td>
                        <td><div className="px-3">Resolved</div></td>
                        <td><div className="px-3">Status</div></td>
                    </tr>
                </thead>
                <tbody>
                    {
                        [1, 2, 3].map((item, idx, arr) => {
                            return <tr key={'staff report' + idx} className={`${idx !== arr.length - 1 && 'border-b'}`}>
                                <td>
                                    <div className="p-3">
                                        2025-05-31
                                    </div>
                                </td>
                                <td>
                                    <div className="p-3">
                                        Medical Alert Review
                                    </div>
                                </td>
                                <td><div className="p-3">12</div></td>
                                <td><div className="p-3">10</div></td>
                                <td>
                                    <div className="p-3">
                                        <div className="p-2 h-8 flex items-center w-fit text-sm rounded bg-emerald-50 text-emerald-700">Complete</div>
                                    </div>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </section>
    </div>
}

export default ActivityLogs