'use client';

import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import React from 'react'

function ShiftEndReport() {
    return <div className="main-content flex flex-col gap-5">
        <section className="w-full grid grid-cols-2 gap-5">
            <div className="border rounded-xl p-4 pt-0 flex flex-col gap-3 max-h-[350px] overflow-y-auto">
                <p className='py-2 pt-4 sticky top-0 w-full bg-white'>Completed Tasks (4)</p>
                {
                    [1,2,3,4,5].map((task, idx)=>{
                        return <aside key={`task-${idx}`} className="w-full border rounded h-[43px] px-3 flex items-center gap-2 text-[#3C8F45] border-[#3C8F45] bg-[#3c8f461e]">
                            <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.00033 16.8327C13.6027 16.8327 17.3337 13.1017 17.3337 8.49935C17.3337 3.89697 13.6027 0.166016 9.00033 0.166016C4.39795 0.166016 0.666992 3.89697 0.666992 8.49935C0.666992 13.1017 4.39795 16.8327 9.00033 16.8327ZM13.5479 6.38027L8.16699 11.7612L4.66107 8.25527L5.83958 7.07677L8.16699 9.40418L12.3694 5.20176L13.5479 6.38027Z" fill="#3C8F45"/>
                            </svg>
                            <p className="text-sm">Administer morning medications</p>
                        </aside>
                    })
                }
            </div>
            <div className="border rounded-xl p-4 pt-0 flex flex-col gap-3 max-h-[350px] overflow-y-auto">
                <p className='py-2 pt-4 sticky top-0 w-full bg-white'>Completed Tasks (4)</p>
                {
                    [1,2,3,4,5].map((task, idx)=>{
                        return <aside key={`task-${idx}`} className="w-full border rounded h-[43px] px-3 flex items-center gap-2 text-[#854D0F] border-[#854D0F] bg-[#FBC0002E]">
                            <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.00033 16.8327C4.39795 16.8327 0.666992 13.1017 0.666992 8.49935C0.666992 3.89697 4.39795 0.166016 9.00033 0.166016C13.6027 0.166016 17.3337 3.89697 17.3337 8.49935C17.3337 13.1017 13.6027 16.8327 9.00033 16.8327ZM9.00033 15.166C12.6822 15.166 15.667 12.1813 15.667 8.49935C15.667 4.81745 12.6822 1.83268 9.00033 1.83268C5.31843 1.83268 2.33366 4.81745 2.33366 8.49935C2.33366 12.1813 5.31843 15.166 9.00033 15.166ZM8.16699 10.9993H9.83366V12.666H8.16699V10.9993ZM8.16699 4.33268H9.83366V9.33268H8.16699V4.33268Z" fill="#854D0F"/>
                            </svg>
                            <p className="text-sm">Administer morning medications</p>
                        </aside>
                    })
                }
            </div>
        </section>

        <section className="w-full flex flex-col gap-3">
            <p>Summary of Patient Interactions</p>
            <textarea rows={5} placeholder={`Describe the patient’s key interactions, assessments and care provided during your shift...`} className='border rounded-xl p-4 text-sm w-full'/>
        </section>
        <section className="w-full flex flex-col gap-3">
            <p>Notes for Next Nurse (Handover)</p>
            <textarea rows={5} placeholder={`Important information for the next nurse, including pending tasks, patient concerns, or special instructions.`} className='border rounded-xl p-4 text-sm w-full'/>
        </section>
        <div className="flex justify-end">
            <Button className='rounded px-[3rem] h-10'>Save Shift Report</Button>
        </div>
        <br /><br />
    </div>
}

export default ShiftEndReport