'use client';

import PageWrapper from '@/components/PageWrapper'
import { setNewParams } from '@/lib/utils'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect } from 'react'
import Overview from './Includes/Overview'
import MedicalHistory from './Includes/MedicalHistory'
import CurrentHealth from './Includes/CurrentHealth'
import Medications from './Includes/Medications'
import VisitsEncounterHistory from './Includes/VisitsEncounterHistory'
import LabTestResults from './Includes/LabTestResults'
import CommunicationRecords from './Includes/CommunicationRecords'
import UploadedDocuments from './Includes/UploadedDocuments'
import ImagingScans from './Includes/ImagingScans/ImagingScans'
import LifestyleBehaviouralData from './Includes/LifeStyleBehaviouralData/LifestyleBehaviouralData';
import DataConsentAndPrivacyInformation from './Includes/DataConsentAndPrivacyInformation';
import InsuranceBilling from './Includes/InsuranceBilling';

const tabs = [
    { label: 'Overview' },
    { label: 'Medical History' },
    { label: 'Current Health Data' },
    { label: 'Medications' },
    { label: 'Visits / Encounter History' },
    { label: 'Lab Tests and Results' },
    { label: 'Imaging and Scans' },
    { label: 'Uploaded Documents' },
    { label: 'Communication Records' },
    { label: 'Lifestyle and Behavioural Data' },
    { label: 'Data Consent and Privacy Information' },
    { label: 'Insurance Billing' }
]

function HealthRecords() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const tab = searchParams.get('tab') || 'Overview';
    const [activeTab, setActiveTab] = React.useState(tab);
    useEffect(()=> setActiveTab(tab), [tab]);


    return <PageWrapper content={<>
        <section className="w-full overflow-x-auto flex border-b sticky top-0 bg-white z-10 pt-2.5">
            {tabs.map(({ label }) => (
                <button key={label} 
                    className={`px-4 py-2 whitespace-nowrap border-b-2 transition-colors 
                        ${ activeTab === label ? 'border-primary font-[500]' : 'border-transparent text-gray-600 font-light hover:text-primary' }
                    `}
                    onClick={() => {
                        router.replace(setNewParams(searchParams, 'tab', label));
                        setActiveTab(label)
                    }}
                >
                    {label}
                </button>
            ))}
        </section>
        {
            activeTab === 'Overview' ? <Overview/>:
            activeTab === 'Medical History' ? <MedicalHistory/>:
            activeTab === 'Current Health Data' ? <CurrentHealth/>:
            activeTab === 'Medications' ? <Medications/>:
            activeTab === 'Visits / Encounter History' ? <VisitsEncounterHistory/>:
            activeTab === 'Lab Tests and Results' ? <LabTestResults/>:
            activeTab === 'Imaging and Scans' ? <ImagingScans/>:
            activeTab === 'Uploaded Documents' ? <UploadedDocuments/>:
            activeTab === 'Communication Records' ? <CommunicationRecords/>:
            activeTab === 'Lifestyle and Behavioural Data' ? <LifestyleBehaviouralData/>:
            activeTab === 'Data Consent and Privacy Information' ? <DataConsentAndPrivacyInformation/>:
            activeTab === 'Insurance Billing' ? <InsuranceBilling/>:
            null
        }
    </>}/>
}

export default HealthRecords