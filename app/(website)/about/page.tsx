'use client'

import Hero from '@/components/Hero'
import React from 'react'
import Link from 'next/link'
import { heroMedia } from '../leadership/heroMedia'

function AboutPage() {
    return (
        <div className="">
            <main className="min-h-[100dvh] h-auto flex flex-col items-center justify-between">
                <Hero className='md:h-[500px] h-[400px]' title={`Empowering all people everywhere to live their healthiest lives`}/>

                <div className="w-full flex flex-col items-center bg-white z-10">
                    <section className="w-full py-[3rem] flex flex-col items-center">
                        <span className="text-[1.2rem] md:text-[1.5rem] leading-[1.5rem] md:leading-[1.9rem] w-full max-w-[800px] px-4 text-center">
                            We’ve made great progress on this mission since our founding more than 20 years ago. Today, we’re the only virtual-first, whole-person care company with the technology to connect, the expertise you can trust, and the power to improve health for all.
                        </span>
                    </section>

                    <section className="w-full flex flex-col items-center py-[4rem]">
                        <div className="xl:w-[1200px] flex flex-col items-center text-center">
                            <div className="w-full flex flex-col md:flex-row gap-4 h-auto md:h-[600px]">
                                {/* left section */}
                                <aside className="flex-1 flex flex-col gap-4 min-w-0">
                                    <div className="w-full rounded-2xl shadow h-[200px] lg:h-full overflow-hidden">
                                        <video src={heroMedia[0]} playsInline autoPlay muted loop className="size-full object-cover" />
                                    </div>
                                    <div className="w-full rounded-2xl shadow bg-blue-500 text-white min-h-[100px] lg:min-h-[200px] overflow-hidden flex flex-col p-5 text-left">
                                        <b className="text-2xl lg:text-4xl leading-2rem">#1</b>
                                        Most recognized virtual care brand. *
                                    </div>
                                </aside>
                                {/* middle section */}
                                <aside className="flex-[2] min-w-0 flex flex-col gap-4">
                                    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 h-auto lg:h-[30%]">
                                        <div className="size-full shadow rounded-[2rem] p-5 flex flex-col justify-center text-left border-[0.5rem] border-black">
                                            <b className="text-2xl lg:text-4xl leading-2rem ">+90%</b>
                                            Member satisfaction
                                        </div>
                                        <div className="size-full shadow rounded-2xl overflow-hidden">
                                            <img src="https://www.med.ubc.ca/files/2021/02/Virtual-Health-Care-Webinar-1000x600-1.jpg" alt="" className="size-full object-cover" />
                                        </div>
                                    </div>
                                    <div className="w-full h-[200px] md:h-[300px] lg:h-[40%] flex-1 shadow rounded-2xl overflow-hidden flex flex-col text-left">
                                        <iframe className="size-full object-cover" src="https://www.youtube.com/embed/HVF0273iHus" title="Compassion, dignity and respect in health care" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" />
                                    </div>
                                    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 h-auto lg:h-[30%]">
                                        <div className="size-full shadow rounded-2xl overflow-hidden flex flex-col justify-center text-left">
                                            <img src="https://www.childrenshomecare.net/wp-content/uploads/2020/10/CH6-1024x683.jpg" alt="" className="size-full object-cover" />
                                        </div>
                                        <div className="size-full shadow rounded-2xl p-5 flex flex-col text-left justify-center">
                                            Prioritizing the best virtual care
                                            <b className="text-lg lg:text-2xl leading-[1.5rem] text-emerald-600">patient safety organization</b>
                                        </div>
                                    </div>
                                </aside>
                                {/* right section */}
                                <aside className="flex-1 flex flex-col gap-4 min-w-0">
                                    <div className="w-full rounded-2xl shadow min-h-[100px] lg:min-h-[200px] bg-slate-900 text-white overflow-hidden p-5 flex flex-col text-left">
                                        <b className="text-2xl lg:text-4xl leading-2rem">900,000</b>
                                        People accessed care they wouldn{`'`}t have otherwise.*
                                    </div>
                                    <div className="w-full p-6 py-[2rem] flex flex-col gap-3 rounded-2xl shadow h-[200px] lg:h-full overflow-hidden">
                                        <span className="text-sm text-left">
                                            76% of people with depression <span className="text-sky-700">feel better</span>
                                            after their third visit with their therapist.
                                        </span>
                                        <div className="lg:flex md:hidden flex-1 rounded-xl overflow-hidden">
                                            <img src="https://www.futuretravelexperience.com/wp-content/uploads/2016/08/Seatfrog_iPhone_1.jpg.jpg" alt="" className="size-full object-cover" />
                                        </div>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </section>

                    <section className="py-[4rem] bg-gray-100 w-full flex flex-col items-center">
                        <div className="w-full max-w-[1200px] flex flex-col items-center gap-10 px-4">
                            <span className="text-[1.5rem] md:text-[2rem] leading-[2rem] font-bold text-center sm:w-[600px]">
                                Making a difference around the world...
                                and in our own backyards
                            </span>
                            <div className="w-full md:w-[80%] grid grid-cols-1 md:grid-cols-3 gap-[2rem] text-center">
                                <section className="w-full flex flex-col items-center gap-3">
                                    <b className="text-[2rem] md:text-[3rem]">📌</b>
                                    <b className="text-base md:text-lg">Building strong connections</b>
                                    <p className='text-sm'>We take the time to give back to our communities—and to connect with each other in person and virtually around the globe..</p>
                                </section>
                                <section className="w-full flex flex-col items-center gap-3">
                                    <b className="text-[2rem] md:text-[3rem]">💡</b>
                                    <b className="text-base md:text-lg">Sparking innovation</b>
                                    <p className='text-sm'>From tackling healthcare’s biggest challenges to making improvements to our everyday work, we challenge ourselves to find a better way forward.</p>
                                </section>
                                <section className="w-full flex flex-col items-center gap-3">
                                    <b className="text-[2rem] md:text-[3rem]">🎯</b>
                                    <b className="text-base md:text-lg">Going all in, together</b>
                                    <p className='text-sm'>We give ourselves big, bold goals—like delivering more care to more people in more places—and align ourselves to a common purpose.</p>
                                </section>
                            </div>
                            <br />
                            <br />

                            <section className="w-full flex flex-col overflow-x-auto">
                                <div className="flex items-center gap-4">
                                    {/* Left Scroll Button */}
                                    <button
                                        className="p-2 size-10 min-w-10 rounded-full bg-gray-200 hover:bg-gray-300 transition md:relative absolute z-10"
                                        onClick={() => {
                                            const container = document.getElementById('people-scroll-container')
                                            if(container) container.scrollBy({ left: -320, behavior: 'smooth' });
                                        }}
                                        aria-label="Scroll left"
                                        type="button"
                                    >
                                        &#8592;
                                    </button>
                                    {/* Scrollable People Cards */}
                                    <div
                                        id="people-scroll-container"
                                        className="flex gap-6 w-fit overflow-x-auto scroll-smooth"
                                        style={{ scrollBehavior: 'smooth', maxWidth: '100%' }}
                                    >
                                        {
                                            [1,2,3,4,5,6,7,8,9,10].map((people, idx) => (
                                                <div key={idx} className="mt-4 rounded-3xl overflow-hidden w-[220px] sm:w-[260px] md:w-[300px] h-[300px] sm:h-[350px] md:h-[400px] relative group shrink-0">
                                                    <img src={`https://healthinformationtechnologysolutions.com/wp-content/uploads/2024/02/Copy-of-p3-2024-02-20T081707.969.png`} alt="" className="size-full object-cover group-hover:scale-105 transition-all duration-300 ease-in-out"/>
                                                    <div className='flex flex-col items-center justify-end absolute size-full top-0 left-0 p-4 bg-gradient-to-t from-black text-white text-xs sm:text-sm'>
                                                        Doctors are Ridge Hospital meeting with Dr. Joshua Odame
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                    {/* Right Scroll Button */}
                                    <button
                                        className="p-2 size-10 min-w-10 rounded-full bg-gray-200 hover:bg-gray-300 transition md:relative absolute z-10 right-4"
                                        onClick={() => {
                                            const container = document.getElementById('people-scroll-container');
                                            if(container) container.scrollBy({ left: 320, behavior: 'smooth' });
                                        }}
                                        aria-label="Scroll right"
                                        type="button"
                                    >
                                        &#8594;
                                    </button>
                                </div>
                            </section>
                        </div>
                    </section>
                    
                    <section className="py-[4rem] flex flex-col items-center">
                        <div className="w-full max-w-[1200px] flex flex-col md:flex-row justify-between items-center gap-8 px-4">
                            <section className="flex flex-col items-start flex-1 w-full">
                                <b className="text-[2rem] md:text-[3rem] font-bold mb-2">Our Leadership</b>
                                <span className="text-base md:text-lg">We’re doctors, data scientists, designers, influencers and more.</span>
                                <span className="text-base md:text-lg">
                                    Meet our <span className='text-indigo-500'><Link href={`/leadership`}>Executive leadership team</Link></span>, our <span className='text-indigo-500'><Link href={`/leadership/clinicals`}>Clinical leadership team</Link></span> and our <span className='text-indigo-500'><Link href={`/leadership/directors`}>Board of directors</Link></span>.
                                </span>
                            </section>
                            <section className="relative flex justify-center items-center flex-1 w-full lg:w-auto">
                                <div className='absolute size-[120px] lg:size-[200px] bg-blue-500 blur-3xl'/>
                                <aside className="lg:w-full flex h-[250px] lg:h-[500px]">
                                    <div className='h-full flex flex-col items-end justify-end gap-2 md:gap-4'>
                                        <div className='size-[60px] lg:size-[100px] rounded-full bg-red-600 mr-4 md:mr-10'/>
                                        <div className='size-[120px] lg:size-[250px] rounded-l-[50%] rounded-br-[50%] bg-purple-500 z-10'/>
                                    </div>
                                    <div className='size-[150px] lg:size-[300px] rounded-r-[50%] rounded-tl-[50%] bg-indigo-500 flex items-center justify-center z-10 overflow-hidden'>
                                        <img src={`https://cdn.prod.website-files.com/5b9f769eb4189e506ad244e4/60332b6027e3fd217fd4c95b_Untitled%20design%20(32).jpg`} alt='' className='size-full object-cover'/>
                                    </div>
                                </aside>
                            </section>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    )
}

export default AboutPage