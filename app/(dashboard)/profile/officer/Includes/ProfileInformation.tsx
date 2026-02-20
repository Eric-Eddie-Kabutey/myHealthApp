'use client';

import { Button } from '@/components/ui/button';
import { Camera, FolderPlus, CalendarDays, FileImage, X } from 'lucide-react';
import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
    firstName: z.string().min(1, 'First name is required'),
    lastName: z.string().min(1, 'Last name is required'),
    dob: z.string().min(1, 'Date of Birth is required'),
    phone: z.string().min(1, 'Phone number is required'),
    email: z.string().email('Invalid email address'),
    address: z.string().min(1, 'Residential address is required'),
});

type FormType = z.infer<typeof schema>;

function ProfileInformation() {
    const [idFile, setIdFile] = useState<File | null>(null);
    const [selfieFile, setSelfieFile] = useState<File | null>(null);
    const idInputRef = useRef<HTMLInputElement>(null);
    const selfieInputRef = useRef<HTMLInputElement>(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormType>({
        resolver: zodResolver(schema),
        defaultValues: {
            firstName: 'Adeyemi',
            lastName: 'Meshack',
            dob: '06/05/99',
            phone: '+233 123 456 789',
            email: 'adeyemimeshack@gmail.com',
            address: '123 Main Street, Apt 4B Portland, OR 97201',
        },
    });

    const onSubmit = (data: FormType) => {
        // Add save logic here
        console.log({ ...data, idFile, selfieFile });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full main-content flex flex-col">
            <section className="py-4 border-b flex md:flex-row flex-col gap-2 md:items-center">
                <div className="sm:w-[300px]">Full Legal Name</div>
                <div className="grid grid-cols-2 gap-4 w-full sm:w-[400px]">
                    <div>
                        <input
                            {...register('firstName')}
                            placeholder='First Name'
                            className="w-full h-10 rounded px-3 border text-sm"
                        />
                        {errors.firstName && <p className="text-red-500 text-xs">{errors.firstName.message}</p>}
                    </div>
                    <div>
                        <input
                            {...register('lastName')}
                            placeholder='Last Name'
                            className="w-full h-10 rounded px-3 border text-sm"
                        />
                        {errors.lastName && <p className="text-red-500 text-xs">{errors.lastName.message}</p>}
                    </div>
                </div>
            </section>
            <section className="py-4 border-b flex md:flex-row flex-col gap-2 md:items-center">
                <div className="sm:w-[300px]">Date of Birth</div>
                <div className="flex w-full sm:w-[400px] relative">
                    <input
                        {...register('dob')}
                        placeholder="DD/MM/YY"
                        className="w-full h-10 rounded px-3 border text-sm pr-10"
                    />
                    <CalendarDays className="size-5 absolute right-3 top-2.5 text-gray-400" />
                    {errors.dob && <p className="text-red-500 text-xs absolute left-0 -bottom-5">{errors.dob.message}</p>}
                </div>
            </section>
            <section className="py-4 border-b flex md:flex-row flex-col gap-2 md:items-center">
                <div className="sm:w-[300px]">Government-issued ID upload</div>
                <div className="flex flex-col w-full sm:w-[400px] gap-2 items-start">
                    <button
                        className="w-full h-[80px] border-gray-300 border border-dashed rounded-lg p-4 flex flex-col items-center justify-center relative"
                        type="button"
                        onClick={() => idInputRef.current?.click()}
                    >
                        <input
                            type="file"
                            ref={idInputRef}
                            className="absolute size-full opacity-0"
                            onChange={e => setIdFile(e.target.files?.[0] ?? null)}
                            accept=".png,.jpg,.jpeg,.pdf"
                        />
                        <FolderPlus className='size-5 min-h-5 mb-1' />
                        <small className="text-gray-500">Drag and drop file here or <span className="underline text-primary">Choose file</span></small>
                        <small className="text-gray-500">PNG, JPEG and PDF ( Max . 10mb)</small>
                    </button>
                    <section className="w-full flex gap-3 overflow-x-auto">
                        {idFile && (
                            <div className="w-[150px] flex items-center gap-2 border rounded px-2 py-1">
                                <FileImage className="size-6 text-gray-500" />
                                <span className="text-xs truncate">{idFile.name}</span>
                                <button type="button" onClick={() => setIdFile(null)}>
                                    <X className="size-4 text-red-500" />
                                </button>
                            </div>
                        )}
                    </section>
                </div>
            </section>
            <section className="py-4 border-b flex md:flex-row flex-col gap-2 md:items-center">
                <div className="sm:w-[300px]">Selfie</div>
                <div className="flex w-full sm:w-[400px] gap-2 items-center">
                    <button
                        className="w-full h-10 border-gray-300 border border-dashed rounded-lg p-4 flex flex-col items-center justify-center relative"
                        type="button"
                        onClick={() => selfieInputRef.current?.click()}
                    >
                        <input
                            type="file"
                            ref={selfieInputRef}
                            className="absolute size-full opacity-0"
                            onChange={e => setSelfieFile(e.target.files?.[0] ?? null)}
                            accept=".png,.jpg,.jpeg"
                        />
                        <span className="text-xs flex items-center gap-2">
                            <Camera className='size-5' />
                            Take a Picture
                        </span>
                    </button>
                    {selfieFile && (
                        <div className="flex items-center gap-2 border rounded px-2 py-1">
                            <FileImage className="size-4 text-gray-500" />
                            <span className="text-xs">{selfieFile.name}</span>
                            <button type="button" onClick={() => setSelfieFile(null)}>
                                <X className="size-4 text-red-500" />
                            </button>
                        </div>
                    )}
                </div>
            </section>
            <section className="py-4 border-b flex md:flex-row flex-col gap-2 md:items-center">
                <div className="sm:w-[300px]">Phone Number</div>
                <div className="flex w-full sm:w-[400px]">
                    <input
                        {...register('phone')}
                        type="tel"
                        placeholder='+233 542 893 124'
                        className="w-full h-10 rounded px-3 border text-sm"
                    />
                    {errors.phone && <p className="text-red-500 text-xs">{errors.phone.message}</p>}
                </div>
            </section>
            <section className="py-4 border-b flex md:flex-row flex-col gap-2 md:items-center">
                <div className="sm:w-[300px]">Email Address</div>
                <div className="flex w-full sm:w-[400px]">
                    <input
                        {...register('email')}
                        type="email"
                        placeholder='odamejoshua@gmail.com'
                        className="w-full h-10 rounded px-3 border text-sm"
                    />
                    {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
                </div>
            </section>
            <section className="py-4 border-b flex md:flex-row flex-col gap-2 md:items-center">
                <div className="sm:w-[300px]">Residential Address</div>
                <div className="flex w-full sm:w-[400px]">
                    <input
                        {...register('address')}
                        type="text"
                        placeholder='Enter Residential Address'
                        className="w-full h-10 rounded px-3 border text-sm"
                    />
                    {errors.address && <p className="text-red-500 text-xs">{errors.address.message}</p>}
                </div>
            </section>
            <section className="py-5 flex justify-end gap-5">
                <Button variant={'outline'} type="button" onClick={() => { reset(); setIdFile(null); setSelfieFile(null); }}>Cancel</Button>
                <Button type="submit">Save</Button>
            </section>
        </form>
    );
}

export default ProfileInformation