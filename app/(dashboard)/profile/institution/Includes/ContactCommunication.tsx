'use client';

import { Button } from '@/components/ui/button';
import { Plus, X } from 'lucide-react';
import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';


// Contact & Communication schema
const contactCommunicationSchema = z.object({
    primaryPhoneNumber: z.string()
        .min(1, 'Primary phone number is required')
        .regex(/^[\+]?[1-9][\d]{0,15}$/, 'Invalid phone number format'),
    whatsappNumber: z.string()
        .regex(/^[\+]?[1-9][\d]{0,15}$/, 'Invalid WhatsApp number format')
        .optional()
        .or(z.literal('')),
    additionalPhoneNumbers: z.array(
        z.object({
            number: z.string()
                .min(1, 'Phone number is required')
                .regex(/^[\+]?[1-9][\d]{0,15}$/, 'Invalid phone number format'),
        })
    ).optional(),
    emailAddress: z.string()
        .min(1, 'Email address is required')
        .email('Invalid email address format'),
    websiteUrl: z.string()
        .url('Invalid website URL format')
        .optional()
        .or(z.literal('')),
    emergencyContact: z.string()
        .min(1, 'Emergency contact is required')
        .regex(/^[\+]?[1-9][\d]{0,15}$/, 'Invalid emergency contact format'),
});

type ContactCommunicationFormData = z.infer<typeof contactCommunicationSchema>;

