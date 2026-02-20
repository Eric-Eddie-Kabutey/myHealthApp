'use client';

import { Button } from '@/components/ui/button';
import React, { useState } from 'react'
import RejectApp from './RejectApp';
import ApproveApp from './Approve';

function PendingApplications() {
  const [reject, setReject] = useState<any>(null);
  const [approve, setApprove] = useState<any>(false)
  return <section className="main-content w-full flex flex-col gap-5">
    {
      [1,2,3].map((pend, idx)=>{
        return <div key={`pend-${idx}`} className="border rounded-xl p-3 flex justify-between items-center shadow-sm">
            <aside className="flex flex-col gap-3">
              <span className="flex items-center gap-4">Dr. Joshua Odame <span className="px-3 py-1 rounded bg-indigo-50 text-indigo-600">Doctor</span></span>
              <span className="flex gap-[4rem]">
                <div className="flex flex-col">
                  <small className="text-gray-600">Specialization:</small>
                  <p className="text-sm">Orthopedics</p>
                </div>
                <div className="flex flex-col">
                  <small className="text-gray-600">Application Date:</small>
                  <p className="text-sm">2025-05-28</p>
                </div>
                <div className="flex flex-col">
                  <small className="text-gray-600">Credentials:</small>
                  <p className="text-sm">MD, Board Certified</p>
                </div>
              </span>
            </aside>
            <aside className="flex gap-3">
              <Button onClick={()=>setReject(true)} variant={'outline'} className='border-red-500 text-red-500 h-9 rounded px-8'>Reject</Button>
              <Button onClick={()=>setApprove(true)} variant={'outline'} className='border-primary text-primary h-9 rounded px-8'>Approve</Button>
            </aside>
        </div>
      })
    }

    <RejectApp open={!!reject} close={()=>setReject(null)}/>
    <ApproveApp open={!!approve} close={()=>setApprove(null)}/>
  </section>
}

export default PendingApplications