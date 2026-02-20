'use client';

import PageWrapper from '@/components/PageWrapper';
import React, { useState } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronRight, Notebook, Search } from 'lucide-react';
import ViewArticle from './Includes/ViewArticle';

function SupportKnowledgeBase() {
    const [viewArticle, setViewArticle] = useState(false)
    return <PageWrapper content={<>
        <section className="border-b flex md:flex-row flex-col items-start  md:items-end justify-between gap-2">
            <div className="flex flex-col">
                <p className='text-base'>Knowledge Base</p>
                <p className="text-sm text-gray-600">Use internal FAQs and SOPs to guide patients and agents</p>
            </div>
            <div className="flex gap-3">
                <aside className="rounded-lg w-[300px] px-2 h-9 border flex items-center gap-2">
                    <Search className='size-5' />
                    <input type="text" placeholder='Search...' className="border-none outline-none text-sm w-full h-full" />
                </aside>
                <Popover>
                    <PopoverTrigger asChild>
                        <Button variant="outline" className='flex items-center gap-3 h-9 rounded-lg'>
                            All Categories
                            <ChevronDown className='size-5' />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent side={'bottom'} className="w-[650px] text-[14px] flex flex-col gap-3 mr-12 rounded-xl px-6">

                    </PopoverContent>
                </Popover>
            </div>
        </section>

        <section className="w-full flex flex-col gap-3">
            <p className="text-base">Popular Articles</p>
            <aside className="w-full grid min-[555px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 min-[1100px]:grid-cols-3 xl:grid-cols-4 gap-5">
                {
                    [1, 2, 3, 4, 5, 6, 7].map((art, idx) => {
                        return <div onClick={() => setViewArticle(true)} key={`art-${idx}`} className="border rounded-lg p-4 flex flex-col justify-between gap-2 w-full min-h-[170px] cursor-pointer hover:bg-primary-foreground">
                            <aside className="flex flex-col gap-1">
                                <span className="flex items-center gap-2">
                                    <div className="size-10 min-w-10 rounded-full bg-primary/15 text-primary flex items-center justify-center">
                                        <Notebook className='size-4' />
                                    </div>
                                    <p>How to subscribe to our service</p>
                                </span>
                                <p className="text-gray-800">Step-by-step guide for patients to subscribe to our healthcare services.</p>
                            </aside>
                            <span className="w-full flex items-center justify-between text-primary">
                                <p className="">FAQ</p>
                                <button className="flex items-center gap-2">View <ChevronRight className='w-4' /></button>
                            </span>
                        </div>
                    })
                }
            </aside>
        </section>

        <section className="flex flex-col gap-3">
            <p className="text-base">Recently Updated</p>
            <div className="w-full flex overflow-x-auto text-left text-sm">
                <table className="w-full text-left">
                    <thead>
                        <tr className='h-10 bg-gray-100'>
                            <td><div className="px-3">Article</div></td>
                            <td><div className="px-3">Category</div></td>
                            <td><div className="px-3">Last Updated</div></td>
                            <td><div className="px-3">Action</div></td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            [1, 2, 3].map((item, idx, arr) => {
                                return <tr key={'symptons' + idx} className={`${idx !== arr.length - 1 && 'border-b'}`}>
                                    <td>
                                        <div className="p-3 flex flex-col">
                                            New subscription process
                                        </div>
                                    </td>
                                    <td>
                                        <div className="p-3">
                                            FAQ
                                        </div>
                                    </td>
                                    <td><div className="p-3">2 hours ago</div></td>
                                    <td>
                                        <div className="p-3 flex gap-3 items-center">
                                            <Button variant={'outline'} className='rounded text-primary border-primary h-8'>View</Button>
                                        </div>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </section>

        <ViewArticle open={viewArticle} close={() => setViewArticle(false)} />
    </>} />
}

export default SupportKnowledgeBase