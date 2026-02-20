'use client';

import { Button } from '@/components/ui/button';
import { FolderPlus, X } from 'lucide-react';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
const ACCEPTED_IMAGE_TYPES = ['image/png', 'image/jpeg'];
const ACCEPTED_VIDEO_TYPES = ['video/mp4', 'video/webm', 'video/ogg'];

// Language options
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


const profileEnhancementSchema = z.object({
    introductionVideo: fileSchema(ACCEPTED_VIDEO_TYPES),
    languageProficiency: z.string().min(1, 'Language proficiency is required'),
    digitalSignature: fileSchema(ACCEPTED_IMAGE_TYPES),
    emergencyContact: z.object({
        firstName: z.string().min(1, 'First name is required'),
        lastName: z.string().min(1, 'Last name is required'),
        relationship: z.string().min(1, 'Relationship is required'),
        phoneNumber: z.string().min(1, 'Phone number is required'),
    }),
});


type ProfileEnhancementForm = z.infer<typeof profileEnhancementSchema>;

interface FileUploadSectionProps {
    name: 'introductionVideo' | 'digitalSignature';
    title: string;
    description: string;
    control: any;
    error?: string;
    selectedFile?: File;
    onFileRemove: () => void;
    acceptedTypes: string;
    fileTypeDescription: string;
}

