'use client';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const workingHoursSchema = z.object({
    monday: z.object({
        enabled: z.boolean(),
        startTime: z.string().optional(),
        endTime: z.string().optional(),
    }).refine((data) => {
        if (data.enabled) {
            return data.startTime && data.endTime;
        }
        return true;
    }, 'Start and end times are required when day is enabled'),

    tuesday: z.object({
        enabled: z.boolean(),
        startTime: z.string().optional(),
        endTime: z.string().optional(),
    }).refine((data) => {
        if (data.enabled) {
            return data.startTime && data.endTime;
        }
        return true;
    }, 'Start and end times are required when day is enabled'),

    wednesday: z.object({
        enabled: z.boolean(),
        startTime: z.string().optional(),
        endTime: z.string().optional(),
    }).refine((data) => {
        if (data.enabled) {
            return data.startTime && data.endTime;
        }
        return true;
    }, 'Start and end times are required when day is enabled'),

    thursday: z.object({
        enabled: z.boolean(),
        startTime: z.string().optional(),
        endTime: z.string().optional(),
    }).refine((data) => {
        if (data.enabled) {
            return data.startTime && data.endTime;
        }
        return true;
    }, 'Start and end times are required when day is enabled'),

    friday: z.object({
        enabled: z.boolean(),
        startTime: z.string().optional(),
        endTime: z.string().optional(),
    }).refine((data) => {
        if (data.enabled) {
            return data.startTime && data.endTime;
        }
        return true;
    }, 'Start and end times are required when day is enabled'),

    saturday: z.object({
        enabled: z.boolean(),
        startTime: z.string().optional(),
        endTime: z.string().optional(),
    }).refine((data) => {
        if (data.enabled) {
            return data.startTime && data.endTime;
        }
        return true;
    }, 'Start and end times are required when day is enabled'),

    sunday: z.object({
        enabled: z.boolean(),
        startTime: z.string().optional(),
        endTime: z.string().optional(),
    }).refine((data) => {
        if (data.enabled) {
            return data.startTime && data.endTime;
        }
        return true;
    }, 'Start and end times are required when day is enabled'),
});

type WorkingHoursForm = z.infer<typeof workingHoursSchema>;

const DAYS = [
    { key: 'monday', label: 'Monday' },
    { key: 'tuesday', label: 'Tuesday' },
    { key: 'wednesday', label: 'Wednesday' },
    { key: 'thursday', label: 'Thursday' },
    { key: 'friday', label: 'Friday' },
    { key: 'saturday', label: 'Saturday' },
    { key: 'sunday', label: 'Sunday' },
] as const;

function WorkingHours() {
    const {
        control,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<WorkingHoursForm>({
        resolver: zodResolver(workingHoursSchema),
        defaultValues: {
            monday: { enabled: false, startTime: '', endTime: '' },
            tuesday: { enabled: false, startTime: '', endTime: '' },
            wednesday: { enabled: false, startTime: '', endTime: '' },
            thursday: { enabled: false, startTime: '', endTime: '' },
            friday: { enabled: false, startTime: '', endTime: '' },
            saturday: { enabled: false, startTime: '', endTime: '' },
            sunday: { enabled: false, startTime: '', endTime: '' },
        },
    });

    const watchedValues = watch();

    const onSubmit = (data: WorkingHoursForm) => {
        console.log('Working hours data:', data);
        // Handle form submission here
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full main-content flex flex-col">
            {DAYS.map(({ key, label }) => (
                <section key={key} className="py-4 border-b flex md:flex-row flex-col gap-2 md:items-center">
                    <div className="sm:w-[300px] flex items-center gap-3">
                        <Controller
                            name={`${key}.enabled`}
                            control={control}
                            render={({ field: { onChange, value } }) => (
                                <Checkbox
                                    className="size-5"
                                    checked={value}
                                    onCheckedChange={onChange}
                                />
                            )}
                        />
                        <div>{label}</div>
                    </div>
                    <div className="flex items-center gap-4 w-full sm:w-[400px]">
                        <Controller
                            name={`${key}.startTime`}
                            control={control}
                            render={({ field }) => (
                                <input
                                    {...field}
                                    type="time"
                                    disabled={!watchedValues[key]?.enabled}
                                    className="w-full h-10 rounded px-3 border text-sm disabled:bg-gray-100 disabled:cursor-not-allowed"
                                />
                            )}
                        />
                        <b>To</b>
                        <Controller
                            name={`${key}.endTime`}
                            control={control}
                            render={({ field }) => (
                                <input
                                    {...field}
                                    type="time"
                                    disabled={!watchedValues[key]?.enabled}
                                    className="w-full h-10 rounded px-3 border text-sm disabled:bg-gray-100 disabled:cursor-not-allowed"
                                />
                            )}
                        />
                    </div>
                    {errors[key] && (
                        <p className="text-red-500 text-xs mt-1 sm:w-[400px]">
                            {errors[key]?.message}
                        </p>
                    )}
                </section>
            ))}
            <section className="py-5 flex justify-end gap-5">
                <Button type="button" variant="outline">Cancel</Button>
                <Button type="submit">Save</Button>
            </section>
        </form>
    );
}

export default WorkingHours;