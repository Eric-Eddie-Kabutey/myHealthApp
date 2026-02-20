'use client';

import FAQs from '@/components/FAQs';
import Hero from '@/components/Hero';
import TestimonialsCarousel from '@/components/Testimonials';
import { Button } from '@/components/ui/button';
import { Ambulance, GalleryHorizontal, Hospital, Stethoscope } from 'lucide-react';
import React from "react";

function MedicalOptions() {
    return (
        <div>
            <main className="min-h-[100dvh] h-auto flex flex-col items-center">
                <Hero
                    className={`max-h-[]`}
                    content={
                        <div className='size-full flex flex-col pb-[2rem] items-center justify-end gap-3 bg-emerald-50/20 text-center'>
                            <section className="w-full h-full xl:w-[1200px] flex items-end">
                                <div className="w-full flex flex-col gap-3 text-left mb-20">
                                    <h1 className="text-[3rem] leading-[3.5rem] font-bold">Feel confident with a second opinion</h1>
                                    <p>
                                        Making health decisions can be overwhelming. A second opinion from leading medical experts can help clear the fog.
                                    </p>
                                    <div className="relative flex items-center justify-center w-fit">
                                        <div className='size-6 rounded-full bg-primary animate-bounce absolute mb-8' />
                                        <div className='size-6 rounded-full bg-primary animate-ping absolute mb-8' />
                                        <Button className='h-12 rounded-3xl w-fit px-8 font-semibold my-5 z-10'>Get Started</Button>
                                    </div>
                                </div>
                                <div className="min-w-[700px] h-full flex justify-end relative">
                                    <div className="size-full w-[90%] overflow-hidden border-2 rounded-l-full rounded-b-full">
                                        <img src="https://plus.unsplash.com/premium_photo-1681996484614-6afde0d53071?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="experts" className="size-full object-cover" />
                                    </div>
                                </div>
                            </section>
                        </div>
                    }
                />

                <section className="w-full py-10 bg-white flex flex-col items-center z-10">
                    <div className="xl:w-[1200px] mx-auto px-6 flex flex-col items-start">
                        <h2 className="text-[2.5rem] leading-tight font-bold text-[#351F65] mb-4">
                            Find the right medical support for your needs
                        </h2>
                        <p className="mb-8">
                            Getting a second opinion from a qualified medical professional can help you feel more confident about your health decisions. Our experts review your diagnosis or treatment plan and provide clear guidance to help you move forward.
                        </p>
                        <b className="my-3 text-lg">Consider an Expert Medical Opinion if you or your family:</b>
                        <div className="flex gap-5 my-3">
                            {[
                                "Want to confirm a diagnosis",
                                "Need advice on treatment options",
                                "Are considering a surgical procedure",
                            ].map((condition, i) => (
                                <div key={i} className="flex flex-col gap-3">
                                    <div className="bg-primary text-white size-12 rounded-full flex items-center justify-center">
                                        {
                                            i === 0 ? <Stethoscope className='size-5' /> : i === 1 ? <Ambulance className='size-5' /> : <Hospital className='size-5' />
                                        }
                                    </div>
                                    <span className='text-indigo-950 font-semibold'>{condition}</span>
                                </div>
                            ))}
                        </div>
                        <div className="w-full my-3 flex justify-center">
                            <Button className='h-10 px-7 rounded-full'>Get Started</Button>
                        </div>
                    </div>
                </section>

                <section className="w-full py-[10dvh] flex flex-col gap-4 items-center z-10 bg-sky-950 text-white">
                    <div className="xl:w-[1200px] mx-auto px-6 flex items-center gap-8">
                        <div className="size-[300px] min-w-[300px] rounded-full bg-white overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1657028310103-f53dd49a856a?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="med" className="size-full object-cover" />
                        </div>
                        <div className="flex flex-col gap-4">
                            <h3 className="text-[2.5rem] leading-tight font-bold">Why Choose Us?</h3>
                            <p>Our team of experts is dedicated to providing you with the best possible care and support. We offer help with common conditions such as:</p>

                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { name: "Cancer", desc: "Expert review of cancer diagnoses and treatment plans." },
                                    { name: "Musculoskeletal disorders", desc: "Guidance for bone, joint, and muscle conditions." },
                                    { name: "Bariatric concerns", desc: "Support for weight management and bariatric surgery decisions." },
                                    { name: "Circulatory issues", desc: "Advice on blood vessel and circulation-related health." },
                                    { name: "Cardiac health", desc: "Second opinions for heart conditions and treatments." },
                                    { name: "And more", desc: "Help with a wide range of medical concerns." },
                                ].map((condition, i) => (
                                    <div key={i} className="flex flex-col gap-2">
                                        <b className="text-lg">✔ {condition.name}</b>
                                        <p className="text-sm text-gray-200">{condition.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="steps w-full z-10 bg-white flex flex-col items-center py-[10dvh]">
                    <div className="xl:w-[1200px] mx-auto px-6 flex flex-col items-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#351F65] text-center mb-10">
                            Move forward with 3 simple steps
                        </h2>
                        <div className="w-full flex flex-col items-center">
                            <br />
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-8">
                                {/* Step 1 */}
                                <div className="flex flex-col items-center">
                                    {/* <img src="/step1-medical.png" alt="Start your case" className="w-56 h-auto mb-4" /> */}
                                    <div className="bg-[#F3F3F3] rounded-full w-16 h-16 flex items-center justify-center text-3xl font-bold text-[#6240E8] mb-2">1</div>
                                    <h3 className="font-bold text-lg mb-2">Start your case</h3>
                                    <p className="text-center text-gray-700">
                                        by phone, online or on the Ricia Care app
                                    </p>
                                </div>
                                {/* Step 2 */}
                                <div className="flex flex-col items-center">
                                    {/* <img src="/step2-medical.png" alt="Get expert guidance" className="w-56 h-auto mb-4" /> */}
                                    <div className="bg-[#F3F3F3] rounded-full w-16 h-16 flex items-center justify-center text-3xl font-bold text-[#6240E8] mb-2">2</div>
                                    <h3 className="font-bold text-lg mb-2">Get expert guidance</h3>
                                    <p className="text-center text-gray-700">
                                        We’ll start your review with a phone call from a member of our expert care team, who’ll coordinate your case.
                                    </p>
                                </div>
                                {/* Step 3 */}
                                <div className="flex flex-col items-center">
                                    {/* <img src="/step3-medical.png" alt="Feel confident in the steps ahead" className="w-56 h-auto mb-4" /> */}
                                    <div className="bg-[#F3F3F3] rounded-full w-16 h-16 flex items-center justify-center text-3xl font-bold text-[#6240E8] mb-2">3</div>
                                    <h3 className="font-bold text-lg mb-2">Feel confident in the steps ahead</h3>
                                    <p className="text-center text-gray-700">
                                        with a clear diagnosis and/or treatment plan that’s right for you.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4 mt-4">
                                <Button className="h-12 px-8 rounded-full bg-[#6240E8] text-white font-semibold text-lg">
                                    Start your case
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>


                <FAQs />
            </main>
        </div>
    );
}

export default MedicalOptions