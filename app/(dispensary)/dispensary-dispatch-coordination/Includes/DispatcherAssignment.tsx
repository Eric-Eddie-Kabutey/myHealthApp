'use client';

import { Button } from '@/components/ui/button';
import React, { useState } from 'react'
import AssignDispatcherSuccess from './AssignDispatcherSuccess';

const stats = [
    {
        name: 'Active Dispatchers',
        value: '24'
    },
    {
        name: 'Out for Delivery',
        value: '87'
    },
    {
        name: 'Delivered Today',
        value: '156'
    },
    {
        name: 'Success Rate',
        value: '98.5%'
    }
]

function DispatcherAssignment() {
    const [success, setSuccess] = useState(false);

    return <div className="main-content w-full flex flex-col gap-5">
        <section className="w-full overflow-x-auto flex gap-5">
            {
                stats.map((stat, idx)=>{
                    return <div key={`stat-${idx}`} className="rounded-xl border p-4 flex flex-col justify-center items-center gap-1 h-[100px] min-w-[200px]">
                        <b className="text-2xl">{stat.value}</b>
                        <p>{stat.name}</p>
                    </div>
                })
            }
        </section>

        <section className="w-full min-[1150px]:w-[850px] p-4 flex flex-col gap-4 border rounded-lg">
            <p>Dispatcher Assignment</p>

            <div className="w-full grid sm:grid-cols-2 gap-5">
                <div className="w-full flex flex-col gap-1">
                    <p className="text-sm">Select Dispatcher</p>
                    <select name="" id="" className="border rounded px-3 text-sm h-10">
                        <option value="">Select dispatcher</option>
                    </select>
                </div>
                <div className="w-full flex flex-col gap-1">
                    <p className="text-sm">Prescription ID</p>
                    <input placeholder='Enter ID' className="border rounded px-3 text-sm h-10"/>
                </div>
                <div className="w-full flex flex-col gap-1">
                    <p className="text-sm">Patient Name</p>
                    <input placeholder='Enter Patient Name' className="border rounded px-3 text-sm h-10"/>
                </div>
                <div className="w-full flex flex-col gap-1">
                    <p className="text-sm">Delivery Address</p>
                    <input placeholder='Enter Delivery Address' className="border rounded px-3 text-sm h-10"/>
                </div>
                <div className="w-full flex flex-col gap-1">
                    <p className="text-sm">Recipient Contact</p>
                    <input placeholder='Enter Phone Number' className="border rounded px-3 text-sm h-10"/>
                </div>
                <div className="w-full flex flex-col gap-1">
                    <p className="text-sm">Package Summary</p>
                    <input placeholder='Eg 2x medication bottles' className="border rounded px-3 text-sm h-10"/>
                </div>
                <div className='sm:flex hidden'/>
                <Button onClick={()=>setSuccess(true)} className='rounded h-10'>Assign Dispatcher</Button>
            </div>
        </section>

        <AssignDispatcherSuccess open={success} close={()=>setSuccess(false)}/>
    </div>
}

export default DispatcherAssignment