const FileUploadSection: React.FC<FileUploadSectionProps> = ({
    name,
    title,
    description,
    control,
    error,
    selectedFile,
    onFileRemove,
    acceptedTypes,
    fileTypeDescription,
}) => (
    <section className="py-4 border-b flex md:flex-row flex-col gap-2 md:items-center">
        <div className="sm:w-[300px]">
            <div className="font-medium">{title}</div>
            <div className="text-xs text-gray-500">{description}</div>
        </div>
        <div className="flex flex-col w-full sm:w-[400px]">
            <Controller
                name={name}
                control={control}
                render={({ field: { onChange, onBlur } }) => (
                    <button
                        type="button"
                        className="w-full h-[80px] border-gray-300 border border-dashed rounded-lg p-4 flex flex-col items-center justify-center relative"
                    >
                        <input
                            type="file"
                            accept={acceptedTypes}
                            className="absolute size-full opacity-0 cursor-pointer"
                            onChange={(e) => onChange(e.target.files)}
                            onBlur={onBlur}
                        />
                        <FolderPlus className="size-5 min-h-5 mb-1" />
                        <small className="text-gray-500">
                            Drag and drop file here or <span className="underline text-primary">Choose file</span>
                        </small>
                        <small className="text-gray-500">{fileTypeDescription}</small>
                    </button>
                )}
            />

            {selectedFile && (
                <div className="mt-2 flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                    <span className="text-sm text-gray-700 flex-1 truncate">{selectedFile.name}</span>
                    <button
                        type="button"
                        onClick={onFileRemove}
                        className="p-1 hover:bg-gray-200 rounded"
                    >
                        <X className="size-4" />
                    </button>
                </div>
            )}

            {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
        </div>
    </section>
);

function ProfileEnhancement() {
    const {
        control,
        handleSubmit,
        watch,
        setValue,
        formState: { errors },
    } = useForm<ProfileEnhancementForm>({
        resolver: zodResolver(profileEnhancementSchema),
        defaultValues: {
            languageProficiency: '',
            emergencyContact: {
                firstName: '',
                lastName: '',
                relationship: '',
                phoneNumber: '',
            },
        },
    });

    const watchedFiles = watch();

    const onSubmit = (data: ProfileEnhancementForm) => {
        console.log('Form data:', data);
        // Handle form submission here
    };

    const removeFile = (fieldName: 'introductionVideo' | 'digitalSignature') => {
        setValue(fieldName, undefined as any);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full main-content flex flex-col">
            <FileUploadSection
                name="introductionVideo"
                title="Introduction Video"
                description="Upload a 60-second patient-facing video"
                control={control}
                error={errors.introductionVideo?.message}
                selectedFile={watchedFiles.introductionVideo?.[0]}
                onFileRemove={() => removeFile('introductionVideo')}
                acceptedTypes=".mp4,.webm,.ogg"
                fileTypeDescription="MP4, WebM, OGG (Max. 10mb)"
            />

            <section className="py-4 border-b flex md:flex-row flex-col gap-2 md:items-center">
                <div className="sm:w-[300px]">
                    <div className="font-medium">Language Proficiency</div>
                    <div className="text-xs text-gray-500">Self-assessment for patient matching</div>
                </div>
                <div className="flex flex-col w-full sm:w-[400px]">
                    <Controller
                        name="languageProficiency"
                        control={control}
                        render={({ field }) => (
                            <select
                                {...field}
                                className="w-full h-10 rounded px-3 border text-sm bg-white"
                            >
                                <option value="">Select a language</option>
                                {LANGUAGE_OPTIONS.map((language) => (
                                    <option key={language.value} value={language.value}>
                                        {language.label}
                                    </option>
                                ))}
                            </select>
                        )}
                    />
                    {errors.languageProficiency && (
                        <p className="text-red-500 text-xs mt-1">{errors.languageProficiency.message}</p>
                    )}
                </div>
            </section>

            <FileUploadSection
                name="digitalSignature"
                title="Digital Signature"
                description="For faster form signing"
                control={control}
                error={errors.digitalSignature?.message}
                selectedFile={watchedFiles.digitalSignature?.[0]}
                onFileRemove={() => removeFile('digitalSignature')}
                acceptedTypes=".png,.jpg,.jpeg"
                fileTypeDescription="PNG, JPEG (Max. 10mb)"
            />

            <section className="py-4 border-b flex md:flex-row flex-col gap-2 md:items-center">
                <div className="sm:w-[300px]">
                    <div className="font-medium">Emergency Contact</div>
                    <div className="text-xs text-gray-500">For safety purposes</div>
                </div>
                <div className="grid gap-4 w-full sm:w-[400px]">
                    <div>
                        <div className="text-xs text-gray-500 mb-1">First Name</div>
                        <Controller
                            name="emergencyContact.firstName"
                            control={control}
                            render={({ field }) => (
                                <input
                                    {...field}
                                    type="text"
                                    placeholder="Enter Name"
                                    className="w-full h-10 rounded px-3 border text-sm"
                                />
                            )}
                        />
                        {errors.emergencyContact?.firstName && (
                            <p className="text-red-500 text-xs mt-1">{errors.emergencyContact.firstName.message}</p>
                        )}
                    </div>
                    <div>
                        <div className="text-xs text-gray-500 mb-1">Last Name</div>
                        <Controller
                            name="emergencyContact.lastName"
                            control={control}
                            render={({ field }) => (
                                <input
                                    {...field}
                                    type="text"
                                    placeholder="Enter Name"
                                    className="w-full h-10 rounded px-3 border text-sm"
                                />
                            )}
                        />
                        {errors.emergencyContact?.lastName && (
                            <p className="text-red-500 text-xs mt-1">{errors.emergencyContact.lastName.message}</p>
                        )}
                    </div>
                    <div>
                        <div className="text-xs text-gray-500 mb-1">Relationship</div>
                        <Controller
                            name="emergencyContact.relationship"
                            control={control}
                            render={({ field }) => (
                                <input
                                    {...field}
                                    type="text"
                                    placeholder="Enter relationship"
                                    className="w-full h-10 rounded px-3 border text-sm"
                                />
                            )}
                        />
                        {errors.emergencyContact?.relationship && (
                            <p className="text-red-500 text-xs mt-1">{errors.emergencyContact.relationship.message}</p>
                        )}
                    </div>
                    <div>
                        <div className="text-xs text-gray-500 mb-1">Phone Number</div>
                        <Controller
                            name="emergencyContact.phoneNumber"
                            control={control}
                            render={({ field }) => (
                                <input
                                    {...field}
                                    type="tel"
                                    placeholder="Enter Phone Number"
                                    className="w-full h-10 rounded px-3 border text-sm"
                                />
                            )}
                        />
                        {errors.emergencyContact?.phoneNumber && (
                            <p className="text-red-500 text-xs mt-1">{errors.emergencyContact.phoneNumber.message}</p>
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

export default ProfileEnhancement;