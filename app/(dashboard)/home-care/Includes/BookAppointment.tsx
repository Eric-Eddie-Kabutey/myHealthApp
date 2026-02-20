'use client';

import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';




const formSchema = z.object({
    appointmentType: z.enum(['Doctor Home Visit','Private Nurse','Lab Sample Collection'], { required_error: "Select Appointment Type" }),
    urgency: z.enum(['Routine', 'Urgency'], { required_error: "Select urgency" }),
    preferredDate: z.string().min(1, "Preferred date is required"),
    preferredTime: z.string().min(1, "Preferred time is required"),
    patientName: z.string().min(1, "Patient name is required"),
    patientAge: z
        .string()
        .min(1, "Patient age is required")
        .regex(/^\d+$/, "Age must be a number"),
    phoneNumber: z.string().min(1, "Phone number is required"),
    homeAddress: z.string().optional(),
    medicalCondition: z.string().optional(),
});

function BookAppointment({open, close}:{open:any, close:()=>void}) {
    const [complete, setComplete] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            appointmentType: 'Doctor Home Visit',
            urgency: 'Routine',
            preferredDate: '',
            preferredTime: '',
            patientName: '',
            patientAge: '',
            phoneNumber: '',
            homeAddress: '',
            medicalCondition: '',
        },
    })
    
    function onSubmit(values: z.infer<typeof formSchema>) {
        setComplete(true)
    }


    return <>
        <Dialog open={!!open} onOpenChange={()=>close()}>
            <DialogContent className="main-content sm:w-[400px] max-h-[95dvh] overflow-y-auto flex flex-col items-center gap-3">
            <DialogTitle/>
            {
                !complete ? <>
                    <p className="font-[500] text-lg mb-3">
                        { open }
                    </p>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full flex flex-col gap-5">
                            <FormField control={form.control} name="appointmentType" render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Appointment Type</FormLabel>
                                    <FormControl>
                                        <select {...field} className="w-full border px-3 h-10 rounded text-sm">
                                            <option value="Doctor Home Visit">Doctor Home Visit</option>
                                        </select>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} />

                            <FormField control={form.control} name="urgency" render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Urgency</FormLabel>
                                    <FormControl>
                                        <select {...field} className="w-full border px-3 h-10 rounded text-sm">
                                            <option value="Routine">Routine</option>
                                            <option value="Urgency">Urgency</option>
                                        </select>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} />

                            <FormField control={form.control} name="preferredDate" render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Preferred Date</FormLabel>
                                    <FormControl>
                                        <input type="date" {...field} className="w-full border px-3 h-10 rounded text-sm" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} />

                            <FormField control={form.control} name="preferredTime" render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Preferred Time</FormLabel>
                                    <FormControl>
                                        <input type="time" {...field} className="w-full border px-3 h-10 rounded text-sm" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} />

                            <FormField control={form.control} name="patientName" render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Patient Name</FormLabel>
                                    <FormControl>
                                        <input placeholder="Enter patient name" {...field} className="w-full border px-3 h-10 rounded text-sm" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} />

                            <FormField control={form.control} name="patientAge" render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Patient Age</FormLabel>
                                    <FormControl>
                                        <input placeholder="Enter patient age" {...field} className="w-full border px-3 h-10 rounded text-sm" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} />

                            <FormField control={form.control} name="phoneNumber" render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Phone Number</FormLabel>
                                    <FormControl>
                                        <input placeholder="Enter phone number" {...field} className="w-full border px-3 h-10 rounded text-sm" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} />

                            <FormField control={form.control} name="homeAddress" render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Home Address</FormLabel>
                                    <FormControl>
                                        <input placeholder="Enter home address (optional)" {...field} className="w-full border px-3 h-10 rounded text-sm" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} />

                            <FormField control={form.control} name="medicalCondition" render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Medical Condition</FormLabel>
                                    <FormControl>
                                        <textarea placeholder="Enter medical condition (optional)" rows={4} {...field} className="w-full border p-3 rounded text-sm" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} />

                            <Button type="submit" className="mt-4 bg-primary text-white py-2 hover:text-primary-foreground transition w-full rounded">
                                Submit Booking Request
                            </Button>
                        </form>
                    </Form>
                </> : <>
                    <div className="size-14 rounded-full bg-gradient-to-b from-gray-200 flex items-center justify-center">
                        <svg className='size-8' viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.703125" y="1.09375" width="44.6" height="43.8138" rx="21.9069" fill="#34765A"/>
                        <rect x="0.703125" y="1.09375" width="44.6" height="43.8138" rx="21.9069" stroke="#E1E4EA"/>
                        <path d="M20.5322 27.3034L32.7887 15.0469L34.6743 16.9325L20.5322 31.0746L12.0469 22.5894L13.9325 20.7038L20.5322 27.3034Z" fill="white"/>
                        </svg>
                    </div>

                    <p className="font-[500] text-lg mb-3">Request successfully submitted!</p>
                    {
                        form.getValues().appointmentType === 'Private Nurse' ? 
                        <p className="text-sm text-center text-gray-600">Your request for Private Nurse has been submitted successfully and you would get a response soon.</p>:
                        
                        form.getValues().appointmentType === 'Doctor Home Visit' ? 
                        <p className="text-sm text-center text-gray-600">Your request for Doctor home visit service has been submitted successfully and you would get a response soon.</p>:
                        
                        form.getValues().appointmentType === 'Lab Sample Collection' ? 
                        <p className="text-sm text-center text-gray-600">Your request for Lab Sample Collection has been submitted successfully and you would get a response soon.</p>
                        
                        :null

                    }
                </>
            }
            </DialogContent>
        </Dialog>
    </>
}

export default BookAppointment