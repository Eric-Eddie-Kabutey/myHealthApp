'use client';

import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogTitle,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button';

function AddNotes({open, close}:{open:boolean, close:()=>void}) {
    return <Dialog open={!!open} onOpenChange={close}>
        <DialogContent className="main-content sm:w-[400px] flex flex-col items-center gap-3">
            <DialogTitle />
            <p>Add Notes</p>

            <br />
            <div className="w-full flex flex-col gap-1">
                <p>Note</p>
                <textarea rows={4} placeholder='Add a note' className='w-full rounded p-3 text-sm'/>
            </div>
            <Button className='w-full rounded h-10'>Add Note</Button>
        </DialogContent>
    </Dialog>
}

export default AddNotes