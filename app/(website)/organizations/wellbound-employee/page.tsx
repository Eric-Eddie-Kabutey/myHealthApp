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
import TestimonialsCarousel from '@/components/Testimonials';

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

function WellboundEmployees() {
    return (
        <div>
            <main className="min-h-[100dvh] h-auto flex flex-col items-center">
                <Hero className={`h-[650px]`} content={<div className='size-full flex flex-col pb-[2rem] items-center justify-end gap-3 bg-emerald-50/20 text-center'>
                    <section className="w-full h-full xl:w-[1200px] flex items-end">
                        <div className="w-full flex flex-col gap-3 text-left mb-20">
                            <p className="uppercase text-primary font-semibold tracking-wide">EMPLOYEE ASSISTANCE PROGRAM</p>
                            <h1 className="text-[3rem] leading-[3rem] font-bold">Meet Wellbound: a smarter EAP for today’s workforce</h1>
                            <p>
                                Wellbound is a new type of employee assistance program from Teladoc Health designed to boost utilization, improve care continuity and provide seamless, personalized support. Learn how we’re transforming EAPs from an underused resource into a powerful on-ramp for long-term employee wellness.
                            </p>
                            <div className="relative flex items-center justify-center w-fit">
                                <div className='size-6 rounded-full bg-primary animate-bounce absolute mb-8' />
                                <div className='size-6 rounded-full bg-primary animate-ping absolute mb-8' />
                                <Button className='h-12 rounded-3xl w-fit px-8 font-semibold my-5 z-10'>Get in touch</Button>
                            </div>
                            {/* <p className='text-sm'>Many health plans and employers cover virtual care with no extra fees.</p> */}
                        </div>
                        <div className="min-w-[700px] h-full flex justify-end relative">
                            <div className="size-full w-[90%] overflow-hidden border-2 rounded-3xl rounded-b-full">
                                <img src="https://i.pinimg.com/736x/44/be/b5/44beb56193faacbc8e96429b5d3bc5d9.jpg" alt="hypertension-free" className="size-full object-cover" />
                            </div>
                        </div>
                    </section>
                </div>} />

                <section className="w-full bg-indigo-50 z-10 flex flex-col items-center gap-5 py-20">
                    <div className="xl:w-[1200px] flex flex-col items-center gap-6">
                        <h1 className="text-4xl font-bold text-[#351F65] text-center leading-tight">
                            Why Wellbound is different
                        </h1>
                        <p className='lg:w-[800px] text-center'>Wellbound is an employee assistance program powered by Teladoc Health, featuring integrated mental health support, work-life resources and connections to primary and specialty care. Our experience helps drive higher utilization, connect people to the resources they need and provide long-term support.</p>

                        <span className="flex gap-4 text-indigo-950">
                            <div className="flex flex-col w-[200px] items-start gap-1">
                                <b className="text-4xl">#1</b>
                                <p>most recognized virtual care brand<sup>1</sup></p>
                            </div>
                            <div className="flex flex-col w-[200px] items-start gap-1">
                                <b className="text-4xl">20+ years</b>
                                <p>of clinical expertise serving patients virtually</p>
                            </div>
                            <div className="flex flex-col w-[200px] items-start gap-1">
                                <b className="text-4xl">40K+</b>
                                <p>medical & mental health providers<sup>2</sup></p>
                            </div>
                            <div className="flex flex-col w-[200px] items-start gap-1">
                                <b className="text-4xl">500M+</b>
                                <div>annual health interactions<sup>3</sup></div>
                            </div>
                        </span>
                        <img src="https://i.pinimg.com/736x/09/4b/ef/094bef6e306696c8c5c9d84ac62caa76.jpg" alt="" className="w-[900px] h-[350px] rounded-3xl object-cover" />
                    </div>
                </section>

                <section className="w-full bg-white z-10 flex flex-col items-center gap-5 py-20">
                    <div className="xl:w-[1200px] flex flex-col items-center gap-6">
                        <h1 className="text-4xl font-bold text-[#351F65] text-center leading-tight">
                            Comprehensive support for your employees
                        </h1>
                        <aside className="w-full grid grid-cols-3 gap-5 text-left">
                            <div className="flex flex-col p-6">
                                {/* Spot illustration for improved awareness */}
                                <ChartArea className='size-7 mb-3 text-indigo-950' />
                                <p className="text-gray-900 font-bold text-lg mb-1">
                                    Improved awareness
                                </p>
                                <p className="text-gray-700 text-sm w-full">
                                    Proven engagement strategies that simplify the user journey across mental health, work-life and virtual care services.
                                </p>
                            </div>
                            <div className="flex flex-col p-6">
                                {/* Spot illustration for everyday support */}
                                <FolderHeart className='size-7 mb-3 text-indigo-950' />
                                <p className="text-gray-900 font-bold text-lg mb-1">
                                    Everyday support
                                </p>
                                <p className="text-gray-700 text-sm w-full">
                                    Wellbound connects employees to high-quality support in seconds and matches them with a therapist within days—offering personalized guidance and the option to continue care with the same provider.
                                </p>
                            </div>
                            <div className="flex flex-col p-6">
                                {/* Spot illustration for measurable value */}
                                <Users2Icon className='size-7 mb-3 text-indigo-950' />
                                <p className="text-gray-900 font-bold text-lg mb-1">
                                    Measurable value
                                </p>
                                <p className="text-gray-700 text-sm w-full">
                                    Engagement and tailored support results in improved well-being, a more productive workforce and higher employee satisfaction—captured by robust reporting with data-backed insights.
                                </p>
                            </div>
                        </aside>
                    </div>
                </section>


                <section className="w-full bg-gray-50 z-10 flex flex-col items-center gap-5 py-20">
                    <div className="xl:w-[1200px] flex flex-col items-center gap-6">
                        {/* Main Title */}
                        <h1 className="text-4xl font-bold text-[#351F65] text-center leading-tight">
                            A one-stop shop for mind, body and work-life well-being                        </h1>

                        <div className="w-[800px] py-[1rem] grid grid-cols-2 gap-20">
                            <img
                                src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80"
                                alt="Man smiling at his phone while holding a cup of coffee in his kitchen, wearing a purple and white shirt."
                                className="rounded-2xl w-full"
                            />
                            <div className="flex flex-col justify-center gap-2">
                                <h1 className="text-3xl font-bold leading-7.5 text-indigo-950">Mental Health and Wellness</h1>
                                <ul className="list-disc pl-5 mt-2 space-y-1 text-base text-gray-700">
                                    <li>Virtual therapy via integration with BetterHelp</li>
                                    <li>In-person therapy*</li>
                                    <li>Teens’ therapy</li>
                                    <li>Couples’ therapy</li>
                                    <li>24/7 crisis line</li>
                                    <li>Coaching</li>
                                    <li>Evidence-based self-guided tools and resources</li>
                                    <li>Psychiatry and medication management</li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-[800px] py-[1rem] grid grid-cols-2 gap-20">
                            <div className="flex flex-col justify-center gap-2">
                                <h1 className="text-3xl font-bold leading-7.5 text-indigo-950">Work-Life Resources<span className="text-base font-normal">*</span></h1>
                                <ul className="list-disc pl-5 mt-2 space-y-1 text-base text-gray-700">
                                    <li>Onsite critical incident support</li>
                                    <li>Job and career support</li>
                                    <li>Financial consulting</li>
                                    <li>Legal consulting</li>
                                    <li>Daily living</li>
                                    <li>Care for elders and children</li>
                                </ul>
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
                                <h1 className="text-3xl font-bold leading-7.5 text-indigo-950">
                                    Teladoc Health Services
                                </h1>
                                <ul className="list-disc pl-5 mt-2 space-y-1 text-base text-gray-700">
                                    <li>24/7 Care</li>
                                    <li>Primary Care</li>
                                    <li>Expert Medical Services</li>
                                    <li>Specialty Care</li>
                                    <li>Cardiometabolic Health</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="w-full bg-indigo-950 text-white z-10 py-20">
                    <div className="xl:w-[1200px] mx-auto px-6 flex flex-col gap-12 items-center">
                        <h1 className="text-4xl lg:w-[800px] font-bold text-center leading-tight">
                            Learn how we can help you
                        </h1>
                        <aside className="w-full flex flex-col items-center rounded-3xl bg-white p-5 text-indigo-950 gap-5">
                            <br />
                            <h1 className="text-2xl mb-5 lg:w-[800px] font-bold text-center leading-tight">
                                Schedule a call with our team
                            </h1>
                            <form action="" className="flex flex-col items-center gap-4 w-[800px]">
                                <aside className="w-full grid grid-cols-2 gap-4">
                                    <div className="flex flex-col gap-1">
                                        <label className="text-sm font-medium" htmlFor="firstName">First Name<span className="text-red-500">*</span></label>
                                        <input id="firstName" name="firstName" type="text" required className="border border-gray-300 rounded-md p-2" placeholder="First Name" />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <label className="text-sm font-medium" htmlFor="lastName">Last Name<span className="text-red-500">*</span></label>
                                        <input id="lastName" name="lastName" type="text" required className="border border-gray-300 rounded-md p-2" placeholder="Last Name" />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <label className="text-sm font-medium" htmlFor="workEmail">Work Email<span className="text-red-500">*</span></label>
                                        <input id="workEmail" name="workEmail" type="email" required className="border border-gray-300 rounded-md p-2" placeholder="Work Email" />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <label className="text-sm font-medium" htmlFor="jobTitle">Job Title<span className="text-red-500">*</span></label>
                                        <input id="jobTitle" name="jobTitle" type="text" required className="border border-gray-300 rounded-md p-2" placeholder="Title" />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <label className="text-sm font-medium" htmlFor="company">Company<span className="text-red-500">*</span></label>
                                        <input id="company" name="company" type="text" required className="border border-gray-300 rounded-md p-2" placeholder="Company" />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <label className="text-sm font-medium" htmlFor="organizationType">Organization Type<span className="text-red-500">*</span></label>
                                        <select id="organizationType" name="organizationType" required className="border border-gray-300 rounded-md p-2">
                                            <option value="">Select...</option>
                                            <option value="corporate">Corporate</option>
                                            <option value="healthcare">Healthcare</option>
                                            <option value="education">Education</option>
                                            <option value="government">Government</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <label className="text-sm font-medium" htmlFor="country">Country<span className="text-red-500">*</span></label>
                                        <select id="country" name="country" required className="border border-gray-300 rounded-md p-2">
                                            <option value="">Select your country</option>
                                            <option value="Ghana">Ghana</option>
                                            <option value="Nigeria">Nigeria</option>
                                            <option value="Kenya">Kenya</option>
                                            <option value="South Africa">South Africa</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <label className="text-sm font-medium" htmlFor="phoneNumber">Phone Number</label>
                                        <input id="phoneNumber" name="phoneNumber" type="tel" className="border border-gray-300 rounded-md p-2" placeholder="Phone Number" />
                                    </div>
                                </aside>
                                <div className="w-full flex flex-col gap-1">
                                    <p className="text-sm">Comments</p>
                                    <textarea className="border border-gray-300 rounded-md p-2" />
                                </div>
                                <Button className='bg-indigo-950 text-white w-fit rounded-full'>Get in touch</Button>
                            </form>
                        </aside>
                    </div>
                </section >


                <FAQs />

            </main >
        </div >

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

export default WellboundEmployees