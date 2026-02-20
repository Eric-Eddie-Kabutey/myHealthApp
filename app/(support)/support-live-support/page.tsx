'use client';

import SupportChat from '@/app/(dashboard)/support/Includes/SupportChat';
import PageWrapper from '@/components/PageWrapper';
import { Button } from '@/components/ui/button';
import { Check, Mic, Paperclip, Phone, Search, SendHorizonal, Smile } from 'lucide-react';
import React from 'react'

function SupportLiveSupport() {
    return <PageWrapper className='p-0 px-0 flex-1 h-full' content={<div className='size-full flex-1 flex'>
        <section className="h-full min-w-[300px] flex flex-col gap-2">
            <div className="flex flex-col gap-3 pb-3 border-b px-3 w-full">
                <span>Messages <small className="p-2 bg-gray-100 rounded-full text-primary font-semibold">28</small></span>
                <div className="border rounded-3xl px-3 h-8 flex items-center gap-2 text-sm">
                    <Search className='size-4'/>
                    <input type="text" placeholder='Search...' className="w-full outline-none" />
                </div>
            </div>
            <div className="w-full flex flex-col h-full overflow-y-auto">
                {
                    [1,2,3,4,5,6,7,8,9].map((user, idx)=>{
                        return <div key={`user-${idx}`} className="w-full px-3 py-3 border-b flex gap-2">
                            <img src={`https://randomuser.me/api/portraits/${user%2===0?'women':'men'}/${user}.jpg`} alt="user" className="rounded-full size-10 min-w-10 object-cover" />
                            <div className="flex flex-col w-full">
                                <span className="flex items-center justify-between">
                                    <p className="text-sm">Joshua Odame</p>
                                    <small className="text-gray-500">10:20</small>
                                </span>
                                <small className="text-gray-700">Enter your message description here...</small>
                            </div>
                        </div>
                    })
                }
            </div>
            <div className="border-t p-3 bg-white">
                <button className="size-full py-2 rounded-3xl bg-gray-100 text-sm flex items-center justify-center text-primary">
                    Add New Chat +
                </button>
            </div>
        </section>
        <section className="size-full flex flex-col gap-2 bg-[#F8FAFC]">
            <span className="py-3 flex items-center justify-between border-b px-3">
                <div className="flex items-center gap-2">
                    <img src="https://randomuser.me/api/portraits/men/20.jpg" alt="active user" className="size-10 min-w-10 rounded-full object-cover" />
                    <div className='size-2 rounded-full bg-primary'/>
                    <p>Joshua Odame</p>
                </div>
                <button className="border px-3 py-2 rounded-3xl flex items-center gap-2 mr-5">
                    <Phone className='size-4'/>
                    Call
                </button>
            </span>
            <section className="w-full size-full flex flex-col gap-2 overflow-y-auto px-4">
                {
                    [1,2,3,4,5,6,7,8,9,10].map((chat, idx)=>{
                        return <div key={`chat-${idx}`} className="w-full flex flex-col items-center gap-3">
                            {idx===3?<small className='text-nowrap text-center w-full text-gray-500'>17 August</small>:null}
                            <section className={`w-full flex ${idx%3===0?'justify-end':''}`}>
                                <div className={`rounded-xl p-3 flex flex-col items-end max-w-[60%] gap-1 ${idx % 3 === 0 ? 'bg-primary text-white' : 'bg-white border'}`}>
                                    <small>Hello my dear sir, I’m here do deliver the design requirement document for our next projects.</small>
                                    <span className="text-xs flex items-center">11:25 <Check  className='size-3'/><Check className='size-3 -ml-2'/></span>
                                </div>
                            </section>
                        </div>
                    })
                }
            </section>
            <section className="p-4">
                <span className="w-full p-4 flex flex-col rounded-2xl border bg-white gap-2">
                    <div className="flex items-center gap-2">
                        <Paperclip className='size-4'/>
                        <input type="text" placeholder='Send a message...' className="w-full text-sm outline-none" />
                    </div>
                    <div className="flex gap-3 items-center justify-between">
                        <span className="flex gap-2">
                            {["Resend Invoice", "Explain Flow", "Check Invoice", "Explain consultation flow"].map((item, idx) => (
                                <button
                                    key={idx}
                                    className="px-3 py-1.5 rounded-lg bg-primary/10 text-xs text-primary border"
                                    type="button"
                                >
                                    {item}
                                </button>
                            ))}
                        </span>
                        <span className="flex items-center gap-2">
                            <button className="size-10 rounded-full border flex items-center justify-center bg-white"><Smile className='size-5'/></button>
                            <button className="size-10 rounded-full border flex items-center justify-center bg-white"><Mic className='size-5'/></button>
                            <Button className='rounded-3xl'>Send <SendHorizonal className='size-4'/></Button>
                        </span>
                    </div>
                </span>
            </section>
        </section>
    </div>}/>
}

export default SupportLiveSupport