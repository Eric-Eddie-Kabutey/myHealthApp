'use client';

import { Button } from '@/components/ui/button';
import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogTitle,
  } from "@/components/ui/dialog"

function RejectApp({open, close}:{open:boolean, close: ()=>void}) {
    return (
        <Dialog open={!!open} onOpenChange={()=>close()}>
            <DialogContent className="main-content items-center sm:w-[370px] px-4 flex flex-col gap-3">
            <DialogTitle/>
            <span className="flex flex-col text-center gap-2">
                <h1 className='text-lg'>Reject Application</h1>
                <p className="text-sm w-[250px]">Give reason for reject, super admin would be notified if this reason</p>
            </span>
            <span className="w-full flex flex-col gap-1 mt-4">
                <p>Reason</p>
                <textarea rows={5} placeholder='Give reason for rejection' className='w-full border rounded p-4' />
            </span>


            <Button className='w-full rounded bg-red-700 h-10'>Reject</Button>
            </DialogContent>
        </Dialog>
            
    )
}

export default RejectApp
