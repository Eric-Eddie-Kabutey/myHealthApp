'use client'

import useMain from '@/app/hooks/useMain';
import PageWrapper from '@/components/PageWrapper'
import React, { useEffect } from 'react'
import IdentityContact from './Include/IdentityContact';
import EligibilityRegulatoryConsent from './Include/EligibilityRegulatoryConsent';
import MedicalBackground from './Include/MedicalBackground';
import InsurancePayment from './Include/InsurancePayment';
import SafetySecurityExtras from './Include/SafetySecurityExtras';
import ProfileFooter from '../ProfileFooter';

type TabType =
    | 'Identity & Contact'
    | 'Eligibility & Regulatory Consent'
    | 'Medical Background'
    | 'Insurance & Payment'
    | 'Safety & Security Extras';

const tabs: TabType[] = [
    'Identity & Contact',
    'Eligibility & Regulatory Consent',
    'Medical Background',
    'Insurance & Payment',
    'Safety & Security Extras'
];


function PatientProfile() {
    const { searchParams, router } = useMain();
    const tab = searchParams.get('invoice') as TabType || 'Identity & Contact';
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
            activeTab === 'Identity & Contact' ? <IdentityContact /> :
                activeTab === 'Eligibility & Regulatory Consent' ? <EligibilityRegulatoryConsent /> :
                    activeTab === 'Medical Background' ? <MedicalBackground /> :
                        activeTab === 'Insurance & Payment' ? <InsurancePayment /> :
                            activeTab === 'Safety & Security Extras' ? <SafetySecurityExtras /> : null
        }

        <ProfileFooter />
    </>} />
}

export default PatientProfile