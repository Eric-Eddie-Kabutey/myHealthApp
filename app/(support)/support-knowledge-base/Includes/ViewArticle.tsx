'use client';

import { Plus } from 'lucide-react';
import React from 'react'

function ViewArticle({open, close}:{open:boolean, close:()=>void}) {
    return (
        <div className={`size-full z-50 fixed top-0 left-0 flex justify-end bg-[#00000018] backdrop-blur-[2px] transition-all duration-300 ${!open ? 'translate-x-[100%] opacity-0':''}`}>
            <div onClick={close} className='absolute size-full'/>
            <section className="slide-left bg-white h-full w-[600px] p-4 flex flex-col gap-3 z-10">
                <div className="w-full flex flex-col gap-3 h-full">
                    <span className="py-2 pb-4 border-b flex items-center justify-between">
                        <p className='text-base'>Troubleshooting symptom uploads</p>
                        <button onClick={close} className="border rounded-lg size-8 flex items-center justify-center"><Plus className='size-4 rotate-45'/></button>
                    </span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ipsam magnam modi consequatur placeat reprehenderit voluptatum necessitatibus quisquam dicta officia nostrum omnis consectetur nisi corporis, in dolores ut perferendis quis eius alias libero iure tempore facilis. Ullam, sit, libero qui laborum laboriosam asperiores, vitae reprehenderit nostrum consequuntur dolorum ex debitis.</p>
                </div>
                <div className="py-2 pt-4 flex flex-col gap-2 border-t">
                    <p>Tags</p>
                    <span className="flex gap-2 flex-wrap">
                        {
                            ['Account', 'Fees'].map((tag, idx)=>{
                                return <div key={`tag-${idx}`} className="rounded px-3 py-1 bg-primary/20 text-primary text-sm">{tag}</div>
                            })
                        }
                    </span>
                </div>
            </section>
        </div>
    )
}

export default ViewArticle