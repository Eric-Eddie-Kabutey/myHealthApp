'use client';

import { LogoSmall } from '@/app/assets/images';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import routes from '@/lib/routes';
import useUserStore from '@/store/UserStore';
import { zodResolver } from '@hookform/resolvers/zod';
import { EyeIcon, EyeOff, Lock, Mail } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';


const formSchema = z.object({
  identifier: z.string().min(1, "Email or phone number is required"),
  password: z.string().min(5, "Minimum length is 5 letters").regex(/\d/, "At least one number"),
});

function Login() {
  const {setUser, user} = useUserStore();
  const router = useRouter();
    // const searchParams = useSearchParams();
    const [showPassword, setShowPassword] = useState(false)
    // const action = searchParams.get('step') as StepType || 'Account Type'
    
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        identifier: '',
        password: ''
      },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
      setUser({
        email: 'odamejoshua37@gmail.com',
        firstName: 'Joshua',
        lastName: 'Odame',
        phone: '+233 54 289 3124',
        role: 'doctor'
      });
      if(user?.role){
        router.replace(
          user?.role === 'patient' ? routes.dashboard :
          user?.role === 'doctor' ? routes.doctor.dashboard :
          routes.dashboard
        )
      }
      // Do something with the form values.
      // ✅ This will be type-safe and validated.
      console.log(values)
    }

    return <section className="size-full h-[100dvh] flex flex-col items-center overflow-y-auto pt-[7rem]">
      <div className='main-content w-[400px] p-[2rem] bg-white flex flex-col items-center gap-3 rounded-2xl'>
        <section className="w-full flex flex-col items-center gap-2 py-[2rem]">
          <Image src={LogoSmall} alt='logo' className='size-12'/>
          <p>Login to Ricia Care</p>
        </section>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full flex flex-col gap-5">
            <FormField control={form.control} name="identifier" render={({ field }) => <FormItem>
                <FormLabel>Email / Phone Number</FormLabel>
                <FormControl>
                  <div className="w-full border px-3 h-10 flex items-center gap-2">
                    <Mail className='size-4'/>
                    <Input placeholder="Email Address / Phone Number" {...field} style={{outline: 'none'}} className='border-none focus-visible:ring-0 placeholder:text-xs' />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <div className="w-full border px-3 h-10 flex items-center gap-2">
                      <Lock className='size-4'/>
                      <Input placeholder="Password" type={showPassword ? 'text':'password'} {...field} className='border-none focus-visible:ring-0 placeholder:text-xs' />
                      <button type='button' onClick={()=>setShowPassword(!showPassword)}>
                        {
                          showPassword ? <EyeIcon className='size-4'/> : <EyeOff className='size-4'/>
                        }
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="w-full flex items-center justify-between">
              <span className="flex items-center gap-2 text-sm">
                <Checkbox/> Remember Me
              </span>
              <Link href={routes.forgotPassword} className='text-sm'>Forgot Password?</Link>
            </div>

            <Button type="submit" className="mt-4 bg-primary text-white py-2 hover:text-primary-foreground transition" >
              Log In
            </Button>

            <small className='w-full text-center'>Don{`'`}t have an account? <Link href={routes.onboarding} className='text-primary underline'>Sign Up</Link></small>

          </form>
        </Form>
      </div>
    </section>
}

export default Login