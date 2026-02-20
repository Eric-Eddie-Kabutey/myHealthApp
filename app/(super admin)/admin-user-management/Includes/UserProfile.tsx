'use client';

import React, { useEffect, useState } from 'react'
import { Dialog, DialogContent, DialogTitle, } from "@/components/ui/dialog"
import { Button } from '@/components/ui/button';


function UserProfile({open, close}:{open:any, close:()=>void}) {
    const [user, setUser] = useState<any>(open);
    useEffect(()=>setUser(open),[open]);
    console.log(open)
    const UserText = (name:any) => {
        const names = name?.trim()?.split(' ');
        return names
            ?.map((n: any) => n[0]?.toUpperCase())
            .join('');
    };

    return <Dialog open={!!open} onOpenChange={close}>
        <DialogContent className="main-content sm:w-[400px] flex flex-col items-center gap-3">
            <DialogTitle />
            <span className="w-full py-3 border-b">User Profile</span>
            <div className="w-full flex flex-col gap-4">
                <span className="flex items-center gap-2">
                    <div className="size-12 rounded-full bg-primary/10 text-primary border border-primary flex items-center justify-center text-lg uppercase">
                        {UserText(user?.name)}
                    </div>
                    <div className="flex flex-col">
                        <p className="">{user?.name}</p>
                        <small className="text-gray-600">{user?.email}</small>
                    </div>
                </span>
                <div className="flex flex-col w-full">
                    <small className="text-gray-700">Role</small>
                    <p>{user?.role}</p>
                </div>
                <div className="flex flex-col w-full">
                    <small className="text-gray-700">Region</small>
                    <p>{user?.region}</p>
                </div>
                <div className="flex flex-col w-full">
                    <small className="text-gray-700">Status</small>
                    <p>{user?.status}</p>
                </div>
                <div className="flex flex-col w-full">
                    <small className="text-gray-700">Date Joined</small>
                    <p>{`2023-01-27`}</p>
                </div>
                <Button>Manage Account</Button>
                <Button variant={'outline'}>Reset Password</Button>
                <Button variant={'outline'}>Suspend Account</Button>
            </div>
        </DialogContent>
    </Dialog>
}

export default UserProfile