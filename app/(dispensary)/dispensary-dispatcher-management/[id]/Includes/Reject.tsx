'use client';

import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogTitle,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button';

function Reject({ open, close }: { open: boolean, close: () => void }) {
    return <Dialog open={!!open} onOpenChange={close}>
        <DialogContent className="main-content sm:w-[400px] flex flex-col items-center gap-3">
            <DialogTitle />
            <p>Are you sure?</p>

            <p className="text-sm px-8 text-center py-4">You are about to reject this dispatcher  </p>

            <span className="flex justify-center gap-4">
                <Button variant={'outline'}>Cancel</Button>
                <Button className='bg-red-600'>Reject</Button>
            </span>
        </DialogContent>
    </Dialog>
}

export default Reject