'use client';

import PageWrapper from '@/components/PageWrapper';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react';

import SubscribePlan from './Includes/SubscribePlan';

const tabs = [
  'Individual Plan', 'Family Plan'
]
type TabType = 'Individual Plan' | 'Family Plan';

const offers = [
  {
    name: 'Primary Care',
    features: ['Preventive Care', 'Prescriptions', 'Lab Orders', 'Recommended cancer screenings', 'Referrals to in-person specialists']
  },
  {
    name: 'General Medical (24/7 Care)',
    features: ['Allergies','Bronchitis','Cold and Flu','Sinus Infections','Sore Throats',]
  },
  {
    name: 'Mental Health',
    features: ['Anxiety','Depression','Relationship conflicts','Sleep Issues','Stress','Medication Management']
  },
  {
    name: 'Dermatology',
    features: ['Acne','Eczema','Psoriasis','Rashes','Rosacea','Skin Infections',]
  },
]

function Ricia360() {
  const router = useRouter();
  const searchParam = useSearchParams();
  // const tab = searchParam.get('tab') as TabType || 'Individual Plan';
  const [activeTab, setActiveTab] = useState<TabType>('Individual Plan');
  const [activeOffer, setActiveOffer] = useState<typeof offers[number] | null>(null);
  const [completeSub, setCompleteSub] = useState<typeof offers[number] | null>(null)


  return <PageWrapper content={<>
    <section className="w-full flex justify-center">
      <div className="p-1 px-2 flex bg-gray-100 rounded-lg h-12">
        {tabs.map((tabName) => (
          <button
            key={tabName}
            className={`min-w-[120px] h-full rounded-lg px-4 transition-colors ${activeTab === tabName ? 'bg-white text-black font-semibold' : 'bg-gray-100 text-gray-500' }`}
            onClick={() => {
              setActiveTab(tabName as TabType);
              router.replace(`?tab=${tabName}`)
            }}
          >
            {tabName}
          </button>
        ))}
      </div>
    </section>

    <section className="w-full flex flex-col items-center gap-2 text-center my-2">
      Subscribe to an all in one individual plan from Ricia Care
      <span className={`${activeTab === 'Individual Plan'&&'hidden'}`}>You can add a maximum of <b>3</b> beneficiaries</span>
    </section>

    <section className="w-full flex justify-center gap-5 overflow-x-auto">
      {
        offers.map((item, idx)=>{
          return <div onClick={()=>setActiveOffer(item)} key={`offer-${idx}`} className={`w-[250px] rounded-xl border p-4 flex flex-col gap-4 ${activeOffer?.name === item.name && `bg-primary/5 border-primary`} hover:bg-primary/5 hover:border-primary cursor-pointer`}>
            <p className='text-base'>{item.name}</p>
            <aside className="flex flex-col gap-3">
              {
                item.features.map((feat, idxx)=>{
                  return <span key={`offer-feature-${idxx}`} className="flex items-center gap-3">
                    <Checkbox checked className='bg-white size-5'/>
                    <p className="">{feat}</p>
                  </span>
                })
              }
            </aside>
          </div>
        })
      }
    </section>

    <section className="w-full flex justify-center">
      <Button disabled={!activeOffer} onClick={()=>setCompleteSub(activeOffer)} className='rounded px-5 h-10'>Subscribe {activeTab} for {activeTab === 'Individual Plan'?'$25':'$45'}</Button>
    </section>


    <SubscribePlan open={!!activeOffer} close={()=>setActiveOffer(null)}/>

    {completeSub && ''}
  </>}/>
}

export default Ricia360