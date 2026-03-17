'use client';

import { ChevronDown, X } from 'lucide-react';
import React from 'react'
import IndividualMenuContent from './IndividualMenuContent';
import OrganisationMenuContent from './OrganisationMenuContent';
import CliniciansMenuContent from './CliniciansMenuContent';
import { logo } from '@/app/assets/icons';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import routes from '@/lib/routes';

function MenuSidebar({ open, close }: { open: boolean, close: () => void }) {
    const [activeMenu, setActiveMenu] = React.useState<string | null>('Individuals');
    
    const handleToggle = (menu: string) => {
        setActiveMenu(prev => prev === menu ? null : menu);
    };

    return (
        <div className={`fixed ${!open ? '-translate-x-[100%]' : 'translate-x-[0%]'} top-0 z-[999] size-full h-[100dvh] flex transition-all duration-300`}>
            <section className="min-w-[100%] h-[100dvh] flex flex-col overflow-y-auto bg-white">
                <div className="w-full flex items-center justify-between p-4 bg-white sticky top-0">
                    <Image src={logo} alt="Menu" className="w-28 rounded-full" />
                    <button onClick={()=>close()} className="text-gray-500 hover:text-gray-700">
                        <X className="size-6" />
                    </button>
                </div>
                <section className="w-full flex flex-col px-4">
                    <aside className="w-full flex flex-col">
                        <span onClick={() => handleToggle('Individuals')} className={`w-full py-4 hover:bg-gray-100 cursor-pointer flex items-center justify-between border-t ${activeMenu === 'Individuals' ? 'bg-gray-100 px-3' : ''}`}>
                            <p className="text-sm">Individuals</p>
                            <ChevronDown className={`size-4 transition-transform ${activeMenu === 'Individuals' ? 'rotate-180' : ''}`}/>
                        </span>
                        {activeMenu === 'Individuals' && <IndividualMenuContent/>}
                    </aside>
                    <aside className="w-full flex flex-col">
                        <span onClick={() => handleToggle('Organisations')} className={`w-full py-4 hover:bg-gray-100 cursor-pointer flex items-center justify-between border-t ${activeMenu === 'Organisations' ? 'bg-gray-100 px-3' : ''}`}>
                            <p className="text-sm">Organisations</p>
                            <ChevronDown className={`size-4 transition-transform ${activeMenu === 'Organisations' ? 'rotate-180' : ''}`}/>
                        </span>
                        {activeMenu === 'Organisations' && <OrganisationMenuContent/>}
                    </aside>
                    <aside className="w-full flex flex-col">
                        <span onClick={() => handleToggle('Clinicians')} className={`w-full py-4 hover:bg-gray-100 cursor-pointer flex items-center justify-between border-t ${activeMenu === 'Clinicians' ? 'bg-gray-100 px-3' : ''}`}>
                            <p className="text-sm">Clinicians</p>
                            <ChevronDown className={`size-4 transition-transform ${activeMenu === 'Clinicians' ? 'rotate-180' : ''}`}/>
                        </span>
                        {activeMenu === 'Clinicians' && <CliniciansMenuContent/>}
                    </aside>
                    
                    {/* Mobile Auth Actions */}
                    <div className="flex flex-col gap-4 py-6 border-t mt-4">
                        <Link
                            href={routes.login}
                            onClick={close}
                            className="flex items-center justify-center gap-2 text-[#14161a] font-medium text-[14px] py-2 hover:bg-gray-50 rounded-lg transition-colors"
                        >
                            Sign in
                        </Link>
                        <Link href={routes.onboarding} onClick={close}>
                            <Button className='w-full rounded-full h-12 text-[14px] font-semibold'>
                                Register Now
                            </Button>
                        </Link>
                    </div>
                </section>
            </section>
            <div onClick={() => close()} className='w-full bg-black/50' />
        </div>
    )
}

export default MenuSidebar