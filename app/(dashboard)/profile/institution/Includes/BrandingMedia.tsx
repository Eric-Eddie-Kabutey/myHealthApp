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

const brandingMediaSchema = z.object({
    institutionLogo: fileSchema(ACCEPTED_FILE_TYPES),
    institutionPhotos: fileSchema(ACCEPTED_FILE_TYPES),
    tagline: z.string().min(1, 'Tagline is required'),
    description: z.string().min(1, 'Description is required'),
});

type BrandingMediaForm = z.infer<typeof brandingMediaSchema>;

interface FileUploadSectionProps {
    name: 'institutionLogo' | 'institutionPhotos';
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

function BrandingMedia() {
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
    } = useForm<BrandingMediaForm>({
        resolver: zodResolver(brandingMediaSchema),
        defaultValues: {
            tagline: '',
            description: '',
        },
    });

    const watchedFiles = watch();

    const onSubmit = (data: BrandingMediaForm) => {
        console.log('Branding media data:', data);
        // Handle form submission here
    };

    const removeFile = (fieldName: 'institutionLogo' | 'institutionPhotos') => {
        setValue(fieldName, undefined as any);
    };

    if (!mounted) {
        return null;
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full main-content flex flex-col">
            <FileUploadSection
                name="institutionLogo"
                title="Institution Logo"
                description="Upload your logo for brand recognition"
                control={control}
                error={errors.institutionLogo?.message}
                selectedFile={watchedFiles.institutionLogo?.[0]}
                onFileRemove={() => removeFile('institutionLogo')}
            />

            <FileUploadSection
                name="institutionPhotos"
                title="Institution Photos"
                description="Add photos of your interior and exterior"
                control={control}
                error={errors.institutionPhotos?.message}
                selectedFile={watchedFiles.institutionPhotos?.[0]}
                onFileRemove={() => removeFile('institutionPhotos')}
            />

            <section className="py-4 border-b flex md:flex-row flex-col gap-2 md:items-start">
                <div className="sm:w-[300px]">
                    <div className="font-medium">Description & Tagline</div>
                    <div className="text-xs text-gray-500">Brief description to help patients understand your focus</div>
                </div>
                <div className="flex flex-col w-full sm:w-[400px] gap-4">
                    <div>
                        <div className="text-sm font-medium mb-2">Tagline</div>
                        <Controller
                            name="tagline"
                            control={control}
                            render={({ field }) => (
                                <input
                                    {...field}
                                    type="text"
                                    placeholder="Eg 24 hour community pharmacy"
                                    className="w-full h-10 rounded px-3 border text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                />
                            )}
                        />
                        {errors.tagline && (
                            <p className="text-red-500 text-xs mt-1">{errors.tagline.message}</p>
                        )}
                    </div>

                    <div>
                        <div className="text-sm font-medium mb-2">Description</div>
                        <Controller
                            name="description"
                            control={control}
                            render={({ field }) => (
                                <textarea
                                    {...field}
                                    placeholder="Describe your institution"
                                    rows={6}
                                    className="w-full rounded px-3 py-2 border text-sm resize-none focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                />
                            )}
                        />
                        {errors.description && (
                            <p className="text-red-500 text-xs mt-1">{errors.description.message}</p>
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
    );
}

export default BrandingMedia