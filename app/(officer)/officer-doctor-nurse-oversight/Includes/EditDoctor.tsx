'use client';

import { Button } from '@/components/ui/button';
import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogTitle,
  } from "@/components/ui/dialog"
import { Switch } from '@/components/ui/switch';

function EditDoctor({open, close}:{open:boolean, close: ()=>void}) {
    return (
        <Dialog open={!!open} onOpenChange={()=>close()}>
            <DialogContent className="main-content sm:min-w-[300px] flex flex-col gap-3">
            <DialogTitle/>
            <p className='py-3 border-b'>Edit Permissions</p>

            <div className="w-full flex flex-col gap-6 my-5">
                <span className="w-full flex items-center justify-between">
                    <p className='text-gray-700'>Prescription rights</p>
                    <Switch/>
                </span>
                <span className="w-full flex items-center justify-between">
                    <p className='text-gray-700'>Consultation limits</p>
                    <Switch/>
                </span>
                <span className="w-full flex items-center justify-between">
                    <p className='text-gray-700'>Access to patient notes</p>
                    <Switch/>
                </span>
            </div>


            <Button className='w-full rounded h-10'>Save Changes</Button>
            </DialogContent>
        </Dialog>
            
    )
}

export default EditDoctor