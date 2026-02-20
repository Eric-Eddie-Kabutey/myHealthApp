'use client';

import { MessageSquare, Send } from 'lucide-react';
import React from 'react'
import { useState } from 'react';

type Message = {
    content: string;
    dateTime: string;
    type: 'sender' | 'receiver';
};

const initialMessages: Message[] = [
    {
        content: 'Hi, Good evening',
        dateTime: '2nd June 2025, 10:25pm',
        type: 'sender'
    },
    {
        content: 'Hello! How can I assist you today?',
        dateTime: '2nd June 2025, 10:26pm',
        type: 'receiver'
    },
    {
        content: 'I need help with my account.',
        dateTime: '2nd June 2025, 10:27pm',
        type: 'sender'
    },
    {
        content: 'Sure, can you please provide more details?',
        dateTime: '2nd June 2025, 10:28pm',
        type: 'receiver'
    }
];

function useChat() {
    const [messages, setMessages] = useState<Message[]>(initialMessages);
    const [input, setInput] = useState('');

    const sendMessage = () => {
        if (!input.trim()) return;
        const now = new Date();
        setMessages(prev => [
            ...prev,
            {
                content: input,
                dateTime: now.toLocaleString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true }),
                type: 'sender'
            }
        ]);
        setInput('');
        // Simulate bot reply
        setTimeout(() => {
            setMessages(prev => [
                ...prev,
                {
                    content: "Thank you for your message. We'll get back to you shortly.",
                    dateTime: new Date().toLocaleString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true }),
                    type: 'receiver'
                }
            ]);
        }, 1200);
    };

    return { messages, input, setInput, sendMessage };
}

function SupportChat() {
    const {messages,} = useChat();
    return <section className="w-full h-full flex flex-col pr-[2rem]">
    <div className="w-full h-full flex flex-col items-center justify-center">
        {
            messages.length > 0 ? <section className='w-full h-full py-5 flex flex-col gap-2 overflow-y-auto'>
                {
                    messages.map((mes, idx)=>{
                        return <div key={`message-${idx}`} className={`w-full flex flex-col ${mes.type === 'sender'?'items-end slide-right':'slide-left'}`}>
                            <aside className={`max-w-[60%] w-fit rounded-[1rem] p-3 px-5 ${mes.type === 'sender'?'rounded-br-none bg-primary text-white':'border rounded-bl-none bg-white text-black'}`}>{mes.content}</aside>
                            <span className="text-xs flex items-center gap-2 mt-1 text-gray-500">{mes.dateTime}</span>
                        </div>
                    })
                }

            </section> : <section className='flex flex-col items-center'>
                <aside className="size-16 rounded-full bg-gray-100 flex items-center justify-center"><MessageSquare fill={'black'}/></aside>
                <p className='mt-5'>No Message Yet</p>
                <p className="text-sm text-gray-700 my-1">How can we help you today?</p>
            </section>
        }
    </div>
    <div className="w-full flex items-center h-14 px-4 rounded-[2rem] bg-[#F4F6F8] mb-5">
        <input type="text" placeholder='Write message...' className="w-full placeholder:text-black px-4 outline-none" />
        <button className="size-10 rounded-full flex items-center justify-center bg-white">
            <Send className='size-5'/>
        </button>
    </div>
    </section>
}

export default SupportChat