'use client';

import { Button } from '@/components/ui/button';
import React from 'react'

function ReportEntry() {
    return <div className="w-full main-content flex flex-col items-center">
        <form action="" className="w-[500px] border rounded-xl p-5 flex flex-col gap-5">
            <p className='mb-2'>Follow-Up Report Entry</p>

            <div className="w-full flex flex-col gap-1">
                <p className="text-sm">Select Patient</p>
                <select name="" id="" className="w-full border h-10 rounded px-3 text-sm">
                    <option value="">Choose a Patient</option>
                </select>
            </div>
            <div className="w-full flex flex-col gap-1">
                <p className="text-sm">Progress Summary</p>
                <textarea rows={5} placeholder={`Describe the patient’s current condition and progress since last visit...`} className="w-full border rounded p-3 text-sm"/>
            </div>
            <div className="w-full flex flex-col gap-1">
                <p className="text-sm">Complications or Issues Observed</p>
                <textarea rows={5} placeholder='Note any complications, concerns or unusual observations...' className="w-full border rounded p-3 text-sm"/>
            </div>
            <div className="w-full flex flex-col gap-1">
                <p className="text-sm">Recommendations for Next Steps</p>
                <textarea rows={5} placeholder='Provide recommendations for continued care, medication adjustments, or further elevation...' className="w-full border rounded p-3 text-sm"/>
            </div>

            <Button className='h-10 rounded'>Submit Report & Notify Doctor</Button>
        </form>
    </div>
}

export default ReportEntry