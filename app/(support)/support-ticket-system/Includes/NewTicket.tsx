'use client';

import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogTitle,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button';

function NewTicket({ open, close }: { open: boolean, close: () => void }) {
    return (
        <Dialog open={open} onOpenChange={() => close()}>
            <DialogContent className="main-content sm:w-[400px] flex flex-col items-center gap-3">
                <DialogTitle />
                <p className="font-[500] text-lg">Create New Ticket</p>

                <div className="w-full flex flex-col gap-1">
                    <p className="text-sm">Ticket</p>
                    <input type="text" placeholder='Enter Title' className="border rounded px-4 h-10 text-sm w-full outline-none" />
                </div>
                <div className="w-full flex flex-col gap-1">
                    <p className="text-sm">Description</p>
                    <textarea placeholder='Describe ticket' rows={4} className="border rounded p-4 text-sm w-full outline-none" />
                </div>

                <div className="w-full flex flex-col gap-1">
                    <p className="text-sm">Priority</p>
                    <select className="border rounded px-4 h-10 text-sm w-full outline-none">
                        <option value="">Priority</option>
                        <option value="medium">Medium</option>
                    </select>
                </div>

                <div className="w-full flex flex-col gap-1">
                    <p className="text-sm">Tag</p>
                    <select className="border rounded px-4 h-10 text-sm w-full outline-none">
                        <option value="">Tag</option>
                        <option value="technical">Technical</option>
                    </select>
                </div>

                <div className="w-full flex flex-col gap-1">
                    <p className="text-sm">Assign to</p>
                    <select className="border rounded px-4 h-10 text-sm w-full outline-none">
                        <option value="">Assign to</option>
                        <option value="supper admin">Supper Admin</option>
                    </select>
                </div>

                <Button className='w-full rounded h-10 my-2'>Create Ticket</Button>
            </DialogContent>
        </Dialog>
    )
}

export default NewTicket