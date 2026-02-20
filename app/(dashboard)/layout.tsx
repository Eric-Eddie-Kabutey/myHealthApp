'use client';

import "../globals.css";
import DashboardNav from "@/components/DashboardNav";
import Sidebar from "@/components/Sidebar";
import { useEffect, useState } from "react";

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode }>) {
    const [showMobileMenu, setShowMobileMenu] = useState(false);


    useEffect(() => {
        window.addEventListener('resize', () => {
            setShowMobileMenu(false)
        });
        return () => window.removeEventListener('resize', () => { })
    }, [])


    return <main className="w-full h-[100dvh] flex overflow-hidden">
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
    </main>
}
