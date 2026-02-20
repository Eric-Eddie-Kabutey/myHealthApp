'use client';

import React from 'react';
import {
    Dialog,
    DialogContent,
    DialogTitle,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button';

function RequestSubmitted({ open, close }: { open: boolean, close: () => void }) {
    return <Dialog open={open} onOpenChange={() => close()}>
        <DialogContent className="main-content w-full sm:max-w-[400px] text-center flex flex-col items-center gap-3">
            <DialogTitle />
            <div className="size-12 bg-gradient-to-b from-gray-200 flex items-center justify-center rounded-full">
                <svg className='size-7' viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.703125" y="1.09375" width="44.6" height="43.8138" rx="21.9069" fill="#34765A" />
                    <rect x="0.703125" y="1.09375" width="44.6" height="43.8138" rx="21.9069" stroke="#E1E4EA" />
                    <path d="M20.5322 27.3034L32.7887 15.0469L34.6743 16.9325L20.5322 31.0746L12.0469 22.5894L13.9325 20.7038L20.5322 27.3034Z" fill="white" />
                </svg>
            </div>
            <p className='text-lg'>Request Submitted!</p>
            <span className="text-sm">Emergency flight request submitted successfully!
                Your request ID is: <b>EFR-2025-533</b>. Our medical team will contact you within 30 minutes for critical cases.</span>
            <section className="w-full py-4 flex justify-center gap-4">
                <Button variant={'outline'} className='px-10 rounded border-primary text-primary'>View Request</Button>
            </section>
        </DialogContent>
    </Dialog>
}

export default RequestSubmitted