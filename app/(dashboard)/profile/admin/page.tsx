'use client';

import useMain from '@/app/hooks/useMain';
import PageWrapper from '@/components/PageWrapper';
import React, { useEffect } from 'react'
import ProfileFooter from '../ProfileFooter';
import PersonalDetails from './Include/PersonalDetails';
import NotificationsAccessControl from './Include/NotificationsAccessControl';
import LanguageAccessibility from './Include/LanguageAccessibility';
import ChangePassword from './Include/ChangePassword';
import ConfigurationSettings from './Include/ConfigurationSettings';
import APIManagement from './Include/APIManagement';

type TabType =
    | 'Personal Details'
    | 'Notifications & Access Control'
    | 'Language & Accessibility'
    | 'Change Password'
    | 'Configuration Settings'
    | 'API Management';

const tabs: TabType[] = [
    'Personal Details',
    'Notifications & Access Control',
    'Language & Accessibility',
    'Change Password',
    'Configuration Settings',
    'API Management'
];


function AdminProfile() {
    const { router, searchParams } = useMain();
    const tab = searchParams.get('tab') as TabType || 'Personal Details';
    const [activeTab, setActiveTab] = React.useState<TabType>(tab);
    useEffect(() => setActiveTab(tab), [tab]);


    return <PageWrapper content={<>
        <section className="w-full border-b text-nowrap overflow-x-auto text-sm">
            <div className="flex">
                {tabs.map((t) => (
                    <button
                        key={t}
                        className={`py-2 px-2.5 border-b-2 transition-colors ${activeTab === t
                            ? 'border-primary'
                            : 'border-transparent text-gray-600'
                            }`}
                        onClick={() => {
                            setActiveTab(t);
                            router.replace(`?tab=${encodeURIComponent(t)}`);
                        }}
                        type="button"
                    >
                        {t}
                    </button>
                ))}
            </div>
        </section>
        
        <section className="w-full flex flex-col items-center">
            {
                activeTab === 'Personal Details' ? <PersonalDetails /> :
                    activeTab === 'Notifications & Access Control' ? <NotificationsAccessControl /> :
                        activeTab === 'Language & Accessibility' ? <LanguageAccessibility /> :
                            activeTab === 'Change Password' ? <ChangePassword /> :
                                activeTab === 'Configuration Settings' ? <ConfigurationSettings /> :
                                    activeTab === 'API Management' ? <APIManagement /> : null
            }
        </section>

        <ProfileFooter />
    </>} />
}

export default AdminProfile