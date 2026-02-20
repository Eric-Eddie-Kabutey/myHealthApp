'use client';

import { Button } from '@/components/ui/button';
import { BookOpen, FileChartLine, Mic, Search, Video, VideoOff } from 'lucide-react';
import React, { useState } from 'react'

function AppointmentVideoCall() {
    const [activeTab, setActiveTab] = useState<'Transcript'|'AI Research'>('Transcript');

    return <section className="w-full h-[500px] rounded-2xl border flex">
    <div className="min-w-[500px] h-full flex flex-col border-r">
        <aside className="w-full min-h-14 h-14 flex flex-col border-b justify-center p-4">
            <p>Joshua Odame</p>
            <small className="text-gray-600">ID: PT-2024-001 • Age: 45</small>
        </aside>
        <aside className="size-full flex flex-col items-center justify-center p-4">
            <div className="size-full rounded-2xl bg-[#1E2332] flex flex-col items-center text-white">
                <div className="size-full flex flex-col items-center justify-center gap-4">
                    <Video className='size-10 text-white'/>
                    <span className="text-sm text-center">
                    Ready to Start Consultation <br />
                    Click "Start Call" to begin video consultation with Sarah Johnson
                    </span>
                    <Button className='rounded gap-2 w-fit'><Video className='size-4'/>Start Call</Button>
                </div>
                <div className="py-3 flex justify-center gap-3">
                    <button className="size-10 rounded-full border flex items-center justify-center text-white"><Mic className='size-5'/></button>
                    <button className="size-10 rounded-full border border-red-500 flex items-center justify-center bg-red-500 text-white"><VideoOff className='size-5'/></button>
                </div>
            </div>
        </aside>
    </div>
    <div className="w-full flex-1 h-full flex flex-col border-r overflow-y-auto">
        <div className="flex flex-col w-full sticky top-0 bg-white">
            <aside className="w-full min-h-14 h-14 flex items-end border-b px-4">
                <button onClick={()=>setActiveTab('Transcript')} className={`px-6 xl:px-14 pb-3.5 flex items-center gap-2 ${activeTab === 'Transcript' && 'border-b-2 border-primary'}`}>
                    <FileChartLine className='size-5'/>
                    Transcript
                </button>
                <button onClick={()=>setActiveTab('AI Research')} className={`px-6 xl:px-14 pb-3.5 flex items-center gap-2 ${activeTab === 'AI Research' && 'border-b-2 border-primary'}`}>
                    <Search className='size-5'/>
                    AI Research
                </button>
            </aside>
            <aside className='w-full p-4 border-b bg-primary/10'>Live Transcription</aside>
        </div>
        <aside className="size-full flex flex-col items-center justify-center p-4">
            {
                activeTab === 'AI Research' ? <div className='main-content size-full flex flex-col items-center'>
                    <aside className="w-full xl:w-[450px] min-h-10 flex gap-3">
                        <input type="text" placeholder='Search medical conditions, treatments....' className="w-full border rounded-lg px-4 h-10 text-sm bg-white" />
                        <Button className='h-10'><Search/></Button>
                    </aside>
                    <aside className="size-full flex flex-col items-center justify-center gap-3">
                        <BookOpen/>
                        <p className="text-center w-[250px]">Enter a medical query to get AI-powered research assistance</p>
                    </aside>
                </div> : null
            }
        </aside>
    </div>
</section>
}

export default AppointmentVideoCall