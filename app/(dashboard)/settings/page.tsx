'use client';

import PageWrapper from '@/components/PageWrapper';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useMemo, useState } from 'react'
import PersonalDetails from './Includes/PersonalDetails';
import EmergencyContacts from './Includes/EmergencyContacts';
import Notification from './Includes/Notification';
import LanguageAccessibility from './Includes/LanguageAccessibility';
import useUserStore from '@/store/UserStore';
import { doctorTabs, patientTabs } from './Includes/SettingsTabs';
import DoctorsNotifications from './Includes/DoctorsNotifications';
import DoctorsLanguageAccessibility from './Includes/DoctorsLanguageAccessibility';

type TabType = 'Personal Details' | 'Emergency Contacts' | 'Notification' | 'Language Accessibility';
const tabs: TabType[] = [
  'Personal Details',
  'Emergency Contacts',
  'Notification',
  'Language Accessibility'
];


function Settings() {
  const {user} = useUserStore();
  const router = useRouter();
  const searchParam = useSearchParams();
  const tab = (searchParam.get('tab') as TabType) || 'Personal Details';
  const [activeTab, setActiveTab] = useState<TabType>(tab);
  const [role, setRole] = useState('')

  useEffect(() => {
    if(user?.role) setRole(user.role)
    setActiveTab(tab);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab]);

  const displayTabs = useMemo(()=>{
    switch(role){
      case 'patient': return patientTabs;
      case 'doctor': return doctorTabs;
      default: return patientTabs;
    }
  },[role])

  return <PageWrapper content={<>
    <section className="w-full flex border-b sticky top-0 bg-white">
      {displayTabs.map((t) => (
        <button
          key={t}
          className={`px-4 py-2 -mb-px border-b-2 transition-colors ${
            activeTab === t
              ? 'border-primary'
              : 'border-transparent text-gray-500'
          }`}
          onClick={() => {
            router.replace(`?tab=${encodeURIComponent(t)}`);
            setActiveTab(t);
          }}
        >
          {t === 'Language Accessibility' ? 'Language & Accessibility' : t}
        </button>
      ))}
    </section>

    <section className="w-full flex flex-col items-center">
      {
        activeTab === 'Personal Details' ? <PersonalDetails /> :
        activeTab === 'Emergency Contacts' ? <EmergencyContacts /> :
        activeTab === 'Notification' ? (
          role === 'doctor' ? <DoctorsNotifications/> : <Notification />
        ) :
        activeTab === 'Language Accessibility' ? (
          role === 'doctor' ? <DoctorsLanguageAccessibility/> : <LanguageAccessibility />
        ) : null
      }
    </section>
  </>} />
}

export default Settings