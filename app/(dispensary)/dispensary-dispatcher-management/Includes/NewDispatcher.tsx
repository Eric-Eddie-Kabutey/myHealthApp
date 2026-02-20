'use client';

import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogTitle,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';

function NewDispatcher({ open, close }: { open: boolean, close: () => void }) {
    const [success, setSuccess] = useState(false)
    return <Dialog open={!!open} onOpenChange={close}>
        <DialogContent className="main-content sm:w-[400px] flex flex-col items-center gap-3">
            <DialogTitle />
            {
                !success ? <>
                    <p>Add New Dispatcher</p>

                    <br />
                    <div className="w-full flex flex-col gap-1">
                        <p className='text-sm'>Name</p>
                        <input type='text' placeholder='Enter name' className='w-full h-10 border rounded p-3 text-sm' />
                    </div>
                    <div className="w-full flex flex-col gap-1">
                        <p className='text-sm'>Email</p>
                        <input type='email' placeholder='Enter Email Address' className='w-full h-10 border rounded p-3 text-sm' />
                    </div>
                    <div className="w-full flex flex-col gap-1">
                        <p className='text-sm'>Phone Number</p>
                        <input type='tel' placeholder='Enter Phone Number' className='w-full h-10 border rounded p-3 text-sm' />
                    </div>
                    <div className="w-full flex flex-col gap-1">
                        <p className='text-sm'>Initial Status</p>
                        <select className='w-full h-10 border rounded p-3 text-sm' >
                            <option value="">Choose initial status</option>
                        </select>
                    </div>

                    <div className="flex items-center gap-2 w-full py-2">
                        <Checkbox/>
                        Mark as trained
                    </div>
                    <Button className='w-full rounded h-10'>Add Dispatcher</Button>
                </> : <>
                    <div className="size-16 rounded-full bg-gradient-to-b from-gray-200 p-3">
                            <svg className='size-full' viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.5" y="1.01758" width="59" height="57.9655" rx="28.9828" fill="#34765A" />
                                <rect x="0.5" y="1.01758" width="59" height="57.9655" rx="28.9828" stroke="#E1E4EA" />
                                <path d="M27.329 34.2272L39.5856 21.9707L41.4712 23.8563L27.329 37.9984L18.8438 29.5132L20.7294 27.6276L27.329 34.2272Z" fill="white" />
                            </svg>
                    </div>

                    <p className="px-10 text-center py-2">You have successfully added a dispatcher.</p>
                </>
            }
        </DialogContent>
    </Dialog>
}

export default NewDispatcher