'use client';
import React from 'react'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '@/components/ui/button';


const formSchema = z.object({
    firstName: z.string().min(1, "First Name is required"),
    lastName: z.string().min(1, "Last Name is required"),
    email: z.string().email("Invalid email address"),
    phoneNumber: z.string().optional(),
    dateOfBirth: z.string().min(1, "Date of Birth is required"),
    address: z.string().min(1, "Address is required"),
})

function PersonalDetails() {


    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            dateOfBirth: '',
            address: '',
        },
    })
    
    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }



    return <div className="main-content w-[370px] flex flex-col gap-3 py-[2rem]">
        <div className="flex flex-col pb-2 border-b mb-5">
            <p>Personal Details</p>
            <p className="text-sm text-gray-600">Update and edit your personal details</p>
        </div>

        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full flex flex-col gap-5">
            <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                    <Input placeholder="First Name" {...field} className='border focus-visible:ring-0 placeholder:text-xs w-full h-10' />
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                    <Input placeholder="Last Name" {...field} className='border focus-visible:ring-0 placeholder:text-xs w-full h-10' />
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                    <Input placeholder="Email" type="email" {...field} className='border focus-visible:ring-0 placeholder:text-xs w-full h-10' />
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                    <Input placeholder="Phone Number" {...field} className='border focus-visible:ring-0 placeholder:text-xs w-full h-10' />
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="dateOfBirth"
                render={({ field }) => (
                <FormItem>
                    <FormLabel>Date of Birth</FormLabel>
                    <FormControl>
                    <Input placeholder="YYYY-MM-DD" type="date" {...field} className='border focus-visible:ring-0 placeholder:text-xs w-full h-10' />
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                <FormItem>
                    <FormLabel>Address</FormLabel>
                    <FormControl>
                    <Input placeholder="Address" {...field} className='border focus-visible:ring-0 placeholder:text-xs w-full h-10' />
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )}
            />
            <div className="w-full grid grid-cols-2 gap-4">
                <Button variant={'outline'} type="button" className='w-full h-10 rounded'>Discard</Button>
                <Button type="submit" className='w-full h-10 rounded'>Save Changes</Button>
            </div>
            </form>
        </Form>
    </div>
}

export default PersonalDetails