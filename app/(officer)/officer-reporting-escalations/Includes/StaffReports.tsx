'use client';

import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import React from 'react'

function StaffReports() {
    return <section className="w-full overflow-x-auto text-sm">
        <table className="w-full text-left">
            <thead>
                <tr className='h-10 bg-gray-100'>
                    <td><div className="px-3">Patient</div></td>
                    <td><div className="px-3">Condition</div></td>
                    <td><div className="px-3">Route</div></td>
                    <td><div className="px-3">Flight</div></td>
                    <td><div className="px-3">Status</div></td>
                    <td><div className="px-3">Approved By</div></td>
                </tr>
            </thead>
            <tbody>
                {
                    [1, 2, 3].map((item, idx, arr) => {
                        return <tr key={'staff report' + idx} className={`${idx !== arr.length - 1 && 'border-b'}`}>
                            <td>
                                <div className="p-3">
                                    Doctor Consultation Performance
                                </div>
                            </td>
                            <td>
                                <div className="p-3">
                                    North
                                </div>
                            </td>
                            <td><div className="p-3">2025-05-30</div></td>
                            <td>
                                <div className="p-3">
                                    <div className="p-2 h-8 flex items-center w-fit text-sm rounded bg-emerald-50 text-emerald-700">Ready</div>
                                </div>
                            </td>
                            <td>
                                <div className="p-3 flex gap-3">
                                    <Button className='h-8 rounded gap-2 bg-red-600'><Download className='size-4' /> PDF</Button>
                                    <Button className='h-8 rounded gap-2'><Download className='size-4' /> Excel</Button>
                                </div>
                            </td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </section>
}

export default StaffReports