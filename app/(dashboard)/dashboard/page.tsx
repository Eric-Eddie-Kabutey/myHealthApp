'use client';

import PageWrapper from '@/components/PageWrapper'
import { Button } from '@/components/ui/button'
import { Calendar, Download, Hospital, Video } from 'lucide-react'
import React, { SVGProps, useEffect, useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog"
import useUserStore from '@/store/UserStore';
import { useRouter } from 'next/navigation';
import routes from '@/lib/routes';
import { useRoleGuard } from '@/app/hooks/useRoleGuard';
import WelcomePrompt from '@/components/WelcomePrompt';

const cta = [
  {
    label: 'Book Appointments',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg {...props} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 0V2H13V0H15V2H19C19.5523 2 20 2.44772 20 3V19C20 19.5523 19.5523 20 19 20H1C0.44772 20 0 19.5523 0 19V3C0 2.44772 0.44772 2 1 2H5V0H7ZM18 7H2V18H18V7ZM13.0355 9.136L14.4497 10.5503L9.5 15.5L5.96447 11.9645L7.37868 10.5503L9.5 12.6716L13.0355 9.136Z" fill="#3762E4"/>
      </svg>
    ),
    bg: 'bg-[#3762E41A]',
    hoverBg: 'hover:bg-[#3762E40D]',
  },
  {
    label: 'Upload Records',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} >
      <path d="M9.34451 2.16667H16.4993C16.9596 2.53977 17.3327 3 17.3327 3V14.6667C17.3327 15.1269 16.9596 15.5 16.4993 15.5H1.49935C1.03912 15.5 0.666016 15.1269 0.666016 14.6667V1.33333C0.666016 0.8731 1.03912 0.5 1.49935 0.5H7.67785L9.34451 2.16667ZM9.83268 8.83333H12.3327L8.99935 5.5L5.66602 8.83333H8.16602V12.1667H9.83268V8.83333Z" fill="#4BA254"/>
      </svg>
    ),
    bg: 'bg-[#4BA2541A]',
    hoverBg: 'hover:bg-[#4BA2540D]',
  },
  {
    label: 'Emergency',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg {...props} viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.3335 15.666V10.666C1.3335 6.98412 4.31827 3.99935 8.00016 3.99935C11.6821 3.99935 14.6668 6.98412 14.6668 10.666V15.666H15.5002V17.3327H0.500169V15.666H1.3335ZM3.00017 10.666H4.66684C4.66684 8.8251 6.15922 7.33268 8.00016 7.33268V5.66602C5.23874 5.66602 3.00017 7.9046 3.00017 10.666ZM7.16683 0.666016H8.83349V3.16602H7.16683V0.666016ZM14.482 3.00569L15.6605 4.18421L13.8927 5.95197L12.7142 4.77346L14.482 3.00569ZM0.339844 4.18421L1.51835 3.00569L3.28612 4.77346L2.10761 5.95197L0.339844 4.18421Z" fill="#E53E3E"/>
      </svg>
    ),
    bg: 'bg-[#E53E3E1A]',
    hoverBg: 'hover:bg-[#E53E3E0D]',
  },
  {
    label: 'Find Facilities',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg {...props} viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.5007 15.666H19.1673V17.3327H0.833984V15.666H2.50065V1.49935C2.50065 1.03912 2.87375 0.666016 3.33398 0.666016H16.6673C17.1276 0.666016 17.5007 1.03912 17.5007 1.49935V15.666ZM9.16732 5.66602H7.50065V7.33268H9.16732V8.99935H10.834V7.33268H12.5007V5.66602H10.834V3.99935H9.16732V5.66602ZM11.6673 15.666H13.334V10.666H6.66732V15.666H8.33398V12.3327H11.6673V15.666Z" fill="#B337E4"/>
      </svg>
    ),
    bg: 'bg-[#B337E41A]',
    hoverBg: 'hover:bg-[#B337E40D]',
  }
]

