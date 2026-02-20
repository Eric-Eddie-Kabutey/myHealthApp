'use client';

import { Button } from '@/components/ui/button';
import routes from '@/lib/routes';
import { Camera, FolderPlus } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const personalDetailsSchema = z.object({
    firstName: z.string().min(1, 'First name is required'),
    lastName: z.string().min(1, 'Last name is required'),
    email: z.string().email('Invalid email address'),
    phone: z.string().min(10, 'Phone number is too short'),
    dob: z.string().refine(
        (val) => /\d{2}\/\d{2}\/\d{4}/.test(val),
        { message: 'Date must be in DD/MM/YYYY format' }
    ),
    address: z.string().min(5, 'Address is too short'),
});

type PersonalDetailsForm = z.infer<typeof personalDetailsSchema>;


function PersonalDetails() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<PersonalDetailsForm>({
        resolver: zodResolver(personalDetailsSchema),
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            dob: '',
            address: '',
        },
    });

    const onSubmit = (data: PersonalDetailsForm) => {
        console.log('Form Data:', data);
        // Add save logic here (e.g. API call)
    };
    return <div className="w-[450px] main-content flex flex-col gap-6">
        <div className="flex flex-col">
            <h2>Personal Details</h2>
            <small className='text-gray-600'>Update and edit your personal details</small>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className='w-full flex flex-col gap-4'>
            <div className="w-full flex flex-col gap-1">
                <label>First Name</label>
                <input {...register('firstName')} className='w-full border rounded h-10 px-3 text-sm' />
                {errors.firstName && <p>{errors.firstName.message}</p>}
            </div>

            <div className="w-full flex flex-col gap-1">
                <label>Last Name</label>
                <input {...register('lastName')} className='w-full border rounded h-10 px-3 text-sm' />
                {errors.lastName && <p>{errors.lastName.message}</p>}
            </div>

            <div className="w-full flex flex-col gap-1">
                <label>Email Address</label>
                <input type="email" {...register('email')} className='w-full border rounded h-10 px-3 text-sm' />
                {errors.email && <p>{errors.email.message}</p>}
            </div>

            <div className="w-full flex flex-col gap-1">
                <label>Phone Number</label>
                <input {...register('phone')} className='w-full border rounded h-10 px-3 text-sm' />
                {errors.phone && <p>{errors.phone.message}</p>}
            </div>

            <div className="w-full flex flex-col gap-1">
                <label>Date of Birth</label>
                <input placeholder="DD/MM/YYYY" {...register('dob')} className='w-full border rounded h-10 px-3 text-sm' />
                {errors.dob && <p>{errors.dob.message}</p>}
            </div>

            <div className="w-full flex flex-col gap-1">
                <label>Home Address</label>
                <input {...register('address')} className='w-full border rounded h-10 px-3 text-sm' />
                {errors.address && <p>{errors.address.message}</p>}
            </div>

            <div className='w-full grid grid-cols-2 gap-5'>
                <Button variant={'outline'} onClick={() => reset()}>Discard</Button>
                <Button type="submit">Save Changes</Button>
            </div>
        </form>
    </div>
}

export default PersonalDetails