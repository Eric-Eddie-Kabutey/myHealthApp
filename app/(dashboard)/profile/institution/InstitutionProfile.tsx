'use client'

import useMain from '@/app/hooks/useMain';
import PageWrapper from '@/components/PageWrapper'
import React, { useEffect } from 'react'
import ProfileFooter from '../ProfileFooter';
import BasicProfile from './Includes/BasicProfile';
import LocationMapping from './Includes/LocationMapping';
import ContactCommunication from './Includes/ContactCommunication';
import ServicesOffered from './Includes/ServicesOffered';
import Verification from './Includes/Verification';
import BrandingMedia from './Includes/BrandingMedia';

type TabType =
  | 'Basic Profile'
  | 'Location & Mapping'
  | 'Contact & Communication'
  | 'Services Offered'
  | 'Verification'
  | 'Branding & Media';

const tabs: TabType[] = [
  'Basic Profile',
  'Location & Mapping',
  'Contact & Communication',
  'Services Offered',
  'Verification',
  'Branding & Media'
];


function InstitutionProfile() {
  const { searchParams, router } = useMain();
  const tab = searchParams.get('tab') as TabType || 'Basic Profile';
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

    {
      activeTab === 'Basic Profile' ? <BasicProfile /> :
      activeTab === 'Location & Mapping' ? <LocationMapping /> :
        activeTab === 'Contact & Communication' ? <ContactCommunication /> :
        activeTab === 'Services Offered' ? <ServicesOffered /> :
          activeTab === 'Verification' ? <Verification /> :
          activeTab === 'Branding & Media' ? <BrandingMedia /> : null
    }

    <ProfileFooter />
  </>} />
}

export default InstitutionProfile