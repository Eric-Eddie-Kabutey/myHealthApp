'use client';
import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogTitle,
} from "@/components/ui/dialog"
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';

function FlagPrescriptionLog({ open, close }: { open: boolean, close: () => void }) {
    return <Dialog open={!!open} onOpenChange={() => close()}>
        <DialogContent className="main-content sm:min-w-[700px] flex flex-col items-center gap-3">
            <DialogTitle />
            <p className='w-full text-left flex'>Flag Prescription</p>
            <div className="flex flex-col gap-1 w-full">
                <p className="text-sm">Flag Reason</p>
                <input type="text" placeholder='Inappropriate Dosage' className="w-full h-9 text-sm border rounded px-3" />
            </div>
            <div className="flex flex-col gap-1 w-full">
                <p className="text-sm">Additional Notes</p>
                <textarea rows={3} placeholder='Provide additional details about the concern.' className="w-full p-3 text-sm border rounded px-3" />
            </div>
            <span className="flex gap-1.5 text-sm items-center w-full"><Checkbox /> Notify Super Admin</span>
            <span className="flex gap-1.5 text-sm items-center w-full"><Checkbox /> Suspend Doctor's Prescribing Rights</span>
            <span className="flex gap-1.5 text-sm items-center w-full"><Checkbox /> Mark for Audit Review</span>

            <div className="w-full flex justify-between mt-4">
                <Button onClick={() => close()} variant={'outline'} className='rounded h-9'>Cancel</Button>

                <span className="flex gap-3">
                    <Button variant={'outline'} className='rounded h-9 border-red-600 text-red-600'>Flag Prescription</Button>
                </span>
            </div>
        </DialogContent>
    </Dialog>
}

export default FlagPrescriptionLog
