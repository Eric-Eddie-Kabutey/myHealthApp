'use client';

import { Button } from '@/components/ui/button';
import { Camera, FolderPlus, X } from 'lucide-react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

// Zod schema for form validation
const profileInfoSchema = z.object({
    firstName: z.string().min(1, 'First name is required'),
    lastName: z.string().min(1, 'Last name is required'),
    dateOfBirth: z.string().min(1, 'Date of birth is required').regex(/^\d{2}\/\d{2}\/\d{4}$/, 'Invalid date format (DD/MM/YYYY)'),
    governmentPhotoId: z
        .instanceof(File)
        .refine((file) => file.size <= 10 * 1024 * 1024, 'File size must be less than 10MB')
        .refine(
            (file) => ['image/png', 'image/jpeg', 'image/jpg', 'application/pdf'].includes(file.type),
            'Only PNG, JPEG, and PDF files are allowed'
        )
        .optional(),
    liveSelfie: z
        .instanceof(File)
        .refine((file) => file.size <= 10 * 1024 * 1024, 'File size must be less than 10MB')
        .refine(
            (file) => ['image/png', 'image/jpeg', 'image/jpg'].includes(file.type),
            'Only PNG and JPEG files are allowed'
        )
        .optional(),
    legalAddress: z.string().min(1, 'Legal address is required'),
    phoneNumber: z.string().min(1, 'Phone number is required').regex(/^[\+]?[1-9][\d]{0,15}$/, 'Invalid phone number format'),
    specialisation: z.string().min(1, 'Specialisation is required'),
    yearsOfExperience: z.string().min(1, 'Years of experience is required'),
});

type ProfileInfoFormData = z.infer<typeof profileInfoSchema>;

