'use client';

import useMain from '@/app/hooks/useMain';
import { Button } from '@/components/ui/button';
import routes from '@/lib/routes';
import { setNewParams } from '@/lib/utils';
import { Clock, MapPin, User } from 'lucide-react';
import React, { useEffect } from 'react'

type TabType = 'All' | 'Pending' | 'Assigned' | 'Out for Delivery' | 'Completed';
const tabs: TabType[] = [
    'All',
    'Pending',
    'Assigned',
    'Out for Delivery',
    'Completed'
];

function DeliveryManagement() {
    const { searchParams, router } = useMain();
    const tab = searchParams.get('delivery') as TabType || 'All';
    const [activeTab, setActiveTab] = React.useState<TabType>(tab);
    useEffect(() => setActiveTab(tab), [tab]);


    return <div className="main-content flex flex-col gap-4">
        <span className="flex items-center justify-between">
            <p>Delivery Management</p>
            <Button variant={'outline'} className='rounded h-9 px-5'>View All</Button>
        </span>

        <span className="w-full border-b flex items-end">
            {tabs.map((t) => (
                <button
                    key={t}
                    className={`px-4 py-2 -mb-px border-b-2 transition-colors duration-200 ${activeTab === t
                            ? 'border-primary border-b font-semibold'
                            : 'border-transparent text-muted-foreground'
                        }`}
                    onClick={() => {
                        setActiveTab(t);
                        router.replace(routes.dispensary.dashboard + setNewParams(searchParams, 'delivery', t));
                    }}
                    type="button"
                >
                    {t}
                </button>
            ))}
        </span>

        <section className="w-full grid min-[777px]:grid-cols-2 xl:grid-cols-3  2xl:grid-cols-4 gap-4">
            {
                [1,2,3,4,5,6].map((del, idx)=>{
                    return <div key={`del-${idx}`} className="w-full relative overflow-hidden border rounded-lg p-4 flex flex-col gap-2">
                        <div className={`absolute top-0 left-0 w-1.5 h-full ${idx%2===0?'bg-orange-300':'bg-primary'}`}/>
                        
                        <span className="flex justify-between gap-2">
                            <aside className="flex flex-col gap-1">
                                <p>Delivery #DL-2023-0421</p>
                                <small className="text-gray-600">Sarah Johnson</small>
                            </aside>
                            <div className="px-3 py-1 w-fit h-fit text-nowrap rounded bg-orange-100 text-orange-800">Out for Delivery</div>
                        </span>

                        <span className="flex items-center gap-2 text-sm">
                            <MapPin className='size-4'/> 123 Main St, Apt 4B, New York, NY 10001
                        </span>
                        <span className="flex items-center gap-2 text-sm">
                            <User className='size-4' /> Assigned to: Michael Brown
                        </span>
                        <span className="flex items-center gap-2 text-sm">
                            <Clock className='size-4' /> Dispatched: Today, 11:30 AM
                        </span>
                        <aside className="w-full pt-1 5 border-t flex items-center justify-between">
                            <Button className={`rounded h-8`}>Track</Button>
                            <Button variant={'outline'} className={`rounded h-8`}>Details</Button>
                        </aside>
                    </div>
                })
            }
        </section>
    </div>
}

export default DeliveryManagement