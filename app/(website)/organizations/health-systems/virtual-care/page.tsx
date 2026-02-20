'use client';

import FAQs from '@/components/FAQs';
import Hero from '@/components/Hero';
import TestimonialsCarousel from '@/components/Testimonials';
import { Button } from '@/components/ui/button';
import { BadgeCheckIcon, FileCheck2, FolderPlusIcon } from 'lucide-react';
import React from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import FeaturedCaseStudies from '../../Includes/FesturedCaseStudies';
import WholePersonApproach from '../../Includes/WholePersonApproach';
import InfiniteLoopScroll from '@/components/InfiniteLoopScroll';
import NewsCarousel from '../../Includes/NewsCarousel';

function VirtualCare() {
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
                                    <h1 className="text-[3rem] leading-[3rem] font-bold">Solo™ virtual care platform</h1>
                                    <p>One healthcare platform. Endless possibilities</p>
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
                    <div className="xl:w-[1200px] mx-auto px-6 flex flex-col items-center text-left">
                        <aside className="w-full grid grid-cols-3 gap-5">
                            <div className="flex flex-col p-6 rounded-lg bg-white">
                                <BadgeCheckIcon className='size-8 mb-1' />
                                <h3 className="text-xl font-semibold mb-2">Simplify the patient and clinician experience</h3>
                                <p className="text-gray-700">
                                    Ease your patient and clinician experience with configurable healthcare technology that integrates with your workflows for improved patient outcomes.
                                </p>
                            </div>
                            <div className="flex flex-col p-6 rounded-lg bg-white">
                                <FolderPlusIcon className='size-8 mb-1' />
                                <h3 className="text-xl font-semibold mb-2">Innovate for better care delivery</h3>
                                <p className="text-gray-700">
                                    Make your existing investments work harder through innovative care models and by uncovering new insights that lead to new opportunities.
                                </p>
                            </div>
                            <div className="flex flex-col p-6 rounded-lg bg-white">
                                <FileCheck2 className='size-8 mb-1' />
                                <h3 className="text-xl font-semibold mb-2">Secure, reliable care</h3>
                                <p className="text-gray-700">
                                    Offer reliable care at scale through an integrated enterprise platform that expands your reach.
                                </p>
                            </div>
                        </aside>

                        <br />
                        <div className="w-full flex flex-col md:flex-row items-center gap-10 justify-center py-8">
                            <div className="grid grid-cols-2 gap-2 w-full">
                                <aside className="size-full h-[300px] relative">
                                    <img src="https://i.pinimg.com/736x/15/cb/ee/15cbeecb331c4572b0ace7522643a653.jpg" alt="" className="absolute left-0 bottom-0 rounded-tl-4xl size-[90%] object-cover" />
                                </aside>
                                <aside className="size-full h-[300px] relative">
                                    <img src="https://i.pinimg.com/736x/70/8d/1c/708d1ce60b5353fdc080e2b41de8cb52.jpg" alt="" className="absolute right-0 top-0 rounded-br-4xl size-[90%] object-cover" />
                                </aside>
                                <aside className="size-full h-[300px] relative">
                                    <img src="https://i.pinimg.com/1200x/05/26/4e/05264eda9c7118efaa28d6d76ebde019.jpg" alt="" className="absolute top-0 right-0 rounded-tl-4xl size-[90%] object-cover" />
                                </aside>
                                <aside className="size-full h-[300px] relative">
                                    <img src="https://i.pinimg.com/736x/25/67/1d/25671d8e1e97f69655f0205c16354966.jpg" alt="" className="absolute left-0 bottom-0 rounded-bl-4xl size-[90%] object-cover" />
                                </aside>
                            </div>
                            <div className="flex-1 flex flex-col items-start justify-center text-left min-w-[500px]">
                                <h2 className="text-3xl md:text-4xl font-bold text-[#351F65] mb-4">
                                    Bring patients and care teams closer together, inside or outside of a facility, and remove complexity for better care coordination and outcomes.
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
                                <ul className="list-disc pl-5 text-gray-800 mb-6 space-y-2">
                                    <li>
                                        Configurable workflows, from the simple to the comprehensive, remove complexity and focus on care delivery.
                                    </li>
                                    <li>
                                        Integration with existing IT systems, including EMRs, reduces point solutions and total cost of ownership.
                                    </li>
                                    <li>
                                        Anywhere, anytime care extends reach and increases patient access, engagement and satisfaction.
                                    </li>
                                    <li>
                                        24/7 proactive monitoring and technical support for patients and care teams keep systems running smoothly and ease the burden on IT.
                                    </li>
                                </ul>
                                <Button className="bg-[#6240E8] hover:bg-[#5433d4] text-white font-semibold rounded-full px-8 transition">
                                    Request a demo
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="w-full py-16 flex justify-center z-10 bg-indigo-50">
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

export default VirtualCare