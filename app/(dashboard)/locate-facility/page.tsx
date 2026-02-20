'use client';

import PageWrapper from '@/components/PageWrapper';
import { Button } from '@/components/ui/button';
import routes from '@/lib/routes';
import { ArrowLeft, ChevronDown, Clock1, Filter, LocateIcon, MapPin, Phone, Search } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"


const types = [
    {
        name: 'General Hospitals',
        title: 'General Hospitals Near You',
        desc: 'We have found 3 general hospitals near you.',
        icon: '🏥'
    },
    {
        name: 'Dentist Centres',
        title: 'Dentist Centers Near You',
        desc: 'We have found 2 dentist centers near you.',
        icon: '🦷'
    },
    {
        name: 'Eye Clinics',
        title: 'Eye Clinics Near You',
        desc: 'We have found 2 eye clinics near you.',
        icon: '👁️'
    },
    {
        name: 'Pharmacies',
        title: 'Pharmacies Near You',
        desc: 'We have found 2 pharmacies near you.',
        icon: '💊'
    },
    {
        name: 'Massage Centres',
        title: 'Massage Centres Near You',
        desc: 'We have found 2 Massage Centres near you.',
        icon: '💆'
    },
]

function LocateFacility() {
    const router = useRouter();
    const searchParam = useSearchParams();
    const facilityType = searchParam.get('facility') as typeof types[number]['name'] || '';
    const [selected, setSelected] = useState<(typeof types[number]['name'])>();
    useEffect(()=>setSelected(facilityType),[facilityType]);
    const selectedDetails = () => selected ? types.find(item => item.name === selected) : undefined;

    const [callNow, setCallNow] = useState<any>(null)

    return <PageWrapper content={<>
        {
            !facilityType ? <>
                <section className="w-full pb-2 border-b flex flex-col">
                    <p className='text-base font-[500]'>Find healthcare Facilities</p>
                    <p className="text-sm">Select a facility type you would like to find, We'll use your device's GPS to find nearby facilities.</p>
                </section>

                <section className="w-full flex justify-center gap-5 flex-wrap">
                    {
                        types.map((type, idx)=>{
                            return <div key={`type-${idx}`} onClick={()=>setSelected(type.name)} className={`w-[200px] h-[180px] hover:bg-primary/10 ${selected === type.name ? 'border-2 border-primary bg-primary/10':''} cursor-pointer rounded-xl border flex flex-col items-center justify-center p-4`}>
                                <div className={`size-14 border rounded-full flex items-center justify-center text-2xl ${selected === type.name ? 'text-primary border-primary':''}`}>{type.icon}</div>
                                <p>{type.name}</p>
                            </div>
                        })
                    }
                </section>
                <section className="w-full flex justify-center">
                    <Button disabled={!selected} onClick={()=>router.push(`?facility=${selected}`)} className='rounded px-[2rem] h-10'>Find Facilities</Button>
                </section>
            </> : <>
                <section className="w-full pb-2 border-b flex items-center gap-2">
                    <button onClick={()=>router.back()} className="size-12 rounded-full border flex items-center justify-center">
                        <ArrowLeft className='size-5'/>
                    </button>
                    <div className="flex flex-col">
                        <p className="text-base">{selectedDetails()?.title}</p>
                        <p className="text-sm">{selectedDetails()?.desc}</p>
                    </div>
                </section>

                <section className="w-full flex items-center justify-between">
                    <div className="flex gap-2 items-center h-9 rounded-lg border px-3 w-[300px]">
                        <Search/>
                        <input type="text" placeholder='Search...' className="w-full border-none outline-none text-sm h-full" />
                    </div>
                    <div className="flex gap-3 items-center">
                        <aside className="flex gap-2 items-center h-9 rounded-lg border px-3 w-[300px]">
                            <MapPin/>
                            <input type="text" placeholder='New Your, NY' className="w-full border-none outline-none text-sm h-full" />
                        </aside>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button variant="outline" className='flex items-center gap-3 h-9 rounded-lg'>
                                    <svg className='size-4' viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.33333 10H9.66667V8.33333H6.33333V10ZM0.5 0V1.66667H15.5V0H0.5ZM3 5.83333H13V4.16667H3V5.83333Z" fill="#525866"/>
                                    </svg>
                                    Driving
                                    <ChevronDown className='size-5'/>
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent side={'bottom'} className="w-[650px] text-[14px] flex flex-col gap-3 mr-12 rounded-xl px-6">

                            </PopoverContent>
                        </Popover>
                    </div>
                </section>

                <section className="w-full flex gap-5 flex-wrap">
                    {
                        [1,2,3,4,5,6,7].map((item, idx)=>{
                            return <div key={`facility-${idx}`} className="border rounded-lg p-4 flex flex-col">
                                <p className="text-base">City General Hospital</p>
                                {/* stars rating */}
                                <span className='flex items-center'>
                                    {
                                        [1,2,3,4].map((star, idx)=><svg key={`star-${idx}`} className='size-4' viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.00358 12.1673L3.10538 15.1592L4.43713 9.57615L0.078125 5.84218L5.7994 5.3835L8.00358 0.0839844L10.2078 5.3835L15.9291 5.84218L11.5701 9.57615L12.9018 15.1592L8.00358 12.1673Z" fill="#FFB412"/>
                                        </svg>)
                                    }
                                    <span className='ml-2 mt-[1px] text-sm'>4.5 rating</span>
                                </span>
                                
                                <span className='my-2'>Specialty: Emergency Care, Surgery</span>

                                <div className="my-2 flex flex-col gap-2">
                                    <span className="flex items-center gap-2 text-gray-600 text-sm">
                                        <MapPin className='size-4'/> 123 Healthcare Ave, Downtown
                                    </span>
                                    <span className="flex items-center gap-2 text-gray-600 text-sm">
                                        <Phone className='size-4'/> (555) 123-4567
                                    </span>
                                    <span className="flex items-center gap-2 text-gray-600 text-sm">
                                        <Clock1 className='size-4'/> 24/7
                                    </span>
                                    <span className="flex items-center gap-2 text-gray-600 text-sm">
                                        <LocateIcon className='size-4'/> 2.3 miles • 8 min
                                    </span>
                                </div>

                                <aside className="w-full pt-4 border-t grid grid-cols-2 gap-4">
                                    <Button onClick={()=>setCallNow({item, type: 'direction'})} variant={`outline`}>Get Directions</Button>
                                    <Button onClick={()=>setCallNow({item, type: 'call'})}>Call Now</Button>
                                </aside>
                            </div>
                        })
                    }
                </section>
            </>
        }

        <Dialog open={callNow} onOpenChange={()=>setCallNow(null)}>
            <DialogContent className="main-content sm:w-[400px] flex flex-col gap-3">
            <DialogTitle/>
            <p>Open a link from the web</p>
            <p className="text-sm text-gray-600">You’re about to be navigated to an external link.</p>
            
            <textarea disabled rows={callNow?.type === 'call'?1:4} defaultValue={callNow?.type === 'call' ? `0542893124`:`https://www.google.com/maps/dir/?api=1&destination=123%20Healthcare%20Ave%2C%20Downtown&travelmode=driving`} className={`w-full p-3 rounded border border-primary px-3 h-fit text-sm bg-primary/10`} />


                <div className="w-full mt-2 flex justify-end gap-3">
                    <Button onClick={()=>setCallNow(null)} variant={`outline`} className='w-[100px]'>Cancel</Button>
                    <Button onClick={()=>{}} className='w-[100px]'>Open Link</Button>
                </div>

            </DialogContent>
        </Dialog>
    </>}/>
}

export default LocateFacility