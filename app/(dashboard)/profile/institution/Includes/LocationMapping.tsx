'use client';

import { Button } from '@/components/ui/button';
import { MapPin, Check } from 'lucide-react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';


// Time validation schema
const timeSchema = z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, 'Invalid time format (HH:MM)');

// Operating hours schema for each day
const operatingHoursSchema = z.object({
    isOpen: z.boolean(),
    openTime: z.string().optional(),
    closeTime: z.string().optional(),
}).refine((data) => {
    // If day is open, both times are required
    if (data.isOpen) {
        if (!data.openTime || !data.closeTime) {
            return false;
        }
        // Validate time formats
        if (!timeSchema.safeParse(data.openTime).success || !timeSchema.safeParse(data.closeTime).success) {
            return false;
        }
        // Check that close time is after open time
        const [openHour, openMin] = data.openTime.split(':').map(Number);
        const [closeHour, closeMin] = data.closeTime.split(':').map(Number);
        const openMinutes = openHour * 60 + openMin;
        const closeMinutes = closeHour * 60 + closeMin;
        return closeMinutes > openMinutes;
    }
    return true;
}, {
    message: 'Please provide valid open and close times. Close time must be after open time.',
});

// Main location mapping schema
const locationMappingSchema = z.object({
    gpsLocation: z.string()
        .min(1, 'GPS location is required')
        .regex(/^-?\d+\.?\d*\s*,\s*-?\d+\.?\d*$/, 'Invalid GPS coordinates format (latitude, longitude)'),
    streetAddress: z.string().min(1, 'Street address is required').max(200, 'Street address too long'),
    city: z.string().min(1, 'City is required').max(100, 'City name too long'),
    regionState: z.string().min(1, 'Region/State is required').max(100, 'Region/State name too long'),
    operatingHours: z.object({
        monday: operatingHoursSchema,
        tuesday: operatingHoursSchema,
        wednesday: operatingHoursSchema,
        thursday: operatingHoursSchema,
        friday: operatingHoursSchema,
        saturday: operatingHoursSchema,
        sunday: operatingHoursSchema,
    }),
});

type LocationMappingFormData = z.infer<typeof locationMappingSchema>;

const daysOfWeek = [
    { key: 'monday', label: 'Monday' },
    { key: 'tuesday', label: 'Tuesday' },
    { key: 'wednesday', label: 'Wednesday' },
    { key: 'thursday', label: 'Thursday' },
    { key: 'friday', label: 'Friday' },
    { key: 'saturday', label: 'Saturday' },
    { key: 'sunday', label: 'Sunday' },
] as const;

