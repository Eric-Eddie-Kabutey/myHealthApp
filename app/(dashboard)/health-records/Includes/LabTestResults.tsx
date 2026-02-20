'use client';

import { Button } from '@/components/ui/button';
import { Download, Eye, Hourglass } from 'lucide-react';
import React from 'react'

function LabTestResults() {
    return <div className="w-full flex flex-col main-content gap-4 text-sm">
        <section className="w-full pb-2 border-b text-base">
            Lab Tests and Results
        </section>

        <section className="w-full border rounded-2xl p-4 pt-2 flex flex-col gap-2">
            <div className="w-full border-b pb-2 flex items-center justify-between">
                <p>Recent Encounters</p>
                <Button variant={'outline'} className='h-8'>Export All</Button>
            </div>
            <div className="w-full flex flex-col gap-5">
                <section className="w-full border rounded-xl p-4 flex flex-col gap-3">
                    <div className="w-full flex items-center justify-between">
                        <aside className="flex flex-col">
                            <p>Comprehensive Metabolic Panel</p>
                            <p className="text-gray-600">Blood Test</p>
                        </aside>
                        <aside className="flex items-center gap-2">
                            <span className="px-3 rounded-lg h-8 flex items-center text-sm bg-primary/10 text-primary">Completed</span>
                            <span className="text-sm">Collected: May 18, 2023</span>
                        </aside>
                    </div>

                    <div className="w-full flex gap-[5rem] my-2">
                        <div className="flex flex-col">
                            <p className="text-gray-500 uppercase">ordering provider</p>
                            <p>Dr. Smith</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-gray-500 uppercase">COLLECTION LOCATION</p>
                            <p>Main Clinic Lab</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-gray-500 uppercase">REPORT DATE</p>
                            <p>May 20, 2023</p>
                        </div>
                    </div>

                    <div className="w-full flex overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className='bg-gray-100 h-10'>
                                    <td><div className="px-3">Test</div></td>
                                    <td><div className="px-3">Result</div></td>
                                    <td><div className="px-3">Reference Range</div></td>
                                    <td><div className="px-3">Status</div></td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    [
                                        {
                                            test: 'Glucose',
                                            result: '98 mg/dL',
                                            reference: '70-99 mg/dL',
                                            status: 'Normal'
                                        },
                                        {
                                            test: 'Sodium',
                                            result: '140 mmol/L',
                                            reference: '135-145 mmol/L',
                                            status: 'Normal'
                                        },
                                        {
                                            test: 'Potassium',
                                            result: '4.2 mmol/L',
                                            reference: '3.5-5.1 mmol/L',
                                            status: 'Normal'
                                        }
                                    ].map((item, idx, arr) => {
                                        return <tr key={`res-${idx}`} className={`${idx !== arr.length - 1 && 'border-b'}`}>
                                            <td><div className="px-3 py-2">{item.test}</div></td>
                                            <td><div className="px-3 py-2 text-primary">{item.result}</div></td>
                                            <td><div className="px-3 py-2">{item.reference}</div></td>
                                            <td><div className="px-3 py-2"><div className="px-3 h-8 flex items-center w-fit rounded bg-primary/10 text-primary">{item.status}</div></div></td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>

                    <div className="w-full flex flex-col gap-2">
                        <p className="text-gray-600 uppercase">Full Report</p>
                        <aside className="w-full border rounded-lg p-4 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="size-12 rounded-lg bg-red-100 text-red-500 flex items-center justify-center">
                                    <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.9985 0C0.44749 0 0 0.44405 0 0.9918V19.0082C0 19.5447 0.44476 20 0.9934 20H17.0066C17.5551 20 18 19.5489 18 18.9925L17.9997 5L13 0H0.9985ZM7.5 5.5H9.5C9.5 7.98994 11.6436 10.6604 14.3162 11.5513L13.8586 13.49C10.7234 13.0421 7.4821 14.3804 4.5547 16.3321L3.3753 14.7191C4.46149 13.8502 5.50293 12.3757 6.27499 10.6534C7.0443 8.9373 7.5 7.07749 7.5 5.5ZM8.1 11.4716C8.3673 10.8752 8.6043 10.2563 8.8037 9.6285C9.2754 10.3531 9.8553 11.0182 10.5102 11.5953C9.5284 11.7711 8.5666 12.0596 7.6353 12.4276C7.8 12.1143 7.9551 11.7948 8.1 11.4716Z" fill="#E53E3E"/>
                                    </svg>
                                </div>
                                <div className="flex flex-col">
                                    <p>Metabolic_Panel_John_Doe_05-20-2023.pdf</p>
                                    <p className="text-gray-600">2 pages • 450 KB</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <Download className='text-primary size-5'/>
                                <Eye className='text-primary size-5'/>
                            </div>
                        </aside>
                    </div>

                    <div className="w-full flex flex-col gap-2">
                        <p className="text-gray-600 uppercase">Doctor's interpretation</p>
                        <div className="rounded-lg p-4 flex gap-3 w-full bg-gray-100">
                            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="" className="size-12 min-w-12 rounded-full overflow-hidden object-cover" />
                            <aside className="flex flex-col gap-1">
                                <b className='text-base'>Dr. Smith</b>
                                <p>Overall metabolic panel looks good except for slightly elevated potassium (5.2). This could be due to recent use of lisinopril. No immediate action needed but recommend reducing high-potassium foods (bananas, oranges, potatoes) and repeating potassium level in 1 month. Continue current medications.</p>
                                <small className='mt-2'>Reviewed: May 21, 2023</small>
                            </aside>
                        </div>
                    </div>
                </section>

                <section className="w-full border rounded-xl p-4 flex flex-col gap-3">
                    <div className="w-full flex items-center justify-between">
                        <aside className="flex flex-col">
                            <p>Lipid Panel</p>
                            <p className="text-gray-600">Blood Test</p>
                        </aside>
                        <aside className="flex items-center gap-2">
                            <span className="px-3 rounded-lg h-8 flex items-center text-sm bg-primary/10 text-primary">Completed</span>
                            <span className="text-sm">Collected: May 18, 2023</span>
                        </aside>
                    </div>

                    <div className="w-full flex gap-[5rem] my-2">
                        <div className="flex flex-col">
                            <p className="text-gray-500 uppercase">ordering provider</p>
                            <p>Dr. Smith</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-gray-500 uppercase">COLLECTION LOCATION</p>
                            <p>Main Clinic Lab</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-gray-500 uppercase">REPORT DATE</p>
                            <p>May 20, 2023</p>
                        </div>
                    </div>

                    <div className="w-full flex overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className='bg-gray-100 h-10'>
                                    <td><div className="px-3">Test</div></td>
                                    <td><div className="px-3">Result</div></td>
                                    <td><div className="px-3">Reference Range</div></td>
                                    <td><div className="px-3">Status</div></td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    [
                                        {
                                            test: 'Glucose',
                                            result: '98 mg/dL',
                                            reference: '70-99 mg/dL',
                                            status: 'Normal'
                                        },
                                        {
                                            test: 'Sodium',
                                            result: '140 mmol/L',
                                            reference: '135-145 mmol/L',
                                            status: 'Normal'
                                        },
                                        {
                                            test: 'Potassium',
                                            result: '4.2 mmol/L',
                                            reference: '3.5-5.1 mmol/L',
                                            status: 'Normal'
                                        }
                                    ].map((item, idx, arr) => {
                                        return <tr key={`res-${idx}`} className={`${idx !== arr.length - 1 && 'border-b'}`}>
                                            <td><div className="px-3 py-2">{item.test}</div></td>
                                            <td><div className="px-3 py-2 text-primary">{item.result}</div></td>
                                            <td><div className="px-3 py-2">{item.reference}</div></td>
                                            <td><div className="px-3 py-2"><div className="px-3 h-8 flex items-center w-fit rounded bg-primary/10 text-primary">{item.status}</div></div></td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>

                    <div className="w-full flex flex-col gap-2">
                        <p className="text-gray-600 uppercase">Full Report</p>
                        <aside className="w-full border rounded-lg p-4 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="size-12 rounded-lg bg-red-100 text-red-500 flex items-center justify-center">
                                    <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.9985 0C0.44749 0 0 0.44405 0 0.9918V19.0082C0 19.5447 0.44476 20 0.9934 20H17.0066C17.5551 20 18 19.5489 18 18.9925L17.9997 5L13 0H0.9985ZM7.5 5.5H9.5C9.5 7.98994 11.6436 10.6604 14.3162 11.5513L13.8586 13.49C10.7234 13.0421 7.4821 14.3804 4.5547 16.3321L3.3753 14.7191C4.46149 13.8502 5.50293 12.3757 6.27499 10.6534C7.0443 8.9373 7.5 7.07749 7.5 5.5ZM8.1 11.4716C8.3673 10.8752 8.6043 10.2563 8.8037 9.6285C9.2754 10.3531 9.8553 11.0182 10.5102 11.5953C9.5284 11.7711 8.5666 12.0596 7.6353 12.4276C7.8 12.1143 7.9551 11.7948 8.1 11.4716Z" fill="#E53E3E"/>
                                    </svg>
                                </div>
                                <div className="flex flex-col">
                                    <p>Metabolic_Panel_John_Doe_05-20-2023.pdf</p>
                                    <p className="text-gray-600">2 pages • 450 KB</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <Download className='text-primary size-5'/>
                                <Eye className='text-primary size-5'/>
                            </div>
                        </aside>
                    </div>

                    <div className="w-full flex flex-col gap-2">
                        <p className="text-gray-600 uppercase">Doctor's interpretation</p>
                        <div className="rounded-lg p-4 flex gap-3 w-full bg-gray-100">
                            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="" className="size-12 min-w-12 rounded-full overflow-hidden object-cover" />
                            <aside className="flex flex-col gap-1">
                                <b className='text-base'>Dr. Smith</b>
                                <p>Overall metabolic panel looks good except for slightly elevated potassium (5.2). This could be due to recent use of lisinopril. No immediate action needed but recommend reducing high-potassium foods (bananas, oranges, potatoes) and repeating potassium level in 1 month. Continue current medications.</p>
                                <small className='mt-2'>Reviewed: May 21, 2023</small>
                            </aside>
                        </div>
                    </div>
                </section>

                <section className="w-full border rounded-xl p-4 flex flex-col gap-4">
                    <div className="w-full flex items-center justify-between">
                        <aside className="flex flex-col">
                            <p>Lipid Panel</p>
                            <p className="text-gray-600">Blood Test</p>
                        </aside>
                        <aside className="flex items-center gap-2">
                            <span className="px-3 rounded-lg h-8 flex items-center text-sm bg-orange-100 text-orange-500">Pending</span>
                            <span className="text-sm">Collected: May 18, 2023</span>
                        </aside>
                    </div>

                    <div className="w-full flex gap-[5rem] my-2">
                        <div className="flex flex-col">
                            <p className="text-gray-500 uppercase">ordering provider</p>
                            <p>Dr. Smith</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-gray-500 uppercase">COLLECTION LOCATION</p>
                            <p>Main Clinic Lab</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-gray-500 uppercase">REPORT DATE</p>
                            <p>May 20, 2023</p>
                        </div>
                    </div>

                    <div className="w-full border bg-gray-200 rounded-lg p-4 flex gap-2 items-center">
                        <Hourglass className='size-5'/>
                        Your test is being processed at the lab. Results are typically available within 3-5 business days.
                    </div>
                </section>
            </div>
        </section>
    </div>
}

export default LabTestResults