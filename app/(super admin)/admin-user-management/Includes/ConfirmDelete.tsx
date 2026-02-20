'use client';

import React, { useEffect, useState } from 'react'
import { Dialog, DialogContent, DialogTitle, } from "@/components/ui/dialog"
import { Button } from '@/components/ui/button';


function ConfirmDelete({ open, close }: { open: any, close: () => void }) {
    const [user, setUser] = useState<any>(open);
    const [deleted, setDeleted] = useState(false)
    useEffect(() => setUser(open), [open]);


    return <Dialog open={!!open} onOpenChange={close}>
        <DialogContent className="main-content sm:w-[400px] flex flex-col items-center gap-3">
            <DialogTitle />
            {
                deleted ? <div className='w-full flex flex-col items-center py-5'>
                    <div className="size-16 p-4 rounded-full bg-gradient-to-b from-gray-200">
                        <svg className='size-full' viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="1.01758" width="59" height="57.9655" rx="28.9828" fill="#34765A" />
                            <rect x="0.5" y="1.01758" width="59" height="57.9655" rx="28.9828" stroke="#E1E4EA" />
                            <path d="M27.329 34.2272L39.5856 21.9707L41.4712 23.8563L27.329 37.9984L18.8438 29.5132L20.7294 27.6276L27.329 34.2272Z" fill="white" />
                        </svg>
                    </div>
                    <p className=" mb-4 text-gray-700 w-[240px] text-center mt-3">You have successfully deleted this account.</p>
                </div> : <div className='w-full flex flex-col items-center py-5'>
                    <p className="text-lg">Are you Sure?</p>
                        <p className="text-sm mb-4 text-gray-700 text-center">You are about to delete this account, this account cannot be undone.</p>
                    <br />
                    <div className="w-full grid grid-cols-2 gap-3">
                        <Button onClick={() => close()} variant={'outline'}>Cancel</Button>
                        <Button onClick={() => setDeleted(true)} className='bg-red-500 hover:bg-red-400 text-white'>Delete Account</Button>
                    </div>
                </div>
            }

        </DialogContent>
    </Dialog>
}

export default ConfirmDelete
