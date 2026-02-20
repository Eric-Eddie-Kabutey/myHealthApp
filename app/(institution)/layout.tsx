'use client';

import "../globals.css";
import DashboardNav from "@/components/DashboardNav";
import { useEffect, useState } from "react";
import DocterSidebar from "@/components/DoctorSidebar";
import useUserStore from "@/store/UserStore";
import { usePathname, useRouter } from "next/navigation";
import routes from "@/lib/routes";
import Sidebar from "@/components/Sidebar";

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode }>) {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const router = useRouter();
    const path = usePathname();
    const { user } = useUserStore();

    console.log(!!user)
    // useEffect(()=>{
    //     switch(user?.role){
    //         case 'dispensary':
    //             router.replace(routes.dispensary.dashboard);
    //             break;
    //         case 'patient':
    //             router.replace(routes.dashboard);
    //             break;
    //         case 'nurse':
    //             router.replace(routes.nurse.dashboard);
    //             break;
    //         case 'finance':
    //             router.replace(routes.finance.dashboard);
    //             break;
    //         case 'officer':
    //             router.replace(routes.officer.dashboard);
    //             break;
    //         case 'support':
    //             router.replace(routes.customerSupport.dashboard);
    //             break;
    //         case 'operations':
    //             router.replace(routes.operations.dashboard);
    //             break;
    //         default:
    //             break;
    //     }
    // },[path, user])

    useEffect(() => {
        window.addEventListener('resize', () => {
            setShowMobileMenu(false)
        });
        return () => window.removeEventListener('resize', () => { })
    }, []);

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
