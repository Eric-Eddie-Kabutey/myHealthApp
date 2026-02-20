'use client';

import { useMainStore } from '@/store/GlobalStore'
import { Bell, ChevronDown, Menu, Plus, Search, Shield, User } from 'lucide-react'
import React, { Suspense, useEffect, useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from './ui/button';
import Link from 'next/link';
import routes from '@/lib/routes';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import useUserStore from '@/store/UserStore';
import { NAuthentication } from '@/types/auth.type';
import { useRouter } from 'next/navigation';
import Notifications from './Notifications';
import GlobalSearch from './GlobalSearch';


type props = {
  showMobileMenu: boolean;
  setShowMobileMenu: () => void;
}

const roles: { label: NAuthentication.TRoleType; link: string }[] = [
  { label: 'patient', link: routes.dashboard },
  { label: 'doctor', link: routes.doctor.dashboard },
  { label: 'institution', link: routes.institution.dashboard },
  { label: 'operations', link: routes.operations.dashboard },
  { label: 'nurse', link: routes.nurse.dashboard },
  { label: 'officer', link: routes.officer.dashboard },
  { label: 'finance', link: routes.finance.dashboard },
  { label: 'support', link: routes.customerSupport.dashboard },
  { label: 'dispensary', link: routes.dispensary.dashboard },
  { label: 'admin', link: routes.admin.dashboard },
];

function DashboardNav({ showMobileMenu, setShowMobileMenu }: props) {
  const router = useRouter();
  const { PageTitle, setPageTitle } = useMainStore();
  const { user, setUser } = useUserStore();
  const [showProfileSetup, setShowProfileSetup] = useState(false);

  useEffect(() => {
    setPageTitle(user?.firstName||'Admin', 'Welcome back', (props:any)=><Shield {...props}/>)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='min-h-20 w-full px-5 flex items-center justify-between border-b text-sm bg-white sticky top-0'>
      <section className="flex items-center gap-2">
        <button onClick={() => setShowMobileMenu()} className='lg:hidden'>
          {showMobileMenu ? <Plus className='size-5' /> : <Menu className='size-5' />}
        </button>
        <div className="size-12 border rounded-full flex items-center justify-center">
          {PageTitle?.icon ? <PageTitle.icon className={`size-5`}/> : <User className='size-5' />}
        </div>
        <div className="flex flex-col items-start">
          <p className='leading-5'>{PageTitle?.name || ''}</p>
          <p className="text-gray-500 text-sm">{PageTitle?.description || ''}</p>
        </div>
      </section>

      <section className="flex items-center gap-3">
        <GlobalSearch/>
        <Notifications/>
        <aside className="h-12 border rounded-lg flex items-center gap-2 px-3">
          <div className="size-9 border rounded-full flex items-center justify-center">
            <User className='size-5' />
          </div>
          <p>Profile Completeness</p>
          <div className="size-9 bg-primary text-white rounded-full flex justify-center items-center text-xs">
            100%
          </div>
          {/* <ChevronDown className='size-5' /> */}
        </aside>
        <Popover>
          <PopoverTrigger asChild>
            <Button className='flex items-center gap-3 h-12 rounded-lg relative capitalize'>
              <span className="absolute -top-2 -left-2 flex items-center gap-2 text-sm bg-white text-primary border px-1 rounded">
                <div className='relative'>
                  <div className='size-2 rounded-full bg-primary absolute animate-ping' />
                  <div className='size-2 rounded-full bg-primary' />
                </div>
                <small>Demo</small>
              </span>
              {user?.role}
              <ChevronDown className='size-5' />
            </Button>
          </PopoverTrigger>
          <PopoverContent side={'bottom'} className="w-[200px] text-[14px] flex flex-col gap-1 mr-5 rounded-xl p-2 py-3">
            {
              roles.map((role, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    setUser({ role: role.label }); // Partial update
                    router.replace(role.link);
                  }}
                  className={`w-full capitalize h-8 px-2 hover:bg-gray-100 ${role.label === user?.role ? 'bg-primary/30' : ''} rounded flex items-center cursor-pointer`}
                >
                  {role.label}
                </div>
              ))
            }
          </PopoverContent>
        </Popover>
      </section>

      <Dialog open={showProfileSetup} onOpenChange={() => setShowProfileSetup(false)}>
        <DialogContent className="main-content sm:w-[400px] flex flex-col items-center gap-3">
          <DialogTitle />
          <section className="size-16 rounded-full bg-gradient-to-b from-primary via-white to-white flex justify-center items-center">
            <div className="size-full mt-1 rounded-full flex items-center justify-center bg-white">
              <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M29.153 5.99925H30.3343C31.2548 5.99925 32.001 6.74545 32.001 7.66591V19.3325C32.001 20.253 31.2548 20.9992 30.3343 20.9992H27.001L20.0538 11.2731C19.2248 10.1126 17.7495 9.60805 16.3835 10.0178L12.2414 11.2605C11.0668 11.6128 9.79365 11.2919 8.92653 10.4247L8.4386 9.9368C7.6949 9.19311 7.8175 7.95495 8.6926 7.37155L17.6943 1.37038C18.7927 0.63823 20.2193 0.623046 21.333 1.33168L28.2583 5.73868C28.5257 5.90886 28.8362 5.99925 29.153 5.99925ZM5.37912 19.8238L2.68618 22.1802C1.9005 22.8675 1.93307 24.0998 2.754 24.745L11.3219 31.4768C12.1221 32.1055 13.2939 31.8767 13.7987 30.9932L14.9718 28.9402C15.6885 27.686 15.5158 26.113 14.5442 25.0442L10.0406 20.0902C8.81883 18.7462 6.74602 18.6278 5.37912 19.8238ZM8.74327 4.33268H2.00065C1.08018 4.33268 0.333984 5.07888 0.333984 5.99935V18.5257C0.333984 19.2063 0.541901 19.8615 0.917634 20.41C0.957484 20.3723 0.998251 20.3352 1.03993 20.2987L3.73287 17.9423C6.12493 15.8493 9.75237 16.0565 11.8905 18.4085L16.3941 23.3625C18.0945 25.2328 18.3967 27.9857 17.1425 30.1805L16.052 32.089C16.9902 32.4445 18.059 32.3643 18.949 31.8303L26.2976 27.4212C27.1316 26.9207 27.3617 25.8153 26.7966 25.0237L18.0188 12.7262C17.8115 12.4361 17.4426 12.3099 17.1012 12.4124L12.9591 13.655C10.9036 14.2717 8.67552 13.71 7.15808 12.1925L6.67013 11.7046C4.8109 9.84533 5.1174 6.74993 7.30517 5.29141L8.74327 4.33268Z" fill="#34765A" />
              </svg>
            </div>
          </section>
          <p className="font-[500] text-lg">Welcome to Ricia Care</p>
          <p className="text-gray-600 text-center text-sm">We’re glad to have you on board.To get the best out of your Ricia Care experience, please take a moment to complete your profile. This helps us personalize your dashboard and ensure smooth access to all features. It only takes a minute!</p>

          <div className="w-full mt-2 grid grid-cols-2 gap-3">
            <Button variant={`outline`} className='w-full'>Skip</Button>
            <Link href={routes.profile} className='w-full'>
              <Button className='w-full'>Go to Profile</Button>
            </Link>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default DashboardNav