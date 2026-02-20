'use client';

import React from 'react';
import {
    Dialog,
    DialogContent,
    DialogTitle,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button';

function ReviewRequest({open, close}:{open:boolean, close:()=>void}) {
    return <Dialog open={open} onOpenChange={() => close()}>
        <DialogContent className="main-content w-full sm:min-w-[80%] xl:min-w-[1200px] flex flex-col items-center gap-3">
            <DialogTitle />
            <p>Review Emergency Flight Request</p>
            <section className="w-full flex flex-col gap-2 py-2 border-b">
                <p>Patient Information</p>
                <div className="w-full flex gap-[4rem] text-sm">
                    <aside className="flex flex-col">
                        <small className="text-gray-600">First Name</small>
                        <p>Josh</p>
                    </aside>
                    <aside className="flex flex-col">
                        <small className="text-gray-600">Last Name</small>
                        <p>Odame</p>
                    </aside>
                    <aside className="flex flex-col">
                        <small className="text-gray-600">Passport ID</small>
                        <p>1234567890</p>
                    </aside>
                    <aside className="flex flex-col">
                        <small className="text-gray-600">Age</small>
                        <p>26</p>
                    </aside>
                    <aside className="flex flex-col">
                        <p className="">Health Condition Description</p>
                        <p>Lorem ahdbhbhdb djososo dfjsjsknndms skakemiur  djdjdjjdjs</p>
                    </aside>
                </div>
            </section>
            <section className="w-full flex flex-col gap-2 py-2 border-b">
                <p>Travel Information</p>
                <div className="w-full flex gap-[4rem] text-sm">
                    <aside className="flex flex-col">
                        <small className="text-gray-600">Current Location</small>
                        <p>Accra, Ghana</p>
                    </aside>
                    <aside className="flex flex-col">
                        <small className="text-gray-600">Preferred Departure Airport</small>
                        <p>Kotoka International Airport</p>
                    </aside>
                    <aside className="flex flex-col">
                        <small className="text-gray-600">Destination Country</small>
                        <p>Gambia</p>
                    </aside>
                    <aside className="flex flex-col">
                        <small className="text-gray-600">Preferred Hospital</small>
                        <p>Edward Francis Small Teaching Hospital (EFSTH)</p>
                    </aside>
                    <aside className="flex flex-col">
                        <p className="">Preferred Hospital Location</p>
                        <p>Banjul (Capital City)</p>
                    </aside>
                </div>
            </section>
            <section className="w-full flex flex-col gap-2 py-2 border-b">
                <p>Medical Urgency Level</p>
                <div className="w-full flex gap-[4rem] text-sm">
                    <aside className="flex flex-col">
                        <small className="text-gray-600">Medical Urgency Level</small>
                        <p>Urgency</p>
                    </aside>
                </div>
            </section>
            <section className="w-full flex flex-col gap-2 py-2 border-b">
                <p>Medical Support Required</p>
                <div className="w-full flex gap-[4rem] text-sm">
                    <aside className="flex flex-col">
                        <small className="text-gray-600">Medical Support Required</small>
                        <p>Ventilator</p>
                    </aside>
                    <aside className="flex flex-col">
                        <small className="text-gray-600">Medical Support Required</small>
                        <p>Stretcher</p>
                    </aside>
                    <aside className="flex flex-col">
                        <small className="text-gray-600">Medical Support Required</small>
                        <p>Doctor Onboard</p>
                    </aside>
                </div>
            </section>
            <section className="w-full flex flex-col gap-2 py-2 border-b">
                <p>Travel Companion & Insurance</p>
                <div className="w-full flex gap-[4rem] text-sm">
                    <aside className="flex flex-col">
                        <small className="text-gray-600">Companion Name</small>
                        <p>Vent John</p>
                    </aside>
                    <aside className="flex flex-col">
                        <small className="text-gray-600">Relationship</small>
                        <p>Father</p>
                    </aside>
                    <aside className="flex flex-col">
                        <small className="text-gray-600">Health Insurance Provider</small>
                        <p>HealthPlus</p>
                    </aside>
                    <aside className="flex flex-col">
                        <small className="text-gray-600">Policy Number</small>
                        <p>1235353663</p>
                    </aside>
                </div>
            </section>
            <section className="w-full py-6 flex justify-end gap-4">
                <Button variant={'outline'} className='px-8 rounded border-red-600 text-red-600'>Reject</Button>
                <Button className='px-8 rounded'>Approve</Button>
            </section>
        </DialogContent>
    </Dialog>
}

export default ReviewRequest