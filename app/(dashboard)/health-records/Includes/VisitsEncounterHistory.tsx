'use client';

import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { ChevronDown, Filter, Video } from 'lucide-react';
import React from 'react'

function VisitsEncounterHistory() {
    return <div className="w-full flex flex-col main-content gap-4 text-sm">
        <section className="w-full pb-2 border-b text-base flex items-center justify-between">
            <div className="flex items-center gap-3">
                Current Health Data

                <div className="px-3 py-1.5 rounded-lg flex flex-col bg-primary/10">
                    <span className='text-sm'>Next appointment: June 15, 2023</span>
                    <small className="text-gray-700">With Dr. Smith at 10:30 AM</small>
                </div>
            </div>
            <Popover>
                <PopoverTrigger asChild>
                    <Button variant="outline" className='flex items-center gap-3 h-[36px] rounded-xl'>
                        <Filter className='size-4'/>
                        Filter
                        <ChevronDown className='size-5'/>
                    </Button>
                </PopoverTrigger>
                <PopoverContent side={'bottom'} className="w-[650px] text-[14px] flex flex-col gap-3 mr-12 rounded-xl px-6">

                </PopoverContent>
            </Popover>
        </section>


        <section className="w-full border rounded-2xl p-4 pt-2 flex flex-col gap-2">
            <div className="w-full border-b pb-2 flex items-center justify-between">
                <p>Recent Encounters</p>
                <Button variant={'outline'} className='h-8'>Add Encounter</Button>
            </div>
            <div className="w-full flex flex-col gap-5">
                <section className="w-full border rounded-xl p-4 flex flex-col gap-3">
                    <div className="w-full flex items-center justify-between">
                        <aside className="flex gap-3">
                            <div className="size-12 border flex items-center justify-center rounded-full"><Video className='size-4'/></div>
                            <div className="flex flex-col">
                                <p>Teleconsultation Follow-up</p>
                                <small className="text-gray-600">Hypertension Management</small>
                            </div>
                        </aside>
                        <aside className="flex items-center gap-2">
                            <span className="px-3 rounded-lg h-8 flex items-center text-sm bg-primary/10 text-primary">Completed</span>
                            <span className="text-sm">May 20, 2023</span>
                        </aside>
                    </div>
                    <div className="pl-12 flex flex-col gap-5">
                        <section className="w-full flex gap-[5rem]">
                            <div className="flex flex-col">
                                <p className="text-gray-500">PROVIDER</p>
                                <small className='text-sm'>Dr. Smith</small>
                            </div>
                            <div className="flex flex-col">
                                <p className="text-gray-500">DURATION</p>
                                <small className='text-sm'>25 minutes</small>
                            </div>
                            <div className="flex flex-col">
                                <p className="text-gray-500">TYPE</p>
                                <small className='text-sm'>Teleconsultation</small>
                            </div>
                        </section>
                        <section className="flex flex-col">
                            <p className="text-gray-500">DIAGNOSIS</p>
                            <div className="flex gap-3 overflow-x-auto">
                                {
                                    [1].map((item, idx)=>{
                                        return <div key={`diagnosis-${idx}`} className="px-4 h-7 flex items-center rounded bg-indigo-100 text-indigo-500 w-fit">Essential (primary) hypertension (I10)</div>
                                    })
                                }
                            </div>
                        </section>
                        <section className="flex flex-col">
                            <p className="text-gray-500">NOTES</p>
                            <p>Patient reports good adherence to medications with no side effects. BP readings at home have been consistently in the 130-140/80-85 range. No headaches, dizziness, or chest pain reported. Continue current regimen of Lisinopril 20mg daily. Recommended dietary sodium reduction and increased physical activity. Follow up in 3 months or sooner if BP {`>`}140/90.</p>
                        </section>
                        <section className="flex flex-col">
                            <p className="text-gray-500">FOLLOW-UP PLAN</p>
                            <ul>
                                <li className='list-disc ml-5'>Continue current medications</li>
                                <li className='list-disc ml-5'>Monitor BP twice weekly and log readings</li>
                                <li className='list-disc ml-5'>Follow up in 3 months (August 2023)</li>
                                <li className='list-disc ml-5'>Call if BP consistently {`>`}140/90 or symptoms develop</li>
                            </ul>
                        </section>
                    </div>
                </section>
                <section className="w-full border rounded-xl p-4 flex flex-col gap-3">
                    <div className="w-full flex items-center justify-between">
                        <aside className="flex gap-3">
                            <div className="size-12 border flex items-center justify-center rounded-full"><Video className='size-4'/></div>
                            <div className="flex flex-col">
                                <p>Teleconsultation Follow-up</p>
                                <small className="text-gray-600">Hypertension Management</small>
                            </div>
                        </aside>
                        <aside className="flex items-center gap-2">
                            <span className="px-3 rounded-lg h-8 flex items-center text-sm bg-primary/10 text-primary">Completed</span>
                            <span className="text-sm">May 20, 2023</span>
                        </aside>
                    </div>
                    <div className="pl-12 flex flex-col gap-5">
                        <section className="w-full flex gap-[5rem]">
                            <div className="flex flex-col">
                                <p className="text-gray-500">PROVIDER</p>
                                <small className='text-sm'>Dr. Smith</small>
                            </div>
                            <div className="flex flex-col">
                                <p className="text-gray-500">DURATION</p>
                                <small className='text-sm'>25 minutes</small>
                            </div>
                            <div className="flex flex-col">
                                <p className="text-gray-500">TYPE</p>
                                <small className='text-sm'>Teleconsultation</small>
                            </div>
                        </section>
                        <section className="flex flex-col">
                            <p className="text-gray-500">DIAGNOSIS</p>
                            <div className="flex gap-3 overflow-x-auto">
                                {
                                    [1,2,3].map((item, idx)=>{
                                        return <div key={`diagnosis-${idx}`} className="px-4 h-7 flex items-center rounded bg-indigo-100 text-indigo-500 w-fit">Essential (primary) hypertension (I10)</div>
                                    })
                                }
                            </div>
                        </section>
                        <section className="flex flex-col">
                            <p className="text-gray-500">NOTES</p>
                            <p>Patient reports good adherence to medications with no side effects. BP readings at home have been consistently in the 130-140/80-85 range. No headaches, dizziness, or chest pain reported. Continue current regimen of Lisinopril 20mg daily. Recommended dietary sodium reduction and increased physical activity. Follow up in 3 months or sooner if BP {`>`}140/90.</p>
                        </section>
                        <section className="flex flex-col">
                            <p className="text-gray-500">FOLLOW-UP PLAN</p>
                            <ul className=''>
                                <li className='list-disc ml-5'>Continue current medications</li>
                                <li className='list-disc ml-5'>Monitor BP twice weekly and log readings</li>
                                <li className='list-disc ml-5'>Follow up in 3 months (August 2023)</li>
                                <li className='list-disc ml-5'>Call if BP consistently {`>`}140/90 or symptoms develop</li>
                            </ul>
                        </section>
                    </div>
                </section>
            </div>
        </section>

        <section className="w-full border rounded-2xl p-4 pt-2 flex flex-col gap-2">
            <div className="w-full border-b pb-2 flex items-center justify-between">
                <p>Upcoming Appointments</p>
                {/* <Button variant={'outline'} className='h-8'>Add Encounter</Button> */}
            </div>
            <table className="w-full text-left">
                <thead>
                    <tr className='h-10 bg-gray-100'>
                        <td><div className="px-3">Date & Time</div></td>
                        <td><div className="px-3">Provider</div></td>
                        <td><div className="px-3">Type</div></td>
                        <td><div className="px-3">Purpose</div></td>
                        <td><div className="px-3">Location</div></td>
                        <td><div className="px-3">Action</div></td>
                    </tr>
                </thead>
                <tbody>
                    {
                        [
                            {
                                dateTime: 'June 15, 2023 10:30 AM',
                                provider: {
                                    name: 'Dr. Smith',
                                    unit: 'Cardiology'
                                },
                                type: 'In Person',
                                purpose: 'Hypertension follow-up',
                                location: 'Main Clinic - Room 205',
                            },
                            {
                                dateTime: 'June 20, 2023 2:00 PM',
                                provider: {
                                    name: 'Dr. Adams',
                                    unit: 'Endocrinology'
                                },
                                type: 'Teleconsultation',
                                purpose: 'Diabetes check-in',
                                location: 'Online',
                            },
                            {
                                dateTime: 'July 1, 2023 9:00 AM',
                                provider: {
                                    name: 'Dr. Lee',
                                    unit: 'General Medicine'
                                },
                                type: 'In Person',
                                purpose: 'Annual physical exam',
                                location: 'Main Clinic - Room 101',
                            }
                        ].map((item, idx, arr) => {
                            return <tr key={idx} className={`${idx !== arr.length - 1 && 'border-b'}`}>
                                <td><div className="px-3 py-2">{item.dateTime}</div></td>
                                <td>
                                    <div className="px-3 py-2 flex flex-col">
                                        <p>{item.provider.name}</p>
                                        <p>{item.provider.unit}</p>
                                    </div>
                                </td>
                                <td>
                                    <div className="px-3 py-2">
                                        <div className="px-3 w-fit h-8 flex items-center rounded bg-indigo-100 text-indigo-500">{item.type}</div>
                                    </div>
                                </td>
                                <td><div className="px-3 py-2">{item.purpose}</div></td>
                                <td><div className="px-3 py-2">{item.location}</div></td>
                                <td>
                                    <div className="px-3 py-2">
                                        <Button variant={'outline'} className='h-8 border-red-500 text-red-500'>Cancel</Button>
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

export default VisitsEncounterHistory