const stats = [
  {
    label: 'Upcoming',
    value: '2 Appointments',
    icons: (props: SVGProps<SVGSVGElement>)=><svg {...props} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.49935 0.833984V2.50065H11.4993V0.833984H13.166V2.50065H16.4993C16.9596 2.50065 17.3327 2.87375 17.3327 3.33398V16.6673C17.3327 17.1276 16.9596 17.5007 16.4993 17.5007H1.49935C1.03912 17.5007 0.666016 17.1276 0.666016 16.6673V3.33398C0.666016 2.87375 1.03912 2.50065 1.49935 2.50065H4.83268V0.833984H6.49935ZM15.666 9.16732H2.33268V15.834H15.666V9.16732ZM4.83268 4.16732H2.33268V7.50065H15.666V4.16732H13.166V5.83398H11.4993V4.16732H6.49935V5.83398H4.83268V4.16732Z" fill="#0E121B"/>
    </svg>    
  },
  {
    label: 'Records',
    value: '12 Documents',
    icons: (props: SVGProps<SVGSVGElement>)=><svg {...props} viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.6667 17.3327H1.33333C0.8731 17.3327 0.5 16.9596 0.5 16.4993V1.49935C0.5 1.03912 0.8731 0.666016 1.33333 0.666016H14.6667C15.1269 0.666016 15.5 1.03912 15.5 1.49935V16.4993C15.5 16.9596 15.1269 17.3327 14.6667 17.3327ZM13.8333 15.666V2.33268H2.16667V15.666H13.8333ZM4.66667 4.83268H11.3333V6.49935H4.66667V4.83268ZM4.66667 8.16602H11.3333V9.83268H4.66667V8.16602ZM4.66667 11.4993H11.3333V13.166H4.66667V11.4993Z" fill="#3DB280"/>
    </svg>
  },
  {
    label: 'Payments',
    value: '3 Pending',
    icons: (props: SVGProps<SVGSVGElement>)=><svg {...props} viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.50326 0.5H16.5033C16.9635 0.5 17.3366 0.873092 17.3366 1.33333V14.6667C17.3366 15.1269 16.9635 15.5 16.5033 15.5H1.50326C1.04302 15.5 0.669922 15.1269 0.669922 14.6667V1.33333C0.669922 0.873092 1.04302 0.5 1.50326 0.5ZM15.6699 8.00001H2.33659V13.8333H15.6699V8.00001ZM15.6699 4.66667V2.16667H2.33659V4.66667H15.6699Z" fill="#B337E4"/>
    </svg>
    
  },
  {
    label: 'AI Health Assistant',
    value: 'Get suggestions based on symptoms',
    icons: (props: SVGProps<SVGSVGElement>)=><svg {...props} viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.25 1.66602C11.25 2.03622 11.0891 2.36884 10.8333 2.59772V4.16602H15C16.3807 4.16602 17.5 5.28531 17.5 6.66602V14.9993C17.5 16.3801 16.3807 17.4993 15 17.4993H5C3.61929 17.4993 2.5 16.3801 2.5 14.9993V6.66602C2.5 5.28531 3.61929 4.16602 5 4.16602H9.16667V2.59772C8.91092 2.36884 8.75 2.03622 8.75 1.66602C8.75 0.975657 9.30967 0.416016 10 0.416016C10.6903 0.416016 11.25 0.975657 11.25 1.66602ZM5 5.83268C4.53977 5.83268 4.16667 6.20578 4.16667 6.66602V14.9993C4.16667 15.4596 4.53977 15.8327 5 15.8327H15C15.4602 15.8327 15.8333 15.4596 15.8333 14.9993V6.66602C15.8333 6.20578 15.4602 5.83268 15 5.83268H10.8333H9.16667H5ZM1.66667 8.33268H0V13.3327H1.66667V8.33268ZM18.3333 8.33268H20V13.3327H18.3333V8.33268ZM7.5 12.0827C8.19036 12.0827 8.75 11.523 8.75 10.8327C8.75 10.1423 8.19036 9.58268 7.5 9.58268C6.80964 9.58268 6.25 10.1423 6.25 10.8327C6.25 11.523 6.80964 12.0827 7.5 12.0827ZM12.5 12.0827C13.1903 12.0827 13.75 11.523 13.75 10.8327C13.75 10.1423 13.1903 9.58268 12.5 9.58268C11.8097 9.58268 11.25 10.1423 11.25 10.8327C11.25 11.523 11.8097 12.0827 12.5 12.0827Z" fill="#3762E4"/>
    </svg>
    
  }
]

const upcomingAppointments = [
  {
    doctor: 'Dr. Michael Chen',
    status: 'Upcoming',
    specialty: 'General Medicine',
    datetime: 'Tomorrow, 10:30 AM - 11:00 AM',
    type: 'Virtual Consultation',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    doctor: 'Dr. Emily Rodriguez',
    status: 'Confirmed',
    specialty: 'Dermatology',
    datetime: 'June 15, 2:00 PM - 2:30 PM',
    type: 'In-Person Visit',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  }
]

