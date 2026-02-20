'use client';

import FAQs from '@/components/FAQs';
import Hero from '@/components/Hero';
import TestimonialsCarousel from '@/components/Testimonials';
import { Button } from '@/components/ui/button';
import React from "react";

function PrimaryCare() {
    return (
        <div>
            <main className="min-h-[100dvh] h-auto flex flex-col items-center">
                <Hero
                    className={`max-h-[]`}
                    content={
                        <div className='size-full flex flex-col pb-[2rem] items-center justify-end gap-3 bg-emerald-50/20 text-center'>
                            <section className="w-full h-full xl:w-[1200px] flex items-end">
                                <div className="w-full flex flex-col gap-3 text-left mb-20">
                                    <p>Virtual Primary Care</p>
                                    <h1 className="text-[3rem] leading-[3rem] font-bold">Access care from anywhere, anytime</h1>
                                    <p>Connect with licensed providers by phone or video—often with same-day appointments available.</p>
                                    <div className="relative flex items-center justify-center w-fit">
                                        <div className='size-6 rounded-full bg-primary animate-bounce absolute mb-8' />
                                        <div className='size-6 rounded-full bg-primary animate-ping absolute mb-8' />
                                        <Button className='h-12 rounded-3xl w-fit px-8 font-semibold my-5 z-10'>Find a provider</Button>
                                    </div>
                                    <p className='text-sm'>Many health plans and employers cover virtual care with no extra fees.</p>
                                </div>
                                <div className="min-w-[700px] h-full flex justify-end relative">
                                    <div className="size-full w-[90%] overflow-hidden border-2 rounded-l-full rounded-b-full">
                                        <img src="https://i.pinimg.com/736x/91/43/39/914339b75f15daba84052b119cd3ccf8.jpg" alt="hypertension-free" className="size-full object-cover" />
                                    </div>
                                    <div className="size-[200px] text-xl flex flex-col items-center justify-center absolute bottom-20 left-10 rounded-r-full rounded-b-full bg-indigo-600 text-white">
                                        <b>$0.00</b>
                                        <span className="text-sm">Yearly Checkup **</span>
                                    </div>
                                </div>
                            </section>
                        </div>
                    }
                />


                <section className="w-full py-16 flex justify-center z-10 bg-sky-50">
                    <div className="xl:w-[1200px] mx-auto px-6 flex flex-col items-center text-center">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">{`Primary care that’s all about your needs`}</h2>
                        <p className="text-gray-800 mb-8">Maybe you want to stay on top of your health now so you can save money down the road. Maybe you have a chronic condition that requires ongoing support. Or maybe you need someone who can address both your current concerns and future goals.</p>
                        <p className="my-4">Your Teladoc Health primary care provider is your go-to for it all. Get help for:</p>
                        <div className="grid grid-cols-4 gap-4">
                            {[
                                { label: "Allergies", icon: "🌼" },
                                { label: "Diabetes", icon: "🩸" },
                                { label: "Cold and flu", icon: "🤧" },
                                { label: "Anxiety", icon: "😟" },
                                { label: "Back pain", icon: "💪" },
                                { label: "Sexual health", icon: "❤️" },
                                { label: "High blood pressure", icon: "🩺" },
                                { label: "And more", icon: "➕" },
                            ].map(({ label, icon }) => (
                                <div
                                    key={label}
                                    className="flex flex-col items-center justify-center rounded-2xl gap-2 border border-gray-100"
                                >
                                    <span className="text-lg mb-2">{icon}</span>
                                    <span className="font-semibold text-gray-900">{label}</span>
                                </div>
                            ))}
                        </div>
                        
                        <br />
                        <Button className='h-10 rounded-full mt-4'>Get Started Now</Button>
                        <small className='my-2'>Your annual checkup is $0.</small>
                    </div>
                </section>

                <section className="w-full py-16 flex justify-center z-10 bg-white">
                    <div className="xl:w-[1200px] mx-auto px-6 flex flex-col items-center text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">{`What to expect with Primary Care`}</h2>
                        <p className="text-gray-800 mb-8 md:w-[800px]">If you’ve never had a primary care provider or are new to seeing one virtually, we’ve taken the guesswork out of getting started.</p>
                        <br />
                        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Before your visit */}
                            <div className="flex flex-col items-center shadow p-4 rounded-lg bg-white">
                                <img src="https://i.pinimg.com/736x/17/3f/00/173f00fb5afd6ee0c581ae0567a044bb.jpg" alt="Provider availability app screen" className="w-24 h-24 mb-3 object-cover rounded-full" />
                                <h3 className="text-xl font-semibold mb-2">Before your visit</h3>
                                <p className="text-gray-600">
                                    Create your account and fill out a brief health assessment so the primary care provider you choose can get to know you. You’ll also be mailed a blood pressure monitor so you can record readings for your care team.
                                </p>
                            </div>
                            {/* During your visit */}
                            <div className="flex flex-col items-center shadow p-4 rounded-lg bg-white">
                                <img src="https://i.pinimg.com/736x/b3/52/8d/b3528d139e1b1f342f180064cdb25913.jpg" alt="Patient video call with provider" className="w-24 h-24 mb-3 object-cover rounded-full" />
                                <h3 className="text-xl font-semibold mb-2">During your visit</h3>
                                <p className="text-gray-600">
                                    Use the time with your provider to discuss your health history, concerns and goals. Your provider will build a relationship with you over time, making sure you’re up to date on recommended screenings, supporting you on any conditions and building a custom care plan.
                                </p>
                            </div>
                            {/* After your visit */}
                            <div className="flex flex-col items-center shadow p-4 rounded-lg bg-white">
                                <img src="https://i.pinimg.com/1200x/bc/cb/2a/bccb2ad86fe9cfcea0f736cce60d796f.jpg" alt="App screen of visit summary" className="w-24 h-24 mb-3 object-cover rounded-full" />
                                <h3 className="text-xl font-semibold mb-2">After your visit</h3>
                                <p className="text-gray-600">
                                    Look to your account for lab orders, prescriptions and next steps—all part of your custom care plan. If you need to get care in person, your provider and care team will refer you, as well as answer any questions you have.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>



                <section className="w-full py-16 flex justify-center z-10 bg-sky-50">
                    <div className="xl:w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="flex flex-col gap-6">
                            <h2 className="text-[2.5rem] leading-tight font-bold text-[#351F65]">
                                Manage your health with our Primary Care app
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
                                <ul className="flex flex-col gap-2">
                                    <li className="flex items-center gap-2 text-[#6240E8]"><span className="text-xl">•</span><span className="text-gray-900">Book virtual appointments easily</span></li>
                                    <li className="flex items-center gap-2 text-[#6240E8]"><span className="text-xl">•</span><span className="text-gray-900">Access your care plan and visit summaries</span></li>
                                    <li className="flex items-center gap-2 text-[#6240E8]"><span className="text-xl">•</span><span className="text-gray-900">Track medications and set reminders</span></li>
                                </ul>
                                <ul className="flex flex-col gap-2">
                                    <li className="flex items-center gap-2 text-[#6240E8]"><span className="text-xl">•</span><span className="text-gray-900">Message your provider securely</span></li>
                                    <li className="flex items-center gap-2 text-[#6240E8]"><span className="text-xl">•</span><span className="text-gray-900">Monitor health stats like blood pressure</span></li>
                                    <li className="flex items-center gap-2 text-[#6240E8]"><span className="text-xl">•</span><span className="text-gray-900">Get personalized tips for your wellbeing</span></li>
                                </ul>
                            </div>
                            <div className="flex gap-4 mt-4 flex-wrap">
                                <Button className="h-12 px-8 rounded-full bg-[#6240E8] hover:bg-[#5433d4] text-white">
                                    Find a provider
                                </Button>
                                <a
                                    href="#"
                                    className="h-12 px-8 rounded-full border-2 border-[#6240E8] text-[#351F65] font-semibold text-lg flex items-center gap-2 hover:bg-[#f3f0ff] transition"
                                >
                                    Download the app
                                    <span className="flex gap-1">
                                        <i className="fab fa-apple"></i>
                                        <i className="fab fa-google-play"></i>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="relative flex items-center justify-center">
                            <div className="absolute -top-8 -left-8 w-32 h-32 rounded-full bg-[#6240E8] opacity-30"></div>
                            <div className="absolute top-24 left-0 w-16 h-16 rounded-full bg-[#00B5E2] opacity-40"></div>
                            <div className="absolute bottom-0 left-12 w-20 h-20 rounded-full bg-[#008940] opacity-30"></div>
                            <div className="absolute bottom-8 right-0 w-16 h-16 rounded-full bg-[#F3C300] opacity-30"></div>
                            <img
                                src="/mobileapp.png"
                                alt="Primary Care app screenshot"
                                className="relative z-10 w-[260px] h-auto rounded-[2rem] shadow-xl border"
                            />
                        </div>
                    </div>
                </section>

                <FAQs />
            </main>
        </div>
    );
}

export default PrimaryCare