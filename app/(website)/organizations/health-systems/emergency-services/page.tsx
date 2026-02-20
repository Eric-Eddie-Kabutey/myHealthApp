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
                                    <h1 className="text-[3rem] leading-[3rem] font-bold">Emergency services</h1>
                                    <p>Virtual care collaboration when minutes matter most.</p>
                                    <div className="relative flex items-center justify-center w-fit">
                                        <div className='size-6 rounded-full bg-primary animate-bounce absolute mb-8' />
                                        <div className='size-6 rounded-full bg-primary animate-ping absolute mb-8' />
                                        <Button className='h-12 rounded-3xl w-fit px-8 font-semibold my-5 z-10'>Get in touch</Button>
                                    </div>
                                    {/* <p className='text-sm'>Many health plans and employers cover virtual care with no extra fees.</p> */}
                                </div>
                                <div className="min-w-[700px] h-full flex justify-end relative">
                                    <div className="size-full w-[90%] overflow-hidden border-2 rounded-l-full rounded-b-full">
                                        <img src="https://i.pinimg.com/736x/90/24/88/902488550ac3b411edefed84be44334e.jpg" alt="hypertension-free" className="size-full object-cover" />
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
                                <h3 className="text-xl font-semibold mb-2">Stroke solutions</h3>
                                <p className="text-gray-700">
                                    Extend your regional stroke network and increase access to specialized neurological care.
                                </p>
                                <Button variant="link" className="px-0 mt-2 text-primary font-semibold">Learn more</Button>
                            </div>
                            <div className="flex flex-col p-6 rounded-lg bg-white">
                                <FolderPlusIcon className='size-8 mb-1' />
                                <h3 className="text-xl font-semibold mb-2">Neonatology solutions</h3>
                                <p className="text-gray-700">
                                    Remotely guide clinicians through life-saving interventions and reduce risks for patients, hospitals and care teams.
                                </p>
                            </div>
                            <div className="flex flex-col p-6 rounded-lg bg-white">
                                <FileCheck2 className='size-8 mb-1' />
                                <h3 className="text-xl font-semibold mb-2">Behavioral health services</h3>
                                <p className="text-gray-700">
                                    Enable immediate access to mental health specialists, shortening time to treatment.
                                </p>
                            </div>
                        </aside>
                    </div>
                </section>

                <section className="w-full py-16 flex justify-center z-10 bg-indigo-950 text-white">
                    <div className="xl:w-[1200px] mx-auto px-6 flex items-center text-left justify-between">
                        <aside className="flex flex-col gap-5 items-start min-w-[500px]">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">{`The impact of virtual care in emergent settings`}</h2>
                            <div className="grid grid-cols-2 gap-5">
                                <aside className="flex flex-col gap-2">
                                    <b className="text-4xl">2:15</b>
                                    <p>average response time with telestroke*</p>
                                </aside>
                                <aside className="flex flex-col gap-2">
                                    <b className="text-4xl">24/7</b>
                                    <p>access to board-certified neurologists experienced in telestroke*</p>
                                </aside>
                                <aside className="flex flex-col gap-2">
                                    <b className="text-4xl">~25%</b>
                                    <p>reduction in door-to-needle time*</p>
                                </aside>
                                <aside className="flex flex-col gap-2">
                                    <b className="text-4xl">18%-36%</b>
                                    <p>average telestroke tPA rate*</p>
                                </aside>
                            </div>
                        </aside>
                        <img src="https://i.pinimg.com/736x/fe/aa/0a/feaa0a30935744a3d1b55fd505e22457.jpg" alt="scan" className="w-[300px] object-cover h-[300px] rounded-tr-[30%] rounded-bl-[30%]" />
                    </div>
                </section>

                <section className="w-full py-10 z-10 bg-white flex flex-col items-center">
                    <div className="xl:w-[700px] bg-white rounded-4xl shadow mx-auto p-6 flex items-center justify-between text-center">
                        <aside className="p-5 flex flex-col items-center gap-4">
                            <b className="text-[6rem] leading-[3rem] text-indigo-500">"</b>
                            <p>We're guaranteeing access to neurocritical care specialists because most Teladoc Health neurologists specialize in neurocritical care or trained at a high-stroke area. We wouldn't have that if we didn't have this partnership.</p>

                            <b className="text-indigo-700">Joshua Odame</b>
                            <p>Software Engineer</p>
                        </aside>
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