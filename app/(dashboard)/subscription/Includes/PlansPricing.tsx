'use client';

import { Button } from '@/components/ui/button';
import { Check, MapPin, Star, Users } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogTitle,
  } from "@/components/ui/dialog"


const types: ('Monthly'|'Annual')[] = ['Monthly','Annual'];

const plans = [
    {
        icon: Users,
        title: 'Family Package',
        price: '$29.99/monthly',
        features : [
            'Up to 6 family members',
            '24/7 telemedicine consultations',
            'Prescription drug coverage',
            'Preventive care included',
            'Mental health support',
            'Emergency medical services'
        ]
    },
    {
        icon: MapPin,
        title: 'Tourist Plan',
        price: '$19.99/monthly',
        features: [
            'International coverage',
            'Emergency medical evacuation',
            'Trip interruption coverage',
            '24/7 travel assistance',
            'Pre-existing condition coverage',
            'Adventure sports coverage',
        ]
    },
    {
        icon: Star,
        title: 'Premium Individual',
        price: '$14.99/monthly',
        features: [
            'Personal health coverage',
            'Telemedicine access',
            'Basic prescription coverage',
            'Preventive care',
            'Health tracking tools',
            'Wellness programs'
        ]
    }
]


function PlansPricing() {
    const router = useRouter();
    const searchParam = useSearchParams();
    const tab = searchParam.get('type') as 'Monthly'|'Annual' || 'Monthly';
    const [activeTab, setActiveTab] = useState<'Monthly'|'Annual'>(tab);
    useEffect(()=>setActiveTab(tab),[tab]);

    type Plan = {
        icon: React.ElementType;
        title: string;
        price: string;
        features: string[];
    };
    const [selected, setSelected] = useState<Plan | null>(null);
    const [billingComplete, setBillingComplete] = useState(false)

    return <div className="w-full flex flex-col gap-5 items-center">
        <section className="p-[6px] flex h-12 rounded-md bg-gray-100">
            {types.map((tab) => (
                <button
                    key={tab}
                    onClick={() => {
                        router.replace(`?type=${tab}`);
                        setActiveTab(tab)
                    }}
                    className={`w-28 h-full rounded-md flex items-center justify-center ${activeTab === tab ? 'bg-white':'text-gray-600'}`}
                >
                    {tab}
                </button>
            ))}
        </section>
        <section className="w-full flex justify-center gap-6">
            {
                plans.map((plan, idx)=>{
                    return <div key={`plan-${idx}`} className={`w-[280px] border rounded-xl p-4 pt-10 flex flex-col items-center gap-3 ${plan.title === selected?.title ? 'border-primary bg-primary/5':''} hover:border-primary hover:bg-primary/5 transition-all`}>
                        <aside className="size-14 rounded-full border flex items-center justify-center"><plan.icon className='size-5'/></aside>
                        <p>Family Package</p>
                        <h1 className="text-xl">$29.99/monthly</h1>
                        <div className="w-full flex flex-col gap-2 px-2">
                            {
                                plan.features?.map((feat: string, idxx: number) => {
                                    return (
                                        <span key={`${plan.title}-${idxx}`} className="flex items-center gap-3 text-sm">
                                            <Check className={`size-5 text-white rounded ${plan.title === selected?.title ? 'bg-primary':'bg-[#9E9E9E] '}`}/>
                                            {feat}
                                        </span>
                                    );
                                })
                            }
                        </div>
                        <Button onClick={()=>setSelected(plan)} className={`rounded h-10 w-full mt-4 ${plan.title === selected?.title ? 'bg-primary':'bg-[#9E9E9E]'}`}>Select Plan</Button>
                    </div>
                })
            }
        </section>

        <Dialog open={!!selected} onOpenChange={()=>setSelected(null)}>
            <DialogContent className="main-content sm:w-[400px] flex flex-col items-center gap-3">
            <DialogTitle/>
            {
                billingComplete ? <>
                    <section className="size-16 rounded-full bg-gradient-to-b from-gray-200 to-white flex justify-center items-center">
                        <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.703125" y="1.09375" width="44.6" height="43.8138" rx="21.9069" fill="#34765A"/>
                        <rect x="0.703125" y="1.09375" width="44.6" height="43.8138" rx="21.9069" stroke="#E1E4EA"/>
                        <path d="M20.5322 27.3034L32.7887 15.0469L34.6743 16.9325L20.5322 31.0746L12.0469 22.5894L13.9325 20.7038L20.5322 27.3034Z" fill="white"/>
                        </svg>
                    </section>

                    <p>Subscription Activated!</p>

                    <p className="text-sm text-gray-700 text-center mb-5">Your Family Package subscription has been successfully activated. You can now access all premium features.</p>

                    <Button variant={'outline'} className='w-full h-10 rounded'>Download Receipt</Button>
                </> : <>
                    <section className="size-16 rounded-full bg-gradient-to-b from-gray-200 to-white flex justify-center items-center">
                        <div className="size-[70%] rounded-full flex items-center justify-center bg-white">
                            <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 0H19C19.5523 0 20 0.44771 20 1V17C20 17.5523 19.5523 18 19 18H1C0.44772 18 0 17.5523 0 17V1C0 0.44771 0.44772 0 1 0ZM18 9.00001H2V16H18V9.00001ZM18 5V2H2V5H18Z" fill="#0E121B"/>
                            </svg>
                        </div>
                    </section>

                    <p>Complete Your Subscription</p>

                    <div className="w-full rounded-xl p-3 flex flex-col items-center gap-2 py-5 bg-primary/5">
                        <p className="text-sm">{selected?.title}</p>
                        <h1 className="text-xl text-primary">{selected?.price}</h1>
                    </div>

                    <form onSubmit={e=>{
                        e.preventDefault();
                        setBillingComplete(true)
                    }} className="w-full flex flex-col gap-4">
                        <div className="w-full flex flex-col gap-1">
                            <p className="text-sm">Cardholder Name</p>
                            <input required type="text" placeholder='Joshua Odame' className="w-full rounded h-10 px-3 text-sm border" />
                        </div>
                        <div className="w-full flex flex-col gap-1">
                            <p className="text-sm">Card Number</p>
                            <input required type="text" placeholder='0000 0000 0000 0000' className="w-full rounded h-10 px-3 text-sm border" />
                        </div>
                        <aside className="w-full grid grid-cols-2 gap-3">
                            <div className="w-full flex flex-col gap-1">
                                <p className="text-sm">Expiry Date</p>
                                <input required type="number" placeholder='MM/YY' className="w-full rounded h-10 px-3 text-sm border" />
                            </div>
                            <div className="w-full flex flex-col gap-1">
                                <p className="text-sm">CVV</p>
                                <input required type="number" placeholder='123' className="w-full rounded h-10 px-3 text-sm border" />
                            </div>
                        </aside>
                        <div className="w-full flex flex-col gap-1">
                            <p className="text-sm">Billing Address</p>
                            <input required type="text" placeholder='Enter address' className="w-full rounded h-10 px-3 text-sm border" />
                        </div>

                        <div className="w-full py-2 border-t flex flex-col gap-2">
                            <span className="w-full flex items-center justify-between text-gray-600 text-sm">
                                Plan: 
                                <p className='text-black'>Family Package</p>
                            </span>
                            <span className="w-full flex items-center justify-between text-gray-600 text-sm">
                                Duration: 
                                <p className='text-black'>Monthly</p>
                            </span>
                            <span className="w-full flex items-center justify-between text-gray-600 text-sm">
                                Total: 
                                <p className='text-black'>{selected?.price?.split('/')[0]}</p>
                            </span>
                        </div>

                        <div className="w-full grid grid-cols-2 gap-3">
                            <Button variant={'outline'} className='w-full rounded h-10'>Cancel</Button>
                            <Button type='submit' className='w-full rounded h-10'>Pay Now</Button>
                        </div>
                    </form>
                </>
            }

            </DialogContent>
        </Dialog>
    </div>
}

export default PlansPricing