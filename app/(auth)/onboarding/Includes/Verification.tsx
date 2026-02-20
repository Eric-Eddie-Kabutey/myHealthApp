'use client'
import { LogoSmall } from '@/app/assets/images'
import { Button } from '@/components/ui/button'
import routes from '@/lib/routes'
import { setNewParams } from '@/lib/utils'
import { NAuthentication } from '@/types/auth.type'
import { Check, Mail, MessageCircleCode } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useState } from 'react'
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp"



type props = {
  data: NAuthentication.ISignUp
}

function Verification({data}:props) {
  const searchParam = useSearchParams();
  const verificationType = searchParam.get('type') as 'email'|'sms'|'success';
  const router = useRouter();
  const [selected, setSelected] = useState<'email'|'sms'|'success'|''>(verificationType);

  if(!selected) return <div className='main-content w-[400px] p-[2rem] bg-white flex flex-col items-center gap-3 rounded-2xl'>
    <section className="w-full flex flex-col items-center gap-4 py-[2rem]">
      <Image src={LogoSmall} alt='logo' className='size-12'/>
      <p>A one time verification code would be sent to you to verify your account, how would you like to receive it?</p>
    </section>
    <section className="w-full flex flex-col gap-4 text-sm">
      <div onClick={()=>router.replace(routes.onboarding+setNewParams(searchParam, 'type', 'email'))} className={`border cursor-pointer rounded h-14 px-4 flex items-center justify-between ${verificationType === 'email'?'border-primary':''} hover:border-primary`}>
        <aside className="flex items-center gap-2">
          <Mail className='size-5'/>
          <p>Via Email</p>
        </aside>
        <div className={`size-6 border rounded-full p-[5px] ${verificationType === 'email'?'border-primary':''}`}>
          <div className={`size-full rounded-full bg-primary ${verificationType === 'email'?'flex':'hidden'}`}/>
        </div>
      </div>
      <div onClick={()=>router.replace(routes.onboarding+setNewParams(searchParam, 'type', 'sms'))} className={`border cursor-pointer rounded h-14 px-4 flex items-center justify-between ${verificationType === 'sms'?'border-primary':''} hover:border-primary`}>
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

  if(selected === 'email') return <div className='main-content w-[400px] p-[2rem] bg-white flex flex-col items-center gap-3 rounded-2xl'>
    <section className="w-full flex flex-col items-center gap-4 py-[2rem]">
      <div className="size-20 p-4 rounded-full bg-gradient-to-b from-gray-200 to-white flex items-center justify-center">
        <div className="size-full rounded-full bg-white flex items-center justify-center">
          <Mail className=''/>
        </div>
      </div>
      <p className="text-lg">Check your Email</p>
    </section>
    <span className="text-sm text-center">Enter the verification code sent to <br /><b>{data.email||`example@gmail.com`}</b></span>
    <div className="w-full flex justify-center mt-5">
    <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
      <InputOTPGroup className='gap-4'>
        <InputOTPSlot index={0} className='w-12 h-16 text-2xl'/>
        <InputOTPSlot index={1} className='w-12 h-16 text-2xl'/>
        <InputOTPSlot index={2} className='w-12 h-16 text-2xl'/>
        <InputOTPSlot index={3} className='w-12 h-16 text-2xl'/>
      </InputOTPGroup>
    </InputOTP>
    </div>
    <span className="text-center text-sm text-gray-500">Didn't get a code? <span className="text-primary underline cursor-pointer">Resend</span></span>
    <Button onClick={()=>{
      router.replace(routes.onboarding+setNewParams(searchParam, 'type', 'success'));
      setSelected('success')
    }} className='w-full rounded h-10'>Verify</Button>
  </div>


  if(selected === 'sms') return <div className='main-content w-[400px] p-[2rem] bg-white flex flex-col items-center gap-3 rounded-2xl'>
    <section className="w-full flex flex-col items-center gap-4 py-[2rem]">
      <div className="size-20 p-4 rounded-full bg-gradient-to-b from-gray-200 to-white flex items-center justify-center">
        <div className="size-full rounded-full bg-white flex items-center justify-center">
          <Mail className=''/>
        </div>
      </div>
      <p className="text-lg">Check your Phone Number</p>
    </section>
    <span className="text-sm text-center">Enter the verification code sent to <br /><b>{data.email||`+233542893124`}</b></span>
    <div className="w-full flex justify-center mt-5">
    <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
      <InputOTPGroup className='gap-4'>
        <InputOTPSlot index={0} className='w-12 h-16 text-2xl'/>
        <InputOTPSlot index={1} className='w-12 h-16 text-2xl'/>
        <InputOTPSlot index={2} className='w-12 h-16 text-2xl'/>
        <InputOTPSlot index={3} className='w-12 h-16 text-2xl'/>
      </InputOTPGroup>
    </InputOTP>
    </div>
    <span className="text-center text-sm text-gray-500">Didn't get a code? <span className="text-primary underline cursor-pointer">Resend</span></span>
    <Button onClick={()=>{
      router.replace(routes.onboarding+setNewParams(searchParam, 'type', 'success'));
      setSelected('success')
    }} className='w-full rounded h-10'>Verify</Button>
  </div>


if(selected === 'success') return <div className='main-content w-[400px] p-[2rem] bg-white flex flex-col items-center gap-3 rounded-2xl'>
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
}

export default Verification