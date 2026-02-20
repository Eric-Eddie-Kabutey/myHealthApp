'use client';

import { Button } from '@/components/ui/button';
import { FolderPlus, X } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
const ACCEPTED_FILE_TYPES = ['image/png', 'image/jpeg', 'application/pdf'];

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

const virtualCareReadinessSchema = z.object({
    telemedicineTraining: fileSchema(ACCEPTED_FILE_TYPES),
    hasCamera: z.boolean().optional(),
    hasMicrophone: z.boolean().optional(),
    hasInternet: z.boolean().optional(),
    languageFluency: z.string().min(1, 'Language fluency is required'),
    privacyConfirmation: z.boolean().refine(val => val === true, 'You must confirm privacy compliance'),
});

type VirtualCareReadinessForm = z.infer<typeof virtualCareReadinessSchema>;

const LANGUAGE_OPTIONS = [
    { value: 'english', label: 'English' },
    { value: 'spanish', label: 'Spanish' },
    { value: 'french', label: 'French' },
    { value: 'german', label: 'German' },
    { value: 'italian', label: 'Italian' },
    { value: 'portuguese', label: 'Portuguese' },
    { value: 'mandarin', label: 'Mandarin' },
    { value: 'arabic', label: 'Arabic' },
    { value: 'hindi', label: 'Hindi' },
    { value: 'japanese', label: 'Japanese' },
    { value: 'korean', label: 'Korean' },
    { value: 'russian', label: 'Russian' },
    { value: 'dutch', label: 'Dutch' },
    { value: 'swedish', label: 'Swedish' },
    { value: 'norwegian', label: 'Norwegian' },
    { value: 'danish', label: 'Danish' },
    { value: 'other', label: 'Other' },
];

