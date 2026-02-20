'use client';

import { Button } from '@/components/ui/button';
import { EllipsisVertical, Mic, Paperclip, Phone, Search, Send, Smile } from 'lucide-react';
import React from 'react'

function OperationsSupport() {
    return <div className="main-content w-full flex h-full">
        <section className="border-b flex md:flex-row flex-col items-start  md:items-end justify-between gap-2">
            <div className="w-full min-h-[100px] border-b p-3 flex flex-col gap-3">
                <span className="flex items-center gap-2">
                    <b>Messages</b>
                    <div className="size-8 text-sm rounded-full bg-gray-100 text-primary flex items-center justify-center">29</div>
                </span>
                <aside className="rounded-2xl w-full px-2 h-7 border flex items-center gap-2">
                    <Search className='size-4' />
                    <input type="text" placeholder='Search...' className="border-none outline-none text-sm w-full h-full" />
                </aside>
            </div>
            <section className="w-full h-full flex-1">
                {
                    [1, 2, 3, 4, 5, 6, 7].map((chat, idx) => {
                        return <div key={`s-${idx}`} className="w-full p-3 flex justify-between hover:bg-gray-100">
                            <aside className="flex items-center gap-2">
                                <div className="size-10 rounded-full border">
                                    <img src={`https://randomuser.me/api/portraits/${idx % 2 === 0 ? 'women' : 'men'}/${idx + 1}${chat - idx}.jpg`} alt="" className="size-full rounded-full object-cover" />
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-sm">Jerome White</p>
                                    <small className="text-gray-800">Enter your message description here...</small>
                                </div>
                            </aside>
                            <small className="text-gray-400">12:25</small>
                        </div>
                    })
                }
            </section>
            <div className="p-3 border-t flex w-full">
                <Button variant={'outline'} className='rounded-2xl h-8 border-none w-full text-primary bg-[#EEF2FF]'>Add New Chat +</Button>
            </div>
        </section>
        <section className="w-full flex-1 h-full flex flex-col pb-5 bg-[#F8FAFC] overflow-hidden">
            <aside className="w-full min-h-fit p-4 flex items-center justify-between border-b">
                <aside className="flex items-center gap-2">
                    <div className="size-10 rounded-full border">
                        <img src={`https://randomuser.me/api/portraits/women/23.jpg`} alt="" className="size-full rounded-full object-cover" />
                    </div>
                    <div className='size-2 rounded-full bg-emerald-500' />
                    <p>Azunyan U.Wu</p>
                </aside>
                <aside className="flex items-center gap-2">
                    <Button variant={'outline'} className='gap-2 px-4 rounded-2xl'>
                        <Phone className='size-4' />
                        Call
                    </Button>
                    <EllipsisVertical className='size-5' />
                </aside>
            </aside>
            <aside className="w-full h-full flex flex-col gap-4 p-4 overflow-y-auto">
                {
                    [1, 2, 3, 4, 5, 6, 7, 8].map((chat, idx) => {
                        return <div key={idx} className={`w-full flex ${idx % 3 === 0 && 'justify-end'}`}>
                            <div className={`p-2 lg:max-w-[40%] max-w-[60%] text-sm flex flex-col items-end gap-1 rounded-lg ${idx % 3 === 0 ? 'bg-primary text-white' : 'border'}`}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nesciunt possimus quae tenetur dolore deserunt modi. Nulla rem quas neque tempora soluta obcaecati, quasi dolores temporibus eaque! Aperiam, perferendis obcaecati.
                                <small className={`${idx % 3 === 0 && 'text-gray-200'}`}>11:25</small>
                            </div>
                        </div>
                    })
                }
            </aside>
            <aside className="w-full px-4">
                <div className="w-full rounded-xl border bg-white p-3 flex flex-col gap-2">
                    <div className="flex gap-2 py-2">
                        <Paperclip className='size-5' />
                        <input type="text" placeholder='Send a message...' className="w-full outline-none px-3 h-full" />
                    </div>
                    <div className="w-full flex items-center justify-between">
                        <aside className="flex gap-2">
                            <div className="px-4 h-8 rounded text-primary bg-primary/10 flex items-center text-sm">Resend Invoic</div>
                            <div className="px-4 h-8 rounded text-primary bg-primary/10 flex items-center text-sm">Explain Flow</div>
                            <div className="px-4 h-8 rounded text-primary bg-primary/10 flex items-center text-sm">Resend Invoic</div>
                            <div className="px-4 h-8 rounded text-primary bg-primary/10 flex items-center text-sm">Resend Invoic</div>
                        </aside>
                        <aside className="flex gap-2">
                            <Button variant={'outline'} className="size-10 border rounded-full items-center justify-center"><Smile /></Button>
                            <Button variant={'outline'} className="size-10 border rounded-full items-center justify-center"><Mic /></Button>
                            <Button className='rounded-2xl'>
                                Send
                                <Send />
                            </Button>
                        </aside>
                    </div>
                </div>
            </aside>
        </section>
    </div>
}

export default OperationsSupport