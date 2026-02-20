'use client';

import React from 'react'
import { Button } from '@/components/ui/button'
import {
    Dialog,
    DialogContent,
    DialogTitle,
  } from "@/components/ui/dialog"

function ReassignPatient({open, close}:{open:boolean, close: ()=>void}) {
    return <Dialog open={!!open} onOpenChange={()=>close()}>
    <DialogContent className="main-content sm:w-[400px] flex pt-0 flex-col items-center gap-3">
    <DialogTitle/>
        <div className="py-3 border-b w-full">
            <p>Reassign Patient</p>
        </div>
        <div className="w-full rounded-lg p-4 flex flex-col bg-gray-100 text-sm gap-1">
            <span>Patient: Sarah Johnson</span>
            <span>ID: <span className="text-gray-600">P001</span></span>
            <span>Current Doctor: <span className="text-gray-600">Dr. Smith</span></span>
            <span>Current Nurse: <span className="text-gray-600">Nurse Williams</span></span>
        </div>
        <div className="w-full flex flex-col gap-1">
            <p className='text-sm'>New Doctor</p>
            <select name="doc" className="border rounded-lg h-10 px-3 text-sm">
                <option value="">Select Doctor</option>
            </select>
        </div>
        <div className="w-full flex flex-col gap-1">
            <p className='text-sm'>New Nurse</p>
            <select name="doc" className="border rounded-lg h-10 px-3 text-sm">
                <option value="">Select Nurse</option>
            </select>
        </div>
        <div className="w-full flex flex-col gap-1">
            <p className='text-sm'>CMO Notes/Directives</p>
            <textarea rows={4} placeholder={`Add notes or directives that will be visible to the new care team...`} className="border rounded-lg p-3 text-sm"/>
        </div>
        <Button className='w-full rounded h-10'>Save Changes</Button>
    </DialogContent>
</Dialog>
}

export default ReassignPatient