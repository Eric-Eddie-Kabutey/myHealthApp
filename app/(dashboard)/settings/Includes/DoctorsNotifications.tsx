'use client';

import React from 'react'
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';

function DoctorsNotifications() {
    return <div className="main-content w-[370px] flex flex-col gap-3 py-[2rem]">
            <div className="flex flex-col pb-2 border-b mb-5">
                <p>Notification Preferences</p>
                <p className="text-sm text-gray-600">Update and select how you want to be notified</p>
            </div>
    
            <section className="w-full flex flex-col gap-5 pb-3 border-b">
                <p className="mb-1 font-semibold">Communication Methods</p>
    
                <div className="w-full flex items-center justify-between">
                    <aside className="flex flex-col">
                        <p>Email Notification</p>
                        <p className="text-sm text-gray-700">Receive notification via email</p>
                    </aside>
                    <Switch id="email" />
                </div>
                <div className="w-full flex items-center justify-between">
                    <aside className="flex flex-col">
                        <p>SMS Notifications</p>
                        <p className="text-sm text-gray-700">Receive text message alerts</p>
                    </aside>
                    <Switch checked id="sms" />
                </div>
                <div className="w-full flex items-center justify-between">
                    <aside className="flex flex-col">
                        <p>Push Notifications</p>
                        <p className="text-sm text-gray-700">Browser and app notifications</p>
                    </aside>
                    <Switch id="push" />
                </div>
            </section>
    
            <section className="w-full flex flex-col gap-5 pb-3">
                <p className="mb-1 font-semibold">Content Preferences</p>
    
                <div className="w-full flex items-center justify-between">
                    <aside className="flex flex-col">
                        <p>Appointment Reminders</p>
                        <p className="text-sm text-gray-700">Get notified about upcoming appointments</p>
                    </aside>
                    <Switch checked id="security-alerts" />
                </div>
                <div className="w-full flex items-center justify-between">
                    <aside className="flex flex-col">
                        <p>Patient Updates</p>
                        <p className="text-sm text-gray-700">Receive updates about your patients</p>
                    </aside>
                    <Switch id="system-updates" />
                </div>
                <div className="w-full flex items-center justify-between">
                    <aside className="flex flex-col">
                        <p>System Alerts</p>
                        <p className="text-sm text-gray-700">Important system notifications and updates</p>
                    </aside>
                    <Switch id="marketing" />
                </div>
                <div className="w-full flex items-center justify-between">
                    <aside className="flex flex-col">
                        <p>Marketing Communications</p>
                        <p className="text-sm text-gray-700">Promotional emails and newsletters</p>
                    </aside>
                    <Switch checked id="marketing" />
                </div>
            </section>
    
            <div className="w-full grid grid-cols-2 gap-4 mt-5">
                <Button variant={'outline'} type="button" className='w-full h-10 rounded'>Discard</Button>
                <Button type="submit" className='w-full h-10 rounded'>Save Changes</Button>
            </div>
        </div>
}

export default DoctorsNotifications