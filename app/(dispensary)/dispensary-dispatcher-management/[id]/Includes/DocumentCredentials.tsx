'use client';

import { Image } from 'lucide-react';
import React, { useState } from 'react'
import PreviewDoc from './PreviewDoc';
import Approve from './Approve';

function DocumentCredentials() {
    const [preview, setPreview] = useState(false)
  return (
    <div className='main-content flex flex-col gap-4 py-2'>
        <p>Uploaded Documents</p>

        <section className="w-full grid sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
            {
                [1,2,3,4,5].map((doc, idx)=>{
                    return <div key={`doc-${idx}`} className="border p-3 flex gap-2 rounded-lg">
                        <div className="rounded-xl size-10 min-w-10 bg-indigo-100 text-indigo-600 flex items-center justify-center">
                            <Image className='size-5'/>
                        </div>
                        <div className="flex flex-col text-sm">
                            <p className="text-sm">Live Selfie Capture.png</p>
                            <small className="text-gray-600">Uploaded on May, 12, 2023</small>
                            <span className="flex gap-4 py-1 text-sm">
                                <button className="underline text-primary">Download</button>
                                <button onClick={()=>setPreview(true)} className="underline text-primary">Preview</button>
                            </span>
                        </div>
                    </div>
                })
            }
        </section>

        <PreviewDoc open={preview} close={()=>setPreview(false)}/>
    </div>
  )
}

export default DocumentCredentials