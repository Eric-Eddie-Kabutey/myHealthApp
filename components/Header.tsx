'use client';

import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link';
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import routes from '@/lib/routes';
import { heroMedia } from '@/app/(website)/leadership/heroMedia';


function Header() {
    const [activeMenu, setActiveMenu] = React.useState<string | null>(null);

    const handleMouseLeave = () => {
        setActiveMenu(null);
    };

    return (
        <div className='w-full sticky top-0 flex flex-col gap-4 items-center text-slate-800 z-20 text-[14px]'>
            <div className="w-full xl:w-[1200px] flex items-center justify-between h-[70px] shadow gap-[2rem] rounded- bg-white relative" onMouseLeave={handleMouseLeave}>
                <div className="w-full px-5 flex items-center justify-between">
                    <section className="w-[450px] flex items-center gap-4">
                        <Link href={routes.onboarding}>
                            <Button className='rounded-2xl'>Register Now</Button>
                        </Link>
                        <Link href={routes.login}>
                            <button className="flex items-center gap-2 mx-4">Sign in <i className="fa fa-download -rotate-90"></i></button>
                        </Link>

                        <div className="flex-1 h-9 rounded-xl border px-3 flex items-center">
                            <i className="fa fa-search text-sm"></i>
                            <input type="text" placeholder='Search ...' className="w-full h-full text-sm px-2 border-none outline-none" />
                        </div>
                    </section>
                    <section className="w-full flex items-center justify-end gap-8 text-black">
                        <button onMouseEnter={() => setActiveMenu('Individuals')} className="h-full"><p className='cursor-pointer'>Individuals</p></button>
                        <button onMouseEnter={() => setActiveMenu('Organizations')} className="h-full"><p className='cursor-pointer'>Organizations</p></button>
                        <button onMouseEnter={() => setActiveMenu('Clinicians')} className="h-full"><p className='cursor-pointer'>Clinicians</p></button>
                        <Link href={'/'}>
                            <img src="/logo.png" alt="RiciaCare Logo" />
                        </Link>
                    </section>

                </div>
                {
                    activeMenu ? <section id='ActiveMenuContent' className="absolute slid-down w-full top-[70px] h-[200px] bg-white z-10" onMouseEnter={() => setActiveMenu(activeMenu)} onMouseLeave={() => setActiveMenu(null)}>
                        {
                            activeMenu === 'Individuals' ? <section>
                                <p>Individual Menu Content</p>
                            </section> :
                                activeMenu === 'Organizations' ? <section>
                                    <p>Organizations Menu Content</p>
                                </section> :
                                    activeMenu === 'Clinicians' ? <section>
                                        <p>Clinicians Menu Content</p>
                                    </section> : null
                        }
                    </section> : null
                }

            </div>
        </div>
    )
}

export default Header