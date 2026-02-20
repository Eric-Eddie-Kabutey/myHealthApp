'use client';

import useMain from '@/app/hooks/useMain';
import PageWrapper from '@/components/PageWrapper';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { ArrowLeft } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import RequestSubmitted from './RequestSubmitted';

type TabType = 'Incoming Requests' | 'Approved Emergency Clearances'

const tabs: { label: TabType }[] = [
    { label: 'Incoming Requests' },
    { label: 'Approved Emergency Clearances' }
];
function OfficerRequestFlight() {
    const { searchParams, router } = useMain();
    const tab = searchParams.get('tab') as TabType || 'Incoming Requests';
    const [activeTab, setActiveTab] = React.useState<TabType>(tab);
    useEffect(() => setActiveTab(tab), [tab]);

    const [submitted, setSubmitted] = useState(false)

    return <PageWrapper content={<>
        <section className="w-full flex items-end gap-3 border-b bg-white sticky top-0 h-12">
            <div className="pb-1">
                <button onClick={()=>window.history.back()} className="size-10 border rounded-full flex items-center justify-center"><ArrowLeft className='size-5'/></button>
            </div>
            <div className="flex gap-2">
                {tabs.map(({ label }) => (
                    <button
                        key={label}
                        className={`px-4 pb-3 rounded-t-md transition-colors ${
                            activeTab === label ? 'border-primary border-b-2' : 'text-gray-500'}`}
                        onClick={() => {
                            setActiveTab(label);
                            router.replace(`?tab=${encodeURIComponent(label)}`);
                        }}
                    >
                        {label}
                    </button>
                ))}
            </div>
        </section>

        <section className="w-full pb-4 border-b flex flex-col gap-1">
            <p className='text-base'>Emergency Flight Request</p>
            <small className="text-gray-600 text-sm">Complete this form for urgent medical travel assistance</small>
        </section>

        <section className="py-4 min-[900px]:pt-4 pt-2 border-b flex min-[900px]:flex-row flex-col gap-4 xl:pr-[15dvw]">
            <div className="min-w-[250px] flex flex-col min-[900px]:mb-0 mb-1 ">
                <p className="text-base">Patient Information</p>
                <small className="text-gray-600">Enter details about yourself</small>
            </div>
            <div className="w-full flex flex-col gap-4 overflow-x-auto">
                <aside className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                        <p className="text-sm">First Name</p>
                        <input type="text" placeholder='Enter first name' className="w-full border rounded h-10 px-3 text-sm" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <p className="text-sm">Last Name</p>
                        <input type="text" placeholder='Enter Last name' className="w-full border rounded h-10 px-3 text-sm" />
                    </div>
                </aside>
                <aside className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                        <p className="text-sm">Passport ID</p>
                        <input type="text" placeholder='Enter ID' className="w-full border rounded h-10 px-3 text-sm" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <p className="text-sm">Age</p>
                        <input type="text" placeholder='Enter age' className="w-full border rounded h-10 px-3 text-sm" />
                    </div>
                </aside>
                <div className="flex flex-col gap-1">
                    <p className="text-sm">Health Condition Description</p>
                    <textarea rows={4} placeholder={`Describe the medical condition requiring emergency transport...`} className="w-full border rounded p-3 text-sm" />
                </div>

            </div>

        </section>
        <section className="py-4 min-[900px]:pt-4 pt-2 border-b flex min-[900px]:flex-row flex-col gap-4 xl:pr-[15dvw]">
            <div className="min-w-[250px] flex flex-col min-[900px]:mb-0 mb-1 ">
                <p className="text-base">Travel Information</p>
                <small className="text-gray-600">Enter details about your destination </small>
            </div>
            <div className="w-full flex flex-col gap-4 overflow-x-auto">
                <aside className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                        <p className="text-sm">Current Location </p>
                        <input type="text" placeholder='Enter location' className="w-full border rounded h-10 px-3 text-sm" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <p className="text-sm">Preferred Departure Airport</p>
                        <select className="w-full border rounded h-10 px-3 text-sm">
                            <option value="">Select Airport</option>
                        </select>
                    </div>
                </aside>
                <aside className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                        <p className="text-sm">Destination Country</p>
                        <select className="w-full border rounded h-10 px-3 text-sm">
                            <option value="">Select Country</option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-1">
                        <p className="text-sm">Preferred Hospital (if known)</p>
                        <input type="text" placeholder='Enter hospital name' className="w-full border rounded h-10 px-3 text-sm" />
                    </div>
                </aside>
                <div className="flex flex-col gap-1">
                    <p className="text-sm">Preferred Hospital Location</p>
                    <input type="text" placeholder='Enter hospital location' className="w-full border rounded h-10 px-3 text-sm" />
                </div>
            </div>
        </section>

        <section className="py-4 min-[900px]:pt-4 pt-2 border-b flex min-[900px]:flex-row flex-col gap-4 xl:pr-[15dvw]">
            <div className="min-w-[250px] flex flex-col min-[900px]:mb-0 mb-1 ">
                <p className="text-base">Medical Urgency Level</p>
                <small className="text-gray-600">Select urgency level </small>
            </div>
            <div className="w-full flex gap-4 overflow-x-auto">
                <aside className="flex flex-col items-center justify-center gap-2 border rounded px-6 w-[230px] h-28 text-center group hover:border-primary hover:bg-primary-foreground cursor-pointer hover:text-primary">
                    <p className="text-base">Mild</p>
                    <small className="text-sm">Stable condition, planned medical transfer</small>
                </aside>
                <aside className="flex flex-col items-center justify-center gap-2 border rounded px-6 w-[230px] h-28 text-center group hover:border-primary hover:bg-primary-foreground cursor-pointer hover:text-primary">
                    <p className="text-base">Urgent</p>
                    <small className="text-sm">Requires immediate attention within 24-48 hours</small>
                </aside>
                <aside className="flex flex-col items-center justify-center gap-2 border rounded px-6 w-[230px] h-28 text-center group hover:border-primary hover:bg-primary-foreground cursor-pointer hover:text-primary">
                    <p className="text-base">Critical</p>
                    <small className="text-sm">Life-threatening emergency requires immediate transport </small>
                </aside>
            </div>
        </section>

        <section className="py-4 min-[900px]:pt-4 pt-2 border-b flex min-[900px]:flex-row flex-col gap-4 xl:pr-[15dvw]">
            <div className="min-w-[250px] flex flex-col min-[900px]:mb-0 mb-1 ">
                <p className="text-base">Medical Support Required</p>
                <small className="text-gray-600">Medical Support Required During Flight</small>
            </div>
            <div className="w-full flex gap-4 text-nowrap overflow-x-auto">
                <aside className="flex items-center gap-3">
                    <Checkbox className='size-8'/>
                    <p>Ventilator</p>
                </aside>
                <aside className="flex items-center gap-3">
                    <Checkbox className='size-8'/>
                    <p>Stretcher</p>
                </aside>
                <aside className="flex items-center gap-3">
                    <Checkbox className='size-8'/>
                    <p>Nurse Onboard</p>
                </aside>
                <aside className="flex items-center gap-3">
                    <Checkbox className='size-8'/>
                    <p>Doctor Onboard</p>
                </aside>
            </div>
        </section>

        <section className="py-4 min-[900px]:pt-4 pt-2 border-b flex min-[900px]:flex-row flex-col gap-4 xl:pr-[15dvw]">
            <div className="min-w-[250px] flex flex-col min-[900px]:mb-0 mb-1 ">
                <p className="text-base">Travel Companion & Insurance</p>
                <small className="text-gray-600">Enter details about your companion </small>
            </div>
            <div className="w-full flex flex-col gap-4 overflow-x-auto">
                <aside className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                        <p className="text-sm">Companion name </p>
                        <input type="text" placeholder='Enter name' className="w-full border rounded h-10 px-3 text-sm" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <p className="text-sm">Relationship</p>
                        <select className="w-full border rounded h-10 px-3 text-sm">
                            <option value="">Select Relationship</option>
                        </select>
                    </div>
                </aside>
                <aside className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                        <p className="text-sm">Health Insurance Provider</p>
                        <input type="text" placeholder='Enter insurance name' className="w-full border rounded h-10 px-3 text-sm" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <p className="text-sm">Policy Number</p>
                        <input type="text" placeholder='Enter Policy Number' className="w-full border rounded h-10 px-3 text-sm" />
                    </div>
                </aside>
            </div>
        </section>
        <section className="py-[2rem] pb-[4rem] flex justify-end xl:pr-[15dvw]">
            <Button onClick={()=>setSubmitted(true)} className='rounded h-10 px-10'>Submit Emergency Flight Request</Button>
        </section>

        <RequestSubmitted open={submitted} close={()=>setSubmitted(false)}/>
    </>}/>
}

export default OfficerRequestFlight