function LocationMapping() {
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
        trigger,
        clearErrors,
    } = useForm<LocationMappingFormData>({
        resolver: zodResolver(locationMappingSchema),
        mode: 'onChange', // Enable real-time validation
        defaultValues: {
            gpsLocation: '',
            streetAddress: '',
            city: '',
            regionState: '',
            operatingHours: {
                monday: { isOpen: true, openTime: '09:00', closeTime: '17:00' },
                tuesday: { isOpen: true, openTime: '09:00', closeTime: '17:00' },
                wednesday: { isOpen: true, openTime: '09:00', closeTime: '17:00' },
                thursday: { isOpen: true, openTime: '09:00', closeTime: '17:00' },
                friday: { isOpen: true, openTime: '09:00', closeTime: '17:00' },
                saturday: { isOpen: false, openTime: '09:00', closeTime: '17:00' },
                sunday: { isOpen: false, openTime: '09:00', closeTime: '17:00' },
            },
        },
    });

    const watchedHours = watch('operatingHours');

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

    const onSubmit = async (data: LocationMappingFormData) => {
        try {
            console.log('Location mapping submitted:', data);
            // Handle form submission here
            // Example: await submitLocationData(data);
        } catch (error) {
            console.error('Submission error:', error);
        }
    };

    // Handle getting current location
    const useCurrentLocation = async () => {
        // Check if we're on the client side and geolocation is available
        if (!navigator?.geolocation) {
            alert('Geolocation is not supported by this browser.');
            return;
        }

        try {
            const position = await new Promise<GeolocationPosition>((resolve, reject) => {
                navigator.geolocation.getCurrentPosition(resolve, reject, {
                    enableHighAccuracy: true,
                    timeout: 10000,
                    maximumAge: 60000,
                });
            });

            const { latitude, longitude } = position.coords;
            const coordinates = `${latitude.toFixed(6)}, ${longitude.toFixed(6)}`;
            setValue('gpsLocation', coordinates, { shouldValidate: true });
            clearErrors('gpsLocation');
        } catch (error) {
            console.error('Error getting location:', error);
            alert('Unable to get current location. Please check your browser permissions and try again.');
        }
    };

    // Toggle day operating status
    const toggleDay = async (day: keyof LocationMappingFormData['operatingHours']) => {
        const currentStatus = watchedHours[day].isOpen;
        setValue(`operatingHours.${day}.isOpen`, !currentStatus);

        // Clear errors for this day when toggling
        clearErrors(`operatingHours.${day}`);

        // Trigger validation for operating hours after a short delay
        setTimeout(() => {
            trigger(`operatingHours.${day}`);
        }, 100);
    };

    // Handle time change with validation
    const handleTimeChange = (day: keyof LocationMappingFormData['operatingHours'], field: 'openTime' | 'closeTime', value: string) => {
        setValue(`operatingHours.${day}.${field}`, value);
        // Trigger validation for the specific day
        setTimeout(() => {
            trigger(`operatingHours.${day}`);
        }, 100);
    };

    return (
        <div className="w-full main-content flex flex-col">
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* GPS Location */}
                <section className="py-4 border-b flex md:flex-row flex-col gap-2">
                    <div className="sm:w-[300px]">
                        <div className="font-medium">GPS Location</div>
                        <div className="text-xs text-gray-500">
                            Pin your exact location on the map for accurate navigation
                        </div>
                    </div>
                    <div className="flex flex-col w-full sm:w-[400px]">
                        {/* Map Placeholder */}
                        <div className="w-full h-48 bg-gray-100 rounded-lg mb-3 flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-blue-100"></div>
                            <div className="relative z-10 flex flex-col items-center gap-2">
                                <MapPin className="size-8 text-red-500" />
                                <span className="text-sm text-gray-600">Map View</span>
                            </div>
                            {/* Simulated map grid */}
                            <div className="absolute inset-0 opacity-20">
                                <div className="grid grid-cols-8 grid-rows-6 h-full w-full">
                                    {Array.from({ length: 48 }).map((_, i) => (
                                        <div key={i} className="border border-gray-300"></div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-2">
                            <input
                                type="text"
                                placeholder="Latitude, Longitude"
                                className="flex-1 h-10 rounded px-3 border text-sm"
                                {...register('gpsLocation')}
                            />
                            <Button
                                type="button"
                                variant="outline"
                                onClick={useCurrentLocation}
                                className="whitespace-nowrap"
                            >
                                Use Current Location
                            </Button>
                        </div>
                        {errors.gpsLocation && (
                            <p className="text-red-500 text-sm mt-1">{errors.gpsLocation.message}</p>
                        )}
                    </div>
                </section>

                {/* Physical Address */}
                <section className="py-4 border-b flex md:flex-row flex-col gap-2">
                    <div className="sm:w-[300px]">
                        <div className="font-medium">Physical Address</div>
                        <div className="text-xs text-gray-500">
                            Complete street address for navigation and display
                        </div>
                    </div>
                    <div className="flex flex-col w-full sm:w-[400px] gap-4">
                        {/* Street Address */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Street Address
                            </label>
                            <input
                                type="text"
                                placeholder="Enter address"
                                className="w-full h-10 rounded px-3 border text-sm"
                                {...register('streetAddress')}
                            />
                            {errors.streetAddress && (
                                <p className="text-red-500 text-sm mt-1">{errors.streetAddress.message}</p>
                            )}
                        </div>

                        {/* City */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                City
                            </label>
                            <input
                                type="text"
                                placeholder="Enter city"
                                className="w-full h-10 rounded px-3 border text-sm"
                                {...register('city')}
                            />
                            {errors.city && (
                                <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>
                            )}
                        </div>

                        {/* Region/State */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Region/State
                            </label>
                            <input
                                type="text"
                                placeholder="Enter state"
                                className="w-full h-10 rounded px-3 border text-sm"
                                {...register('regionState')}
                            />
                            {errors.regionState && (
                                <p className="text-red-500 text-sm mt-1">{errors.regionState.message}</p>
                            )}
                        </div>
                    </div>
                </section>

                {/* Operating Hours */}
                <section className="py-4 border-b flex md:flex-row flex-col gap-2">
                    <div className="sm:w-[300px]">
                        <div className="font-medium">Operating Hours</div>
                        <div className="text-xs text-gray-500">
                            Set your business hours to help patients plan their visits
                        </div>
                    </div>
                    <div className="flex flex-col w-full sm:w-[500px]">
                        <div className="space-y-3">
                            {daysOfWeek.map(({ key, label }) => (
                                <div key={key}>
                                    <div className="flex items-center gap-4">
                                        {/* Day checkbox */}
                                        <button
                                            type="button"
                                            onClick={() => toggleDay(key)}
                                            className={`w-5 h-5 rounded border-2 flex items-center justify-center ${watchedHours[key].isOpen
                                                ? 'bg-green-500 border-green-500'
                                                : 'border-gray-300'
                                                }`}
                                        >
                                            {watchedHours[key].isOpen && (
                                                <Check className="w-3 h-3 text-white" />
                                            )}
                                        </button>

                                        {/* Day label */}
                                        <div className="w-20 text-sm font-medium">{label}</div>

                                        {/* Time inputs */}
                                        <div className="flex items-center gap-2 flex-1">
                                            <input
                                                type="time"
                                                className={`h-8 px-2 border rounded text-sm ${!watchedHours[key].isOpen
                                                    ? 'bg-gray-100 text-gray-400'
                                                    : 'bg-white'
                                                    } ${errors.operatingHours?.[key]?.openTime
                                                        ? 'border-red-500'
                                                        : 'border-gray-300'
                                                    }`}
                                                disabled={!watchedHours[key].isOpen}
                                                {...register(`operatingHours.${key}.openTime`, {
                                                    onChange: (e) => handleTimeChange(key, 'openTime', e.target.value)
                                                })}
                                            />
                                            <span className="text-sm text-gray-500">To</span>
                                            <input
                                                type="time"
                                                className={`h-8 px-2 border rounded text-sm ${!watchedHours[key].isOpen
                                                    ? 'bg-gray-100 text-gray-400'
                                                    : 'bg-white'
                                                    } ${errors.operatingHours?.[key]?.closeTime
                                                        ? 'border-red-500'
                                                        : 'border-gray-300'
                                                    }`}
                                                disabled={!watchedHours[key].isOpen}
                                                {...register(`operatingHours.${key}.closeTime`, {
                                                    onChange: (e) => handleTimeChange(key, 'closeTime', e.target.value)
                                                })}
                                            />
                                        </div>
                                    </div>
                                    {/* Error message for this day */}
                                    {errors.operatingHours?.[key] && (
                                        <div className="ml-9 mt-1">
                                            <p className="text-red-500 text-xs">
                                                {(errors.operatingHours[key] as any)?.message ||
                                                    errors.operatingHours[key]?.openTime?.message ||
                                                    errors.operatingHours[key]?.closeTime?.message}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
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

export default LocationMapping;