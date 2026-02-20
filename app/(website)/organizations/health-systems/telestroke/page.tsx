'use client';

import FAQs from '@/components/FAQs';
import Hero from '@/components/Hero';
import { Button } from '@/components/ui/button';
import routes from '@/lib/routes';
import { ArrowRight, ChartArea, Check, ChevronRight, FolderHeart, Heart, Users2Icon } from 'lucide-react';
import Link from 'next/link';
import React from 'react'
import { useState } from "react";
import NewsCarousel from '../../Includes/NewsCarousel';
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

function Telestroke() {
    return (
        <div>
            <main className="min-h-[100dvh] h-auto flex flex-col items-center">
                <Hero className={`h-[650px]`} content={<div className='size-full flex flex-col pb-[2rem] items-center justify-end gap-3 bg-emerald-50/20 text-center relative'>
                    <img src="https://i.pinimg.com/736x/5e/d5/89/5ed589a7478130ef2fe1a9f52b91e398.jpg" className="size-full object-cover"></img>
                    <div className="size-full flex flex-col items-center  absolute bg-gradient-to-r from-black/70 text-white">
                        <section className="w-full h-full xl:w-[1200px] flex items-end pb-[5rem]">
                            <div className="min-w-[370px] flex flex-col gap-3 text-left">
                                <h1 className="text-[2.5rem] leading-[3rem] font-bold">
                                    A hypertension solution for organizations—designed for both head and heart
                                </h1>
                                <p>
                                    See how combining smart tech with a human touch helps improve heart health for your population.
                                </p>
                                <Button className='h-12 rounded-3xl w-fit px-8 font-semibold my-5'>
                                    Get in touch
                                </Button>
                            </div>
                            <div className="w-full h-full flex">
                                {/* <section className="slid-down min-w-[100px] h-[40%] rounded-b-full bg-cyan-100"></section>
                                <section className="slid-down min-w-[300px] h-full px-2 flex flex-col justify-end p-2 rounded-b-full bg-gradient-to-b from-[#00B5E2] via-[#00B5E2] via-blue-500 to-[#6240E8]">
                                    <div className="slid-down size-full bg-white overflow-hidden rounded-b-full">
                                        <img src="https://images.unsplash.com/photo-1470434767159-ac7bf1b43351?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="main-content size-full object-cover" />
                                    </div>
                                </section>
                                <section className="slid-down w-full h-[70%] rounded-b-full bg-[#351F65]"></section> */}
                            </div>
                        </section>
                    </div>
                </div>} />


                <section className="w-full bg-white z-10 flex flex-col items-center gap-5 py-20">
                    <div className="xl:w-[1200px] flex flex-col items-center gap-6">
                        {/* Main Title */}
                        <h1 className="text-4xl font-bold text-[#351F65] text-center leading-tight">
                            Reduce heart failure and stroke risk in your population by building better heart health
                        </h1>

                        <div className="w-[800px] py-[1rem] grid grid-cols-2 gap-20">
                            <img
                                src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80"
                                alt="Man smiling at his phone while holding a cup of coffee in his kitchen, wearing a purple and white shirt."
                                className="rounded-2xl w-full"
                            />
                            <div className="flex flex-col justify-center gap-2">
                                <h1 className="text-3xl font-bold leading-7.5 text-indigo-950">Easy monitoring and access to coaches</h1>
                                <ul className="list-disc pl-5 mt-2 space-y-1 text-base text-gray-700">
                                    <li>Cellular blood pressure monitor and larger cuff size serve diverse populations</li>
                                    <li>Expert health coaches help people set goals and support accountability</li>
                                    <li>Integrated mental health support for commonly connected conditions, like anxiety</li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-[800px] py-[1rem] grid grid-cols-2 gap-20">
                            <div className="flex flex-col justify-center gap-2">
                                <h1 className="text-3xl font-bold leading-7.5 text-indigo-950">Data-driven, personalized experiences</h1>
                                <ul className="list-disc pl-5 mt-2 space-y-1 text-base text-gray-700">
                                    <li>Digital tools support improved nutrition, activity and medication adherence</li>
                                    <li>At-a-glance, weekly updates drive health action plan progress</li>
                                    <li>Personalized health nudges and educational content inspire lasting behavior change</li>
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
                                    Timely, relevant support
                                </h1>
                                <ul className="list-disc pl-5 mt-2 space-y-1 text-base text-gray-700">
                                    <li>Proactive connections with care providers for high-risk members</li>
                                    <li>Integrated app offers a seamless member experience across other health programs</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="w-full bg-indigo-950 text-white z-10 py-20">
                    <div className="xl:w-[1200px] mx-auto px-6 flex flex-col gap-12 items-center">
                        <h1 className="text-4xl lg:w-[800px] font-bold text-center leading-tight">
                            Why employers and health plans choose Teladoc Health
                        </h1>
                        <aside className="w-full grid grid-cols-3 gap-5">
                            <div className="flex gap-4 items-start">
                                <i className="fa fa-dollar text-2xl text-indigo-400" />
                                <div className="flex flex-col">
                                    <h3 className="text-lg font-semibold text-white">Guaranteed results</h3>
                                    <p className="text-sm text-indigo-200">
                                        We’re so confident in our ability to help people achieve health outcomes, we place our program fees at risk<sup>1</sup>
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <i className="fa fa-heart-pulse text-2xl text-indigo-400" />
                                <div className="flex flex-col">
                                    <h3 className="text-lg font-semibold text-white">Health outcomes</h3>
                                    <p className="text-sm text-indigo-200">
                                        88% of participants improved or maintained their blood pressure after one year, with those at higher risk reducing their systolic blood pressure by 11mmHg on average<sup>2</sup>
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <i className="fa fa-user-plus text-2xl text-indigo-400" />
                                <div className="flex flex-col">
                                    <h3 className="text-lg font-semibold text-white">Improved results with mental health support</h3>
                                    <p className="text-sm text-indigo-200">
                                        Program participants who also engaged with our digital mental health program saw 30% or greater improvement in blood pressure<sup>3</sup>
                                    </p>
                                </div>
                            </div>
                        </aside>

                        <Button className='bg-white hover:bg-transparent border-2 border-white text-black hover:text-white px-10 h-10 rounded-full'>Get in touch</Button>
                    </div>
                </section >


                <FAQs />
                <section className="w-full bg-white z-10 py-20">
                    <div className="xl:w-[1200px] mx-auto px-6 flex flex-col items-center">
                        <h1 className="text-4xl font-bold text-[#351F65] text-left w-full">
                            Explore the benefits of personalized diabetes solutions
                        </h1>
                        <p className='text-left w-full my-2 mb-8'>Gain insights, meet our members and learn more about our solutions in this curated collection of resources</p>
                        <NewsCarousel />
                    </div>
                </section>
                <section className="w-full bg-white z-10 py-20">
                    <div className="xl:w-[1200px] mx-auto px-6 flex flex-col items-center">
                        <h1 className="text-4xl font-bold text-[#351F65] text-center lg:w-[800px] w-full">
                            More than 1 million people with a cardiometabolic condition rely on Teladoc Health
                        </h1>
                        <TestimonialsCarousel />
                    </div>
                </section>
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

export default Telestroke