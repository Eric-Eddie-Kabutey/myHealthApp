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

const clinicalExperienceSchema = z.object({
    yearsOfExperience: z.string().min(1, 'Years of experience is required'),
    canRouteCases: z.string().min(1, 'Please select an option'),
    selfReportDocumentation: fileSchema(ACCEPTED_FILE_TYPES),
    detailedResume: fileSchema(ACCEPTED_FILE_TYPES),
    professionalReferences: fileSchema(ACCEPTED_FILE_TYPES),
    telemedicineTraining: fileSchema(ACCEPTED_FILE_TYPES),
    blsAclsCertification: fileSchema(ACCEPTED_FILE_TYPES),
});

type ClinicalExperienceForm = z.infer<typeof clinicalExperienceSchema>;

interface FileUploadSectionProps {
    name: 'selfReportDocumentation' | 'detailedResume' | 'professionalReferences' | 'telemedicineTraining' | 'blsAclsCertification';
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

function ClinicalExperience() {
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
    } = useForm<ClinicalExperienceForm>({
        resolver: zodResolver(clinicalExperienceSchema),
        defaultValues: {
            yearsOfExperience: '',
            canRouteCases: '',
        },
    });

    const watchedFiles = watch();

    const onSubmit = (data: ClinicalExperienceForm) => {
        console.log('Clinical experience data:', data);
        // Handle form submission here
    };

    const removeFile = (fieldName: 'selfReportDocumentation' | 'detailedResume' | 'professionalReferences' | 'telemedicineTraining' | 'blsAclsCertification') => {
        setValue(fieldName, undefined as any);
    };

    if (!mounted) {
        return null;
    }

    return (
        <div className="w-full flex flex-col items-center main-content">
            <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                {/* Years of Experience */}
                <section className="py-4 border-b flex md:flex-row flex-col gap-2 md:items-center">
                    <div className="sm:w-[300px]">
                        <div className="font-medium">How many years of post-licensure experience do you have?</div>
                    </div>
                    <div className="flex flex-col w-full sm:w-[400px]">
                        <Controller
                            name="yearsOfExperience"
                            control={control}
                            render={({ field }) => (
                                <input
                                    {...field}
                                    type="text"
                                    placeholder="Enter number of years"
                                    className="w-full h-10 rounded px-3 border text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                />
                            )}
                        />
                        {errors.yearsOfExperience && (
                            <p className="text-red-500 text-xs mt-1">{errors.yearsOfExperience.message}</p>
                        )}
                    </div>
                </section>

                {/* Ability to Route Cases */}
                <section className="py-4 border-b flex md:flex-row flex-col gap-2 md:items-center">
                    <div className="sm:w-[300px]">
                        <div className="font-medium">Are you able to route cases appropriately based on clinical criteria?</div>
                    </div>
                    <div className="flex flex-col w-full sm:w-[400px]">
                        <Controller
                            name="canRouteCases"
                            control={control}
                            render={({ field }) => (
                                <select
                                    {...field}
                                    className="w-full h-10 rounded px-3 border text-sm bg-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                >
                                    <option value="">Yes</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                    <option value="sometimes">Sometimes</option>
                                </select>
                            )}
                        />
                        {errors.canRouteCases && (
                            <p className="text-red-500 text-xs mt-1">{errors.canRouteCases.message}</p>
                        )}
                    </div>
                </section>

                {/* Self-Report Documentation */}
                <FileUploadSection
                    name="selfReportDocumentation"
                    title="Upload your self-report documentation (e.g., performance log, case studies), and provide a short summary below."
                    description=""
                    control={control}
                    error={errors.selfReportDocumentation?.message}
                    selectedFile={watchedFiles.selfReportDocumentation?.[0]}
                    onFileRemove={() => removeFile('selfReportDocumentation')}
                />

                {/* Detailed Resume/CV */}
                <FileUploadSection
                    name="detailedResume"
                    title="Detailed Resume/CV"
                    description="CV Context on roles, settings (clinic, hospital) Manual or AI review"
                    control={control}
                    error={errors.detailedResume?.message}
                    selectedFile={watchedFiles.detailedResume?.[0]}
                    onFileRemove={() => removeFile('detailedResume')}
                />

                {/* Professional References */}
                <FileUploadSection
                    name="professionalReferences"
                    title="Professional References (2)"
                    description="Please up two (2) Professional References"
                    control={control}
                    error={errors.professionalReferences?.message}
                    selectedFile={watchedFiles.professionalReferences?.[0]}
                    onFileRemove={() => removeFile('professionalReferences')}
                />

                {/* Telemedicine Training */}
                <FileUploadSection
                    name="telemedicineTraining"
                    title="Telemedicine Training"
                    description="CV Context on roles, settings (clinic, hospital) Manual or AI review"
                    control={control}
                    error={errors.telemedicineTraining?.message}
                    selectedFile={watchedFiles.telemedicineTraining?.[0]}
                    onFileRemove={() => removeFile('telemedicineTraining')}
                />

                {/* BLS/ACLS Certification */}
                <FileUploadSection
                    name="blsAclsCertification"
                    title="BLS/ACLS Certification"
                    description="Emergency readiness Upload and validate expiry"
                    control={control}
                    error={errors.blsAclsCertification?.message}
                    selectedFile={watchedFiles.blsAclsCertification?.[0]}
                    onFileRemove={() => removeFile('blsAclsCertification')}
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

export default ClinicalExperience