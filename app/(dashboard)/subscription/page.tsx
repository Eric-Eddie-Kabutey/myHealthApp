'use client';

import PageWrapper from '@/components/PageWrapper';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import PlansPricing from './Includes/PlansPricing';
import ManageSubscription from './Includes/ManageSubscription';
import Receipts from './Includes/Receipts';

type TabType = 'Plan Pricing' | 'Manage Subscription' | 'Receipts';
const tabs: TabType[] = [
  'Plan Pricing',
  'Manage Subscription',
  'Receipts'
];


function Subscription() {
  const router = useRouter();
  const searchParam = useSearchParams();
  const tabParam = searchParam.get('tab');
  const tab: TabType = tabs.includes(tabParam as TabType) ? (tabParam as TabType) : 'Plan Pricing';
  const [activeTab, setActiveTab] = useState<TabType>(tab);
  useEffect(() => setActiveTab(tab), [tab]);

  return <PageWrapper content={
    <>
      <section className="w-full flex border-b sticky top-0 bg-white">
        {tabs.map((t) => (
          <button
            key={t}
            className={`px-4 py-2 -mb-px border-b-2 transition-colors ${
              activeTab === t
                ? 'border-primary font-semibold'
                : 'border-transparent text-gray-500'
            }`}
            onClick={() => {
              router.replace(`?tab=${t}`);
              setActiveTab(t);
            }}
          >
            {t === 'Plan Pricing' ? 'Plan & Pricing' : t}
          </button>
        ))}
      </section>

      <section className="w-full flex flex-col items-center">
        {
          activeTab === 'Plan Pricing' ? <PlansPricing /> :
          activeTab === 'Manage Subscription' ? <ManageSubscription /> :
          activeTab === 'Receipts' ? <Receipts /> : null
        }
      </section>
    </>
  } />;
}

export default Subscription