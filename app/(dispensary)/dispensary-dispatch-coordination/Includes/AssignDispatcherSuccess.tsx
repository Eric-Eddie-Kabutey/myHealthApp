'use client';

import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogTitle,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button';

function AssignDispatcherSuccess({ open, close }: { open: boolean, close: () => void }) {
    return <Dialog open={!!open} onOpenChange={close}>
        <DialogContent className="main-content sm:w-[400px] flex flex-col items-center gap-3">
            <DialogTitle />
            <div className="size-16 rounded-full bg-gradient-to-b from-gray-200 p-3">
                <svg className='size-full' viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="1.01758" width="59" height="57.9655" rx="28.9828" fill="#34765A" />
                    <rect x="0.5" y="1.01758" width="59" height="57.9655" rx="28.9828" stroke="#E1E4EA" />
                    <path d="M27.3329 34.2272L39.5895 21.9707L41.4751 23.8563L27.3329 37.9984L18.8477 29.5132L20.7333 27.6276L27.3329 34.2272Z" fill="white" />
                </svg>
            </div>
            <p className="px-10 text-center my-5">You have successfully assigned a new dispatcher</p>
        </DialogContent>
    </Dialog>
}

export default AssignDispatcherSuccess