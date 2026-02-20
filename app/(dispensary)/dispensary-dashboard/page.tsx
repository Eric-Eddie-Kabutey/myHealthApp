'use client';

import useMain from '@/app/hooks/useMain';
import PageWrapper from '@/components/PageWrapper';
import React, { SVGProps, useEffect } from 'react';
import PrescriptionQueue from './Includes/PrescriptionQueue';
import InvoiceManagement from './Includes/InvoiceManagement';
import DeliveryManagement from './Includes/DeliveryManagement';
import DispatcherOverview from './Includes/DispatcherOverview';
import WelcomePrompt from '@/components/WelcomePrompt';
import { useRoleGuard } from '@/app/hooks/useRoleGuard';

const stats = [
    {
        name: `Pending Prescriptions`,
        value: '6',
        icon: (props: SVGProps<SVGSVGElement>) => (
            <svg {...props} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.4828 1.51818C16.4354 3.4708 16.4354 6.63665 14.4828 8.58923L8.59023 14.4818C6.63757 16.4344 3.47177 16.4344 1.51915 14.4818C-0.433467 12.5291 -0.433467 9.3634 1.51915 7.41073L7.41173 1.51818C9.36432 -0.434445 12.5301 -0.434445 14.4828 1.51818ZM9.76932 10.9456L5.05527 6.23163L2.69767 8.58923C1.39592 9.89098 1.39592 12.0016 2.69767 13.3033C3.99941 14.6051 6.10996 14.6051 7.41173 13.3033L9.76932 10.9456ZM13.3042 2.69669C12.0025 1.39494 9.89198 1.39494 8.59023 2.69669L6.23378 5.05312L10.9478 9.76715L13.3042 7.41073C14.606 6.10899 14.606 3.99844 13.3042 2.69669Z" fill="#3762E4"/>
            </svg>
        ),
        bg: 'bg-[#3762e421]',
        subName: 'Today',
        subVal: '+3 new'
    },
    {
        name: 'Pending Invoices',
        value: '19',
        icon: (props: SVGProps<SVGSVGElement>) => (
            <svg {...props} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.5 2.33366L3 0.666992L0.5 2.33366V14.8337C0.5 16.2144 1.61929 17.3337 3 17.3337H14.6667C16.0474 17.3337 17.1667 16.2144 17.1667 14.8337V12.3337H15.5V2.33366L13 0.666992L10.5 2.33366L8 0.666992L5.5 2.33366ZM13.8333 12.3337H3.83333V14.8337C3.83333 15.2939 3.46023 15.667 3 15.667C2.53977 15.667 2.16667 15.2939 2.16667 14.8337V3.22563L3 2.67008L5.5 4.33674L8 2.67008L10.5 4.33674L13 2.67008L13.8333 3.22563V12.3337ZM14.6667 15.667H5.35774C5.44988 15.4063 5.5 15.1258 5.5 14.8337V14.0003H15.5V14.8337C15.5 15.2939 15.1269 15.667 14.6667 15.667Z" fill="#34765A"/>
            </svg>
        ),
        bg: 'bg-[#34765b24]',
        subName: 'Unpaid',
        subVal: '$1,245.50'
    },
    {
        name: 'Active Deliveries',
        value: '9',
        icon: (props: SVGProps<SVGSVGElement>) => (
            <svg {...props} viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.46916 11.0003C7.26698 12.4137 6.0514 13.5003 4.58203 13.5003C3.11266 13.5003 1.89708 12.4137 1.6949 11.0003H0.832031V1.00033C0.832031 0.540092 1.20513 0.166992 1.66536 0.166992H13.332C13.7923 0.166992 14.1654 0.540092 14.1654 1.00033V2.66699H16.6654L19.1654 6.04674V11.0003H17.4692C17.2669 12.4137 16.0514 13.5003 14.582 13.5003C13.1127 13.5003 11.8971 12.4137 11.6949 11.0003H7.46916ZM12.4987 1.83366H2.4987V8.54241C3.02808 8.00216 3.76591 7.66699 4.58203 7.66699C5.74553 7.66699 6.74991 8.34824 7.21802 9.33366H11.946C12.0858 9.03949 12.2734 8.77233 12.4987 8.54241V1.83366ZM14.1654 6.83366H17.4987V6.59616L15.8251 4.33366H14.1654V6.83366ZM14.582 11.8337C15.1263 11.8337 15.5893 11.4858 15.7609 11.0003C15.8069 10.87 15.832 10.7297 15.832 10.5837C15.832 9.89332 15.2724 9.33366 14.582 9.33366C13.8917 9.33366 13.332 9.89332 13.332 10.5837C13.332 10.7297 13.3571 10.87 13.4032 11.0003C13.5748 11.4858 14.0378 11.8337 14.582 11.8337ZM5.83203 10.5837C5.83203 9.89332 5.27239 9.33366 4.58203 9.33366C3.89167 9.33366 3.33203 9.89332 3.33203 10.5837C3.33203 10.7297 3.3571 10.87 3.40316 11.0003C3.57476 11.4858 4.03777 11.8337 4.58203 11.8337C5.12629 11.8337 5.58931 11.4858 5.76091 11.0003C5.80696 10.87 5.83203 10.7297 5.83203 10.5837Z" fill="black"/>
            </svg>
        ),
        bg: 'bg-[#00000021]',
        subName: 'In Progress',
        subVal: '2 delayed'
    },
    {
        name: 'Available Dispatchers',
        value: '5',
        icon: (props: SVGProps<SVGSVGElement>) => (
            <svg {...props} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.0013 8.16699C11.3025 8.16699 13.168 10.0325 13.168 12.3337V17.3337H11.5013V12.3337C11.5013 11.0022 10.4606 9.91391 9.14822 9.83791L9.0013 9.83366C7.66989 9.83366 6.58158 10.8744 6.50554 12.1867L6.5013 12.3337V17.3337H4.83464V12.3337C4.83464 10.0325 6.70012 8.16699 9.0013 8.16699ZM3.58464 10.667C3.81701 10.667 4.04304 10.6942 4.25972 10.7455C4.11965 11.162 4.03358 11.602 4.00877 12.0581L4.0013 12.3337L4.00189 12.405C3.90761 12.3717 3.80814 12.3492 3.70502 12.3394L3.58464 12.3337C2.93489 12.3337 2.40093 12.8294 2.34036 13.4632L2.33464 13.5837V17.3337H0.667969V13.5837C0.667969 11.9728 1.9738 10.667 3.58464 10.667ZM14.418 10.667C16.0288 10.667 17.3346 11.9728 17.3346 13.5837V17.3337H15.668V13.5837C15.668 12.9339 15.1722 12.4 14.5384 12.3394L14.418 12.3337C14.272 12.3337 14.1318 12.3587 14.0016 12.4047L14.0013 12.3337C14.0013 11.7789 13.911 11.2453 13.7442 10.7467C13.9596 10.6942 14.1856 10.667 14.418 10.667ZM3.58464 5.66699C4.73523 5.66699 5.66797 6.59973 5.66797 7.75033C5.66797 8.90091 4.73523 9.83366 3.58464 9.83366C2.43404 9.83366 1.5013 8.90091 1.5013 7.75033C1.5013 6.59973 2.43404 5.66699 3.58464 5.66699ZM14.418 5.66699C15.5686 5.66699 16.5013 6.59973 16.5013 7.75033C16.5013 8.90091 15.5686 9.83366 14.418 9.83366C13.2674 9.83366 12.3346 8.90091 12.3346 7.75033C12.3346 6.59973 13.2674 5.66699 14.418 5.66699ZM3.58464 7.33366C3.35452 7.33366 3.16797 7.52024 3.16797 7.75033C3.16797 7.98041 3.35452 8.16699 3.58464 8.16699C3.81475 8.16699 4.0013 7.98041 4.0013 7.75033C4.0013 7.52024 3.81475 7.33366 3.58464 7.33366ZM14.418 7.33366C14.1879 7.33366 14.0013 7.52024 14.0013 7.75033C14.0013 7.98041 14.1879 8.16699 14.418 8.16699C14.6481 8.16699 14.8346 7.98041 14.8346 7.75033C14.8346 7.52024 14.6481 7.33366 14.418 7.33366ZM9.0013 0.666992C10.8422 0.666992 12.3346 2.15938 12.3346 4.00033C12.3346 5.84128 10.8422 7.33366 9.0013 7.33366C7.16035 7.33366 5.66797 5.84128 5.66797 4.00033C5.66797 2.15938 7.16035 0.666992 9.0013 0.666992ZM9.0013 2.33366C8.0808 2.33366 7.33464 3.07985 7.33464 4.00033C7.33464 4.9208 8.0808 5.66699 9.0013 5.66699C9.9218 5.66699 10.668 4.9208 10.668 4.00033C10.668 3.07985 9.9218 2.33366 9.0013 2.33366Z" fill="#4BA254"/>
            </svg>
        ),
        bg: 'bg-[#32ff121a]',
        subName: 'Total',
        subVal: '7 registered'
    },
];

