'use client';

import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogTitle,
  } from "@/components/ui/dialog"
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { z } from "zod";
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '@/components/ui/input'

const formSchema = z.object({
    patientName: z.string().min(1, "Please enter the patient's name"),
    age: z
        .string()
        .refine(val => /^\d+$/.test(val), { message: "Age must be a number" })
        .refine(val => Number(val) > 0, { message: "Age must be greater than 0" }),
    medicalCondition: z.string().min(1, "Please enter the medical condition"),
    phoneNumber: z
        .string()
        .min(10, "Phone number must be at least 10 digits")
        .max(15, "Phone number must be at most 15 digits")
        .refine(val => /^\d+$/.test(val), { message: "Phone number must contain only digits" }),
});

function EmergencyConsultation({open, close}:{open:any, close:()=>void}) {
    const [complete, setComplete] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            patientName: '',
            age: '',
            medicalCondition: '',
            phoneNumber: ''
        }
    })

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        setComplete(true);
        console.log(values);
    }
    
    return <>
        <Dialog open={open} onOpenChange={()=>close()}>
            <DialogContent className="main-content sm:w-[400px] flex flex-col items-center gap-3">
                <DialogTitle />
                {
                    !complete ? <>
                        <div className="w-full flex justify-center mb-4">Emergency Consultation Request</div>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full flex flex-col gap-5">
                                <FormField control={form.control} name="patientName" render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Patient Name</FormLabel>
                                        <FormControl>
                                            <div className="w-full border px-3 h-10 flex items-center gap-2">
                                                <Input placeholder="Patient Name" {...field} style={{ outline: 'none' }} className='border-none focus-visible:ring-0 placeholder:text-xs' />
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )} />
                                <FormField control={form.control} name="age" render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Age</FormLabel>
                                        <FormControl>
                                            <div className="w-full border px-3 h-10 flex items-center gap-2">
                                                <Input placeholder="Age" {...field} style={{ outline: 'none' }} className='border-none focus-visible:ring-0 placeholder:text-xs' />
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )} />
                                <FormField control={form.control} name="medicalCondition" render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Medical Condition</FormLabel>
                                        <FormControl>
                                            <div className="w-full border h-auto flex items-center gap-2">
                                                <textarea rows={4} placeholder="Medical Condition" {...field} style={{ outline: 'none' }} className='p-2 border-none focus-visible:ring-0 placeholder:text-xs w-full' />
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )} />
                                <FormField control={form.control} name="phoneNumber" render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Phone Number</FormLabel>
                                        <FormControl>
                                            <div className="w-full border px-3 h-10 flex items-center gap-2">
                                                <Input placeholder="Phone Number" {...field} style={{ outline: 'none' }} className='border-none focus-visible:ring-0 placeholder:text-xs' />
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )} />
                                <div className="w-full mt-2 grid grid-cols-2 gap-3">
                                    <Button onClick={()=>close()} variant={`outline`} className='w-full'>Cancel</Button>
                                    <Button type='submit' className='w-full'>Submit Request</Button>
                                </div>
                            </form>
                        </Form>
                    </> : 
                    
                    <>
                        <div className="size-16 rounded-full p-3 bg-gradient-to-b from-gray-100 flex items-center justify-center">
                            <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.703125" y="1.09375" width="44.6" height="43.8138" rx="21.9069" fill="#34765A"/>
                            <rect x="0.703125" y="1.09375" width="44.6" height="43.8138" rx="21.9069" stroke="#E1E4EA"/>
                            <path d="M20.5322 27.3034L32.7887 15.0469L34.6743 16.9325L20.5322 31.0746L12.0469 22.5894L13.9325 20.7038L20.5322 27.3034Z" fill="white"/>
                            </svg>
                        </div>
                        <p className='mt-3'>Request successfully submitted!</p>
                        <p className="text-sm text-center text-gray-600">Your request for emergency consultation has been submitted successfully and you would get a response soon.</p>
                    </>
                }
            </DialogContent>
        </Dialog>
    </>
}

export default EmergencyConsultation