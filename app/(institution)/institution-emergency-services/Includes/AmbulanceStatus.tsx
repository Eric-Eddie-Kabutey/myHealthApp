'use client';

import { Switch } from '@/components/ui/switch';
import React from 'react'

function AmbulanceStatus() {
    return <section className='main-content flex flex-col gap-5 w-full'>
        <div className="w-full border rounded-xl p-4 flex flex-col gap-2">
            <p className="text-base">Main Hospital</p>
            <span className="text-gray-600 w-full flex items-center justify-between">
                <p>Total Ambulances:</p>
                <b>5</b>
            </span>
            <span className="text-gray-600 w-full flex items-center justify-between">
                <p>Available:</p>
                <b>5</b>
            </span>
            <span className="text-gray-600 w-full flex items-center justify-between">
                <p>In Service:</p>
                <b>5</b>
            </span>
        </div>
        <div className="w-full border rounded-xl p-4 flex flex-col gap-2">
            <p className="text-base">Main Hospital</p>
            <span className="text-gray-600 w-full flex items-center justify-between">
                <p>Total Ambulances:</p>
                <b>5</b>
            </span>
            <span className="text-gray-600 w-full flex items-center justify-between">
                <p>Available:</p>
                <b>5</b>
            </span>
            <span className="text-gray-600 w-full flex items-center justify-between">
                <p>In Service:</p>
                <b>5</b>
            </span>
        </div>
    </section>
}

export default AmbulanceStatus

