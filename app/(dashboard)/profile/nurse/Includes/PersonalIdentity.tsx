'use client';

import { Button } from '@/components/ui/button';
import { FolderPlus, X, Camera, Calendar } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
const ACCEPTED_IMAGE_TYPES = ['image/png', 'image/jpeg'];

const isFileList = (val: unknown): val is FileList =>
    typeof FileList !== 'undefined' && val instanceof FileList;

const fileSchema = (acceptedTypes: string[]) =>
    z
        .custom<FileList>(isFileList)
        .optional()
        .refine((files) => {
            if (!files || files.length === 0) return true;
            return files[0].size <= MAX_FILE_SIZE;
        }, 'File size must be less than 10MB')
        .refine((files) => {
            if (!files || files.length === 0) return true;
            return acceptedTypes.includes(files[0].type);
        }, `Only ${acceptedTypes.join(', ')} files are allowed`);

const personalIdentitySchema = z.object({
    firstName: z.string().min(1, 'First name is required'),
    lastName: z.string().min(1, 'Last name is required'),
    dateOfBirth: z.string().min(1, 'Date of birth is required'),
    governmentPhotoId: fileSchema(ACCEPTED_IMAGE_TYPES),
    liveSelfie: fileSchema(ACCEPTED_IMAGE_TYPES),
    legalAddress: z.string().min(1, 'Legal address is required'),
    phoneNumber: z.string().min(1, 'Phone number is required'),
    emailAddress: z.string().email('Please enter a valid email address'),
});

type PersonalIdentityForm = z.infer<typeof personalIdentitySchema>;

