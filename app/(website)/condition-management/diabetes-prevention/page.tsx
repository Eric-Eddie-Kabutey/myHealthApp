'use client';

import React, { Suspense } from "react";
import FAQs from '@/components/FAQs';
import Hero from '@/components/Hero';
import TestimonialsCarousel from '@/components/Testimonials';
import { Button } from '@/components/ui/button';

export const dynamic = 'force-dynamic';

function DiabetesPreventionContent() {
    return (
        <div>
            <main className="min-h-[100dvh] h-auto flex flex-col items-center">

                {/* Hero Section */}
                <Hero
                    className={`max-h-[]`}
                    content={
                        <div className='size-full flex flex-col pb-[2rem] items-center justify-end gap-3 bg-emerald-50/20 text-center'>
                            <section className="w-full h-full xl:w-[1200px] flex items-end">
                                <div className="w-full flex flex-col gap-3 text-left mb-20">
                                    <h1 className="text-[3rem] leading-[3.5rem] font-bold">
                                        Reduce your risk of type 2 diabetes
                                    </h1>
                                    <p>
                                        Receive a smart scale, tailored guidance, and support from health experts—covered by your employer or health plan.
                                    </p>
                                    <div className="relative flex items-center justify-center w-fit">
                                        <div className='size-6 rounded-full bg-primary animate-bounce absolute mb-8' />
                                        <div className='size-6 rounded-full bg-primary animate-ping absolute mb-8' />
                                        <Button className='h-12 rounded-3xl w-fit px-8 font-semibold my-5 z-10'>
                                            Check my eligibility
                                        </Button>
                                    </div>
                                </div>
                                <div className="min-w-[700px] h-full flex">
                                    <section className="slid-down min-w-[100px] h-[40%] rounded-b-full bg-cyan-100"></section>
                                    <section className="slid-down min-w-[400px] h-full flex flex-col justify-end rounded-b-full bg-gradient-to-b from-[#00B5E2] via-[#00B5E2] via-blue-500 to-[#6240E8]">
                                        <div className="slid-down size-full bg-white overflow-hidden rounded-full">
                                            <img
                                                src="https://images.unsplash.com/photo-1470434767159-ac7bf1b43351?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                                alt=""
                                                className="main-content size-full object-cover"
                                            />
                                        </div>
                                    </section>
                                    <section className="slid-down w-full h-[70%] rounded-b-full bg-[#351F65]"></section>
                                </div>
                            </section>
                        </div>
                    }
                />

                {/* Zero Cost Banner */}
                <section className="w-full flex flex-col gap-5 items-center bg-white z-10 py-16">
                    <div className="w-full flex flex-col md:flex-row items-center justify-between border-2 border-indigo-600 rounded-3xl px-8 py-8 max-w-[1100px] mx-auto gap-6">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center justify-center bg-white rounded-full w-10 h-10">
                                😊
                            </div>
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold text-[#351F65] mb-1">
                                    Really. It's $0 cost to you.
                                </h2>
                                <p className="text-gray-800">
                                    Your employer, health plan or healthcare provider has your back.<br />
                                    They've already covered the entire cost of the program for you.
                                </p>
                            </div>
                        </div>
                        <Button className="h-12 rounded-full bg-[#6240E8] hover:bg-[#5433d4] text-white font-semibold px-8 text-lg">
                            Check Now
                        </Button>
                    </div>

                    {/* Main Offer Grid */}
                    <div className="w-full max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-8">
                        <div className="relative flex items-center justify-center min-h-[340px]">
                            <div className="w-[260px] h-[260px] bg-white rounded-2xl shadow-lg border flex items-center justify-center relative z-10">
                                <span className="absolute top-8 left-8 text-5xl font-extrabold text-gray-600">181.1</span>
                                <span className="absolute bottom-6 left-8 text-xs text-gray-400">RiciaCare</span>
                            </div>
                            {/* SVG Cards... (omitted for brevity but kept in your local file) */}
                        </div>

                        <div className="flex flex-col gap-4">
                            <span className="uppercase font-bold text-primary tracking-wide text-sm">
                                Diabetes Prevention Program
                            </span>
                            <h2 className="text-4xl font-bold text-[#351F65] leading-tight">
                                Get started today and receive:
                            </h2>
                            <ul className="flex flex-col gap-2 mb-4">
                                {[
                                    'A connected scale delivered to your home at no extra cost',
                                    'Guided lessons and resources to help you build healthy habits',
                                    'Personalized coaching for nutrition, meal planning, and more',
                                ]?.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="size-6 rounded-full bg-blue-100 flex items-center justify-center mt-1 flex-shrink-0">
                                            <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <Button className="h-10 px-8 rounded-full text-white font-semibold w-fit animate-bounce">
                                Check my eligibility
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Health App Section - FIXED HERE */}
                <section className="w-full py-16 flex justify-center z-10 bg-white">
                    <div className="xl:w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative flex items-center justify-center">
                            <img
                                src="/mobileapp.png"
                                alt="Health app screenshot"
                                className="relative z-10 w-[260px] h-auto rounded-[2rem] shadow-xl border"
                            />
                        </div>

                        <div className="flex flex-col gap-6">
                            <h2 className="text-[2.5rem] leading-tight font-bold text-[#351F65]">
                                Achieve your goals with<br />our health app
                            </h2>
                            <div className="flex gap-4 mt-4 flex-wrap">
                                <Button className="h-12 px-8 rounded-full bg-[#6240E8] hover:bg-[#5433d4] text-white">
                                    Check my eligibility
                                </Button>
                                {/* Fixed the <a> tag below */}
                                <a 
                                    href="#" 
                                    className="h-12 px-8 rounded-full border-2 border-[#6240E8] text-[#351F65] font-semibold text-lg flex items-center gap-2 hover:bg-[#f3f0ff] transition"
                                >
                                    Get the app
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonials & FAQs */}
                <section className="w-full bg-white flex flex-col items-center py-20 z-10">
                    <Suspense fallback={<div className="w-full h-40 bg-gray-100 animate-pulse rounded-xl" />}>
                        <TestimonialsCarousel />
                    </Suspense>
                </section>

                <Suspense fallback={<div className="w-full h-40 bg-gray-100 animate-pulse" />}>
                    <FAQs />
                </Suspense>

            </main>
        </div>
    );
}

export default function DiabetesPrevention() {
    return (
        <Suspense fallback={<div className="w-full min-h-screen bg-gray-50 animate-pulse" />}>
            <DiabetesPreventionContent />
        </Suspense>
    );
}