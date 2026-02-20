'use client';

import { Button } from '@/components/ui/button';
import { File, FolderPlus, Upload, X } from 'lucide-react';
import React, { useRef } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
const ACCEPTED_VIDEO_TYPES = ['video/mp4', 'video/mov', 'video/avi'];
const ACCEPTED_IMAGE_TYPES = ['image/png', 'image/jpeg', 'image/jpg'];

const isFileList = (val: unknown): val is FileList =>
    typeof FileList !== 'undefined' && val instanceof FileList;

const createFileSchema = (acceptedTypes: string[], isRequired: boolean = false) =>
    z
        .custom<FileList>(isFileList)
        .optional()
        .refine((files) => {
            if (isRequired && (!files || files.length === 0)) {
                return false;
            }
            return true;
        }, 'This file is required')
        .refine((files) => {
            if (!files || files.length === 0) return true;
            return files[0].size <= MAX_FILE_SIZE;
        }, 'File size must be less than 10MB')
        .refine((files) => {
            if (!files || files.length === 0) return true;
            return acceptedTypes.includes(files[0].type);
        }, `Only ${acceptedTypes.map(type => type.split('/')[1].toUpperCase()).join(', ')} files are allowed`);

const workingHoursSchema = z.object({
    day: z.string(),
    enabled: z.boolean(),
    startTime: z.string().optional(),
    endTime: z.string().optional(),
});

const optionalAdditionsSchema = z.object({
    shortIntroVideo: createFileSchema(ACCEPTED_VIDEO_TYPES),
    digitalSignature: createFileSchema(ACCEPTED_IMAGE_TYPES),
    emergencyContactFirstName: z.string().optional(),
    emergencyContactLastName: z.string().optional(),
    emergencyContactRelationship: z.string().optional(),
    emergencyContactPhoneNumber: z.string().optional(),
    workingHours: z.array(workingHoursSchema),
});

type OptionalAdditionsForm = z.infer<typeof optionalAdditionsSchema>;

const DAYS_OF_WEEK = [
    { key: 'monday', label: 'Monday' },
    { key: 'tuesday', label: 'Tuesday' },
    { key: 'wednesday', label: 'Wednesday' },
    { key: 'thursday', label: 'Thursday' },
    { key: 'friday', label: 'Friday' },
    { key: 'saturday', label: 'Saturday' },
    { key: 'sunday', label: 'Sunday' },
];

