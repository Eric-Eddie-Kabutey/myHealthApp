'use client'
import { Button } from '@/components/ui/button'
import routes from '@/lib/routes'
import { setNewParams } from '@/lib/utils'
import { Check, Lock, Mail, MessageCircleCode } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useState } from 'react'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

import { z } from "zod";
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '@/components/ui/input'
import { gmail } from '@/app/assets/icons'

const formSchemaEmail = z.object({
    email: z.string().email("Please enter a valid email address"),
});

const formSchemaPhone = z.object({
    phone: z.string()
        .min(10, "Please enter a valid phone number")
        .max(15, "Please enter a valid phone number")
        .regex(/^\+?\d{10,15}$/, "Please enter a valid phone number"),
});


function ForgotPassword() {
    const searchParam = useSearchParams();
    const verificationType = searchParam.get('type') as 'email'|'sms'|'success'|'check-email'|'check-sms';
    const router = useRouter();
    const [selected, setSelected] = useState<'email'|'sms'|'success'|''|'check-email'|'check-sms'>(verificationType);


    const formEmail = useForm<z.infer<typeof formSchemaEmail>>({
        resolver: zodResolver(formSchemaEmail),
        defaultValues: {
            email: ''
        }
    })
    const formPhone = useForm<z.infer<typeof formSchemaPhone>>({
        resolver: zodResolver(formSchemaPhone),
        defaultValues: {
            phone: ''
        }
    })

    const onSubmitEmail = (values: z.infer<typeof formSchemaEmail>) => {
        router.replace(routes.forgotPassword+setNewParams(searchParam, 'type', 'check-email'));
        setSelected('check-email');
        console.log(values)
    }
    const onSubmitPhone = (values: z.infer<typeof formSchemaPhone>) => {
        router.replace(routes.forgotPassword+setNewParams(searchParam, 'type', 'check-sms'));
        setSelected('check-sms')
        console.log(values)
    }

    if(!selected) return <section className="size-full h-[100dvh] flex flex-col items-center overflow-y-auto pt-[7rem]">
        <div className='main-content w-[400px] p-[2rem] bg-white flex flex-col items-center gap-3 rounded-2xl'>
            <section className="w-full flex flex-col items-center gap-4 py-[2rem]">
                <div className="size-20 p-4 rounded-full bg-gradient-to-b from-gray-200 to-white flex items-center justify-center">
                    <div className="size-full rounded-full bg-white flex items-center justify-center">
                    <Lock className=''/>
                    </div>
                </div>
                <p className="text-lg">Forgot Password</p>
                <small className='text-center'>No worries! We have got you covered. Please select how you would like to receive your password reset link.</small>
            </section>
            <section className="w-full flex flex-col gap-4 text-sm">
            <div onClick={()=>router.replace(routes.forgotPassword+setNewParams(searchParam, 'type', 'email'))} className={`border cursor-pointer rounded h-14 px-4 flex items-center justify-between ${verificationType === 'email'?'border-primary':''} hover:border-primary`}>
                <aside className="flex items-center gap-2">
                <Mail className='size-5'/>
                <p>Via Email</p>
                </aside>
                <div className={`size-6 border rounded-full p-[5px] ${verificationType === 'email'?'border-primary':''}`}>
                <div className={`size-full rounded-full bg-primary ${verificationType === 'email'?'flex':'hidden'}`}/>
                </div>
            </div>
            <div onClick={()=>router.replace(routes.forgotPassword+setNewParams(searchParam, 'type', 'sms'))} className={`border cursor-pointer rounded h-14 px-4 flex items-center justify-between ${verificationType === 'sms'?'border-primary':''} hover:border-primary`}>
                <aside className="flex items-center gap-2">
                <MessageCircleCode className='size-5'/>
                <p>Via SMS</p>
                </aside>
                <div className={`size-6 border rounded-full p-[5px] ${verificationType === 'sms'?'border-primary':''}`}>
                <div className={`size-full rounded-full bg-primary ${verificationType === 'sms'?'flex':'hidden'}`}/>
                </div>
            </div>
            <Button disabled={!verificationType} onClick={()=>setSelected(verificationType)} className='h-10 rounded'>Submit</Button>
            </section>
        </div>
    </section>

    if(selected === 'email') return <section className="size-full h-[100dvh] flex flex-col items-center overflow-y-auto pt-[7rem]">
        <div className='main-content w-[400px] p-[2rem] bg-white flex flex-col items-center gap-3 rounded-2xl'>
            <section className="w-full flex flex-col items-center gap-4 py-[2rem]">
                <div className="size-20 p-4 rounded-full bg-gradient-to-b from-gray-200 to-white flex items-center justify-center">
                    <div className="size-full rounded-full bg-white flex items-center justify-center">
                    <Lock className=''/>
                    </div>
                </div>
                <p className="text-lg">Forgot Password</p>
                <small className="text-center">No worries! We have got you covered. Enter your email to recover your password</small>
            </section>

            <Form {...formEmail}>
                <form onSubmit={formEmail.handleSubmit(onSubmitEmail)} className="w-full flex flex-col gap-5">
                    <FormField control={formEmail.control} name="email" render={({ field }) => <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                            <div className="w-full border px-3 h-10 flex items-center gap-2">
                            <Mail className='size-4'/>
                            <Input placeholder="Email Address" {...field} style={{outline: 'none'}} className='border-none focus-visible:ring-0 placeholder:text-xs' />
                            </div>
                        </FormControl>
                        <FormMessage />
                        </FormItem>}
                    />
                    <Button type='submit' className='w-full rounded h-10'>Submit</Button>
                </form>
            </Form>

        </div>
    </section>


    if(selected === 'sms') return <section className="size-full h-[100dvh] flex flex-col items-center overflow-y-auto pt-[7rem]">
        <div className='main-content w-[400px] p-[2rem] bg-white flex flex-col items-center gap-3 rounded-2xl'>
            <section className="w-full flex flex-col items-center gap-4 py-[2rem]">
                <div className="size-20 p-4 rounded-full bg-gradient-to-b from-gray-200 to-white flex items-center justify-center">
                    <div className="size-full rounded-full bg-white flex items-center justify-center">
                    <Lock className=''/>
                    </div>
                </div>
                <p className="text-lg">Forgot Password</p>
                <small className="text-center">No worries! We have got you covered. Enter your email to recover your password</small>
            </section>

            <Form {...formPhone}>
                <form onSubmit={formPhone.handleSubmit(onSubmitPhone)} className="w-full flex flex-col gap-5">
                    <FormField control={formPhone.control} name="phone" render={({ field }) => <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                            <div className="w-full border px-3 h-10 flex items-center gap-2">
                            <MessageCircleCode className='size-4'/>
                            <Input
                                placeholder="Phone Number (e.g. +1234567890)"
                                {...field}
                                style={{ outline: 'none' }}
                                className='border-none focus-visible:ring-0 placeholder:text-xs'
                                type="tel"
                                inputMode="tel"
                            />
                            </div>
                        </FormControl>
                        <FormMessage />
                        </FormItem>}
                    />
                    <Button type='submit' className='w-full rounded h-10'>Submit</Button>
                </form>
            </Form>

        </div>
    </section>

    if(selected === 'check-email') return <section className="size-full h-[100dvh] flex flex-col items-center overflow-y-auto pt-[7rem]">
        <div className='main-content w-[400px] p-[2rem] bg-white flex flex-col items-center gap-3 rounded-2xl'>
            <section className="w-full flex flex-col items-center gap-4 py-[1rem]">
            <div className="size-20 p-4 rounded-full bg-gradient-to-b from-gray-200 to-white flex items-center justify-center">
                <div className="size-full rounded-full bg-white text-black flex items-center justify-center">
                <Mail className=''/>
                </div>
            </div>
            <p className="text-lg">Check your Email!</p>
            </section>
            <small className="text-gray-700 text-center w-[80%]">We emailed you a password reset link valid for 10 minutes.</small>

            <Button
                className='w-full rounded h-10 mt-2 flex items-center gap-3'
                type="button"
                onClick={() => window.open('https://mail.google.com/', '_blank')}
            >
                <Image src={gmail} alt='gmail'/>
                Open Email
            </Button>
        </div>
    </section>

    if(selected === 'check-sms') return <section className="size-full h-[100dvh] flex flex-col items-center overflow-y-auto pt-[7rem]">
        <div className='main-content w-[400px] p-[2rem] bg-white flex flex-col items-center gap-3 rounded-2xl'>
            <section className="w-full flex flex-col items-center gap-4 py-[1rem]">
                <div className="size-20 p-4 rounded-full bg-gradient-to-b from-gray-200 to-white flex items-center justify-center">
                    <div className="size-full rounded-full bg-white text-black flex items-center justify-center">
                    <MessageCircleCode className=''/>
                    </div>
                </div>
                <p className="text-lg">Check your Phone!</p>
            </section>
            <small className="text-gray-700 text-center w-[80%]">We have sent you a password reset link valid for 10 minutes.</small>
            <Link href={routes.resetPassword} className='w-full'>
                <Button className='w-full rounded h-10 mt-2 flex items-center gap-3 bg-slate-900' type="button"  >
                    <MessageCircleCode className='size-5'/>
                    Check SMS
                </Button>
            </Link>

        </div>
    </section>


    if(selected === 'success') return <section className="size-full h-[100dvh] flex flex-col items-center overflow-y-auto pt-[7rem]">
        <div className='main-content w-[400px] p-[2rem] bg-white flex flex-col items-center gap-3 rounded-2xl'>
            <section className="w-full flex flex-col items-center gap-4 py-[1rem]">
            <div className="size-20 p-4 rounded-full bg-gradient-to-b from-gray-200 to-white flex items-center justify-center">
                <div className="size-full rounded-full bg-primary text-white flex items-center justify-center">
                <Check className=''/>
                </div>
            </div>
            <p className="text-lg">Verification Successful</p>
            </section>
            <small className="text-gray-700 text-center">You have successfully created your account, click the button below to login to your account.</small>

            <Link href={routes.login} className='w-full'>
            <Button className='w-full rounded h-10 mt-2'>Login</Button>
            </Link>
        </div>
    </section>

    
}

export default ForgotPassword