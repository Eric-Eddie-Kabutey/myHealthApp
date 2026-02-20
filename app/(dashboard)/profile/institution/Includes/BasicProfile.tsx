'use client';

import { Button } from '@/components/ui/button';
import { FolderPlus, Upload, X } from 'lucide-react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

// Zod schema for form validation
const basicProfileSchema = z.object({
  institutionName: z.string().min(1, 'Institution name is required'),
  institutionType: z.string().min(1, 'Institution type is required'),
  registrationDocument: z
    .instanceof(File)
    .refine((file) => file.size <= 10 * 1024 * 1024, 'File size must be less than 10MB')
    .refine(
      (file) => ['image/png', 'image/jpeg', 'image/jpg', 'application/pdf'].includes(file.type),
      'Only PNG, JPEG, and PDF files are allowed'
    )
    .optional(),
  businessCategory: z.string().min(1, 'Business category is required'),
  yearEstablished: z.string().min(1, 'Year established is required'),
  firstName: z.string().min(1, 'First name is required'),
  positionTitle: z.string().min(1, 'Position/Title is required'),
});

type BasicProfileFormData = z.infer<typeof basicProfileSchema>;

// Institution type options
const institutionTypes = [
  { value: 'hospital', label: 'Hospital' },
  { value: 'clinic', label: 'Clinic' },
  { value: 'pharmacy', label: 'Pharmacy' },
  { value: 'laboratory', label: 'Laboratory' },
  { value: 'ambulance_service', label: 'Ambulance Service' },
  { value: 'nursing_home', label: 'Nursing Home' },
  { value: 'other', label: 'Other' },
];

// Business category options
const businessCategories = [
  { value: 'general_hospital', label: 'General Hospital' },
  { value: 'specialized_hospital', label: 'Specialized Hospital' },
  { value: 'primary_care', label: 'Primary Care' },
  { value: 'emergency_services', label: 'Emergency Services' },
  { value: 'diagnostic_center', label: 'Diagnostic Center' },
  { value: 'rehabilitation_center', label: 'Rehabilitation Center' },
  { value: 'mental_health', label: 'Mental Health' },
  { value: 'other', label: 'Other' },
];

