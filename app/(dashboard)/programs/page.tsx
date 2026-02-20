'use client';

import PageWrapper from '@/components/PageWrapper';
import { CheckCircle, Clock1, Download, MapPin, Plus, Star } from 'lucide-react';
import React, { useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from '@/components/ui/button';
import { DayPicker } from 'react-day-picker';
import moment from 'moment';
import { visaLogo } from '@/app/assets/images';
import Image from 'next/image';
import { timeList } from '../appointment-booking/timeList';
import { ScheduleType } from '../appointment-booking/types';

const programsList = [
    {
        title: 'Male Reproductive Health',
        desc: 'Support for fertility, hormones, sexual health, and overall wellness.',
        duration: '30mins',
        subscribed: false,
        doctors: [
            {
                image: 'https://randomuser.me/api/portraits/men/32.jpg',
                name: 'Dr. Michael Chen',
                specialty: 'General Practitioner',
                ratings: 4.8,
                reviews: 124,
                distance: '5.2 miles away',
                status: 'Available Today'
            },
            {
                image: 'https://randomuser.me/api/portraits/women/44.jpg',
                name: 'Dr. Sarah Lee',
                specialty: 'General Practitioner',
                ratings: 4.7,
                reviews: 98,
                distance: '3.8 miles away',
                status: 'Available Today'
            },
        ]
    },
    {
        title: 'Female Reproductive Health',
        desc: 'Comprehensive care for women’s reproductive and sexual health.',
        duration: '45mins',
        subscribed: true,
        doctors: [
            {
                image: 'https://randomuser.me/api/portraits/women/65.jpg',
                name: 'Dr. Emily Carter',
                specialty: 'Gynecologist',
                ratings: 4.9,
                reviews: 210,
                distance: '2.1 miles away',
                status: 'Available Tomorrow'
            },
            {
                image: 'https://randomuser.me/api/portraits/men/41.jpg',
                name: 'Dr. John Smith',
                specialty: 'Obstetrician',
                ratings: 4.6,
                reviews: 87,
                distance: '6.5 miles away',
                status: 'Available Today'
            },
        ]
    },
    {
        title: 'Mental Wellness',
        desc: 'Support for mental health, stress management, and counseling.',
        duration: '60mins',
        subscribed: false,
        doctors: [
            {
                image: 'https://randomuser.me/api/portraits/men/55.jpg',
                name: 'Dr. Alex Johnson',
                specialty: 'Psychiatrist',
                ratings: 4.5,
                reviews: 150,
                distance: '4.0 miles away',
                status: 'Available Today'
            },
            {
                image: 'https://randomuser.me/api/portraits/women/33.jpg',
                name: 'Dr. Lisa Wong',
                specialty: 'Therapist',
                ratings: 4.8,
                reviews: 200,
                distance: '2.7 miles away',
                status: 'Available Tomorrow'
            },
        ]
    },
    {
        title: 'Male Reproductive Health',
        desc: 'Support for fertility, hormones, sexual health, and overall wellness.',
        duration: '30mins',
        subscribed: false,
        doctors: [
            {
                image: 'https://randomuser.me/api/portraits/men/32.jpg',
                name: 'Dr. Michael Chen',
                specialty: 'General Practitioner',
                ratings: 4.8,
                reviews: 124,
                distance: '5.2 miles away',
                status: 'Available Today'
            },
            {
                image: 'https://randomuser.me/api/portraits/women/44.jpg',
                name: 'Dr. Sarah Lee',
                specialty: 'General Practitioner',
                ratings: 4.7,
                reviews: 98,
                distance: '3.8 miles away',
                status: 'Available Today'
            },
        ]
    },
    {
        title: 'Female Reproductive Health',
        desc: 'Comprehensive care for women’s reproductive and sexual health.',
        duration: '45mins',
        subscribed: true,
        doctors: [
            {
                image: 'https://randomuser.me/api/portraits/women/65.jpg',
                name: 'Dr. Emily Carter',
                specialty: 'Gynecologist',
                ratings: 4.9,
                reviews: 210,
                distance: '2.1 miles away',
                status: 'Available Tomorrow'
            },
            {
                image: 'https://randomuser.me/api/portraits/men/41.jpg',
                name: 'Dr. John Smith',
                specialty: 'Obstetrician',
                ratings: 4.6,
                reviews: 87,
                distance: '6.5 miles away',
                status: 'Available Today'
            },
        ]
    },
    {
        title: 'Mental Wellness',
        desc: 'Support for mental health, stress management, and counseling.',
        duration: '60mins',
        subscribed: false,
        doctors: [
            {
                image: 'https://randomuser.me/api/portraits/men/55.jpg',
                name: 'Dr. Alex Johnson',
                specialty: 'Psychiatrist',
                ratings: 4.5,
                reviews: 150,
                distance: '4.0 miles away',
                status: 'Available Today'
            },
            {
                image: 'https://randomuser.me/api/portraits/women/33.jpg',
                name: 'Dr. Lisa Wong',
                specialty: 'Therapist',
                ratings: 4.8,
                reviews: 200,
                distance: '2.7 miles away',
                status: 'Available Tomorrow'
            },
        ]
    },
]

function Programs() {
    const [showUnsubscribed, setShowUnsubscribed] = useState<any>(null);
    const [activeProgram, setActiveProgram] = useState<any>(null);
    const [activeDoc, setActiveDoc] = useState<any>(null);
    const [scheduleDetails, setScheduleDetails] = useState<ScheduleType|null>(null);
    const [confirmedAppointment, setConfirmedAppointment] = useState<any>(null);
    const scheduleDataCompleted = () => {
        if (!scheduleDetails) return false;
        if(!scheduleDetails.appointment_type) return false;
        if(!scheduleDetails.day) return false;
        if(!scheduleDetails.time) return false;
        return true;
    };
    


    return <PageWrapper content={<>
        <section className="w-full border rounded-2xl p-4 flex flex-col gap-4">
            <p>Available Service</p>

            <div className="w-full flex gap-5 flex-wrap">
                {
                    programsList.map((item, idx)=>{
                        return <div key={`program-${idx}`} onClick={()=>{
                            item.subscribed ? setActiveProgram(item) : setShowUnsubscribed(item)
                        }} className="border hover:bg-primary/10 hover:border-2 hover:border-primary transition-all cursor-pointer w-[250px] min-h-[130px] rounded-xl p-4 flex flex-col gap-3">
                            <p>Male Reproductive Health</p>
                            <small>Support for fertility, hormones, sexual health, and overall wellness.</small>
                            <span className="flex items-center gap-1 text-sm">
                                <Clock1 className='size-4'/>
                                <span>30mins</span>
                            </span>
                        </div>
                    })
                }
            </div>
        </section>


        {/* Available Doctors ................. */}
        {
            activeProgram ? <section id='doc-section' className="main-content w-full rounded-2xl border bg-[#FBFBFB] flex flex-col gap-3 p-4">
                <div className="w-full flex items-center justify-between">
                    <p className='text-lg'>Available Doctors</p>
                    <button onClick={()=>{
                        setActiveProgram(null);
                        setActiveDoc(null);
                    }} className="size-10 rounded-full border flex items-center justify-center bg-white">
                        <Plus className='rotate-45 size-5'/>
                    </button>
                </div>
                <div className="flex gap-5 flex-wrap">
                    {
                        activeProgram?.doctors?.map((doc:any, idx:number)=>{
                            return <div onClick={()=>{
                                setActiveDoc(doc); 
                                setTimeout(() => {
                                    document.getElementById('schedule-section')?.scrollIntoView({ behavior: 'smooth' });
                                }, 0);
                            }} key={`doc-${idx}`} className={`p-4 border ${doc?.name === activeDoc?.name ? `border-2 border-primary bg-[#34765A0F]`:`bg-white`} hover:border-2 hover:border-primary hover:bg-[#34765A0F] transition-all cursor-pointer rounded-2xl flex flex-col justify-between gap-3 w-[300px] min-[300px] h-[150px]`}>
                                <section className="w-full flex gap-2">
                                    <img src={doc.image} alt="doc" className="size-10 rounded-full object-cover" />
                                    <div className="flex flex-col">
                                        <p className="text-sm">{doc.name}</p>
                                        <small>{doc.specialty}</small>
                                        <small>
                                            <span className='flex items-center gap-1'>
                                                <Star className='text-yellow-500 size-4'/>
                                                {doc.ratings}
                                                ({doc.reviews} reviews)
                                            </span>
                                        </small>
                                    </div>
                                </section>
                                <section className="w-full flex items-center justify-between">
                                    <span className="flex items-center gap-1">
                                        <MapPin className='size-4'/>
                                        {doc.distance}
                                    </span>
                                    <div className={`px-3 h-8 text-xs flex items-center rounded-lg ${doc.status.toLowerCase().includes('available') ? `bg-emerald-50 text-emerald-500`:``}`}>{doc.status}</div>
                                </section>
                            </div>
                        })
                    }
                </div>
            </section> : null
        }

        {/* Schedule Appointment ................ */}
        {
            activeDoc ? 
            <section id='schedule-section' className="main-content min-h-[400px] w-full rounded-2xl border bg-[#FBFBFB] flex flex-col gap-3 p-4">
                <div className="w-full flex items-center justify-between">
                    <p className='text-lg'>Appointment Details</p>
                    <button onClick={()=>{
                        setActiveDoc(null);
                    }} className="size-10 rounded-full border flex items-center justify-center bg-white">
                        <Plus className='rotate-45 size-5'/>
                    </button>
                </div>
                <div className="w-full flex gap-5">
                    <section className="min-w-[300px] flex flex-col gap-4">
                        <p>Appointment Type</p>
                        <div className="flex flex-col gap-2">
                            <aside onClick={()=>{
                                setScheduleDetails((prev:ScheduleType|any)=>({...prev, appointment_type: 'Virtual Consultation'}));
                                setTimeout(() => {
                                    document.getElementById('payment-section')?.scrollIntoView({ behavior: 'smooth' });
                                }, 0);
                            }} className={`w-full min-h-12 border rounded-xl p-3 flex items-center justify-between gap-2 ${scheduleDetails?.appointment_type === 'Virtual Consultation'?'border-2 border-primary':''} hover:border-2 hover:border-primary cursor-pointer transition-all ease-in-out`}>
                                <div className="flex items-center gap-2">
                                    <div className="flex items-center justify-center rounded size-6 bg-emerald-100">
                                        <svg className='size-4' viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.1663 4.66732L18.5108 1.62624C18.6993 1.49428 18.9591 1.54013 19.091 1.72865C19.14 1.79868 19.1663 1.8821 19.1663 1.96759V12.0337C19.1663 12.2638 18.9798 12.4504 18.7497 12.4504C18.6642 12.4504 18.5808 12.4241 18.5108 12.3751L14.1663 9.33398V12.834C14.1663 13.2942 13.7933 13.6673 13.333 13.6673H1.66634C1.20611 13.6673 0.833008 13.2942 0.833008 12.834V1.16732C0.833008 0.707084 1.20611 0.333984 1.66634 0.333984H13.333C13.7933 0.333984 14.1663 0.707084 14.1663 1.16732V4.66732Z" fill="#34765A"/>
                                        </svg>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-sm">Virtual Consultation</p>
                                        <small className="text-gray-600">Video call with your doctor</small>
                                    </div>
                                </div>
                                <CheckCircle className={`size-5 text-primary ${scheduleDetails?.appointment_type === 'Virtual Consultation'?'flex':'hidden'}`}/>
                            </aside>
                            <aside onClick={()=>{
                                setScheduleDetails((prev:ScheduleType|any)=>({...prev, appointment_type: 'In-Person Vist'}));
                                setTimeout(() => {
                                    document.getElementById('payment-section')?.scrollIntoView({ behavior: 'smooth' });
                                }, 0);
                            }} className={`w-full min-h-12 border rounded-xl p-3 flex items-center justify-between gap-2 ${scheduleDetails?.appointment_type === 'In-Person Vist'?'border-2 border-primary':''} hover:border-2 hover:border-primary cursor-pointer transition-all ease-in-out`}>
                                <div className="flex items-center gap-2">
                                    <div className="flex items-center justify-center rounded size-6 bg-emerald-100">
                                        <svg className='size-4' viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.5007 15.666H19.1673V17.3327H0.833984V15.666H2.50065V1.49935C2.50065 1.03912 2.87375 0.666016 3.33398 0.666016H16.6673C17.1276 0.666016 17.5007 1.03912 17.5007 1.49935V15.666ZM9.16732 5.66602H7.50065V7.33268H9.16732V8.99935H10.834V7.33268H12.5007V5.66602H10.834V3.99935H9.16732V5.66602ZM11.6673 15.666H13.334V10.666H6.66732V15.666H8.33398V12.3327H11.6673V15.666Z" fill="#34765A"/>
                                        </svg>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-sm">In-Person Visit</p>
                                        <small className="text-gray-600">Visit doctor's clinic</small>
                                    </div>
                                </div>
                                <CheckCircle className={`size-5 text-primary ${scheduleDetails?.appointment_type === 'In-Person Vist'?'flex':'hidden'}`}/>
                            </aside>
                        </div>
                    </section>
                    <section className={`w-[800px] flex gap-5 ${!scheduleDetails?.appointment_type && 'opacity-50 pointer-events-none'}`}>
                        <div className="w-[350px] flex flex-col gap-4">
                            <p>Select Date & Time</p>
                            <div className="flex sm:p-0 p-3 sm:rounded-none rounded-xl w-fit sm:w-full sm:border-none border mt-4 sm:scale-100 scale-90">
                                <DayPicker
                                captionLayout="dropdown"
                                defaultMonth={new Date()}
                                startMonth={new Date()}
                                endMonth={new Date(new Date().getFullYear(), 11)}
                                // disabled={{ dayOfWeek: [0, 1, 3] }}
                                //Tuesday, Thursday, Friday, Saturday
                                mode="single"
                                onDayClick={(day, modifiers) => {
                                    const date = moment(day, "YYYYMMDD").format();
                                    const formatDate = date?.split('T')?.[0];
                                    const dat = new Date(formatDate);
                                    const options:Intl.DateTimeFormatOptions = { weekday: 'long', month: 'long', day: 'numeric' };
                                    const formattedDate = dat.toLocaleDateString('en-US', options);
                                    console.log(day, formatDate)
                                    setScheduleDetails((prev:ScheduleType|any)=>({...prev, day}));
                                    setTimeout(() => {
                                        document.getElementById('payment-section')?.scrollIntoView({ behavior: 'smooth' });
                                    }, 0);
                                }}
                                />
                            </div>
                        </div>
                        <div className="min-w-[300px] flex flex-col gap-4">
                            <p>Call duration</p>
                            <div className="w-full min-h-10 flex items-center justify-center border rounded-xl bg-gray-50">
                                {activeProgram?.duration}
                            </div>
                            <span className="text-sm">What time works best?</span>
                            <span className="text-sm">Showing times for 13 May 2025</span>
                            <span className="text-sm">UTC +01:00 (Africa) Central European Time</span>
                            <div className="max-h-[300px] w-full flex flex-col gap-2 overflow-y-auto">
                                {
                                    [...timeList].map((time, idx)=>{
                                        return <div onClick={()=>{
                                            setScheduleDetails((prev:ScheduleType|any)=>({...prev, time}));
                                            setTimeout(() => {
                                                document.getElementById('payment-section')?.scrollIntoView({ behavior: 'smooth' });
                                            }, 0);
                                        }} key={`time-${idx}`} className={`w-full cursor-pointer hover:text-primary min-h-10 flex items-center justify-center rounded-lg border ${scheduleDetails?.time === time ? 'bg-primary text-white':''}`}>
                                            {time}
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                    </section>
                </div>
            </section> : null
        }


        {
            scheduleDataCompleted() ? <section id='payment-section' className="main-content min-h-[400px] w-full rounded-2xl border bg-[#FBFBFB] flex flex-col gap-3 p-4">
                <div className="w-full flex items-center justify-between">
                    <p className='text-lg'>Confirm Your Appointment</p>
                    <button onClick={()=>{
                        setScheduleDetails(null);
                    }} className="size-10 rounded-full border flex items-center justify-center bg-white">
                        <Plus className='rotate-45 size-5'/>
                    </button>
                </div>
                <div className="w-full flex gap-5">
                    <section className="border rounded-2xl p-4 pt-0 flex flex-col gap-4 bg-white min-w-[400px]">
                        <div className="w-full text-sm min-h-10 flex items-center border-b">Appointment Summary</div>
                        <div className="flex flex-col gap-1">
                            <small><span className="text-gray-700">Service: <span className="text-black">General Consultation</span></span></small>
                            <small><span className="text-gray-700">Doctor: <span className="text-black">Dr. Joshua Odame</span></span></small>
                            <small><span className="text-gray-700">Date & Time: <span className="text-black">24 Jan 2025 . 12pm</span></span></small>
                            <small><span className="text-gray-700">Type: <span className="text-black">Virtual Consultation</span></span></small>
                            <small><span className="text-gray-700">Duration: <span className="text-black">30 Minutes</span></span></small>
                            <small><span className="text-gray-700">Price: <span className="text-black">$50.00</span></span></small>
                        </div>
                    </section>
                    <section className="w-full bg-white p-4 pt-0 flex flex-col gap-4 rounded-2xl border">
                        <div className="w-full text-sm min-h-10 flex items-center border-b">Payment Method</div>
                        <div className="flex flex-col gap-2">
                            <aside className="w-full p-4 border rounded-xl flex items-center justify-between border-primary bg-[#34765A0D] ">
                                <div className="flex items-center gap-2">
                                    <div className="size-10 rounded-full border bg-white">
                                        <Image src={visaLogo} alt='visa' className='size-full object-contain'/>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-sm">Visa ending in 4242</p>
                                        <small className="text-gray-700">Expires 05/25</small>
                                    </div>
                                </div>
                                <CheckCircle className='size-4'/>
                            </aside>
                            <aside className="w-full p-4 border rounded-xl flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="size-8 rounded-xl border flex items-center justify-center"><Plus className='size-5'/></div>
                                    <div className="flex flex-col">
                                        <p className="text-sm">Add new payment method</p>
                                        {/* <small className="text-gray-700">Expires 05/25</small> */}
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </section>
                </div>
                <div className="w-full rounded-2xl border p-4 flex flex-col">
                    <div className="w-full text-sm min-h-10 flex items-center border-b">Order Summary</div>
                    <div className="flex flex-col gap-2 mb-4">
                        <aside className="w-full flex flex-col gap-2 border-b py-2">
                            <span className="flex items-center justify-between text-gray-700">Consultation Fee <span className="text-black font-semibold">$50.00</span></span>
                            <span className="flex items-center justify-between text-gray-700">Service Fee <span className="text-black font-semibold">$2.00</span></span>
                        </aside>
                        <span className="flex items-center justify-between text-gray-700">Total <span className="text-black font-semibold">$52.00</span></span>
                    </div>

                    <div onClick={()=>setConfirmedAppointment(true)} className="flex justify-end mb-2"><Button className='rounded px-4'>Confirm & Pay</Button></div>
                    <div className="w-full flex justify-center text-sm">By confirming, you agree to our Terms of Service and Privacy Policy</div>
                </div>
            </section>:null
        }





        <Dialog open={!!showUnsubscribed} onOpenChange={()=>setShowUnsubscribed(null)}>
            <DialogContent className="main-content sm:w-[400px] flex flex-col items-center gap-3">
            <DialogTitle/>
                <div className="size-14 rounded-full flex items-center justify-center bg-gradient-to-b from-gray-200">
                    <svg className='size-8' viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.703125" y="1.09375" width="44.6" height="43.8138" rx="21.9069" fill="#E53E3E"/>
                    <rect x="0.703125" y="1.09375" width="44.6" height="43.8138" rx="21.9069" stroke="#E1E4EA"/>
                    <path d="M23.0009 21.1153L29.6006 14.5156L31.4862 16.4012L24.8865 23.0009L31.4862 29.6005L29.6006 31.4861L23.0009 24.8865L16.4013 31.4861L14.5156 29.6005L21.1153 23.0009L14.5156 16.4012L16.4013 14.5156L23.0009 21.1153Z" fill="white"/>
                    </svg>
                </div>

                <p className="text-lg font-semibold">Oop!</p>
                <small className="text-gray-700 text-sm text-center">Unfortunately you cannot select this program because you do not have an active subscription.</small>

                <Button onClick={()=>{
                    setActiveProgram(showUnsubscribed);
                    setShowUnsubscribed(null);
                }} className='w-full h-10 rounded mt-3'>Subscribe Now</Button>
            </DialogContent>
        </Dialog>


        <Dialog open={!!confirmedAppointment} onOpenChange={()=>setConfirmedAppointment(null)}>
            <DialogContent className="main-content sm:w-[400px] flex flex-col items-center gap-3">
            <DialogTitle/>
            <section className="size-16 rounded-full bg-gradient-to-b from-primary via-white to-white flex justify-center items-center">
                <div className="size-[97%] mt-1 rounded-full flex items-center justify-center bg-white">
                <i className="fa fa-check-circle text-xl text-primary"></i>
                </div>
            </section>
            <p className="font-[500] text-lg">Appointment Confirmed!</p>
            <small className="text-gray-600 my-2 text-center">Your appointment with Dr. Michael Chen has been successfully scheduled for Today, June 15 at 10:00 AM.</small>
            
            <div className="w-full rounded-xl p-4 pt-0 flex flex-col bg-gray-50">
                <span className="h-10 flex items-center justify-center border-b font-[500] text-sm">Appointment Details</span>
                <div className="flex flex-col gap-2 mt-3 text-sm">
                    <span className="flex items-center justify-between text-gray-700">Booking ID: <span className="text-black font-[500]">MC-20230615-001</span></span>
                    <span className="flex items-center justify-between text-gray-700">Date <span className="text-black font-[500]">June 15, 2025</span></span>
                    <span className="flex items-center justify-between text-gray-700">Time <span className="text-black font-[500]">10:00 AM</span></span>
                    <span className="flex items-center justify-between text-gray-700">Type <span className="text-black font-[500]">Virtual Consultation</span></span>
                    <span className="flex items-center justify-between text-gray-700">Payment <span className="text-black font-[500]">$52.00 (Visa ending in 4242)</span></span> 
                </div>
            </div>

            <Button variant={`outline`} className='w-full flex items-center gap-3 justify-center border-primary text-primary'>
                <Download className='size-4'/>
                Download Receipt
            </Button>
            <hr className='w-full'/>
            <div className="w-full flex items-center gap-3">
                <i className="fa fa-check-circle text-xl text-primary"></i>
                <aside className="flex flex-col">
                    <p className="text-sm">Confirmation Email</p>
                    <small className="text-gray-700 font-light">We{`'`}ve sent details to your email</small>
                </aside>
            </div>
            </DialogContent>
        </Dialog>
    </>}/>
}

export default Programs