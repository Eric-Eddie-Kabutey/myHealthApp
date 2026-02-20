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

function IntegratedCare() {
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
                                    <h1 className="text-[3rem] leading-[3rem] font-bold">Manage health the way people experience it</h1>
                                    <p>Offer an always-on, unified consumer experience across primary care, chronic care and mental healthcare.</p>
                                    <div className="relative flex items-center justify-center w-fit">
                                        <div className='size-6 rounded-full bg-primary animate-bounce absolute mb-8' />
                                        <div className='size-6 rounded-full bg-primary animate-ping absolute mb-8' />
                                        <Button className='h-12 rounded-3xl w-fit px-8 font-semibold my-5 z-10'>Get in touch</Button>
                                    </div>
                                    {/* <p className='text-sm'>Many health plans and employers cover virtual care with no extra fees.</p> */}
                                </div>
                                <div className="min-w-[700px] h-full flex justify-end relative">
                                    <div className="size-full w-[90%] overflow-hidden border-2 rounded-l-full rounded-b-full">
                                        <img src="https://i.pinimg.com/736x/91/43/39/914339b75f15daba84052b119cd3ccf8.jpg" alt="hypertension-free" className="size-full object-cover" />
                                    </div>
                                </div>
                            </section>
                        </div>
                    }
                />


                <section className="w-full py-16 flex justify-center z-10 bg-white">
                    <div className="xl:w-[1200px] mx-auto px-6 flex flex-col items-center text-center">
                        <aside className="w-full grid grid-cols-3 gap-5">
                            <div className="flex flex-col items-center p-6 rounded-lg bg-white">
                                <BadgeCheckIcon className='size-10' />
                                <h3 className="text-xl font-semibold mb-2">Positive employee experience</h3>
                                <p className="text-gray-700">
                                    Meet the needs of people of all ages, demographics and lifestyles—on their terms—with one mobile app.
                                </p>
                            </div>
                            <div className="flex flex-col items-center p-6 rounded-lg bg-white">
                                <FolderPlusIcon className='size-10' />
                                <h3 className="text-xl font-semibold mb-2">Reduced administrative complexity</h3>
                                <p className="text-gray-700">
                                    Manage multiple virtual care programs with a single, scalable platform that fits your ecosystem.
                                </p>
                            </div>
                            <div className="flex flex-col items-center p-6 rounded-lg bg-white">
                                <FileCheck2 className='size-10' />
                                <h3 className="text-xl font-semibold mb-2">Comprehensive care delivery</h3>
                                <p className="text-gray-700">
                                    Extend access to preventive, urgent, specialty, chronic and mental healthcare, as well as referrals to in-person specialists.
                                </p>
                            </div>
                        </aside>

                        <br />
                        <div className="hybrid-care w-full flex flex-col md:flex-row items-center gap-10 justify-center py-8">
                            <div className="flex-1 flex justify-center items-center relative">
                                {/* Decorative shapes can be added here for extra style */}
                                <img
                                    src="/mobileapp.png"
                                    alt="Hybrid care app screenshot"
                                    className="w-[300px] h-auto rounded-2xl shadow-xl border"
                                />
                                {/* Example decorative shapes */}
                                <div className="absolute top-0 left-0 w-16 h-16 rounded-full bg-[#6240E8] opacity-30 -z-10"></div>
                                <div className="absolute bottom-0 right-0 w-20 h-20 rounded-full bg-[#00B5E2] opacity-30 -z-10"></div>
                                <div className="absolute top-12 right-12 w-12 h-12 rounded-full bg-[#43C59E] opacity-30 -z-10"></div>
                            </div>
                            <div className="flex-1 flex flex-col items-start justify-center text-left max-w-[420px]">
                                <h2 className="text-3xl md:text-4xl font-bold text-[#351F65] mb-4">
                                    Seamless hybrid care from a single app
                                </h2>
                                <div className="flex items-center gap-2 mb-2">
                                    {/* Star rating */}
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <svg key={i} width="28" height="28" viewBox="0 0 24 24" fill="#F3C300" stroke="#F3C300" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polygon points="12 2 15 8.5 22 9.3 17 14.1 18.2 21 12 17.8 5.8 21 7 14.1 2 9.3 9 8.5 12 2" />
                                        </svg>
                                    ))}
                                    <span className="font-semibold text-[#351F65] ml-2">4.8 out of 5 stars</span>
                                </div>
                                <p className="text-gray-800 mb-6">
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
                        <TestimonialsCarousel/>
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

export default IntegratedCare