function BasicProfile() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<BasicProfileFormData>({
    resolver: zodResolver(basicProfileSchema),
    defaultValues: {
      institutionName: '',
      institutionType: '',
      businessCategory: '',
      yearEstablished: '',
      firstName: '',
      positionTitle: '',
    },
  });

  const watchedRegistrationDoc = watch('registrationDocument');

  const onSubmit = (data: BasicProfileFormData) => {
    console.log('Form submitted:', data);
    // Handle form submission here
  };

  // Handle file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setValue('registrationDocument', file, { shouldValidate: true });
    }
  };

  // Remove selected file
  const removeFile = () => {
    setValue('registrationDocument', undefined, { shouldValidate: true });
    // Reset the file input
    const fileInput = document.querySelector('input[name="registrationDocument"]') as HTMLInputElement;
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
        {/* Institution Name */}
        <section className="py-4 border-b flex md:flex-row flex-col gap-2 md:items-center">
          <div className="sm:w-[300px]">
            <div className="font-medium">Institution Name</div>
            <div className="text-xs text-gray-500">
              Enter your official business name as it appears on your license
            </div>
          </div>
          <div className="flex flex-col w-full sm:w-[400px]">
            <input
              type="text"
              placeholder="Enter official business name"
              className="w-full h-10 rounded px-3 border text-sm"
              {...register('institutionName')}
            />
            {errors.institutionName && (
              <p className="text-red-500 text-sm mt-1">{errors.institutionName.message}</p>
            )}
          </div>
        </section>

        {/* Institution Type */}
        <section className="py-4 border-b flex md:flex-row flex-col gap-2 md:items-center">
          <div className="sm:w-[300px]">
            <div className="font-medium">Institution Type</div>
            <div className="text-xs text-gray-500">
              Select the primary category that best describes your facility
            </div>
          </div>
          <div className="flex flex-col w-full sm:w-[400px]">
            <select
              className="w-full h-10 rounded px-3 border text-sm bg-white"
              {...register('institutionType')}
            >
              <option value="">Hospital</option>
              {institutionTypes.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
            {errors.institutionType && (
              <p className="text-red-500 text-sm mt-1">{errors.institutionType.message}</p>
            )}
          </div>
        </section>

        {/* Registration Number */}
        <section className="py-4 border-b flex md:flex-row flex-col gap-2 md:items-center">
          <div className="sm:w-[300px]">
            <div className="font-medium">Registration Number</div>
            <div className="text-xs text-gray-500">
              Upload your business license or registration certificate
            </div>
          </div>
          <div className="flex flex-col gap-2 w-full sm:w-[400px]">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 py-4 text-center">
              <input
                type="file"
                name="registrationDocument"
                className="hidden"
                id="registration-upload"
                accept=".png,.jpg,.jpeg,.pdf"
                onChange={handleFileChange}
              />
              <label
                htmlFor="registration-upload"
                className="cursor-pointer flex flex-col items-center gap-2"
              >
                <FolderPlus className="size-5 text-gray-400" />
                <div className="text-sm text-gray-600">
                  Drag and drop file here or{' '}
                  <span className="text-primary underline">Choose file</span>
                </div>
                <div className="text-xs text-gray-500">PNG, JPEG and PDF (Max. 10mb)</div>
              </label>
            </div>
            {watchedRegistrationDoc && (
              <div className="flex items-center gap-2 p-3 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded">
                      {watchedRegistrationDoc.type.split('/')[1].toUpperCase()}
                    </span>
                    <span className="text-xs text-gray-500">
                      {formatFileSize(watchedRegistrationDoc.size)}
                    </span>
                  </div>
                  <span className="text-sm text-gray-700 block truncate">
                    {watchedRegistrationDoc.name}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={removeFile}
                  className="text-red-500 hover:text-red-700 p-1"
                  title="Remove file"
                >
                  <X className="size-4" />
                </button>
              </div>
            )}
            {errors.registrationDocument && (
              <p className="text-red-500 text-sm mt-1">{errors.registrationDocument.message}</p>
            )}
          </div>
        </section>

        {/* Business Category */}
        <section className="py-4 border-b flex md:flex-row flex-col gap-2 md:items-center">
          <div className="sm:w-[300px]">
            <div className="font-medium">Business Category</div>
            <div className="text-xs text-gray-500">Specify your area of specialization</div>
          </div>
          <div className="flex flex-col w-full sm:w-[400px]">
            <select
              className="w-full h-10 rounded px-3 border text-sm bg-white"
              {...register('businessCategory')}
            >
              <option value="">General Hospital</option>
              {businessCategories.map((category) => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>
            {errors.businessCategory && (
              <p className="text-red-500 text-sm mt-1">{errors.businessCategory.message}</p>
            )}
          </div>
        </section>

        {/* Year Established */}
        <section className="py-4 border-b flex md:flex-row flex-col gap-2 md:items-center">
          <div className="sm:w-[300px]">
            <div className="font-medium">Year Established</div>
            <div className="text-xs text-gray-500">When was your institution founded?</div>
          </div>
          <div className="flex flex-col w-full sm:w-[400px]">
            <input
              type="text"
              placeholder="Eg. 2010"
              className="w-full h-10 rounded px-3 border text-sm"
              {...register('yearEstablished')}
            />
            {errors.yearEstablished && (
              <p className="text-red-500 text-sm mt-1">{errors.yearEstablished.message}</p>
            )}
          </div>
        </section>

        {/* Business Owner/Administrator - First Name */}
        <section className="py-4 border-b flex md:flex-row flex-col gap-2 md:items-center">
          <div className="sm:w-[300px]">
            <div className="font-medium">Business Owner / Administrator</div>
            <div className="text-xs text-gray-500">
              Primary contact person for verification and administrative purposes
            </div>
          </div>
          <div className="flex flex-col w-full sm:w-[400px]">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                First Name
              </label>
              <input
                type="text"
                placeholder="Enter Name"
                className="w-full h-10 rounded px-3 border text-sm"
                {...register('firstName')}
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
              )}
            </div>
          </div>
        </section>

        {/* Position/Title */}
        <section className="py-4 border-b flex md:flex-row flex-col gap-2 md:items-center">
          <div className="sm:w-[300px]">
            <div className="font-medium">Position/Title</div>
            <div className="text-xs text-gray-500">Role within the organization</div>
          </div>
          <div className="flex flex-col w-full sm:w-[400px]">
            <input
              type="text"
              placeholder="Enter Position"
              className="w-full h-10 rounded px-3 border text-sm"
              {...register('positionTitle')}
            />
            {errors.positionTitle && (
              <p className="text-red-500 text-sm mt-1">{errors.positionTitle.message}</p>
            )}
          </div>
        </section>

        {/* Action Buttons */}
        <section className="py-5 flex justify-end gap-5">
          <Button type="button" variant="outline">
            Cancel
          </Button>
          <Button type="submit">Save</Button>
        </section>
      </form>
    </div>
  );
}

export default BasicProfile;