function ContactCommunication() {
    // Prevent server-side rendering issues
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        control,
        watch,
    } = useForm<ContactCommunicationFormData>({
        resolver: zodResolver(contactCommunicationSchema),
        mode: 'onChange',
        defaultValues: {
            primaryPhoneNumber: '',
            whatsappNumber: '',
            additionalPhoneNumbers: [],
            emailAddress: '',
            websiteUrl: '',
            emergencyContact: '',
        },
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'additionalPhoneNumbers',
    });

    const watchedAdditionalNumbers = watch('additionalPhoneNumbers');

    // Don't render until mounted on client
    if (!mounted) {
        return (
            <div className="w-full main-content flex flex-col">
                <div className="flex items-center justify-center py-8">
                    <div className="text-gray-500">Loading...</div>
                </div>
            </div>
        );
    }

    const onSubmit = async (data: ContactCommunicationFormData) => {
        try {
            console.log('Contact & Communication submitted:', data);
            // Handle form submission here
        } catch (error) {
            console.error('Submission error:', error);
        }
    };

    const addPhoneNumber = () => {
        append({ number: '' });
    };

    const removePhoneNumber = (index: number) => {
        remove(index);
    };

    return (
        <div className="w-full main-content flex flex-col">
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Phone Numbers */}
                <section className="py-4 border-b flex md:flex-row flex-col gap-2">
                    <div className="sm:w-[300px]">
                        <div className="font-medium">Phone Numbers</div>
                        <div className="text-xs text-gray-500">
                            Primary contact numbers for patient inquiries
                        </div>
                    </div>
                    <div className="flex flex-col w-full sm:w-[400px] gap-4">
                        {/* Primary Phone Number */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Primary Phone Number
                            </label>
                            <input
                                type="tel"
                                placeholder="Enter phone number"
                                className={`w-full h-10 rounded px-3 border text-sm ${errors.primaryPhoneNumber ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                {...register('primaryPhoneNumber')}
                            />
                            {errors.primaryPhoneNumber && (
                                <p className="text-red-500 text-xs mt-1">{errors.primaryPhoneNumber.message}</p>
                            )}
                        </div>

                        {/* WhatsApp Number */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                WhatsApp Number (Optional)
                            </label>
                            <input
                                type="tel"
                                placeholder="Enter phone number"
                                className={`w-full h-10 rounded px-3 border text-sm ${errors.whatsappNumber ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                {...register('whatsappNumber')}
                            />
                            {errors.whatsappNumber && (
                                <p className="text-red-500 text-xs mt-1">{errors.whatsappNumber.message}</p>
                            )}
                        </div>

                        {/* Additional Phone Numbers */}
                        {fields.map((field, index) => (
                            <div key={field.id} className="flex gap-2 items-start">
                                <div className="flex-1">
                                    <input
                                        type="tel"
                                        placeholder="Enter phone number"
                                        className={`w-full h-10 rounded px-3 border text-sm ${errors.additionalPhoneNumbers?.[index]?.number
                                                ? 'border-red-500'
                                                : 'border-gray-300'
                                            }`}
                                        {...register(`additionalPhoneNumbers.${index}.number`)}
                                    />
                                    {errors.additionalPhoneNumbers?.[index]?.number && (
                                        <p className="text-red-500 text-xs mt-1">
                                            {errors.additionalPhoneNumbers[index]?.number?.message}
                                        </p>
                                    )}
                                </div>
                                <button
                                    type="button"
                                    onClick={() => removePhoneNumber(index)}
                                    className="h-10 w-10 flex items-center justify-center text-red-500 hover:text-red-700"
                                    title="Remove phone number"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            </div>
                        ))}

                        <button
                            type="button"
                            onClick={addPhoneNumber}
                            className="text-left text-blue-600 hover:text-blue-800 text-sm underline"
                        >
                            Add another number
                        </button>
                    </div>
                </section>

                {/* Email Address */}
                <section className="py-4 border-b flex md:flex-row flex-col gap-2 md:items-center">
                    <div className="sm:w-[300px]">
                        <div className="font-medium">Email Address</div>
                        <div className="text-xs text-gray-500">
                            Professional email for business communications
                        </div>
                    </div>
                    <div className="flex flex-col w-full sm:w-[400px]">
                        <input
                            type="email"
                            placeholder="Enter email address"
                            className={`w-full h-10 rounded px-3 border text-sm ${errors.emailAddress ? 'border-red-500' : 'border-gray-300'
                                }`}
                            {...register('emailAddress')}
                        />
                        {errors.emailAddress && (
                            <p className="text-red-500 text-sm mt-1">{errors.emailAddress.message}</p>
                        )}
                    </div>
                </section>

                {/* Website / Booking URL */}
                <section className="py-4 border-b flex md:flex-row flex-col gap-2 md:items-center">
                    <div className="sm:w-[300px]">
                        <div className="font-medium">Website / Booking URL</div>
                        <div className="text-xs text-gray-500">
                            Link to your website or online booking system
                        </div>
                    </div>
                    <div className="flex flex-col w-full sm:w-[400px]">
                        <input
                            type="url"
                            placeholder="eg www.ricia.com"
                            className={`w-full h-10 rounded px-3 border text-sm ${errors.websiteUrl ? 'border-red-500' : 'border-gray-300'
                                }`}
                            {...register('websiteUrl')}
                        />
                        {errors.websiteUrl && (
                            <p className="text-red-500 text-sm mt-1">{errors.websiteUrl.message}</p>
                        )}
                    </div>
                </section>

                {/* Emergency Contact */}
                <section className="py-4 border-b flex md:flex-row flex-col gap-2 md:items-center">
                    <div className="sm:w-[300px]">
                        <div className="font-medium">Emergency Contact</div>
                        <div className="text-xs text-gray-500">
                            24/7 emergency line (if available)
                        </div>
                    </div>
                    <div className="flex flex-col w-full sm:w-[400px]">
                        <input
                            type="tel"
                            placeholder="Enter phone number"
                            className={`w-full h-10 rounded px-3 border text-sm ${errors.emergencyContact ? 'border-red-500' : 'border-gray-300'
                                }`}
                            {...register('emergencyContact')}
                        />
                        {errors.emergencyContact && (
                            <p className="text-red-500 text-sm mt-1">{errors.emergencyContact.message}</p>
                        )}
                    </div>
                </section>

                {/* Action Buttons */}
                <section className="py-5 flex justify-end gap-5">
                    <Button type="button" variant="outline" disabled={isSubmitting}>
                        Cancel
                    </Button>
                    <Button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? 'Saving...' : 'Save'}
                    </Button>
                </section>
            </form>
        </div>
    );
}

export default ContactCommunication;