'use client'
import { LogoSmall } from '@/app/assets/images'
import { AlarmClockCheck, AppWindow, AppWindowMac, ArrowLeftRight, Bolt, Bot, CalendarClock, ChartLine, ChevronsLeftRight, ChevronsRight, File, FileChartColumn, FileLineChart, FilePlus, FileWarning, Grid2X2, Headphones, HeartPlus, Home, Hospital, Info, LineChart, LogOut, MapPin, MessageCircle, MessageCircleQuestion, Pill, Plane, PlaneTakeoff, Puzzle, Receipt, ReceiptIcon, Settings, Siren, Star, Stethoscope, Truck, User, UserCheck, UserPlus, Users } from 'lucide-react'
import React, { SVGProps, useEffect, useState } from 'react'
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
import useUserStore from '@/store/UserStore'
import useMain from '@/app/hooks/useMain'

type props = {
    showMobileMenu: boolean;
    setShowMobileMenu: ()=>void;
}

function Sidebar({setShowMobileMenu}:props) {
    const {searchParams} = useMain();
    const manage = searchParams.get('manage')
    const {user} = useUserStore();
    const {setPageTitle, resetPageTitle} = useMainStore();
    const path = usePathname();
    const [showLogout, setShowLogout] = useState(false)
    const logout = ()=>window.location.href = routes.login;
    const [smallSidebar, setSmallSidebar] = useState(false);
    // const [role, setRole] = useState('patient')

    useEffect(()=>{
        // if(user) setRole(user.role);
        
        if(path.includes('appointment-booking')) {
            setPageTitle('Appointment Booking', 'Manage your appointments with ease', (props:any)=><CalendarClock {...props}/>);
        }
        if(path.includes('health-records')) {
            setPageTitle('Health Records', 'Access and manage your personal health records in one secure place.', (props:any)=><HeartPlus {...props}/>);
        }
        else{
            resetPageTitle();
        }
        // eslint-disable-next-line
    },[path])

    return <div className={`${smallSidebar ? `min-w-fit items-center` :`min-w-[250px] w-[250px]`} flex flex-col flex-1 overflow-y-auto gap-5 text-sm border-r justify-between bg-white`}>
        <section className="w-full flex flex-col items-center h-20 sticky top-0 bg-white">
            <div className={`w-full min-h-20 px-5 flex items-center bg-white relative top-0 ${smallSidebar ? 'justify-center' : 'justify-between'}`}>
                <div className="flex items-center w-fit gap-2">
                    <Image src={LogoSmall} alt="logo" className="w-10" />
                    {smallSidebar ? null : <p className="text-lg">Ricia Care</p>}
                </div>
                <button onClick={() => setSmallSidebar(!smallSidebar)} className={`size-7 border rounded-lg flex items-center justify-center ${smallSidebar ? 'absolute -right-3 top-7' : ''}`}>
                    {smallSidebar ? <ChevronsRight className='size-5'/> : <ChevronsLeftRight className='size-5'/>}
                </button>
            </div>
            <div className="px-5 w-full"><hr /></div>
        </section>
        
        <section className={`w-full h-full flex flex-col justify-between ${smallSidebar ? 'items-center' : ''}`}>
            <div className="flex h-fit flex-col gap-2">
                {/* Main Pages ... */}
                {
                    user?.role === 'patient' ? 
                    <div className={`flex flex-col gap-2 w-full mb-4 ${smallSidebar ? 'items-center' : ''}`}>
                        <p className="text-gray-500 mb-2 px-5">MAIN</p>
                        <MenuItem
                            menu={{
                                text: "Dashboard",
                                icon: Grid2X2,
                                url: routes.dashboard,
                            }}
                            smallSideBar={smallSidebar}
                            setShowMobileMenu={setShowMobileMenu}
                        />
                        <MenuItem
                            menu={{
                                text: "Appointment Booking",
                                icon: CalendarClock,
                                url: routes.appointment_booking,
                            }}
                            smallSideBar={smallSidebar}
                            setShowMobileMenu={setShowMobileMenu}
                        />
                        <MenuItem
                            menu={{
                                text: "Health Records",
                                icon: HeartPlus,
                                url: routes.health_records,
                            }}
                            smallSideBar={smallSidebar}
                            setShowMobileMenu={setShowMobileMenu}
                        />
                        <MenuItem
                            menu={{
                                text: "Emergency Services",
                                icon: AlarmClockCheck, // Replace with appropriate icon
                                url: routes.emergency_services,
                            }}
                            smallSideBar={smallSidebar}
                            setShowMobileMenu={setShowMobileMenu}
                        />
                        <MenuItem
                            menu={{
                                text: "Locate a Facility",
                                icon: Hospital, // Replace with appropriate icon
                                url: routes.locate_facility,
                            }}
                            smallSideBar={smallSidebar}
                            setShowMobileMenu={setShowMobileMenu}
                        />
                        <MenuItem
                            menu={{
                                text: "Prescriptions",
                                icon: FilePlus, // Replace with appropriate icon
                                url: routes.prescriptions,
                            }}
                            smallSideBar={smallSidebar}
                            setShowMobileMenu={setShowMobileMenu}
                        />
                        <MenuItem
                            menu={{
                                text: "Home Care",
                                icon: Home, // Replace with appropriate icon
                                url: routes.home_care,
                            }}
                            smallSideBar={smallSidebar}
                            setShowMobileMenu={setShowMobileMenu}
                        />
                        <MenuItem
                            menu={{
                                text: "Programs",
                                icon: AppWindow, // Replace with appropriate icon
                                url: routes.programs,
                            }}
                            smallSideBar={smallSidebar}
                            setShowMobileMenu={setShowMobileMenu}
                        />
                        <MenuItem
                            menu={{
                                text: "Payments",
                                icon: AppWindowMac, // Replace with appropriate icon
                                url: routes.payments,
                            }}
                            smallSideBar={smallSidebar}
                            setShowMobileMenu={setShowMobileMenu}
                        />
                        <MenuItem
                            menu={{
                                text: "AI Health Suggestions",
                                icon: Bot, // Replace with appropriate icon
                                url: routes.ai_health_suggestions,
                            }}
                            smallSideBar={smallSidebar}
                            setShowMobileMenu={setShowMobileMenu}
                        />
                        <MenuItem
                            menu={{
                                text: "Ricia 360 Care",
                                icon: ()=><Image src={LogoSmall} alt='logo' className='size-5'/>, // Replace with appropriate icon
                                url: routes.ricia_360_care,
                            }}
                            smallSideBar={smallSidebar}
                            setShowMobileMenu={setShowMobileMenu}
                        />
                    </div> : 

                    ((manage === 'manage-doctor' && user?.role === 'admin') || user?.role === 'doctor') ? 
                    <div className={`flex flex-col gap-2 w-full mb-4 ${smallSidebar ? 'items-center' : ''}`}>
                        <p className="text-gray-500 mb-2 px-5">MAIN</p>
                        <MenuItem
                            menu={{
                                text: "Dashboard",
                                icon: Grid2X2,
                                url: routes.doctor.dashboard,
                            }}
                            smallSideBar={smallSidebar}
                            setShowMobileMenu={setShowMobileMenu}
                        />
                        <MenuItem
                            menu={{
                                text: "Appointments",
                                icon: CalendarClock,
                                url: routes.doctor.appointment,
                            }}
                            smallSideBar={smallSidebar}
                            setShowMobileMenu={setShowMobileMenu}
                        />
                        <MenuItem
                            menu={{
                                text: "Patient Interaction",
                                icon: UserPlus, // Replace with appropriate icon
                                url: routes.doctor.patientInteraction,
                            }}
                            smallSideBar={smallSidebar}
                            setShowMobileMenu={setShowMobileMenu}
                        />
                        <MenuItem
                            menu={{
                                text: "Financials",
                                icon: Receipt, // Replace with appropriate icon
                                url: routes.doctor.financials,
                            }}
                            smallSideBar={smallSidebar}
                            setShowMobileMenu={setShowMobileMenu}
                        />
                    </div> : 
                    
                    user?.role === 'institution' ? 
                    <div className={`flex flex-col gap-2 w-full mb-4 ${smallSidebar ? 'items-center' : ''}`}>
                        <p className="text-gray-500 mb-2 px-5">MAIN</p>
                        <MenuItem
                            menu={{
                                text: "Dashboard",
                                icon: Grid2X2,
                                url: routes.institution.dashboard,
                            }}
                            smallSideBar={smallSidebar}
                            setShowMobileMenu={setShowMobileMenu}
                        />
                        <MenuItem
                            menu={{
                                text: "Emergency Requests",
                                icon: FileWarning,
                                url: routes.institution.emergencyRequests,
                            }}
                            smallSideBar={smallSidebar}
                            setShowMobileMenu={setShowMobileMenu}
                        />
                        <MenuItem
                            menu={{
                                text: "Manage Branches",
                                icon: MapPin,
                                url: routes.institution.manageBranches,
                            }}
                            smallSideBar={smallSidebar}
                            setShowMobileMenu={setShowMobileMenu}
                        />
                        <MenuItem
                            menu={{
                                text: "Emergency Services",
                                icon: MapPin,
                                url: routes.institution.emergencyServices,
                            }}
                            smallSideBar={smallSidebar}
                            setShowMobileMenu={setShowMobileMenu}
                        />

                    </div> :

                    user?.role === 'operations' ? 
                    <div className={`flex flex-col gap-2 w-full mb-4 ${smallSidebar ? 'items-center' : ''}`}>
                        <p className="text-gray-500 mb-2 px-5">MAIN</p>
                        <MenuItem
                            menu={{
                                text: "Dashboard",
                                icon: Grid2X2,
                                url: routes.operations.dashboard,
                            }}
                            smallSideBar={smallSidebar}
                            setShowMobileMenu={setShowMobileMenu}
                        />
                        <MenuItem
                            menu={{
                                text: "Appointment Bookings",
                                icon: CalendarClock,
                                url: routes.operations.appointment,
                            }}
                            smallSideBar={smallSidebar}
                            setShowMobileMenu={setShowMobileMenu}
                        />
                        <MenuItem
                            menu={{
                                text: "User Support",
                                icon: MessageCircleQuestion,
                                url: routes.operations.support,
                            }}
                            smallSideBar={smallSidebar}
                            setShowMobileMenu={setShowMobileMenu}
                        />
                    </div> :

                    user?.role === 'nurse' ? 
                    <div className={`flex flex-col gap-2 w-full mb-4 ${smallSidebar ? 'items-center' : ''}`}>
                        <p className="text-gray-500 mb-2 px-5">MAIN</p>
                        <MenuItem
                            menu={{
                                text: "Dashboard",
                                icon: Grid2X2,
                                url: routes.nurse.dashboard,
                            }}
                            smallSideBar={smallSidebar}
                            setShowMobileMenu={setShowMobileMenu}
                        />
                        <MenuItem
                            menu={{
                                text: "Triage & Consultation",
                                icon: Info,
                                url: routes.nurse.triage,
                            }}
                            smallSideBar={smallSidebar}
                            setShowMobileMenu={setShowMobileMenu}
                        />
                        <MenuItem
                            menu={{
                                text: "Doctor Requests",
                                icon: FileChartColumn,
                                url: routes.nurse.doctorRequests,
                            }}
                            smallSideBar={smallSidebar}
                            setShowMobileMenu={setShowMobileMenu}
                        />
                        <MenuItem
                            menu={{
                                text: "Patient Management",
                                icon: Users,
                                url: routes.nurse.patientManagement,
                            }}
                            smallSideBar={smallSidebar}
                            setShowMobileMenu={setShowMobileMenu}
                        />
                        <MenuItem
                            menu={{
                                text: "Follow-Up Panel",
                                icon: UserCheck,
                                url: routes.nurse.followUp,
                            }}
                            smallSideBar={smallSidebar}
                            setShowMobileMenu={setShowMobileMenu}
                        />
                        <MenuItem
                            menu={{
                                text: "Reports & Logs",
                                icon: ChartLine,
                                url: routes.nurse.reports,
                            }}
                            smallSideBar={smallSidebar}
                            setShowMobileMenu={setShowMobileMenu}
                        />
                    </div> :
                    
                    user?.role === 'officer' ? 
                    <div className={`flex flex-col gap-2 w-full mb-4 ${smallSidebar ? 'items-center' : ''}`}>
                        <p className="text-gray-500 mb-2 px-5">MAIN</p>
                        <MenuItem
                            menu={{
                                text: "Dashboard",
                                icon: Grid2X2,
                                url: routes.officer.dashboard,
                            }}
                            smallSideBar={smallSidebar}
                            setShowMobileMenu={setShowMobileMenu}
                        />
                        <MenuItem
                            menu={{
                                text: "Doctor & Nurse Oversight",
                                icon: Stethoscope,
                                url: routes.officer.docNurseOversight,
                            }}
                            smallSideBar={smallSidebar}
                            setShowMobileMenu={setShowMobileMenu}
                        />
                        <MenuItem
                            menu={{
                                text: "Patient & Case Oversight",
                                icon: UserPlus,
                                url: routes.officer.patientCaseOversight,
                            }}
                            smallSideBar={smallSidebar}
                            setShowMobileMenu={setShowMobileMenu}
                        />
                        <MenuItem
                            menu={{
                                text: "Consultation Review",
                                icon: File,
                                url: routes.officer.consultation,
                            }}
                            smallSideBar={smallSidebar}
                            setShowMobileMenu={setShowMobileMenu}
                        />
                        <MenuItem
                            menu={{
                                text: "Prescription Management",
                                icon: Pill,
                                url: routes.officer.prescription,
                            }}
                            smallSideBar={smallSidebar}
                            setShowMobileMenu={setShowMobileMenu}
                        />
                        <MenuItem
                            menu={{
                                text: "Emergency Response",
                                icon: Siren,
                                url: routes.officer.emergency,
                            }}
                            smallSideBar={smallSidebar}
                            setShowMobileMenu={setShowMobileMenu}
                        />
                        <MenuItem
                            menu={{
                                text: "Reporting & Escalations",
                                icon: FileChartColumn,
                                url: routes.officer.reporting,
                            }}
                            smallSideBar={smallSidebar}
                            setShowMobileMenu={setShowMobileMenu}
                        />
                        <MenuItem
                            menu={{
                                text: "Emergency Flight Request",
                                icon: PlaneTakeoff,
                                url: routes.officer.flightRequest,
                            }}
                            smallSideBar={smallSidebar}
                            setShowMobileMenu={setShowMobileMenu}
                        />
                    </div> :
                    
                    user?.role === 'finance' ? 
                    <div className={`flex flex-col gap-2 w-full mb-4 ${smallSidebar ? 'items-center' : ''}`}>
                        <p className="text-gray-500 mb-2 px-5">MAIN</p>
                        <MenuItem
                            menu={{
                                text: "Dashboard",
                                icon: Grid2X2,
                                url: routes.finance.dashboard,
                            }}
                            smallSideBar={smallSidebar}
                            setShowMobileMenu={setShowMobileMenu}
                        />
                        <MenuItem
                            menu={{
                                text: "Transaction Management",
                                icon: ArrowLeftRight,
                                url: routes.finance.transactions,
                            }}
                            smallSideBar={smallSidebar}
                            setShowMobileMenu={setShowMobileMenu}
                        />
                        <MenuItem
                            menu={{
                                text: "Report & Logs",
                                icon: FileLineChart,
                                url: routes.finance.report,
                            }}
                            smallSideBar={smallSidebar}
                            setShowMobileMenu={setShowMobileMenu}
                        />
                    </div> :

                    user?.role === 'support' ? 
                    <div className={`flex flex-col gap-2 w-full mb-4 ${smallSidebar ? 'items-center' : ''}`}>
                        <p className="text-gray-500 mb-2 px-5">MAIN</p>
                        <MenuItem
                            menu={{
                                text: "Dashboard",
                                icon: Grid2X2,
                                url: routes.customerSupport.dashboard,
                            }}
                            smallSideBar={smallSidebar}
                            setShowMobileMenu={setShowMobileMenu}
                        />
                        <MenuItem
                            menu={{
                                text: "Live Support",
                                icon: MessageCircle,
                                url: routes.customerSupport.liveSupport,
                            }}
                            smallSideBar={smallSidebar}
                            setShowMobileMenu={setShowMobileMenu}
                        />
                        <MenuItem
                            menu={{
                                text: "Ticket System",
                                icon: Puzzle,
                                url: routes.customerSupport.ticketSystem,
                            }}
                            smallSideBar={smallSidebar}
                            setShowMobileMenu={setShowMobileMenu}
                        />
                        <MenuItem
                            menu={{
                                text: "Knowledge Base",
                                icon: Bolt,
                                url: routes.customerSupport.knowledgeBase,
                            }}
                            smallSideBar={smallSidebar}
                            setShowMobileMenu={setShowMobileMenu}
                        />
                        <MenuItem
                            menu={{
                                text: "Complaint Escalation",
                                icon: Info,
                                url: routes.customerSupport.complaintEscalation,
                            }}
                            smallSideBar={smallSidebar}
                            setShowMobileMenu={setShowMobileMenu}
                        />
                        <MenuItem
                            menu={{
                                text: "Feedback Monitoring",
                                icon: Star,
                                url: routes.customerSupport.feedbackMonitoring,
                            }}
                            smallSideBar={smallSidebar}
                            setShowMobileMenu={setShowMobileMenu}
                        />
                        <MenuItem
                            menu={{
                                text: "Daily Reports",
                                icon: FileLineChart,
                                url: routes.customerSupport.dailyReports,
                            }}
                            smallSideBar={smallSidebar}
                            setShowMobileMenu={setShowMobileMenu}
                        />
                    </div> : 
                    
                    user?.role === 'dispensary' ?
                    <div className={`flex flex-col gap-2 w-full mb-4 ${smallSidebar ? 'items-center' : ''}`}>
                        <p className="text-gray-500 mb-2 px-5">MAIN</p>
                        <MenuItem
                            menu={{
                                text: "Dashboard",
                                icon: Grid2X2,
                                url: routes.dispensary.dashboard,
                            }}
                            smallSideBar={smallSidebar}
                            setShowMobileMenu={setShowMobileMenu}
                        />
                        <MenuItem
                            menu={{
                                text: "Prescription Management",
                                icon: Pill,
                                url: routes.dispensary.prescription,
                            }}
                            smallSideBar={smallSidebar}
                            setShowMobileMenu={setShowMobileMenu}
                        />
                        <MenuItem
                            menu={{
                                text: "Payment & Invoice",
                                icon: ReceiptIcon,
                                url: routes.dispensary.payment,
                            }}
                            smallSideBar={smallSidebar}
                            setShowMobileMenu={setShowMobileMenu}
                        />
                        <MenuItem
                            menu={{
                                text: "Dispatch Coordination",
                                icon: MapPin,
                                url: routes.dispensary.dispatch,
                            }}
                            smallSideBar={smallSidebar}
                            setShowMobileMenu={setShowMobileMenu}
                        />
                        <MenuItem
                            menu={{
                                text: "Dispatcher Management",
                                icon: Truck,
                                url: routes.dispensary.dispatcher,
                            }}
                            smallSideBar={smallSidebar}
                            setShowMobileMenu={setShowMobileMenu}
                        />
                    </div> : 

                    user?.role === 'admin' ?
                    <div className={`flex flex-col gap-2 w-full mb-4 ${smallSidebar ? 'items-center' : ''}`}>
                        <p className="text-gray-500 mb-2 px-5">MAIN</p>
                        <MenuItem
                            menu={{
                                text: "Dashboard",
                                icon: Grid2X2,
                                url: routes.admin.dashboard,
                            }}
                            smallSideBar={smallSidebar}
                            setShowMobileMenu={setShowMobileMenu}
                        />
                        <MenuItem
                            menu={{
                                text: "User Management",
                                icon: ()=> <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.08073 3.83333C6.08073 4.75381 5.33454 5.5 4.41406 5.5C3.49359 5.5 2.7474 4.75381 2.7474 3.83333C2.7474 2.91286 3.49359 2.16667 4.41406 2.16667C5.33454 2.16667 6.08073 2.91286 6.08073 3.83333ZM1.08073 3.83333C1.08073 5.67428 2.57311 7.16667 4.41406 7.16667C6.25501 7.16667 7.7474 5.67428 7.7474 3.83333C7.7474 1.99238 6.25501 0.5 4.41406 0.5C2.57311 0.5 1.08073 1.99238 1.08073 3.83333ZM6.4974 11.75C6.4974 10.5994 5.56465 9.66667 4.41406 9.66667C3.26347 9.66667 2.33073 10.5994 2.33073 11.75V13.8333H6.4974V11.75ZM8.16406 15.5H0.664062V11.75C0.664062 9.67892 2.343 8 4.41406 8C6.48513 8 8.16406 9.67892 8.16406 11.75V15.5ZM15.2474 3.83333C15.2474 4.75381 14.5012 5.5 13.5807 5.5C12.6602 5.5 11.9141 4.75381 11.9141 3.83333C11.9141 2.91286 12.6602 2.16667 13.5807 2.16667C14.5012 2.16667 15.2474 2.91286 15.2474 3.83333ZM10.2474 3.83333C10.2474 5.67428 11.7398 7.16667 13.5807 7.16667C15.4216 7.16667 16.9141 5.67428 16.9141 3.83333C16.9141 1.99238 15.4216 0.5 13.5807 0.5C11.7398 0.5 10.2474 1.99238 10.2474 3.83333ZM15.6641 11.75C15.6641 10.5994 14.7313 9.66667 13.5807 9.66667C12.4301 9.66667 11.4974 10.5994 11.4974 11.75V13.8333H15.6641V11.75ZM9.83073 13.8333V11.75C9.83073 9.67892 11.5096 8 13.5807 8C15.6518 8 17.3307 9.67892 17.3307 11.75V15.5H9.83073V13.8333Z" fill="#525866"/>
                                </svg>
                                ,
                                url: routes.admin.userManagement,
                            }}
                            smallSideBar={smallSidebar}
                            setShowMobileMenu={setShowMobileMenu}
                        />
                        <MenuItem
                            menu={{
                                text: "Audit & Logs",
                                icon: ()=><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.8307 17.3337H3.16406C1.78335 17.3337 0.664062 16.2144 0.664062 14.8337V1.50033C0.664062 1.04009 1.03716 0.666992 1.4974 0.666992H13.1641C13.6243 0.666992 13.9974 1.04009 13.9974 1.50033V11.5003H17.3307V14.8337C17.3307 16.2144 16.2115 17.3337 14.8307 17.3337ZM13.9974 13.167V14.8337C13.9974 15.2939 14.3705 15.667 14.8307 15.667C15.291 15.667 15.6641 15.2939 15.6641 14.8337V13.167H13.9974ZM12.3307 15.667V2.33366H2.33073V14.8337C2.33073 15.2939 2.70383 15.667 3.16406 15.667H12.3307ZM3.9974 4.83366H10.6641V6.50033H3.9974V4.83366ZM3.9974 8.16699H10.6641V9.83366H3.9974V8.16699ZM3.9974 11.5003H8.16406V13.167H3.9974V11.5003Z" fill="#525866"/>
                                </svg>
                                ,
                                url: routes.admin.auditLogs,
                            }}
                            smallSideBar={smallSidebar}
                            setShowMobileMenu={setShowMobileMenu}
                        />
                        <MenuItem
                            menu={{
                                text: "Analytics",
                                icon: LineChart,
                                url: routes.admin.analytics,
                            }}
                            smallSideBar={smallSidebar}
                            setShowMobileMenu={setShowMobileMenu}
                        />
                    </div> : null
                }

                {/* Other Pages ... */}
                <div className={`flex flex-col gap-2 w-full mb-4 ${smallSidebar ? 'items-center' : ''}`}>
                    <p className="text-gray-500 mb-2 px-5">OTHERS</p>
                    {
                        user?.role === 'patient' ? 
                            <MenuItem
                                menu={{
                                    text: "Subscription",
                                    icon: AppWindow,
                                    url: routes.subscription,
                                }}
                                smallSideBar={smallSidebar}
                                setShowMobileMenu={setShowMobileMenu}
                            /> :
                        (user?.role === 'operations') || 
                        (user?.role === 'finance') ||
                        (user?.role === 'support') ||
                        (user?.role === 'admin') || 
                        (user?.role === 'dispensary') ? 
                            <MenuItem
                                menu={{
                                    text: "Profile & Settings",
                                    icon: User,
                                    url: routes.profile,
                                }}
                                smallSideBar={smallSidebar}
                                setShowMobileMenu={setShowMobileMenu}
                            />: 
                            <MenuItem
                                menu={{
                                    text: "Profile",
                                    icon: User,
                                    url: `/profile?type=${user?.role}`,
                                }}
                                smallSideBar={smallSidebar}
                                setShowMobileMenu={setShowMobileMenu}
                            />
                    }
                    {
                        (user?.role === 'operations') ||
                        (user?.role === 'finance') ||
                        (user?.role === 'support') || 
                        (user?.role === 'admin') ||
                        (user?.role === 'dispensary')  ? <>
                        </> : <>
                            <MenuItem
                                menu={{
                                    text: "Support",
                                    icon: Headphones,
                                    url: routes.support,
                                }}
                                smallSideBar={smallSidebar}
                                setShowMobileMenu={setShowMobileMenu}
                            />
                            <MenuItem
                                menu={{
                                    text: "Settings",
                                    icon: Settings,
                                    url: routes.settings,
                                }}
                                smallSideBar={smallSidebar}
                                setShowMobileMenu={setShowMobileMenu}
                            />
                        </>
                    }
                </div>
            </div>
        </section>

        <div className="w-full flex flex-col min-h-14 sticky bg-white bottom-0">
            <div className="px-5"><hr /></div>
            <div className={`w-full px-5 min-h-14 flex items-center ${smallSidebar ? 'justify-center' : ''}`}>
                <button onClick={()=>setShowLogout(true)} className="w-full flex items-center gap-2 px-4 h-9 text-red-500 rounded-lg hover:bg-red-50 cursor-pointer">
                    <LogOut className='size-5'/>
                    {smallSidebar ? '' : 'Log Out'}
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

export default Sidebar