function PersonalIdentity() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const {
        control,
        handleSubmit,
        watch,
        setValue,
        formState: { errors },
    } = useForm<PersonalIdentityForm>({
        resolver: zodResolver(personalIdentitySchema),
        defaultValues: {
            firstName: '',
            lastName: '',
            dateOfBirth: '',
            legalAddress: '',
            phoneNumber: '',
            emailAddress: '',
        },
    });

    const watchedFiles = watch();

    const onSubmit = (data: PersonalIdentityForm) => {
        console.log('Personal identity data:', data);
        // Handle form submission here
    };

    const removeFile = (fieldName: 'governmentPhotoId' | 'liveSelfie') => {
        setValue(fieldName, undefined as any);
    };

    if (!mounted) {
        return null;
    }

    return (
        <div className="w-full flex flex-col items-center main-content">
            <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col">
                {/* Full Legal Name */}
                <section className="py-4 border-b flex md:flex-row flex-col gap-2 md:items-center">
                    <div className="sm:w-[300px]">
                        <div className="font-medium">Full Legal Name</div>
                        <div className="text-xs text-gray-500">As it appears on your medical license</div>
                    </div>
                    <div className="flex gap-4 w-full sm:w-[400px]">
                        <div className="flex-1">
                            <Controller
                                name="firstName"
                                control={control}
                                render={({ field }) => (
                                    <input
                                        {...field}
                                        type="text"
                                        placeholder="Adeyemi"
                                        className="w-full h-10 rounded px-3 border text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                    />
                                )}
                            />
                            {errors.firstName && (
                                <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>
                            )}
                        </div>
                        <div className="flex-1">
                            <Controller
                                name="lastName"
                                control={control}
                                render={({ field }) => (
                                    <input
                                        {...field}
                                        type="text"
                                        placeholder="Meshack"
                                        className="w-full h-10 rounded px-3 border text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                    />
                                )}
                            />
                            {errors.lastName && (
                                <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>
                            )}
                        </div>
                    </div>
                </section>

                {/* Date of Birth */}
                <section className="py-4 border-b flex md:flex-row flex-col gap-2 md:items-center">
                    <div className="sm:w-[300px]">
                        <div className="font-medium">Date of Birth</div>
                        <div className="text-xs text-gray-500">For identity verification</div>
                    </div>
                    <div className="flex flex-col w-full sm:w-[400px]">
                        <div className="relative">
                            <Controller
                                name="dateOfBirth"
                                control={control}
                                render={({ field }) => (
                                    <input
                                        {...field}
                                        type="text"
                                        placeholder="DD/MM/YY"
                                        className="w-full h-10 rounded px-3 pr-10 border text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                    />
                                )}
                            />
                            <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 size-4 text-gray-400" />
                        </div>
                        {errors.dateOfBirth && (
                            <p className="text-red-500 text-xs mt-1">{errors.dateOfBirth.message}</p>
                        )}
                    </div>
                </section>

                {/* Government-issued Photo ID */}
                <section className="py-4 border-b flex md:flex-row flex-col gap-2 md:items-start">
                    <div className="sm:w-[300px]">
                        <div className="font-medium">Government-issued Photo ID</div>
                        <div className="text-xs text-gray-500">Passport or national ID card</div>
                    </div>
                    <div className="flex flex-col w-full sm:w-[400px]">
                        <Controller
                            name="governmentPhotoId"
                            control={control}
                            render={({ field: { onChange, onBlur } }) => (
                                <div className="relative">
                                    <button
                                        type="button"
                                        className="w-full border-gray-300 border border-dashed rounded-lg p-4 flex flex-col items-center justify-center relative hover:bg-gray-50"
                                    >
                                        <input
                                            type="file"
                                            accept=".png,.jpg,.jpeg"
                                            className="absolute size-full opacity-0 cursor-pointer"
                                            onChange={(e) => onChange(e.target.files)}
                                            onBlur={onBlur}
                                        />
                                        <FolderPlus className="size-5 mb-2 text-gray-400" />
                                        <span className="text-sm text-gray-600 text-center">
                                            Drag and drop file here or <span className="underline text-green-600">Choose file</span>
                                        </span>
                                        <span className="text-xs text-gray-500 mt-1">PNG, JPEG and PDF ( Max . 10mb)</span>
                                    </button>
                                </div>
                            )}
                        />

                        {watchedFiles.governmentPhotoId?.[0] && (
                            <div className="mt-3 flex items-center gap-2 p-3 bg-gray-50 rounded-lg border">
                                <div className="flex-1">
                                    <div className="text-sm font-medium text-gray-700 truncate">{watchedFiles.governmentPhotoId[0].name}</div>
                                    <div className="text-xs text-gray-500">
                                        {(watchedFiles.governmentPhotoId[0].size / 1024 / 1024).toFixed(2)} MB • {watchedFiles.governmentPhotoId[0].type}
                                    </div>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => removeFile('governmentPhotoId')}
                                    className="p-1 hover:bg-gray-200 rounded-full transition-colors"
                                >
                                    <X className="size-4 text-gray-500" />
                                </button>
                            </div>
                        )}

                        {errors.governmentPhotoId && (
                            <p className="text-red-500 text-xs mt-2">{errors.governmentPhotoId.message}</p>
                        )}
                    </div>
                </section>

                {/* Live Selfie Capture */}
                <section className="py-4 border-b flex md:flex-row flex-col gap-2 md:items-start">
                    <div className="sm:w-[300px]">
                        <div className="font-medium">Live Selfie Capture</div>
                        <div className="text-xs text-gray-500">Real-time photo for verification</div>
                    </div>
                    <div className="flex flex-col w-full sm:w-[400px]">
                        <Controller
                            name="liveSelfie"
                            control={control}
                            render={({ field: { onChange, onBlur } }) => (
                                <div className="relative">
                                    <button
                                        type="button"
                                        className="w-full border-gray-300 border border-dashed rounded-lg p-2 gap-3 flex items-center justify-center relative hover:bg-gray-50"
                                    >
                                        <input
                                            type="file"
                                            accept=".png,.jpg,.jpeg"
                                            className="absolute size-full opacity-0 cursor-pointer"
                                            onChange={(e) => onChange(e.target.files)}
                                            onBlur={onBlur}
                                        />
                                        <Camera className="size-5  text-gray-400" />
                                        <span className="text-sm text-gray-600 text-center">
                                            Take a Picture
                                        </span>
                                    </button>
                                </div>
                            )}
                        />

                        {watchedFiles.liveSelfie?.[0] && (
                            <div className="mt-3 flex items-center gap-2 p-3 bg-gray-50 rounded-lg border">
                                <div className="flex-1">
                                    <div className="text-sm font-medium text-gray-700 truncate">{watchedFiles.liveSelfie[0].name}</div>
                                    <div className="text-xs text-gray-500">
                                        {(watchedFiles.liveSelfie[0].size / 1024 / 1024).toFixed(2)} MB • {watchedFiles.liveSelfie[0].type}
                                    </div>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => removeFile('liveSelfie')}
                                    className="p-1 hover:bg-gray-200 rounded-full transition-colors"
                                >
                                    <X className="size-4 text-gray-500" />
                                </button>
                            </div>
                        )}

                        {errors.liveSelfie && (
                            <p className="text-red-500 text-xs mt-2">{errors.liveSelfie.message}</p>
                        )}
                    </div>
                </section>

                {/* Legal Address */}
                <section className="py-4 border-b flex md:flex-row flex-col gap-2 md:items-center">
                    <div className="sm:w-[300px]">
                        <div className="font-medium">Legal Address</div>
                        <div className="text-xs text-gray-500">Provide your legal address</div>
                    </div>
                    <div className="flex flex-col w-full sm:w-[400px]">
                        <Controller
                            name="legalAddress"
                            control={control}
                            render={({ field }) => (
                                <input
                                    {...field}
                                    type="text"
                                    placeholder="Enter address"
                                    className="w-full h-10 rounded px-3 border text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                />
                            )}
                        />
                        {errors.legalAddress && (
                            <p className="text-red-500 text-xs mt-1">{errors.legalAddress.message}</p>
                        )}
                    </div>
                </section>

                {/* Phone Number */}
                <section className="py-4 border-b flex md:flex-row flex-col gap-2 md:items-center">
                    <div className="sm:w-[300px]">
                        <div className="font-medium">Phone Number</div>
                        <div className="text-xs text-gray-500">Provide your phone number</div>
                    </div>
                    <div className="flex flex-col w-full sm:w-[400px]">
                        <Controller
                            name="phoneNumber"
                            control={control}
                            render={({ field }) => (
                                <input
                                    {...field}
                                    type="tel"
                                    placeholder="Enter phone number"
                                    className="w-full h-10 rounded px-3 border text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                />
                            )}
                        />
                        {errors.phoneNumber && (
                            <p className="text-red-500 text-xs mt-1">{errors.phoneNumber.message}</p>
                        )}
                    </div>
                </section>

                {/* Email Address */}
                <section className="py-4 border-b flex md:flex-row flex-col gap-2 md:items-center">
                    <div className="sm:w-[300px]">
                        <div className="font-medium">Email Address</div>
                        <div className="text-xs text-gray-500">Provide your email address</div>
                    </div>
                    <div className="flex flex-col w-full sm:w-[400px]">
                        <Controller
                            name="emailAddress"
                            control={control}
                            render={({ field }) => (
                                <input
                                    {...field}
                                    type="email"
                                    placeholder="Example@gmail.com"
                                    className="w-full h-10 rounded px-3 border text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                />
                            )}
                        />
                        {errors.emailAddress && (
                            <p className="text-red-500 text-xs mt-1">{errors.emailAddress.message}</p>
                        )}
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

export default PersonalIdentity