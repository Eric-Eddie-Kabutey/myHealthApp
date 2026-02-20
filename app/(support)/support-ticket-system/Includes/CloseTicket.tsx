'use client';

import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogTitle,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button';

function CloseTicket({ open, close }: { open: boolean, close: () => void }) {
    return (
        <Dialog open={open} onOpenChange={() => close()}>
            <DialogContent className="main-content sm:w-[400px] flex flex-col items-center gap-3">
                <DialogTitle />
                <p className="font-[500] text-lg">Close Ticket</p>

                <p className='text-center my-2'>You are about to close this ticket, are you sure you want to close it?</p>

                <div className="grid grid-cols-2 gap-4">
                    <Button variant={'outline'} className='w-full rounded h-10 my-2'>Cancel</Button>
                    <Button className='w-full rounded h-10 my-2 bg-red-600 text-white'>Close Ticket</Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default CloseTicket