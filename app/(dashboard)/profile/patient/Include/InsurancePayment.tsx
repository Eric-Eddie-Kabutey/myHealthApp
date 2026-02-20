'use client';

import { Button } from '@/components/ui/button';
import routes from '@/lib/routes';
import { Camera, FolderPlus, X } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

// Zod schema for form validation
const insurancePaymentSchema = z.object({
    insuranceProvider: z.string().min(1, 'Insurance provider is required'),
    memberId: z.string().min(1, 'Member ID is required'),
    frontPhoto: z.any().optional(), // File handling
    backPhoto: z.any().optional(), // File handling
    creditCardNumber: z.string().min(1, 'Credit card number is required').regex(/^\d{4}\s\d{4}\s\d{4}\s\d{4}$/, 'Invalid card number format'),
    expiryDate: z.string().min(1, 'Expiry date is required').regex(/^\d{2}\/\d{2}$/, 'Invalid expiry date format (MM/YY)'),
    cvc: z.string().min(3, 'CVC must be at least 3 digits').max(4, 'CVC must be at most 4 digits'),
});

type InsurancePaymentFormData = z.infer<typeof insurancePaymentSchema>;

function InsurancePayment() {
    const [selectedFrontPhoto, setSelectedFrontPhoto] = React.useState<File | null>(null);
    const [selectedBackPhoto, setSelectedBackPhoto] = React.useState<File | null>(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        watch,
    } = useForm<InsurancePaymentFormData>({
        resolver: zodResolver(insurancePaymentSchema),
        defaultValues: {
            insuranceProvider: '',
            memberId: '',
            creditCardNumber: '',
            expiryDate: '',
            cvc: '',
        },
    });

    const onSubmit = (data: InsurancePaymentFormData) => {
        console.log('Form submitted:', data);
        // Handle form submission here
    };

    // Handle file selection
    const handleFrontPhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setSelectedFrontPhoto(file);
            setValue('frontPhoto', file);
        }
    };

    const handleBackPhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setSelectedBackPhoto(file);
            setValue('backPhoto', file);
        }
    };

    // Remove selected files
    const removeFrontPhoto = () => {
        setSelectedFrontPhoto(null);
        setValue('frontPhoto', undefined);
    };

    const removeBackPhoto = () => {
        setSelectedBackPhoto(null);
        setValue('backPhoto', undefined);
    };

    // Format credit card number
    const formatCardNumber = (value: string) => {
        const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
        const matches = v.match(/\d{4,16}/g);
        const match = matches && matches[0] || '';
        const parts = [];
        for (let i = 0, len = match.length; i < len; i += 4) {
            parts.push(match.substring(i, i + 4));
        }
        if (parts.length) {
            return parts.join(' ');
        } else {
            return v;
        }
    };

    // Format expiry date
    const formatExpiryDate = (value: string) => {
        const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
        if (v.length >= 2) {
            return v.substring(0, 2) + (v.length > 2 ? '/' + v.substring(2, 4) : '');
        }
        return v;
    };
    return <div className="w-full main-content flex flex-col">
        <form onSubmit={handleSubmit(onSubmit)}>
            <section className="py-4 border-b flex md:flex-row flex-col gap-2 md:items-center">
                <div className="sm:w-[300px]">
                    Insurance Provider
                </div>
                <div className="flex w-full sm:w-[400px]">
                    <input
                        type="text"
                        placeholder="Enter Insurance provider"
                        className="w-full h-10 rounded px-3 border text-sm"
                        {...register('insuranceProvider')}
                    />
                    {errors.insuranceProvider && (
                        <p className="text-red-500 text-sm mt-1">{errors.insuranceProvider.message}</p>
                    )}
                </div>
            </section>

            <section className="py-4 border-b flex md:flex-row flex-col gap-2 md:items-center">
                <div className="sm:w-[300px]">
                    Member ID
                </div>
                <div className="flex w-full sm:w-[400px]">
                    <input
                        type="text"
                        placeholder="Enter ID"
                        className="w-full h-10 rounded px-3 border text-sm"
                        {...register('memberId')}
                    />
                    {errors.memberId && (
                        <p className="text-red-500 text-sm mt-1">{errors.memberId.message}</p>
                    )}
                </div>
            </section>

            <section className="py-4 border-b flex md:flex-row flex-col gap-2 md:items-center">
                <div className="sm:w-[300px]">
                    Front Photo of Insurance Card
                </div>
                <div className="flex flex-col gap-2 w-full sm:w-[400px]">
                    <button
                        type="button"
                        className="w-full h-[80px] border-gray-300 border border-dashed rounded-lg p-4 flex flex-col items-center justify-center relative"
                    >
                        <input
                            type="file"
                            className="absolute size-full opacity-0"
                            accept=".png,.jpg,.jpeg,.pdf"
                            onChange={handleFrontPhotoChange}
                        />
                        <FolderPlus className="size-5 min-h-5 mb-1" />
                        <small className="text-gray-500">Drag and drop file here or <span className="underline text-primary">Choose file</span></small>
                        <small className="text-gray-500">PNG, JPEG and PDF ( Max . 10mb)</small>
                    </button>
                    {selectedFrontPhoto && (
                        <div className="flex items-center gap-2 p-2 bg-gray-50 rounded border">
                            <span className="text-sm text-gray-700 flex-1">{selectedFrontPhoto.name}</span>
                            <button
                                type="button"
                                onClick={removeFrontPhoto}
                                className="text-red-500 hover:text-red-700"
                            >
                                <X className="size-4" />
                            </button>
                        </div>
                    )}
                </div>
            </section>

            <section className="py-4 border-b flex md:flex-row flex-col gap-2 md:items-center">
                <div className="sm:w-[300px]">
                    Back Photo of Insurance Card
                </div>
                <div className="flex flex-col gap-2 w-full sm:w-[400px]">
                    <button
                        type="button"
                        className="w-full h-[80px] border-gray-300 border border-dashed rounded-lg p-4 flex flex-col items-center justify-center relative"
                    >
                        <input
                            type="file"
                            className="absolute size-full opacity-0"
                            accept=".png,.jpg,.jpeg,.pdf"
                            onChange={handleBackPhotoChange}
                        />
                        <FolderPlus className="size-5 min-h-5 mb-1" />
                        <small className="text-gray-500">Drag and drop file here or <span className="underline text-primary">Choose file</span></small>
                        <small className="text-gray-500">PNG, JPEG and PDF ( Max . 10mb)</small>
                    </button>
                    {selectedBackPhoto && (
                        <div className="flex items-center gap-2 p-2 bg-gray-50 rounded border">
                            <span className="text-sm text-gray-700 flex-1">{selectedBackPhoto.name}</span>
                            <button
                                type="button"
                                onClick={removeBackPhoto}
                                className="text-red-500 hover:text-red-700"
                            >
                                <X className="size-4" />
                            </button>
                        </div>
                    )}
                </div>
            </section>

            <section className="py-4 border-b flex md:flex-row flex-col gap-2 md:items-center">
                <div className="sm:w-[300px]">
                    Payment Method
                </div>
                <div className="flex flex-col gap-2 w-full sm:w-[400px]">
                    <div>
                        <label className="block text-xs mb-1">Credit Card Details</label>
                        <input
                            type="text"
                            placeholder="0000 0000 0000 0000"
                            className="w-full h-10 rounded px-3 border text-sm mb-2"
                            maxLength={19}
                            {...register('creditCardNumber')}
                            onChange={(e) => {
                                const formatted = formatCardNumber(e.target.value);
                                e.target.value = formatted;
                                setValue('creditCardNumber', formatted);
                            }}
                        />
                        {errors.creditCardNumber && (
                            <p className="text-red-500 text-sm">{errors.creditCardNumber.message}</p>
                        )}
                    </div>
                    <div className="flex gap-2">
                        <div className="w-1/2">
                            <input
                                type="text"
                                placeholder="MM/YY"
                                className="w-full h-10 rounded px-3 border text-sm"
                                maxLength={5}
                                {...register('expiryDate')}
                                onChange={(e) => {
                                    const formatted = formatExpiryDate(e.target.value);
                                    e.target.value = formatted;
                                    setValue('expiryDate', formatted);
                                }}
                            />
                            {errors.expiryDate && (
                                <p className="text-red-500 text-xs mt-1">{errors.expiryDate.message}</p>
                            )}
                        </div>
                        <div className="w-1/2">
                            <input
                                type="text"
                                placeholder="CVC"
                                className="w-full h-10 rounded px-3 border text-sm"
                                maxLength={4}
                                {...register('cvc')}
                            />
                            {errors.cvc && (
                                <p className="text-red-500 text-xs mt-1">{errors.cvc.message}</p>
                            )}
                        </div>
                    </div>
                </div>
            </section>


            <section className="py-5 flex justify-end gap-5">
                <Button type="button" variant={'outline'}>Cancel</Button>
                <Button type="submit">Save</Button>
            </section>
        </form>
    </div>
}

export default InsurancePayment