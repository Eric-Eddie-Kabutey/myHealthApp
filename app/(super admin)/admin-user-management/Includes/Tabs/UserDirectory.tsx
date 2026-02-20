'use client';

import useMain from '@/app/hooks/useMain';
import { Button } from '@/components/ui/button';
import routes from '@/lib/routes';
import { setNewParams } from '@/lib/utils';
import { Search } from 'lucide-react';
import React, { useState } from 'react'

function UserDirectory() {
    const { searchParams, router } = useMain();
    const [view, setView] = useState<any>(null)
    const [suspend, setSuspend] = useState<any>(null)
    const [isdelete, setDelete] = useState<any>(null)
    const users = [
        { name: 'Dr. Sarah Johnson', email: 'sarah.johnson@hospital.com', role: 'Doctor', region: 'East', status: 'Active', lastLogin: '2024-06-05', actions: ['Manage', 'View', 'Suspend', 'Delete'] },
        { name: 'Nurse Emma Wilson', email: 'emma.wilson@hospital.com', role: 'Nurse', region: 'South', status: 'Active', lastLogin: '2024-06-05', actions: ['Manage', 'View', 'Suspend', 'Delete'] },
        { name: 'John Patient', email: 'john.patient@email.com', role: 'Patient', region: 'East', status: 'Suspended', lastLogin: '2024-06-05', actions: ['Manage', 'View', 'Activate', 'Delete'] },
        { name: 'Finance Manager', email: 'finance@hospital.com', role: 'Finance', region: 'Central', status: 'Active', lastLogin: '2024-06-05', actions: ['Manage', 'View', 'Suspend', 'Delete'] },
        { name: 'Support Agent', email: 'support@hospital.com', role: 'Support', region: 'West', status: 'Active', lastLogin: '2024-06-05', actions: ['Manage', 'View', 'Suspend', 'Delete'] },
    ];

    const statusClasses: any = {
        "Active": 'bg-green-100 text-green-700',
        "Suspended": 'bg-red-100 text-red-700',
    };

    const handleActions = (action: any, user: any) => {
        if (action === 'Manage' && user.role === 'Doctor') {
            return router.push(routes.doctor.dashboard + setNewParams(searchParams, 'manage', 'manage-doctor') + `&&doctor=${JSON.stringify(user)}`);
        }
        if (action === 'View') return setView(user)
        if (action === 'Suspend') return setSuspend(user)
        if (action === 'Delete') return setDelete(user)
    }
    return <section className='w-full flex flex-col items-center main-content gap-3'>
        {/* Search and Filters */}
        <div className="w-full flex flex-wrap justify-between items-center gap-2">
            <aside className="rounded-lg w-[300px] px-2 h-9 border flex items-center gap-2">
                <Search className='size-5' />
                <input type="text" placeholder='Search...' className="border-none outline-none text-sm w-full h-full" />
            </aside>
            <div className="flex gap-2">
                <select className="border rounded-md px-2 py-2">
                    <option>All Roles</option>
                </select>
                <select className="border rounded-md px-2 py-2">
                    <option>All Regions</option>
                </select>
                <select className="border rounded-md px-2 py-2">
                    <option>All Status</option>
                </select>
            </div>
        </div>

        {/* Table */}
        <section className="w-full overflow-x-auto">
            <table className="w-full text-sm">
                <thead>
                    <tr className="h-10 bg-gray-100 text-left">
                        <td className="px-3"><div className="px-3">User</div></td>
                        <td className="px-3"><div className="px-3">Role</div></td>
                        <td className="px-3"><div className="px-3">Region</div></td>
                        <td className="px-3"><div className="px-3">Status</div></td>
                        <td className="px-3"><div className="px-3">Last Login</div></td>
                        <td className="px-3"><div className="px-3">Action</div></td>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, idx) => (
                        <tr key={idx} className="border-t hover:bg-gray-50">
                            <td >
                                <div className="flex flex-col p-3">
                                    <span className="font-medium">{user.name}</span>
                                    <span className="text-gray-500 text-xs">{user.email}</span>
                                </div>
                            </td>
                            <td ><div className="p-3">{user.role}</div></td>
                            <td ><div className="p-3">{user.region}</div></td>
                            <td ><div className="p-3">
                                <div className={`px-4 w-fit h-7 flex items-center  rounded-lg text-xs font-medium ${statusClasses[user.status]}`} >
                                    {user.status}
                                </div>
                            </div>
                            </td>
                            <td ><div className="p-3">
                                {user.lastLogin}
                            </div></td>
                            <td className="px-3 py-2 flex gap-2 flex-wrap">
                                <div className="p-3 flex gap-3">
                                    {user.actions.map((action, i) => (
                                        <Button variant={'outline'}
                                            onClick={() => handleActions(action, user)}
                                            key={i}
                                            className={`px-5 h-8 rounded-md text-xs border 
                                                            ${action === 'Delete' ? 'text-red-600 border-red-600' :
                                                    action === 'Suspend' ? 'text-yellow-600 border-yellow-600' :
                                                        action === 'Activate' ? 'text-emerald-600 border-emerald-600' :
                                                            action.includes('Manage') ? 'text-primary border-primary' :
                                                                ''
                                                }`}
                                        >
                                            {action}
                                        </Button>
                                    ))}
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    </section>
}

export default UserDirectory