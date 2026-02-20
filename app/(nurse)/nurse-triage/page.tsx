'use client';

import PageWrapper from '@/components/PageWrapper';
import { Button } from '@/components/ui/button';
import routes from '@/lib/routes';
import { Search } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

function NurseTriage() {

    return <PageWrapper content={<>
        <section className="pb-2 border-b flex items-center justify-between bg-white sticky top-0">
            Triage Queue  -  3 patients waiting
            <div className="flex gap-3">
                <aside className="rounded-lg w-[300px] px-2 h-9 border flex items-center gap-2">
                <Search className='size-5'/>
                <input type="text" placeholder='Search...' className="border-none outline-none text-sm w-full h-full" />
                </aside>
            </div>
        </section>

        <section className='flex flex-col gap-4'>
            {
                [1,2,3,4,5].map((triage, idx)=>{
                    return <div key={`g-${idx}`} className="w-full rounded border p-4 flex items-center justify-between">
                        <aside className="flex flex-col">
                            <p>Sarah Johnson (34y)</p>
                            <small>Chest pain. Cardiac symptoms</small>
                            <small className="text-gray-500">Experiencing sharp chest pain for 2 hours</small>
                        </aside>
                        <aside className="flex items-center gap-4 text-sm">
                            Waiting 5 min 
                            <Link href={`${routes.nurse.triage}/${idx}`}>
                                <Button variant={'outline'} className='border-primary text-primary rounded'>Start Triage</Button>
                            </Link>
                        </aside>
                    </div>
                })
            }
        </section>
    </>}/>
}

export default NurseTriage