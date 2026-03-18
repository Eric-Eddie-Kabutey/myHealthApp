'use client';

import React from 'react';
import HeroSection from '@/components/services/HeroSection';
import VirtualCareTabs from '@/components/services/VirtualCareTabs';
import TrustedByMarquee from '@/components/services/Trustedbymarquee';
import HeroBanner from '@/components/services/Herobanner';


import { Button } from '@/components/ui/button';

export default function ServicesPage() {
  const content = (
    <main className="w-full flex flex-col">
      <HeroSection />


      <section className="w-full py-[4rem] flex flex-col items-center bg-white">
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-800 mb-12 text-center">The care you need, all in one place</h2>
        <div className="w-full xl:w-[1200px] flex lg:justify-center gap-10 overflow-x-auto px-6 snap-x snap-mandatory">
          
          <aside className="snap-center min-w-[300px] sm:w-[350px] group rounded-[2rem] bg-white shadow border-t flex flex-col justify-end relative h-[350px] md:h-[450px] overflow-hidden">
            <img src="https://www.shutterstock.com/image-photo/doctors-talking-operation-600nw-2451099677.jpg" alt="clinicians" className="w-full h-[200px] object-cover group-hover:scale-105 transition-all duration-300" />
            <div className="absolute cursor-pointer size-full top-0 left-0 p-4 sm:p-7 sm:py-12 pb-7 flex flex-col justify-between transition-all duration-300">
              <div className="flex flex-col gap-2">
                <b className="text-base sm:text-lg text-purple-900 flex items-center gap-2"><div className="size-2 rounded-full bg-black" />For Clinicians</b>
                <p className="text-slate-700 text-[1.5rem] sm:text-[2rem] leading-[1.7rem] sm:leading-[2.3rem] font-bold">Exceptional Care Begins with RiciaCare</p>
              </div>
              <Button variant={'outline'} className="px-[1rem] rounded-[2rem] w-fit h-10 mt-2 text-black bg-white transition-all duration-500 border-2 border-white group flex items-center gap-2">
                <div className="size-[0.4rem] bg-black rounded-full animate-ping transition-all duration-300" />
                Join the team
              </Button>
            </div>
          </aside>

          <aside className="snap-center min-w-[300px] sm:w-[350px] group rounded-[2rem] bg-white shadow border-t flex flex-col justify-end relative h-[350px] md:h-[450px] overflow-hidden">
            <img src="https://media.istockphoto.com/id/1276732125/photo/african-american-video-conferencing-with-doctor.jpg?s=612x612&w=0&k=20&c=d-NzHONUc7RDxhkEOWEcxQcTdLzL7wCsUCMutjrlco4=" alt="clinicians" className="w-full h-[200px] object-cover group-hover:scale-105 transition-all duration-300" />
            <div className="absolute cursor-pointer size-full top-0 left-0 p-4 sm:p-7 sm:py-12 pb-7 flex flex-col justify-between transition-all duration-300">
              <div className="flex flex-col gap-2">
                <b className="text-base sm:text-lg text-purple-900 flex items-center gap-2"><div className="size-2 rounded-full bg-black" />For Individuals</b>
                <p className="text-slate-700 text-[1.5rem] sm:text-[2rem] leading-[1.7rem] sm:leading-[2.3rem] font-bold">Anytime, anywhere, anything care</p>
              </div>
              <Button variant={'outline'} className="px-[1rem] rounded-[2rem] w-fit h-10 mt-2 text-black bg-white transition-all duration-500 border-2 border-white group flex items-center gap-2">
                <div className="size-[0.4rem] bg-black rounded-full animate-ping transition-all duration-300" />
                Get care now
              </Button>
            </div>
          </aside>

          <aside className="snap-center min-w-[300px] sm:w-[350px] group rounded-[2rem] bg-white shadow border-t flex flex-col justify-end relative h-[350px] md:h-[450px] overflow-hidden">
            <img src="https://www.shutterstock.com/image-photo/healthcare-worker-talking-patient-through-600nw-2446150243.jpg" alt="clinicians" className="w-full h-[200px] object-cover group-hover:scale-105 transition-all duration-300" />
            <div className="absolute cursor-pointer size-full top-0 left-0 p-4 sm:p-7 sm:py-12 pb-7 flex flex-col justify-between transition-all duration-300">
              <div className="flex flex-col gap-2">
                <b className="text-base sm:text-lg text-purple-900 flex items-center gap-2"><div className="size-2 rounded-full bg-black" />For Organizations</b>
                <p className="text-slate-700 text-[1.5rem] sm:text-[2rem] leading-[1.7rem] sm:leading-[2.3rem] font-bold">From hospital to home comfortably</p>
              </div>
              <Button variant={'outline'} className="px-[1rem] rounded-[2rem] w-fit h-10 mt-2 text-black bg-white transition-all duration-500 border-2 border-white group flex items-center gap-2">
                <div className="size-[0.4rem] bg-black rounded-full animate-ping transition-all duration-300" />
                Ways we can help
              </Button>
            </div>
          </aside>

        </div>
      </section>

  <VirtualCareTabs />
  <TrustedByMarquee />
  <HeroBanner />
    </main>
  );

  return (
    <div className="main-content w-full h-fit flex flex-col md:text-[15px] text-sm">
      {content}
    </div>
  );
}

function ServiceCard({ title, desc, icon }: { title: string; desc: string; icon: string }) {
  return (
    <div className="p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow text-left bg-slate-50/30">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-slate-800 mb-3">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{desc}</p>
    </div>
  );
}
