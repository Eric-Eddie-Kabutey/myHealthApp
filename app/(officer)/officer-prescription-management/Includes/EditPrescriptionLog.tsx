'use client';
import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogTitle,
} from "@/components/ui/dialog"
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';

function EditPrescriptionLog({open, close}:{open:boolean, close:()=>void}) {
    return <Dialog open={!!open} onOpenChange={() => close()}>
        <DialogContent className="main-content sm:min-w-[700px] flex flex-col items-center gap-3">
            <DialogTitle />
            <p className='w-full text-left flex'>Edit Prescription</p>
            <section className="grid grid-cols-2 gap-4 w-full">
                <div className="flex flex-col gap-1 w-full">
                    <p className="text-sm">Patient</p>
                    <input type="text" disabled defaultValue={'Sarah Johnson'} className="w-full h-9 text-sm border rounded px-3" />
                </div>
                <div className="flex flex-col gap-1 w-full">
                    <p className="text-sm">Doctor</p>
                    <input type="text" disabled defaultValue={'Dr. Michael Chen'} className="w-full h-10 text-sm border rounded px-3" />
                </div>
            </section>
            <div className="flex flex-col gap-1 w-full">
                <p className="text-sm">Medicine</p>
                <input type="text" placeholder='Lisinopril 10mg' className="w-full h-10 text-sm border rounded px-3" />
            </div>
            <section className="grid grid-cols-2 gap-4 w-full">
                <div className="flex flex-col gap-1 w-full">
                    <p className="text-sm">Dosage</p>
                    <input type="text" placeholder='1 tablet daily' className="w-full h-10 text-sm border rounded px-3" />
                </div>
                <div className="flex flex-col gap-1 w-full">
                    <p className="text-sm">Quantity</p>
                    <input type="number" placeholder='30' className="w-full h-10 text-sm border rounded px-3" />
                </div>
            </section>
            <div className="flex flex-col gap-1 w-full">
                <p className="text-sm">Override Notes</p>
                <textarea rows={3} placeholder='Add notes for phamarcy and doctor.' className="w-full p-3 text-sm border rounded px-3" />
            </div>
            <span className="flex gap-1.5 text-sm items-center w-full"><Checkbox/> Notify Pharmacy</span>
            <span className="flex gap-1.5 text-sm items-center w-full"><Checkbox/> Notify Doctor</span>

            <div className="w-full flex justify-between mt-4">
                <Button onClick={()=>close()} variant={'outline'} className='rounded h-9'>Cancel</Button>

                <span className="flex gap-3">
                    <Button variant={'outline'} className='rounded h-9 border-red-600 text-red-600'>Cancel Prescription</Button>
                    <Button className='rounded h-9'>Save Changes</Button>
                </span>
            </div>
        </DialogContent>
    </Dialog>
}

export default EditPrescriptionLog