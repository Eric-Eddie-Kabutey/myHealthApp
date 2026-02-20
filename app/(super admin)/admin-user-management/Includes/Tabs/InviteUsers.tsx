'use client';

import { Button } from '@/components/ui/button';
import { FolderPlus } from 'lucide-react';
import React from 'react'

const users = [
    {
        email: "newdoc@hospital.com",
        role: "Doctor",
        region: "North",
        status: "Pending",
        dateSent: "2024-06-05",
    },
    {
        email: "newdoc@hospital.com",
        role: "Doctor",
        region: "North",
        status: "Active",
        dateSent: "2024-06-05",
    },
    {
        email: "nurse1@hospital.com",
        role: "Nurse",
        region: "South",
        status: "Pending",
        dateSent: "2024-06-06",
    },
    {
        email: "patient1@hospital.com",
        role: "Patient",
        region: "East",
        status: "Active",
        dateSent: "2024-06-04"
    }
]

function InviteUsers() {
    return <section className='w-full flex flex-col items-center main-content gap-5'>
        <section className="w-full grid grid-cols-2 gap-5">
            <div className="border p-4 flex flex-col w-full gap-4 rounded-lg">
                <p>Manuel Add User</p>
                <div className="w-full flex flex-col gap-1">
                    <p className="text-sm">Email Address</p>
                    <input type="text" placeholder='user@example.com' className="w-full h-10 px-3 border rounded" />
                </div>
                <div className="w-full flex flex-col gap-1">
                    <p className="text-sm">Email Address</p>
                    <input type="text" placeholder='user@example.com' className="w-full h-10 px-3 border rounded" />
                </div>
                <div className="w-full flex flex-col gap-1">
                    <p className="text-sm">Email Address</p>
                    <input type="text" placeholder='user@example.com' className="w-full h-10 px-3 border rounded" />
                </div>
                <Button className='w-full'>Send Invitation</Button>
            </div>
            <div className="w-full border rounded-lg p-4 flex flex-col gap-5">
                <p>Bulk Upload Users</p>
                <div className="w-full border border-dashed border-gray-400 rounded-lg p-3 flex flex-col items-center gap-2 py-4">
                    <FolderPlus/>
                    <p className="text-gray-500 text-sm">Upload CSV file with user data</p>
                    <span className="text-gray-500 text-sm">Drag and drop file here or <span className="text-primary underline">Choose file</span></span>
                    <small className="text-gray-500">Format: Email, Role, Region</small>
                </div>
                <Button variant={'outline'}>Download CSV Template</Button>
            </div>
        </section>
        <section className="w-full flex flex-col gap-3">
            <p>Recent Invitations</p>
            <div className="w-full flex overflow-x-auto">
                <table className="w-full text-sm">
                    <thead>
                        <tr className="h-10 bg-gray-100">
                            <td><div className="px-3">Email Address</div></td>
                            <td><div className="px-3">Role</div></td>
                            <td><div className="px-3">Region</div></td>
                            <td><div className="px-3">Status</div></td>
                            <td><div className="px-3">Date Sent</div></td>
                            <td><div className="px-3">Action</div></td>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, idx) => (
                            <tr key={idx} className='border-t'>
                                <td><div className="p-3">{user.email}</div></td>
                                <td><div className="p-3">{user.role}</div></td>
                                <td><div className="p-3">{user.region}</div></td>
                                <td>
                                    <div className="p-3">
                                        <div
                                            className={`px-3 py-1 w-fit rounded ${user.status === "Active"
                                                    ? "text-green-800 bg-green-100"
                                                    : "text-orange-800 bg-orange-100"
                                                }`}
                                        >
                                            {user.status}
                                        </div>
                                    </div>
                                </td>
                                <td><div className="p-3">{user.dateSent}</div></td>
                                <td>
                                    <div className="p-3">
                                        <Button variant="outline" className="h-8 border-primary text-primary">
                                            Resend
                                        </Button>
                                    </div>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </section>
    </section>

}

export default InviteUsers