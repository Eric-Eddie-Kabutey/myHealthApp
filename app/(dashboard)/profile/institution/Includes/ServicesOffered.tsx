'use client';

import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

// Services Offered schema
const servicesOfferedSchema = z.object({
    servicesOffered: z.array(z.string()).min(1, 'Please select at least one service'),
    medicalSpecialties: z.array(z.string()).min(1, 'Please select at least one medical specialty'),
    insuranceAccepted: z.string().min(1, 'Insurance information is required'),
    languagesSpoken: z.string().min(1, 'Languages spoken information is required'),
});

type ServicesOfferedFormData = z.infer<typeof servicesOfferedSchema>;

// Predefined services list
const availableServices = [
    'COVID Testing',
    'Emergency Care',
    'X-Ray',
    'Vaccination',
    'Blood Tests',
    'Surgery',
    'Ultrasound',
    'Consultation',
    'ECG',
];

// Predefined medical specialties list
const availableSpecialties = [
    'Cardiology',
    'Dermatology',
    'ENT',
    'Orthopedics',
    'ECG',
];

function ServicesOffered() {
    // Prevent server-side rendering issues
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        setValue,
        watch,
    } = useForm<ServicesOfferedFormData>({
        resolver: zodResolver(servicesOfferedSchema),
        mode: 'onChange',
        defaultValues: {
            servicesOffered: [],
            medicalSpecialties: [],
            insuranceAccepted: '',
            languagesSpoken: '',
        },
    });

    const watchedServices = watch('servicesOffered');
    const watchedSpecialties = watch('medicalSpecialties');

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

    const onSubmit = async (data: ServicesOfferedFormData) => {
        try {
            console.log('Services Offered submitted:', data);
            // Handle form submission here
        } catch (error) {
            console.error('Submission error:', error);
        }
    };

    // Handle service selection
    const toggleService = (service: string) => {
        const currentServices = watchedServices || [];
        const isSelected = currentServices.includes(service);

        if (isSelected) {
            setValue('servicesOffered', currentServices.filter(s => s !== service));
        } else {
            setValue('servicesOffered', [...currentServices, service]);
        }
    };

    // Handle specialty selection
    const toggleSpecialty = (specialty: string) => {
        const currentSpecialties = watchedSpecialties || [];
        const isSelected = currentSpecialties.includes(specialty);

        if (isSelected) {
            setValue('medicalSpecialties', currentSpecialties.filter(s => s !== specialty));
        } else {
            setValue('medicalSpecialties', [...currentSpecialties, specialty]);
        }
    };

    return (
        <div className="w-full main-content flex flex-col">
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Services Offered */}
                <section className="py-4 border-b flex md:flex-row flex-col gap-2">
                    <div className="sm:w-[300px]">
                        <div className="font-medium">Services Offered</div>
                        <div className="text-xs text-gray-500">
                            List the medical services and treatments you provide
                        </div>
                    </div>
                    <div className="flex flex-col w-full sm:w-[500px]">
                        <div className="grid grid-cols-2 gap-3">
                            {availableServices.map((service) => (
                                <div key={service} className="flex items-center gap-3">
                                    <button
                                        type="button"
                                        onClick={() => toggleService(service)}
                                        className={`w-5 h-5 rounded border-2 flex items-center justify-center ${watchedServices?.includes(service)
                                                ? 'bg-green-500 border-green-500'
                                                : 'border-gray-300'
                                            }`}
                                    >
                                        {watchedServices?.includes(service) && (
                                            <Check className="w-3 h-3 text-white" />
                                        )}
                                    </button>
                                    <label className="text-sm font-medium cursor-pointer select-none"
                                        onClick={() => toggleService(service)}>
                                        {service}
                                    </label>
                                </div>
                            ))}
                        </div>
                        {errors.servicesOffered && (
                            <p className="text-red-500 text-sm mt-2">{errors.servicesOffered.message}</p>
                        )}
                    </div>
                </section>

                {/* Medical Specialties */}
                <section className="py-4 border-b flex md:flex-row flex-col gap-2">
                    <div className="sm:w-[300px]">
                        <div className="font-medium">Medical Specialties</div>
                        <div className="text-xs text-gray-500">
                            Areas of medical expertise available
                        </div>
                    </div>
                    <div className="flex flex-col w-full sm:w-[500px]">
                        <div className="grid grid-cols-2 gap-3">
                            {availableSpecialties.map((specialty) => (
                                <div key={specialty} className="flex items-center gap-3">
                                    <button
                                        type="button"
                                        onClick={() => toggleSpecialty(specialty)}
                                        className={`w-5 h-5 rounded border-2 flex items-center justify-center ${watchedSpecialties?.includes(specialty)
                                                ? 'bg-green-500 border-green-500'
                                                : 'border-gray-300'
                                            }`}
                                    >
                                        {watchedSpecialties?.includes(specialty) && (
                                            <Check className="w-3 h-3 text-white" />
                                        )}
                                    </button>
                                    <label className="text-sm font-medium cursor-pointer select-none"
                                        onClick={() => toggleSpecialty(specialty)}>
                                        {specialty}
                                    </label>
                                </div>
                            ))}
                        </div>
                        {errors.medicalSpecialties && (
                            <p className="text-red-500 text-sm mt-2">{errors.medicalSpecialties.message}</p>
                        )}
                    </div>
                </section>

                {/* Insurance Accepted */}
                <section className="py-4 border-b flex md:flex-row flex-col gap-2 md:items-center">
                    <div className="sm:w-[300px]">
                        <div className="font-medium">Insurance Accepted</div>
                        <div className="text-xs text-gray-500">
                            Insurance providers you work with
                        </div>
                    </div>
                    <div className="flex flex-col w-full sm:w-[400px]">
                        <textarea
                            placeholder="Enter Insurance providers you work with"
                            className={`w-full h-20 rounded px-3 py-2 border text-sm resize-none ${errors.insuranceAccepted ? 'border-red-500' : 'border-gray-300'
                                }`}
                            {...register('insuranceAccepted')}
                        />
                        {errors.insuranceAccepted && (
                            <p className="text-red-500 text-sm mt-1">{errors.insuranceAccepted.message}</p>
                        )}
                    </div>
                </section>

                {/* Languages Spoken */}
                <section className="py-4 border-b flex md:flex-row flex-col gap-2 md:items-center">
                    <div className="sm:w-[300px]">
                        <div className="font-medium">Languages Spoken</div>
                        <div className="text-xs text-gray-500">
                            Languages your staff can communicate in
                        </div>
                    </div>
                    <div className="flex flex-col w-full sm:w-[400px]">
                        <input
                            type="text"
                            placeholder="Eg, english, arabic, spanish"
                            className={`w-full h-10 rounded px-3 border text-sm ${errors.languagesSpoken ? 'border-red-500' : 'border-gray-300'
                                }`}
                            {...register('languagesSpoken')}
                        />
                        {errors.languagesSpoken && (
                            <p className="text-red-500 text-sm mt-1">{errors.languagesSpoken.message}</p>
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

export default ServicesOffered;