function ProfileInfo() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        watch,
        control,
    } = useForm<ProfileInfoFormData>({
        resolver: zodResolver(profileInfoSchema),
        defaultValues: {
            firstName: '',
            lastName: '',
            dateOfBirth: '',
            legalAddress: '',
            phoneNumber: '',
            specialisation: '',
            yearsOfExperience: '',
        },
    });

    const watchedGovernmentId = watch('governmentPhotoId');
    const watchedSelfie = watch('liveSelfie');

    const onSubmit = (data: ProfileInfoFormData) => {
        console.log('Form submitted:', data);
        // Handle form submission here
    };

    // Format date input
    const formatDate = (value: string) => {
        const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
        if (v.length >= 2 && v.length <= 4) {
            return v.substring(0, 2) + (v.length > 2 ? '/' + v.substring(2, 4) : '');
        } else if (v.length > 4) {
            return v.substring(0, 2) + '/' + v.substring(2, 4) + (v.length > 4 ? '/' + v.substring(4, 8) : '');
        }
        return v;
    };

    // Handle file selection
    const handleGovernmentIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setValue('governmentPhotoId', file, { shouldValidate: true });
        }
    };

    const handleSelfieChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setValue('liveSelfie', file, { shouldValidate: true });
        }
    };

    // Remove selected files
    const removeGovernmentId = () => {
        setValue('governmentPhotoId', undefined, { shouldValidate: true });
        // Reset the file input
        const fileInput = document.querySelector('input[name="governmentPhotoId"]') as HTMLInputElement;
        if (fileInput) fileInput.value = '';
    };

    const removeSelfie = () => {
        setValue('liveSelfie', undefined, { shouldValidate: true });
        // Reset the file input
        const fileInput = document.querySelector('input[name="liveSelfie"]') as HTMLInputElement;
        if (fileInput) fileInput.value = '';
    };

    // Format file size for display
    const formatFileSize = (bytes: number) => {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    };
    return (
        <div className="w-full main-content flex flex-col">
            <form onSubmit={handleSubmit(onSubmit)}>
                <section className="py-4 border-b flex md:flex-row flex-col gap-2 md:items-center">
                    <div className="sm:w-[300px]">
                        <div className="font-medium">Full Legal Name</div>
                        <div className="text-xs text-gray-500">As it appears on your medical license</div>
                    </div>
                    <div className="flex flex-col w-full sm:w-[400px]">
                        <div className="grid grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="Adeyemi"
                                className="w-full h-10 rounded px-3 border text-sm"
                                {...register('firstName')}
                            />
                            <input
                                type="text"
                                placeholder="Meshack"
                                className="w-full h-10 rounded px-3 border text-sm"
                                {...register('lastName')}
                            />
                        </div>
                        {errors.firstName && (
                            <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
                        )}
                        {errors.lastName && (
                            <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
                        )}
                    </div>
                </section>
                <section className="py-4 border-b flex md:flex-row flex-col gap-2 md:items-center">
                    <div className="sm:w-[300px]">
                        <div className="font-medium">Date of Birth</div>
                        <div className="text-xs text-gray-500">For identity verification</div>
                    </div>
                    <div className="flex flex-col w-full sm:w-[400px]">
                        <input
                            type="text"
                            placeholder="DD/MM/YYYY"
                            className="w-full h-10 rounded px-3 border text-sm"
                            maxLength={10}
                            {...register('dateOfBirth')}
                            onChange={(e) => {
                                const formatted = formatDate(e.target.value);
                                e.target.value = formatted;
                                setValue('dateOfBirth', formatted);
                            }}
                        />
                        {errors.dateOfBirth && (
                            <p className="text-red-500 text-sm mt-1">{errors.dateOfBirth.message}</p>
                        )}
                    </div>
                </section>
                <section className="py-4 border-b flex md:flex-row flex-col gap-2 md:items-center">
                    <div className="sm:w-[300px]">
                        <div className="font-medium">Government Photo ID</div>
                        <div className="text-xs text-gray-500">Passport or national ID card</div>
                    </div>
                    <div className="flex flex-col gap-2 w-full sm:w-[400px]">
                        <button
                            type="button"
                            className="w-full h-[80px] border-gray-300 border border-dashed rounded-lg p-4 flex flex-col items-center justify-center relative"
                        >
                            <input
                                type="file"
                                name="governmentPhotoId"
                                className="absolute size-full opacity-0"
                                accept=".png,.jpg,.jpeg,.pdf"
                                onChange={handleGovernmentIdChange}
                            />
                            <FolderPlus className="size-5 min-h-5 mb-1" />
                            <small className="text-gray-500">
                                Drag and drop file here or <span className="underline text-primary">Choose file</span>
                            </small>
                            <small className="text-gray-500">PNG, JPEG and PDF ( Max . 10mb)</small>
                        </button>
                        {watchedGovernmentId && (
                            <div className="flex items-center gap-2 p-3 bg-blue-50 rounded-lg border border-blue-200">
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="inline-block px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded">
                                            {watchedGovernmentId.type.split('/')[1].toUpperCase()}
                                        </span>
                                        <span className="text-xs text-gray-500">
                                            {formatFileSize(watchedGovernmentId.size)}
                                        </span>
                                    </div>
                                    <span className="text-sm text-gray-700 block truncate">
                                        {watchedGovernmentId.name}
                                    </span>
                                </div>
                                <button
                                    type="button"
                                    onClick={removeGovernmentId}
                                    className="text-red-500 hover:text-red-700 p-1"
                                    title="Remove file"
                                >
                                    <X className="size-4" />
                                </button>
                            </div>
                        )}
                        {errors.governmentPhotoId && (
                            <p className="text-red-500 text-sm mt-1">{errors.governmentPhotoId.message}</p>
                        )}
                    </div>
                </section>
                <section className="py-4 border-b flex md:flex-row flex-col gap-2 md:items-center">
                    <div className="sm:w-[300px]">
                        <div className="font-medium">Live Selfie Capture</div>
                        <div className="text-xs text-gray-500">Real-time photo for verification</div>
                    </div>
                    <div className="flex flex-col gap-2 w-full sm:w-[400px]">
                        <button
                            type="button"
                            className="w-full h-10 border-gray-300 border border-dashed rounded-lg p-4 flex flex-col items-center justify-center relative"
                        >
                            <input
                                type="file"
                                name="liveSelfie"
                                className="absolute size-full opacity-0"
                                accept=".png,.jpg,.jpeg"
                                onChange={handleSelfieChange}
                            />
                            <span className="text-xs flex items-center gap-2">
                                <Camera className="size-5" />
                                Take a Picture
                            </span>
                        </button>
                        {watchedSelfie && (
                            <div className="flex items-center gap-2 p-3 bg-green-50 rounded-lg border border-green-200">
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="inline-block px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded">
                                            {watchedSelfie.type.split('/')[1].toUpperCase()}
                                        </span>
                                        <span className="text-xs text-gray-500">
                                            {formatFileSize(watchedSelfie.size)}
                                        </span>
                                    </div>
                                    <span className="text-sm text-gray-700 block truncate">
                                        {watchedSelfie.name}
                                    </span>
                                </div>
                                <button
                                    type="button"
                                    onClick={removeSelfie}
                                    className="text-red-500 hover:text-red-700 p-1"
                                    title="Remove file"
                                >
                                    <X className="size-4" />
                                </button>
                            </div>
                        )}
                        {errors.liveSelfie && (
                            <p className="text-red-500 text-sm mt-1">{errors.liveSelfie.message}</p>
                        )}
                    </div>
                </section>
                <section className="py-4 border-b flex md:flex-row flex-col gap-2 md:items-center">
                    <div className="sm:w-[300px]">
                        <div className="font-medium">Legal Address</div>
                        <div className="text-xs text-gray-500">Provide your legal address</div>
                    </div>
                    <div className="flex flex-col w-full sm:w-[400px]">
                        <input
                            type="text"
                            placeholder="Enter address"
                            className="w-full h-10 rounded px-3 border text-sm"
                            {...register('legalAddress')}
                        />
                        {errors.legalAddress && (
                            <p className="text-red-500 text-sm mt-1">{errors.legalAddress.message}</p>
                        )}
                    </div>
                </section>
                <section className="py-4 border-b flex md:flex-row flex-col gap-2 md:items-center">
                    <div className="sm:w-[300px]">
                        <div className="font-medium">Phone Number</div>
                        <div className="text-xs text-gray-500">Provide your phone number</div>
                    </div>
                    <div className="flex flex-col w-full sm:w-[400px]">
                        <input
                            type="tel"
                            placeholder="Enter phone number"
                            className="w-full h-10 rounded px-3 border text-sm"
                            {...register('phoneNumber')}
                        />
                        {errors.phoneNumber && (
                            <p className="text-red-500 text-sm mt-1">{errors.phoneNumber.message}</p>
                        )}
                    </div>
                </section>
                <section className="py-4 border-b flex md:flex-row flex-col gap-2 md:items-center">
                    <div className="sm:w-[300px]">
                        <div className="font-medium">Specialisation</div>
                        <div className="text-xs text-gray-500">Provide your speciality</div>
                    </div>
                    <div className="flex flex-col w-full sm:w-[400px]">
                        <input
                            type="text"
                            placeholder="Cardiology"
                            className="w-full h-10 rounded px-3 border text-sm"
                            {...register('specialisation')}
                        />
                        {errors.specialisation && (
                            <p className="text-red-500 text-sm mt-1">{errors.specialisation.message}</p>
                        )}
                    </div>
                </section>
                <section className="py-4 border-b flex md:flex-row flex-col gap-2 md:items-center">
                    <div className="sm:w-[300px]">
                        <div className="font-medium">Years of Experience</div>
                        <div className="text-xs text-gray-500">How many years of experience do you have?</div>
                    </div>
                    <div className="flex flex-col w-full sm:w-[400px]">
                        <input
                            type="text"
                            placeholder="1 Year"
                            className="w-full h-10 rounded px-3 border text-sm"
                            {...register('yearsOfExperience')}
                        />
                        {errors.yearsOfExperience && (
                            <p className="text-red-500 text-sm mt-1">{errors.yearsOfExperience.message}</p>
                        )}
                    </div>
                </section>
                <section className="py-5 flex justify-end gap-5">
                    <Button type="button" variant="outline">Cancel</Button>
                    <Button type="submit">Save</Button>
                </section>
            </form>
        </div>
    );
}

export default ProfileInfo