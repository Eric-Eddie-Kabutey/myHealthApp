'use client';

import useMain from '@/app/hooks/useMain';
import { useRoleGuard } from '@/app/hooks/useRoleGuard';
import PageWrapper from '@/components/PageWrapper';
import { Button } from '@/components/ui/button';
import routes from '@/lib/routes';
import { setNewParams } from '@/lib/utils';
import useUserStore from '@/store/UserStore';
import { Search } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import UserProfile from './Includes/UserProfile';
import ConfirmSuspend from './Includes/ConfirmSuspend';
import ConfirmDelete from './Includes/ConfirmDelete';
import UserDirectory from './Includes/Tabs/UserDirectory';
import RoleControlPanel from './Includes/Tabs/RoleControlPanel';
import InviteUsers from './Includes/Tabs/InviteUsers';

const tabs = [
    'User Directory',
    'Role Control Panel',
    'Invite Users',
]

type TabType = 'User Directory'|'Role Control Panel'|'Invite Users'

function AdminUserManagement() {
    useRoleGuard('admin');
    const {searchParams, router} = useMain();
    const tab = searchParams.get('tab') as TabType || 'User Directory';
    const [activeTab, setActiveTab] = React.useState<TabType>(tab);
    const [view, setView] = useState<any>(null)
    const [suspend, setSuspend] = useState<any>(null)
    const [isdelete, setDelete] = useState<any>(null)
    useEffect(()=>setActiveTab(tab), [tab]);


    return (
        <PageWrapper
            content={
                <>
                    <UserProfile open={view} close={()=>setView(null)}/>
                    <ConfirmSuspend open={suspend} close={()=>setSuspend(null)}/>
                    <ConfirmDelete open={isdelete} close={()=>setDelete(null)}/>
                    <section className="w-full border-b flex gap-5 items-end bg-white z-10 sticky top-4.5">
                        {
                            tabs.map((tab, idx)=>(
                                <button key={`tab-${idx}`} onClick={()=>router.replace(routes.admin.userManagement+setNewParams(searchParams, 'tab', tab))} className={`pb-3 px-2 ${tab === activeTab ? 'border-b-2 border-primary':''}`}>{tab}</button>
                            ))
                        }
                    </section>

                    {
                        activeTab === 'User Directory' ? <UserDirectory/> :
                        activeTab === 'Role Control Panel' ? <RoleControlPanel/> :
                        activeTab === 'Invite Users' ? <InviteUsers/> : null
                    }
                </>
            }
        />
    );
}

export default AdminUserManagement;
