'use client';

import Hero from '@/components/Hero';
import { Button } from '@/components/ui/button';
import routes from '@/lib/routes';
import { ArrowRight, Check, Heart } from 'lucide-react';
import Link from 'next/link';
import React from 'react'
import { useState } from "react";

const therapists = [
  {
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Dr. Ama Mensah",
    specialty: "Clinical Psychologist",
    description: "Specializes in anxiety, depression, and trauma recovery. Empathetic and solution-focused.",
    whatsapp: "233501234567",
  },
  {
    img: "https://randomuser.me/api/portraits/women/68.jpg",
    name: "Ms. Kwame Adjei",
    specialty: "Family & Couples Therapist",
    description: "Helps families and couples build stronger relationships and resolve conflicts.",
    whatsapp: "233541234567",
  },
  {
    img: "https://randomuser.me/api/portraits/women/65.jpg",
    name: "Dr. Efua Owusu",
    specialty: "Child & Adolescent Therapist",
    description: "Expert in supporting children and teens with emotional and behavioral challenges.",
    whatsapp: "233551234567",
  },
  {
    img: "https://randomuser.me/api/portraits/men/31.jpg",
    name: "Mr. Kofi Boateng",
    specialty: "Psychiatrist",
    description: "Provides medication management and holistic mental health care for adults.",
    whatsapp: "233561234567",
  },
];

