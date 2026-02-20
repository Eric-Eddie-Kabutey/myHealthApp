'use client';

import FAQs from '@/components/FAQs';
import Hero from '@/components/Hero';
import { Button } from '@/components/ui/button';
import React from 'react'

function ConditionManagement() {
    return <div>
        <main className="min-h-[100dvh] h-auto flex flex-col items-center">
            <Hero className={`max-h-[670px] pt-[70px]`} content={<div className='size-full flex flex-col pb-[2rem] items-center justify-end gap-3 bg-emerald-50/20 text-center'>
                <section className="w-full h-full xl:w-[1200px] flex items-end">
                    <div className="min-w-[370px] flex flex-col gap-3 text-left">
                        <h1 className="text-[3rem] leading-[3.5rem] font-bold">Begin your path to better health</h1>
                        <p>Receive a smart scale, tailored guidance, and ongoing support from experts—covered by your employer or health plan. See if you qualify today.</p>

                        <Button className='h-12 rounded-3xl w-fit px-8 font-semibold my-2 relative'>
                            Check eligibility
                            <div className='absolute size-[70%] bg-primary rounded-3xl -z-10 animate-ping' />
                        </Button>
                    </div>
                    <div className='min-w-20' />
                    <div className="w-full h-full flex relative">
                        <div className="slid-down size-full bg-white overflow-hidden rounded-full">
                            <img src="https://images.unsplash.com/photo-1470434767159-ac7bf1b43351?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="main-content size-full object-cover" />
                        </div>
                        <section className="absolute -left-20 top-[45%] slid-down size-[200px] rounded-r-full rounded-b-full bg-[#351F65]"></section>
                    </div>
                </section>
            </div>} />


            <section className="w-full bg-white z-10 flex flex-col items-center gap-5 py-20">
                <div className="xl:w-[1200px] grid lg:grid-cols-2 gap-12 items-center px-6">
                    {/* Left Side - Device Mockups */}
                    <div className="relative flex items-center justify-center">
                        {/* Smart Scale */}
                        <div className="relative">
                            <div className="w-80 h-60 bg-gray-100 rounded-2xl shadow-lg flex items-center justify-center border-4 border-gray-200">
                                <div className="text-center">
                                    <div className="text-6xl font-light text-gray-600 mb-2">181.1</div>
                                    <div className="text-sm text-gray-500">Scale</div>
                                </div>
                            </div>

                            {/* Achievement Card */}
                            <div className="absolute -top-8 -right-6 bg-white rounded-xl shadow-lg p-4 w-48 border">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center">
                                        <div className="w-8 h-8 bg-purple-200 rounded-full flex items-center justify-center">
                                            <span className="text-purple-800 font-bold text-xs">🏆</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-sm text-gray-800">Great job!</div>
                                        <div className="text-xs text-gray-500">Keep up the good work.</div>
                                    </div>
                                </div>
                            </div>

                            {/* Recipe Card */}
                            <div className="absolute -bottom-4 -left-6 bg-white rounded-xl shadow-lg p-4 w-52 border">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-orange-100 rounded-lg overflow-hidden">
                                        <div className="w-full h-full flex items-center justify-center text-orange-700 text-xl">🍲</div>
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-sm font-medium text-gray-800 mb-1">Explore healthy recipes and tips.</div>
                                        <div className="text-blue-600 text-sm font-medium cursor-pointer hover:underline">Go to library</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Content */}
                    <div className="flex flex-col gap-3">
                        <div className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
                            JOIN OUR WEIGHT MANAGEMENT PROGRAM
                        </div>

                        <h1 className="text-4xl font-bold text-[#351F65] leading-tight">
                            Get started today to receive:
                        </h1>

                        <div className="flex flex-col gap-4">
                            <div className="flex items-start gap-3">
                                <div className="size-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <span className="text-gray-700">A smart scale shipped to your door at no cost</span>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="size-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <span className="text-gray-700">Personalized content for food, activity and weigh-ins</span>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="size-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <span className="text-gray-700">Expert coaching for nutrition, meal planning and more</span>
                            </div>
                        </div>

                        <Button className="h-14 px-8 rounded-full bg-[#6240E8] hover:bg-[#5433d4] text-white font-semibold w-fit mt-4">
                            Check my eligibility
                        </Button>
                    </div>
                </div>
            </section>


            <section className="w-full bg-gradient-to-r from-gray-50 to-blue-50 py-20 z-10">
                <div className="xl:w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Content */}
                    <div className="flex flex-col gap-6">
                        <h1 className="text-4xl font-bold text-[#351F65] leading-tight">
                            Personalized support for your healthy lifestyle
                        </h1>

                        <p className="text-gray-700 leading-relaxed">
                            Achieve your health goals with guidance and resources designed just for you. Our expert coaches are here to help every step of the way.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mt-2">
                            <Button className="h-12 px-8 rounded-full bg-[#6240E8] hover:bg-[#5433d4] text-white font-semibold">
                                Check my eligibility
                            </Button>

                            <Button variant="outline" className="h-12 px-8 rounded-full border-2 border-gray-800 text-gray-800 font-semibold text-lg hover:bg-gray-800 hover:text-white flex items-center gap-2">
                                Download app
                                <div className="flex items-center gap-1">
                                    <i className="fab fa-apple"></i>
                                    <i className="fab fa-google-play"></i>
                                </div>
                            </Button>
                        </div>
                    </div>

                    {/* Right Side - Image with Geometric Shapes */}
                    <div className="relative flex items-center justify-center">
                        
                        <div className="size-[200px] bg-purple-700 rounded-full absolute z-10 -right-5 -top-10"></div>
                        <div className="w-16 h-16 bg-blue-400 rounded-full absolute z-10 -left-5"></div>
                        <div className="w-16 h-16 bg-pink-400 rounded-full absolute z-10 -left-5"></div>

                        {/* Person with salad */}
                        <div className="relative z-10 w-96 h-80 rounded-2xl overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1559847844-5315695dadae?w=600&h=800&fit=crop&crop=face"
                                alt="Woman eating healthy salad"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>


            <FAQs/>
        </main>
    </div>
}

export default ConditionManagement