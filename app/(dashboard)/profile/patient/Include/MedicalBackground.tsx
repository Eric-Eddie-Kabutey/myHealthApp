'use client';

import { Button } from '@/components/ui/button';
import routes from '@/lib/routes';
import { Camera, FolderPlus, Plus, X } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

// Zod schema for form validation
const medicalBackgroundSchema = z.object({
    fullLegalName: z.string().min(1, 'Full legal name is required'),
    currentMedications: z.array(z.object({
        name: z.string().min(1, 'Medication name is required')
    })),
    allergies: z.string().optional(),
    chronicConditions: z.string().optional(),
    familyHealthHistory: z.string().optional(),
    smoking: z.string().optional(),
    alcohol: z.string().optional(),
    pregnancy: z.string().optional(),
    medicalReports: z.any().optional(), // File handling
});

type MedicalBackgroundFormData = z.infer<typeof medicalBackgroundSchema>;

function MedicalBackground() {
    const {
        register,
        control,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm<MedicalBackgroundFormData>({
        resolver: zodResolver(medicalBackgroundSchema),
        defaultValues: {
            fullLegalName: '',
            currentMedications: [{ name: '' }],
            allergies: '',
            chronicConditions: '',
            familyHealthHistory: '',
            smoking: '',
            alcohol: '',
            pregnancy: '',
        },
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'currentMedications',
    });

    const onSubmit = (data: MedicalBackgroundFormData) => {
        console.log('Form submitted:', data);
        // Handle form submission here
    };

    const addMedication = () => {
        append({ name: '' });
    };

    const removeMedication = (index: number) => {
        if (fields.length > 1) {
            remove(index);
        }
    };
    return (
        <div className="w-full main-content flex flex-col">
            <form onSubmit={handleSubmit(onSubmit)}>
                <section className="py-4 border-b flex md:flex-row flex-col gap-2 md:items-center">
                    <div className="sm:w-[300px]">
                        Full Legal Name
                    </div>
                    <div className="gap-4 w-full sm:w-[550px]">
                        <input
                            type="text"
                            placeholder='Enter your full legal name'
                            className="w-full h-10 rounded px-3 border text-sm"
                            {...register('fullLegalName')}
                        />
                        {errors.fullLegalName && (
                            <p className="text-red-500 text-sm mt-1">{errors.fullLegalName.message}</p>
                        )}
                    </div>
                </section>

                <section className="py-4 border-b flex lg:flex-row flex-col gap-2 lg:items-start">
                    <div className="lg:w-[300px] flex items-center">
                        <span className='text-nowrap'>Current Medications *</span>
                        <span className="text-red-600 text-xs lg:min-w-[170px]">( Click on the + icon to add more medications )</span>
                    </div>
                    <div className="gap-2 w-full sm:w-[550px] flex flex-col">
                        {fields.map((field, index) => (
                            <div key={field.id} className="flex gap-2">
                                <input
                                    type="text"
                                    placeholder='Enter your current medications'
                                    className="w-full h-10 rounded px-3 border text-sm"
                                    {...register(`currentMedications.${index}.name` as const)}
                                />
                                {fields.length > 1 && (
                                    <button
                                        type="button"
                                        onClick={() => removeMedication(index)}
                                        className="size-10 min-w-10 flex items-center justify-center border rounded text-red-500 hover:bg-red-50"
                                    >
                                        <X className='size-5' />
                                    </button>
                                )}
                                {index === fields.length - 1 && (
                                    <button
                                        type="button"
                                        onClick={addMedication}
                                        className="size-10 min-w-10 flex items-center justify-center border rounded hover:bg-gray-50"
                                    >
                                        <Plus className='size-5' />
                                    </button>
                                )}
                            </div>
                        ))}
                        {errors.currentMedications && (
                            <p className="text-red-500 text-sm">{errors.currentMedications.message}</p>
                        )}
                        <button
                            type="button"
                            className="w-full min-w-[200px] border border-dashed rounded border-gray-300 flex flex-col items-center justify-center gap-1 py-4"
                        >
                            <Camera className='size-4 min-h-4' />
                            <span className="text-xs text-gray-500">
                                <span className="underline text-primary">Click here</span> to scan medications
                            </span>
                        </button>
                    </div>
                </section>

                <section className="py-4 border-b flex md:flex-row flex-col gap-2 md:items-center">
                    <div className="sm:w-[300px]">
                        Allergies
                    </div>
                    <div className="flex w-full sm:w-[400px]">
                        <input
                            type="text"
                            placeholder='Enter your allergies'
                            className="w-full h-10 rounded px-3 border text-sm"
                            {...register('allergies')}
                        />
                    </div>
                </section>

                <section className="py-4 border-b flex md:flex-row flex-col gap-2 md:items-center">
                    <div className="sm:w-[300px]">
                        Chronic Conditions / Past Surgeries
                    </div>
                    <div className="flex w-full sm:w-[400px]">
                        <input
                            type="text"
                            placeholder='Enter your past surgeries'
                            className="w-full h-10 rounded px-3 border text-sm"
                            {...register('chronicConditions')}
                        />
                    </div>
                </section>

                <section className="py-4 border-b flex md:flex-row flex-col gap-2 md:items-center">
                    <div className="sm:w-[300px]">
                        Family Health History (Optional)
                    </div>
                    <div className="flex w-full sm:w-[400px]">
                        <input
                            type="text"
                            placeholder='Enter your family health history'
                            className="w-full h-10 rounded px-3 border text-sm"
                            {...register('familyHealthHistory')}
                        />
                    </div>
                </section>

                <section className="py-4 border-b flex md:flex-row flex-col gap-2 ">
                    <div className="sm:w-[300px]">
                        Lifestyle Factors
                    </div>
                    <div className="flex flex-col gap-4 w-full sm:w-[400px]">
                        <aside className="flex flex-col gap-1 w-full">
                            <p className="text-sm">Smoking</p>
                            <select
                                className="w-full h-10 rounded px-3 border text-sm"
                                {...register('smoking')}
                            >
                                <option value="">Select smoking status</option>
                                <option value="never">Never smoked</option>
                                <option value="current">Current smoker</option>
                                <option value="former">Former smoker</option>
                            </select>
                        </aside>
                        <aside className="flex flex-col gap-1 w-full">
                            <p className="text-sm">Alcohol</p>
                            <select
                                className="w-full h-10 rounded px-3 border text-sm"
                                {...register('alcohol')}
                            >
                                <option value="">Select alcohol consumption</option>
                                <option value="never">Never</option>
                                <option value="occasional">Occasional</option>
                                <option value="moderate">Moderate</option>
                                <option value="heavy">Heavy</option>
                            </select>
                        </aside>
                        <aside className="flex flex-col gap-1 w-full">
                            <p className="text-sm">Pregnancy</p>
                            <select
                                className="w-full h-10 rounded px-3 border text-sm"
                                {...register('pregnancy')}
                            >
                                <option value="">Select pregnancy status</option>
                                <option value="not-applicable">Not applicable</option>
                                <option value="not-pregnant">Not pregnant</option>
                                <option value="pregnant">Pregnant</option>
                                <option value="trying">Trying to conceive</option>
                            </select>
                        </aside>
                    </div>
                </section>

                <section className="py-4 border-b flex md:flex-row flex-col gap-2 md:items-center">
                    <div className="sm:w-[300px]">
                        Upload Medical Reports from Past Facilities / Previous Doctors
                    </div>
                    <div className="flex w-full sm:w-[400px]">
                        <button
                            type="button"
                            className="w-full h-[80px] border-gray-300 border border-dashed rounded-lg p-4 flex flex-col items-center justify-center relative"
                        >
                            <input
                                type="file"
                                className="absolute size-full opacity-0"
                                multiple
                                accept=".png,.jpg,.jpeg,.pdf"
                                {...register('medicalReports')}
                            />
                            <FolderPlus className='size-5 min-h-5 mb-1' />
                            <small className="text-gray-500">
                                Drag and drop file here or <span className="underline text-primary">Choose file</span>
                            </small>
                            <small className="text-gray-500">PNG, JPEG and PDF ( Max . 10mb)</small>
                        </button>
                    </div>
                </section>

                <section className="py-4 border-b flex md:flex-row flex-col gap-2 md:items-center">
                    <div className="sm:w-[300px]">
                        Share Profile Link
                    </div>
                    <div className="flex w-fit gap-3 items-center">
                        www.riciacare.com/profile/share/sdhdjksllslmfdjkdkdk
                        <Button type="button" variant={'outline'} className='rounded'>Copy Link</Button>
                        <Button type="button" variant={'outline'} className='rounded'>Share Link</Button>
                    </div>
                </section>

                <section className="py-5 flex justify-end gap-5">
                    <Button type="button" variant={'outline'}>Cancel</Button>
                    <Button type="submit">Save</Button>
                </section>
            </form>
        </div>
    )
}

export default MedicalBackground