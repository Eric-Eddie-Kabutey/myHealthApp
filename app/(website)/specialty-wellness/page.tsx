'use client';

import FAQs from '@/components/FAQs';
import Hero from '@/components/Hero';
import TestimonialsCarousel from '@/components/Testimonials';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import React from "react";

function SpecialtyWellness() {
    return (
        <div>
            <main className="min-h-[100dvh] h-auto flex flex-col items-center">
                <Hero
                    className={`max-h-[]`}
                    content={
                        <div className='size-full flex flex-col pb-[2rem] items-center justify-end gap-3 bg-gradient-to-br from-indigo-900 to-emerald-700 text-white text-center'>
                            <section className="w-full h-full xl:w-[1200px] flex items-end">
                                <div className="w-full flex flex-col gap-3 text-left mb-20">
                                    <h1 className="text-[3rem] leading-[3.5rem] font-bold">Boost your health with ease</h1>
                                    <p>Our specialty and wellness services provide you with high-quality connected care for the whole you - by phone, video or app</p>
                                    <div className="relative flex items-center justify-center w-fit">
                                        <div className='size-6 rounded-full bg-white animate-bounce absolute mb-8' />
                                        <div className='size-6 rounded-full bg-white animate-ping absolute mb-8' />
                                        <Button className='h-12 bg-white text-black hover:bg-transparent border-2 border-white hover:text-white rounded-3xl w-fit px-8 font-semibold my-5 z-10'>Get Started</Button>
                                    </div>
                                </div>
                                <div className="min-w-[700px] h-full flex justify-center items-center relative">
                                    <div className='size-[40%] rounded-full animate-ping bg-white blur-3xl absolute'/>
                                    <img src="/mobileapp2.png" alt="" className='w-full z-10 main-content'/>
                                </div>
                            </section>
                        </div>
                    }
                />



                <section className="w-full py-16 flex flex-col items-center justify-center z-10 bg-white">
                    <h2 className="text-3xl md:text-4xl font-bold leading-light text-[#351F65] text-center mb-8">
                        Some ways Ricia Care can help
                    </h2>
                    <div className="xl:w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left: Text Content */}
                        <div className="flex flex-col gap-6 items-start">
                            <h3 className="text-3xl md:text-4xl font-bold text-[#351F65] leading-tight">
                                Online Specialty & Wellness Care | Ricia Care
                            </h3>
                            <ul className="flex flex-col gap-6 text-left">
                                <li className="flex items-start gap-3">
                                    <span className="mt-1">
                                        <svg className="w-6 h-6 text-[#6240E8]" fill="currentColor" viewBox="0 0 20 20">
                                            <circle cx="10" cy="10" r="10" fill="#E7EAFE" />
                                            <path fillRule="evenodd" d="M15.707 7.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L10 11.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" fill="#6240E8" />
                                        </svg>
                                    </span>
                                    <span>
                                        <span className="font-bold">Dermatology:</span> Upload photos to get a treatment plan for skin conditions like acne, eczema and more. <a href="#" className="text-[#6240E8] underline">Read more about Dermatology</a>
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-1">
                                        <svg className="w-6 h-6 text-[#6240E8]" fill="currentColor" viewBox="0 0 20 20">
                                            <circle cx="10" cy="10" r="10" fill="#E7EAFE" />
                                            <path fillRule="evenodd" d="M15.707 7.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L10 11.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" fill="#6240E8" />
                                        </svg>
                                    </span>
                                    <span>
                                        <span className="font-bold">Expert Medical Opinion:</span> Get an expert opinion on a diagnosis or treatment plan. <a href="#" className="text-[#6240E8] underline">Read more about EMO</a>
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-1">
                                        <svg className="w-6 h-6 text-[#6240E8]" fill="currentColor" viewBox="0 0 20 20">
                                            <circle cx="10" cy="10" r="10" fill="#E7EAFE" />
                                            <path fillRule="evenodd" d="M15.707 7.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L10 11.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" fill="#6240E8" />
                                        </svg>
                                    </span>
                                    <span>
                                        <span className="font-bold">Local in-person care:</span> Get help finding local medical providers to see in person.
                                    </span>
                                </li>
                            </ul>
                        </div>
                        {/* Right: Image & App Mockup */}
                        <div className="w-[400px] relative h-[400px] flex flex-col items-center justify-center">
                            <div className="absolute right-0 top-0 w-[250px] h-[250px] bg-[#4FC3F7] rounded-br-[40%] rounded-tl-[60%] -z-10"></div>
                            <div className="relative rounded-2xl bg-white overflow-hidden shadow-lg w-[220px] h-[300px] mb-6">
                                <img src="https://images.unsplash.com/photo-1651008376811-b90baee60c1f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="doctor" className="w-full h-full object-cover" />
                            </div>
                            <img src="/mobileapp.png" alt="app mockup" className="w-[150px] h-auto rounded-xl absolute -bottom-10 left-10 bg-white shadow-md border" />
                        </div>
                    </div>

                    <br /><br /><br /><br />

                    <div className="xl:w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="w-[400px] relative h-[400px] flex flex-col items-center justify-center">
                            <div className="absolute left-0 top-0 w-[250px] h-[250px] bg-emerald-600 rounded-br-[40%] rounded-tl-[60%] -z-10"></div>
                            <div className="relative rounded-2xl bg-white overflow-hidden shadow-lg w-[220px] h-[300px] mb-6">
                                <img src="https://images.unsplash.com/photo-1581579439002-e29ac578f8d4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="doctor" className="w-full h-full object-cover" />
                            </div>
                            <img src="/mobileapp.png" alt="app mockup" className="w-[150px] h-auto rounded-xl absolute -bottom-10 right-10 bg-white shadow-md border" />
                        </div>
                        <div className="flex flex-col gap-6 items-start">
                            <h3 className="text-3xl md:text-4xl font-bold text-[#351F65] leading-tight">
                                Wellness Care
                            </h3>
                            <ul className="flex flex-col gap-6 text-left">
                                <li className="flex items-start gap-3">
                                    <span className="mt-1">
                                        <svg className="w-6 h-6 text-[#6240E8]" fill="currentColor" viewBox="0 0 20 20">
                                            <circle cx="10" cy="10" r="10" fill="#E7EAFE" />
                                            <path fillRule="evenodd" d="M15.707 7.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L10 11.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" fill="#6240E8" />
                                        </svg>
                                    </span>
                                    <span>
                                        <span className="font-bold">Nutrition:</span> Work with a dietitian to eat healthier or manage your weight. <a href="#" className="text-[#6240E8] underline">Read more about Nutrition</a>
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-1">
                                        <svg className="w-6 h-6 text-[#6240E8]" fill="currentColor" viewBox="0 0 20 20">
                                            <circle cx="10" cy="10" r="10" fill="#E7EAFE" />
                                            <path fillRule="evenodd" d="M15.707 7.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L10 11.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" fill="#6240E8" />
                                        </svg>
                                    </span>
                                    <span>
                                        <span className="font-bold">Improve sleep:</span> Improve your quality of sleep and develop better sleep habits with the BetterSleep app. <span className="text-[#6240E8] underline">Try 30 days for $0</span>
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-1">
                                        <svg className="w-6 h-6 text-[#6240E8]" fill="currentColor" viewBox="0 0 20 20">
                                            <circle cx="10" cy="10" r="10" fill="#E7EAFE" />
                                            <path fillRule="evenodd" d="M15.707 7.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L10 11.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" fill="#6240E8" />
                                        </svg>
                                    </span>
                                    <span>
                                        <span className="font-bold">Tobacco Cessation:</span> Get the help you need to quit with doctor-prescribed medications (if right for you) and ongoing support from a registered nurse.
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-1">
                                        <svg className="w-6 h-6 text-[#6240E8]" fill="currentColor" viewBox="0 0 20 20">
                                            <circle cx="10" cy="10" r="10" fill="#E7EAFE" />
                                            <path fillRule="evenodd" d="M15.707 7.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L10 11.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" fill="#6240E8" />
                                        </svg>
                                    </span>
                                    <span>
                                        <span className="font-bold">Back and Joint Care:</span> Connect with a health coach and get a personalized program with exercise videos.
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-1">
                                        <svg className="w-6 h-6 text-[#6240E8]" fill="currentColor" viewBox="0 0 20 20">
                                            <circle cx="10" cy="10" r="10" fill="#E7EAFE" />
                                            <path fillRule="evenodd" d="M15.707 7.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L10 11.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" fill="#6240E8" />
                                        </svg>
                                    </span>
                                    <span>
                                        <span className="font-bold">Sexual Health:</span> Get a lab order for sexually transmitted diseases [STDs] without going to a doctor's office.
                                    </span>
                                </li>
                            </ul>

                            <Button>Register now <ArrowRight/></Button>
                        </div>
                    </div>
                </section>

                <section className="w-full bg-emerald-950 text-white flex flex-col items-center py-20 z-10">
                    <div className="xl:w-[1200px] mx-auto px-6 flex items-center gap-[10rem]">
                        <div className="w-500px flex flex-col">
                            <h3 className="text-3xl md:text-4xl font-bold leading-tight">
                                No insurance? No problem.
                            </h3>
                            <p>Get the care you need when you need it at a cost you can afford—learn more.</p>
                        </div>
                        <Button>Register for Free</Button>
                    </div>
                </section>

            </main>
        </div>
    );
}

export default SpecialtyWellness