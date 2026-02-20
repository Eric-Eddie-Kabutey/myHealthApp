'use client';

import { Button } from '@/components/ui/button';
import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogTitle,
  } from "@/components/ui/dialog"

function ViewDoctor({open, close}:{open:boolean, close: ()=>void}) {
    return (
        <Dialog open={!!open} onOpenChange={()=>close()}>
            <DialogContent className="main-content sm:min-w-[600px] flex flex-col gap-3">
            <DialogTitle/>
            <p>Dr. Sarah Johnson Profile</p>

            <div className="w-full rounded-xl bg-indigo-100 p-4 flex flex-col gap-2">
                <p className="text-indigo-600">Performance Data</p>
                <span className="w-full flex items-center justify-between">
                    <p className='text-gray-700'>Cases Handled:</p>
                    <p>234</p>
                </span>
                <span className="w-full flex items-center justify-between">
                    <p className='text-gray-700'>Escalations:</p>
                    <p>234</p>
                </span>
                <span className="w-full flex items-center justify-between">
                    <p className='text-gray-700'>Patient Reviews:</p>
                    <p>234</p>
                </span>
                <span className="w-full flex items-center justify-between">
                    <p className='text-gray-700'>Assigned Patients:</p>
                    <p>234</p>
                </span>
            </div>

            <div className="w-full rounded-xl bg-gray-100 p-4 flex flex-col gap-2">
                <p className="mb-1">Performance Data</p>
                <span className="w-full flex items-center justify-between">
                    <p className='text-gray-700'>Prescription Rights:</p>
                    <small>Enabled</small>
                </span>
                <span className="w-full flex items-center justify-between">
                    <p className='text-gray-700'>Daily Consultation Limit:</p>
                    <p>8</p>
                </span>
            </div>

            <div className="w-full rounded-xl bg-yellow-50 p-4 flex flex-col gap-3">
                <p className="mb-1">Recent Audit Log</p>
                <span className="w-full flex items- gap-2 py-1">
                    <div className='bg-yellow-500 size-3 rounded-full'/>
                    <span className="flex flex-col">
                        <p className='leading-3.5'>Prescription Issued</p>
                        <small className="text-gray-500">May 29, 2025 - 2:30 PM</small>
                    </span>
                </span>
                <span className="w-full flex items- gap-2 py-1">
                    <div className='bg-yellow-500 size-3 rounded-full'/>
                    <span className="flex flex-col">
                        <p className='leading-3.5'>Prescription Issued</p>
                        <small className="text-gray-500">May 29, 2025 - 2:30 PM</small>
                    </span>
                </span>
                <span className="w-full flex items- gap-2 py-1">
                    <div className='bg-yellow-500 size-3 rounded-full'/>
                    <span className="flex flex-col">
                        <p className='leading-3.5'>Prescription Issued</p>
                        <small className="text-gray-500">May 29, 2025 - 2:30 PM</small>
                    </span>
                </span>
            </div>

            <Button className='w-full rounded'>Reassign Patients</Button>
            <Button variant={'outline'} className='w-full rounded'>Edit Permissions</Button>
            </DialogContent>
        </Dialog>
            
    )
}

export default ViewDoctor