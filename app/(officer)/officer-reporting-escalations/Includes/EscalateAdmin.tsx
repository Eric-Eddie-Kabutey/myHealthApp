'use client';

import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogTitle,
} from "@/components/ui/dialog"
import { FolderPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';

function EscalateAdmin({open, close}: {open: boolean, close: () => void}) {
    return <Dialog open={open} onOpenChange={() => close()}>
        <DialogContent className="main-content sm:w-[700px] flex flex-col gap-3">
            <DialogTitle />
            <p>Escalation to Super Admin</p>

            <aside className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-1">
                    <p className="text-sm">Alert Title *</p>
                    <input type="text" className="w-full border rounded px-3 h-10 text-sm" />
                </div>
                <div className="flex flex-col gap-1">
                    <p className="text-sm">Priority Level</p>
                    <select className="w-full border rounded px-3 h-10 text-sm" >
                        <option value="">Select priority level</option>
                        <option value="critical">Critical</option>
                    </select>
                </div>
            </aside>
            <div className="flex flex-col gap-1">
                <p className="text-sm">Context Description *</p>
                <textarea rows={4} placeholder='Provide detailed context about the situation that requires escalation' className="w-full border rounded p-3 text-sm" />
            </div>
            <div className="flex flex-col gap-1">
                <p className="text-sm">Suggested Actions</p>
                <textarea rows={4} placeholder='Recommend specific actions or next step...' className="w-full border rounded p-3 text-sm" />
            </div>
            <div className="flex flex-col gap-1">
                <p className="text-sm">Attachments</p>
                <div className="w-full border rounded p-3 h-24 border-dashed outline-dashed flex flex-col items-center justify-center text-sm gap-1 relative cursor-pointer hover:bg-primary-foreground" >
                    <FolderPlus className='size-5'/>
                    <span className="text-xs text-gray-500"> Click to upload supporting documents or <span className="text-primary">Choose file</span></span>
                    <span className="text-xs text-gray-500">PNG, JPEG, XLS and PDF ( Max . 10mb)</span>
                    <input type="file" name="" id="" accept='.png, .jpg, .jpeg, .pdf, .xls' className="absolute size-full top-0 left-0 opacity-0 cursor-pointer" />
                </div>
            </div>
            <div className="w-full flex justify-between">
                <Button variant={'outline'} onClick={() => close()} className='px-6 rounded'>Cancel</Button>
                <Button className='px-6 rounded'>Escalate</Button>
            </div>
        </DialogContent>
    </Dialog>
}

export default EscalateAdmin