'use client';

import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link';
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import routes from '@/lib/routes';
import { heroMedia } from '@/app/(website)/leadership/heroMedia';
import ActiveMenuContent from './Includes/ActiveMenuContent';
import { logo } from '@/app/assets/icons';
import Image from 'next/image';
import { MenuIcon } from 'lucide-react';
import MenuSidebar from './Includes/MenuSidebar';


function Header() {
    const [activeMenu, setActiveMenu] = React.useState<string | null>(null);
    const [sidebarOpen, setSidebarOpen] = React.useState(false);

    const handleMouseLeave = () => {
        setActiveMenu(null);
    };

    return (
        <div className='w-full sticky top-0 flex flex-col gap-4 items-center text-slate-800 z-20 text-[14px]'>
            <div className="w-full xl:w-[1200px] flex items-center justify-between h-[70px] shadow gap-[2rem] rounded- bg-white relative" onMouseLeave={handleMouseLeave}>
                <div className="w-full h-full px-5 flex md:flex-row flex-row-reverse items-center justify-between">
                    <section className="md:w-[450px] flex items-center gap-4">
                        <Link href={routes.onboarding} className='md:flex hidden'>
                            <Button className='rounded-2xl'>Register Now</Button>
                        </Link>
                        <Link href={routes.login}>
                            <button className="flex items-center gap-2 mx-4">Sign in <i className="fa fa-download -rotate-90"></i></button>
                        </Link>
                    </section>
                    <section className="md:min-w-[410px] h-full flex md:flex-row flex-row-reverse items-center justify-end gap-3 sm:gap-8 text-black">
                        <aside className="hidden sm:flex items-center h-full">
                            <button onMouseEnter={() => setActiveMenu('Individuals')} className={`h-full flex items-center px-3 lg:px-5 ${activeMenu === 'Individuals' ? 'border-b-2 border-primary' : ''}`}><p className='cursor-pointer'>Individuals</p></button>
                            <button onMouseEnter={() => setActiveMenu('Organizations')} className={`h-full flex items-center px-3 lg:px-5 ${activeMenu === 'Organizations' ? 'border-b-2 border-primary' : ''}`}><p className='cursor-pointer'>Organizations</p></button>
                            <button onMouseEnter={() => setActiveMenu('Clinicians')} className={`h-full flex items-center px-3 lg:px-5 ${activeMenu === 'Clinicians' ? 'border-b-2 border-primary' : ''}`}><p className='cursor-pointer'>Clinicians</p></button>
                        </aside>
                        <Link href={'/'} className=''>
                            <Image src={logo} alt="RiciaCare Logo" className='w-24' />
                        </Link>
                        <button onClick={() => setSidebarOpen(true)} className='sm:hidden'><MenuIcon/></button>
                    </section>

                </div>
                <ActiveMenuContent activeMenu={activeMenu} setActiveMenu={setActiveMenu} />

            </div>
            <MenuSidebar open={sidebarOpen} close={() => setSidebarOpen(false)} />
        </div>
    )
}

export default Header