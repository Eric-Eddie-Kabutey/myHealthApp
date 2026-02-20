'use client'

import useMain from '@/app/hooks/useMain';
import PageWrapper from '@/components/PageWrapper'
import React, { useEffect } from 'react'
import ProfileFooter from '../ProfileFooter';
import ProfileInfo from './Includes/ProfileInfo';
import ProfessionalLicensure from './Includes/ProfessionalLicensure';
import ClinicalExperience from './Includes/ClinicalExperience';
import TelemedicineReadiness from './Includes/TelemedicineReadiness';
import ComplianceSecurity from './Includes/ComplianceSecurity';
import ProfileEnhancement from './Includes/ProfileEnhancement';
import WorkingHours from './Includes/WorkingHours';

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


function DoctorProfile() {
    const { searchParams, router } = useMain();
    const tab = searchParams.get('invoice') as TabType || 'Profile Information';
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
                            router.replace(`?invoice=${encodeURIComponent(t)}`);
                        }}
                        type="button"
                    >
                        {t}
                    </button>
                ))}
            </div>
        </section>

        {
            activeTab === 'Profile Information' ? <ProfileInfo /> :
                activeTab === 'Professional Licensure' ? <ProfessionalLicensure /> :
                    activeTab === 'Clinical Experience' ? <ClinicalExperience /> :
                        activeTab === 'Telemedicine Readiness' ? <TelemedicineReadiness /> :
                            activeTab === 'Compliance & Security' ? <ComplianceSecurity /> :
                                activeTab === 'Profile Enhancement' ? <ProfileEnhancement /> :
                                    activeTab === 'Working Hours' ? <WorkingHours /> : null
        }

        {/* <ProfileFooter /> */}
    </>} />
}

export default DoctorProfile