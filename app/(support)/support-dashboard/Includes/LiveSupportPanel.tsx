'use client';

import { Button } from '@/components/ui/button';
import { Phone, Plus, SendIcon } from 'lucide-react';
import React, { useState } from 'react'

type LiveSupportType = 'Chat' | 'Call' | 'Email';
const liveSupportTabs: LiveSupportType[] = ['Chat', 'Call', 'Email'];

function LiveSupportPanel() {
    const [activeLiveSupportTab, setActiveLiveSupportTab] = useState<LiveSupportType>('Chat')

    return (
        <div className='w-full overflow-y-auto flex flex-col gap-2'>
            <aside className="flex border-b items-end min-h-10 sticky top-0 bg-white">
                {
                    liveSupportTabs.map((tab, idx) => {
                        return <button onClick={() => setActiveLiveSupportTab(tab)} key={`liveSupportTab-${idx}`} className={`pb-2 px-3 border-primary ${tab === activeLiveSupportTab ? 'text-primary border-b' : ''}`}>{tab}</button>
                    })
                }
            </aside>
            
            {
                activeLiveSupportTab === 'Chat' ? <Chat /> : 
                activeLiveSupportTab === 'Call' ? <Call /> :
                activeLiveSupportTab === 'Email' ? <Email /> : null
            }
            
        </div>
    )
}


const Email = () => {
    return <div className="w-full flex flex-col gap-3">
        <aside className="w-full py-2 flex items-center justify-between border-b px-3 bg-white sticky top-10">
            <p>Pending Emails (4)</p>
            <Button variant={'outline'} className='h-9 rounded'>View All</Button>
        </aside>
        {
            [1,2,3,4,5,6].map((email, idx)=>{
                return <div key={`email-${idx}`} className="border rounded p-2 flex flex-col gap-1.5">
                    <span className="w-full flex items-center justify-between">
                        <p className="text-sm">Subscription Renewal Failed</p>
                        <small className="text-gray-600">10:15 AM</small>
                    </span>
                    <p className="text-sm text-gray-700">Hello, I need to reschedule my appointment with Dr. Smith for tomorrow. What are my options...</p>
                </div>
            })
        }
    </div>
}

const Call = () => {
    return <div className=" flex flex-col pt-[3rem] items-center justify-center gap-3">
        <div className="size-16 rounded-full bg-primary/20 flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 13.42V16.9561C0 17.4811 0.405901 17.9167 0.929501 17.9537C1.3669 17.9846 1.7237 18 2 18C10.8366 18 18 10.8366 18 2C18 1.72371 17.9845 1.36687 17.9536 0.9295C17.9166 0.40588 17.4811 0 16.9561 0H13.4199C13.1632 0 12.9482 0.19442 12.9225 0.4498C12.8993 0.67907 12.8778 0.86314 12.8579 1.00202C12.6557 2.41472 12.2425 3.75936 11.6513 5.00303C11.5564 5.20265 11.6183 5.44159 11.7982 5.57006L13.9564 7.1118C12.6425 10.1811 10.1811 12.6425 7.1118 13.9565L5.5729 11.8019C5.4428 11.6199 5.201 11.5573 4.999 11.6532C3.7554 12.2439 2.4109 12.6566 0.9984 12.8584C0.860399 12.8782 0.6775 12.8995 0.4498 12.9225C0.194401 12.9483 0 13.1633 0 13.42Z" fill="#34765A" />
            </svg>
        </div>
        <p>Call Support</p>
        <p className="text-gray-600">Currently handling an active call</p>

        <div className="flex flex-col gap-3 mt-3 w-[300px]">
            {
                [1,2,].map((call, idx)=>{
                    return <aside key={`call-${idx}`} className="w-full border rounded px-3 py-1.5 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <img src="https://randomuser.me/api/portraits/men/20.jpg" alt="" className="size-10 min-w-10 rounded-full object-cover" />
                            <span className="flex flex-col">
                                <p className="text-sm">Lisa Johnson</p>
                                <small className="text-gray-600">Call duration: 4:32</small>
                            </span>
                        </div>
                        <div className="size-8 min-w-8 rounded-full flex items-center justify-center bg-red-100 text-red-600"><Plus className='size-5 rotate-45' /></div>
                    </aside>
                })
            }
        </div>
    </div>
}

const Chat = () => {
    return <>
        <aside className="min-h-12 flex items-end gap-2">
            <div className='size-2 rounded-full bg-primary' />
            <div className="flex flex-col">
                <p>Michael Brown</p>
                <small className="text-gray-500">Active now</small>
            </div>
        </aside>
        <div className="w-full rounded-lg border bg-gray-100 flex flex-col overflow-y-auto gap-3 h-full p-4">
            {
                [1, 2, 3, 4, 5, 6, 7].map((chat, idx) => {
                    return <div key={`chat-${idx}`} className={`w-full flex ${idx % 2 === 0 ? 'justify-end' : ''}`}>
                        <aside className={`p-3 px-6 flex flex-col rounded-lg items-end gap-1 max-w-[60%] ${idx % 2 === 0 ? 'bg-primary text-white' : 'bg-primary-foreground'}`}>
                            <p className='w-full text-sm'>Hi, I'm having trouble booking a consultation. The system keeps saying my payment failed but I was charged.</p>
                            <small>10:02 AM</small>
                        </aside>
                    </div>
                })
            }
        </div>
        <aside className="flex flex-col gap-2">
            <div className="w-full rounded-3xl h-12 bg-gray-100 flex items-center px-3 pl-5 gap-2">
                <input type="text" placeholder='Write message...' className="w-full text-sm outline-none" />
                <button className="size-8 min-w-9 rounded-full bg-white flex items-center justify-center text-primary">
                    <SendIcon className='size-4' />
                </button>
            </div>
            <div className="flex flex-col gap-1">
                <p className="text-sm">Quick Responses</p>
                <span className="flex gap-3 overflow-x-auto">
                    <div className="px-4 rounded text-sm bg-gray-100 py-1">Subscription benefits</div>
                    <div className="px-4 rounded text-sm bg-gray-100 py-1">Resend Invoice</div>
                    <div className="px-4 rounded text-sm bg-gray-100 py-1">Booking process explanantion</div>
                </span>
            </div>
        </aside>
    </>
}

export default LiveSupportPanel