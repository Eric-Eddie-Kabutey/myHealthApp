'use client';

import { Button } from '@/components/ui/button';
import routes from '@/lib/routes';
import Link from 'next/link';
import React from 'react'

function DispatcherSignUps() {
    return (
        <div className='main-content flex w-full text-left text-sm overflow-x-auto'>
            <table className="w-full text-left">
                <thead>
                    <tr className='h-10 bg-gray-100'>
                        <td><div className="px-3">Name</div></td>
                        <td><div className="px-3">Email Address</div></td>
                        <td><div className="px-3">Date of Birth</div></td>
                        <td><div className="px-3">Age</div></td>
                        <td><div className="px-3">Date Signed Up</div></td>
                        <td><div className="px-3">Status</div></td>
                        <td><div className="px-3">Action</div></td>
                    </tr>
                </thead>
                <tbody>
                    {
                        [1, 2, 3].map((item, idx, arr) => {
                            return <tr key={'symptons' + idx} className={`${idx !== arr.length - 1 && 'border-b'}`}>
                                <td>
                                    <div className="p-3 gap-2 flex items-center">
                                        <img src="https://randomuser.me/portraits/men/52.jpg" alt="" className="size-10 min-w-10 object-cover rounded-full" />
                                        <p>JOshua Odame</p>
                                    </div>
                                </td>
                                <td><div className="p-3">Gideon Osei Tutu</div></td>
                                <td><div className="p-3">12/05/1995</div></td>
                                <td><div className="p-3">30</div></td>
                                <td><div className="p-3">21st July, 2023</div></td>
                                <td>
                                    <div className="p-3">
                                        <div className="p-2 h-8 flex items-center w-fit text-sm rounded bg-emerald-50 text-emerald-700">Approved</div>
                                    </div>
                                </td>
                                <td><div className="p-3">
                                    <Link href={routes.dispensary.dispatcher+`/${idx}`}>
                                        <Button variant={'outline'} className='border-primary text-primary rounded h-8'>View Details</Button>
                                    </Link>
                                </div></td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default DispatcherSignUps