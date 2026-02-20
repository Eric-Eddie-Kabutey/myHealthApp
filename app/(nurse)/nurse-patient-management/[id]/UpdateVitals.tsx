'use client';

import PageWrapper from '@/components/PageWrapper';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import React from 'react'

function UpdateVitals() {
    return <PageWrapper content={<>
        <section className="w-full py-[0.5rem] flex items-center justify-between gap-4 border-b">
            <div className="flex items-center gap-5">
                <button onClick={()=>window.history.back()} className="size-8 rounded-full border flex items-center justify-center">
                    <ArrowLeft className='size-4'/>
                </button>
                <p>Vitals & Observations - Sarah Johnson</p>
            </div>
        </section>

        <section className="w-full grid grid-cols-2 gap-5">
            <div className="w-full flex flex-col gap-5">
                <aside className="w-full border rounded-xl p-4 flex flex-col gap-3">
                    <p>Recent Observations</p>

                    {
                        [1,2].map((obs, idx)=>{
                            return <div key={`obs-${idx}`} className="p-3 px-5 w-full flex flex-col gap-2 rounded-lg bg-[#F1F1F1]">
                                <span className="w-full flex items-center justify-between">
                                    <div className="px-4 h-7 flex items-center rounded bg-orange-100 text-[#854D0F]">Behavioral</div>
                                    <small>2025-05-29 10:00</small>
                                </span>
                                <p>Patient reports feeling well, no complaints</p>
                            </div>
                        })
                    }
                </aside>
                <aside className="flex flex-col gap-5 p-4 w-full border rounded-xl">
                    <p>Add Observation</p>

                    <form action="" className="w-full flex flex-col gap-4">
                        <div className="w-full flex flex-col gap-1">
                            <p className="text-sm">Observation Type</p>
                            <select name="" id="" className="w-full border h-10 px-3 text-sm rounded-lg">
                                <option value="">Clinical</option>
                            </select>
                        </div>
                        <div className="w-full flex flex-col gap-1">
                            <p className="text-sm">Observation Notes</p>
                            <textarea rows={5} placeholder='Add a detailed observation note' className="w-full border p-3 text-sm rounded-lg"/>
                        </div>
                        <div className="w-full flex flex-col gap-1">
                            <p className="text-sm">Follow-up Suggestions for Doctor</p>
                            <textarea rows={5} placeholder='Any recommendation for doctor review' className="w-full border p-3 text-sm rounded-lg"/>
                        </div>
                        <Button className='w-full h-10 rounded'>Add Observation</Button>
                    </form>
                </aside>
            </div>
            <div className="w-full rounded-xl border p-4 flex flex-col gap-5">
                <p>Vital Signs</p>
                <form action="" className="w-full flex flex-col gap-4">
                    <div className="w-full flex flex-col gap-1">
                        <p className="text-sm">Temperature (°F) </p>
                        <input placeholder='98.6' className="w-full border p-3 h-10 outline-none text-sm rounded-lg"/>
                    </div>
                    <div className="w-full flex flex-col gap-1">
                        <p className="text-sm">Blood Pressure </p>
                        <input placeholder='98.6' className="w-full border p-3 h-10 outline-none text-sm rounded-lg"/>
                    </div>
                    <div className="w-full flex flex-col gap-1">
                        <p className="text-sm">Heart Rate (bpm) </p>
                        <input placeholder='98.6' className="w-full border p-3 h-10 outline-none text-sm rounded-lg"/>
                    </div>
                    <div className="w-full flex flex-col gap-1">
                        <p className="text-sm">Respiratory Rate </p>
                        <input placeholder='98.6' className="w-full border p-3 h-10 outline-none text-sm rounded-lg"/>
                    </div>
                    <div className="w-full flex flex-col gap-1">
                        <p className="text-sm">O2 Saturation (%) </p>
                        <input placeholder='98.6' className="w-full border p-3 h-10 outline-none text-sm rounded-lg"/>
                    </div>
                    <div className="w-full flex flex-col gap-1">
                        <p className="text-sm">Nurse Notes </p>
                        <textarea rows={5} placeholder='Enter assessment notes, patient interactions, and observations...' className="w-full border p-3 h-10 outline-none text-sm rounded-lg"/>
                    </div>

                    <aside className="grid grid-cols-2 gap-5">
                        <Button className='rounded h-10 bg-red-600'>Escalate to Doctor</Button>
                        <Button className='rounded h-10 '>Save Notes</Button>
                    </aside>
                </form>
            </div>
        </section>
    </>}/>
}

export default UpdateVitals