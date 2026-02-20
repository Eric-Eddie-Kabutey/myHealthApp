'use client';

import Hero from '@/components/Hero';
import { Clock10, Dock, MapPin, Pill, Search, Smartphone, Stethoscope, UserCheck, Video } from 'lucide-react';
import React from 'react'

function TwentyFourSevenCare() {
    return (
        <div>
            <main className="min-h-[100dvh] h-auto flex flex-col items-center">
                <Hero className={`max-h-[500px]`} btnText='Start a Call Now' title='Expert Care at Your Fingertips...24/7' subTitle={`Get immediate access to board-certified doctors through phone or video`} />

                <section className="w-full h-full z-10 bg-white flex flex-col items-center">
                    <aside className="w-full max-w-[1200px] px-4 flex flex-col items-center gap-5 bg-white">
                        {/* How it works ....... */}
                        <section className="w-full flex flex-col items-center justify-center gap-4 py-16 sm:py-20 relative">
                            <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold z-10 text-center'>How it Works</h1>
                            <br />
                            <div className="w-full flex flex-col md:flex-row md:justify-center md:items-center items-center gap-6 md:gap-2 xl:gap-8 z-10">
                                <aside className="relative flex flex-col items-center">
                                    <div className="size-16 mb-3 rounded-xl bg-purple-600 text-white flex items-center justify-center">
                                        <Stethoscope />
                                    </div>
                                    <h3 className="text-base sm:text-lg font-bold my-2 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent text-center">Describe Symptoms</h3>
                                    <p className="text-gray-700 text-center text-sm w-[200px]">Quickly enter your symptoms and get matched with a doctor.</p>
                                </aside>
                                <div className="hidden md:flex items-center xl:mx-4">
                                    <div className='size-3 rounded-full bg-purple-600' />
                                    <div className='border-y border-dashed w-[60px] xl:w-[100px]' />
                                    <div className='size-3 rounded-full bg-blue-600' />
                                </div>
                                <aside className="relative flex flex-col items-center">
                                    <div className="size-16 mb-3 rounded-xl bg-blue-600 text-white flex items-center justify-center">
                                        <Search />
                                    </div>
                                    <h3 className="text-base sm:text-lg font-bold my-2 bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent text-center">Choose Provider</h3>
                                    <p className="text-gray-700 text-center text-sm w-[200px]">Select from a list of board-certified specialists</p>
                                </aside>
                                <div className="hidden md:flex items-center xl:mx-4">
                                    <div className='size-3 rounded-full bg-blue-600' />
                                    <div className='border-y border-dashed w-[60px] xl:w-[100px]' />
                                    <div className='size-3 rounded-full bg-pink-600' />
                                </div>
                                <aside className="relative flex flex-col items-center">
                                    <div className="size-16 mb-3 rounded-xl bg-pink-600 text-white flex items-center justify-center">
                                        <Pill />
                                    </div>
                                    <h3 className="text-base sm:text-lg font-bold my-2 bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent text-center">Get Treatment</h3>
                                    <p className="text-gray-700 text-center text-sm w-[200px]">Receive diagnosis and prescription within minutes.</p>
                                </aside>
                            </div>
                        </section>

                        {/* Services ........... */}
                        <section className="w-full flex flex-col items-center py-16 sm:py-20">
                            <span className='text-2xl sm:text-3xl md:text-4xl font-bold z-10 text-center'>
                                Our
                                <b className="text-transparent bg-gradient-to-br font-bold px-3 from-blue-600 to-purple-600 bg-clip-text">Revolutionary</b>
                                Services
                            </span>
                            <br />
                            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                <aside className="w-full bg-white shadow-lg p-6 flex flex-col items-center gap-2">
                                    <div className="size-12 flex items-center justify-center text-purple-700 bg-gradient-to-br from-pink-100 to-purple-100 rounded-lg">
                                        <Smartphone className='size-5' />
                                    </div>
                                    <b className="text-lg sm:text-xl text-center">Mobile Healtcare</b>
                                    <p className='text-gray-600 text-base text-center'>Expert care delivered directly to your doorstep via our advanced mobile units.</p>
                                </aside>
                                <aside className="w-full bg-white shadow-lg p-6 flex flex-col items-center gap-2">
                                    <div className="size-12 flex items-center justify-center text-purple-700 bg-gradient-to-br from-pink-100 to-purple-100 rounded-lg">
                                        <Video className='size-5' />
                                    </div>
                                    <b className="text-lg sm:text-xl text-center">Virtual Consultation</b>
                                    <p className='text-gray-600 text-base text-center'>Connect with top doctors via live video consultations anytime, anywhere.</p>
                                </aside>
                                <aside className="w-full bg-white shadow-lg p-6 flex flex-col items-center gap-2">
                                    <div className="size-12 flex items-center justify-center text-purple-700 bg-gradient-to-br from-pink-100 to-purple-100 rounded-lg">
                                        <Clock10 className='size-5' />
                                    </div>
                                    <b className="text-lg sm:text-xl text-center">Rapid Emergency Response</b>
                                    <p className='text-gray-600 text-base text-center'>Immediate assistance with our lightning-fast emergency services available 24/7.</p>
                                </aside>
                                <aside className="w-full bg-white shadow-lg p-6 flex flex-col items-center gap-2">
                                    <div className="size-12 flex items-center justify-center text-purple-700 bg-gradient-to-br from-pink-100 to-purple-100 rounded-lg">
                                        <UserCheck className='size-5' />
                                    </div>
                                    <b className="text-lg sm:text-xl text-center">Personalized Treatment Plan</b>
                                    <p className='text-gray-600 text-base text-center'>Tailor-made healthcare solutions designed specifically for your unique needs.</p>
                                </aside>
                                <aside className="w-full bg-white shadow-lg p-6 flex flex-col items-center gap-2">
                                    <div className="size-12 flex items-center justify-center text-purple-700 bg-gradient-to-br from-pink-100 to-purple-100 rounded-lg">
                                        <MapPin className='size-5' />
                                    </div>
                                    <b className="text-lg sm:text-xl text-center">Global Outreach</b>
                                    <p className='text-gray-600 text-base text-center'>We meet you wherever you are, ensuring accessible healthcare across the globe.</p>
                                </aside>
                                <aside className="w-full bg-white shadow-lg p-6 flex flex-col items-center gap-2">
                                    <div className="size-12 flex items-center justify-center text-purple-700 bg-gradient-to-br from-pink-100 to-purple-100 rounded-lg">
                                        <Clock10 className='size-5' />
                                    </div>
                                    <b className="text-lg sm:text-xl text-center">Rapid Emergency Response</b>
                                    <p className='text-gray-600 text-base text-center'>Immediate assistance with our lightning-fast emergency services available 24/7.</p>
                                </aside>
                            </div>
                        </section>

                    </aside>
                </section>
            </main>
        </div>
    )
}

export default TwentyFourSevenCare