'use client';

import FAQs from '@/components/FAQs';
import Hero from '@/components/Hero';
import TestimonialsCarousel from '@/components/Testimonials';
import { Button } from '@/components/ui/button';
import { BadgeCheckIcon, FileCheck2, FolderPlusIcon } from 'lucide-react';
import React from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import FeaturedCaseStudies from '../Includes/FesturedCaseStudies';
import WholePersonApproach from '../Includes/WholePersonApproach';
import InfiniteLoopScroll from '@/components/InfiniteLoopScroll';
import NewsCarousel from '../Includes/NewsCarousel';

function PrimaryCare() {
    return (
        <div>
            <main className="min-h-[100dvh] h-auto flex flex-col items-center">
                <Hero
                    className={`h-[650px]`}
                    content={
                        <div className='size-full flex flex-col pb-[2rem] items-center justify-end gap-3 bg-emerald-50/20 text-center'>
                            <section className="w-full h-full xl:w-[1200px] flex items-end">
                                <div className="w-full flex flex-col gap-3 text-left mb-20">
                                    {/* <p>Virtual Primary Care</p> */}
                                    <h1 className="text-[3rem] leading-[3rem] font-bold">Primary care for employers</h1>
                                    <p>Empower sustainable health improvements with a whole-person care experience, from annual exams to more complex care.</p><div className="relative flex items-center justify-center w-fit">
                                        <div className='size-6 rounded-full bg-primary animate-bounce absolute mb-8' />
                                        <div className='size-6 rounded-full bg-primary animate-ping absolute mb-8' />
                                        <Button className='h-12 rounded-3xl w-fit px-8 font-semibold my-5 z-10'>Get in touch</Button>
                                    </div>
                                    {/* <p className='text-sm'>Many health plans and employers cover virtual care with no extra fees.</p> */}
                                </div>
                                <div className="min-w-[700px] h-full flex justify-end relative">
                                    <div className="size-full w-[90%] overflow-hidden border-2 rounded-l-full rounded-b-full">
                                        <img src="https://i.pinimg.com/736x/67/cd/f0/67cdf089175f77eed235b46b1c321b51.jpg" alt="hypertension-free" className="size-full object-cover" />
                                    </div>
                                </div>
                            </section>
                        </div>
                    }
                />


                <section className="w-full py-16 flex justify-center z-10 bg-white">
                    <div className="xl:w-[1200px] mx-auto px-6 flex flex-col items-center text-center">
                        <aside className="w-full grid grid-cols-4 gap-5">
                            <div className="flex flex-col items-center p-6 rounded-lg bg-white">
                                <BadgeCheckIcon className='size-7' />
                                <h3 className="text-lg font-semibold mb-2">Convenient access to care</h3>
                                <p className="text-gray-700">
                                    Meet the demands of employees' busy and diverse lifestyles by making it easy for them to connect.
                                </p>
                            </div>
                            <div className="flex flex-col items-center p-6 rounded-lg bg-white">
                                <FolderPlusIcon className='size-7' />
                                <h3 className="text-lg font-semibold mb-2">Cost-effective care navigation</h3>
                                <p className="text-gray-700">
                                    Create a concierge-like experience, referring people to in-network care and services based on cost and quality data.
                                </p>
                            </div>
                            <div className="flex flex-col items-center p-6 rounded-lg bg-white">
                                <FileCheck2 className='size-7' />
                                <h3 className="text-lg font-semibold mb-2">Personalized experiences</h3>
                                <p className="text-gray-700">
                                    Optimize engagement with data-driven programs and consumer engagement best practices.
                                </p>
                            </div>
                            <div className="flex flex-col items-center p-6 rounded-lg bg-white">
                                <BadgeCheckIcon className='size-7' />
                                <h3 className="text-lg font-semibold mb-2">Comprehensive whole-person care</h3>
                                <p className="text-gray-700">
                                    Extend access to preventive, urgent, specialty, chronic and mental healthcare, with referrals to in-person specialists as needed.
                                </p>
                            </div>
                        </aside>
                    </div>
                </section>
                
                <section className="w-full py-16 flex justify-center z-10 bg-indigo-50">
                    <div className="xl:w-[1200px] mx-auto px-6 flex flex-col items-center text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">An experience your employees want drives the outcomes you both need</h2>
                        <aside className="w-full grid grid-cols-3 gap-5">
                            <div className="flex flex-col items-center">
                                <div className="flex items-center justify-center rounded-2xl px-[3rem] h-[150px] mb-4 bg-indigo-900 text-white">
                                    <b className="text-[3rem] md:text-[4rem]">37%</b>
                                </div>
                                <p className="text-gray-700">
                                    of people with diabetes were newly diagnosed via primary care and connected sooner to condition management support*
                                </p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="flex items-center justify-center rounded-2xl px-[3rem] h-[150px] mb-4 bg-indigo-900 text-white">
                                    <b className="text-[3rem] md:text-[4rem]">33%</b>
                                </div>
                                <p className="text-gray-700">
                                    of participants were recommended to other Teladoc Health services, including mental health, nutrition, dermatology and in-person care*
                                </p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="flex items-center justify-center rounded-2xl px-[3rem] h-[150px] mb-4 bg-indigo-900 text-white">
                                    <b className="text-[3rem] md:text-[4rem]">98%</b>
                                </div>
                                <p className="text-gray-700">
                                    member satisfaction,* keeping the service top-of-mind
                                </p>
                            </div>
                        </aside>
                    </div>
                </section>

                <section className="w-full py-16 flex justify-center z-10 bg-indigo-900 text-white">
                    <div className="xl:w-[1200px] mx-auto px-6 flex flex-col items-center text-center">
                        <div className="hybrid-care w-full flex flex-col md:flex-row items-center gap-10 justify-center py-8">
                            <div className="flex-1 flex justify-center items-center relative">
                                {/* Decorative shapes can be added here for extra style */}
                                <img
                                    src="/mobileapp.png"
                                    alt="Hybrid care app screenshot"
                                    className="w-[300px] h-auto rounded-2xl bg-white shadow-xl border"
                                />
                                {/* Example decorative shapes */}
                                <div className="absolute top-0 left-0 w-16 h-16 rounded-full bg-[#d6ccff] opacity-30 -z-10"></div>
                                <div className="absolute bottom-0 right-0 w-20 h-20 rounded-full bg-[#00B5E2] opacity-30 -z-10"></div>
                                <div className="absolute top-12 right-12 w-12 h-12 rounded-full bg-[#43C59E] opacity-30 -z-10"></div>
                            </div>
                            <div className="flex-1 flex flex-col items-start justify-center text-left max-w-[420px]">
                                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                    Seamless hybrid care from a single app
                                </h2>
                                <div className="flex items-center gap-2 mb-2">
                                    {/* Star rating */}
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <svg key={i} width="28" height="28" viewBox="0 0 24 24" fill="#F3C300" stroke="#F3C300" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polygon points="12 2 15 8.5 22 9.3 17 14.1 18.2 21 12 17.8 5.8 21 7 14.1 2 9.3 9 8.5 12 2" />
                                        </svg>
                                    ))}
                                    <span className="font-semibold text-[#e7e7e7] ml-2">4.8 out of 5 stars</span>
                                </div>
                                <p className="mb-6">
                                    Consumers prefer a single unified experience for mental and physical health. And they appreciate the convenient access and personalized support they get from our integrated app.
                                </p>
                                <Button className="bg-[#6240E8] hover:bg-[#5433d4] text-white font-semibold rounded-full px-8 transition">
                                    Request a demo
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="w-full py-16 flex flex-col items-center gap-10 justify-center z-10 bg-sky-50">
                    <h2 className="text-3xl md:text-4xl font-bold lg:w-[700px] text-center">
                        What our clients are saying
                    </h2>
                    <div className="xl:w-[1200px] mx-auto px-6 flex flex-col items-center justify-between text-center">
                        <TestimonialsCarousel />
                    </div>
                </section>

                

                <section className="w-full py-16 flex justify-center z-10 bg-white">
                    <div className="xl:w-[1200px] mx-auto px-6 flex flex-col items-center text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">{`Put 20+ years of virtual care expertise to work for you`}</h2>
                        <br />
                        <NewsCarousel />
                    </div>
                </section>

            </main>
        </div>
    );
}

export default PrimaryCare