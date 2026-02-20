'use client';

import PageWrapper from '@/components/PageWrapper';
import { Button } from '@/components/ui/button';
import React, { useState } from 'react'
import EditPrescriptionLog from './EditPrescriptionLog';
import FlagPrescriptionLog from './FlagPrescriptionLog';

function FlagInappropriatePrescriptions() {
    const [edit, setEdit] = useState(false)
    const [resolve, setResolve] = useState(false)
    return <div className="main-content w-full overflow-x-auto">
        <table className="w-full text-left text-sm">
            <thead>
                <tr className="h-10 bg-gray-100">
                    <td><div className="px-3">Prescription ID</div></td>
                    <td><div className="px-3">Patient</div></td>
                    <td><div className="px-3">Doctor</div></td>
                    <td><div className="px-3">Medicine</div></td>
                    <td><div className="px-3">Flag Reason</div></td>
                    <td><div className="px-3">Status</div></td>
                    <td><div className="px-3">Action</div></td>
                </tr>
            </thead>
            <tbody>
                {
                    [1, 2, 3, 4, 5].map((log, idx, arr) => {
                        return <tr key={`log-${idx}`} className={`${idx !== arr.length - 1 && 'border-b'}`}>
                            <td><div className="p-3">RX001</div></td>
                            <td><div className="p-3">Sarah Johnson</div></td>
                            <td><div className="p-3">Dr. Michael Chen</div></td>
                            <td><div className="p-3 flex flex-col">
                                <p>Metformin 500mg</p>
                                <small className="text-gray-500">2 tablets twice daily</small>
                            </div></td>
                            <td><div className="p-3">High dosage opioid prescription</div></td>
                            <td><div className="p-3">
                                <div className="h-8 px-5 w-fit rounded flex items-center bg-emerald-50 text-emerald-800">Active</div>
                            </div></td>
                            <td><div className="p-3 flex gap-2">
                                <Button onClick={() => setEdit(true)} className='rounded h-8 bg-red-50 text-red-600 border-none '>Flagged</Button>
                                <Button onClick={() => setResolve(true)} className='rounded h-8 '>Resolve</Button>
                            </div></td>
                        </tr>
                    })
                }
            </tbody>
        </table>

        {/* <EditPrescriptionLog open={edit} close={() => setEdit(false)} /> */}
        {/* <FlagPrescriptionLog open={flag} close={() => setResolve(false)} /> */}
    </div>
}

export default FlagInappropriatePrescriptions
