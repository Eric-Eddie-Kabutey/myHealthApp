'use client';

import React from 'react'

function BasicInfo() {
    return <div className="w-full main-content flex gap-[3.5rem] py-2">
        <section className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
                <p className="text-sm text-gray-600">Full Legal Name</p>
                <p>Joshua Odame</p>
            </div>
            <div className="flex flex-col gap-1">
                <p className="text-sm text-gray-600">Email Address</p>
                <p>odamejoshua37@gmail.com</p>
            </div>
            <div className="flex flex-col gap-1">
                <p className="text-sm text-gray-600">Date of Birth</p>
                <p>03/05/1995</p>
            </div>
            <div className="flex flex-col gap-1">
                <p className="text-sm text-gray-600">Legal Address</p>
                <p>234, Pineapple street, Accra, Ghana</p>
            </div>
        </section>
        <section className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
                <p className="text-sm text-gray-600">Vehicle Registration Number</p>
                <p>123456890</p>
            </div>
            <div className="flex flex-col gap-1">
                <p className="text-sm text-gray-600">Phone Number</p>
                <p>+233 123 456 890</p>
            </div>
        </section>
    </div>
}

export default BasicInfo