function OptionalAdditions() {
    const videoInputRef = useRef<HTMLInputElement>(null);
    const signatureInputRef = useRef<HTMLInputElement>(null);

    const {
        control,
        handleSubmit,
        watch,
        setValue,
        formState: { errors },
    } = useForm<OptionalAdditionsForm>({
        resolver: zodResolver(optionalAdditionsSchema),
        defaultValues: {
            emergencyContactFirstName: '',
            emergencyContactLastName: '',
            emergencyContactRelationship: '',
            emergencyContactPhoneNumber: '',
            workingHours: DAYS_OF_WEEK.map(day => ({
                day: day.key,
                enabled: day.key !== 'saturday' && day.key !== 'sunday',
                startTime: '09:00',
                endTime: '17:00',
            })),
        },
    });

    const shortIntroVideo = watch('shortIntroVideo');
    const digitalSignature = watch('digitalSignature');

    const onSubmit = (data: OptionalAdditionsForm) => {
        console.log('Optional additions data:', data);
        // Handle form submission here
    };

    const removeFile = (fieldName: 'shortIntroVideo' | 'digitalSignature') => {
        setValue(fieldName, undefined as any);
        if (fieldName === 'shortIntroVideo' && videoInputRef.current) {
            videoInputRef.current.value = '';
        }
        if (fieldName === 'digitalSignature' && signatureInputRef.current) {
            signatureInputRef.current.value = '';
        }
    };

    const formatFileSize = (bytes: number): string => {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    };

    return (
        <div className="w-full flex flex-col items-center main-content">
            <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col">
                {/* Short Intro Video */}
                <section className="py-4 border-b flex md:flex-row flex-col gap-2 md:items-start">
                    <div className="sm:w-[300px]">
                        <div className="font-medium">Short intro video (60s)</div>
                        <div className="text-xs text-gray-500">Share about your passions</div>
                    </div>
                    <div className="flex flex-col w-full sm:w-[400px]">
                        <Controller
                            name="shortIntroVideo"
                            control={control}
                            render={({ field: { onChange } }) => (
                                <div className="space-y-3">
                                    <div
                                        className="border-2 border-dashed border-gray-300 rounded-lg py-3 text-center cursor-pointer hover:border-green-400 transition-colors"
                                        onClick={() => videoInputRef.current?.click()}
                                    >
                                        <FolderPlus className="mx-auto size-5 text-gray-400 mb-2" />
                                        <p className="text-sm text-gray-600 mb-2">
                                            Drag and drop file here or{' '}
                                            <span className="text-green-600 underline hover:text-green-700">
                                                Choose file
                                            </span>
                                        </p>
                                        <p className="text-xs text-gray-500">
                                            MP4, MOV and AVI files · Max 10MB
                                        </p>
                                        <input
                                            ref={videoInputRef}
                                            type="file"
                                            accept={ACCEPTED_VIDEO_TYPES.join(',')}
                                            onChange={(e) => onChange(e.target.files)}
                                            className="hidden"
                                        />
                                    </div>

                                    {shortIntroVideo?.[0] && (
                                        <div className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-lg">
                                            <div className="flex items-center space-x-2">
                                                <File className="h-4 w-4 " />
                                                <span className="text-sm text-gray-700 font-medium">{shortIntroVideo[0].name}</span>
                                                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                                                    {formatFileSize(shortIntroVideo[0].size)}
                                                </span>
                                            </div>
                                            <button
                                                type="button"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    removeFile('shortIntroVideo');
                                                }}
                                                className="text-red-500 hover:text-red-700 p-1 hover:bg-red-50 rounded"
                                            >
                                                <X className="h-4 w-4" />
                                            </button>
                                        </div>
                                    )}
                                </div>
                            )}
                        />
                        {errors.shortIntroVideo && (
                            <p className="text-red-500 text-xs mt-1">{errors.shortIntroVideo.message}</p>
                        )}
                    </div>
                </section>

                {/* Digital Signature */}
                <section className="py-4 border-b flex md:flex-row flex-col gap-2 md:items-start">
                    <div className="sm:w-[300px]">
                        <div className="font-medium">Digital signature</div>
                        <div className="text-xs text-gray-500">For fast form signing (e.g., prescriptions, referrals)</div>
                    </div>
                    <div className="flex flex-col w-full sm:w-[400px]">
                        <Controller
                            name="digitalSignature"
                            control={control}
                            render={({ field: { onChange } }) => (
                                <div className="space-y-3">
                                    <div
                                        className="border-2 border-dashed border-gray-300 rounded-lg py-3 text-center cursor-pointer hover:border-green-400 transition-colors"
                                        onClick={() => signatureInputRef.current?.click()}
                                    >
                                        <FolderPlus className="mx-auto size-5 text-gray-400 mb-2" />
                                        <p className="text-sm text-gray-600 mb-2">
                                            Drag and drop file here or{' '}
                                            <span className="text-green-600 underline hover:text-green-700">
                                                Choose file
                                            </span>
                                        </p>
                                        <p className="text-xs text-gray-500">
                                            PNG, JPEG and JPG files · Max 10MB
                                        </p>
                                        <input
                                            ref={signatureInputRef}
                                            type="file"
                                            accept={ACCEPTED_IMAGE_TYPES.join(',')}
                                            onChange={(e) => onChange(e.target.files)}
                                            className="hidden"
                                        />
                                    </div>

                                    {digitalSignature?.[0] && (
                                        <div className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-lg">
                                            <div className="flex items-center space-x-2">
                                                <File className="h-4 w-4 text-green-600" />
                                                <span className="text-sm text-gray-700 font-medium">{digitalSignature[0].name}</span>
                                                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                                                    {formatFileSize(digitalSignature[0].size)}
                                                </span>
                                            </div>
                                            <button
                                                type="button"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    removeFile('digitalSignature');
                                                }}
                                                className="text-red-500 hover:text-red-700 p-1 hover:bg-red-50 rounded"
                                            >
                                                <X className="h-4 w-4" />
                                            </button>
                                        </div>
                                    )}
                                </div>
                            )}
                        />
                        {errors.digitalSignature && (
                            <p className="text-red-500 text-xs mt-1">{errors.digitalSignature.message}</p>
                        )}
                    </div>
                </section>

                {/* Emergency Contact */}
                <section className="py-4 border-b flex md:flex-row flex-col gap-2 md:items-start">
                    <div className="sm:w-[300px]">
                        <div className="font-medium">Emergency Contact</div>
                        <div className="text-xs text-gray-500">For safety purposes</div>
                    </div>
                    <div className="flex flex-col w-full sm:w-[400px] space-y-4">
                        <div>
                            <div className="text-sm font-medium mb-2">First Name</div>
                            <Controller
                                name="emergencyContactFirstName"
                                control={control}
                                render={({ field }) => (
                                    <input
                                        {...field}
                                        type="text"
                                        placeholder="Enter Name"
                                        className="w-full h-10 rounded px-3 border text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                    />
                                )}
                            />
                        </div>

                        <div>
                            <div className="text-sm font-medium mb-2">Last Name</div>
                            <Controller
                                name="emergencyContactLastName"
                                control={control}
                                render={({ field }) => (
                                    <input
                                        {...field}
                                        type="text"
                                        placeholder="Enter Name"
                                        className="w-full h-10 rounded px-3 border text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                    />
                                )}
                            />
                        </div>

                        <div>
                            <div className="text-sm font-medium mb-2">Relationship</div>
                            <Controller
                                name="emergencyContactRelationship"
                                control={control}
                                render={({ field }) => (
                                    <input
                                        {...field}
                                        type="text"
                                        placeholder="Enter relationship"
                                        className="w-full h-10 rounded px-3 border text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                    />
                                )}
                            />
                        </div>

                        <div>
                            <div className="text-sm font-medium mb-2">Phone Number</div>
                            <Controller
                                name="emergencyContactPhoneNumber"
                                control={control}
                                render={({ field }) => (
                                    <input
                                        {...field}
                                        type="tel"
                                        placeholder="Enter Phone Number"
                                        className="w-full h-10 rounded px-3 border text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                    />
                                )}
                            />
                        </div>
                    </div>
                </section>

                {/* Working Hours */}
                <section className="py-4 border-b flex md:flex-row flex-col gap-2 md:items-start">
                    <div className="sm:w-[300px]">
                        <div className="font-medium">Working Hours</div>
                        <div className="text-xs text-gray-500">For safety purposes</div>
                    </div>
                    <div className="flex flex-col w-full sm:w-[400px] space-y-2">
                        {DAYS_OF_WEEK.map((day, index) => (
                            <div key={day.key} className="flex items-center space-x-4">
                                <Controller
                                    name={`workingHours.${index}.enabled`}
                                    control={control}
                                    render={({ field }) => (
                                        <input
                                            type="checkbox"
                                            checked={field.value}
                                            onChange={field.onChange}
                                            className="h-4 w-4 text-green-600 border border-gray-300 rounded focus:ring-green-500"
                                        />
                                    )}
                                />
                                <div className="w-20 text-sm font-medium">{day.label}</div>
                                <Controller
                                    name={`workingHours.${index}.startTime`}
                                    control={control}
                                    render={({ field }) => (
                                        <input
                                            {...field}
                                            type="time"
                                            className="px-2 py-1 border rounded text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                        />
                                    )}
                                />
                                <span className="text-sm text-gray-500">To</span>
                                <Controller
                                    name={`workingHours.${index}.endTime`}
                                    control={control}
                                    render={({ field }) => (
                                        <input
                                            {...field}
                                            type="time"
                                            className="px-2 py-1 border rounded text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                        />
                                    )}
                                />
                            </div>
                        ))}
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

export default OptionalAdditions;