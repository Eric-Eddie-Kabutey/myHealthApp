'use client';

import { ChevronDown } from 'lucide-react';
import React from 'react'
import IndividualMenuContent from './IndividualMenuContent';
import OrganisationMenuContent from './OrganisationMenuContent';
import CliniciansMenuContent from './CliniciansMenuContent';
import { logo } from '@/app/assets/icons';
import Image from 'next/image';

function MenuSidebar({ open, close }: { open: boolean, close: () => void }) {
    const [activeMenu, setActiveMenu] = React.useState<string | null>('Individuals');
    // const handleMouseLeave = () => {
    //     setActiveMenu(null);
    // };
    return (
        <div className={`fixed ${!open ? '-translate-x-[100%]' : 'translate-x-[0%]'} top-0 z-[999] size-full h-[100dvh] flex transition-all duration-300`}>
            <section className="min-w-[100%] h-[100dvh] flex flex-col overflow-y-auto bg-white">
                <div className="w-full flex items-center justify-between p-4 bg-white sticky top-0">
                    <Image src={logo} alt="Menu" className="w-28 rounded-full" />
                    <button onClick={()=>close()} className="text-gray-500 hover:text-gray-700">
                        <i className="fa fa-times text-xl"></i>
                    </button>
                </div>
                <section className="w-full flex flex-col px-4">
                    <aside className="w-full flex flex-col">
                        <span onClick={() => setActiveMenu('Individuals')} className={`w-full py-4 hover:bg-gray-100 cursor-pointer flex items-center justify-between border-t ${activeMenu === 'Individuals' ? 'bg-gray-100 px-3' : ''}`}>
                            <p className="text-sm">Individuals</p>
                            <ChevronDown/>
                        </span>
                        {activeMenu === 'Individuals' && <IndividualMenuContent/>}
                    </aside>
                    <aside className="w-full flex flex-col">
                        <span onClick={() => setActiveMenu('Organisations')} className={`w-full py-4 hover:bg-gray-100 cursor-pointer flex items-center justify-between border-t ${activeMenu === 'Organisations' ? 'bg-gray-100 px-3' : ''}`}>
                            <p className="text-sm">Organisations</p>
                            <ChevronDown/>
                        </span>
                        {activeMenu === 'Organisations' && <OrganisationMenuContent/>}
                    </aside>
                    <aside className="w-full flex flex-col">
                        <span onClick={() => setActiveMenu('Clinicians')} className={`w-full py-4 hover:bg-gray-100 cursor-pointer flex items-center justify-between border-t ${activeMenu === 'Clinicians' ? 'bg-gray-100 px-3' : ''}`}>
                            <p className="text-sm">Clinicians</p>
                            <ChevronDown/>
                        </span>
                        {activeMenu === 'Clinicians' && <CliniciansMenuContent/>}
                    </aside>
                </section>
            </section>
            <div onClick={() => close()} className='w-full bg-black/50' />
        </div>
    )
}

export default MenuSidebar