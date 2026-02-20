import { LogoSmall } from '@/app/assets/images'
import { AlarmClockCheck, AppWindow, AppWindowMac, Bot, CalendarClock, FilePlus, Grid2X2, Headphones, HeartPlus, Home, Hospital, LogOut, Receipt, Settings, User, UserPlus } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import MenuItem from './MenuItem'
import routes from '@/lib/routes'
import Image from 'next/image'
import { useMainStore } from '@/store/GlobalStore'
import { usePathname } from 'next/navigation'
import { Button } from './ui/button'
import {
    Dialog,
    DialogContent,
    DialogTitle,
  } from "@/components/ui/dialog"

type props = {
    showMobileMenu: boolean;
    setShowMobileMenu: ()=>void;
}

function DocterSidebar({setShowMobileMenu}:props) {
    const {setPageTitle, resetPageTitle} = useMainStore();
    const path = usePathname();
    const [showLogout, setShowLogout] = useState(false)
    const logout = ()=>window.location.href = routes.login;

    useEffect(()=>{
        // const pageTitle = path.split('/').pop()?.replace(/-/g, ' ') || 'Dashboard';
        if(path.includes('appointment-booking')) {
            setPageTitle('Appointment Booking', 'Manage your appointments with ease', (props:any)=><CalendarClock {...props} />);
        }
        if(path.includes('health-records')) {
            setPageTitle('Health Records', 'Access and manage your personal health records in one secure place.', (props:any)=><HeartPlus {...props} />);
        }

        else{
            resetPageTitle();
        }
        // eslint-disable-next-line
    },[path])

    return <div className={`min-w-[250px] w-[250px] flex flex-col flex-1 overflow-y-auto gap-5 text-sm border-r justify-between bg-white`}>
        <section className="w-full flex flex-col items-center h-20 sticky top-0 bg-white">
            <div className="w-full min-h-20 px-5 flex items-center bg-white sticky top-0 justify-between">
                <div className="flex items-center w-fit gap-2">
                    <Image src={LogoSmall} alt="logo" className="w-10" />
                    <p className="text-lg">Ricia Care</p>
                </div>
                <div className='size-6 border rounded-lg'/>
            </div>
            <div className="px-5 w-full"><hr /></div>
        </section>
        
        <section className="w-full h-full flex flex-col justify-between">
            <div className="flex h-fit flex-col gap-2">
                {/* Pages ... */}
                <div className="flex flex-col gap-2 w-full mb-4">
                    <p className="text-gray-500 mb-2 px-5">MAIN</p>
                    <MenuItem
                        menu={{
                            text: "Dashboard",
                            icon: Grid2X2,
                            url: routes.doctor.dashboard,
                        }}
                        setShowMobileMenu={setShowMobileMenu}
                    />
                    <MenuItem
                        menu={{
                            text: "Appointments",
                            icon: CalendarClock,
                            url: routes.doctor.appointment,
                        }}
                        setShowMobileMenu={setShowMobileMenu}
                    />
                    <MenuItem
                        menu={{
                            text: "Patient Interaction",
                            icon: UserPlus, // Replace with appropriate icon
                            url: routes.doctor.patientInteraction,
                        }}
                        setShowMobileMenu={setShowMobileMenu}
                    />
                    <MenuItem
                        menu={{
                            text: "Financials",
                            icon: Receipt, // Replace with appropriate icon
                            url: routes.doctor.financials,
                        }}
                        setShowMobileMenu={setShowMobileMenu}
                    />
                    
                </div>
                <div className="flex flex-col gap-2 w-full mb-4">
                    <p className="text-gray-500 mb-2 px-5">OTHERS</p>
                    <MenuItem
                        menu={{
                            text: "Profile",
                            icon: User,
                            url: routes.doctor.profile,
                        }}
                        setShowMobileMenu={setShowMobileMenu}
                    />
                    <MenuItem
                        menu={{
                            text: "Support",
                            icon: Headphones,
                            url: routes.support,
                        }}
                        setShowMobileMenu={setShowMobileMenu}
                    />
                    <MenuItem
                        menu={{
                            text: "Settings",
                            icon: Settings,
                            url: routes.settings,
                        }}
                        setShowMobileMenu={setShowMobileMenu}
                    />
                </div>
            </div>
        </section>

        <div className="w-full flex flex-col min-h-14 sticky bg-white bottom-0">
            <div className="px-5"><hr /></div>
            <div className="w-full px-5 min-h-14 flex items-center">
                <button onClick={()=>setShowLogout(true)} className="w-full flex items-center gap-2 px-4 h-9 text-red-500 rounded-lg hover:bg-red-50 cursor-pointer">
                    <LogOut className='size-5'/>
                    Log Out
                </button>
            </div>
        </div>

        <Dialog open={!!showLogout} onOpenChange={()=>setShowLogout(false)}>
            <DialogContent className="main-content sm:w-[400px] flex flex-col items-center gap-3">
            <DialogTitle/>
                <div className="w-full flex justify-center text-center py-[1.5rem]">
                    <p className="w-[200px]">Are you sure you want to log out?</p>
                </div>
                <div className="w-full grid grid-cols-2 gap-4">
                    <Button variant={'outline'} onClick={()=>setShowLogout(false)} className='w-full h-10'>Cancel</Button>
                    <Button variant={'destructive'} onClick={()=>logout()} className='w-full h-10'>Log Out</Button>
                </div>
            </DialogContent>
        </Dialog>
    </div>
}

export default DocterSidebar