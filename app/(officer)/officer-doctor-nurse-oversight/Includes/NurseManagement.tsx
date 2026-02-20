'use client';

import { Button } from '@/components/ui/button';
import React, { useState } from 'react'
import ViewDoctor from './ViewDoctor';
import EditDoctor from './EditDoctor';
import SuspendDoctor from './SuspendDoctor';
import ActivateDoctor from './ActivateDoctor';
import ViewNurse from './ViewNurse';

function NurseManagement() {
    const [view, setView] = useState(false)
    const [edit, setEdit] = useState(false)
    const [suspend, setSuspend] = useState(false)
    const [activate, setActivate] = useState(false)

  return <section className="main-content w-full overflow-x-auto">
    <table className="w-full text-left text-sm">
        <thead>
            <tr className='h-10 bg-gray-100'>
                <td><div className="px-3">Nurse</div></td>
                <td><div className="px-3">Doctor</div></td>
                <td><div className="px-3">Number of Patient</div></td>
                <td><div className="px-3">Reports</div></td>
                <td><div className="px-3">Status</div></td>
                <td><div className="px-3">Action</div></td>
            </tr>
        </thead>
        <tbody>
            {
                [1,2,3,4,5,6].map((doc, idx, arr)=>{
                    return <tr key={'doc'+idx} className={`${idx !== arr.length-1 && 'border-b'}`}>
                        <td><div className="p-3">Nurse Lisa Thompson</div></td>
                        <td><div className="p-3">Dr. Sarah Johnson</div></td>
                        <td><div className="p-3">45</div></td>
                        <td><div className="p-3">12</div></td>
                        <td><div className="p-3"><div className="px-4 h-8 rounded bg-emerald-100 flex items-center w-fit text-emerald-600">Active</div></div></td>
                        <td><div className="p-3 flex gap-3">
                            <Button onClick={()=>setView(true)} variant={'outline'} className='h-8 text-primary border-primary rounded'>View</Button>
                            <Button onClick={()=>setEdit(true)} variant={'outline'} className='h-8 rounded'>Edit</Button>
                            {
                                idx%3===0 ? <Button onClick={()=>setSuspend(true)} variant={'outline'} className='h-8 text-red-600 border-red-600 rounded'>Suspend</Button> : <Button onClick={()=>setActivate(true)} variant={'outline'} className='h-8 text-emerald-500 border-emerald-500 rounded'>Activate</Button>
                            }
                        </div></td>
                    </tr>
                })
            }
        </tbody>
    </table>

    <ViewNurse open={view} close={()=>setView(false)}/>
    <EditDoctor open={edit} close={()=>setEdit(false)}/>
    <SuspendDoctor open={suspend} close={()=>setSuspend(false)}/>
    <ActivateDoctor open={activate} close={()=>setActivate(false)}/>
  </section>
}

export default NurseManagement