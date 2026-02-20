'use client';

import { setNewParams } from '@/lib/utils';
import { Edit, PlusCircle, Trash } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react'

const currentMeds = [
    {
        title: 'Lisinopril',
        branch: 'ACE Inhibitor',
        type: 'Daily',
        details: {
            Dosage: '20 mg',
            Frequency: 'One daily (AM)',
            Prescribed: '03/15/2023',
            Prescriber: 'Dr. Smith'
        },
        status: 'Active',
    },
    {
        title: 'Metformin',
        branch: 'Biguanide',
        type: 'Daily',
        details: {
            Dosage: '500 mg',
            Frequency: 'Twice daily',
            Prescribed: '01/10/2024',
            Prescriber: 'Dr. Lee'
        },
        status: 'Active',
    },
    {
        title: 'Atorvastatin',
        branch: 'Statin',
        type: 'Nightly',
        details: {
            Dosage: '10 mg',
            Frequency: 'Once nightly',
            Prescribed: '11/22/2023',
            Prescriber: 'Dr. Patel'
        },
        status: 'Active',
    },
    {
        title: 'Vitamin D',
        branch: 'Supplement',
        type: 'Weekly',
        details: {
            Dosage: '50,000 IU',
            Frequency: 'Once weekly',
            Prescribed: '02/05/2024',
            Prescriber: 'Dr. Kim'
        },
        status: 'Active',
    },
    {
        title: 'Amlodipine',
        branch: 'Calcium Channel Blocker',
        type: 'Daily',
        details: {
            Dosage: '5 mg',
            Frequency: 'One daily (AM)',
            Prescribed: '12/01/2023',
            Prescriber: 'Dr. Johnson'
        },
        status: 'Active',
    }
]

const tabs = ['Current Medications', 'Previous Medications', 'Supplements'];
type TabType = 'Current Medications'|'Previous Medications'|'Supplements';

function Medications() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const medTab = searchParams.get('medTab') as TabType || 'Current Medications';
    const [activeMedTab, setActiveMedTab] = useState<TabType>('Current Medications')

    return <div className="w-full flex flex-col main-content gap-4">
        <section className="w-full pb-2 border-b">
            Medications
        </section>

        <section className="w-full p-4 flex flex-col border rounded-2xl gap-4 text-sm">
            <div className="w-full border-b flex">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        className={`px-4 pb-2 rounded-t ${
                            (activeMedTab === tab || medTab === tab)
                                ? 'border-b-2 border-primary'
                                : 'text-gray-700'
                        }`}
                        onClick={() => {
                            setActiveMedTab(tab as TabType);
                            router.replace(setNewParams(searchParams, 'medTab', tab));
                        }}
                        type="button"
                    >
                        {tab}
                    </button>
                ))}
            </div>
            {
                activeMedTab === 'Current Medications' ? 
                <div className="w-full flex flex-col gap-2">
                    <p>Active Prescriptions</p>
                    <aside className="w-full flex gap-5 flex-wrap">
                        {
                            currentMeds.map((item, idx) => {
                                return <div className="p-3 flex flex-col gap-3 w-[300px] border rounded-2xl" key={item.title + idx}>
                                    <div className="w-full flex justify-between">
                                        <aside className="flex flex-col">
                                            <p>{item.title}</p>
                                            <small className="font-extralight">{item.branch}</small>
                                        </aside>
                                        <span className="px-3 h-7 flex items-center rounded-lg text-sm bg-gray-200">{item.type}</span>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        {
                                            Object.entries(item.details).map(([key, value], idx) => {
                                                return <div key={`details - ${idx}`} className="w-full flex items-center justify-between">
                                                    <p className="text-sm text-gray-600">{key}</p>
                                                    <p className="text-sm">{value}</p>
                                                </div>
                                            })
                                        }
                                    </div>
                                    <div className="w-full flex items-center justify-between">
                                        <span className="px-3 h-7 w-fit flex items-center rounded-lg bg-primary/10 text-primary text-sm">{item.status}</span>
                                        <span className="flex items-center gap-3">
                                            <Edit className='size-4 text-primary cursor-pointer'/>
                                            <Trash className='size-4 text-red-600 cursor-pointer'/>
                                        </span>
                                    </div>
                                </div>
                            })
                        }
                        <div className="p-3 flex flex-col justify-center items-center gap-3 w-[300px] border-2 border-dashed border-primary cursor-pointer hover:bg-primary-foreground rounded-2xl">
                            <PlusCircle className='size-5'/>
                            <p>Add New Medication</p>
                        </div>
                    </aside>
                </div> : 

                activeMedTab === 'Previous Medications' ? 
                <div className="w-full flex overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="h-10 bg-gray-100">
                                <td><div className="px-3">Medications</div></td>
                                <td><div className="px-3">Dosage</div></td>
                                <td><div className="px-3">Duration</div></td>
                                <td><div className="px-3">Reason Discontinued</div></td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                [1,2,3].map((item, idx, arr)=>{
                                    return <tr key={`prev-meds-${idx}`} className={`${idx !== arr.length-1 && 'border-b'}`}>
                                        <td><div className="px-3 py-2">Simvastatin</div></td>
                                        <td><div className="px-3 py-2">20 mg</div></td>
                                        <td><div className="px-3 py-2">06/2021 - 01/2023</div></td>
                                        <td><div className="px-3 py-2"><aside className="px-3 h-8 flex items-center rounded bg-indigo-100 text-indigo-500 w-fit">Switched to Atorvastatin</aside></div></td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>:

                activeMedTab === 'Supplements' ? 
                <div className="w-full flex flex-col gap-2">
                    <p>Over-the-Counter & Herbal Supplements</p>
                    <aside className="w-full flex gap-5 flex-wrap">
                        {
                            currentMeds.slice(0,3).map((item, idx) => {
                                return <div className="p-3 flex flex-col gap-3 w-[300px] border rounded-2xl" key={item.title + idx}>
                                    <div className="w-full flex justify-between">
                                        <aside className="flex flex-col">
                                            <p>{item.title}</p>
                                            <small className="font-extralight">{item.branch}</small>
                                        </aside>
                                        <span className="px-3 h-7 flex items-center rounded-lg text-sm bg-gray-200">{item.type}</span>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        {
                                            Object.entries(item.details).map(([key, value], idx) => {
                                                return <div key={`details - ${idx}`} className="w-full flex items-center justify-between">
                                                    <p className="text-sm text-gray-600">{key}</p>
                                                    <p className="text-sm">{value}</p>
                                                </div>
                                            })
                                        }
                                    </div>
                                    <div className="w-full flex items-center justify-between">
                                        <span className="px-3 h-7 w-fit flex items-center rounded-lg bg-primary/10 text-primary text-sm">{item.status}</span>
                                        <span className="flex items-center gap-3">
                                            <Edit className='size-4 text-primary cursor-pointer'/>
                                            <Trash className='size-4 text-red-600 cursor-pointer'/>
                                        </span>
                                    </div>
                                </div>
                            })
                        }
                    </aside>
                </div>

                : null
            }
        </section>
    </div>
}

export default Medications