function MentalHealth() {
  return (
    <div>
      <main className="min-h-[100dvh] h-auto flex flex-col items-center">
        <Hero className={`h-auto md:h-[650px]`} content={
          <div className='w-full h-full flex flex-col pb-[2rem] items-center justify-end gap-3 bg-emerald-50/20 text-center'>
            <section className="w-full h-full xl:max-w-[1200px] flex flex-col md:flex-row items-end gap-8 px-4">
              <div className="w-full lg:h-auto h-[350px] md:h-[400px] flex flex-col md:items-start items-center md:text-left text-center lg:justify-normal justify-end gap-3">
                <span className="emerald-700 flex items-center gap-2 text-emerald-700 ">Mental Health <Heart className='size-4.5 fill-emerald-700 text-emerald-700' /></span>
                <h1 className="text-2xl sm:text-3xl md:text-4</div>xl lg:text-[3rem] leading-tight font-bold">Your Journey to Emotional Wellness</h1>
                <p className="text-sm sm:text-base lg:text-lg xl:text-xl">Discover inner peace and emotional balance with personalized therapy sessions. Connect with licensed professionals who truly understand you - all from the comfort and privacy of your home.</p>
                <Button className='md:h-12 rounded-3xl w-fit px-8 font-semibold md:my-5'>Start Healing Today</Button>
              </div>
              <div className="w-[110%] -mr-7 md:h-full flex md:justify-end">
                <section className="min-w-[80px] h-[40%] rounded-b-full bg-cyan-100 hidden md:block"></section>
                <section className="min-w-full md:min-w-[250px] md:h-full flex md:flex-col justify-start md:justify-end md:pb-[20%] rounded-l-full md:rounded-b-full bg-gradient-to-r md:bg-gradient-to-b from-[#00B5E2] via-[#00B5E2] via-blue-500 to-[#6240E8]">
                  <div className="size-[180px] md:size-[250px] bg-white overflow-hidden rounded-full md:mx-auto">
                    <img src="https://images.unsplash.com/photo-1470434767159-ac7bf1b43351?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="main-content size-full object-cover" />
                  </div>
                </section>
                <section className="w-full h-[70%] rounded-b-full bg-[#351F65] hidden md:block"></section>
              </div>
            </section>
          </div>
        } />

        <section className="w-full bg-white z-10 flex flex-col items-center gap-5 py-20 px-4">
          <div className="w-full xl:max-w-[1200px] flex flex-col items-center gap-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl w-[80%] md:w-[800px] lg:w-[700px] font-bold text-[#351F65] text-center leading-tight">
              Begin your journey to better mental health with Ricia Care
            </h1>
            <div className="text-center text-gray-700 text-base sm:text-lg leading-relaxed">
              <p className='lg:text-base text-sm'>
                Ricia Care connects you with compassionate, licensed therapists who understand your unique needs. Our personalized approach helps you find balance, build resilience, and feel supported every step of the way. Join the many individuals who have found hope and healing with us.
              </p>
            </div>

            <div className="w-full max-w-4xl">
              <h2 className="text-lg sm:text-xl font-bold text-[#351F65] text-center mb-4 lg:mb-12">
                Support for a wide range of concerns:
              </h2>
              <div className="flex flex-col items-center md:grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
                <div className="space-y-3 lg:space-y-6 lg:text-base text-sm w-full min-[405px]:w-[400px]">
                  <div className="flex items-start gap-3">
                    <div className="size-5 rounded-full bg-[#6240e81c] flex items-center justify-center mt-1 flex-shrink-0">
                      <Check className='size-4 text-indigo-600' />
                    </div>
                    <span className="text-gray-700">Stress, anxiety, or feeling overwhelmed</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="size-5 rounded-full bg-[#6240e81c] flex items-center justify-center mt-1 flex-shrink-0">
                      <Check className='size-4 text-indigo-600' />
                    </div>
                    <span className="text-gray-700">Low mood or loss of motivation</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="size-5 rounded-full bg-[#6240e81c] flex items-center justify-center mt-1 flex-shrink-0">
                      <Check className='size-4 text-indigo-600' />
                    </div>
                    <span className="text-gray-700">Difficulty sleeping or fatigue</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="size-5 rounded-full bg-[#6240e81c] flex items-center justify-center mt-1 flex-shrink-0">
                      <Check className='size-4 text-indigo-600' />
                    </div>
                    <span className="text-gray-700">Managing daily challenges and transitions</span>
                  </div>
                </div>
                <div className="space-y-3 lg:space-y-6 lg:text-base text-sm w-full min-[405px]:w-[400px]">
                  <div className="flex items-start gap-3">
                    <div className="size-5 rounded-full bg-[#6240e81c] flex items-center justify-center mt-1 flex-shrink-0">
                      <Check className='size-4 text-indigo-600' />
                    </div>
                    <span className="text-gray-700">Relationship and family issues</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="size-5 rounded-full bg-[#6240e81c] flex items-center justify-center mt-1 flex-shrink-0">
                      <Check className='size-4 text-indigo-600' />
                    </div>
                    <span className="text-gray-700">Coping with trauma or loss</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="size-5 rounded-full bg-[#6240e81c] flex items-center justify-center mt-1 flex-shrink-0">
                      <Check className='size-4 text-indigo-600' />
                    </div>
                    <span className="text-gray-700">Mood changes and emotional regulation</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="size-5 rounded-full bg-[#6240e81c] flex items-center justify-center mt-1 flex-shrink-0">
                      <Check className='size-4 text-indigo-600' />
                    </div>
                    <span className="text-gray-700">Medication management (psychiatry available)</span>
                  </div>
                </div>
              </div>
            </div>

            <Link href={routes.signup} className="flex items-center gap-1 text-indigo-700 mt-4">
              Get Started
              <ArrowRight className='size-5' />
            </Link>

            <div className="w-full min-[701px]:w-[700px] text-nowrap grid grid-cols-2 min-[701px]:grid-cols-4 justify-center gap-4">
              {[
                { value: '100k+', label: 'Sessions Completed' },
                { value: '24/7', label: 'Support Availability' },
                { value: '98%', label: 'Satisfaction Rate' },
                { value: '50+', label: 'Expert Therapists' },
              ].map((stat, idx) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center justify-center px-6 py-5 rounded-xl bg-[#f5f6fa] shadow-sm min-w-[150px] w-full sm:w-auto"
                >
                  <span className="text-2xl sm:text-3xl font-bold text-[#008940]">{stat.value}</span>
                  <span className="text-sm text-gray-600 mt-1 text-center">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>


        <section className="w-full bg-[#fbf8ff] z-10 py-20 px-4">
          <div className="w-full xl:max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-4 lg:gap-8">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#351F65] leading-tight">
                Why Ricia Care?
              </h1>
              <div className="text-gray-700 text-base xl:text-lg">
                <p>
                  Ricia Care is included by many health plans and employers.
                  <Link href={routes.signup} className="text-blue-600 underline cursor-pointer ml-1">Create your account</Link> to view your services and pricing.
                </p>
              </div>
              <WhyRiciaCare />
              <Link href={routes.signup} className="">
                <Button className="h-10 px-8 rounded-full bg-[#6240E8] hover:bg-[#5433d4] text-white font-semibold w-fit">
                  Find my therapist
                </Button>
              </Link>
            </div>

            <div className="relative hidden md:flex justify-center items-center">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-40 h-40 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-blue-200 via-blue-300 to-blue-400 opacity-30"></div>
                <div className="absolute top-5 right-5 w-16 h-16 sm:w-32 sm:h-32 rounded-full bg-green-300 opacity-40"></div>
                <div className="absolute bottom-10 left-2 w-12 h-12 sm:w-24 sm:h-24 rounded-full bg-purple-300 opacity-40"></div>
                <div className="absolute top-2 left-10 w-8 h-8 sm:w-16 sm:h-16 rounded-full bg-cyan-300 opacity-40"></div>
              </div>
              <div className="relative z-10 flex flex-col gap-4">
                <div className="bg-white rounded-lg shadow-lg p-2 sm:p-4 w-40 h-24 sm:w-80 sm:h-48 border">
                  <div className="w-full h-full bg-gray-100 rounded flex items-center justify-center">
                    <div className="w-10 h-10 sm:w-20 sm:h-20 bg-gray-300 rounded-full"></div>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-2 sm:p-3 w-24 h-40 sm:w-48 sm:h-80 border ml-4 sm:ml-8">
                  <div className="w-full h-full bg-gray-100 rounded flex flex-col gap-2 p-2 sm:p-3">
                    <div className="w-full h-4 sm:h-8 bg-gray-300 rounded"></div>
                    <div className="w-8 h-8 sm:w-16 sm:h-16 bg-gray-300 rounded-full mx-auto"></div>
                    <div className="flex gap-1 sm:gap-2 justify-center">
                      <div className="w-4 h-4 sm:w-8 sm:h-8 bg-red-400 rounded-full"></div>
                      <div className="w-4 h-4 sm:w-8 sm:h-8 bg-gray-300 rounded-full"></div>
                      <div className="w-4 h-4 sm:w-8 sm:h-8 bg-blue-400 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="w-full bg-white z-10 py-20 px-4">
          <div className="w-full xl:max-w-[1200px] mx-auto flex flex-col items-center">
            <div className="flex flex-col items-center gap-4 text-center">
              <h1 className="text-2xl sm:text-3xl md:text-4xl xl:w-[80%] font-bold text-[#351F65] leading-tight">
                Meet Our Mental Health Providers
              </h1>
              <p className='xl:w-[70%] text-sm sm:text-base lg:text-lg'>
                Our therapists come from diverse backgrounds and specialties. With virtual sessions, you can connect with the right professional for your needs, wherever you are.
              </p>
              <h2 className="text-lg sm:text-xl font-bold text-[#351F65] mb-12">
                Get to know some of our caring therapists and psychiatrists.
              </h2>
            </div>
            <div className="w-full flex items-center gap-2">
              <button
                type="button"
                aria-label="Scroll left"
                className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition disabled:opacity-40"
                onClick={() => {
                  const container = document.getElementById('therapist-scroll');
                  if (container) container.scrollBy({ left: -300, behavior: 'smooth' });
                }}
              >
                <ArrowRight className="size-5 rotate-180 text-gray-600" />
              </button>
              <div
                id="therapist-scroll"
                className="w-full flex overflow-x-auto gap-6 scroll-smooth"
                style={{ scrollBehavior: 'smooth' }}
              >
                {[...therapists, ...therapists].map((therapist, idx) => (
                  <div key={idx} className="bg-gray-50 rounded-lg p-4 flex flex-col items-center min-w-[220px] sm:min-w-[250px]">
                    <img src={therapist.img} alt={therapist.name} className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mb-4 object-cover" />
                    <h3 className="text-base sm:text-lg font-semibold text-[#351F65]">{therapist.name}</h3>
                    <span className="text-primary font-medium mb-2 text-xs sm:text-sm">{therapist.specialty}</span>
                    <p className="text-gray-600 text-xs sm:text-sm text-center mb-3">{therapist.description}</p>
                    <Link href={routes.signup} className="flex items-center gap-1 text-indigo-800 mt-4 text-xs sm:text-sm">
                      Meet {therapist.name}
                      <ArrowRight className='size-4 ml-1' />
                    </Link>
                  </div>
                ))}
              </div>
              <button
                type="button"
                aria-label="Scroll right"
                className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition disabled:opacity-40"
                onClick={() => {
                  const container = document.getElementById('therapist-scroll');
                  if (container) container.scrollBy({ left: 300, behavior: 'smooth' });
                }}
              >
                <ArrowRight className="size-5 text-gray-600" />
              </button>
            </div>
          </div>
        </section>


        <section className="w-full bg-purple-950 z-10 py-16 flex flex-col items-center gap-4 px-4">
          <div className="w-full xl:max-w-[1200px] mx-auto flex flex-col items-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center">
              Ready to take the first step?
            </h1>
            <p className="text-gray-200 text-center my-2 xl:w-[60%] text-base sm:text-lg">
              Join thousands who have found support and healing with Ricia Care. Your journey to better mental health starts here.
            </p>
            <Link href={routes.signup} className="mt-6">
              <Button className="h-12 px-8 sm:px-16 rounded-full bg-white hover:bg-purple-50 text-purple-950 font-semibold w-fit">
                Get Started
              </Button>
            </Link>
          </div>
        </section>



      </main>
    </div>
  )
}

{/* Accordion Items */ }
const WhyRiciaCareList = [
  {
    title: "Personalized support",
    content: "Get matched with therapists who understand your unique needs and provide care tailored to you.",
  },
  {
    title: "Convenient access",
    content: "Connect from anywhere, on your schedule, with secure online sessions and flexible appointment times.",
  },
  {
    title: "Qualified professionals",
    content: "Work with experienced, licensed therapists dedicated to your mental health and wellbeing.",
  },
  {
    title: "Progress you can see",
    content: "Set goals, monitor your growth, and receive ongoing encouragement throughout your journey.",
  },
];

function WhyRiciaCare() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-4 w-full max-w-lg sm:max-w-xl md:max-w-2xl mx-auto">
      {WhyRiciaCareList.map((item, idx) => (
        <div key={item.title} className="border-b border-gray-200 pb-4">
          <button
            type="button"
            className="flex items-center justify-between w-full cursor-pointer px-2 lg:py-2 sm:px-4 sm:py-3"
            onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
            aria-expanded={openIdx === idx}
            aria-controls={`accordion-content-${idx}`}
          >
            <h3 className="text-base lg:text-lg font-semibold text-[#351F65]">{item.title}</h3>
            <svg
              className={`size-4 sm:size-5 text-gray-400 transform transition-transform duration-200 ${openIdx === idx ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {openIdx === idx && (
            <div
              id={`accordion-content-${idx}`}
              className="mt-3 text-gray-700 text-sm sm:text-base px-2 sm:px-4"
            >
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default MentalHealth