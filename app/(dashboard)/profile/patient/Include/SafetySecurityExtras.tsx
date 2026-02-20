'use client';

import { Button } from '@/components/ui/button';
import routes from '@/lib/routes';
import { Camera, FolderPlus } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

// Zod schema for form validation
const safetySecurityExtrasSchema = z.object({
    emergencyContactFirstName: z.string().min(1, 'First name is required'),
    emergencyContactLastName: z.string().min(1, 'Last name is required'),
    emergencyContactRelationship: z.string().min(1, 'Relationship is required'),
    emergencyContactPhone: z.string().min(1, 'Phone number is required').regex(/^[\+]?[1-9][\d]{0,15}$/, 'Invalid phone number format'),
    preferredPharmacyName: z.string().min(1, 'Preferred pharmacy name is required'),
    preferredPharmacyLocation: z.string().min(1, 'Preferred pharmacy location is required'),
    preferredLanguage: z.string().min(1, 'Preferred language is required'),
    accessibilityNeeds: z.string().optional(),
});

type SafetySecurityExtrasFormData = z.infer<typeof safetySecurityExtrasSchema>;

function SafetySecurityExtras() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SafetySecurityExtrasFormData>({
        resolver: zodResolver(safetySecurityExtrasSchema),
        defaultValues: {
            emergencyContactFirstName: '',
            emergencyContactLastName: '',
            emergencyContactRelationship: '',
            emergencyContactPhone: '',
            preferredPharmacyName: '',
            preferredPharmacyLocation: '',
            preferredLanguage: '',
            accessibilityNeeds: '',
        },
    });

    const onSubmit = (data: SafetySecurityExtrasFormData) => {
        console.log('Form submitted:', data);
        // Handle form submission here
    };
    return <div className="w-full main-content flex flex-col">
        <form onSubmit={handleSubmit(onSubmit)}>
            <section className="py-4 border-b flex md:flex-row flex-col gap-2 md:items-center">
                <div className="sm:w-[300px]">
                    Emergency Contact Full Name
                </div>
                <div className="flex flex-col w-full sm:w-[400px]">
                    <div className="flex gap-2">
                        <input
                            type="text"
                            placeholder="First Name"
                            className="w-1/2 h-10 rounded px-3 border text-sm"
                            {...register('emergencyContactFirstName')}
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            className="w-1/2 h-10 rounded px-3 border text-sm"
                            {...register('emergencyContactLastName')}
                        />
                    </div>
                    {errors.emergencyContactFirstName && (
                        <p className="text-red-500 text-sm mt-1">{errors.emergencyContactFirstName.message}</p>
                    )}
                    {errors.emergencyContactLastName && (
                        <p className="text-red-500 text-sm mt-1">{errors.emergencyContactLastName.message}</p>
                    )}
                </div>
            </section>

            <section className="py-4 border-b flex md:flex-row flex-col gap-2 md:items-center">
                <div className="sm:w-[300px]">
                    Emergency Contact Relationship
                </div>
                <div className="flex flex-col w-full sm:w-[400px]">
                    <input
                        type="text"
                        placeholder="Enter relationship"
                        className="w-full h-10 rounded px-3 border text-sm"
                        {...register('emergencyContactRelationship')}
                    />
                    {errors.emergencyContactRelationship && (
                        <p className="text-red-500 text-sm mt-1">{errors.emergencyContactRelationship.message}</p>
                    )}
                </div>
            </section>

            <section className="py-4 border-b flex md:flex-row flex-col gap-2 md:items-center">
                <div className="sm:w-[300px]">
                    Emergency Contact Phone Number
                </div>
                <div className="flex flex-col w-full sm:w-[400px]">
                    <input
                        type="text"
                        placeholder="Enter phone number"
                        className="w-full h-10 rounded px-3 border text-sm"
                        {...register('emergencyContactPhone')}
                    />
                    {errors.emergencyContactPhone && (
                        <p className="text-red-500 text-sm mt-1">{errors.emergencyContactPhone.message}</p>
                    )}
                </div>
            </section>

            <section className="py-4 border-b flex md:flex-row flex-col gap-2 md:items-center">
                <div className="sm:w-[300px]">
                    Preferred Local Pharmacy Name
                </div>
                <div className="flex flex-col w-full sm:w-[400px]">
                    <input
                        type="text"
                        placeholder="Enter Preferred Local Pharmacy"
                        className="w-full h-10 rounded px-3 border text-sm"
                        {...register('preferredPharmacyName')}
                    />
                    {errors.preferredPharmacyName && (
                        <p className="text-red-500 text-sm mt-1">{errors.preferredPharmacyName.message}</p>
                    )}
                </div>
            </section>

            <section className="py-4 border-b flex md:flex-row flex-col gap-2 md:items-center">
                <div className="sm:w-[300px]">
                    Preferred Local Pharmacy Location
                </div>
                <div className="flex flex-col w-full sm:w-[400px]">
                    <input
                        type="text"
                        placeholder="Enter Preferred Local Pharmacy Location"
                        className="w-full h-10 rounded px-3 border text-sm"
                        {...register('preferredPharmacyLocation')}
                    />
                    {errors.preferredPharmacyLocation && (
                        <p className="text-red-500 text-sm mt-1">{errors.preferredPharmacyLocation.message}</p>
                    )}
                </div>
            </section>

            <section className="py-4 border-b flex md:flex-row flex-col gap-2 md:items-center">
                <div className="sm:w-[300px]">
                    Preferred Language
                </div>
                <div className="flex flex-col w-full sm:w-[400px]">
                    <input
                        type="text"
                        placeholder="Enter Language"
                        className="w-full h-10 rounded px-3 border text-sm"
                        {...register('preferredLanguage')}
                    />
                    {errors.preferredLanguage && (
                        <p className="text-red-500 text-sm mt-1">{errors.preferredLanguage.message}</p>
                    )}
                </div>
            </section>

            <section className="py-4 border-b flex md:flex-row flex-col gap-2 md:items-center">
                <div className="sm:w-[300px]">
                    Accessibility needs (hearing, vision, cognitive)
                </div>
                <div className="flex flex-col w-full sm:w-[400px]">
                    <input
                        type="text"
                        placeholder="Enter Needs"
                        className="w-full h-10 rounded px-3 border text-sm"
                        {...register('accessibilityNeeds')}
                    />
                    {errors.accessibilityNeeds && (
                        <p className="text-red-500 text-sm mt-1">{errors.accessibilityNeeds.message}</p>
                    )}
                </div>
            </section>


            <section className="py-5 flex justify-end gap-5">
                <Button type="button" variant={'outline'}>Cancel</Button>
                <Button type="submit">Save</Button>
            </section>
        </form>
    </div>
}

export default SafetySecurityExtras