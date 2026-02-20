import { Button } from '@/components/ui/button'
import { ArrowUp, Check, Mic, Paperclip } from 'lucide-react'
import React from 'react'

function AppointmentChat() {
    return <div className="w-full h-[500px] rounded-2xl border flex flex-col">
        <section className="w-full py-3 flex items-center border-b justify-between px-4">
            <p>Chat Consultation</p>
            <div className="flex items-center gap-4">
                <span className="rounded h-7 flex gap-2 items-center px-4 text-sm bg-emerald-100 text-emerald-500">
                    <div className='size-2 rounded-full bg-emerald-500'/>
                    Active
                </span>
                <aside className="flex flex-col items-end">
                    <p className="text-sm">Joshua Odame</p>
                    <small className="text-gray-500">ID: PT-2024-001 • Age: 45</small>
                </aside>
            </div>
        </section>
        <section className="size-full flex flex-col gap-2 p-4 flex-1">
            <div className="w-full flex items-center gap-2">
                <div className="size-12 rounded-full bg-gray-100 flex items-center justify-center">SJ</div>
                <aside className="p-3 flex items-center gap-2 rounded-xl border bg-gray-100 text-sm">
                    Hello Doctor, I've been having headaches for the past week
                    <small className="flex items-center">
                        10:25 
                        <Check className='size-4 -mr-1'/>
                        <Check className='size-4'/>
                    </small>
                </aside>
            </div>
        </section>
        <section className="w-full p-4 min-h-16 flex items-center">
            <div className="w-full shadow rounded-[2rem] px-3 border h-14 flex items-center">
                <Paperclip className='size-5'/>
                <input placeholder='Type your message...' type="text" className="w-full px-3 h-full text-sm outline-none border-none" />
                <aside className="flex items-center gap-3 min-w-fit">
                    <Mic className='size-5 text-primary'/>
                    <Button className="size-10 flex items-center justify-center rounded-full"><ArrowUp className='size-5'/></Button>
                </aside>
            </div>
        </section>
    </div>
}

export default AppointmentChat