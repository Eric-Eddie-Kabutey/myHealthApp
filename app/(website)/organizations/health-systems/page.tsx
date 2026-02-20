'use client';

import FAQs from '@/components/FAQs';
import Hero from '@/components/Hero';
import { Button } from '@/components/ui/button';
import routes from '@/lib/routes';
import { ArrowRight, BadgeAlert, ChartArea, Check, ChevronRight, FolderHeart, Heart, Users2Icon } from 'lucide-react';
import Link from 'next/link';
import React from 'react'
import { useState } from "react";
import TestimonialsCarousel from '@/components/Testimonials';
import NewsCarousel from '../Includes/NewsCarousel';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";


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

function HospitalHealthSystemOverview() {
    return (
        <div>
            <main className="min-h-[100dvh] h-auto flex flex-col items-center">
                <Hero className={`h-[800px]`} content={<div className='size-full flex flex-col pb-[2rem] items-center justify-end gap-3 bg-emerald-50/20 text-center relative'>
                    <video src="https://cdn.pixabay.com/video/2023/01/27/148208-793717949_large.mp4" loop playsInline autoPlay muted className="size-full object-cover"></video>
                    <div className="size-full flex flex-col items-center  absolute bg-gradient-to-r from-black/70 text-white">
                        <section className="w-full h-full xl:w-[1200px] flex flex-col items-center justify-end pb-[5rem]">
                            <div className="md:w-[650px] flex flex-col gap-3 text-center items-center">
                                <h1 className="text-[2.5rem] lg:text-[3.2rem] leading-[3rem] lg:leading-[3.5rem] font-bold">
                                    Connected virtual care solutions for hospitals and health systems
                                </h1>
                                <p>
                                    Increase your capacity for care with fully integrated software, devices and services.
                                </p>
                                <div className="flex gap-4">
                                    <Button className='h-12 rounded-3xl w-fit px-8 font-semibold my-5'>
                                        Get in touch
                                    </Button>
                                    <Button variant={'outline'} className='h-12 bg-transparent rounded-3xl w-fit px-8 font-semibold my-5'>
                                        Watch the video
                                    </Button>

                                </div>
                            </div>
                        </section>
                    </div>
                </div>} />

                <section className="w-full bg-white text-indigo-950 z-10 py-20">
                    <div className="xl:w-[1200px] mx-auto px-6 flex flex-col gap-12 items-center">
                        <h1 className="text-4xl font-bold text-center leading-tight lg:w-[800px]">
                            Drive quality outcomes for a patient-centered approach to care
                        </h1>
                        <aside className="w-full grid grid-cols-3 gap-5 text-center">
                            <div className="flex flex-col items-center">
                                {/* Doctor illustration */}
                                <img
                                    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
                                    alt="Doctor illustration"
                                    className="w-20 h-20 mb-4 object-cover rounded-full"
                                />
                                <h2 className="text-lg font-bold">Expand staffing capabilities and capacity</h2>
                                <p className="text-center text-gray-700">
                                    Scale your workforce efficiently to meet growing patient demands.
                                </p>
                            </div>
                            <div className="flex flex-col items-center">
                                {/* Active person illustration */}
                                <img
                                    src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80"
                                    alt="Active person illustration"
                                    className="w-20 h-20 mb-4 object-cover rounded-full"
                                />
                                <h2 className="text-lg font-bold">Deliver a single, unified healthcare experience across the patient journey</h2>
                                <p className="text-center text-gray-700">
                                    Seamlessly connect care from admission to recovery for better outcomes.
                                </p>
                            </div>
                            <div className="flex flex-col items-center">
                                {/* Support team illustration */}
                                <img
                                    src="https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=400&q=80"
                                    alt="Support team illustration"
                                    className="w-20 h-20 mb-4 object-cover rounded-full"
                                />
                                <h2 className="text-lg font-bold">Support clinical teams to operate at the top of their license</h2>
                                <p className="text-center text-gray-700">
                                    Empower clinicians with tools and resources to maximize their expertise.
                                </p>
                            </div>
                        </aside>
                        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
                            <Button className='px-10 h-10 rounded-full'>Get in touch</Button>
                        </div>
                    </div>
                </section>


                <section className="w-full bg-[#EFF2F6] z-10 flex flex-col items-center gap-5 py-20">
                    <div className="xl:w-[1200px] flex flex-col items-center gap-6">
                        {/* Main Title */}
                        <h1 className="text-4xl font-bold text-[#351F65] text-center leading-tight">
                            Build a seamless connected care experience
                        </h1>

                        <div className="w-[800px] py-[1rem] grid grid-cols-2 gap-20">
                            <img
                                src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80"
                                alt="Man smiling at his phone while holding a cup of coffee in his kitchen, wearing a purple and white shirt."
                                className="rounded-2xl w-full"
                            />
                            <div className="flex flex-col justify-center gap-2">
                                <h1 className="text-3xl font-bold leading-7.5 text-indigo-950">Easy-to-integrate software</h1>
                                <ul className="list-disc pl-5 mt-2 space-y-1 text-base text-gray-700">
                                    <li>Helps optimize your existing technology investments and adapts to any clinical workflow</li>
                                    <li>Creates continuity between virtual and in-person care</li>
                                    <li>Helps identify opportunities to enhance efficiency and accelerate clinical decision making</li>
                                </ul>
                                <Button className="font-semibold w-fit mt-2">Learn more</Button>
                            </div>
                        </div>
                        <div className="w-[800px] py-[1rem] grid grid-cols-2 gap-20">
                            <div className="flex flex-col justify-center gap-2">
                                <h1 className="text-3xl font-bold leading-7.5 text-indigo-950">
                                    Purpose-built devices* for always-on care delivery
                                </h1>
                                <ul className="list-disc pl-5 mt-2 space-y-1 text-base text-gray-700">
                                    <li>Proactive fleet monitoring and maintenance</li>
                                    <li>Intuitive technology eases adoption across use cases and care environments</li>
                                    <li>Essential clinical capabilities right at your care teams’ fingertips</li>
                                </ul>
                                <Button className="font-semibold w-fit mt-2">Learn more</Button>
                            </div>
                            <img
                                src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80"
                                alt="Over-the-shoulder shot of a woman on a video call with a doctor, wearing a purple shirt."
                                className="rounded-2xl w-full"
                            />
                        </div>
                    </div>
                </section>

                <section className="w-full bg-white z-10 py-20">
                    <div className="xl:w-[1200px] mx-auto p-6 rounded-2xl flex justify-center gap-16 items-center bg-indigo-50/50">
                        <div className="w-full flex flex-col md:flex-row gap-10 items-center justify-center">
                            <div className="flex flex-col gap-4 max-w-[500px]">
                                <h2 className="text-4xl font-bold text-[#351F65]">
                                    Stay ahead with Connected Care Insights
                                </h2>
                                <p className="text-gray-700">
                                    The latest insights and perspectives on virtual care, innovation, workforce challenges and more.
                                </p>
                                <Button className="px-8 h-10 rounded-full w-fit font-semibold">
                                    Explore now
                                </Button>
                            </div>
                            <img
                                src="https://i.pinimg.com/736x/2b/67/ea/2b67eab2f47654a38614999133170c4c.jpg"
                                alt="Male doctor wearing glasses having a virtual consultation on a laptop."
                                className="rounded-full h-[400px] object-cover"
                            />
                        </div>
                    </div>
                </section>


                <section className="w-full bg-white z-10 py-5">
                    <div className="xl:w-[1200px] mx-auto p-6 rounded-2xl flex flex-col items-center justify-center gap-10">
                        <h2 className="text-4xl font-bold text-[#351F65]">
                            Stay ahead with Connected Care Insights
                        </h2>
                        <aside className="transform-care w-full flex items-center gap-10">
                            <div className="w-full flex justify-center">
                                <img
                                    src="https://images.pexels.com/photos/6749777/pexels-photo-6749777.jpeg"
                                    alt="Virtual nurse monitoring patient"
                                    className="rounded-2xl w-full h-[350px] object-cover"
                                />
                            </div>
                            <div className="min-w-[500px]">
                                <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="inpatient">
                                        <AccordionTrigger className="text-lg font-bold text-[#351F65]">Inpatient Services</AccordionTrigger>
                                        <AccordionContent className="text-gray-700 text-base">
                                            Comprehensive virtual care for hospitalized patients, improving outcomes and efficiency.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="nursing">
                                        <AccordionTrigger className="text-lg font-bold text-[#351F65]">Virtual Nursing</AccordionTrigger>
                                        <AccordionContent className="text-gray-700 text-base">
                                            Remote nursing support for patient monitoring, education, and discharge planning.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="sitting">
                                        <AccordionTrigger className="text-lg font-bold text-[#351F65]">Virtual Sitting</AccordionTrigger>
                                        <AccordionContent className="text-gray-700 text-base">
                                            Continuous observation for at-risk patients, enhancing safety and reducing costs.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="emergency">
                                        <AccordionTrigger className="text-lg font-bold text-[#351F65]">Emergency Services</AccordionTrigger>
                                        <AccordionContent className="text-gray-700 text-base">
                                            Rapid virtual response for urgent and emergent patient needs.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="outpatient">
                                        <AccordionTrigger className="text-lg font-bold text-[#351F65]">Outpatient Services</AccordionTrigger>
                                        <AccordionContent className="text-gray-700 text-base">
                                            Ongoing virtual care for patients after discharge, supporting recovery and follow-up.
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        </aside>
                    </div>
                </section>


                <section className="w-full bg-indigo-950 text-white z-10 py-20">
                    <div className="xl:w-[1200px] mx-auto px-6 flex flex-col gap-12 items-center">
                        <h1 className="text-4xl lg:w-[800px] font-bold text-center leading-tight">
                            Expert services enable you to scale with confidence
                        </h1>
                        <aside className="w-full grid grid-cols-3 gap-5">
                            <div className="flex gap-4 items-start">
                                <ChartArea className="w-14 text-indigo-400" />
                                <div className="flex flex-col">
                                    <h3 className="text-lg font-semibold text-white">Operations advisory service</h3>
                                    <p className="text-sm text-indigo-200">
                                        Simplify your management process with an advisor who proactively identifies opportunities for improved efficiencies and growth.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <Users2Icon className="w-14 text-indigo-400" />
                                <div className="flex flex-col">
                                    <h3 className="text-lg font-semibold text-white">Physician service partners</h3>
                                    <p className="text-sm text-indigo-200">
                                        Gain coverage when you and your clinicians need it, without sacrificing patient access to key specialty services.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <FolderHeart className="w-14 text-indigo-400" />
                                <div className="flex flex-col">
                                    <h3 className="text-lg font-semibold text-white">Telehealth managed service</h3>
                                    <p className="text-sm text-indigo-200">
                                        Get 24/7 or 12/7 proactive fleet monitoring options to ensure your program is always up and running.<sup>1</sup>
                                    </p>
                                </div>
                            </div>
                        </aside>
                        <Button className='bg-white hover:bg-transparent border-2 border-white text-black hover:text-white px-10 h-10 rounded-full'>Connect with us</Button>
                    </div>
                </section>

                <section className="w-full bg-white z-10 py-20">
                    <div className="xl:w-[1200px] mx-auto p-6 rounded-2xl flex justify-center gap-16 items-center bg-indigo-950 text-white">
                        <div className="w-full flex flex-col md:flex-row gap-10 items-center justify-center">
                            <div className="flex flex-col gap-4 max-w-[500px]">
                                <h2 className="text-4xl font-bold">
                                    Discover key findings from healthcare leaders
                                </h2>
                                <p className="text-gray-200">
                                    Our annual survey, conducted in conjunction with Becker’s Hospital Review, shows virtual care is here to stay.
                                </p>
                                <Button className="px-8 h-10 rounded-full w-fit font-semibold">
                                    Watch the webinar replay
                                </Button>
                            </div>
                            <img
                                src="https://i.pinimg.com/736x/2b/67/ea/2b67eab2f47654a38614999133170c4c.jpg"
                                alt="Male doctor wearing glasses having a virtual consultation on a laptop."
                                className="rounded-full h-[400px] object-cover"
                            />
                        </div>
                    </div>
                </section>


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

export default HospitalHealthSystemOverview