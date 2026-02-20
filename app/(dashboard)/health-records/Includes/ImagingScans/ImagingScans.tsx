'use client';

import { Button } from '@/components/ui/button';
import { setNewParams } from '@/lib/utils';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { ChevronDown, Filter, Hourglass, Video } from 'lucide-react';
import Image from 'next/image';
import ScheduleNewStudy from './ScheduleNewStudy';


const tabs = ['Completed Studies', 'Pending Studies', 'Schedule New Study'];
type TabType = 'Completed Studies' | 'Pending Studies' | 'Schedule New Study';

function ImagingScans() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const imgTab = searchParams.get('imgTab') as TabType || 'Completed Studies';
    const [activeImgTab, setActiveImgTab] = useState<TabType>('Completed Studies');
    useEffect(()=>setActiveImgTab(imgTab),[imgTab])


    return <div className="w-full flex flex-col main-content gap-4 text-sm">
        <section className="w-full pb-2 border-b text-base flex items-center justify-between">
            Lab Tests and Results

            <div className="flex gap-3">
                <aside className="flex items-center px-3 h-8 bg-primary/10 text-sm rounded-lg">Total studies: 8</aside>
                <aside className="flex items-center px-3 h-8 bg-primary/10 text-sm rounded-lg">Latest scan: May 15, 2023</aside>
            </div>
        </section>

        <section className="w-full p-4 flex flex-col border rounded-2xl gap-4 text-sm">
            <div className="w-full border-b flex justify-between">
                <aside className="flex">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            className={`px-4 pb-3 rounded-t ${
                                (activeImgTab === tab || imgTab === tab)
                                    ? 'border-b-2 border-primary'
                                    : 'text-gray-700'
                            }`}
                            onClick={() => {
                                setActiveImgTab(tab as TabType);
                                router.replace(setNewParams(searchParams, 'imgTab', tab));
                            }}
                            type="button"
                        >
                            {tab}
                        </button>
                    ))}
                </aside>
                <aside className="flex gap-3 mb-2">
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button variant="outline" className='flex items-center gap-3 h-8 rounded-lg'>
                                <Filter className='size-4'/>
                                Filter
                                <ChevronDown className='size-5'/>
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent side={'bottom'} className="w-[650px] text-[14px] flex flex-col gap-3 mr-12 rounded-xl px-6">

                        </PopoverContent>
                    </Popover>
                    <Button variant={'outline'} className='h-8'>Export All</Button>
                </aside>
            </div>

            
            {
                activeImgTab === 'Completed Studies'? <>
                    <p>Recent Imaging Studies</p>
                    <div className="w-full border rounded-xl p-4 flex flex-col gap-4">
                            <div className="w-full flex items-center justify-between">
                                <aside className="flex flex-col">
                                    <p>Lipid Panel</p>
                                    <p className="text-gray-600">Blood Test</p>
                                </aside>
                                <aside className="flex items-center gap-2">
                                    <span className="px-3 rounded-lg h-8 flex items-center text-sm bg-primary/10 text-primary">Completed</span>
                                    <span className="text-sm">Collected: May 18, 2023</span>
                                </aside>
                            </div>

                            <div className="w-full flex gap-[5rem] my-2">
                                <div className="flex flex-col">
                                    <p className="text-gray-500 uppercase">ordering provider</p>
                                    <p>Dr. Smith</p>
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-gray-500 uppercase">Facility</p>
                                    <p>City Medical Imaging Center</p>
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-gray-500 uppercase">REPORT DATE</p>
                                    <p>May 20, 2023</p>
                                </div>
                            </div>

                            <div className="w-full flex gap-5 overflow-x-auto">
                                {
                                    [1,2,3,4].map((item, idx)=>{
                                        return <aside key={`scan-${idx}`} className="border rounded-2x flex flex-col w-[240px] rounded-xl overflow-hidden">
                                            <div className="w-full h-[130px] flex items-center justify-center bg-gray-100">
                                                {
                                                    idx%2 === 0 ? 
                                                    <img src={`https://media.sciencephoto.com/c0/48/21/17/c0482117-800px-wm.jpg`} alt='' className='size-full object-cover'/>:

                                                    <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1.33133 0.664062C0.596653 0.664062 0 1.25613 0 1.98646V26.0083C0 26.7237 0.593013 27.3307 1.32453 27.3307H22.6755C23.4068 27.3307 24 26.7293 24 25.9874L23.9996 7.33073L17.3333 0.664062H1.33133ZM10 7.9974H12.6667C12.6667 11.3173 15.5248 14.8779 19.0883 16.0658L18.4781 18.6507C14.2979 18.0535 9.97613 19.8379 6.07293 22.4402L4.5004 20.2895C5.94865 19.131 7.33724 17.165 8.36665 14.8686C9.3924 12.5805 10 10.1007 10 7.9974ZM10.8 15.9595C11.1564 15.1643 11.4724 14.3391 11.7383 13.5021C12.3672 14.4682 13.1404 15.355 14.0136 16.1245C12.7045 16.3589 11.4221 16.7435 10.1804 17.2342C10.4 16.8165 10.6068 16.3905 10.8 15.9595Z" fill="#E53E3E"/>
                                                    </svg>

                                                }
                                            </div>
                                            <div className="w-full p-2 px-4 flex flex-col">
                                                <p>Axial T2 FLAIR</p>
                                                <p className="text-gray-700">Series 1, Image 12</p>
                                            </div>
                                        </aside>
                                    })
                                }
                            </div>
                            
                            <section className="flex flex-col mt-5">
                                <p className="text-gray-500 mb-2">KEY FINDINGS</p>
                                <ul className='bg-primary/5 rounded-xl p-3'>
                                    <li className='list-disc ml-5'>Small (5mm) hyperintense focus in the left frontal lobe on T2 FLAIR images</li>
                                    <li className='list-disc ml-5'>No evidence of acute infarction or hemorrhage</li>
                                    <li className='list-disc ml-5'>Mild diffuse cerebral atrophy for patient's age (65 years)</li>
                                    <li className='list-disc ml-5'>No mass lesions or abnormal enhancement</li>
                                    <li className='list-disc ml-5'>Ventricular system and basal cisterns are normal in size and configuration</li>
                                </ul>
                            </section>

                            <section className="w-full flex flex-col gap-3">
                                <p className="text-gray-500 mb-2">RADIOLOGIST'S INTERPRETATION</p>
                                <div className="w-full p-4 flex gap-3 rounded-lg bg-gray-100">
                                    <img src="https://randomuser.me/api/portraits/men/65.jpg" alt="" className="size-12 min-w-12 rounded-full object-cover overflow-hidden" />
                                    <div className="flex flex-col gap-2">
                                        <p>Dr. Chen (Radiology)</p>
                                        <p className="text-gray-600">The MRI shows a small nonspecific hyperintensity in the left frontal lobe which may represent a small focus of gliosis or chronic microvascular ischemic change. No acute abnormalities are identified. The findings are stable compared to previous MRI from 2021. Clinical correlation is recommended. If patient has new neurological symptoms, consider follow-up imaging in 6 months. Otherwise, routine neurological follow-up is suggested.</p>
                                        <small>Review: May 17,2023</small>
                                    </div>
                                </div>
                            </section>
                    </div>
                </> :

                activeImgTab === 'Pending Studies'? <>
                    <p>Recent Imaging Studies</p>
                    <div className="w-full border rounded-xl p-4 flex flex-col gap-4">
                            <div className="w-full flex items-center justify-between">
                                <aside className="flex flex-col">
                                    <p>Lipid Panel</p>
                                    <p className="text-gray-600">Blood Test</p>
                                </aside>
                                <aside className="flex items-center gap-2">
                                    <span className="px-3 rounded-lg h-8 flex items-center text-sm bg-orange-50 text-orange">Pending Interpretation</span>
                                    <span className="text-sm">Collected: May 18, 2023</span>
                                </aside>
                            </div>

                            <div className="w-full flex gap-[5rem] my-2">
                                <div className="flex flex-col">
                                    <p className="text-gray-500 uppercase">ordering provider</p>
                                    <p>Dr. Smith</p>
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-gray-500 uppercase">Facility</p>
                                    <p>City Medical Imaging Center</p>
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-gray-500 uppercase">REPORT DATE</p>
                                    <p>May 20, 2023</p>
                                </div>
                            </div>

                            <div className="w-full flex gap-5 overflow-x-auto">
                                {
                                    [1,2,3,4].map((item, idx)=>{
                                        return <aside key={`scan-${idx}`} className="border rounded-2x flex flex-col w-[240px] rounded-xl overflow-hidden">
                                            <div className="w-full h-[130px] flex items-center justify-center bg-gray-100">
                                                {
                                                    idx%2 === 0 ? 
                                                    <img src={`https://media.sciencephoto.com/c0/48/21/17/c0482117-800px-wm.jpg`} alt='' className='size-full object-cover'/>:

                                                    <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1.33133 0.664062C0.596653 0.664062 0 1.25613 0 1.98646V26.0083C0 26.7237 0.593013 27.3307 1.32453 27.3307H22.6755C23.4068 27.3307 24 26.7293 24 25.9874L23.9996 7.33073L17.3333 0.664062H1.33133ZM10 7.9974H12.6667C12.6667 11.3173 15.5248 14.8779 19.0883 16.0658L18.4781 18.6507C14.2979 18.0535 9.97613 19.8379 6.07293 22.4402L4.5004 20.2895C5.94865 19.131 7.33724 17.165 8.36665 14.8686C9.3924 12.5805 10 10.1007 10 7.9974ZM10.8 15.9595C11.1564 15.1643 11.4724 14.3391 11.7383 13.5021C12.3672 14.4682 13.1404 15.355 14.0136 16.1245C12.7045 16.3589 11.4221 16.7435 10.1804 17.2342C10.4 16.8165 10.6068 16.3905 10.8 15.9595Z" fill="#E53E3E"/>
                                                    </svg>

                                                }
                                            </div>
                                            <div className="w-full p-2 px-4 flex flex-col">
                                                <p>Axial T2 FLAIR</p>
                                                <p className="text-gray-700">Series 1, Image 12</p>
                                            </div>
                                        </aside>
                                    })
                                }
                            </div>
                            
                            <div className="w-full flex flex-col gap-2 mt-4">
                                <p className="text-gray-600">KEY FINDINGS</p>
                                <aside className="w-full rounded-xl bg-gray-100 border p-4 flex items-center gap-2">
                                    <Hourglass className='size-4'/>
                                    Your ultrasound images have been captured and are awaiting radiologist interpretation. Results are typically available within 48 hours.
                                </aside>
                            </div>
                    </div> 
                </> : 

                activeImgTab === 'Schedule New Study'? <ScheduleNewStudy/> : null
            }
        </section>
    </div>
}

export default ImagingScans