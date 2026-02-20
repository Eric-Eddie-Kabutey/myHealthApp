'use client';

import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogTitle,
  } from "@/components/ui/dialog"
import { Button } from '@/components/ui/button';

function RequestCall({open, close}:{open:any, close:()=>void}) {
    const [complete, setComplete] = useState(false)
    return <>
        <Dialog open={open} onOpenChange={()=>close()}>
            <DialogContent className="main-content sm:w-[400px] flex flex-col items-center gap-3">
            <DialogTitle/>
            <section className="size-16 rounded-full bg-gradient-to-b from-red-600 via-white to-white flex justify-center items-center">
                <div className="size-[97%] mt-1 rounded-full flex items-center justify-center bg-white">
                <svg width="26" height="28" viewBox="0 0 26 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.33399 24.666V16.666C2.33399 10.775 7.10962 5.99935 13.0006 5.99935C18.8917 5.99935 23.6673 10.775 23.6673 16.666V24.666H25.0006V27.3327H1.00066V24.666H2.33399ZM5.00066 16.666H7.66733C7.66733 13.7205 10.0551 11.3327 13.0006 11.3327V8.66602C8.58238 8.66602 5.00066 12.2477 5.00066 16.666ZM11.6673 0.666016H14.334V4.66602H11.6673V0.666016ZM23.3716 4.4095L25.2572 6.29512L22.4288 9.12355L20.5432 7.23792L23.3716 4.4095ZM0.744141 6.29512L2.62975 4.4095L5.45818 7.23792L3.57257 9.12355L0.744141 6.29512Z" fill="#E53E3E"/>
                </svg>
                </div>
            </section>
            <p className="font-[500] text-lg">Emergency Services</p>

            <div className="flex flex-col w-full rounded-xl bg-red-50 gap-3 p-3 text-gray-600 text-sm">
                <div className='flex flex-col'>
                <span>Location detected: 123 Main Street</span>
                <span>Nearest hospital: Memorial Hospital (1.2 miles)</span>
                </div>

                <span>Ambulance ETA:<br/><span className="text-xl font-semibold text-red-500">8 minutes</span></span>
            </div>

            <div className="w-full p-3 rounded-xl bg-gray-100 flex flex-col gap-4">
                <p>Emergency Information</p>
                <p className="text-sm text-gray-700">An ambulance has been dispatched to your location. Please remain calm and stay on the line.</p>
            </div>

            {
                complete ? 
                <>
                    <div className="w-full p-3 rounded-xl bg-gray-100 flex flex-col gap-4">
                        <p>Dispatched Ambulance</p>
                        <div className="w-full flex flex-col gap-1">
                            <span className="w-full flex items-center justify-between gap-2 text-gray-600 text-sm">
                                Ambulance ID: <p>AMB-001</p>
                            </span>
                            <span className="w-full flex items-center justify-between gap-2 text-gray-600 text-sm">
                                Hospital: <p>St. Mary's General Hospital</p>
                            </span>
                            <span className="w-full flex items-center justify-between gap-2 text-gray-600 text-sm">
                                Driver: <p>John Smith</p>
                            </span>
                            <span className="w-full flex items-center justify-between gap-2 text-gray-600 text-sm">
                                paramedic: <p>Sarah Johnson</p>
                            </span>
                            <span className="w-full flex items-center justify-between gap-2 text-gray-600 text-sm">
                                Distance: <p>0.2 km</p>
                            </span>
                        </div>
                    </div>

                    <div className="w-full p-3 rounded-xl bg-[#2b9a3615] flex flex-col gap-4">
                        <p>Arrival Information</p>
                        <span className="text-sm text-[#2B9A37] text-center">ARRIVED <br/> Ambulance is at your location</span>
                    </div>

                    <span className="text-sm text-center w-full">Emergency called: 0:08 ago</span>
                </> : 

                <div className="w-full mt-2 grid grid-cols-2 gap-3">
                    <Button onClick={()=>close()} variant={`outline`} className='w-full'>Cancel</Button>
                    <Button onClick={()=>setComplete(true)} className='w-full'>Call 911</Button>
                </div>
            }

            </DialogContent>
        </Dialog>
    </>
}

export default RequestCall