function VirtualCareReadiness() {
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
    } = useForm<VirtualCareReadinessForm>({
        resolver: zodResolver(virtualCareReadinessSchema),
        defaultValues: {
            languageFluency: '',
            hasCamera: false,
            hasMicrophone: false,
            hasInternet: false,
            privacyConfirmation: false,
        },
    });

    const watchedFiles = watch();

    const onSubmit = (data: VirtualCareReadinessForm) => {
        console.log('Virtual care readiness data:', data);
        // Handle form submission here
    };

    const removeFile = (fieldName: 'telemedicineTraining') => {
        setValue(fieldName, undefined as any);
    };

    if (!mounted) {
        return null;
    }

    return (
        <div className="w-full flex flex-col items-center main-content">
            <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-4xl">
                {/* Telemedicine Training Completion */}
                <section className="py-4 border-b flex md:flex-row flex-col gap-2 md:items-start">
                    <div className="sm:w-[300px]">
                        <div className="font-medium">Telemedicine Training Completion</div>
                        <div className="text-xs text-gray-500">Provide in-platform training & certification</div>
                    </div>
                    <div className="flex flex-col w-full sm:w-[400px]">
                        <Controller
                            name="telemedicineTraining"
                            control={control}
                            render={({ field: { onChange, onBlur } }) => (
                                <div className="relative">
                                    <button
                                        type="button"
                                        className="w-full border-gray-300 border border-dashed rounded-lg p-4 flex flex-col items-center justify-center relative hover:bg-gray-50"
                                    >
                                        <input
                                            type="file"
                                            accept=".png,.jpg,.jpeg,.pdf"
                                            className="absolute size-full opacity-0 cursor-pointer"
                                            onChange={(e) => onChange(e.target.files)}
                                            onBlur={onBlur}
                                        />
                                        <FolderPlus className="size-5 mb-2 text-gray-400" />
                                        <span className="text-sm text-gray-600 text-center">
                                            Drag and drop file here or <span className="underline text-primary">Choose file</span>
                                        </span>
                                        <span className="text-xs text-gray-500 mt-1">PNG, JPEG and PDF ( Max . 10mb)</span>
                                    </button>
                                </div>
                            )}
                        />

                        {watchedFiles.telemedicineTraining?.[0] && (
                            <div className="mt-3 flex items-center gap-2 p-3 bg-gray-50 rounded-lg border">
                                <div className="flex-1">
                                    <div className="text-sm font-medium text-gray-700 truncate">{watchedFiles.telemedicineTraining[0].name}</div>
                                    <div className="text-xs text-gray-500">
                                        {(watchedFiles.telemedicineTraining[0].size / 1024 / 1024).toFixed(2)} MB • {watchedFiles.telemedicineTraining[0].type}
                                    </div>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => removeFile('telemedicineTraining')}
                                    className="p-1 hover:bg-gray-200 rounded-full transition-colors"
                                >
                                    <X className="size-4 text-gray-500" />
                                </button>
                            </div>
                        )}

                        {errors.telemedicineTraining && (
                            <p className="text-red-500 text-xs mt-2">{errors.telemedicineTraining.message}</p>
                        )}
                    </div>
                </section>

                {/* Equipment Confirmation */}
                <section className="py-4 border-b flex md:flex-row flex-col gap-2 md:items-start">
                    <div className="sm:w-[300px]">
                        <div className="font-medium">Please confirm you have the following for telemedicine sessions</div>
                    </div>
                    <div className="flex flex-col w-full sm:w-[400px] gap-3">
                        <div className="flex items-center gap-3">
                            <Controller
                                name="hasCamera"
                                control={control}
                                render={({ field: { value, onChange } }) => (
                                    <input
                                        type="checkbox"
                                        checked={value || false}
                                        onChange={onChange}
                                        className="size-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                                    />
                                )}
                            />
                            <span className="text-sm">Camera</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Controller
                                name="hasMicrophone"
                                control={control}
                                render={({ field: { value, onChange } }) => (
                                    <input
                                        type="checkbox"
                                        checked={value || false}
                                        onChange={onChange}
                                        className="size-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                                    />
                                )}
                            />
                            <span className="text-sm">Microphone or Headset</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Controller
                                name="hasInternet"
                                control={control}
                                render={({ field: { value, onChange } }) => (
                                    <input
                                        type="checkbox"
                                        checked={value || false}
                                        onChange={onChange}
                                        className="size-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                                    />
                                )}
                            />
                            <span className="text-sm">Reliable Broadband Internet</span>
                        </div>
                    </div>
                </section>

                {/* Language Fluency Assessment */}
                <section className="py-4 border-b flex md:flex-row flex-col gap-2 md:items-center">
                    <div className="sm:w-[300px]">
                        <div className="font-medium">Language Fluency Assessment</div>
                        <div className="text-xs text-gray-500">Select the languages in which you are fluent and able to conduct patient consultations</div>
                    </div>
                    <div className="flex flex-col w-full sm:w-[400px]">
                        <Controller
                            name="languageFluency"
                            control={control}
                            render={({ field }) => (
                                <select
                                    {...field}
                                    className="w-full h-10 rounded px-3 border text-sm bg-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                >
                                    <option value="">English</option>
                                    {LANGUAGE_OPTIONS.map((language) => (
                                        <option key={language.value} value={language.value}>
                                            {language.label}
                                        </option>
                                    ))}
                                </select>
                            )}
                        />
                        {errors.languageFluency && (
                            <p className="text-red-500 text-xs mt-1">{errors.languageFluency.message}</p>
                        )}
                    </div>
                </section>

                {/* Privacy Confirmation */}
                <section className="py-4 border-b flex md:flex-row flex-col gap-2 md:items-center">
                    <div className="sm:w-[300px]">
                    </div>
                    <div className="flex items-start gap-3 w-full sm:w-[400px]">
                        <Controller
                            name="privacyConfirmation"
                            control={control}
                            render={({ field: { value, onChange } }) => (
                                <input
                                    type="checkbox"
                                    checked={value || false}
                                    onChange={onChange}
                                    className="size-4 rounded border-gray-300 text-green-600 focus:ring-green-500 mt-1"
                                />
                            )}
                        />
                        <span className="text-sm">I confirm that I will conduct telemedicine sessions in a quiet, private, and data-compliant setting</span>
                    </div>
                    {errors.privacyConfirmation && (
                        <div className="sm:w-[300px]"></div>
                    )}
                    {errors.privacyConfirmation && (
                        <div className="w-full sm:w-[400px]">
                            <p className="text-red-500 text-xs mt-1">{errors.privacyConfirmation.message}</p>
                        </div>
                    )}
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

export default VirtualCareReadiness