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

const verificationSchema = z.object({
    businessLicense: fileSchema(ACCEPTED_FILE_TYPES),
    pharmacyLicense: fileSchema(ACCEPTED_FILE_TYPES),
    premisesPhoto: fileSchema(ACCEPTED_FILE_TYPES),
    taxId: z.string().optional(),
});

type VerificationForm = z.infer<typeof verificationSchema>;

interface FileUploadSectionProps {
    name: 'businessLicense' | 'pharmacyLicense' | 'premisesPhoto';
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

function Verification() {
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
    } = useForm<VerificationForm>({
        resolver: zodResolver(verificationSchema),
        defaultValues: {
            taxId: '',
        },
    });

    const watchedFiles = watch();

    const onSubmit = (data: VerificationForm) => {
        console.log('Verification data:', data);
        // Handle form submission here
    };

    const removeFile = (fieldName: 'businessLicense' | 'pharmacyLicense' | 'premisesPhoto') => {
        setValue(fieldName, undefined as any);
    };

    if (!mounted) {
        return null;
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full main-content flex flex-col">
            <FileUploadSection
                name="businessLicense"
                title="Business License"
                description="Upload your business license or registration certificate"
                control={control}
                error={errors.businessLicense?.message}
                selectedFile={watchedFiles.businessLicense?.[0]}
                onFileRemove={() => removeFile('businessLicense')}
            />

            <FileUploadSection
                name="pharmacyLicense"
                title="Pharmacy License"
                description="Required for pharmacies and institutions with pharmacy services"
                control={control}
                error={errors.pharmacyLicense?.message}
                selectedFile={watchedFiles.pharmacyLicense?.[0]}
                onFileRemove={() => removeFile('pharmacyLicense')}
            />

            <FileUploadSection
                name="premisesPhoto"
                title="Premises Photo"
                description="Upload a clear photo of your institution's front entrance"
                control={control}
                error={errors.premisesPhoto?.message}
                selectedFile={watchedFiles.premisesPhoto?.[0]}
                onFileRemove={() => removeFile('premisesPhoto')}
            />

            <section className="py-4 border-b flex md:flex-row flex-col gap-2 md:items-center">
                <div className="sm:w-[300px]">
                    <div className="font-medium">Tax ID / TIN</div>
                    <div className="text-xs text-gray-500">Optional: For official registration and payment processing</div>
                </div>
                <div className="flex flex-col w-full sm:w-[400px]">
                    <Controller
                        name="taxId"
                        control={control}
                        render={({ field }) => (
                            <input
                                {...field}
                                type="text"
                                placeholder="Enter Number"
                                className="w-full h-10 rounded px-3 border text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            />
                        )}
                    />
                    {errors.taxId && (
                        <p className="text-red-500 text-xs mt-1">{errors.taxId.message}</p>
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
    );
}

export default Verification