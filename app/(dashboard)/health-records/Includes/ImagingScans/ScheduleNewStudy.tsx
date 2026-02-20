'use client'

import React, { useState } from 'react'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form';
import { ArrowRight, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';

const steps = ['Study Details', 'Select Facility', 'Choose Time', 'Confirmation'];

const formSchema = z.object({
    patientName: z.string().min(1, "Patient Name is required").optional(),
    typeOfStudy: z.string().min(1, "Type of Study is required").optional(),
    dateOfBirth: z.string().min(1, "Date of Birth is required").optional(),
    specificStudy: z.string().min(1, "Specific Study is required").optional(),
    patientId: z.string().optional(),
    orderingProvider: z.string().min(1, "Ordering Provider is required").optional(),
    reasonForStudy: z.string().min(1, "Reason for Study is required").optional(),
    insuranceProvider: z.string().optional(),
    policyNumber: z.string().optional(),
    groupNumber: z.string().optional(),
});

function ScheduleNewStudy() {
    const [activeStep, setActiveStep] = useState(1);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            patientName: '',
            typeOfStudy: '',
            dateOfBirth: '',
            specificStudy: '',
            patientId: '',
            orderingProvider: '',
            reasonForStudy: '',
            insuranceProvider: '',
            policyNumber: '',
            groupNumber: '',
        }
    });

    const handleSubmit = ()=>{
        if(activeStep === 4){

        }else{
            setActiveStep(prev=>prev+1);
        }
        
    }


    return <div className="w-full flex flex-col gap-4">
        <section className="w-full p-3 flex items-center justify-around bg-gray-100 rounded-lg">
            {steps.map((step, idx) => (
                <div key={step} onClick={()=>setActiveStep(idx+1)} className="flex flex-col items-center gap-1">
                    <div className={`size-7 rounded-full ${activeStep === idx+1 ? 'bg-primary text-white':'bg-gray-300 text-black'} text-sm flex items-center justify-center`}>{idx + 1}</div>
                    <p className='text-sm'>{step}</p>
                </div>
            ))}
        </section>

        <section className="w-full flex flex-col gap-2">
            <span className="pb-2 border-b font-semibold pl-[2rem]">Study Information</span>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(() => {})} className="w-full flex flex-col gap-5 mt-3">
                    <section className="w-full flex flex-col gap-4 ">
                        <div className="w-4xl flex gap-[10rem] pl-[2rem]">
                            <section className="w-full flex flex-col gap-4">
                                <FormField control={form.control} name="patientName" render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Patient Name</FormLabel>
                                        <FormControl>
                                            <input
                                                placeholder="Patient Name"
                                                {...field}
                                                className="w-full border px-3 h-10 rounded focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-xs"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )} />

                                <FormField control={form.control} name="dateOfBirth" render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Date of Birth</FormLabel>
                                        <FormControl>
                                            <input
                                                type="date"
                                                placeholder="Date of Birth"
                                                {...field}
                                                className="w-full border px-3 h-10 rounded focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-xs"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )} />

                                <FormField control={form.control} name="patientId" render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Patient ID</FormLabel>
                                        <FormControl>
                                            <input
                                                placeholder="Patient ID"
                                                {...field}
                                                className="w-full border px-3 h-10 rounded focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-xs"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )} />
                            </section>
                            <section className="w-full flex flex-col gap-4">
                                <FormField control={form.control} name="typeOfStudy" render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Type of Study</FormLabel>
                                        <FormControl>
                                            <input
                                                placeholder="Type of Study"
                                                {...field}
                                                className="w-full border px-3 h-10 rounded focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-xs"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )} />

                                <FormField control={form.control} name="specificStudy" render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Specific Study</FormLabel>
                                        <FormControl>
                                            <input
                                                placeholder="Specific Study"
                                                {...field}
                                                className="w-full border px-3 h-10 rounded focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-xs"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )} />

                                <FormField control={form.control} name="orderingProvider" render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Ordering Provider</FormLabel>
                                        <FormControl>
                                            <input
                                                placeholder="Ordering Provider"
                                                {...field}
                                                className="w-full border px-3 h-10 rounded focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-xs"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )} />
                            </section>
                        </div>
                        <FormField control={form.control} name="reasonForStudy" render={({ field }) => (
                            <FormItem className='w-4xl pl-[2rem]'>
                                <FormLabel>Reason for Study</FormLabel>
                                <FormControl>
                                    <input
                                        placeholder="Reason for Study"
                                        {...field}
                                        className="w-full border px-3 h-10 rounded focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-xs"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />

                        <span className="pb-2 border-b mt-[2rem] font-semibold pl-[2rem]"> Insurance Information</span>
                        <div className="w-4xl flex gap-[10rem] pl-[2rem]">
                            <section className="w-full flex flex-col gap-4">
                                <FormField control={form.control} name="insuranceProvider" render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Insurance Provider</FormLabel>
                                        <FormControl>
                                            <input
                                                placeholder="Insurance Information"
                                                {...field}
                                                className="w-full border px-3 h-10 rounded focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-xs"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )} />

                                <FormField control={form.control} name="groupNumber" render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Group Number</FormLabel>
                                        <FormControl>
                                            <input
                                                placeholder="Group number"
                                                {...field}
                                                className="w-full border px-3 h-10 rounded focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-xs"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )} />
                            </section>
                            <section className="w-full flex flex-col gap-4">
                                <FormField control={form.control} name="policyNumber" render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Policy Number</FormLabel>
                                        <FormControl>
                                            <input
                                                type="date"
                                                placeholder="Policy number"
                                                {...field}
                                                className="w-full border px-3 h-10 rounded focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-xs"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )} />
                            </section>
                        </div>
                        
                        <section className="w-full flex pl-[2rem]">
                            <div className="w-full border border-primary bg-primary/10 text-emerald-700 p-4 flex gap-2 rounded-lg">
                                <Info/>
                                <p>Most imaging studies are covered by insurance, but some may require prior authorization. Our scheduling team will verify your coverage before your appointment.</p>
                            </div>
                        </section>

                        <div className="w-full flex justify-end my-2">
                            <Button className='items-center gap-2 rounded px-5'>
                                Next: Select Facility
                                <ArrowRight className='size-4'/>
                            </Button>
                        </div>
                    </section>
                </form>
            </Form>
            
        </section>
    </div>
}

export default ScheduleNewStudy