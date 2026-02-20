'use client';

import React from 'react';
import {
    Dialog,
    DialogContent,
    DialogTitle,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button';

function ApproveRequest({ open, close }: { open: boolean, close: () => void }) {
    return <Dialog open={open} onOpenChange={() => close()}>
        <DialogContent className="main-content w-full sm:max-w-[400px] text-center flex flex-col items-center gap-3">
            <DialogTitle />
            <p className='text-lg'>Are you sure?</p>
            <p>You are about to approve this emergency flight request</p>
            <section className="w-full py-4 flex justify-center gap-4">
                <Button variant={'outline'} className='px-8 rounded'>Cancel</Button>
                <Button className='px-8 rounded'>Approve</Button>
            </section>
        </DialogContent>
    </Dialog>
}

export default ApproveRequest