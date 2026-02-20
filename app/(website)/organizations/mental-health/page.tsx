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
import { LogoSmall } from '@/app/assets/images';
import Image from 'next/image';
import { logo } from '@/app/assets/icons';

function MentalHealth() {
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
                                    <h1 className="text-[3rem] leading-[3rem] font-bold">Mental health for employers</h1>
                                    <p>Break through barriers that prevent or delay employees from seeking care with programs personalized to support their mental health journey.</p>
                                    <div className="relative flex items-center justify-center w-fit">
                                        <div className='size-6 rounded-full bg-primary animate-bounce absolute mb-8' />
                                        <div className='size-6 rounded-full bg-primary animate-ping absolute mb-8' />
                                        <Button className='h-12 rounded-3xl w-fit px-8 font-semibold my-5 z-10'>Get in touch</Button>
                                    </div>
                                    {/* <p className='text-sm'>Many health plans and employers cover virtual care with no extra fees.</p> */}
                                </div>
                                <div className="min-w-[700px] h-full flex justify-end relative">
                                    <div className="size-full w-[90%] overflow-hidden border-2 rounded-l-full rounded-b-full">
                                        <img src="https://i.pinimg.com/1200x/d1/af/d8/d1afd888f16b19484dc62b963e0cccb0.jpg" alt="hypertension-free" className="size-full object-cover" />
                                    </div>
                                </div>
                            </section>
                        </div>
                    }
                />


                <section className="w-full py-16 flex justify-center z-10 bg-white">
                    <div className="xl:w-[1200px] mx-auto px-6 flex flex-col items-center text-center">
                        <aside className="w-full grid grid-cols-2 gap-7">
                            <div className="w-full flex gap-5">
                                <img src="https://i.pinimg.com/736x/ec/38/9d/ec389dd1a5f4a8f331151e46c8a6863f.jpg" alt="happy" className="rounded-r-full rounded-bl-full size-24 min-w-24 object-cover" />
                                <aside className="flex flex-col items-start text-left">
                                    <p className='text-indigo-900 font-semibold'>Expanded access and earlier intervention</p>
                                    <p className="text-sm">Address a wide spectrum of mental health needs, from reducing the stress of daily life to managing more severe conditions.</p>
                                </aside>
                            </div>
                            <div className="w-full flex gap-5">
                                <img src="https://i.pinimg.com/1200x/66/c3/31/66c331a7757b9d87397a05c46a678527.jpg" alt="happy" className="rounded-r-full rounded-bl-full size-24 min-w-24 object-cover" />
                                <aside className="flex flex-col items-start text-left">
                                    <p className='text-indigo-900 font-semibold'>Personalized experiences</p>
                                    <p className="text-sm">Optimize engagement, satisfaction and outcomes through highly personalized care plans, communications and 1:1 coaching.</p>
                                </aside>
                            </div>
                            <div className="w-full flex gap-5">
                                <img src="https://i.pinimg.com/1200x/55/8d/80/558d805ca6259504b1d9d3d4b5a94ac4.jpg" alt="happy" className="rounded-r-full rounded-bl-full size-24 min-w-24 object-cover" />
                                <aside className="flex flex-col items-start text-left">
                                    <p className='text-indigo-900 font-semibold'>High-quality, culturally appropriate care</p>
                                    <p className="text-sm">Provide employees convenient, confidential access to mental health support from the comfort of home.</p>
                                </aside>
                            </div>
                            <div className="w-full flex gap-5">
                                <img src="https://i.pinimg.com/736x/a6/d4/79/a6d4796c49ad423e41a473b7a43be8d8.jpg" alt="happy" className="rounded-r-full rounded-bl-full size-24 min-w-24 object-cover" />
                                <aside className="flex flex-col items-start text-left">
                                    <p className='text-indigo-900 font-semibold'>Improved outcomes</p>
                                    <p className="text-sm">An integrated whole-person experience bridges physical and mental healthcare needs, amplifying positive outcomes.</p>
                                </aside>
                            </div>
                        </aside>
                    </div>
                </section>

                <section className="w-full py-16 flex justify-center z-10 bg-indigo-50">
                    <div className="xl:w-[1200px] mx-auto px-6 flex flex-col items-center text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our impact on mental health outcomes</h2>
                        <aside className="w-full grid grid-cols-3 gap-5">
                            <div className="flex flex-col items-center">
                                <div className="flex items-center justify-center rounded-full overflow-hidden size-[250px] mb-4 bg-indigo-900 text-white">
                                    <div className="size-full flex items-center justify-center bg-sky-900">
                                        <b className="text-[3rem] md:text-[3rem]">37%</b>
                                    </div>
                                    <div className="size-full bg-gradient-to-r from-sky-900 to-white"></div>
                                </div>
                                <p className="text-gray-700">
                                    of members who engage with coaching experience clinical benefits*
                                </p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="flex items-center justify-center rounded-full overflow-hidden  size-[250px] mb-4 bg-indigo-900 text-white">
                                    <div className="size-full flex items-center justify-center bg-black text-white">
                                        <b className="text-[3rem] md:text-[3rem]">60%</b>
                                    </div>
                                    <div className="size-full bg-cyan-400 overflow-hidden">
                                        <img src="https://i.pinimg.com/736x/a7/78/1b/a7781b8c72004ae4f9c014cfeeffd005.jpg" alt="woman" className="size-full object-cover" />
                                    </div>
                                </div>
                                <p className="text-gray-700">
                                    of members with depression achieve symptom remission or a clinically meaningful treatment response within 12 weeks of care*                                </p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="flex flex-col items-center justify-center rounded-full overflow-hidden  size-[250px] mb-4 bg-indigo-900 text-white">
                                    <div className="size-full bg-cyan-400 overflow-hidden">
                                        <img src="https://i.pinimg.com/1200x/8c/88/f9/8c88f9d053a922668935297c9a3943c7.jpg" alt="woman" className="size-full object-cover" />
                                    </div>
                                    <div className="size-full flex items-center justify-center bg-[#004b54]">
                                        <b className="text-[3rem] md:text-[3rem]">37%</b>
                                    </div>
                                </div>
                                <p className="text-gray-700">
                                    more people access support when digital programs, coaching and clinical care are in one place*                                </p>
                            </div>
                        </aside>
                    </div>
                </section>


                <section className="w-full py-16 flex justify-center z-10 bg-white">
                    <div className="xl:w-[1200px] mx-auto px-6 flex flex-col items-center text-center">
                        <aside className="easy-to-access flex gap-5 w-full">
                            <div className="w-1/2 flex ">
                                <h2 className="text-[2.5rem] font-bold text-left leading-tight text-[#2d186a]">
                                    Easy-to-access<br />
                                    services remove the<br />
                                    stigma and barriers<br />
                                    to care
                                </h2>
                            </div>
                            <div className="w-1/2">
                                <Accordion type="multiple" className="w-full">
                                    <AccordionItem value="activities">
                                        <AccordionTrigger className="text-[#5f2eea] font-semibold text-lg">1,100+ self-guided activities</AccordionTrigger>
                                        <AccordionContent className="text-left text-gray-700">
                                            offer in-moment relief and ongoing support for common mental health triggers and conditions
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="coaching">
                                        <AccordionTrigger className="text-[#5f2eea] font-semibold text-lg">Coaching services</AccordionTrigger>
                                        <AccordionContent className="text-left text-gray-700">
                                            increase access and engagement through digital and live 1:1 support
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="crisis">
                                        <AccordionTrigger className="text-[#2d186a] font-semibold text-lg">Timely crisis outreach</AccordionTrigger>
                                        <AccordionContent className="text-left text-gray-700">
                                            connect employees to immediate support when they need it most
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="therapy">
                                        <AccordionTrigger className="text-[#2d186a] font-semibold text-lg">Evidence-based therapy</AccordionTrigger>
                                        <AccordionContent className="text-left text-gray-700">
                                            access proven therapeutic approaches tailored to individual needs
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        </aside>
                        <br />
                        <aside className="pay-per-use w-full h-[500px] rounded-3xl bg-emerald-900 text-white flex p-10 gap-0 items-center overflow-hidden relative">
                            <div className="flex flex-col justify-center text-left h-full px-10 min-w-[400px] z-10">
                                <div className="mb-2 flex items-center gap-2">
                                    <span className="text-xs">Partnership with</span>
                                    <Image src={logo} alt="BetterHelp Business" className="" />
                                </div>
                                <h3 className="text-[2.5rem] font-bold leading-tight mb-3">Simple pay-per-use<br />therapy</h3>
                                <p className="mb-6 text-lg">
                                    Ensure your employees can get quickly matched to a therapist within the BetterHelp nationwide network.**
                                </p>
                                <button className="border border-white rounded-full px-7 py-3 text-lg font-semibold bg-transparent hover:bg-white hover:text-emerald-800 transition w-fit">
                                    Request a demo
                                </button>
                            </div>
                            <div className="relative w-full h-full flex items-center justify-end">
                                <img src="https://i.pinimg.com/1200x/66/c3/31/66c331a7757b9d87397a05c46a678527.jpg" alt="happy" className="rounded-r-full rounded-bl-full size-full object-cover" />
                                <div className="absolute bottom-0 right-0 w-[200px] h-[150px] bg-[#ffffff] rounded-tl-[80px] rounded-br-3xl"></div>
                            </div>
                        </aside>
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

export default MentalHealth