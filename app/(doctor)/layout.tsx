'use client';

import "../globals.css";
import DashboardNav from "@/components/DashboardNav";
import { useEffect, useState } from "react";
import DocterSidebar from "@/components/DoctorSidebar";
import useUserStore from "@/store/UserStore";
import { usePathname, useRouter } from "next/navigation";
import routes from "@/lib/routes";
import Sidebar from "@/components/Sidebar";
import useMain from "../hooks/useMain";
import { ArrowLeft, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode }>) {
    const {searchParams} = useMain();
    const doctor = searchParams.has('doctor') ? JSON.parse(searchParams.get('doctor')||'{}') : {}
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    useEffect(() => {
        console.log(doctor)
        window.addEventListener('resize', () => {
            setShowMobileMenu(false)
        });
        return () => window.removeEventListener('resize', () => { })
    }, [doctor]);

    return <main className="w-full h-[100dvh] flex flex-col overflow-hidden">
        {Boolean(searchParams.get('manage')) ? <div className="w-full h-20 bg-[#FFE2A4] text-[#854D0F] flex items-center justify-between px-4">
            <span className="flex items-center gap-3">
                <Shield />
                <p className="">Managing Account: {doctor?.name}</p>
            </span>
            <Button onClick={()=>window.history.back()} variant={'outline'} className="border-[#854D0F] bg-transparent hover:bg-[#854D0F] hover:text-white">
                <ArrowLeft/>
                Exit Account
            </Button>
        </div> : null}
        
        <section className="w-full h-[100dvh] flex overflow-hidden">
            <div className="h-full w-fit lg:flex hidden">
                <Sidebar showMobileMenu={showMobileMenu} setShowMobileMenu={() => setShowMobileMenu(!showMobileMenu)} />
            </div>
            <div className={`h-full w-full flex bg-[#0000007d] z-30 fixed top-0 left-0 lg:hidden ${showMobileMenu ? `` : `translate-x-[-100%]`} transition-all duration-300 ease-in-out`}>
                <Sidebar showMobileMenu={showMobileMenu} setShowMobileMenu={() => setShowMobileMenu(!showMobileMenu)} />
                <div onClick={() => setShowMobileMenu(false)} className="w-full" />
            </div>
            <section className="w-full flex flex-col overflow-y-auto">
                <DashboardNav showMobileMenu={showMobileMenu} setShowMobileMenu={() => setShowMobileMenu(!showMobileMenu)} />
                <section className="size-full flex flex-col overflow-y-auto">
                    {children}
                </section>
            </section>
        </section>
    </main>
}
