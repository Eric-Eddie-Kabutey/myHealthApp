'use client';

import React, { useEffect, useState } from 'react'
import { Dialog, DialogContent, DialogTitle, } from "@/components/ui/dialog"
import { Button } from '@/components/ui/button';


function EditPermissions({ open, close }: { open: any, close: () => void }) {
    const [user, setUser] = useState<any>(open);
    const [deleted, setDeleted] = useState(false)
    useEffect(() => setUser(open), [open]);


    return <Dialog open={!!open} onOpenChange={close}>
        <DialogContent className="main-content sm:w-[400px] flex flex-col items-center gap-3">
            <DialogTitle />
            <div className='w-full flex flex-col items-center gap-6 py-5'>
                <p className="text-lg">Edit Permissions</p>

                <form action="" className="w-full flex flex-col gap-4">
                    <div className="w-full flex flex-col gap-1">
                        <p className="text-sm">Set Category</p>
                        <select className="w-full h-10 px-3 border rounded-lg text-sm">
                            <option value="">Set Category</option>
                            <option value="Patient">Patient</option>
                        </select>
                    </div>
                    <div className="w-full flex flex-col gap-1">
                        <p className="text-sm">Set Permissions</p>
                        <select className="w-full h-10 px-3 border rounded-lg text-sm">
                            <option value="">Set Permissions</option>
                            <option value="Patient">All Dashboards</option>
                        </select>
                    </div>
                    <Button onClick={() => { }} className=''>Save Changes</Button>
                </form>
            </div>

        </DialogContent>
    </Dialog>
}

export default EditPermissions