'use client';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const locationSchema = z.object({
    title: z.string().min(1, 'Title is required'),
    state: z.string().min(1, 'State is required'),
    gps: z.string().min(1, 'GPS Location is required'),
});

const schema = z.object({
    locations: z.array(locationSchema).min(1),
    emergencyPermission: z.boolean(),
    hipaaConsent: z.boolean(),
    termsConsent: z.boolean(),
    telemedicineConsent: z.boolean(),
});

type FormType = z.infer<typeof schema>;

function EligibilityRegulatoryConsent() {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
        reset,
    } = useForm<FormType>({
        resolver: zodResolver(schema),
        defaultValues: {
            locations: [{ title: '', state: '', gps: '' }],
            emergencyPermission: false,
            hipaaConsent: false,
            termsConsent: false,
            telemedicineConsent: false,
        },
    });

    const { fields, append } = useFieldArray({
        control,
        name: 'locations',
    });

    const onSubmit = (data: FormType) => {
        // Add save logic here
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full main-content flex flex-col">
            {fields.map((field, idx) => (
                <section key={field.id} className="py-4 border-b flex md:flex-row flex-col gap-2 ">
                    <div className="sm:w-[300px]">Jurisdiction/State</div>
                    <div className="flex flex-col gap-4 w-full sm:w-[400px]">
                        <aside className="flex flex-col gap-1 w-full">
                            <p className="text-sm">Title</p>
                            <input
                                {...register(`locations.${idx}.title`)}
                                placeholder='Example: home, office, childs school etc'
                                className="w-full h-10 rounded px-3 border text-sm"
                            />
                            {errors.locations?.[idx]?.title && (
                                <p className="text-red-500 text-xs">{errors.locations[idx]?.title?.message}</p>
                            )}
                        </aside>
                        <aside className="flex flex-col gap-1 w-full">
                            <p className="text-sm">State</p>
                            <select {...register(`locations.${idx}.state`)} className="w-full h-10 rounded px-3 border text-sm">
                                <option value="">Select State</option>
                                <option value="Greater Accra">Greater Accra</option>
                                <option value="Ashanti">Ashanti</option>
                                <option value="Central">Central</option>
                                <option value="Western">Western</option>
                                {/* Add more states as needed */}
                            </select>
                            {errors.locations?.[idx]?.state && (
                                <p className="text-red-500 text-xs">{errors.locations[idx]?.state?.message}</p>
                            )}
                        </aside>
                        <aside className="flex flex-col gap-1 w-full">
                            <p className="text-sm">GPS Location</p>
                            <input
                                {...register(`locations.${idx}.gps`)}
                                placeholder='Example: GA - 123 - 456 -'
                                className="w-full h-10 rounded px-3 border text-sm"
                            />
                            {errors.locations?.[idx]?.gps && (
                                <p className="text-red-500 text-xs">{errors.locations[idx]?.gps?.message}</p>
                            )}
                        </aside>
                        <div className="flex justify-end">
                            <span
                                className="underline cursor-pointer"
                                onClick={() => append({ title: '', state: '', gps: '' })}
                            >
                                Add another location
                            </span>
                        </div>
                    </div>
                </section>
            ))}
            <section className="py-4 border-b flex items-center gap-2 ">
                <Checkbox {...register('emergencyPermission')} />
                <p className="text-sm">Emergency Location Permission</p>
            </section>
            <section className="py-4 border-b flex items-center gap-2 ">
                <Checkbox {...register('hipaaConsent')} />
                <p className="text-sm">HIPAA / GDPR Data-protection compliance Record consent event ID</p>
            </section>
            <section className="py-4 border-b flex items-center gap-2 ">
                <Checkbox {...register('termsConsent')} />
                <p className="text-sm underline">Terms of Service</p>
            </section>
            <section className="py-4 border-b flex items-center gap-2 ">
                <Checkbox {...register('telemedicineConsent')} />
                <p className="text-sm underline">Telemedicine Informed Consent</p>
            </section>
            <section className="py-5 flex justify-end gap-5">
                <Button variant={'outline'} type="button" onClick={() => reset()}>Cancel</Button>
                <Button type="submit">Save</Button>
            </section>
        </form>
    );
}

export default EligibilityRegulatoryConsent