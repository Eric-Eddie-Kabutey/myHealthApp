'use client';

import useMain from '@/app/hooks/useMain';
import PageWrapper from '@/components/PageWrapper';
import React, { useEffect } from 'react'
import ProfileFooter from '../ProfileFooter';
import IdentityContact from '../patient/Include/IdentityContact';
import EligibilityRegulatoryConsent from '../patient/Include/EligibilityRegulatoryConsent';
import ProfileInformation from './Includes/ProfileInformation';
import ProfessionalLicensure from './Includes/ProfessionalLicensure';
import ComplianceSecurity from './Includes/ComplianceSecurity';
import TelemedicineReadiness from './Includes/TelemedicineReadiness';
import WorkingHours from './Includes/WorkingHours';
import ProfileEnhancement from './Includes/ProfileEnhancement';
import ClinicalExperience from './Includes/ClinicalExperience';
// import ClinicalExperience from './Includes/ClinicalExperience';
// import VirtualCareReadiness from './Includes/VirtualCareReadiness';
// import PersonalIdentity from './Includes/PersonalIdentity';
// import LicensureCredentials from './Includes/LicensureCredentials';
// import OptionalAdditions from './Includes/OptionalAdditions';
// import ComplianceLegal from './Includes/ComplianceLegal';

type TabType =
  | 'Profile Information'
  | 'Professional Licensure'
  | 'Clinical Experience'
  | 'Telemedicine Readiness'
  | 'Compliance & Security'
  | 'Profile Enhancement'
  | 'Working Hours';

const tabs: TabType[] = [
  'Profile Information',
  'Professional Licensure',
  'Clinical Experience',
  'Telemedicine Readiness',
  'Compliance & Security',
  'Profile Enhancement',
  'Working Hours'
];

function OfficerProfile() {
  const { searchParams, router } = useMain();
  const tab = searchParams.get('tab') as TabType || 'Profile Information';
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
      activeTab === 'Profile Information' ? <ProfileInformation /> :
        activeTab === 'Professional Licensure' ? <ProfessionalLicensure /> :
          activeTab === 'Clinical Experience' ? <ClinicalExperience /> :
          activeTab === 'Telemedicine Readiness' ? <TelemedicineReadiness /> :
          activeTab === 'Compliance & Security' ? <ComplianceSecurity /> :
              activeTab === 'Profile Enhancement' ? <ProfileEnhancement /> :
                activeTab === 'Working Hours' ? <WorkingHours /> : null
    }

    <ProfileFooter />
  </>} />
}

export default OfficerProfile