const recentRecords = [
  {
    type: 'Prescription',
    action: 'Download',
    doctor: 'Dr. Michael Chen',
    date: 'May 28, 2025',
    details: [
      { label: 'Ibuprofen 400mg', instruction: 'Take 1 tablet every 6 hours as needed for pain' },
      { label: 'Acetaminophen 500mg', instruction: 'Take 2 tablets every 8 hours as needed for fever' }
    ]
  },
  {
    type: 'Lab Results',
    action: 'Download',
    test: 'Complete Blood Count',
    date: 'May 15, 2025',
    results: [
      { label: 'Hemoglobin', value: '13.5 g/dL' },
      { label: 'WBC Count', value: '6.2 x10³/µL' },
      { label: 'Platelets', value: '250 x10³/µL' },
      { label: 'Hematocrit', value: '40.5%' }
    ]
  }
]

const Dashboard = () => {
  useRoleGuard('patient');
  const [showWelcome, setShowWelcome] = useState(true)
  const [emergency, setEmergency] = useState(false)
  const handleCta = (ta:typeof cta[0]) => {
    switch(ta.label){
      case 'Book Appointments':
        // TODO: Implement booking logic
        break;
      case 'Upload Records':
        // TODO: Implement upload logic
        break;
      case 'Emergency':
        setEmergency(!emergency)
        // TODO: Implement emergency logic
        break;
      case 'Find Facilities':
        // TODO: Implement find facilities logic
        break;
      default:
        break;
    }
  }
  


  return <PageWrapper content={<>
    <WelcomePrompt open={showWelcome} close={()=>setShowWelcome(false)}/>
    <section className="w-full flex gap-5 overflow-x-auto">
      {
        stats.map((stat, idx)=>{
          return <aside key={`stat-${idx}`} className="border h-[140px] w-[260px] min-w-[260px] rounded-2xl p-4 flex flex-col gap-2 justify-between">
            <section className="w-full flex items-center gap-2">
              <div className="size-12 min-w-12 border rounded-full flex items-center justify-center">
                <stat.icons className='size-4'/>
              </div>
              <div className="flex flex-col">
                <small>{stat.label}</small>
                <p>{stat.value}</p>
              </div>
            </section>
            <section className="w-full border-t pt-2">
              <Button variant={'outline'} className='w-full '>View All</Button>
            </section>
          </aside>
        })
      }
    </section>

    <section className="w-full flex gap-5 overflow-x-auto">
      {
        cta.map((cta, idx)=>{
          return <aside onClick={()=>handleCta(cta)} key={`cta-${idx}`} className={`border ${cta.hoverBg} cursor-pointer h-[140px] w-[260px] min-w-[260px] rounded-2xl p-4 flex flex-col gap-2 justify-center items-center`}>
          <div className={`size-12 rounded-full flex items-center justify-center ${cta.bg}`}>
            <cta.icon className='size-4'/>
          </div>
          <p>{cta.label}</p>
        </aside>
        })
      }
    </section>

    <section className="w-full grid xl:grid-cols-2 gap-5">
      <div className="w-full rounded-xl p-4 pt-0 flex flex-col gap-4 border h-[400px] overflow-y-auto">
        <aside className="w-full flex items-center justify-between min-h-16 border-b bg-white sticky top-0 z-10">
          <p className='font-[500]'>Recent Health Records</p>
          <Button variant={'outline'}>View All</Button>
        </aside>
        {
          upcomingAppointments.map((apt, idx)=>{
            return <div key={`up-apt-${idx}`} className="w-full border rounded-xl p-3 flex justify-between ">
              <section className="w-full flex gap-2">
                <div className="size-12 rounded-full border overflow-hidden">
                  <img src={apt.image} alt="" className="size-full object-cover" />
                </div>
                <div className="flex flex-col gap-1">
                  <p>{apt.doctor}</p>
                  <small className='text-gray-600'>{apt.specialty}</small>
                  <aside className="flex flex-col gap-1 mt-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className='size-4'/>
                      {apt.datetime}
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      {
                        apt.type === 'Virtual Consultation' ? <Video className='size-4'/> : <Hospital className='size-4'/>
                      }
                      {apt.datetime}
                    </div>
                  </aside>
                </div>
              </section>
              <div className={`min-w-fit px-4 h-8 flex items-center rounded-xl text-sm ${apt.status === 'Confirmed'?'bg-emerald-50 text-emerald-600':'bg-indigo-50 text-indigo-600'}`}>{apt.status}</div>
            </div>
          })
        }
      </div>
      <div className="w-full rounded-xl p-4 pt-0 flex flex-col gap-4 border h-[400px] overflow-y-auto">
        <aside className="w-full flex items-center justify-between min-h-16 border-b bg-white sticky top-0 z-10">
          <p className='font-[500]'>Upcoming Appointments</p>
          <Button variant={'outline'}>View All</Button>
        </aside>
        {
          recentRecords.map((rec, idx)=>{
            return <div key={`rec-${idx}`} className={`w-full min-h-fit border rounded p-3 pl-5 py-3 flex flex-col gap-4 relative overflow-hidden`}>
              <div className={`border-l-[0.6rem] ${rec.type === 'Prescription'?'border-indigo-600':'border-emerald-600'} absolute left-0 top-0 h-full `}/>
              <section className="w-full flex items-center justify-between gap-2">
                <div className="flex flex-col">
                  <p>{rec.type}</p>
                  <span className="text-sm text-gray-700">{rec.doctor||rec.test} ..{rec.date}</span>
                </div>
                <Button variant={'outline'} className='px-2 flex text-sm rounded items-center border-primary text-primary'>
                  <Download className='size-4 text-primary'/>
                  Download
                </Button>
              </section>
              <section className="w-full p-3 rounded-lg text-gray-600 bg-gray-100">
                {
                  rec.type === 'Prescription'?<div className='flex flex-col'>
                    <span className="text-sm text-gray-600">Medications</span>
                    {
                      rec.details?.map((det,idx)=>{
                        return <span key={`rec-detail-${idx}`} className="text-sm list-item ml-5">
                          {det.label} - {det.instruction}
                        </span>
                      })
                    }
                  </div> : <div className="w-full grid grid-cols-2">
                    {
                      rec.results?.map((res, idx)=>{
                        return <span key={`rec-res-${idx}`} className='text-sm'>{res.label}: {res.value}</span>
                      })
                    }
                  </div>
                }
              </section>
            </div>
          })
        }
      </div>
    </section>


    {/* Modals ..... */}


    <Dialog open={emergency} onOpenChange={()=>setEmergency(false)}>
        <DialogContent className="main-content sm:w-[400px] flex flex-col items-center gap-3">
          <DialogTitle/>
          <section className="size-16 rounded-full bg-gradient-to-b from-red-600 via-white to-white flex justify-center items-center">
            <div className="size-[97%] mt-1 rounded-full flex items-center justify-center bg-white">
            <svg width="26" height="28" viewBox="0 0 26 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.33399 24.666V16.666C2.33399 10.775 7.10962 5.99935 13.0006 5.99935C18.8917 5.99935 23.6673 10.775 23.6673 16.666V24.666H25.0006V27.3327H1.00066V24.666H2.33399ZM5.00066 16.666H7.66733C7.66733 13.7205 10.0551 11.3327 13.0006 11.3327V8.66602C8.58238 8.66602 5.00066 12.2477 5.00066 16.666ZM11.6673 0.666016H14.334V4.66602H11.6673V0.666016ZM23.3716 4.4095L25.2572 6.29512L22.4288 9.12355L20.5432 7.23792L23.3716 4.4095ZM0.744141 6.29512L2.62975 4.4095L5.45818 7.23792L3.57257 9.12355L0.744141 6.29512Z" fill="#E53E3E"/>
            </svg>
            </div>
          </section>
          <p className="font-[500] text-lg">Emergency Services</p>

          <div className="flex flex-col w-full rounded-xl bg-red-50 gap-3 p-3 text-gray-600 text-sm">
            <div className='flex flex-col'>
              <span>Location detected: 123 Main Street</span>
              <span>Nearest hospital: Memorial Hospital (1.2 miles)</span>
            </div>

            <span>Ambulance ETA:<br/><span className="text-xl font-semibold text-red-500">8 minutes</span></span>
          </div>

          <div className="w-full p-3 rounded-xl bg-gray-100 flex flex-col gap-4">
            <p>Emergency Information</p>
            <p className="text-sm text-gray-700">An ambulance has been dispatched to your location. Please remain calm and stay on the line.</p>
          </div>

          <div className="w-full mt-2 grid grid-cols-2 gap-3">
            <Button variant={`outline`} className='w-full'>Cancel</Button>
            <Button className='w-full'>Call 911</Button>
          </div>
        </DialogContent>
      </Dialog>
  </>}/>
}

export default Dashboard
