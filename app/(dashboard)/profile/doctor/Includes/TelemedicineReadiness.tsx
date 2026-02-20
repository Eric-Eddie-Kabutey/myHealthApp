'use client';

import { Button } from '@/components/ui/button';
import { FolderPlus, X } from 'lucide-react';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
const ACCEPTED_FILE_TYPES = ['image/png', 'image/jpeg', 'application/pdf'];

const isFileList = (val: unknown): val is FileList => {
    return typeof FileList !== 'undefined' && val instanceof FileList;
};

const fileSchema = z
    .custom<FileList>(isFileList)
    .optional()
    .refine((files) => {
        if (!files || files.length === 0) return true;
        return files[0].size <= MAX_FILE_SIZE;
    }, 'File size must be less than 10MB')
    .refine((files) => {
        if (!files || files.length === 0) return true;
        return ACCEPTED_FILE_TYPES.includes(files[0].type);
    }, 'Only PNG, JPEG, and PDF files are allowed');


const telemedicineReadnessSchema = z.object({
    telemedicineTraining: fileSchema,
    practiceEnvironment: fileSchema,
    webcam: z.boolean(),
    headset: z.boolean(),
    secureBrowser: z.boolean(),
});


type TelemedicineReadnessForm = z.infer<typeof telemedicineReadnessSchema>;

interface FileUploadSectionProps {
    name: keyof TelemedicineReadnessForm;
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
                            accept=".png,.jpg,.jpeg,.pdf"
                            className="absolute size-full opacity-0 cursor-pointer"
                            onChange={(e) => onChange(e.target.files)}
                            onBlur={onBlur}
                        />
                        <FolderPlus className="size-5 min-h-5 mb-1" />
                        <small className="text-gray-500">
                            Drag and drop file here or <span className="underline text-primary">Choose file</span>
                        </small>
                        <small className="text-gray-500">PNG, JPEG and PDF (Max. 10mb)</small>
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

function TelemedicineReadiness() {
    const {
        control,
        handleSubmit,
        watch,
        setValue,
        formState: { errors },
    } = useForm<TelemedicineReadnessForm>({
        resolver: zodResolver(telemedicineReadnessSchema),
        defaultValues: {
            webcam: false,
            headset: false,
            secureBrowser: false,
        },
    });

    const watchedFiles = watch();

    const onSubmit = (data: TelemedicineReadnessForm) => {
        console.log('Form data:', data);
        // Handle form submission here
    };

    const removeFile = (fieldName: keyof TelemedicineReadnessForm) => {
        setValue(fieldName, undefined as any);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full main-content flex flex-col">
            <FileUploadSection
                name="telemedicineTraining"
                title="Telemedicine Training"
                description="Complete certification course"
                control={control}
                error={errors.telemedicineTraining?.message}
                selectedFile={watchedFiles.telemedicineTraining?.[0]}
                onFileRemove={() => removeFile('telemedicineTraining')}
            />

            <FileUploadSection
                name="practiceEnvironment"
                title="Practice Environment"
                description="Attest to privacy compliance"
                control={control}
                error={errors.practiceEnvironment?.message}
                selectedFile={watchedFiles.practiceEnvironment?.[0]}
                onFileRemove={() => removeFile('practiceEnvironment')}
            />

            <section className="py-4 border-b flex md:flex-row flex-col gap-2 md:items-center">
                <div className="sm:w-[300px]">
                    <div className="font-medium">Technical Setup</div>
                    <div className="text-xs text-gray-500">Hardware and software verification</div>
                </div>
                <div className="flex flex-col gap-2 w-full sm:w-[400px]">
                    <div className="flex items-center gap-2">
                        <Controller
                            name="webcam"
                            control={control}
                            render={({ field: { onChange, value } }) => (
                                <input
                                    type="checkbox"
                                    id="webcam"
                                    className="accent-primary"
                                    checked={value}
                                    onChange={onChange}
                                />
                            )}
                        />
                        <label htmlFor="webcam" className="text-sm">Webcam</label>
                    </div>
                    <div className="flex items-center gap-2">
                        <Controller
                            name="headset"
                            control={control}
                            render={({ field: { onChange, value } }) => (
                                <input
                                    type="checkbox"
                                    id="headset"
                                    className="accent-primary"
                                    checked={value}
                                    onChange={onChange}
                                />
                            )}
                        />
                        <label htmlFor="headset" className="text-sm">Headset</label>
                    </div>
                    <div className="flex items-center gap-2">
                        <Controller
                            name="secureBrowser"
                            control={control}
                            render={({ field: { onChange, value } }) => (
                                <input
                                    type="checkbox"
                                    id="secure-browser"
                                    className="accent-primary"
                                    checked={value}
                                    onChange={onChange}
                                />
                            )}
                        />
                        <label htmlFor="secure-browser" className="text-sm">Secure Browser</label>
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

export default TelemedicineReadiness;