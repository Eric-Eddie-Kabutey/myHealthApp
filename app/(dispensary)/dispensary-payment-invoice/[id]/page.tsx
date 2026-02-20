'use client';

import PageWrapper from '@/components/PageWrapper';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

function PaymentDetails() {
    return <PageWrapper content={<>
        <section className="w-full py-[0.5rem] flex items-center gap-4 border-b">
            <button onClick={() => window.history.back()} className="size-8 rounded-full border flex items-center justify-center">
                <ArrowLeft className='size-4' />
            </button>
            <p>Prescription details</p>
        </section>

        <p className="text-base">Order Details & Delivery Information</p>

        <section className="w-full flex flex-col">
            <div className="w-full min-[1230px]:w-[1000px] grid sm:grid-cols-2 gap-5">
                <section className="rounded-lg p-4 flex flex-col gap-2 bg-gray-100">
                    <p>Order Information</p>
                    <span className="flex items-center justify-between text-gray-600 text-sm">Order ID:: <span className="text-black">2-3 business days</span></span>
                    <span className="flex items-center justify-between text-gray-600 text-sm">Patient: <span className="text-black">John Smith</span></span>
                    <span className="flex items-center justify-between text-gray-600 text-sm">Phone: <span className="text-black">+1 (555) 123-4567</span></span>
                    <span className="flex items-center justify-between text-gray-600 text-sm">Email: <span className="text-black">john.smith@email.com</span></span>
                </section>
                <section className="rounded-lg p-4 flex flex-col gap-2 bg-primary/10">
                    <p>Delivery Address</p>
                    <span className="text-gray-600 text-sm">Address <span className="text-black">123 Healthcare Avenue , Medical District, Lagos, Nigeria 100001</span></span>

                    <Link href="/" className="underline text-sm text-emerald-600">View on Google Maps</Link>
                </section>
                <section className="rounded-lg p-4 flex flex-col gap-2 bg-pink-100">
                    <p>Prescription Details</p>
                    <div className="w-full px-3 py-2 bg-white flex items-center justify-between rounded my-1">
                        <span className="flex flex-col">
                            <p className="text-sm">Amoxicillin 500mg</p>
                            <small className="text-gray-600">Qty: 21 capsules</small>
                        </span>
                        <p>$45.00</p>
                    </div>
                    <div className="w-full px-3 py-2 bg-white flex items-center justify-between rounded my-1">
                        <span className="flex flex-col">
                            <p className="text-sm">Amoxicillin 500mg</p>
                            <small className="text-gray-600">Qty: 21 capsules</small>
                        </span>
                        <p>$45.00</p>
                    </div>
                    <div className="w-full px-3 py-2 bg-white flex items-center justify-between rounded my-1">
                        <span className="flex flex-col">
                            <p className="text-sm">Amoxicillin 500mg</p>
                            <small className="text-gray-600">Qty: 21 capsules</small>
                        </span>
                        <p>$45.00</p>
                    </div>
                </section>
                <section className="rounded-lg p-4 border flex flex-col gap-2 bg-gray-100">
                    <p>Logistics Information</p>
                    <span className="flex items-center justify-between text-gray-600 text-sm">Estimated Delivery: <span className="text-black">2-3 business days</span></span>
                    <span className="flex items-center justify-between text-gray-600 text-sm">Courier: <span className="text-black">FastMed Delivery</span></span>
                    <span className="flex items-center justify-between text-gray-600 text-sm">Google Maps: <span className="text-black">Google Maps URL available for driver</span></span>
                </section>
            </div>
        </section>
    </>}/>
}

export default PaymentDetails