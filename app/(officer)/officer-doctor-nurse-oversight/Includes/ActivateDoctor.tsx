'use client';

import { Button } from '@/components/ui/button';
import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogTitle,
  } from "@/components/ui/dialog"
import { Switch } from '@/components/ui/switch';

function ActivateDoctor({open, close}:{open:boolean, close: ()=>void}) {
    return (
        <Dialog open={!!open} onOpenChange={()=>close()}>
            <DialogContent className="main-content w-[400px] flex flex-col items-center gap-3">
            <DialogTitle/>
            <div className="size-16 rounded-full flex items-center justify-center bg-gradient-to-b from-gray-100 p-3 myy-3">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="1.01562" width="59" height="57.9655" rx="28.9828" fill="#34765A"/>
                <rect x="0.5" y="1.01562" width="59" height="57.9655" rx="28.9828" stroke="#E1E4EA"/>
                <path d="M27.3329 34.2253L39.5895 21.9688L41.4751 23.8544L27.3329 37.9965L18.8477 29.5113L20.7333 27.6257L27.3329 34.2253Z" fill="white"/>
                </svg>
            </div>
            <p className='text-center w-[200px]'>You have successfully activated this Doctor’s account.</p>
            <br />
            </DialogContent>
        </Dialog>
            
    )
}

export default ActivateDoctor