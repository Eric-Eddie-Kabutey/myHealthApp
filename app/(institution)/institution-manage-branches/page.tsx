'use client';

import PageWrapper from '@/components/PageWrapper';
import { Button } from '@/components/ui/button';
import { Caravan, MapPin, Plus, Trash } from 'lucide-react';
import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogTitle,
  } from "@/components/ui/dialog"
import { useRoleGuard } from '@/app/hooks/useRoleGuard';

function InstitutionBranches() {
    useRoleGuard('institution');
    const [newBranch, setNewBranch] = useState(false)
    const [deleteBranch, setDeleteBranch] = useState('')

    return <PageWrapper content={<>
        <section className="w-full pb-3 border-b flex items-center justify-between">
            <p className="text-base">Manage Branches</p>
            <Button onClick={()=>setNewBranch(true)} className='rounded gap-2 bg-[#4BA254]'><Plus/>Add Branch</Button>
        </section>

        <section className="w-full flex flex-col gap-5">
            {
                [1,2,3].map((req, idx)=>{
                    return <div key={`req${idx}`} className="w-full border rounded-xl p-4 flex items-end justify-between">
                        <aside className="flex flex-col gap-2">
                            <p>Main Hospital</p>
                            <small>Downtown</small>
                            <span className="text-xs flex items-center gap-2">
                                <Caravan className='size-4'/>
                                3/5 Available
                                <MapPin className='size-4'/>
                                Active
                            </span>
                        </aside>
                        <aside className="flex flex-col gap-4 items-end">
                            <div className="flex gap-3 items-end">
                                <Button variant={'outline'} className='rounded px-5'>Edit</Button>
                                <Button onClick={()=>setDeleteBranch(req.toString())} className='rounded bg-red-600 px-5'>Delete</Button>
                            </div>
                        </aside>
                    </div>
                })
            }
        </section>

        <Dialog open={!!newBranch} onOpenChange={()=>setNewBranch(false)}>
            <DialogContent className="main-content sm:w-[400px] flex flex-col items-center gap-3">
            <DialogTitle/>
            <p className="font-[500] text-lg">Add New Branch</p>
            
            <div className="w-full flex flex-col gap-4">
                <aside className="w-full flex flex-col gap-1">
                    <p className="text-sm">Branch Name</p>
                    <input placeholder='Enter name' className='w-full h-10 outline-none rounded border px-3 text-sm'/>
                </aside>
                <aside className="w-full flex flex-col gap-1">
                    <p className="text-sm">Location</p>
                    <input placeholder='Enter address' className='w-full h-10 outline-none rounded border px-3 text-sm'/>
                </aside>
                <aside className="w-full flex flex-col gap-1">
                    <p className="text-sm">Total Number of Ambulance</p>
                    <select className='w-full h-10 outline-none rounded border px-3 text-sm'>
                        <option value="">1</option>
                    </select>
                </aside>
                <aside className="w-full flex flex-col gap-1">
                    <p className="text-sm">Number of Available Ambulance</p>
                    <select className='w-full h-10 outline-none rounded border px-3 text-sm'>
                        <option value="">1</option>
                    </select>
                </aside>
                
            </div>

            <Button className='w-full flex items-center gap-3 justify-center h-10'>
                Add Branch
            </Button>
            </DialogContent>
        </Dialog>

        <Dialog open={!!deleteBranch} onOpenChange={()=>setDeleteBranch('')}>
            <DialogContent className="main-content sm:w-[400px] flex flex-col items-center gap-3">
            <DialogTitle/>
            <div className="size-16 rounded-full flex items-center justify-center bg-red-50">
                <Trash className='text-red-500'/>
            </div>
            <p className="font-[500] text-lg">Are you sure?</p>
            <p className="text-sm">This branch would be deleted permenently.</p>
            
            <div className="w-full grid grid-cols-2 gap-4 mt-3">
                <Button variant={'outline'} onClick={()=>setDeleteBranch('')} className='w-full flex items-center gap-3 justify-center h-10'>
                    Cancel
                </Button>
                <Button className='w-full flex items-center gap-3 justify-center h-10 bg-red-600'>
                    Delete
                </Button>
            </div>

            </DialogContent>
        </Dialog>


    </>}/>
}

export default InstitutionBranches