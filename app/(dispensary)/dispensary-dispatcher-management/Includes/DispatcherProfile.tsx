'use client';

import React from 'react'

function DispatcherProfile() {
    return (
        <div className='main-content flex flex-col gap-5 text-sm'>
            {
                [1,2,3].map((profile, idx)=>{
                    return <section key={`profile-${idx}`} className="w-full p-4 border rounded flex flex-col gap-2">
                        <span className="flex flex-col">
                            <p>John Martinez</p>
                            <p className="text-gray-500">ID: D001</p>
                        </span>
                        <span className="grid grid-cols-4 pb-4 border-b">
                            <aside className="flex flex-col w-full">
                                <p className="text-gray-600">Contact Info</p>
                                <p>odamejoshua37@gmail.com</p>
                                <p>+233 542 893 124</p>
                            </aside>
                            <aside className="flex flex-col w-full">
                                <p className="text-gray-600">Assigned Branch</p>
                                <p>Main Branch - Downtown</p>
                            </aside>
                            <aside className="flex flex-col w-full">
                                <p className="text-gray-600">Status</p>
                                <div className="px-3 py-1 w-fit rounded bg-emerald-50 text-emerald-700">Available</div>
                            </aside>
                            <aside className="flex flex-col w-full">
                                <p className="text-gray-600">Training</p>
                                <div className="px-3 py-1 w-fit rounded bg-emerald-50 text-emerald-700">Trained</div>
                            </aside>
                        </span>

                        <span className="flex flex-col gap-2">
                            <p>Delivery Statistics</p>

                            <span className="grid grid-cols-4 pb-4 border-b">
                                <aside className="flex flex-col w-full">
                                    <p className="text-gray-600">Success Rate</p>
                                    <p>97.8%</p>
                                </aside>
                                <aside className="flex flex-col w-full">
                                    <p className="text-gray-600">Total Deliveries</p>
                                    <p>252</p>
                                </aside>
                                <aside className="flex flex-col w-full">
                                    <p className="text-gray-600">This Month</p>
                                    <div className="px-3 py-1 rounded emerald-50 text-emerald-700">23</div>
                                </aside>
                                <aside className="flex flex-col w-full">
                                    <p className="text-gray-600">Avg Rating</p>
                                    <div className="px-3 py-1 rounded emerald-50 text-emerald-700">4.8</div>
                                </aside>
                            </span>
                        </span>
                    </section>
                })
            }
        </div>
    )
}

export default DispatcherProfile