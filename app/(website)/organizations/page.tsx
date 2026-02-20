'use client';

import FAQs from '@/components/FAQs';
import Hero from '@/components/Hero';
import TestimonialsCarousel from '@/components/Testimonials';
import { Button } from '@/components/ui/button';
import { BadgeCheckIcon, FileCheck2, FolderPlusIcon } from 'lucide-react';
import React from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import FeaturedCaseStudies from './Includes/FesturedCaseStudies';
import WholePersonApproach from './Includes/WholePersonApproach';
import InfiniteLoopScroll from '@/components/InfiniteLoopScroll';

function OrganizationEmployers() {
    return (
        <div>
            <main className="min-h-[100dvh] h-auto flex flex-col items-center">
                <Hero
                    className={`max-h-[]`}
                    content={
                        <div className='size-full flex flex-col pb-[2rem] items-center justify-end gap-3 bg-emerald-50/20 text-center'>
                            <section className="w-full h-full xl:w-[1200px] flex items-end">
                                <div className="w-full flex flex-col gap-3 text-left mb-20">
                                    {/* <p>Virtual Primary Care</p> */}
                                    <h1 className="text-[3rem] leading-[3rem] font-bold">Whole-person virtual care for employers</h1>
                                    <p>Put quality care within reach at every step of your employees' healthcare journey — from primary care to chronic care to mental health and complex needs.</p>
                                    <div className="relative flex items-center justify-center w-fit">
                                        <div className='size-6 rounded-full bg-primary animate-bounce absolute mb-8' />
                                        <div className='size-6 rounded-full bg-primary animate-ping absolute mb-8' />
                                        <Button className='h-12 rounded-3xl w-fit px-8 font-semibold my-5 z-10'>Get Started</Button>
                                    </div>
                                    {/* <p className='text-sm'>Many health plans and employers cover virtual care with no extra fees.</p> */}
                                </div>
                                <div className="min-w-[700px] h-full flex">
                                    <section className="slid-down min-w-[100px] h-[40%] rounded-b-full bg-cyan-100"></section>
                                    <section className="slid-down min-w-[400px] h-full flex flex-col justify-end rounded-b-full bg-gradient-to-b from-[#ffffff] to-[#000000]">
                                        <div className="slid-down size-full bg-white overflow-hidden rounded-full">
                                            <img src="https://images.unsplash.com/photo-1557263627-4451cec65c99?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="main-content size-full object-cover" />
                                        </div>
                                    </section>
                                    <section className="slid-down w-full h-[70%] rounded-b-full bg-[#351F65]"></section>
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
                                <h3 className="text-xl font-semibold mb-2">Support employee health</h3>
                                <p className="text-gray-700">
                                    Help your team manage chronic conditions, improve wellness, and access mental health resources.
                                </p>
                            </div>
                            <div className="flex flex-col items-center p-6 rounded-lg bg-white">
                                <FolderPlusIcon className='size-10' />
                                <h3 className="text-xl font-semibold mb-2">Enhance your benefits</h3>
                                <p className="text-gray-700">
                                    Offer a comprehensive set of health solutions to meet diverse employee needs.
                                </p>
                            </div>
                            <div className="flex flex-col items-center p-6 rounded-lg bg-white">
                                <FileCheck2 className='size-10' />
                                <h3 className="text-xl font-semibold mb-2">Boost participation</h3>
                                <p className="text-gray-700">
                                    Increase engagement with personalized programs and easy-to-use digital tools.
                                </p>
                            </div>
                        </aside>
                    </div>
                </section>

                <section className="w-full py-16 flex justify-center z-10 bg-indigo-900 text-white">
                    <div className="xl:w-[1200px] mx-auto px-6 flex items-center justify-between text-center">
                        <aside className="flex flex-col items-start text-left">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 lg:w-[700px]">{`Expanding access to preventive care for your team.`}</h2>
                            <p className="text-gray-200 mb-8 md:w-[500px]">
                                Convenient virtual wellness exams help employees detect health risks early and stay proactive about their wellbeing.
                            </p>
                        </aside>
                        <div className="min-w-[200px]">
                            <Button className='h-10 px-10 rounded-full bg-white hover:bg-transparent border-2 border-white hover:text-white text-black'>Learn More</Button>
                        </div>
                    </div>
                </section>

                <section className="w-full py-16 pb-7 flex justify-center z-10 bg-[#fdfaff] text-indigo-950">
                    <div className="xl:w-[1200px] mx-auto px-6 flex flex-col items-center">
                        <h2 className="text-3xl md:text-4xl font-bold lg:w-[700px] text-center">
                            Expanding access to preventive care for your team.
                        </h2>
                        <aside className="virtual-care w-full flex items-center gap-5">
                            <div className="flex-1 flex flex-col gap-4">
                                {/* Accordion List */}
                                <Accordion type="single" collapsible>
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger>A strategic partner</AccordionTrigger>
                                        <AccordionContent>
                                            We work closely with organizations to deliver tailored virtual care solutions.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-2">
                                        <AccordionTrigger>Commitment to clinical quality</AccordionTrigger>
                                        <AccordionContent>
                                            Our clinical team ensures the highest standards in virtual healthcare delivery.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-3">
                                        <AccordionTrigger>Strong satisfaction rates</AccordionTrigger>
                                        <AccordionContent>
                                            Our services consistently receive positive feedback from users and organizations.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-4">
                                        <AccordionTrigger>Addressing health disparities</AccordionTrigger>
                                        <AccordionContent>
                                            We focus on equitable access and outcomes for all populations.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-5">
                                        <AccordionTrigger>Accredited and certified</AccordionTrigger>
                                        <AccordionContent>
                                            Ricia Care meets industry standards for safety and quality.
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                            <div className="flex-1 flex justify-center items-center">
                                <img
                                    src="/mobileapp2.png"
                                    alt="Virtual care app"
                                    className="rounded-2xl w-full object-cover"
                                />
                            </div>
                        </aside>
                    </div>
                </section>

                <section className="w-full py-16 flex justify-center z-10 bg-white">
                    <div className="xl:w-[1200px] mx-auto px-6 flex flex-col items-center text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">{`Featured case studies`}</h2>
                        <br />
                        <WholePersonApproach />
                        <br /><br />
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
                                <button className="bg-[#6240E8] hover:bg-[#5433d4] text-white font-semibold rounded-full px-8 py-3 text-lg transition">
                                    Request a demo
                                </button>
                            </div>
                        </div>

                        <br /><br /><br />
                        <h2 className="text-3xl md:text-4xl lg:w-[700px] text-center font-bold mb-4">{`Serving more than half of Fortune 500 companies`}</h2>
                        <InfiniteLoopScroll />
                    </div>
                </section>

                <section className="w-full py-16 flex justify-center z-10 bg-gray-50">
                    <div className="xl:w-[1200px] mx-auto px-6 flex flex-col items-center text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">{`Featured case studies`}</h2>
                        <br />
                        <FeaturedCaseStudies />
                    </div>
                </section>


                <section className="w-full py-16 flex justify-center z-10 bg-indigo-950 text-white">
                    <div className="xl:w-[1200px] mx-auto px-6 flex items-center justify-between">
                        <aside className="flex flex-col items-start lg:w-[700px]">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">{`How can Teladoc Health add value to your organization?`}</h2>
                            <p className="text-sm">Let's Connect.</p>
                        </aside>
                        <Button className='rounded-full px-10 h-10 bg-white hover:bg-transparent border-2 border-white text-black hover:text-white'>Get in tourch</Button>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default OrganizationEmployers