'use client'

import { bot } from '@/app/assets/images'
import { useRoleGuard } from '@/app/hooks/useRoleGuard'
import PageWrapper from '@/components/PageWrapper'
import { Button } from '@/components/ui/button'
import { ArrowUp, Check, MessageSquareQuoteIcon, Mic, Paperclip, Plus } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function AiHealthSuggestion() {
  useRoleGuard('patient')
  return <PageWrapper className='h-full' content={<section className='size-full flex'>
    <div className="min-w-[250px] h-full flex flex-col py-6 gap-4 bg-gray-100">
      <div className="w-full px-4 flex flex-col gap-4">
        <Button className='w-full'>
          <Plus/>
          New Chat
        </Button>

        <hr className="w-full" />

        <small className="text-gray-600">Today</small>
        <div className="w-full px-3 h-10 bg-primary/10 flex gap-2 items-center">
          <MessageSquareQuoteIcon className='size-5'/>
          Start a conversation
        </div>
        <small className="w-full text-center text-gray-500">Chat history would appear here</small>
      </div>
    </div>
    <div className="w-full flex-1 h-full border-l p-4 flex flex-col ">
      {
        true ? <section className="size-full flex flex-col gap-4 items-center">
          <div className="w-full flex gap-2 py-2">
            <aside className="size-12 border rounded-full flex items-center justify-center font-semibold">RI</aside>
            <aside className="px-4 py-2 border rounded-xl flex flex-col gap-2">
              Hello! I’m your personal AI Assistant Ricia
              <span className="text-sm flex items-center justify-end">10:25 <Check className='size-3 -mr-1 ml-1'/><Check className='size-3'/></span>
            </aside>
          </div>
          <div className="w-full flex justify-end gap-2 py-2">
            <aside className="px-4 py-2 border rounded-xl flex flex-col gap-2">
              Hello! I’m your personal AI Assistant Ricia
              <span className="text-sm flex items-center justify-end">10:25 <Check className='size-3 -mr-1 ml-1'/><Check className='size-3'/></span>
            </aside>
            <aside className="size-12 border rounded-full flex items-center justify-center font-semibold overflow-hidden">
              <img src="https://joshod.vercel.app/static/media/Josh.010e66846be55efa2b52.jpeg" alt="user" className="size-full object-cover" />
            </aside>
          </div>
        </section> : 
        <section className="size-full flex flex-col gap-4 items-center justify-center">
          <Image src={bot} alt=''/>
          <h1 className="text-lg">Hey, Joshua</h1>
          <p className='text-center w-[300px] text-gray-600'>Welcome, I am Ricia. Let’s get you checked in, what is the purpose of your visit today?</p>
          <div className="flex gap-4 justify-center">
            <Button className='bg-primary-foreground text-primary hover:text-white'>Need a check up</Button>
            <Button className='bg-primary-foreground text-primary hover:text-white'>Not feeling well</Button>
            <Button className='bg-primary-foreground text-primary hover:text-white'>Follow up appointment</Button>
          </div>
        </section>
      }

      <section className="w-full flex border rounded-[2rem] px-4 h-16 items-center gap-2">
        <Paperclip className='size-5 text-gray-600'/>
        <input placeholder='Message Ricia ...' type="text" className="w-full h-full outline-none px-3" />
        <button><Mic/></button>
        <Button className='size-10 rounded-full'><ArrowUp/></Button>
      </section>
    </div>
  </section>}/>
}

export default AiHealthSuggestion