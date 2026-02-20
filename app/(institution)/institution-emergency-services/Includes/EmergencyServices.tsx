'use client';

import { Switch } from '@/components/ui/switch';
import React from 'react'

function EmergencyServices() {
    return <section className='main-content flex flex-col gap-5 w-full'>
        <div className="w-full border rounded-xl p-4 flex items-center justify-between">
            <aside className="flex flex-col gap-2">
                <p>Emergency Room</p>
                <small>Capacity: 8/20 beds occupied</small>
            </aside>
            <span className="flex items-center gap-3">
                Available 
                <Switch checked />
            </span>
        </div>
        <div className="w-full border rounded-xl p-4 flex items-center justify-between">
            <aside className="flex flex-col gap-2">
                <p>Cardiac Care</p>
                <small>Capacity: 8/20 beds occupied</small>
            </aside>
            <span className="flex items-center gap-3">
                Available 
                <Switch checked />
            </span>
        </div>
        <div className="w-full border rounded-xl p-4 flex items-center justify-between">
            <aside className="flex flex-col gap-2">
                <p>Trauma Surgery</p>
                <small>Capacity: 8/20 beds occupied</small>
            </aside>
            <span className="flex items-center gap-3">
                Available 
                <Switch checked />
            </span>
        </div>
        <div className="w-full border rounded-xl p-4 flex items-center justify-between">
            <aside className="flex flex-col gap-2">
                <p>ICU</p>
                <small>Capacity: 12/15 beds occupied</small>
            </aside>
            <span className="flex items-center gap-3">
                Available 
                <Switch checked />
            </span>
        </div>
    </section>
}

export default EmergencyServices