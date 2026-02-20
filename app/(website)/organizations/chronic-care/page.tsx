'use client';

import FAQs from '@/components/FAQs';
import Hero from '@/components/Hero';
import { Button } from '@/components/ui/button';
import routes from '@/lib/routes';
import { ArrowRight, ChartArea, Check, ChevronRight, FolderHeart, Heart, Users2Icon } from 'lucide-react';
import Link from 'next/link';
import React from 'react'
import { useState } from "react";
import NewsCarousel from '../Includes/NewsCarousel';

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

function ChronicCare() {
    return (
        <div>
            <main className="min-h-[100dvh] h-auto flex flex-col items-center">
                <Hero className={`h-[650px]`} content={<div className='size-full flex flex-col pb-[2rem] items-center justify-end gap-3 bg-emerald-50/20 text-center'>
                    <section className="w-full h-full xl:w-[1200px] flex items-end">
                        <div className="min-w-[370px] flex flex-col gap-3 text-left">
                            <span className="emerald-700 flex items-center gap-2 text-emerald-700 ">
                                Chronic Care for Employers
                                <Heart className='size-4.5 fill-emerald-700 text-emerald-700' />
                            </span>
                            <h1 className="text-[2.5rem] leading-[3rem] font-bold">
                                Help more employees achieve their optimal cardiometabolic health
                            </h1>
                            <p>
                                A best-in-class, comprehensive solution that can help manage chronic disease and disease progression.
                            </p>
                            <Button className='h-12 rounded-3xl w-fit px-8 font-semibold my-5'>
                                Get in touch
                            </Button>
                        </div>
                        <div className="w-full h-full flex">
                            <section className="slid-down min-w-[100px] h-[40%] rounded-b-full bg-cyan-100"></section>
                            <section className="slid-down min-w-[300px] h-full px-2 flex flex-col justify-end p-2 rounded-b-full bg-gradient-to-b from-[#00B5E2] via-[#00B5E2] via-blue-500 to-[#6240E8]">
                                <div className="slid-down size-full bg-white overflow-hidden rounded-b-full">
                                    <img src="https://images.unsplash.com/photo-1470434767159-ac7bf1b43351?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="main-content size-full object-cover" />
                                </div>
                            </section>
                            <section className="slid-down w-full h-[70%] rounded-b-full bg-[#351F65]"></section>
                        </div>
                    </section>
                </div>} />


                <section className="w-full py-16 flex justify-center z-10 bg-sky-50">
                    <div className="xl:w-[1200px] mx-auto px-6 flex flex-col items-center text-center">
                        <h1 className="text-4xl leading-9 font-bold text-[#351F65] lg:w-[700px] text-center">
                            An experience your employees want that drives the outcomes you need
                        </h1>
                        <br />
                        <aside className="w-full grid grid-cols-3 gap-5">
                            <div className="flex flex-col items-center p-6">
                                {/* Spot illustration of a rising chart with an arrow going up and to the right */}
                                <ChartArea className='size-10 mb-3 text-indigo-800' />
                                <p className="text-gray-900 font-bold text-xl mb-1">
                                    90% member retention rate at one year
                                </p>
                                <p className="text-gray-700 text-sm text-center">
                                    Industry-leading enrollment<sup>1</sup>
                                </p>
                            </div>
                            <div className="flex flex-col items-center p-6">
                                {/* Spot illustration of a folder with a heart and EKG line illustrated on the front of the folder */}
                                <FolderHeart className='size-10 mb-3 text-indigo-800' />
                                <p className="text-gray-900 font-bold text-xl mb-1">
                                    66% decrease in high-risk patients
                                </p>
                                <p className="text-gray-700 text-sm text-center">
                                    Through support from data-driven care teams<sup>2</sup>
                                </p>
                            </div>
                            <div className="flex flex-col items-center p-6">
                                {/* Spot illustration of two people smiling */}
                                <Users2Icon className='size-10 mb-3 text-indigo-800' />
                                <p className="text-gray-900 font-bold text-xl mb-1">
                                    1.1M active members
                                </p>
                                <p className="text-gray-700 text-sm text-center">
                                    Shows unmatched scale and population-level impact<sup>3</sup>
                                </p>
                            </div>
                        </aside>
                    </div>
                </section>

                <section className="w-full bg-white z-10 flex flex-col items-center gap-5 py-20">
                    <div className="xl:w-[1200px] flex flex-col items-center gap-6">
                        {/* Main Title */}
                        <h1 className="text-4xl font-bold text-[#351F65] text-center leading-tight">
                            Delivering value through proven engagement, patient-centered care and a streamlined client experience
                        </h1>

                        <div className="w-[800px] py-[1rem] grid grid-cols-2 gap-20">
                            <img
                                src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80"
                                alt="Man smiling at his phone while holding a cup of coffee in his kitchen, wearing a purple and white shirt."
                                className="rounded-2xl w-full"
                            />
                            <div className="flex flex-col justify-center gap-2">
                                <h1 className="text-3xl font-bold leading-7.5 text-indigo-950">Identifying, enrolling and engaging more patients</h1>
                                <p>Sustainable behavior change starts with industry-leading enrollment and engagement</p>
                            </div>
                        </div>
                        <div className="w-[800px] py-[1rem] grid grid-cols-2 gap-20">
                            <div className="flex flex-col justify-center gap-2">
                                <h1 className="text-3xl font-bold leading-7.5 text-indigo-950">Human and digital combine for quality, comprehensive care</h1>
                                <p>Insights and trends enable better overall health supported by a dedicated care team</p>
                            </div>
                            <img
                                src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80"
                                alt="Over-the-shoulder shot of a woman on a video call with a doctor, wearing a purple shirt."
                                className="rounded-2xl w-full"
                            />
                        </div>
                        <div className="w-[800px] py-[1rem] grid grid-cols-2 gap-20">
                            <img
                                src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80"
                                alt="Business handshake, symbolizing guaranteed value and partnership."
                                className="rounded-2xl w-full"
                            />
                            <div className="flex flex-col justify-center gap-2">
                                <h1 className="text-3xl font-bold leading-7.5 text-indigo-950">Guaranteed value from a leader with 20+ years of experience</h1>
                                <p>100% fees at risk, plus easy implementation, contracting and our third-party validated savings analysis to maximize your investment</p>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="w-full bg-[#fbf8ff] z-10 py-20">
                    <div className="xl:w-[1200px] mx-auto px-6 flex flex-col gap-12 items-center">
                        <h1 className="text-4xl font-bold text-[#351F65] text-center leading-tight">
                            A more comprehensive solution means more innovative cardiometabolic care
                        </h1>
                        <aside className="w-full flex items-center gap-[10rem]">
                            <div className="relative flex flex-col items-end justify-center">
                                <div className="w-[280px] -right-20 rounded-xl p-3 flex items-center gap-5 bg-white absolute">
                                    <i className="fab fa-linkedin text-2xl"></i>
                                    <span className="flex flex-col ">
                                        <span className="flex items-center justify-between">
                                            <p className='text-sm text-indigo-500'>Food Log Feedback</p>
                                            <ChevronRight className='size-4'/>
                                        </span>
                                        <small className="mb-1">Joshua Odame. <span className=" text-gray-600">Jan 09</span></small>
                                        <span className='text-sm text-gray-500'>Nice work incorporating lean protein into your meals!</span>
                                    </span>
                                </div>
                                <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80" alt="" className="size-full object-cover" />
                            </div>
                            <ComprehensiveSolutions />
                        </aside>
                    </div>
                </section>


                <FAQs/>
                <section className="w-full bg-sky-50 z-10 py-20">
                    <div className="xl:w-[1200px] mx-auto px-6 flex flex-col items-center">
                        <h1 className="text-4xl font-bold text-[#351F65] mb-8 text-left w-full">
                            Featured resources
                        </h1>
                        <NewsCarousel/>
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
        <div className="flex flex-col gap-4">
            {WhyRiciaCareList.map((item, idx) => (
                <div key={item.title} className="border-b border-gray-200 pb-4">
                    <button
                        type="button"
                        className="flex items-center justify-between w-full cursor-pointer"
                        onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                        aria-expanded={openIdx === idx}
                        aria-controls={`accordion-content-${idx}`}
                    >
                        <h3 className="text-lg font-semibold text-[#351F65]">{item.title}</h3>
                        <svg
                            className={`size-4 text-gray-400 transform transition-transform duration-200 ${openIdx === idx ? "rotate-180" : ""}`}
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
                            className="mt-3 text-gray-700 text-base"
                        >
                            {item.content}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

{/* Accordion Items */ }
const ComprehensiveSolutionsList = [
    {
        title: "Behavioral science best practices",
        content: "Rewarding interactions promote sustainable lifestyle changes.",
    },
    {
        title: "Proactive support",
        content: "Coach-led outreach and provider-based care gets patients back on track.",
    },
    {
        title: "Improved access to care team",
        content: "More access to specialty providers, including dietitians.",
    },
    {
        title: "Health check-ins",
        content: "Assessments for weight, sleep habits and mental health inform health status.",
    },
    {
        title: "Complete cardiometabolic approach",
        content: "Interventions are in response to overall health, not just a condition.",
    },
];

function ComprehensiveSolutions() {
    const [openIdx, setOpenIdx] = useState<number | null>(null);

    return (
        <div className="w-full flex flex-col gap-4">
            {ComprehensiveSolutionsList.map((item, idx) => (
                <div key={item.title} className="w-full border-b border-gray-200 pb-4">
                    <button
                        type="button"
                        className="flex items-center justify-between w-full cursor-pointer"
                        onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                        aria-expanded={openIdx === idx}
                        aria-controls={`accordion-content-${idx}`}
                    >
                        <h3 className="text-lg font-semibold text-[#351F65]">{item.title}</h3>
                        <svg
                            className={`size-4 text-gray-400 transform transition-transform duration-200 ${openIdx === idx ? "rotate-180" : ""}`}
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
                            className="mt-3 text-gray-700 text-base"
                        >
                            {item.content}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default ChronicCare