type TabType = 'Prescription Queue' | 'Invoice Management' | 'Delivery Management' | 'Dispatcher Overview';
const tabs:TabType[] = [
    'Prescription Queue',
    'Invoice Management',
    'Delivery Management',
    'Dispatcher Overview'
]


function DispensaryDashboard() {
    useRoleGuard('dispensary');
    const {searchParams, router} = useMain();
    const tab = searchParams.get('tab') as TabType || 'Prescription Queue';
    const [activeTab, setActiveTab] = React.useState<TabType>(tab);
    useEffect(()=>setActiveTab(tab), [tab]);

    return <PageWrapper content={<>
        <section className="w-full min-h-fit flex gap-5 overflow-x-auto">
            {
                stats.map((stat, idx) => {
                    return <div key={`stat-${idx}`} className="rounded-xl min-w-[270px] h-[105px] border p-4 flex gap-2">
                        <aside className={`size-10 min-w-10 rounded-full flex items-center justify-center ${stat.bg}`}>
                            <stat.icon className='size-4' />
                        </aside>
                        <aside className="w-full flex flex-col">
                            <p>{stat.name}</p>
                            <h1 className="text-xl font-semibold">{stat.value}</h1>
                            <span className="w-full flex justify-between mt-4">
                                <small className="text-gray-600">{stat.subName}</small>
                                <small className="">{stat.subVal}</small>
                            </span>
                        </aside>
                    </div>
                })
            }
        </section>

        <section className="w-full p-4 border rounded-lg flex flex-col gap-5">
            <div className="border-b flex">
                {tabs.map((t) => (
                    <button
                        key={t}
                        className={`px-4 py-2 -mb-px border-b-2 transition-colors ${
                            activeTab === t
                                ? 'border-primary font-semibold'
                                : 'border-transparent text-gray-500 hover:text-blue-600'
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
            {
                activeTab === 'Prescription Queue' ? <PrescriptionQueue/> :
                activeTab === 'Invoice Management' ? <InvoiceManagement/> :
                activeTab === 'Delivery Management' ? <DeliveryManagement/> :
                activeTab === 'Dispatcher Overview' ? <DispatcherOverview/> : null
            }
        </section>
    </>}/>
}

export default DispensaryDashboard