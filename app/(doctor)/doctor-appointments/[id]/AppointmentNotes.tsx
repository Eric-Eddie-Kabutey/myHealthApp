'use client';

import { Button } from '@/components/ui/button';
import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogTitle,
  } from "@/components/ui/dialog"
import { Download, Plus } from 'lucide-react';

function AppointmentNotes() {
        const [complete, setComplete] = useState(false)
    return <>
        <section className="w-full rounded-2xl border p-4 flex flex-col gap-4">
            <p>Notes</p>

            <div className="flex flex-col w-full gap-2">
                <p>Consultation Notes</p>
                <textarea rows={3} placeholder='Enter Consultation Notes, diagnosis, treatment plan' name="" id="" className="text-sm w-full border rounded-lg p-4"></textarea>
            </div>
            <div className="flex flex-col w-full gap-2">
                <p>Prescription</p>
                <textarea rows={3} placeholder='Enter Prescription ' name="" id="" className="text-sm w-full border rounded-lg p-4"></textarea>
            </div>
            <div className="flex flex-col w-full gap-2">
                <p>Prescription Purpose</p>
                <textarea rows={3} placeholder='Enter purpose' name="" id="" className="text-sm w-full border rounded-lg p-4"></textarea>
            </div>

            <Button variant={'outline'} className='w-fit h-10 my-1'><Plus/>Add New Prescription and Purpose</Button>

            <div className="w-full border-t py-4 flex justify-end">
                <Button onClick={()=>setComplete(true)} className='rounded h-10'>Complete Consultation</Button>
            </div>
        </section>

        <Dialog open={!!complete} onOpenChange={()=>setComplete(false)}>
            <DialogContent className="main-content sm:w-[400px] flex flex-col items-center gap-3">
            <DialogTitle/>
            <section className="size-16 rounded-full bg-gradient-to-b from-primary via-white to-white flex justify-center items-center">
                <div className="size-[97%] mt-1 rounded-full flex items-center justify-center bg-white">
                <i className="fa fa-check-circle text-xl text-primary"></i>
                </div>
            </section>
            <p className="font-[500] text-lg">Consultation Completed!</p>
            <small className="text-gray-600 my-2 text-center">You have successfully submitted a full report about this patient, welldone!</small>

            <Button variant={`outline`} className='w-full flex items-center gap-3 justify-center border-primary text-primary'>
                <Download className='size-4'/>
                Download Transcript
            </Button>
            </DialogContent>
        </Dialog>
    </>
}

export default AppointmentNotes