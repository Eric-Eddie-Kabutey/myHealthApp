'use client';

import { Button } from '@/components/ui/button';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const complianceLegalSchema = z.object({
    termsAndConditions: z.boolean().refine(val => val === true, 'You must agree to the Terms of Service and Code of Conduct'),
    consentToDeliver: z.boolean().refine(val => val === true, 'You must provide informed consent to deliver care via virtual/telemedicine platforms'),
    backgroundCheckAuthorization: z.boolean().refine(val => val === true, 'You must authorize the platform to conduct a background check'),
    taxIdNumber: z.string().min(1, 'Tax Identification Number, National ID Number, or Provider License Number is required'),
    bankName: z.string().min(1, 'Bank name is required'),
    bankAccountNumber: z.string().min(1, 'Bank account number is required'),
});

type ComplianceLegalForm = z.infer<typeof complianceLegalSchema>;

function ComplianceLegal() {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<ComplianceLegalForm>({
        resolver: zodResolver(complianceLegalSchema),
        defaultValues: {
            termsAndConditions: false,
            consentToDeliver: false,
            backgroundCheckAuthorization: false,
            taxIdNumber: '',
            bankName: '',
            bankAccountNumber: '',
        },
    });

    const onSubmit = (data: ComplianceLegalForm) => {
        console.log('Compliance legal data:', data);
        // Handle form submission here
        // You can process the form data as needed
    };

    return (
        <div className="w-full flex flex-col items-center main-content">
            <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col">
                {/* Terms and Conditions Agreement */}
                <section className="py-4 border-b">
                    <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <Controller
                                name="termsAndConditions"
                                control={control}
                                render={({ field }) => (
                                    <input
                                        type="checkbox"
                                        checked={field.value}
                                        onChange={field.onChange}
                                        className="mt-1 h-4 w-4 text-green-600 border border-gray-300 rounded focus:ring-green-500"
                                    />
                                )}
                            />
                            <div className="flex-1">
                                <label className="text-sm text-gray-700">
                                    I have read and agree to the{' '}
                                    <a href="#" className="text-green-600 underline">Terms of Service</a>{' '}
                                    and{' '}
                                    <a href="#" className="text-green-600 underline">Code of Conduct</a>
                                </label>
                                {errors.termsAndConditions && (
                                    <p className="text-red-500 text-xs mt-1">{errors.termsAndConditions.message}</p>
                                )}
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <Controller
                                name="consentToDeliver"
                                control={control}
                                render={({ field }) => (
                                    <input
                                        type="checkbox"
                                        checked={field.value}
                                        onChange={field.onChange}
                                        className="mt-1 h-4 w-4 text-green-600 border border-gray-300 rounded focus:ring-green-500"
                                    />
                                )}
                            />
                            <div className="flex-1">
                                <label className="text-sm text-gray-700">
                                    I provide informed consent to deliver care via virtual/telemedicine platforms in accordance with regulations
                                </label>
                                {errors.consentToDeliver && (
                                    <p className="text-red-500 text-xs mt-1">{errors.consentToDeliver.message}</p>
                                )}
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <Controller
                                name="backgroundCheckAuthorization"
                                control={control}
                                render={({ field }) => (
                                    <input
                                        type="checkbox"
                                        checked={field.value}
                                        onChange={field.onChange}
                                        className="mt-1 h-4 w-4 text-green-600 border border-gray-300 rounded focus:ring-green-500"
                                    />
                                )}
                            />
                            <div className="flex-1">
                                <label className="text-sm text-gray-700">
                                    I authorize the platform to conduct a background check, including verification against criminal and sanctions lists
                                </label>
                                {errors.backgroundCheckAuthorization && (
                                    <p className="text-red-500 text-xs mt-1">{errors.backgroundCheckAuthorization.message}</p>
                                )}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Tax ID / License Number */}
                <section className="py-4 border-b flex md:flex-row flex-col gap-2 md:items-start">
                    <div className="sm:w-[300px]">
                        <div className="font-medium">Enter your Tax Identification Number,</div>
                        <div className="font-medium">National ID Number, or Provider License</div>
                        <div className="font-medium">Number for verification</div>
                    </div>
                    <div className="flex flex-col w-full sm:w-[400px]">
                        <Controller
                            name="taxIdNumber"
                            control={control}
                            render={({ field }) => (
                                <input
                                    {...field}
                                    type="text"
                                    placeholder="Enter number"
                                    className="w-full h-10 rounded px-3 border text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                />
                            )}
                        />
                        {errors.taxIdNumber && (
                            <p className="text-red-500 text-xs mt-1">{errors.taxIdNumber.message}</p>
                        )}
                    </div>
                </section>

                {/* Bank Account Details */}
                <section className="py-4 border-b flex md:flex-row flex-col gap-2 md:items-start">
                    <div className="sm:w-[300px]">
                        <div className="font-medium">Bank Account Details</div>
                        <div className="text-xs text-gray-500">Bank account details (for payouts)</div>
                        <div className="text-xs text-gray-500">Remuneration Micro-deposit verification</div>
                    </div>
                    <div className="flex flex-col w-full sm:w-[400px] space-y-4">
                        <div>
                            <div className="text-sm font-medium mb-2">Bank Name</div>
                            <Controller
                                name="bankName"
                                control={control}
                                render={({ field }) => (
                                    <input
                                        {...field}
                                        type="text"
                                        placeholder="Enter bank name"
                                        className="w-full h-10 rounded px-3 border text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                    />
                                )}
                            />
                            {errors.bankName && (
                                <p className="text-red-500 text-xs mt-1">{errors.bankName.message}</p>
                            )}
                        </div>

                        <div>
                            <div className="text-sm font-medium mb-2">Bank Account Number</div>
                            <Controller
                                name="bankAccountNumber"
                                control={control}
                                render={({ field }) => (
                                    <input
                                        {...field}
                                        type="text"
                                        placeholder="Enter account number"
                                        className="w-full h-10 rounded px-3 border text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                    />
                                )}
                            />
                            {errors.bankAccountNumber && (
                                <p className="text-red-500 text-xs mt-1">{errors.bankAccountNumber.message}</p>
                            )}
                        </div>
                    </div>
                </section>

                <section className="py-5 flex justify-end gap-5">
                    <Button type="button" variant="outline" className="px-6">
                        Cancel
                    </Button>
                    <Button type="submit" className="px-6">
                        Save
                    </Button>
                </section>
            </form>
        </div>
    );
}

export default ComplianceLegal;