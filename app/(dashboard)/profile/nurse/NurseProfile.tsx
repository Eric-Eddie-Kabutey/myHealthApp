'use client';

import useMain from '@/app/hooks/useMain';
import PageWrapper from '@/components/PageWrapper';
import React, { useEffect } from 'react'
import ProfileFooter from '../ProfileFooter';
import IdentityContact from '../patient/Include/IdentityContact';
import EligibilityRegulatoryConsent from '../patient/Include/EligibilityRegulatoryConsent';
import ClinicalExperience from './Includes/ClinicalExperience';
import VirtualCareReadiness from './Includes/VirtualCareReadiness';
import PersonalIdentity from './Includes/PersonalIdentity';
import LicensureCredentials from './Includes/LicensureCredentials';
import OptionalAdditions from './Includes/OptionalAdditions';
import ComplianceLegal from './Includes/ComplianceLegal';

type TabType =
  | 'Personal Identity'
  | 'Licensure & Credentials'
  | 'Clinical Experience'
  | 'Virtual Care Readiness'
  | 'Compliance & Legal'
  | 'Optional Additions';

const tabs: TabType[] = [
  'Personal Identity',
  'Licensure & Credentials',
  'Clinical Experience',
  'Virtual Care Readiness',
  'Compliance & Legal',
  'Optional Additions'
];

function NurseProfile() {
  const { searchParams, router } = useMain();
  const tab = searchParams.get('tab') as TabType || 'Personal Identity';
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
        activeTab === 'Personal Identity' ? <PersonalIdentity /> :
            activeTab === 'Licensure & Credentials' ? <LicensureCredentials /> :
                activeTab === 'Clinical Experience' ? <ClinicalExperience /> :
                activeTab === 'Virtual Care Readiness' ? <VirtualCareReadiness /> :
                    activeTab === 'Compliance & Legal' ? <ComplianceLegal /> :
                        activeTab === 'Optional Additions' ? <OptionalAdditions /> : null
    }

    <ProfileFooter />
  </>}/>
}

export default NurseProfile