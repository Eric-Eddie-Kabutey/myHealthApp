'use client';

import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogTitle,
  } from "@/components/ui/dialog"
import { Button } from '@/components/ui/button';

function SubmitReportModal({open, close}:{open:boolean, close: ()=>void}) {
    const [submitted, setSumitted] = useState(false)

    const onSubmit = () => {
        setSumitted(true)
    }


    return <Dialog open={!!open} onOpenChange={()=>close()}>
    <DialogContent className="main-content sm:w-[440px] flex flex-col items-center gap-3">
    <DialogTitle/>

    {
        !submitted ? <>
            <p>Submit Follow-Up Report</p>

            <form onSubmit={e=>{
                e.preventDefault();
                onSubmit();
            }} className="w-full flex flex-col gap-5">
                <div className="w-full flex flex-col gap-1">
                    <p className="text-sm">Patient</p>
                    <input type="text" disabled defaultValue={'Sarah Johnson (P-2024-001)'} className="w-full rounded h-10 px-3 border text-sm" />
                </div>
                <div className="w-full flex flex-col gap-1">
                    <p className="text-sm">Progress Summary</p>
                    <textarea rows={5} placeholder='Describe the patient’s current condition and progress since last visit...' className="w-full rounded p-3 border text-sm" />
                </div>
                <div className="w-full flex flex-col gap-1">
                    <p className="text-sm">Progress Summary</p>
                    <textarea rows={5} placeholder='Describe the patient’s current condition and progress since last visit...' className="w-full rounded p-3 border text-sm" />
                </div>
                <div className="w-full flex flex-col gap-1">
                    <p className="text-sm">Progress Summary</p>
                    <textarea rows={5} placeholder='Describe the patient’s current condition and progress since last visit...' className="w-full rounded p-3 border text-sm" />
                </div>
                <Button className='rounded h-10'>Submit Report & Notify Doctor</Button>
            </form>
        </> : <>
            <div className="size-16 bg-gradient-to-b gap-5 from-gray-100 flex items-center justify-center rounded-full p-4">
                <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.699219" y="1.09375" width="44.6" height="43.8138" rx="21.9069" fill="#34765A"/>
                <rect x="0.699219" y="1.09375" width="44.6" height="43.8138" rx="21.9069" stroke="#E1E4EA"/>
                <path d="M20.5322 27.3034L32.7887 15.0469L34.6743 16.9325L20.5322 31.0746L12.0469 22.5894L13.9325 20.7038L20.5322 27.3034Z" fill="white"/>
                </svg>
            </div>
            <p>Report Submitted!</p>
            <small className='text-center px-10'>You have successfully submitted a full report about this patient, welldone!</small>
        </>
    }
    </DialogContent>
</Dialog>
}

export default SubmitReportModal