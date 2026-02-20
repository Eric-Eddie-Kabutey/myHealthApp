'use client';

import React from 'react'
import { Button } from '@/components/ui/button'
import {
    Dialog,
    DialogContent,
    DialogTitle,
  } from "@/components/ui/dialog"

function EditConsultationDetails({open, close}:{open:boolean, close: ()=>void}) {
    return <Dialog open={!!open} onOpenChange={()=>close()}>
    <DialogContent className="main-content sm:w-[400px] flex pt-0 flex-col items-center gap-3">
    <DialogTitle/>
        <div className="py-3 border-b w-full">
            <p>Edit Consultation Details</p>
        </div>

        <div className="w-full flex flex-col gap-1">
            <p className='text-sm'>Consultation Summary</p>
            <textarea rows={4} defaultValue={`Patient presented with chest pain and shortness of breath. Vital signs stable. Recommended ECG and chest X-ray.`} className="w-full border rounded-lg p-3 text-sm"></textarea>
        </div>
        <div className="w-full flex flex-col gap-1">
            <p className='text-sm'>Prescription Notes</p>
            <textarea rows={2} defaultValue={`Aspirin 81mg daily, Nitroglycerin as needed`} className="w-full border rounded-lg p-3 text-sm"></textarea>
        </div>
        <div className="w-full flex flex-col gap-1">
            <p className='text-sm'>Clinical Notes</p>
            <textarea rows={4} defaultValue={`Patient has history of hypertension. Monitor closely for cardiac events.`} className="w-full border rounded-lg p-3 text-sm"></textarea>
        </div>
        <div className="w-full flex flex-col gap-1">
            <p className='text-sm'>Final Review Comments</p>
            <textarea rows={4} defaultValue={`Patient presented with chest pain and shortness of breath. Vital signs stable. Recommended ECG and chest X-ray.`} className="w-full border rounded-lg p-3 text-sm"></textarea>
        </div>
        <Button className='w-full rounded h-10'>Save Changes</Button>
    </DialogContent>
</Dialog>
}

export default EditConsultationDetails