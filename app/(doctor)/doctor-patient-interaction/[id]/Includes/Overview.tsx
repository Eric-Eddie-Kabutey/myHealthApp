'use client';

import { Button } from '@/components/ui/button'
import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Cloud, CloudSnow } from 'lucide-react';

const overviewData = [
    {
        title: 'Health Summary',
        items: [
            { label: 'Last Checkup', value: '15 May 2025' },
            { label: 'Active Conditions', value: '2' },
            { label: 'Current Meds', value: '3' },
        ],
    },
    {
        title: 'Upcoming',
        items: [
            { label: 'Next Appointment', value: '25 May 2025' },
            { label: 'With', value: 'Dr. Smith'},
            { label: 'Type', value: 'Follow-up'},
        ],
    },
    {
        title: 'Recent Activity',
        items: [
            { label: 'New Lab Results', value: 'Today' },
            { label: 'Prescription Refill', value: '2 days ago' },
            { label: 'Message Received', value: '3 days ago' },
        ],
    },
]

function Overview() {
    const [uploadResults, setUploadResults] = React.useState(false);

    return <div className="w-full flex flex-col main-content gap-4">
        <section className="w-full flex items-center justify-between pb-2 border-b">
            <h1 className="text-lg">Overview</h1>
            <Button onClick={()=>setUploadResults(true)} variant={`outline`} className='rounded px-4'>Upload Lab Results</Button>
        </section>

        <section className="w-full flex gap-5 overflow-x-auto">
            {overviewData.map((section, idx) => (
                <div
                    key={idx}
                    className={`
                        flex flex-col gap-2 p-4 border rounded-lg w-[350px]
                        ${section.title === 'Health Summary' ? 'bg-blue-50 border-blue-100' : ''}
                        ${section.title === 'Upcoming' ? 'bg-purple-50 border-purple-100' : ''}
                        ${section.title === 'Recent Activity' ? 'bg-primary/10 border-primary/20' : ''}
                    `}
                >
                    <h2
                        className={`
                            text-md
                            ${section.title === 'Health Summary' ? 'text-blue-700' : ''}
                            ${section.title === 'Upcoming' ? 'text-purple-700' : ''}
                            ${section.title === 'Recent Activity' ? 'text-primary' : ''}
                        `}
                    >
                        {section.title}
                    </h2>
                    <ul className="flex flex-col gap-2">
                        {section.items.map((item, index) => (
                            <li key={index} className="flex justify-between text-sm">
                                <span className="text-gray-600">{item.label}:</span>
                                <span className="font-medium">{item.value}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </section>

        <section className="w-full flex flex-col gap-4">
            <h1 className="text-lg">Recent Health Records</h1>
            <table className="w-full text-sm">
                <thead>
                    <tr className='bg-gray-100 h-10'>
                        <td><div className="px-4">Record Type</div></td>
                        <td><div className="px-4">Date</div></td>
                        <td><div className="px-4">Details</div></td>
                        <td><div className="px-4">Provider</div></td>
                        <td><div className="px-4">Action</div></td>
                    </tr>
                </thead>
                <tbody>
                    {[
                        {
                            type: 'Lab Result',
                            date: '2024-06-01',
                            details: 'Blood Test - Normal',
                            provider: 'Dr. Smith',
                        },
                        {
                            type: 'Prescription',
                            date: '2024-05-28',
                            details: 'Amoxicillin 500mg',
                            provider: 'Dr. Lee',
                        },
                        {
                            type: 'Imaging',
                            date: '2024-05-20',
                            details: 'Chest X-Ray - Clear',
                            provider: 'Dr. Patel',
                        },
                    ].map((record, idx) => (
                        <tr key={idx} className="border-b ">
                            <td><div className="px-4 py-3">{record.type}</div></td>
                            <td><div className="px-4">{record.date}</div></td>
                            <td><div className="px-4">{record.details}</div></td>
                            <td><div className="px-4">{record.provider}</div></td>
                            <td>
                                <div className="px-4">
                                    <Button size="sm" variant="outline" className='border-primary text-primary'>View</Button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>

        <Dialog open={!!uploadResults} onOpenChange={()=>setUploadResults(false)}>
            <DialogContent className="main-content sm:w-[400px] flex flex-col items-center gap-3 text-sm">
                <DialogTitle/>
                <h1 className="text-lg">Upload Results</h1>
                <section className="border rounded-xl p-4 flex flex-col gap-3 bg-gray-100 w-full">
                    <p>Upload Lab Results</p>
                    <div className="rounded-2xl bg-white flex flex-col py-4">
                        <div className="w-full pb-3 border-b flex gap-2 px-3 items-center">
                            <div className="size-9 rounded-full border flex items-center justify-center">
                                <CloudSnow className='size-5'/>
                            </div>
                            <div className="flex flex-col">
                                <p>Upload Files</p>
                                <small className="text-gray-600">Select and upload the files of your choice</small>
                            </div>
                        </div>
                        <section className="p-4">
                            <div className="w-full h-[150px] border border-dashed rounded-2xl flex flex-col p-4 items-center justify-center gap-3">
                                <CloudSnow className='size-5 text-gray-400' />
                                <aside className="flex flex-col items-center gap-1">
                                    <small>Choose a file or drag & drop it here</small>
                                    <small className="text-gray-500">XLS or CSV formats, up to 10MB</small>
                                    <button className="h-7 px-4 w-fit flex justify-center mt-2 items-center border rounded-lg text-sm">Browse File</button>
                                </aside>
                            </div>
                        </section>
                    </div>
                    <Button>Upload</Button>
                </section>
            </DialogContent>
        </Dialog>
    </div>
}

export default Overview