'use client';

import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
    sessionTimeout: z.string(),
    maxLoginAttempts: z.string(),
    passwordExpiry: z.string(),
    maintenanceMode: z.string(),
    debugMode: z.string(),
    maintenanceMessage: z.string(),
});

type FormType = z.infer<typeof schema>;

function NotificationsAccessControl() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormType>({
        resolver: zodResolver(schema),
        defaultValues: {
            sessionTimeout: '30',
            maxLoginAttempts: '5',
            passwordExpiry: '90',
            maintenanceMode: 'Off',
            debugMode: 'Off',
            maintenanceMessage: 'The system is currently undergoing scheduled maintenance. We\'ll be back shortly.',
        },
    });

    const onSubmit = (data: FormType) => {
        console.log('Form Data:', data);
        // Add save logic here
    };

    return (
        <div className="w-[450px] main-content flex flex-col gap-6">
            <div className="flex flex-col">
                <h2>Notification Preferences</h2>
                <small className='text-gray-600'>Update and select how you want to be notified</small>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='w-full flex flex-col gap-4'>
                <section className="w-full flex flex-col gap-3">
                    <p>Communication Methods</p>
                    <aside className="w-full flex justify-between items-center mb-1">
                        <div className="flex flex-col gap-1">
                            <p className="text-sm">Email Notifications</p>
                            <small className="text-gray-600">Receive notifications via email</small>
                        </div>
                        <Switch defaultChecked />
                    </aside>
                    <aside className="w-full flex justify-between items-center mb-1">
                        <div className="flex flex-col gap-1">
                            <p className="text-sm">SMS Notifications</p>
                            <small className="text-gray-600">Receive text message alerts</small>
                        </div>
                        <Switch defaultChecked />
                    </aside>
                    <aside className="w-full flex justify-between items-center mb-1">
                        <div className="flex flex-col gap-1">
                            <p className="text-sm">Push Notifications</p>
                            <small className="text-gray-600">Browser and app notifications</small>
                        </div>
                        <Switch defaultChecked />
                    </aside>
                </section>
                <hr className="w-full my-3" />
                <p>Access Control</p>
                <div className="w-full flex flex-col gap-3">
                    <div>
                        <label>Session Timeout (minutes)</label>
                        <select {...register('sessionTimeout')} className="w-full border rounded h-10 px-3 text-sm">
                            <option value="15">15</option>
                            <option value="30">30</option>
                            <option value="60">60</option>
                        </select>
                    </div>
                    <div>
                        <label>Max Login Attempts</label>
                        <select {...register('maxLoginAttempts')} className="w-full border rounded h-10 px-3 text-sm">
                            <option value="3">3</option>
                            <option value="5">5</option>
                            <option value="10">10</option>
                        </select>
                    </div>
                    <div>
                        <label>Password Expiry (days)</label>
                        <select {...register('passwordExpiry')} className="w-full border rounded h-10 px-3 text-sm">
                            <option value="30">30</option>
                            <option value="90">90</option>
                            <option value="180">180</option>
                        </select>
                    </div>
                </div>
                <p>System Behavior</p>
                <div className="w-full flex flex-col gap-3">
                    <div>
                        <label>Maintenance Mode</label>
                        <select {...register('maintenanceMode')} className="w-full border rounded h-10 px-3 text-sm">
                            <option value="Off">Off</option>
                            <option value="On">On</option>
                        </select>
                    </div>
                    <div>
                        <label>Debug Mode</label>
                        <select {...register('debugMode')} className="w-full border rounded h-10 px-3 text-sm">
                            <option value="Off">Off</option>
                            <option value="On">On</option>
                        </select>
                    </div>
                    <div>
                        <label>Maintenance Message</label>
                        <textarea {...register('maintenanceMessage')} className="w-full border rounded px-3 py-2 text-sm" rows={2} />
                    </div>
                </div>
                <div className='w-full grid grid-cols-2 gap-5 mt-4'>
                    <Button variant={'outline'} type="button" onClick={() => reset()}>Discard</Button>
                    <Button type="submit">Save Changes</Button>
                </div>
            </form>
        </div>
    );
}

export default NotificationsAccessControl;