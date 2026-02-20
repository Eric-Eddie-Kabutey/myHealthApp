'use client'

import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import React, { useState } from 'react'
import NewRole from '../NewRole';
import EditPermissions from '../EditPermissions';

const roles = [
    {
        name: 'Doctor',
        roleType: 'System Role',
        users: 45,
        description: 'Medical professionals with patient care access',
        permissions: [
            'patient records',
            'prescriptions',
            'appointments',
            'medical reports',
        ],
    },
    {
        name: 'Nurse',
        roleType: 'System Role',
        users: 120,
        description: 'Nursing staff with limited patient access',
        permissions: [
            'patient records',
            'basic care',
            'appointments',
        ],
    },
    {
        name: 'Patient',
        roleType: 'System Role',
        users: 2500,
        description: 'Patients with access to their own records',
        permissions: [
            'own records',
            'appointments',
            'billing',
        ],
    },
    {
        name: 'Finance',
        roleType: 'System Role',
        users: 12,
        description: 'Financial department staff',
        permissions: [
            'billing',
            'payment',
            'financial reports',
        ],
    },
    {
        name: 'Institution',
        roleType: 'System Role',
        users: 12,
        description: 'Institutions department staff',
        permissions: [
            'billing',
            'payment',
            'financial reports',
        ],
    },
    {
        name: 'Operations',
        roleType: 'System Role',
        users: 12,
        description: 'Operations department staff',
        permissions: [
            'billing',
            'payment',
            'financial reports',
        ],
    },
    {
        name: 'Chief Medical Officer',
        roleType: 'System Role',
        users: 12,
        description: 'CMO department staff',
        permissions: [
            'billing',
            'payment',
            'financial reports',
        ],
    },
    {
        name: 'Pharmacist',
        roleType: 'System Role',
        users: 12,
        description: 'Pharmacist department staff',
        permissions: [
            'billing',
            'payment',
            'financial reports',
        ],
    },
    {
        name: 'Customer Support',
        roleType: 'System Role',
        users: 12,
        description: 'Customer support department staff',
        permissions: [
            'billing',
            'payment',
            'financial reports',
        ],
    },
    {
        name: 'Medical Dispensary',
        roleType: 'System Role',
        users: 12,
        description: 'Medical Dispensary department staff',
        permissions: [
            'billing',
            'payment',
            'financial reports',
        ],
    },
];


function RoleControlPanel() {
    const [newRole, setNewRole] = useState(false)
    const [editPermission, setEditPermission] = useState<any>(false);

    return <section className='w-full flex flex-col items-center main-content gap-3'>
        <NewRole open={newRole} close={()=>setNewRole(false)}/>
        <EditPermissions open={editPermission} close={()=>setEditPermission(false)}/>


        <div className="w-full flex items-center justify-between">
            <p>Role Management</p>
            <Button onClick={()=>setNewRole(true)} className='gap-3'>
                <Plus className='size-4'/> Create New Role
            </Button>
        </div>
        {
            roles.map((role, idx)=>{
                return <div key={`role-${idx}`} className="w-full border rounded-lg p-4 flex flex-col gap-2">
                    <span className="flex items-start justify-between">
                        <div className="flex flex-col gap-1">
                            <span className="">{role.name} <span className="ml-1 px-2 py-1 bg-gray-200 rounded text-xs">{role.roleType}</span></span>
                            <small className="text-gray-500">{role.description}</small>
                        </div>
                        <div className="flex flex-col items-end">
                            <p className="text-xl">{role.users}</p>
                            <p className="text-sm">Users</p>
                        </div>
                    </span>
                    <span className="flex items-start justify-between">
                        <div className="flex items-center gap-2">
                            <p className="text-sm">Permissions:</p>
                            {
                                role.permissions.map((perm, idx)=>{
                                    return <span key={`perm-${idx}`} className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">{perm}</span>
                                })
                            }
                        </div>
                        <Button onClick={()=>setEditPermission(role)} variant={'outline'} className='border-primary text-primary'>Edit Permissions</Button>
                    </span>
                </div>
            })
        }
    </section>

}

export default RoleControlPanel