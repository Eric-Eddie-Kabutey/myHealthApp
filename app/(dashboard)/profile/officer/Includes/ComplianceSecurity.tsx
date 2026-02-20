'use client';

import { Button } from '@/components/ui/button';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const complianceSecuritySchema = z.object({
    termsOfService: z.boolean().refine((val) => val === true, {
        message: 'You must accept the Terms of Service',
    }),

    telemedicineConsent: z.boolean().refine((val) => val === true, {
        message: 'You must accept the Telemedicine Informed Consent',
    }),

    backgroundCheckConsent: z.boolean().refine((val) => val === true, {
        message: 'You must consent to the Background Check',
    }),

    bankName: z.string().min(1, 'Bank name is required'),

    bankAccountNumber: z.string().min(1, 'Bank account number is required'),
});

type ComplianceSecurityForm = z.infer<typeof complianceSecuritySchema>;

function ComplianceSecurity() {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<ComplianceSecurityForm>({
        resolver: zodResolver(complianceSecuritySchema),
        defaultValues: {
            termsOfService: false,
            telemedicineConsent: false,
            backgroundCheckConsent: false,
            bankName: '',
            bankAccountNumber: '',
        },
    });

    const onSubmit = (data: ComplianceSecurityForm) => {
        console.log('Form data:', data);
        // Handle form submission here
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full main-content flex flex-col">
            {/* Terms of Service */}
            <section className="py-4 border-b flex md:flex-row flex-col gap-2 md:items-center">
                <div className="flex w-full sm:w-[400px] items-center gap-2">
                    <Controller
                        name="termsOfService"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <input
                                type="checkbox"
                                id="tos"
                                className="accent-primary"
                                checked={value}
                                onChange={onChange}
                            />
                        )}
                    />
                    <label htmlFor="tos" className="text-sm">Terms of Service</label>
                </div>
                {errors.termsOfService && (
                    <p className="text-red-500 text-xs mt-1">{errors.termsOfService.message}</p>
                )}
            </section>

            {/* Telemedicine Informed Consent */}
            <section className="py-4 border-b flex md:flex-row flex-col gap-2 md:items-center">
                <div className="flex w-full sm:w-[400px] items-center gap-2">
                    <Controller
                        name="telemedicineConsent"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <input
                                type="checkbox"
                                id="telemedicine-consent"
                                className="accent-primary"
                                checked={value}
                                onChange={onChange}
                            />
                        )}
                    />
                    <label htmlFor="telemedicine-consent" className="text-sm">Telemedicine Informed Consent</label>
                </div>
                {errors.telemedicineConsent && (
                    <p className="text-red-500 text-xs mt-1">{errors.telemedicineConsent.message}</p>
                )}
            </section>

            {/* Consent to background check */}
            <section className="py-4 border-b flex md:flex-row flex-col gap-2 md:items-center">
                <div className="flex w-full items-center gap-2">
                    <Controller
                        name="backgroundCheckConsent"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <input
                                type="checkbox"
                                id="background-check"
                                className="accent-primary"
                                checked={value}
                                onChange={onChange}
                            />
                        )}
                    />
                    <label htmlFor="background-check" className="text-sm">
                        <span>Consent to Background Check <span className="text-gray-500">Patient safety, regulatory — Integrate third-party screening (OFAC, Interpol, local police)</span></span>
                    </label>
                </div>
                {errors.backgroundCheckConsent && (
                    <p className="text-red-500 text-xs mt-1">{errors.backgroundCheckConsent.message}</p>
                )}
            </section>

            {/* Bank Account Details */}
            <section className="py-4 border-b flex md:flex-row flex-col gap-2 md:items-center">
                <div className="sm:w-[300px]">
                    <div className="font-medium">Bank Account Details</div>
                    <div className="text-xs text-gray-500">
                        Remuneration — Micro-deposit verification
                    </div>
                </div>
                <div className="flex flex-col gap-2 w-full sm:w-[400px]">
                    <div>
                        <label htmlFor="bank-name" className="text-sm">Bank Name</label>
                        <Controller
                            name="bankName"
                            control={control}
                            render={({ field }) => (
                                <input
                                    {...field}
                                    id="bank-name"
                                    type="text"
                                    placeholder="Enter bank name"
                                    className="w-full border rounded px-3 py-2 mt-1 text-sm"
                                />
                            )}
                        />
                        {errors.bankName && (
                            <p className="text-red-500 text-xs mt-1">{errors.bankName.message}</p>
                        )}
                    </div>
                    <div>
                        <label htmlFor="bank-account" className="text-sm">Bank Account Number</label>
                        <Controller
                            name="bankAccountNumber"
                            control={control}
                            render={({ field }) => (
                                <input
                                    {...field}
                                    id="bank-account"
                                    type="text"
                                    placeholder="Enter account number"
                                    className="w-full border rounded px-3 py-2 mt-1 text-sm"
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
                <Button type="button" variant="outline">Cancel</Button>
                <Button type="submit">Save</Button>
            </section>
        </form>
    );
}

export default ComplianceSecurity;