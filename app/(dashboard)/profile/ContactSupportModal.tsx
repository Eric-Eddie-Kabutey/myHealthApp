'use client';

import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogTitle,
} from "@/components/ui/dialog"
import Image from 'next/image';
import { LogoSmall } from '@/app/assets/images';
import { Mail, MessageSquare, Phone, Send } from 'lucide-react';

function ContactSupportModal({open, close}:{open:boolean, close:()=>void}) {
    return <Dialog open={!!open} onOpenChange={close}>
        <DialogContent className="main-content sm:min-w-[800px] h-[80dvh] flex flex-col items-center p-0 gap-3">
            <DialogTitle />
            <section className="w-full flex flex-col h-full">
                <div className="w-full py-2 px-4 border-b flex gap-3 items-center">
                    <Image src={LogoSmall} alt='logo'/> Ricia Care
                </div>
                <div className="w-full flex h-full">
                    <section className="w-full h-full flex-grow flex flex-col p-4 border-r">
                        <div className="size-full flex flex-col gap-2 justify-center items-center">
                            <aside className="size-16 rounded-full bg-gray-100 flex items-center justify-center mb-2"><MessageSquare/></aside>
                            <p>No Message Yet</p>
                            <p className="text-sm">How can we help you today?</p>
                        </div>
                        <div className="rounded-3xl bg-gray-100 flex items-center px-2 w-full h-12">
                            <input type="text" placeholder='Write message...' className="size-full pl-3 outline-none border-none text-sm" />
                            <button className="size-10 min-w-10 rounded-full bg-white flex items-center justify-center">
                                <Send className='size-4'/>
                            </button>
                        </div>
                    </section>
                    <section className="min-w-[250px] h-full p-3 flex flex-col items-center gap-2">
                        <Image src={LogoSmall} alt='logo' />
                        Ricia Care
                        <p className="text-sm text-center">Get all the help you need with our 24/7 available customer care service</p>

                        <hr className='w-full my-2' />

                        <div className="flex flex-col w-full gap-2">
                            <p className='mb-2'>Contact Details</p>
                            <span className="w-full flex items-center justify-between text-sm">
                                <span className="flex items-center gap-2"><Phone className='size-4'/> Phone</span>
                                +233 123 456 789
                            </span>
                            <span className="w-full flex items-center justify-between text-sm">
                                <span className="flex items-center gap-2"><Mail className='size-4'/> Email</span>
                                hi@riciacare.com
                            </span>
                        </div>
                    </section>
                </div>
            </section>
        </DialogContent>
    </Dialog>
}

export default ContactSupportModal