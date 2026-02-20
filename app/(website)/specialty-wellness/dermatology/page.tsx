'use client';

import FAQs from '@/components/FAQs';
import Hero from '@/components/Hero';
import TestimonialsCarousel from '@/components/Testimonials';
import { Button } from '@/components/ui/button';
import { Ambulance, GalleryHorizontal, Hospital } from 'lucide-react';
import React from "react";

function Dermatology() {
    return (
        <div>
            <main className="min-h-[100dvh] h-auto flex flex-col items-center">
                <Hero
                    className={`max-h-[]`}
                    content={
                        <div className='size-full flex flex-col pb-[2rem] items-center justify-end gap-3 bg-emerald-50/20 text-center'>
                            <section className="w-full h-full xl:w-[1200px] flex items-end">
                                <div className="w-full flex flex-col gap-3 text-left mb-20">
                                    <h1 className="text-[3rem] leading-[3.5rem] font-bold">Expert skin care, on your schedule</h1>
                                    <p>
                                        Skip the wait for in-person visits. Connect with U.S. board-certified dermatologists online—anytime, from anywhere.
                                        Get a diagnosis, personalized treatment plan, and prescriptions delivered to your pharmacy, often within 24 hours.
                                    </p>
                                    <div className="relative flex items-center justify-center w-fit">
                                        <div className='size-6 rounded-full bg-primary animate-bounce absolute mb-8' />
                                        <div className='size-6 rounded-full bg-primary animate-ping absolute mb-8' />
                                        <Button className='h-12 rounded-3xl w-fit px-8 font-semibold my-5 z-10'>Get Started</Button>
                                    </div>
                                </div>
                                <div className="min-w-[700px] h-full flex justify-end relative">
                                    <div className="size-full w-[90%] overflow-hidden border-2 rounded-l-full rounded-b-full">
                                        <img src="https://plus.unsplash.com/premium_photo-1683121222517-f4d673c0d482?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="hypertension-free" className="size-full object-cover" />
                                    </div>
                                </div>
                            </section>
                        </div>
                    }
                />

                <section className="w-full py-10 bg-sky-50 flex flex-col items-center z-10">
                    <h2 className="text-[2.5rem] leading-tight font-bold text-[#351F65] text-center mb-4">
                        What our virtual dermatologists can help you with
                    </h2>
                    <p className="text-center mb-8 text-lg">
                        Our dermatologists diagnose and treat thousands of skin conditions, including:
                    </p>
                    <div className="xl:w-[1200px] mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-12 items-start">
                        {[
                            "Eczema",
                            "Acne",
                            "Dermatitis",
                            "Psoriasis",
                            "Rash",
                            "Rosacea",
                            "Herpes",
                            "Poison Ivy",
                            "Skin infections and more"
                        ].map((condition, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <svg className="w-6 h-6 text-[#6240E8]" fill="currentColor" viewBox="0 0 20 20">
                                    <circle cx="10" cy="10" r="10" fill="#E7EAFE" />
                                    <path fillRule="evenodd" d="M15.707 7.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L10 11.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" fill="#6240E8" />
                                </svg>
                                <span>{condition}</span>
                            </div>
                        ))}
                    </div>
                </section>


                <section className="w-full py-16 flex flex-col gap-4 items-center z-10 bg-white">
                    <div className="xl:w-[1200px] mx-auto px-6 flex items-center gap-8 rounded-4xl p-6 shadow-lg">
                        <aside className="size-full flex flex-col items-center justify-center gap-2">
                            <b className='text-[6rem]'>“</b>
                            <p>It was going to be weeks before I could get in to see a dermatologist in person. The Teladoc Health dermatologist got back to me the same day with a diagnosis.</p>

                            <b>Ashley W.</b>
                        </aside>
                        <aside className="min-w-[400px] h-auto">
                            <video src="https://cdn.pixabay.com/video/2020/06/23/42963-434316724_large.mp4" autoPlay playsInline loop muted className="size-full object-cover rounded-xl"></video>
                        </aside>
                    </div>
                </section>

                <FAQs />
            </main>
        </div>
    );
}

export default Dermatology