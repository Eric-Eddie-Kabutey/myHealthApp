'use client';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import React from 'react'

function NextFollowUp() {
    return <div className="w-full main-content flex flex-col items-center">
        <form action="" className="w-[500px] border rounded-xl p-5 flex flex-col gap-5">
            <p className='mb-2'>Schedule Next Follow-Up</p>

            <div className="w-full flex flex-col gap-1">
                <p className="text-sm">Select Patient</p>
                <select name="" id="" className="w-full border h-10 rounded px-3 text-sm">
                    <option value="">Choose a Patient</option>
                </select>
            </div>
            <div className="w-full flex flex-col gap-1">
                <p className="text-sm">Proposed Date</p>
                <input type='date' className="w-full border rounded p-3 text-sm"/>
            </div>
            <div className="w-full flex flex-col gap-1">
                <p className="text-sm">Proposed Time</p>
                <input type='time' className="w-full border rounded p-3 text-sm"/>
            </div>
            <div className="w-full flex flex-col gap-1">
                <p className="text-sm">Visit Type</p>
                <select name="" id="" className="w-full border h-10 rounded px-3 text-sm">
                    <option value="">In Person</option>
                </select>
            </div>
            <div className="w-full flex flex-col gap-1">
                <p className="text-sm">Additional Notes</p>
                <textarea rows={5} placeholder='Any specific instruction or notes for the follow-up appointment ' className="w-full border rounded p-3 text-sm"/>
            </div>
            <span className="flex gap-1 items-center">
                <Checkbox/>
                <small> Mark as Urgent (requires immediate doctor confirmation)</small>
            </span>
            <Button className='h-10 rounded'>Schedule Follow-up</Button>
        </form>
    </div>
}

export default NextFollowUp
