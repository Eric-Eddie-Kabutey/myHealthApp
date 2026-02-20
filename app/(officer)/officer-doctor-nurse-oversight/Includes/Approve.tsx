'use client';

import { Button } from '@/components/ui/button';
import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogTitle,
  } from "@/components/ui/dialog"

function ApproveApp({open, close}:{open:boolean, close: ()=>void}) {
    return (
        <Dialog open={!!open} onOpenChange={()=>close()}>
            <DialogContent className="main-content items-center sm:w-[370px] px-4 flex flex-col gap-3">
            <DialogTitle/>
            <span className="flex flex-col text-center gap-2">
                <h1 className='text-lg'>Approve Application</h1>
                <p className="text-sm w-[250px]">GGive reason for approval, super admin would be notified if this reason</p>
            </span>
            <br />
            <span className="w-full flex flex-col gap-2">
                <p>Reason</p>
                <textarea rows={5} placeholder='Give reason for approval' className='w-full border rounded-xl p-4' />
            </span>


            <Button className='w-full rounded h-10'>Approve</Button>
            </DialogContent>
        </Dialog>
            
    )
}

export default ApproveApp
