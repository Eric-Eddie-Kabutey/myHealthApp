'use client'

import { apple, faceBook, google } from '@/app/assets/icons'
import { LogoSmall } from '@/app/assets/images'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import routes from '@/lib/routes'
import { zodResolver } from '@hookform/resolvers/zod'
import { EyeIcon, EyeOff, Lock, Mail, Phone, UserPlusIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useRouter } from 'next/navigation'
import { OnboardingSteps } from './OnboardingSteps'

const formSchema = z.object({
  firstName: z.string().min(1, "First Name is required"),
  lastName: z.string().min(1, "Last Name is required"),
  email: z.string().email("Invalid email address"),
  phoneNumber: z.string().optional(),
  password: z.string().min(5, "Minimum length is 5 letters").regex(/\d/, "At least one number"),
  confirmPassword: z.string().min(1, "Password confirmation is required"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords must match",
  path: ["confirmPassword"],
})

function SignUp() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      password: '',
      confirmPassword: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    router.push(routes.onboarding+`?step=${OnboardingSteps.verify}`)
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
  return (
    <div className='main-content w-[460px] p-[2rem] bg-white flex flex-col items-center gap-3 rounded-2xl'>

      <section className="w-full flex flex-col items-center gap-2 py-[2rem]">
        <Image src={LogoSmall} alt='logo'/>
        <p>Sign Up to Ricia Care</p>
      </section>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full flex flex-col gap-5">
          <FormField control={form.control} name="firstName" render={({ field }) => <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <div className="w-full border px-3 h-10 flex items-center gap-2">
                  <UserPlusIcon className='size-4'/>
                  <Input placeholder="First Name" {...field} style={{outline: 'none'}} className='border-none focus-visible:ring-0 placeholder:text-xs' />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <div className="w-full border px-3 h-10 flex items-center gap-2">
                    <UserPlusIcon className='size-4'/>
                    <Input placeholder="Last Name" {...field} className='border-none focus-visible:ring-0 placeholder:text-xs' />
                  </div>
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
                  <div className="w-full border px-3 h-10 flex items-center gap-2">
                  <Mail className='size-4'/>
                    <Input placeholder="Email Address" type="email" {...field} className='border-none focus-visible:ring-0 placeholder:text-xs' />
                  </div>
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
                <FormLabel>Phone Number (Optional)</FormLabel>
                <FormControl>
                  <div className="w-full border px-3 h-10 flex items-center gap-2">
                    <Phone className='size-4'/>
                    <Input placeholder="Phone Number" type="tel" {...field} className='border-none focus-visible:ring-0 placeholder:text-xs' />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
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
                    <Input placeholder="Password" type={showPassword? 'text':'password'} {...field} className='border-none focus-visible:ring-0 placeholder:text-xs' />
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
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <div className="w-full border px-3 h-10 flex items-center gap-2">
                  <Lock className='size-4'/>
                  <Input placeholder="Confirm Password" type={showPassword? 'text':'password'} {...field} className='border-none focus-visible:ring-0 placeholder:text-xs' />
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


          <Button type="submit" className="mt-4 bg-primary text-white py-2 hover:text-primary-foreground transition" >
            Sign Up
          </Button>

            <span className="text-xs text-center text-muted-foreground w-full mt-2">
              By creating an account, you agree to our&nbsp;
              <a href="/terms" className="underline hover:text-primary" target="_blank" rel="noopener noreferrer">
                Terms of Use
              </a>
              &nbsp;and&nbsp;
              <a href="/privacy" className="underline hover:text-primary" target="_blank" rel="noopener noreferrer">
                Privacy Policy
              </a>
            </span>

            <small className='w-full text-center'>Already have an account? <Link href={routes.login} className='text-primary'>Login</Link></small>
            
            <div className="w-full flex gap-1 items-center">
              <hr className='w-full'/>
              <b className='mx-2 text-sm'>OR</b>
              <hr className='w-full'/>
            </div>

            <div className="w-full grid grid-cols-3 gap-4">
              <button type="button" className="border p-3 h-9 flex items-center gap-3 rounded-lg">
                <Image src={google} alt="" className="w-4" />
                <p className="text-sm">Google</p>
              </button>
              <button type="button" className="border p-3 h-9 flex items-center gap-3 rounded-lg">
                <Image src={apple} alt="" className="w-4" />
                <p className="text-sm">Apple</p>
              </button>
              <button type="button" className="border p-3 h-9 flex items-center gap-3 rounded-lg">
                <Image src={faceBook} alt="" className="w-4" />
                <p className="text-sm">Facebook</p>
              </button>
            </div>
        </form>
      </Form>
    </div>
  )
}

export default SignUp