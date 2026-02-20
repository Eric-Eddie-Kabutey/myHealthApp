'use client';

import { Button } from '@/components/ui/button';
import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogTitle,
  } from "@/components/ui/dialog"

function ViewNurse({open, close}:{open:boolean, close: ()=>void}) {
    return (
        <Dialog open={!!open} onOpenChange={()=>close()}>
            <DialogContent className="main-content sm:min-w-[600px] flex flex-col gap-3">
            <DialogTitle/>
            <p>Nurse Lisa Thompson Profile</p>

            <div className="w-full rounded-xl bg-indigo-100 p-4 flex flex-col gap-2">
                <p className="text-indigo-600">Assignment Details</p>
                <span className="w-full flex items-center justify-between">
                    <p className='text-gray-700'>Assigned Patients:</p>
                    <p>234</p>
                </span>
                <span className="w-full flex items-center justify-between">
                    <p className='text-gray-700'>Follow-up Reports:</p>
                    <p>234</p>
                </span>
                <span className="w-full flex items-center justify-between">
                    <p className='text-gray-700'>Doctor Assignment:</p>
                    <p>Dr. Sarah Johnson</p>
                </span>
                <span className="w-full flex items-center justify-between">
                    <p className='text-gray-700'>Current Shift:</p>
                    <p>Day Shift</p>
                </span>
            </div>

            <Button className='w-full rounded'>Reassign Patients</Button>
            <Button variant={'outline'} className='w-full rounded'>Edit Permissions</Button>
            </DialogContent>
        </Dialog>
            
    )
}

export default ViewNurse