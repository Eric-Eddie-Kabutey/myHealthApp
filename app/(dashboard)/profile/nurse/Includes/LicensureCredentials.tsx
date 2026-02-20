'use client';

import { Button } from '@/components/ui/button';
import { FolderPlus, X, Calendar } from 'lucide-react';
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

const licensureCredentialsSchema = z.object({
    nursingLicenseNumber: z.string().min(1, 'Nursing license number is required'),
    licenseIssuingAuthority: fileSchema(ACCEPTED_FILE_TYPES),
    licenseExpirationDate: z.string().min(1, 'License expiration date is required'),
    proofOfGraduation: fileSchema(ACCEPTED_FILE_TYPES),
    specialtyCertifications: fileSchema(ACCEPTED_FILE_TYPES),
    goodStandingCertificate: fileSchema(ACCEPTED_FILE_TYPES),
});

type LicensureCredentialsForm = z.infer<typeof licensureCredentialsSchema>;

interface FileUploadSectionProps {
    name: 'licenseIssuingAuthority' | 'proofOfGraduation' | 'specialtyCertifications' | 'goodStandingCertificate';
    title: string;
    description: string;
    control: any;
    error?: string;
    selectedFile?: File;
    onFileRemove: () => void;
}

const FileUploadSection: React.FC<FileUploadSectionProps> = ({
    name,
    title,
    description,
    control,
    error,
    selectedFile,
    onFileRemove,
}) => (
    <section className="py-4 border-b flex md:flex-row flex-col gap-2 md:items-start">
        <div className="sm:w-[300px]">
            <div className="font-medium">{title}</div>
            <div className="text-xs text-gray-500">{description}</div>
        </div>
        <div className="flex flex-col w-full sm:w-[400px]">
            <Controller
                name={name}
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

            {selectedFile && (
                <div className="mt-3 flex items-center gap-2 p-3 bg-gray-50 rounded-lg border">
                    <div className="flex-1">
                        <div className="text-sm font-medium text-gray-700 truncate">{selectedFile.name}</div>
                        <div className="text-xs text-gray-500">
                            {(selectedFile.size / 1024 / 1024).toFixed(2)} MB • {selectedFile.type}
                        </div>
                    </div>
                    <button
                        type="button"
                        onClick={onFileRemove}
                        className="p-1 hover:bg-gray-200 rounded-full transition-colors"
                    >
                        <X className="size-4 text-gray-500" />
                    </button>
                </div>
            )}

            {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
        </div>
    </section>
);

function LicensureCredentials() {
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
    } = useForm<LicensureCredentialsForm>({
        resolver: zodResolver(licensureCredentialsSchema),
        defaultValues: {
            nursingLicenseNumber: '',
            licenseExpirationDate: '',
        },
    });

    const watchedFiles = watch();

    const onSubmit = (data: LicensureCredentialsForm) => {
        console.log('Licensure credentials data:', data);
        // Handle form submission here
    };

    const removeFile = (fieldName: 'licenseIssuingAuthority' | 'proofOfGraduation' | 'specialtyCertifications' | 'goodStandingCertificate') => {
        setValue(fieldName, undefined as any);
    };

    if (!mounted) {
        return null;
    }

    return (
        <div className="w-full flex flex-col items-center main-content">
            <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                {/* Nursing License Number */}
                <section className="py-4 border-b flex md:flex-row flex-col gap-2 md:items-center">
                    <div className="sm:w-[300px]">
                        <div className="font-medium">Nursing License Number</div>
                        <div className="text-xs text-gray-500">As it appears on your medical license</div>
                    </div>
                    <div className="flex flex-col w-full sm:w-[400px]">
                        <Controller
                            name="nursingLicenseNumber"
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
                        {errors.nursingLicenseNumber && (
                            <p className="text-red-500 text-xs mt-1">{errors.nursingLicenseNumber.message}</p>
                        )}
                    </div>
                </section>

                {/* License Issuing Authority */}
                <FileUploadSection
                    name="licenseIssuingAuthority"
                    title="License Issuing Authority"
                    description="For identity verification"
                    control={control}
                    error={errors.licenseIssuingAuthority?.message}
                    selectedFile={watchedFiles.licenseIssuingAuthority?.[0]}
                    onFileRemove={() => removeFile('licenseIssuingAuthority')}
                />

                {/* License Expiration Date */}
                <section className="py-4 border-b flex md:flex-row flex-col gap-2 md:items-center">
                    <div className="sm:w-[300px]">
                        <div className="font-medium">License Expiration Date</div>
                        <div className="text-xs text-gray-500">Please provide a date</div>
                    </div>
                    <div className="flex flex-col w-full sm:w-[400px]">
                        <div className="relative">
                            <Controller
                                name="licenseExpirationDate"
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
                        {errors.licenseExpirationDate && (
                            <p className="text-red-500 text-xs mt-1">{errors.licenseExpirationDate.message}</p>
                        )}
                    </div>
                </section>

                {/* Proof of Graduation */}
                <FileUploadSection
                    name="proofOfGraduation"
                    title="Proof of Graduation"
                    description="E.g., Diploma in nursing or BSc Nursing"
                    control={control}
                    error={errors.proofOfGraduation?.message}
                    selectedFile={watchedFiles.proofOfGraduation?.[0]}
                    onFileRemove={() => removeFile('proofOfGraduation')}
                />

                {/* Specialty Certifications */}
                <FileUploadSection
                    name="specialtyCertifications"
                    title="Specialty Certifications"
                    description="E.g., Midwife, ICU, Mental Health"
                    control={control}
                    error={errors.specialtyCertifications?.message}
                    selectedFile={watchedFiles.specialtyCertifications?.[0]}
                    onFileRemove={() => removeFile('specialtyCertifications')}
                />

                {/* Good-standing Certificate */}
                <FileUploadSection
                    name="goodStandingCertificate"
                    title="Good-standing Certificate"
                    description="Or letter of recommendation Ensure no suspension/disciplinary issues"
                    control={control}
                    error={errors.goodStandingCertificate?.message}
                    selectedFile={watchedFiles.goodStandingCertificate?.[0]}
                    onFileRemove={() => removeFile('goodStandingCertificate')}
                />

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

export default LicensureCredentials