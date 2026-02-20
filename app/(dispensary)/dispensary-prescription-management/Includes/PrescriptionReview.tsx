'use client';

import { Button } from '@/components/ui/button';
import React, { useState } from 'react'
import AddNotes from './AddNotes';

function PrescriptionReview() {
    const [addNotes, setAddNotes] = useState(false)
    return <div className="main-content flex flex-col gap-5">
        {
            [1, 2, 3].map((pres, idx) => {
                return <div key={`pres-${idx}`} className="w-full border rounded-lg p-4 flex flex-col gap-2 relative overflow-hidden">
                    <div className={`absolute left-0 top-0 h-full w-1.5 ${idx % 2 === 0 ? 'bg-red-700' : 'bg-indigo-700'}`} />
                    <aside className="w-full flex justify-between border-b py-2">
                        <div className="flex flex-col gap-1">
                            <span className="flex items-center gap-2">
                                <div className="px-3 py-1 rounded bg-red-50 text-red-700 text-sm">Urgent</div>
                                <small className="text-gray-600">#RX-2023-0567</small>
                            </span>
                            <p>Sarah Johnson</p>
                            <small className="text-gray-800">32 years • Female • Allergies: Penicillin</small>
                        </div>
                        <div className="flex flex-col items-end gap-1">
                            <small>Received: Today, 09:24 AM</small>
                            <small>Dr. Michael Chen</small>
                        </div>
                    </aside>

                    <aside className="w-full flex flex-col gap-2">
                        <p>Medications:</p>
                        <span className="flex gap-5">
                            <div className="rounded-lg bg-gray-100 flex flex-col gap-1 p-3">
                                <p>Amoxicillin 500mg</p>
                                <small className="text-gray-600">1 tablet every 8 hours for 7 days</small>
                            </div>
                            <div className="rounded-lg bg-gray-100 flex flex-col gap-1 p-3">
                                <p>Amoxicillin 500mg</p>
                                <small className="text-gray-600">1 tablet every 8 hours for 7 days</small>
                            </div>
                        </span>
                        <span className="p-4 rounded flex flex-col gap-1 bg-[#34765A1A] text-emerald-700">
                            <b>Doctor's Notes:</b>
                            <p>Patient has severe sinus infection with high fever. Needs immediate treatment. Watch for allergic reactions.</p>
                        </span>
                        <span className="flex gap-5">
                            <Button className='rounded px-5'>Approve</Button>
                            <Button variant={'outline'} className='rounded px-5 border-red-600 text-red-600'>Reject</Button>
                            <Button variant={'outline'} className='rounded px-5'>Flag</Button>
                            <Button onClick={()=>setAddNotes(true)} variant={'outline'} className='rounded px-5 border-primary text-primary'>Add Notes</Button>
                        </span>
                    </aside>
                </div>
            })
        }

        <AddNotes open={addNotes} close={()=>setAddNotes(false)}/>
    </div>
}

export default PrescriptionReview