'use client'
import { Button } from '@/components/ui/button'
import routes from '@/lib/routes'
import { setNewParams } from '@/lib/utils'
import { Check, Lock, } from 'lucide-react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useState } from 'react'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { z } from "zod";
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '@/components/ui/input'

const formSchema = z.object({
    newPassword: z.string().min(8, "Password must be at least 8 characters"),
    confirmNewPassword: z.string().min(8, "Password must be at least 8 characters"),
}).refine((data) => data.newPassword === data.confirmNewPassword, {
    message: "Passwords do not match",
    path: ["confirmNewPassword"],
});


function ResetPassword() {
    const searchParam = useSearchParams();
    const verificationType = searchParam.get('type') as 'email'|'sms'|'success'|'check-email';
    const router = useRouter();
    const [selected, setSelected] = useState<'email'|'sms'|'success'|''|'check-email'>(verificationType);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            newPassword: '',
            confirmNewPassword: ''
        }
    })

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        router.replace(routes.resetPassword+setNewParams(searchParam, 'type', 'success'));
        setSelected('success');
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
                <p className="text-lg">Reset Password</p>
                <small className="text-center">Please create a new password</small>
            </section>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-full flex flex-col gap-5">
                    <FormField
                        control={form.control}
                        name="newPassword"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>New Password</FormLabel>
                                <FormControl>
                                    <div className="w-full border px-3 h-10 flex items-center gap-2">
                                        <Lock className="size-4" />
                                        <Input
                                            type="password"
                                            placeholder="Enter new password"
                                            {...field}
                                            style={{ outline: 'none' }}
                                            className="border-none focus-visible:ring-0 placeholder:text-xs"
                                        />
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="confirmNewPassword"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Confirm New Password</FormLabel>
                                <FormControl>
                                    <div className="w-full border px-3 h-10 flex items-center gap-2">
                                        <Lock className="size-4" />
                                        <Input
                                            type="password"
                                            placeholder="Confirm new password"
                                            {...field}
                                            style={{ outline: 'none' }}
                                            className="border-none focus-visible:ring-0 placeholder:text-xs"
                                        />
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type='submit' className='w-full rounded h-10'>Reset</Button>
                </form>
            </Form>

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
            <p className="text-lg">Password Reset Successful!</p>
            </section>
            <small className="text-gray-700 w-[80%] text-center">You can login to Ricia Care using your new password.</small>

            <Link href={routes.login} className='w-full'>
                <Button className='w-full rounded h-10 mt-2'>Login Now</Button>
            </Link>
        </div>
    </section>

    
}

export default ResetPassword