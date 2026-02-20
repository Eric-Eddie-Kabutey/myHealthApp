'use client';

import FAQs from '@/components/FAQs';
import Hero from '@/components/Hero';
import TestimonialsCarousel from '@/components/Testimonials';
import { Button } from '@/components/ui/button';
import React, { useState } from "react";

function DiabetesPrevention() {

    return (
        <div>
            <main className="min-h-[100dvh] h-auto flex flex-col items-center">
                <Hero
                    className={`max-h-[]`}
                    content={
                        <div className='size-full flex flex-col pb-[2rem] items-center justify-end gap-3 bg-emerald-50/20 text-center'>
                            <section className="w-full h-full xl:w-[1200px] flex items-end">
                                <div className="w-full flex flex-col gap-3 text-left mb-20">
                                    <h1 className="text-[3rem] leading-[3.5rem] font-bold">Reduce your risk of type 2 diabetes</h1>
                                    <p>Receive a smart scale, tailored guidance, and support from health experts—covered by your employer or health plan.</p>
                                    <div className="relative flex items-center justify-center w-fit">
                                        <div className='size-6 rounded-full bg-primary animate-bounce absolute mb-8' />
                                        <div className='size-6 rounded-full bg-primary animate-ping absolute mb-8' />
                                        <Button className='h-12 rounded-3xl w-fit px-8 font-semibold my-5 z-10'>Check my eligibility</Button>
                                    </div>
                                </div>
                                <div className="min-w-[700px] h-full flex">
                                    <section className="slid-down min-w-[100px] h-[40%] rounded-b-full bg-cyan-100"></section>
                                    <section className="slid-down min-w-[400px] h-full flex flex-col justify-end rounded-b-full bg-gradient-to-b from-[#00B5E2] via-[#00B5E2] via-blue-500 to-[#6240E8]">
                                        <div className="slid-down size-full bg-white overflow-hidden rounded-full">
                                            <img src="https://images.unsplash.com/photo-1470434767159-ac7bf1b43351?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="main-content size-full object-cover" />
                                        </div>
                                    </section>
                                    <section className="slid-down w-full h-[70%] rounded-b-full bg-[#351F65]"></section>
                                </div>
                            </section>
                        </div>
                    }
                />

                <section className="w-full flex flex-col gap-5 items-center bg-white z-10 py-16">
                    {/* Top Info Banner */}
                    <div className="w-full flex flex-col md:flex-row items-center justify-between border-2 border-indigo-600 rounded-3xl px-8 py-8 max-w-[1100px] mx-auto gap-6">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center justify-center bg-white rounded-full w-10 h-10">
                                😊
                            </div>
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold text-[#351F65] mb-1">Really. It’s $0 cost to you.</h2>
                                <p className="text-gray-800">Your employer, health plan or healthcare provider has your back.<br />They’ve already covered the entire cost of the program for you.</p>
                            </div>
                        </div>
                        <Button className="h-12 rounded-full bg-[#6240E8] hover:bg-[#5433d4] text-white font-semibold px-8 text-lg">
                            Check Now
                        </Button>
                    </div>

                    {/* Main Offer Section */}
                    <div className="w-full max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-8">
                        {/* Left: Device and Cards */}
                        <div className="relative flex items-center justify-center min-h-[340px]">
                            {/* Smart Scale */}
                            <div className="w-[260px] h-[260px] bg-white rounded-2xl shadow-lg border flex items-center justify-center relative z-10">
                                <span className="absolute top-8 left-8 text-5xl font-extrabold text-gray-600">181.1</span>
                                <span className="absolute bottom-6 left-8 text-xs text-gray-400">RiciaCare</span>
                            </div>
                            {/* Calorie Breakdown Card */}
                            <div className="absolute -top-8 left-40 bg-white rounded-xl shadow-md border p-3 w-[140px] h-[110px] flex flex-col items-center justify-center">
                                <span className="text-xs text-gray-500 mb-1">Calorie breakdown</span>
                                <svg width="60" height="60" viewBox="0 0 60 60">
                                    <circle cx="30" cy="30" r="28" fill="#F3F3F3" />
                                    <path d="M30 30 L30 10 A20 20 0 0 1 50 30 Z" fill="#6240E8" />
                                    <path d="M30 30 L50 30 A20 20 0 0 1 30 50 Z" fill="#00B5E2" />
                                    <path d="M30 30 L30 50 A20 20 0 0 1 10 30 Z" fill="#F3C300" />
                                    <circle cx="30" cy="30" r="12" fill="#fff" />
                                    <text x="30" y="34" textAnchor="middle" fontSize="12" fill="#351F65" fontWeight="bold">1 of 3</text>
                                    <text x="30" y="46" textAnchor="middle" fontSize="9" fill="#888">in range</text>
                                </svg>
                            </div>
                            {/* Progress Chart Card */}
                            <div className="absolute bottom-0 left-0 bg-white rounded-xl shadow-md border p-3 w-[180px] h-[90px] flex flex-col items-center justify-center">
                                <span className="text-xs text-gray-500 mb-1">Progress</span>
                                <svg width="160" height="40" viewBox="0 0 160 40">
                                    <polyline points="0,30 40,25 80,28 120,20 160,22" fill="none" stroke="#6240E8" strokeWidth="3" />
                                    <line x1="0" y1="35" x2="160" y2="35" stroke="#00B5E2" strokeWidth="2" />
                                </svg>
                            </div>
                        </div>
                        {/* Right: Program Details */}
                        <div className="flex flex-col gap-4">
                            <span className="uppercase font-bold text-primary tracking-wide text-sm">Diabetes Prevention Program</span>
                            <h2 className="text-4xl font-bold text-[#351F65] leading-tight">
                                Get started today and receive:
                            </h2>
                            <ul className="flex flex-col gap-2 mb-4">
                                <li className="flex items-start gap-3">
                                    <div className="size-6 rounded-full bg-blue-100 flex items-center justify-center mt-1 flex-shrink-0">
                                        <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-700">A connected scale delivered to your home at no extra cost</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="size-6 rounded-full bg-blue-100 flex items-center justify-center mt-1 flex-shrink-0">
                                        <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-700">Guided lessons and resources to help you build healthy habits</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="size-6 rounded-full bg-blue-100 flex items-center justify-center mt-1 flex-shrink-0">
                                        <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-700">Personalized coaching for nutrition, meal planning, and more</span>
                                </li>
                            </ul>
                            <Button className="h-10 px-8 rounded-full text-white font-semibold w-fit animate-bounce">
                                Check my eligibility
                            </Button>
                            <span className="text-gray-700 font-medium mt-4">Notice: Device availability may vary*</span>
                        </div>
                    </div>
                </section>

                <section className="w-full py-6 flex items-center justify-center z-10 bg-indigo-50">
                    <div className="xl:w-[1200px] flex items-center justify-between">
                        <div className="flex flex-col w-[600px]">
                            <h1 className="text-[3rem] leading-[3.5rem] font-bold">A personalized plan for your health</h1>
                            <p>Everyone’s health journey is different. Receive custom guidance and support from coaches to help you reach your goals.</p>
                        </div>
                        <div className="size-[300px] rounded-full overflow-hidden">
                            <img src="https://plus.unsplash.com/premium_photo-1723618948933-f677be6e72e7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="nutrition" className="size-full object-cover" />
                        </div>
                    </div>
                </section>

                <section className="w-full py-16 flex justify-center z-10 bg-white">
                    <div className="xl:w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left: App Image & Decorative Shapes */}
                        <div className="relative flex items-center justify-center">
                            <div className="absolute -top-8 -left-8 w-32 h-32 rounded-full bg-[#6240E8] opacity-30"></div>
                            <div className="absolute top-24 left-0 w-16 h-16 rounded-full bg-[#00B5E2] opacity-40"></div>
                            <div className="absolute bottom-0 left-12 w-20 h-20 rounded-full bg-[#008940] opacity-30"></div>
                            <div className="absolute bottom-8 right-0 w-16 h-16 rounded-full bg-[#F3C300] opacity-30"></div>
                            <img
                                src="/mobileapp.png"
                                alt="Health app screenshot"
                                className="relative z-10 w-[260px] h-auto rounded-[2rem] shadow-xl border"
                            />
                        </div>
                        {/* Right: Content */}
                        <div className="flex flex-col gap-6">
                            <h2 className="text-[2.5rem] leading-tight font-bold text-[#351F65]">
                                Achieve your goals with<br />our health app
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
                                <ul className="flex flex-col gap-2">
                                    <li className="flex items-center gap-2 text-[#6240E8]"><span className="text-xl">•</span><span className="text-gray-900">Monitor your progress over time</span></li>
                                    <li className="flex items-center gap-2 text-[#6240E8]"><span className="text-xl">•</span><span className="text-gray-900">Easily share updates with your care team</span></li>
                                    <li className="flex items-center gap-2 text-[#6240E8]"><span className="text-xl">•</span><span className="text-gray-900">Set personal goals and track achievements</span></li>
                                </ul>
                                <ul className="flex flex-col gap-2">
                                    <li className="flex items-center gap-2 text-[#6240E8]"><span className="text-xl">•</span><span className="text-gray-900">Chat with a coach for support</span></li>
                                    <li className="flex items-center gap-2 text-[#6240E8]"><span className="text-xl">•</span><span className="text-gray-900">Log meals with photos</span></li>
                                    <li className="flex items-center gap-2 text-[#6240E8]"><span className="text-xl">•</span><span className="text-gray-900">Receive tailored nutrition tips</span></li>
                                </ul>
                            </div>
                            <div className="flex gap-4 mt-4 flex-wrap">
                                <Button className="h-12 px-8 rounded-full bg-[#6240E8] hover:bg-[#5433d4] text-white">
                                    Check my eligibility
                                </Button>
                                <a
                                    href="#"
                                    className="h-12 px-8 rounded-full border-2 border-[#6240E8] text-[#351F65] font-semibold text-lg flex items-center gap-2 hover:bg-[#f3f0ff] transition"
                                >
                                    Get the app
                                    <span className="flex gap-1">
                                        <i className="fab fa-apple"></i>
                                        <i className="fab fa-google-play"></i>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="w-full bg-white flex flex-col items-center py-20 z-10">
                    <div className="xl:w-[1200px] mx-auto px-6 flex flex-col items-center gap-8">
                        <h2 className="text-4xl md:text-5xl font-bold text-[#351F65] text-center leading-light mb-2">
                            More than 700,000 people<br />are choosing Ricia Care
                        </h2>
                        <TestimonialsCarousel />
                    </div>
                </section>

                <FAQs />
            </main>
        </div>
    );
}

export default DiabetesPrevention